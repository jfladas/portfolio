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
- [x] tapping/clicking an achievement toast opens `/achievements`

## Fixes / polish

- [x] expanded images/videos/presentations fill the screen and block page scrolling behind them
- [x] update the blob project with more info
- [x] make all projects carry about the same amount of info (consistent structure, less overfilled)
- [ ] rework the quote text design
- [ ] maybe switch to an icon set that fits the style better (e.g. a pixel icon set to match DotGothic16)

## Anonymous reactions on projects

- [ ] reactions above Links & Downloads (compact under the title on phones), no login
  - candidates (mock-ups: https://claude.ai/artifact/Hy3xpPid34v29841r19XvR): vibe tags, multi-tap heart,
    one-sticker-per-person board, 5x5 mood map revealed after voting
  - storage options (checked 2026-10-23):
    - [CounterAPI](https://docs.counterapi.dev) v2: v1 shut down 2026-08-07. Needs an account + workspace; 600 req/min per counter path;
      free plan: 1,000 increments/day (reads free), only 5 public counters; private counters need a key, which must not be in browser code
    - [Abacus](https://github.com/JasonLovesDoggo/abacus): no account, but 30 requests per 10 s per visitor IP, no decrement
      without an admin key (so no "remove my reaction"), keys expire after 6 months without access, hobby project
    - Supabase free tier: one request for all counts, decrement possible, but more setup and idle projects pause after 7 days
  - remember in localStorage what a visitor picked (that's the only "once per visitor" protection)
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
