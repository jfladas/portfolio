# Deployment

## Site

- [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) builds with Vite and deploys `dist/` to GitHub Pages on every push to `main` (or by hand).
- The build also writes a page per project (`projects/<id>.html`, with its own link-preview tags) and `sitemap.xml`, see [`scripts/project-previews.js`](./scripts/project-previews.js).

## Large files

- **Git LFS** ([`.gitattributes`](./.gitattributes)) stores videos, images and PDFs; commit them normally. Install Git LFS once per machine before cloning, and add new file types to `.gitattributes` before adding the files.
- **Videos** are compressed before adding them (H.264, max 1920px, `faststart` so playback starts right away). Videos with sound get a mute button with `sound: true` on their `video` section in `src/data/projects.js`.
  ```
  ffmpeg -i input.mov -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -vf "scale='if(gt(iw,ih),min(1920,iw),-2)':'if(gt(iw,ih),-2,min(1920,ih))'" -c:a aac -b:a 128k -movflags +faststart output.mp4
  ```
- **Big downloads** (`.ppsx`, `.zip`, `.dmg`) would push the site over GitHub Pages' 1 GB limit, so they live on the GitHub Release `downloads` instead of in `src/projects/`. Upload them there (delete an old asset first to replace it) and link them with `releaseFile('Name.ext')` from [`src/data/releases.js`](./src/data/releases.js). GitHub turns spaces into dots (`Amorphous.Blob.dmg`), so use the name shown on the release page.

## Icons

- [`src/icons.js`](./src/icons.js) maps the site's icon names (`file-pdf`, `teammate`, `github`, …) to [Iconify](https://icones.js.org) icons: Remix Icon, Font Awesome 7 Brands for the GitHub, itch.io and Duolingo logos, and SVG Spinners. Templates use `<AppIcon icon="name" />`; `src/data/projects.js` uses the same names. `unplugin-icons` bundles them at build time.
- Achievement icons come from pixelarticons as raw SVG (`~icons/pixelarticons/<name>?raw`). The pixel hearts in `src/assets/icons/pixel/` load as `~icons/pixel/<name>`.
- Font Awesome's logos are CC BY 4.0: keep the icon credit in the footer.

## Project hearts

- Counted on [Abacus](https://jasoncameron.dev/abacus) (no account), in `jfladas-hearts` for the live site and `jfladas-hearts-dev` for `npm run dev`. Settings in [`src/data/hearts.js`](./src/data/hearts.js).
- The admin keys are secret and not in the repo. With the keys file, [`scripts/hearts-admin.mjs`](./scripts/hearts-admin.mjs) can `create`, `list`, `reset` and `set` counters, e.g. `node scripts/hearts-admin.mjs <keys.json> set live blob 12`.
- [`.github/workflows/hearts-backup.yml`](./.github/workflows/hearts-backup.yml) saves all live counts every Monday to `hearts.json` on the `reactions-data` branch. The site shows that backup when Abacus is down, and the weekly read keeps counters from expiring (Abacus deletes counters unread for 6 months).

## Live cards (Spotify, Duolingo, Switch)

Each card on the about page has a workflow that runs a script from `scripts/` and saves a JSON file to its own data branch, so the frequent updates stay out of `main`'s history. The site reads the file from `raw.githubusercontent.com`. If a fetch fails, the last file stays.

[Cronitor](https://cronitor.io) starts the workflows by sending a `repository_dispatch` (`update_spotify`, `update_duolingo` every 30 minutes, `update_switch` every 15 minutes); they can also be run by hand. GitHub pauses scheduled workflows after 60 days without activity in the repo (switch back on in the Actions tab).

| Card | Script | Branch | Needs |
| --- | --- | --- | --- |
| Spotify | [`fetch-spotify.mjs`](./scripts/fetch-spotify.mjs) | `spotify-data` | secrets `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` |
| Duolingo | [`fetch-duolingo.mjs`](./scripts/fetch-duolingo.mjs) | `duolingo-data` | nothing (public profile endpoint) |
| Switch | [`fetch-switch.mjs`](./scripts/fetch-switch.mjs) | `switch-data` | secret `NA_SESSION_TOKEN` |

- **Spotify:** the current track while one is playing, otherwise the last one played. If the branch can't be reached, the site falls back to `public/spotify.json` (not updated anymore).
- **Duolingo:** unofficial endpoint, can break without notice. The flame is lit once today's lesson is done (Swiss time); the card hides when the streak is 0 or the last practice is two or more days ago. Has an hourly GitHub schedule as a backup for Cronitor.
- **Switch:** [nxapi](https://github.com/samuelthomas2774/nxapi) logs in as a **second Nintendo account** that is friends with mine and reads my presence (unofficial, against Nintendo's terms; the main account never logs in). `NA_SESSION_TOKEN` comes from `nxapi nso auth` with the second account; if the workflow starts failing at login, log in again and replace the secret. nxapi is pinned to `1.6.1-next.257` because older versions stopped working after an app update; if it breaks again, look for a newer version. "Now playing" turns into "last played" when the data is over an hour old.
- **Locally:** `npm run duolingo` and `npm run switch` write `public/duolingo.json` and `public/switch.json` (not committed), which `npm run dev` reads instead. Edit `lastPracticed` or `lastPlayed` in them to try the other states.
