# Deployment

This project uses GitHub Actions for automation, with separate workflows for site deployment and Spotify data updates.

---

## Site Deployment

- Workflow: [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)
- Runs on every push to `main` (except changes to `public/spotify.json`).
- Installs dependencies, builds with Vite, and deploys the `dist/` folder to GitHub Pages.
- Can also be run manually via workflow dispatch.

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
