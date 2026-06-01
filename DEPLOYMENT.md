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

## Spotify Data Update

- Workflow: [`.github/workflows/spotify-data-update.yml`](./.github/workflows/spotify-data-update.yml)
- Fetches latest Spotify data and updates `public/spotify.json`.
- **Triggered by:**
  - Manual dispatch on GitHub
  - **Cronitor**: Periodically triggers a `repository_dispatch` event (`update_spotify`) to automate updates.
- Requires Spotify API credentials set as repository secrets.

---

For scheduling with Cronitor, configure it to POST a `repository_dispatch` event with type `update_spotify` to this repository.
