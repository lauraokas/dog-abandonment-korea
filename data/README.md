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
