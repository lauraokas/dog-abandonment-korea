# Dog Team 2: dog abandonment in Korea

Research and graph work in progress for a school project. The charts are plain HTML pages, so anyone can open them in a browser with no sign-in or download.

**Live site:** https://lauraokas.github.io/dog-abandonment-korea/

## Charts

| Chart | What it shows | Link |
|---|---|---|
| Dog Timeline (Korea and the Netherlands) | How dogs have been used, viewed and lived with, with one line per country on a shared year axis, every event coloured and labelled by category (role, meaning, ownership, law, breed, origins). Korea is the main timeline. A switch changes between a compressed and an even time scale | [open](https://lauraokas.github.io/dog-abandonment-korea/timeline.html) |
| Korean Dog Timeline (earlier version) | The roles dogs have played on the Korean peninsula, from the Neolithic to 2026, with the sources behind each entry | [open](https://lauraokas.github.io/dog-abandonment-korea/korean-dog-timeline.html) |
| Dutch Dog Timeline (earlier version) | How dogs were kept in the Netherlands and how the rules around owning them developed, from the 16th century to 2026 | [open](https://lauraokas.github.io/dog-abandonment-korea/dutch-dog-timeline.html) |

On the combined timeline each country is one line; markers are dated events or finds, and bars are things that lasted a long time. The timeline fills the whole window. Select a dot or bar and the details and sources open in a pop-up; Escape closes it, and the arrow keys move to the previous or next entry while it is open. Scroll to the bottom for "How to read this", a short disclaimer and key.

## What is in this repository

| File | Purpose |
|---|---|
| `index.html` | Landing page with links to every chart |
| `timeline.html` | The combined timeline. It reads every country file in `data/` |
| `data/` | One data file per country (`korea.js`, `netherlands.js`), the shared categories, and `data/README.md` explaining the format |
| `tools/check-data.py` | Checks the data files for mistakes before publishing |
| `korean-dog-timeline.html`, `dutch-dog-timeline.html` | The two earlier single-country timelines. They stay until the combined one replaces them |
| `theme.css` | Shared colours and fonts. Every page links to it, so changing a value there changes the whole site |
| `CLAUDE.md` | Style rules for working on the charts with Claude |

## Look and feel

- Roboto for all text.
- Very few borders; spacing and tone do most of the separating.
- The palette is yellow (accent), vintage grape, ivory, fiery terracotta and gunmetal. Surfaces are light violet tints, and each category has its own vivid colour, the same on every chart.
- Light mode only.
- Accessible contrast (WCAG AA): text is at least 4.5:1 and dots and bars at least 3:1 against what is behind them.
- Nothing relies on colour alone. On the combined timeline each country has its own marker shape (filled circle, open diamond), bar pattern (plain, striped) and label style, and each category sits in a named block. Countries are ticked with checkboxes, the time scale is a radio switch, and "Jump to" are plain links, so each control looks like what it does, click targets are at least 24 px, the whole page works from the keyboard.

## Adding a chart

**A new country on the timeline:** copy `data/netherlands.js` to a new file, replace its content, run `python3 tools/check-data.py`, and add one `<script src="data/your-country.js"></script>` line next to the others in `timeline.html`.

**A new, separate chart:**

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
