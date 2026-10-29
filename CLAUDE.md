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
- The project palette is Cobalt Blue `#1446a0`, Razzmatazz `#db3069`, Royal Gold `#f5d547`, Beige `#ebebd3`, Gunmetal `#3c3c3b` (the user's own choice; defined in `theme.css`). Stay inside it. Gold and razzmatazz are too light to read on beige, so `--ochre` and `--crimson` are darker versions, and `--purple`, `--green` and `--rust` are blends, used for the other categories. The user is still trying out palettes, so always use the variables and never hardcode colours.
- Category colours are fixed across all charts: origins `--c-origins` (cobalt), food `--c-food` (ochre), ritual `--c-ritual` (purple), hunting `--c-hunt` (gunmetal), bond `--c-bond` (crimson), breeds `--c-breed` (green), law `--c-law` (rust). Reuse the same colour for the same category on every chart.
- Accessibility is a requirement (WCAG AA): text 4.5:1 against its background, dots and bars 3:1 against the surfaces behind them. Bars are solid category colours with `--on-bar` text, never a pale tint under dark text. Check every new chart in light and dark mode (compute the ratios, do not judge by eye) and never use colour alone to tell categories apart: always add a label or legend.
- In dark mode, every category colour is swapped for a lighter version in `theme.css`, so keep using the variables.
- No borders on elements (the user's rule). Separate things with background tones instead: `--bg` (page), `--panel`, `--note-bg`, `--band`, `--line` (the deepest tone, for hover states and thin rails), and tints of the category colours. Use `color-mix` for tints. Selected states use a bigger size or a soft tinted halo, not an outline. The only outline allowed is the keyboard focus ring.
- To change the look of the whole site, edit `theme.css`. Layout styles that only one chart uses stay in that chart's file.
- New charts: self-contained HTML, lowercase hyphenated filename (`topic-name.html`), relative paths only (for example `data/results.csv`), no spaces in filenames. Match the existing timelines: Roboto (sans serif only, no serif fonts), light and dark mode, readable on a phone.

## Publishing
- Pushing to `main` updates the live site within a minute or two.
- Ask the user before every `git push`. Command-line git is not signed in to GitHub, so the user may need to click Push origin in GitHub Desktop.
