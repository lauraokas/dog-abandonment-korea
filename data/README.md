# Timeline data

Each country is one file in this folder, all in the same format. The combined timeline reads them, so adding a country means adding a file, not copying a page.

| File | What it holds |
|---|---|
| `categories.js` | The six categories every country shares: Origins, Role, Meaning, Ownership, Law, Breed |
| `korea.js` | Korea, the main country (`main: true`) |
| `netherlands.js` | The Netherlands |

After you edit anything here, run this in the project folder. It lists every mistake it can find:

```
python3 tools/check-data.py
```

## Statistics blocks

The statistics page (`statistics.html`) reads `data/stats/korea-acquaintance.js`. It lives in its own folder because it is not a country timeline, so `tools/check-data.py` does not read it. Each block under `blocks` becomes one chart, and a `<div data-block="name"></div>` in `statistics.html` says where it goes:

| Block shape | Fields | Draws |
|---|---|---|
| Bars | `series` (one or two labels, such as `["2024", "2025"]`), `max` (the value that fills the bar), `unit` (`"%"` or `""`), `groups` with `rows` of `{ label, v: [one value per series] }`; `null` shows "not asked" | A table with a bar per value. With two series the earlier is striped and the later solid |
| Line | `years` (two), `lines` of `{ label, v: [first, last] }` | Two points per line, with direct labels |
| Parts | `parts` of `{ label, v }` that add up to 100 | One bar split in parts, with a key |

Colour: `c` on a group, row, line, part or headline number names a palette colour (`vermilion`, `azure`, `teal`, `magenta`, `emerald`, `rose`, `indigo`); a row's own `c` wins over its group's. Keep one colour per route so it means the same thing in every chart: vermilion = acquaintance, azure = pet shop, teal = shelter, magenta = breeder and home litters. Never use yellow.

Every block also has `title`, `lead`, optional `notes` (small print under the chart) and `src` (the table and page in the report). Copy numbers exactly from the source and keep "derived" or "interpreted" in the text when a figure is not printed in the report.

## The categories

| Key | Name | What goes in it |
|---|---|---|
| `origins` | Origins | Where dogs came from: archaeology, genetics, early domestication |
| `role` | Role | What dogs were used for: work, hunting, guarding, draught, food |
| `meaning` | Meaning | How people saw dogs: ritual, status, symbols, art, companionship, attitudes |
| `ownership` | Ownership | How people kept dogs in practice: buying and selling, registering, tax, strays, shelters, abandonment |
| `law` | Law | Rules and policy: bans, protection acts, welfare law, dangerous-dog rules |
| `breed` | Breed | Native and named breeds, breeding rules, heritage protection |

## A country file

```js
window.DOGTL = window.DOGTL || { countries: [] };
window.DOGTL.countries.push({
  id: "korea",             // short, lowercase, unique
  name: "Korea",
  main: true,              // exactly one country is the main one
  intro: "One or two sentences about the timeline.",
  teamDoc: "https://...",  // the team's working document
  eras: [                  // this country's own named periods
    { n: "Joseon", from: 1392, to: 1910 }
  ],
  sources: {               // every source used, by a short key
    lee2013: { t: "Full citation", u: "https://...", k: "Journal article" }
  },
  events: [ /* see below */ ]
});
```

## An event

| Field | Required | Meaning |
|---|---|---|
| `id` | yes | Unique across all countries (Korea uses `e01…`, the Netherlands `n01…`) |
| `seq` | yes | Order in the country's list. Breaks ties when events share a year |
| `cat` | yes | One category key from the table above |
| `start` | yes | Year the event starts. Negative means BCE (`-250` is 250 BCE) |
| `end` | no | Year it ends, for something that lasted or for a rough range |
| `approx` | no | `true` when the dates are rough, such as "16th century" |
| `date` | yes | The date as the sources give it, shown to readers |
| `tag` | yes | Very short label for the marker |
| `bar` | no | Text inside a bar. Only for events that last. Needs `end` |
| `title`, `sum` | yes | Heading and one-sentence summary |
| `pts` | yes | List of what the sources say |
| `care` | no | The "Read with care" note: how solid the claim is |
| `team` | no | A note linking the entry to the team's own theme |
| `src` | yes | List of `{ s: "sourceKey", why: "why it matters" }` |
| `verify` | no | A note for the team that a date or category is a judgement call. Delete it once confirmed |
