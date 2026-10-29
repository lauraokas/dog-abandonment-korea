# Dog Team 2: dog abandonment in Korea

Research and graph work in progress for a school project. The charts are plain HTML pages, so anyone can open them in a browser with no sign-in or download.

**Live site:** https://lauraokas.github.io/dog-abandonment-korea/

## Charts

| Chart | What it shows | Link |
|---|---|---|
| Korean Dog Timeline | The roles dogs have played on the Korean peninsula, from the Neolithic to 2026, with the sources behind each entry | [open](https://lauraokas.github.io/dog-abandonment-korea/korean-dog-timeline.html) |
| Dutch Dog Timeline | How dogs were kept in the Netherlands and how the rules around owning them developed, from the 16th century to 2026 | [open](https://lauraokas.github.io/dog-abandonment-korea/dutch-dog-timeline.html) |

On each timeline, rows are roles, dots are dated events or finds, and bars are roles that lasted a long time. Select a dot or bar to read what the sources say. Arrow keys step through the entries.

## What is in this repository

| File | Purpose |
|---|---|
| `index.html` | Landing page with links to every chart |
| `korean-dog-timeline.html` | Korean timeline |
| `dutch-dog-timeline.html` | Dutch timeline |
| `theme.css` | Shared colours and fonts. Every page links to it, so changing a value there changes the whole site |
| `CLAUDE.md` | Style rules for working on the charts with Claude |

## Look and feel

- Roboto for all text.
- No borders: elements are separated by background tones.
- The palette is yellow (accent), vintage grape, ivory, fiery terracotta and gunmetal. Surfaces are light violet tints, and each category has its own vivid colour, the same on every chart.
- Light mode only.
- Accessible contrast (WCAG AA): text is at least 4.5:1 and dots and bars at least 3:1 against what is behind them.

## Adding a chart

1. Make a self-contained HTML file with a lowercase, hyphenated name, for example `topic-name.html`.
2. Add `<link rel="stylesheet" href="theme.css">` to it and use the colour and font variables from `theme.css` instead of typing colours.
3. Add a link to it in `index.html`.
4. Commit and push to `main`. The site updates within a minute or two.

## Viewing it on your own computer

Open `index.html` in a browser. To test the way it will look online, run this in the project folder and open http://localhost:8000:

```
python3 -m http.server 8000
```

## Publishing

The site is published with GitHub Pages from the `main` branch (Settings, then Pages).
