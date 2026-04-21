
### Deployment

Deployment is handled by GitHub Actions via [.github/workflows/spotify-update.yml](.github/workflows/spotify-update.yml).

- `git push` to `main` triggers build + deploy to GitHub Pages.
- Spotify data is fetched during the workflow and written to `dist/spotify.json`.
- `public/CNAME` and `public/404.html` are copied into `dist` by Vite automatically.