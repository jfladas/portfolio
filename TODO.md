# TODO

Order: 1. quote design & icon set, 2. Duolingo streak & Switch now playing, 3. new homepage & all-achievements reward.

## 1. Fixes / polish

- [x] expanded images/videos/presentations fill the screen and block page scrolling behind them
- [x] update the blob project with more info
- [x] make all projects carry about the same amount of info (consistent structure, less overfilled)
- [x] rework the quote text design (big pixel quote marks behind the text, fading out)
- [x] icon set: keeping Font Awesome Free for now (checked 2026-10-24: free sets like Phosphor/Tabler cover almost everything, but
  the Font Awesome look is preferred; if ever, Pro Sharp would cover all icons, Pro+ packs like Pixel/Mosaic are ~200 icons each and the
  terms after cancelling are unclear)

## 2. Integrations (like Spotify)

Same pattern as Spotify: an Action (triggered from outside like `update_spotify`) fetches the data
and writes a JSON file on a data branch that the site reads.

- [ ] Duolingo streak (and language): Duolingo's unofficial public profile endpoint, by username, no login.
      Unofficial, so it can break without notice; keep showing the last known streak if a fetch fails.
- [ ] Nintendo Switch now playing / recently played (try it, might not work out):
  - no official API; [nxapi](https://www.npmjs.com/package/@jigsaw/nxapi) reads friend presence through the
    Nintendo Switch Online app API (usually via a second Nintendo account that is friends with the main one)
  - the Action would run nxapi with the stored login token (as a secret) and save the game + time it was last seen
  - imitates Nintendo's app: against their terms, can break on app updates, only sees the Switch while it's online

## 3. Homepage at `/`

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

## 3. Achievements

- [ ] reward for unlocking all achievements. Ideas:
  - a secret theme (e.g. gold or holographic) that only shows up in the theme cycle afterwards
  - a "credits roll" with confetti, ending on a hidden page or easter-egg project
  - a generated certificate/badge (canvas → PNG download) with name and date
  - a hidden achievement that only appears in the list after the rest are done
- [x] tapping/clicking an achievement toast opens `/achievements`

## Anonymous reactions on projects

- [x] multi-tap heart on every project (Abacus, queued taps, cracks at 100 unsent; see "Project Hearts" in DEPLOYMENT.md)
  + heartbreaker achievement
  - later maybe: vibe tags or a mood map (mock-ups: https://claude.ai/artifact/Hy3xpPid34v29841r19XvR); would need
    decrement and many counters, so rather Supabase or an own Cloudflare Worker than Abacus
  - storage options (checked 2026-10-23):
    - [CounterAPI](https://docs.counterapi.dev) v2: v1 shut down 2026-08-07. Needs an account + workspace; 600 req/min per counter path;
      free plan: 1,000 increments/day (reads free), only 5 public counters; private counters need a key, which must not be in browser code
    - [Abacus](https://github.com/JasonLovesDoggo/abacus): no account, but 30 requests per 10 s per visitor IP, no decrement
      without an admin key (so no "remove my reaction"), keys expire after 6 months without access, hobby project
    - Supabase free tier: one request for all counts, decrement possible, but more setup and idle projects pause after 7 days
  - ad blockers: the AdGuard Social filter hides `.heart-button` everywhere, so avoid "social" class names
    (like-button, share-button, heart-button…)
