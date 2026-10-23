# Deployment

This project uses GitHub Actions for automation, with separate workflows for site deployment and Spotify data updates.

---

## Site Deployment

- Workflow: [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)
- Runs on every push to `main` (except changes to `public/spotify.json`).
- Installs dependencies, builds with Vite, and deploys the `dist/` folder to GitHub Pages.
- Can also be run manually via workflow dispatch.

---

## Git LFS for Large Assets

- For normal work, you can keep using GitHub Desktop the way you always do: edit files, commit, and push.
- Git LFS is already configured in [`.gitattributes`](./.gitattributes), so large project assets are handled automatically when they match the tracked file types.
- Install Git LFS once on each machine and run `git lfs install` once per local clone before you start working.
- If you add a new large file with a tracked extension, just add and commit it normally in GitHub Desktop.
- If you edit an existing large file, stage and commit it normally as well; Git LFS takes care of the storage.
- If you introduce a new large file type, update [`.gitattributes`](./.gitattributes) first, then add or re-add the affected files.
- On a new machine, install Git LFS before cloning or pulling so the real media is downloaded instead of only the pointer files.
- GitHub Pages now checks out LFS objects during deployment, so the published site should load the real videos and downloads instead of broken placeholders.

---

## Large Downloads (GitHub Release)

GitHub Pages sites must stay under 1 GB, so big downloads (`.ppsx`, `.zip`, `.dmg`) are not part of the site build.
They are attached to a GitHub Release with the tag `downloads`, and the site links straight to them, so clicking a download button still starts the download right away.

- Links are built with `releaseFile('name')` from [`src/data/releases.js`](./src/data/releases.js).
- To add or replace a download:
  1. On GitHub, open **Releases**, then edit the `downloads` release.
  2. Drag the file into the assets area (to replace a file, delete the old asset first), then click **Update release**.
  3. Reference it in `src/data/projects.js` as `releaseFile('FileName.ext')`.
- GitHub replaces spaces in uploaded file names with dots (`Amorphous Blob.dmg` becomes `Amorphous.Blob.dmg`), so use the name exactly as it shows on the release page.
- Do not put these files in `src/projects/`; everything in those folders is bundled into the site.

Videos, images and PDFs stay in `src/projects/`. Videos are compressed before adding them (H.264, max 1920px on the long side, `-movflags +faststart` so playback starts before the whole file has loaded):

```
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -vf "scale='if(gt(iw,ih),min(1920,iw),-2)':'if(gt(iw,ih),-2,min(1920,ih))'" -c:a aac -b:a 128k -movflags +faststart output.mp4
```

---

## Project Hearts

- The heart on each project page counts on [Abacus](https://jasoncameron.dev/abacus), a free counter service without an account. Settings are in [`src/data/hearts.js`](./src/data/hearts.js), the queue and sending in [`src/composables/useHearts.js`](./src/composables/useHearts.js).
- Two namespaces: `jfladas-hearts` for the live site and `jfladas-hearts-dev` for `npm run dev`, so testing never changes the live counts.
- Every counter was created with an admin key. The keys are **not** in the repo (they're secret); keep the keys file somewhere private. With it:
  ```
  node scripts/hearts-admin.mjs <keys.json> list dev
  node scripts/hearts-admin.mjs <keys.json> reset dev all
  node scripts/hearts-admin.mjs <keys.json> set live blob 12
  ```
  `create live|dev` creates the counters for new projects (existing ones are skipped).
- Backup: [`.github/workflows/hearts-backup.yml`](./.github/workflows/hearts-backup.yml) saves all live counts every Monday to `hearts.json` on the `reactions-data` branch (also runnable by hand). The site shows that backup when Abacus can't be reached, and the weekly read keeps counters from expiring (Abacus deletes counters nobody reads for 6 months).

---

## Spotify Data Update

- Workflow: [`.github/workflows/spotify.yml`](./.github/workflows/spotify.yml)
- Fetches latest Spotify data and commits it as `spotify.json` to the separate `spotify-data` branch, so the frequent updates don't fill up the history of `main`.
- The site reads it from `https://raw.githubusercontent.com/jfladas/portfolio/spotify-data/spotify.json`. If that fails, it falls back to the copy bundled from `public/spotify.json` (not updated anymore).
- **Triggered by:**
  - Manual dispatch on GitHub
  - **Cronitor**: Periodically triggers a `repository_dispatch` event (`update_spotify`) to automate updates.
- Requires Spotify API credentials set as repository secrets.

---

For scheduling with Cronitor, configure it to POST a `repository_dispatch` event with type `update_spotify` to this repository.
