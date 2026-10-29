# Dog Team 2: research and graph work in progress

School project with static HTML charts, published with GitHub Pages at
https://lauraokas.github.io/dog-abandonment-korea/

## Files
- `index.html`: landing page that links to every chart. Add a link here for each new chart.
- `dutch-dog-timeline.html`, `korean-dog-timeline.html`: the timelines.
- `theme.css`: shared colours, fonts and dark mode. All pages link to it.

## Keeping the style consistent
- Every page must include `<link rel="stylesheet" href="theme.css">`.
- Use the CSS variables from `theme.css` (`--bg`, `--panel`, `--ink`, `--ink2`, `--line`, `--accent`, `--f-display`, `--f-body`, `--f-mono`). Do not hardcode colours or font names.
- The project palette is Carbon Black `#191716`, Sunflower Gold `#e6af2e`, Soft Linen `#e0e2db`, Indigo Velvet `#3d348b`, Khaki Beige `#beb7a4` (the user's own choice; `--carbon`, `--gold`, `--linen`, `--indigo`, `--khaki` in `theme.css`). Stay inside it. Only gold and indigo are strong hues, so `--violet`, `--bronze`, `--stone` and `--mauve` are blends of palette colours, used for the other categories. The user is still trying out palettes, so always use the variables and never hardcode colours.
- Category colours are fixed across all charts: origins `--c-origins` (indigo), food `--c-food` (gold), ritual `--c-ritual` (violet), hunting `--c-hunt` (carbon), bond `--c-bond` (bronze), breeds `--c-breed` (stone), law `--c-law` (mauve). Reuse the same colour for the same category on every chart.
- Never use colour alone to tell categories apart: always add a label or legend. Several category colours are neutral tones that are close to each other.
- In dark mode, the dark and mid-tone category colours are swapped for lighter versions in `theme.css`, so keep using the variables.
- No borders on elements (the user's rule). Separate things with background tones instead: `--bg` (page), `--panel`, `--note-bg`, `--band`, `--line` (the deepest tone, for hover states and thin rails), and tints of the category colours. Use `color-mix` for tints. Selected states use a bigger size or a soft tinted halo, not an outline. The only outline allowed is the keyboard focus ring.
- To change the look of the whole site, edit `theme.css`. Layout styles that only one chart uses stay in that chart's file.
- New charts: self-contained HTML, lowercase hyphenated filename (`topic-name.html`), relative paths only (for example `data/results.csv`), no spaces in filenames. Match the existing timelines: Roboto (sans serif only, no serif fonts), light and dark mode, readable on a phone.

## Publishing
- Pushing to `main` updates the live site within a minute or two.
- Ask the user before every `git push`. Command-line git is not signed in to GitHub, so the user may need to click Push origin in GitHub Desktop.
