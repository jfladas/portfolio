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

- Large project assets are tracked with Git LFS through [`.gitattributes`](./.gitattributes).
- Install Git LFS once on each machine, then run `git lfs install` inside this repository.
- To add a new large file, add it normally with `git add`. Git will store it as an LFS pointer if its extension matches the rules in [`.gitattributes`](./.gitattributes).
- To convert an existing committed file to LFS, run `git add --renormalize "path/to/file"` and commit the result.
- To edit a large file later, change it as usual and stage it with `git add`; Git LFS will handle the storage behind the scenes.
- If you introduce a new large asset type, update [`.gitattributes`](./.gitattributes) with a matching pattern, commit that change, and then re-add the affected files.
- On other machines, install Git LFS before cloning or pulling so the pointer files are replaced with the real assets automatically.

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
