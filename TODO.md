# TODO

## Homepage at `/`

Right now `/` redirects to `/about`. When the homepage is built:

- [ ] remove the `/` redirect in `src/router/index.js` (and decide where unknown URLs should go: home or about)
- [ ] set the canonical in `index.html` to `https://www.jfladas.com/` (currently `/about`)
- [ ] add `/` to the sitemap URLs in `scripts/project-previews.js`
- [ ] give it a title (`siteTitle` in `src/data/titles.js`) and update the logo/nav highlighting in `App.vue`

Ideas:

- game-style title screen: big pixel "jfladas" in DotGothic16, blinking "press any key", menu items about / projects / achievements
- the logo as a toy: letters you can drag, throw or knock over (simple physics), with a hidden achievement for messing with them
- a blob (amorphous blob project) that follows or reacts to the cursor and morphs into the nav links
- a small live dashboard: now playing (Spotify), latest project, achievement progress, local time in Lucerne

## Achievements

- [ ] reward for unlocking all achievements. Ideas:
  - a secret theme (e.g. gold or holographic) that only shows up in the theme cycle afterwards
  - a "credits roll" with confetti, ending on a hidden page or easter-egg project
  - a generated certificate/badge (canvas → PNG download) with name and date
  - a hidden achievement that only appears in the list after the rest are done
- [ ] tapping/clicking an achievement toast opens `/achievements`

## Fixes / polish

- [ ] fullscreen should be real fullscreen (Fullscreen API) and block page scrolling behind it
- [ ] update the blob project with more info
- [ ] make all projects carry about the same amount of info (consistent structure, less overfilled)
- [ ] rework the quote text design
- [ ] maybe switch to an icon set that fits the style better (e.g. a pixel icon set to match DotGothic16)

## Anonymous reactions on projects

- [ ] a row of a few emoji under each project, with counts, no login
  - counts stored with a free counter API, no account or setup needed:
    [CounterAPI](https://counterapi.dev) v1 (`GET https://api.counterapi.dev/v1/jfladas/<project>-<emoji>/up` adds one)
    or [Abacus](https://github.com/JasonLovesDoggo/abacus) (`/hit/<namespace>/<key>`)
  - remember in localStorage which emoji a visitor already clicked, so each browser counts once per emoji
  - catch: counts are public URLs, so someone determined could inflate them; the free service could also go away
    (Abacus is open source and can be self-hosted if needed)
  - maybe an achievement for reacting

## Integrations (like Spotify)

Same pattern as Spotify: an Action (triggered from outside like `update_spotify`) fetches the data
and writes a JSON file on a data branch that the site reads.

- [ ] Duolingo streak (and language): Duolingo's unofficial public profile endpoint, by username, no login.
      Unofficial, so it can break without notice; keep showing the last known streak if a fetch fails.
- [ ] Nintendo Switch now playing / recently played (try it, might not work out):
  - no official API; [nxapi](https://www.npmjs.com/package/@jigsaw/nxapi) reads friend presence through the
    Nintendo Switch Online app API (usually via a second Nintendo account that is friends with the main one)
  - the Action would run nxapi with the stored login token (as a secret) and save the game + time it was last seen
  - imitates Nintendo's app: against their terms, can break on app updates, only sees the Switch while it's online
