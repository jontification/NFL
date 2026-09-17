# Jon's NFL Betting Dashboard

Static GitHub Pages dashboard for the 2026 NFL betting experiment.

## Upload to GitHub root
Upload these files to the repository root:
- `index.html`
- `game.html`
- `styles.css`
- `data.js`
- `app.js`
- `game.js`

GitHub Pages should be set to **main / (root)**.

## Updating each week
The site is data-driven. Most weekly content lives in `data.js`. The main card automatically lists every game, and each **View** link opens a detailed game page driven by the same data.

Statuses:
- Green = BET
- Gray = WATCH
- Red = PASS

Early reads are not official bets until the full audit is complete.


## Player Props
The dashboard now includes `props.html` and `prop.html`, with data-driven prop deep dives and a mandatory Role & Context Audit.


## v7 fix
Player Props shortlist now includes Medium-High confidence recommendations (including Josh Allen OVER 6.5 rushing attempts), and detailed WHY text is synchronized with the live analysis in data.js. Cache-busting version bumped to v7.
