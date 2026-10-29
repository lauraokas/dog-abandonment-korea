# Dog Team 2: research and graph work in progress

School project with static HTML charts, published with GitHub Pages at
https://lauraokas.github.io/dog-abandonment-korea/

## Files
- `index.html`: landing page that links to every chart. Add a link here for each new chart.
- `dutch-dog-timeline.html`, `korean-dog-timeline.html`: the timelines.
- `theme.css`: shared colours and fonts (light only). All pages link to it.

## Keeping the style consistent
- Every page must include `<link rel="stylesheet" href="theme.css">`.
- Use the CSS variables from `theme.css` (`--bg`, `--panel`, `--ink`, `--ink2`, `--line`, `--accent`, `--f-display`, `--f-body`, `--f-mono`). Do not hardcode colours or font names.
- The project palette is Yellow `#fffc31`, Vintage Grape `#5c415d`, Ivory `#f6f7eb`, Fiery Terracotta `#e94f37`, Gunmetal `#393e41` (the user's own choice; defined in `theme.css`). Ivory, the lightest, is the page background (`--bg`, a light `#fcfcf6`). Stay inside the palette. Yellow and terracotta are too light to read on the surfaces, so `--ochre` and `--brick` are darker versions, and `--plum`, `--olive` and `--wine` are blends, used for the other categories. The user is still trying out palettes, so always use the variables and never hardcode colours.
- Category colours are fixed across all charts: origins `--c-origins` (grape), food `--c-food` (brick), ritual `--c-ritual` (ochre), hunting `--c-hunt` (gunmetal), bond `--c-bond` (plum), breeds `--c-breed` (olive), law `--c-law` (wine). Reuse the same colour for the same category on every chart.
- Yellow is the accent colour (`--highlight`), used throughout as a fill behind dark `--ink` text: the accent bar under each title, the "work in progress" tag, hover states on buttons and links, the date in the detail panel and the label of the selected marker. Never use yellow as text or as a thin line on ivory (1.06:1), and never as a category colour.
- Accessibility is a requirement (WCAG AA): text 4.5:1 against its background, dots and bars 3:1 against the surfaces behind them. Bars are solid category colours with `--on-bar` text, never a pale tint under dark text. Check every new chart (compute the ratios, do not judge by eye) and never use colour alone to tell categories apart: always add a label or legend.
- Light only: the user does not want a dark mode, so do not add `prefers-color-scheme` or dark variants.
- No borders on elements (the user's rule). Separate things with background tones instead: `--bg` (page), `--panel`, `--note-bg`, `--band`, `--line` (the deepest tone, for hover states and thin rails), and tints of the category colours. Use `color-mix` for tints. Selected states use a bigger size or a soft tinted halo, not an outline. The only outline allowed is the keyboard focus ring.
- To change the look of the whole site, edit `theme.css`. Layout styles that only one chart uses stay in that chart's file.
- New charts: self-contained HTML, lowercase hyphenated filename (`topic-name.html`), relative paths only (for example `data/results.csv`), no spaces in filenames. Match the existing timelines: Roboto (sans serif only, no serif fonts), readable on a phone.

## Publishing
- Pushing to `main` updates the live site within a minute or two.
- Ask the user before every `git push`. Command-line git is not signed in to GitHub, so the user may need to click Push origin in GitHub Desktop.
