# Ideas

Things that could be added later. Finished work is not listed here.

## Integrations

Live cards work like Spotify, Duolingo and Switch: a scheduled workflow fetches the data and commits it to its own branch (see [DEPLOYMENT.md](DEPLOYMENT.md#live-cards-spotify-duolingo-switch)).

- more live cards for services that have an API, same pattern
- things without an API, added by hand. Options to look at:
  - a git-based CMS such as Decap CMS: a web UI that edits JSON/YAML files in the repo and commits them, so the data stays in git
  - a spreadsheet or Notion database read by a scheduled fetch script, so an update is just an edit in an app
  - a small private page with a token that writes the JSON to the data branch through the GitHub API

## Homepage at `/`

Right now `/` redirects to `/about`. When the homepage is built:

- [ ] remove the `/` redirect in `src/router/index.js` (and decide where unknown URLs should go: home or about)
- [ ] set the canonical in `index.html` to `https://www.jfladas.com/` (currently `/about`)
- [ ] add `/` to the sitemap URLs in `scripts/project-previews.js`
- [ ] give it a title (`siteTitle` in `src/data/titles.js`) and update the logo/nav highlighting in `App.vue`; about
      currently uses `siteTitle` as the stand-in homepage (App.vue + scripts/project-previews.js), switch it back to `pageTitle('about')`

Ideas:

- a live dashboard: a place where the live cards (Spotify, Duolingo, Switch, etc.) could live, possibly with updates or posts on my current projects

## Achievements reward

Unlocking all achievements unlocks:

- a custom theme builder UI: pick colors and save the theme in localStorage
- a downloadable certificate: generated as a PNG (canvas) with name and date
