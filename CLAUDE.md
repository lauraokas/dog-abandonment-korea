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
- Category colours are fixed across all charts: origins `--c-origins`, food `--c-food`, ritual `--c-ritual`, hunting `--c-hunt`, bond `--c-bond`, breeds `--c-breed`, law `--c-law`. Reuse the same colour for the same category on every chart.
- To change the look of the whole site, edit `theme.css`. Layout styles that only one chart uses stay in that chart's file.
- New charts: self-contained HTML, lowercase hyphenated filename (`topic-name.html`), relative paths only (for example `data/results.csv`), no spaces in filenames. Match the existing timelines: IBM Plex fonts, light and dark mode, readable on a phone.

## Publishing
- Pushing to `main` updates the live site within a minute or two.
- Ask the user before every `git push`. Command-line git is not signed in to GitHub, so the user may need to click Push origin in GitHub Desktop.
