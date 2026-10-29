// Shared data for the dog timeline. One file per country, same format.
// Years: negative = BCE. See data/README.md for every field.
window.DOGTL = window.DOGTL || { countries: [] };
window.DOGTL.categories = [
  {
    "k": "origins",
    "n": "Origins",
    "d": "Where dogs came from: archaeology, genetics, early domestication"
  },
  {
    "k": "role",
    "n": "Role",
    "d": "What dogs were used for: work, hunting, guarding, draught, food"
  },
  {
    "k": "meaning",
    "n": "Meaning",
    "d": "How people saw dogs: ritual, status, symbols, art, companionship, attitudes"
  },
  {
    "k": "ownership",
    "n": "Ownership",
    "d": "How people kept dogs in practice: buying and selling, registering, tax, strays, shelters, abandonment"
  },
  {
    "k": "law",
    "n": "Law",
    "d": "Rules and policy: bans, protection acts, welfare law, dangerous-dog rules"
  },
  {
    "k": "breed",
    "n": "Breed",
    "d": "Native and named breeds, breeding rules, heritage protection"
  }
];
