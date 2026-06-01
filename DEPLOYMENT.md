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

- Large files are tracked with Git LFS through [`.gitattributes`](./.gitattributes).
- After installing Git LFS once on your machine, run `git lfs install` in this repository.
- To convert the existing large files into an LFS object, re-add them once with `git add` and then commit as usual.
- If you clone this repository on another device, install Git LFS there before pulling.

---

## Spotify Data Update

- Workflow: [`.github/workflows/spotify-data-update.yml`](./.github/workflows/spotify-data-update.yml)
- Fetches latest Spotify data and updates `public/spotify.json`.
- **Triggered by:**
  - Manual dispatch on GitHub
  - **Cronitor**: Periodically triggers a `repository_dispatch` event (`update_spotify`) to automate updates.
- Requires Spotify API credentials set as repository secrets.

---

For scheduling with Cronitor, configure it to POST a `repository_dispatch` event with type `update_spotify` to this repository.
