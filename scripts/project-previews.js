// Vite build plugin: writes a static copy of index.html for each page (projects/<id>.html, about.html,
// achievements.html). GitHub Pages serves these for /projects/<id> etc. with a normal 200 response instead of
// going through 404.html, and each copy carries its own link-preview tags (title, description, cover image),
// so links shared on LinkedIn, WhatsApp etc. show the actual project. The app itself loads exactly as before.
// Also writes sitemap.xml listing all of these pages.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { localize } from '../src/data/localize.js'
import { pageTitle } from '../src/data/titles.js'

const siteUrl = 'https://www.jfladas.com'

// Old project ids that redirect to a renamed project (see src/router/index.js) get that project's preview too
const renamedProjects = { bachelor: 'blob' }

// projects.js uses Vite's import.meta.glob, so outside of Vite it is evaluated with a stand-in
// that returns each file's path; covers are then matched to their built (hashed) file names.
const loadProjects = async (root) => {
    const dataDir = path.join(root, 'src/data')
    const source = fs.readFileSync(path.join(dataDir, 'projects.js'), 'utf8')
        .replace(/from '\.\/([\w-]+\.js)'/g, (_, file) => `from '${pathToFileURL(path.join(dataDir, file)).href}'`)
        .replace(/import\.meta\.glob\(/g, '__glob(')
    const stub = 'const __glob = () => new Proxy({}, { get: (_, file) => ({ default: String(file) }) });\n'

    const cacheDir = path.join(root, 'node_modules/.cache/project-previews')
    fs.mkdirSync(cacheDir, { recursive: true })
    const file = path.join(cacheDir, `projects-${Date.now()}.mjs`)
    fs.writeFileSync(file, stub + source)

    try {
        return await import(pathToFileURL(file).href)
    } finally {
        fs.rmSync(file, { force: true })
    }
}

const escapeAttribute = (text) => String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')

const setMeta = (html, attribute, key, value) => {
    const pattern = new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*(")`)

    if (!pattern.test(html)) {
        throw new Error(`project-previews: <meta ${attribute}="${key}"> not found in index.html`)
    }

    return html.replace(pattern, `$1${escapeAttribute(value)}$2`)
}

const replaceOnce = (html, pattern, replacement, name) => {
    if (!pattern.test(html)) {
        throw new Error(`project-previews: ${name} not found in index.html`)
    }

    return html.replace(pattern, replacement)
}

const createPage = (html, { url, title, ogTitle, description, image, imageAlt }) => {
    let page = setMeta(html, 'property', 'og:url', siteUrl + url)
    page = replaceOnce(page, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${siteUrl + url}$2`, '<link rel="canonical">')
    page = replaceOnce(page, /<title>[^<]*<\/title>/, `<title>${escapeAttribute(title)}</title>`, '<title>')

    if (ogTitle) {
        page = setMeta(page, 'property', 'og:title', ogTitle)
    }

    if (description) {
        page = setMeta(page, 'name', 'description', description)
        page = setMeta(page, 'property', 'og:description', description)
    }

    if (image) {
        page = setMeta(page, 'property', 'og:image', siteUrl + image)
        page = setMeta(page, 'property', 'og:image:alt', imageAlt)
        // the default size tags describe portfolio.png, not the cover
        page = page.replace(/\s*<meta\s+property="og:image:(width|height)"\s+content="[^"]*">/g, '')
    }

    return page
}

export const projectPreviews = () => {
    let root

    return {
        name: 'project-previews',
        apply: 'build',
        configResolved(config) {
            root = config.root
        },
        async writeBundle(options, bundle) {
            const index = bundle['index.html']

            if (!index) {
                return
            }

            const html = String(index.source)
            const write = (fileName, source) => {
                const file = path.join(options.dir, fileName)
                fs.mkdirSync(path.dirname(file), { recursive: true })
                fs.writeFileSync(file, source)
            }

            // source file path (relative to the project root) -> built file name
            const builtFiles = new Map()

            for (const file of Object.values(bundle)) {
                for (const name of (file.type === 'asset' && file.originalFileNames) || []) {
                    let source = path.relative(root, path.resolve(root, name)).replace(/\\/g, '/')
                    // on Windows, vite-imagetools (resized images) reports paths like ../../../src/projects/x/cover.jpg
                    const withoutParents = source.replace(/^(\.\.\/)+/, '')

                    if (source !== withoutParents && fs.existsSync(path.join(root, withoutParents))) {
                        source = withoutParents
                    }

                    builtFiles.set(source, file.fileName)
                }
            }

            const { projects } = await loadProjects(root)

            const sitemapUrls = ['/about', '/projects', '/achievements']

            write('about.html', createPage(html, { url: '/about', title: pageTitle('about') }))
            write('achievements.html', createPage(html, { url: '/achievements', title: pageTitle('achievements') }))
            // with a projects/ folder, GitHub Pages redirects /projects to /projects/, which is served from here
            write('projects/index.html', createPage(html, { url: '/projects', title: pageTitle('projects') }))

            for (const project of localize(projects, 'en')) {
                const cover = project.cover && builtFiles.get(path.posix.join('src/data', project.cover))

                if (!cover) {
                    this.warn(`no built cover image found for project "${project.id}"`)
                }

                const page = createPage(html, {
                    url: `/projects/${project.id}`,
                    title: pageTitle(project.name),
                    ogTitle: pageTitle(project.name),
                    description: project.description,
                    image: cover && `/${cover}`,
                    imageAlt: project.name
                })

                write(`projects/${project.id}.html`, page)
                sitemapUrls.push(`/projects/${project.id}`)

                for (const [oldId, newId] of Object.entries(renamedProjects)) {
                    if (newId === project.id) {
                        write(`projects/${oldId}.html`, page)
                    }
                }
            }

            write('sitemap.xml', [
                '<?xml version="1.0" encoding="UTF-8"?>',
                '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
                ...sitemapUrls.map((url) => `  <url><loc>${siteUrl + url}</loc></url>`),
                '</urlset>',
                ''
            ].join('\n'))
        }
    }
}
