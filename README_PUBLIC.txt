# StatPig NFL analytics

Public website for [statpig.com](https://statpig.com), served by GitHub Pages
from `main` at the repository root.

The dashboard, player prop research, performance ledger, and methodology
pages use a sanitized exported snapshot in `data.js`. Export timestamps and
evidence limitations are visible on the site. The snapshot is not a live odds feed.

## Decision discipline

- **PASS** (red): no actionable recommendation.
- **WATCH** (green): research with explicit conditions; not an official bet.
- **BET** (gold): must satisfy the existing audit and decision gates.
- Missing, stale, conflicting, or incomplete evidence fails closed.
- Official recommendations and wagers require the owner's explicit approval.

Performance comes from the recorded ledger. Historical results remain separate
from prospective records; design mockup win rates and ROI are not published as facts.

## Publishing

Develop and test in the separate local private workspace. Export the public data
projection, then publish only the contents of its `public/` directory here.
Update all website assets together, preserving `CNAME` and `.nojekyll`.
Use a branch and review the change before merging to `main`.

Never upload private databases, raw evidence, recovery checkpoints, API keys,
administration tokens, or private recorder configuration. The public website
has no recorder write capability. `config.js` currently selects the self-contained
exported snapshot.
