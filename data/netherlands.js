// Shared data for the dog timeline. One file per country, same format.
// Years: negative = BCE. See data/README.md for every field.
window.DOGTL = window.DOGTL || { countries: [] };
window.DOGTL.countries.push({
  "id": "netherlands",
  "name": "Netherlands",
  "main": false,
  "intro": "What dogs were kept for in the Netherlands, and how the rules around owning them developed, from the 16th century to 2026. Select any marker or bar for the detail and the sources behind it.",
  "teamDoc": "https://docs.google.com/document/d/19Hi8dxO-eTzSFt1fi5tv5RR4zIk3ii065Z6KhVJPNDA/edit",
  "eras": [
    {
      "n": "Early modern",
      "from": 1500,
      "to": 1864
    },
    {
      "n": "Welfare societies",
      "from": 1864,
      "to": 1945
    },
    {
      "n": "Animal protection law",
      "from": 1961,
      "to": 1993
    },
    {
      "n": "Registration and breeding rules",
      "from": 2008,
      "to": 2027
    }
  ],
  "sources": {
    "stern": {
      "t": "Sternheim, I. (March 2012). Zwerfhonden in Nederland [Stray dogs in the Netherlands]. Dogresearch, Amsterdam (hosted by Hondenbescherming).",
      "u": "https://hondenbescherming.nl/media/filer_public/46/cd/46cd52b0-9a4c-4a9d-a235-475f680b0320/hoe-nederland-zwerfhondenarm-is-geworden-sternheim-2012.pdf",
      "k": "Report (not peer-reviewed)"
    },
    "bussum": {
      "t": "Historische Kring Bussum (21 July 2021). Newspaper column on dog carts (hondenkarren).",
      "u": "https://www.historischekringbussum.nl/images/Krant/21072021_BUS_017.pdf",
      "k": "Local history society"
    },
    "wikidb": {
      "t": "Dutch Society for the Protection of Animals (Wikipedia).",
      "u": "https://en.wikipedia.org/wiki/Dutch_Society_for_the_Protection_of_Animals",
      "k": "Reference site"
    },
    "stb1961": {
      "t": "Wet van 25 januari 1961 (Wet op de dierenbescherming). Staatsblad 1961, 19.",
      "u": "https://zoek.officielebekendmakingen.nl/stb-1961-19.pdf",
      "k": "Law text (primary)"
    },
    "stb1992": {
      "t": "Wet van 24 september 1992, Gezondheids- en welzijnswet voor dieren. Staatsblad 1992, 585.",
      "u": "https://zoek.officielebekendmakingen.nl/stb-1992-585.pdf",
      "k": "Law text (primary)"
    },
    "kooi": {
      "t": "Kooikerhondje (Wikipedia).",
      "u": "https://en.wikipedia.org/wiki/Kooikerhondje",
      "k": "Reference site"
    },
    "kees": {
      "t": "Keeshond (Wikipedia).",
      "u": "https://en.wikipedia.org/wiki/Keeshond",
      "k": "Reference site"
    },
    "nltax": {
      "t": "Hondenbelasting (Dutch Wikipedia).",
      "u": "https://nl.wikipedia.org/wiki/Hondenbelasting",
      "k": "Reference site"
    },
    "bb2025": {
      "t": "De Kluis, E. (15 January 2025). Steeds minder gemeenten heffen hondenbelasting. Binnenlands Bestuur.",
      "u": "https://www.binnenlandsbestuur.nl/financien/steeds-minder-gemeenten-heffen-hondenbelasting",
      "k": "Trade press"
    },
    "rvo": {
      "t": "Rijksdienst voor Ondernemend Nederland (RVO). Identificatie en registratie honden (page checked 4 May 2026).",
      "u": "https://www.rvo.nl/onderwerpen/identificatie-en-registratie-honden",
      "k": "Government page"
    },
    "hvh": {
      "t": "Tijdlijn kortsnuiten (timeline on short-snouted dogs, published 3 Sept 2020), houdenvanhonden.nl.",
      "u": "https://acc.houdenvanhonden.nl/contentassets/177368bb35b647b49f48d234cdf37eaa/tijdlijn-kortsnuiten-publicatie-03-09-2020.pdf",
      "k": "Timeline (kennel-club view)"
    },
    "obs": {
      "t": "Boskovic, I. (12 December 2016). The dog days are over? Observant.",
      "u": "https://www.observantonline.nl/english/Home/Articles/id/41531/the-dog-days-are-over",
      "k": "Opinion column"
    },
    "dutchrev": {
      "t": "Sawbridge, F. (updated 27 August 2026). How did the Netherlands become the first country without stray dogs? DutchReview.",
      "u": "https://dutchreview.com/culture/society/how-did-the-netherlands-manage-to-become-the-first-country-to-have-no-stray-dogs/",
      "k": "Magazine article"
    },
    "dn2008": {
      "t": "DutchNews.nl (10 June 2008). Pitbull ban to be lifted.",
      "u": "https://www.dutchnews.nl/2008/06/pitbull_ban_to_be_lifted/",
      "k": "News report"
    },
    "dn2023": {
      "t": "Pascoe, R. (4 October 2023). MPs back plans to ban aggressive dogs with powerful bites. DutchNews.nl.",
      "u": "https://dutchnews.nl/2023/10/mps-back-plans-to-ban-aggressive-dogs-with-powerful-bites",
      "k": "News report"
    },
    "nos2021": {
      "t": "Klein, C. (11 August 2021). Gedumpt, ongevaccineerd en gedragsproblemen: ‘De drempel voor een huisdier is te laag’. NOS.",
      "u": "https://nos.nl/l/2393511",
      "k": "News report"
    },
    "pitwiki": {
      "t": "Pit bull (Wikipedia), section on breed-specific legislation.",
      "u": "https://en.wikipedia.org/wiki/Pit_bull",
      "k": "Reference site"
    }
  },
  "events": [
    {
      "id": "n01",
      "seq": 0,
      "cat": "role",
      "start": 1501,
      "end": 1600,
      "approx": true,
      "date": "16th century",
      "tag": "Kooiker decoy dog",
      "title": "The Kooikerhondje, a working decoy dog",
      "sum": "Dutch breeders developed a small dog to lure ducks into duck decoys (kooien), where hunters could catch them.",
      "pts": [
        "The hunting style was modelled on foxes, which draw ducks by playing near the water while avoiding eye contact.",
        "The breed is one of the earliest documented working roles for dogs in the Netherlands in the sources used here."
      ],
      "care": "One reference page, with no primary source for the 16th-century date.",
      "src": [
        {
          "s": "kooi",
          "why": "The only source found for the decoy-dog role and its date."
        }
      ]
    },
    {
      "id": "n02",
      "seq": 1,
      "cat": "meaning",
      "start": 1601,
      "end": 1700,
      "approx": true,
      "date": "17th c. (Dutch Golden Age)",
      "tag": "Dogs in Golden Age art",
      "title": "Kooiker dogs in Golden Age paintings",
      "sum": "The breed appears in paintings by Jan Steen, Rembrandt and Vermeer.",
      "pts": [
        "The page names these three painters but not the individual works."
      ],
      "care": "The page does not say which paintings, and does not say whether the dogs stand for status, loyalty or simply pets. That reading is not in the source.",
      "src": [
        {
          "s": "kooi",
          "why": "The only source found linking the breed to Golden Age art."
        }
      ]
    },
    {
      "id": "n03",
      "seq": 2,
      "cat": "role",
      "start": 1675,
      "end": 1962,
      "date": "1675 to 1962",
      "tag": "Dog carts",
      "bar": "Dogs pulling carts, 1675–1962",
      "title": "Draught dogs, from first ban to final ban",
      "sum": "Dogs pulled carts for centuries. Amsterdam banned dog carts in 1675, the ban was ignored, and they were only stopped nationally in 1962.",
      "pts": [
        "Dog carts were in use from at least 1675. Amsterdam’s city government banned them that year; the ban was apparently not observed and was reissued several times. A similar Rotterdam ban was also ignored.",
        "Around 1900 carts were still common in the Gooi. A case in Naarden is recorded in December 1917, and by 1931 few remained.",
        "Dogs were cheap to keep, which is why carts stayed where many people could not afford a horse.",
        "A letter from 1925 called the practice animal abuse and urged readers to boycott traders who used dog carts."
      ],
      "care": "From a local history society’s newspaper column with no footnotes. The laws it names (1910, 1962) match the statute text and Sternheim’s report.",
      "src": [
        {
          "s": "bussum",
          "why": "The most detailed account found of the dog-cart era, with dates."
        },
        {
          "s": "stern",
          "why": "Confirms the 1912 draught-dog association and the 1962 final ban."
        }
      ]
    },
    {
      "id": "n04",
      "seq": 3,
      "cat": "meaning",
      "start": 1701,
      "end": 1789,
      "approx": true,
      "date": "18th century (before the French Revolution)",
      "tag": "Keeshond as Patriot symbol",
      "title": "The Keeshond becomes a political symbol",
      "sum": "The breed is named after Cornelis ‘Kees’ de Gyselaer, a Patriot who led a rebellion against the House of Orange, and the dog became the Patriots’ symbol.",
      "pts": [
        "When the House of Orange regained power, the breed nearly disappeared."
      ],
      "care": "The page gives no year; the 1780s date is general background, not stated in the source.",
      "src": [
        {
          "s": "kees",
          "why": "Shows a dog standing for a political side, not only a pet or worker."
        }
      ]
    },
    {
      "id": "n05",
      "seq": 4,
      "cat": "ownership",
      "start": 1800,
      "approx": true,
      "date": "c. 1800",
      "tag": "A dog in nearly every home",
      "title": "Nearly every household had a dog, and strays were common",
      "sum": "Around 1800 dogs roamed freely, bred unchecked, and were abandoned when no longer useful. Rabies outbreaks led to culls and rules on leashes and muzzles.",
      "pts": [
        "The wealthy elite kept pedigree dogs for hunting or companionship.",
        "Working-class households kept mixed-breed dogs as guards and working dogs.",
        "Dog catchers (hondenvangers) were a feature of the 19th century."
      ],
      "care": "Sternheim’s 2012 report is not peer-reviewed. It gives no years for the rabies outbreaks or the first culls.",
      "team": {
        "t": "DR18 · Dutch stray dogs",
        "n": "Your entry explains why strays are rare today. This node shows they were common around 1800."
      },
      "src": [
        {
          "s": "stern",
          "why": "The only source found that describes the pre-modern stray problem and what ended it."
        }
      ]
    },
    {
      "id": "n06",
      "seq": 5,
      "cat": "ownership",
      "start": 1801,
      "end": 1840,
      "approx": true,
      "date": "Early 19th century",
      "tag": "Dog tax spreads",
      "title": "Municipalities start taxing dogs",
      "sum": "Dog taxes were introduced in many municipalities. They are meant to limit stray nuisance and rabies.",
      "pts": [
        "Dutch Wikipedia says the tax has been levied ‘since the Middle Ages’ and that dog carts were also seen as a way to tax transport.",
        "Sternheim says towns with a tax often had more strays, because owners who could not or would not pay abandoned their dogs.",
        "DutchReview repeats that the tax had the ‘opposite effect’ without evidence."
      ],
      "care": "The sources disagree on when the tax began, and none gives a year. The ‘backfired’ claim comes from one unreviewed report.",
      "src": [
        {
          "s": "stern",
          "why": "Source of the early 19th-century date and the backfire claim."
        },
        {
          "s": "nltax",
          "why": "Gives the longer history and the legal basis today (Gemeentewet art. 226)."
        },
        {
          "s": "dutchrev",
          "why": "Shows how the backfire story is retold without evidence."
        }
      ],
      "verify": "\"Early 19th century\" read as 1801–1840"
    },
    {
      "id": "n07",
      "seq": 6,
      "cat": "law",
      "start": 1864,
      "date": "25 August 1864",
      "tag": "Animal society founded",
      "title": "The Dutch Society for the Protection of Animals is founded",
      "sum": "The first animal welfare organisation was founded in The Hague. Early aims included abolishing draught dogs and banning the docking of ears and tails.",
      "pts": [
        "The founders are not named in the pages read."
      ],
      "care": "Wikipedia cites a 2008 archived page from the society itself for this history.",
      "src": [
        {
          "s": "wikidb",
          "why": "Gives the founding date and early aims."
        },
        {
          "s": "stern",
          "why": "Confirms 1864 and The Hague."
        }
      ]
    },
    {
      "id": "n08",
      "seq": 7,
      "cat": "law",
      "start": 1875,
      "date": "1875",
      "tag": "Rabies law, abuse punished",
      "title": "A rabies law punishes abuse of dogs and cats",
      "sum": "The 1875 rabies prevention law included penalties for intentionally abusing a dog or cat. The society had about 2,000 members.",
      "pts": [
        "It ties dog control and dog welfare together in one law."
      ],
      "care": "Read through Wikipedia’s summary; the law itself was not opened.",
      "src": [
        {
          "s": "wikidb",
          "why": "Only source found for the 1875 law."
        }
      ]
    },
    {
      "id": "n09",
      "seq": 8,
      "cat": "ownership",
      "start": 1877,
      "date": "1877",
      "tag": "First animal shelter",
      "title": "The first animal shelter opens",
      "sum": "Sternheim lists 1877 as the year the first animal shelter opened in the Netherlands.",
      "pts": [
        "It is the earliest institutional answer to stray and surplus animals in the sources used."
      ],
      "care": "A single line in an unreviewed report, with no location or operator named.",
      "src": [
        {
          "s": "stern",
          "why": "Only source found."
        }
      ]
    },
    {
      "id": "n10",
      "seq": 9,
      "cat": "law",
      "start": 1886,
      "date": "1886",
      "tag": "Animal cruelty punishable",
      "title": "Cruelty to animals becomes a crime",
      "sum": "The penal code was amended in 1886 so that abuse of any animal is punishable.",
      "pts": [
        "An 1880 law had already protected species useful for agriculture and forestry, according to Wikipedia’s history of the society."
      ],
      "care": "The 1875 detail and the 1886 date come from two different secondary sources.",
      "src": [
        {
          "s": "wikidb",
          "why": "Dates the penal-code change."
        },
        {
          "s": "stern",
          "why": "Gives the same date in its list of milestones."
        }
      ]
    },
    {
      "id": "n11",
      "seq": 10,
      "cat": "law",
      "start": 1910,
      "date": "1910",
      "tag": "Draught-dog act",
      "title": "The Trekhondenwet regulates dog pulling",
      "sum": "A 1910 act regulated dog pulling instead of banning it.",
      "pts": [
        "Drivers had to be over 14, dogs over one year old and at least 60 cm at the shoulder.",
        "Dogs had to be muzzled and harnessed in front of the cart. Drivers could not ride on the cart within town limits."
      ],
      "care": "Details from a local history column. The 1961 statute confirms the Trekhondenwet existed because it repeals it (art. 11).",
      "src": [
        {
          "s": "bussum",
          "why": "Source of the 1910 rules."
        },
        {
          "s": "stb1961",
          "why": "Confirms the act and its repeal."
        }
      ],
      "verify": "Moved from Work: it is an act"
    },
    {
      "id": "n12",
      "seq": 11,
      "cat": "law",
      "start": 1912,
      "date": "1912",
      "tag": "Draught-dog association",
      "title": "An association for draught dogs is founded",
      "sum": "The association campaigned for the welfare of draught dogs, and inspectors enforced the rules. It later became Hondenbescherming.",
      "pts": [
        "It is the origin of today’s dog-focused welfare organisation, according to Sternheim."
      ],
      "care": "Single source for the 1912 date and the later name.",
      "src": [
        {
          "s": "stern",
          "why": "Only source found."
        }
      ]
    },
    {
      "id": "n13",
      "seq": 12,
      "cat": "breed",
      "start": 1920,
      "end": 1929,
      "date": "1920s",
      "tag": "Keeshond revival",
      "title": "The Keeshond is rebuilt",
      "sum": "Baroness van Hardenbroek began rebuilding the breed in the 1920s.",
      "pts": [
        "The Nederlandse Keeshond Club formed in 1924.",
        "The British Kennel Club accepted the breed as the Keeshond in 1926."
      ],
      "care": "Wikipedia only; the page cites breed-club and kennel-club material.",
      "src": [
        {
          "s": "kees",
          "why": "Source of the revival dates."
        }
      ]
    },
    {
      "id": "n14",
      "seq": 13,
      "cat": "breed",
      "start": 1939,
      "end": 1945,
      "date": "World War II",
      "tag": "Kooiker near extinct",
      "title": "The Kooikerhondje nearly dies out",
      "sum": "The breed nearly became extinct during the war and was rescued by Baroness van Hardenbroek van Ammerstol.",
      "pts": [
        "It is the second case in this timeline of a Dutch breed being rebuilt by a small group of enthusiasts."
      ],
      "care": "The page gives no year for the rescue.",
      "src": [
        {
          "s": "kooi",
          "why": "Only source found."
        }
      ]
    },
    {
      "id": "n15",
      "seq": 14,
      "cat": "law",
      "start": 1961,
      "date": "25 January 1961",
      "tag": "Animal Protection Act",
      "title": "The Wet op de dierenbescherming is passed",
      "sum": "The 1961 act made cruelty to dogs a crime, set penalties for neglect, and made using a dog as a draught animal punishable.",
      "pts": [
        "Intentionally causing a dog pain or injury, or withholding necessary care from a dog one owns, carried up to six months in prison or a fine of up to 1,000 guilders.",
        "Needlessly causing suffering, overworking a dog, using it as a draught animal or cropping its ears carried up to one month’s detention or a fine of up to 600 guilders.",
        "The act repealed the Trekhondenwet."
      ],
      "care": "The draught-dog provision, and some others, took effect on dates set later by the Crown. The text read here gives no general commencement date.",
      "src": [
        {
          "s": "stb1961",
          "why": "The law itself, with article numbers."
        },
        {
          "s": "wikidb",
          "why": "Says the society backed the act, which banned dogs as pack animals."
        }
      ]
    },
    {
      "id": "n16",
      "seq": 15,
      "cat": "ownership",
      "start": 1961,
      "date": "25 January 1961",
      "tag": "Dog trade needs a permit",
      "title": "Selling or boarding dogs requires a permit",
      "sum": "Article 2 of the 1961 act requires a permit from the mayor and aldermen to buy, sell, stock, board, train or kill dogs or cats as a business.",
      "pts": [
        "Violations carry up to 14 days’ detention or a fine of up to 1,000 guilders.",
        "Article 4 lets police catch dogs and cats found unsupervised at night, and owners must collect them within 14 days or pay a fine of up to 100 guilders."
      ],
      "care": "Read from the original act. Whether these provisions are still in force today was not checked.",
      "team": {
        "t": "DR10 · Illegal Puppy Mills Article",
        "n": "An early Dutch example of licensing the dog trade, relevant to your commercial-supply questions."
      },
      "src": [
        {
          "s": "stb1961",
          "why": "Primary source for the permit and stray-catching rules."
        }
      ],
      "verify": "Moved from Trade, ownership and risk: a permit for the dog trade"
    },
    {
      "id": "n17",
      "seq": 16,
      "cat": "law",
      "start": 1962,
      "date": "1962",
      "tag": "Dog carts banned",
      "title": "Dog carts are definitively banned",
      "sum": "Two sources date the end of draught dogs to 1962.",
      "pts": [
        "The 1961 act made using a dog as a draught animal punishable; the provision came into force on a date set by the Crown, which fits 1962.",
        "Wikipedia’s account of the society also says the 1961 law banned dogs as pack animals."
      ],
      "care": "The exact commencement date was not found. 1961 and 1962 both appear in sources because the law and its entry into force differ.",
      "src": [
        {
          "s": "bussum",
          "why": "Says the 1962 law ended dog carts."
        },
        {
          "s": "stern",
          "why": "Also gives 1962."
        },
        {
          "s": "stb1961",
          "why": "Shows the draught-dog provision depended on a Crown decision."
        }
      ],
      "verify": "Moved from Work: it is a ban"
    },
    {
      "id": "n18",
      "seq": 17,
      "cat": "breed",
      "start": 1971,
      "date": "1971",
      "tag": "Kooiker recognised",
      "title": "The Dutch Kennel Club recognises the Kooikerhondje",
      "sum": "The breed became officially recognised in 1971.",
      "pts": [
        "Recognition by the American Kennel Club followed in 2018."
      ],
      "care": "Wikipedia only.",
      "src": [
        {
          "s": "kooi",
          "why": "Only source found for the date."
        }
      ]
    },
    {
      "id": "n19",
      "seq": 18,
      "cat": "breed",
      "start": 1988,
      "date": "1988",
      "tag": "Book on harmful traits",
      "title": "‘Mooi, mooier, mooist’ on harmful traits in purebreds",
      "sum": "A book by J. H. E. Snijders-Verheijen, linked to the Ministry of Agriculture, Nature and Fisheries, examined harmful traits in purebred dogs using FCI breed-standard research.",
      "pts": [
        "It is the first entry in a Dutch timeline on pedigree health that later leads to breeding rules."
      ],
      "care": "The timeline’s publisher is not stated, and most later entries come from the kennel club’s own news items, so it reflects that side’s account.",
      "src": [
        {
          "s": "hvh",
          "why": "The only source found that dates the start of the pedigree-health debate."
        }
      ]
    },
    {
      "id": "n20",
      "seq": 19,
      "cat": "law",
      "start": 1992,
      "date": "24 September 1992",
      "tag": "Animal Health and Welfare Act",
      "title": "The Gezondheids- en welzijnswet voor dieren",
      "sum": "The 1992 act sets a general duty of care and bans unnecessary harm to animals. It also allows rules on identification and registration.",
      "pts": [
        "Keeping animals is generally prohibited unless the species is designated by decree (art. 33). Wikipedia’s history of the society calls this the ‘no-unless’ principle.",
        "Owners may not withhold necessary care (art. 37). Using a dog as a draught animal is named as unnecessary harm (art. 36(2)).",
        "Surgical procedures that remove or damage body parts are banned, with exceptions (art. 40). Dogfights are banned (art. 61).",
        "Regulations may require identification and registration of animals (art. 96)."
      ],
      "care": "The text read does not state when the act took effect, and it ends partway through article 121.",
      "team": {
        "t": "DR07 · Animal Protection Act",
        "n": "Compare with Korea’s act. The Dutch law lists duties of care and a power to require registration."
      },
      "src": [
        {
          "s": "stb1992",
          "why": "The law itself, with article numbers."
        },
        {
          "s": "wikidb",
          "why": "Dates the revised act to 1992 and names the ‘no-unless’ principle."
        }
      ]
    },
    {
      "id": "n21",
      "seq": 20,
      "cat": "law",
      "start": 1993,
      "date": "1993",
      "tag": "Pit bull ban",
      "title": "The Netherlands bans pit bulls",
      "sum": "A total breed ban was introduced in 1993 after three children were killed by pit bulls.",
      "pts": [
        "An opinion column says many dogs were destroyed, including some that only vaguely resembled pit bulls."
      ],
      "care": "The destruction claim is from an opinion piece and is unverified.",
      "src": [
        {
          "s": "dn2008",
          "why": "Gives the year and the trigger."
        },
        {
          "s": "obs",
          "why": "Source of the claim about look-alike dogs."
        }
      ],
      "verify": "Moved from Trade, ownership and risk: dangerous-dog rules are Law"
    },
    {
      "id": "n22",
      "seq": 21,
      "cat": "law",
      "start": 2008,
      "date": "June 2008",
      "tag": "Pit bull ban lifted",
      "title": "The pit bull ban is dropped",
      "sum": "Farm minister Gerda Verburg said the ban had not reduced incidents. It was replaced by rules that let officials seize aggressive dogs.",
      "pts": [
        "The shift moved the law from a breed to a dog’s behaviour.",
        "Wikipedia’s general finding is that breed-specific legislation has largely been found ineffective at reducing dog attacks. That is not Dutch-specific."
      ],
      "care": "The article names no study; the evidence is the officials’ own assessment.",
      "src": [
        {
          "s": "dn2008",
          "why": "Source of the minister’s statement and the replacement rules."
        },
        {
          "s": "pitwiki",
          "why": "Wider evidence on breed bans, not about the Netherlands."
        }
      ],
      "verify": "Moved from Trade, ownership and risk: dangerous-dog rules are Law"
    },
    {
      "id": "n23",
      "seq": 22,
      "cat": "breed",
      "start": 2008,
      "end": 2010,
      "date": "2008 to 2010",
      "tag": "Pedigree health exposed",
      "title": "Documentaries expose pedigree health problems",
      "sum": "The 2008 UK documentary Pedigree Dogs Exposed and a 2010 Zembla report, ‘Einde van de rashond’, put public pressure on breeders.",
      "pts": [
        "The 2008 film covered health problems in English Bulldogs and Pugs."
      ],
      "care": "From the kennel club–side timeline; the programmes themselves were not viewed.",
      "src": [
        {
          "s": "hvh",
          "why": "Only source found that links these programmes to Dutch policy."
        }
      ]
    },
    {
      "id": "n24",
      "seq": 23,
      "cat": "ownership",
      "start": 2013,
      "date": "2013",
      "tag": "Dog-tax court rulings",
      "title": "Courts rule on the dog tax",
      "sum": "In 2013, 287 of 408 municipalities levied the tax. The Court of Appeal in ’s-Hertogenbosch ruled that taxing dog owners for general funds violated the equality principle.",
      "pts": [
        "The Supreme Court later overturned that ruling; the date is not given."
      ],
      "care": "Dutch Wikipedia’s footnotes are not named in the text read. Check the judgments before citing.",
      "src": [
        {
          "s": "nltax",
          "why": "Only source found for the rulings."
        }
      ]
    },
    {
      "id": "n25",
      "seq": 24,
      "cat": "ownership",
      "start": 2013,
      "date": "2013",
      "tag": "Dog registration",
      "title": "Every dog must be registered",
      "sum": "RVO says every dog in the Netherlands must be chipped and registered, and the requirement has applied since 2013.",
      "pts": [
        "Chipping and registration must happen within seven weeks of birth.",
        "Owners update the record when ownership changes or the dog dies or goes missing."
      ],
      "care": "The page gives only the year and does not name the legal basis. Fines are not mentioned.",
      "team": {
        "t": "DR18 · Dutch stray dogs",
        "n": "Your entry says all dogs are accounted for. Registration is one of the rules that claim rests on."
      },
      "src": [
        {
          "s": "rvo",
          "why": "Official source for the rule and the 2013 start."
        }
      ]
    },
    {
      "id": "n26",
      "seq": 25,
      "cat": "breed",
      "start": 2014,
      "date": "2014",
      "tag": "Breeding harm banned",
      "title": "The Wet dieren and a ban on harmful breeding",
      "sum": "According to the breed-policy timeline, the Wet dieren took effect in July 2014 and the Besluit houders van dieren in 2014. Article 3.4 bans breeding that harms welfare or health.",
      "pts": [
        "The minister may set rules on breeding and registration."
      ],
      "care": "Dates are as given in the kennel club–side timeline. The commencement decrees were not checked.",
      "team": {
        "t": "DR18 · Dutch stray dogs",
        "n": "Your entry notes it is illegal to breed for harmful traits such as very short legs or an excessively short muzzle."
      },
      "src": [
        {
          "s": "hvh",
          "why": "Source for the dates and article 3.4."
        }
      ]
    },
    {
      "id": "n27",
      "seq": 26,
      "cat": "breed",
      "start": 2015,
      "date": "2015",
      "tag": "Bulldog convenant",
      "title": "A convenant for English Bulldogs",
      "sum": "Breed clubs, the kennel club, vets and Utrecht University agreed a convenant with a conditioning test, based on a study of 40 dogs.",
      "pts": [
        "In November 2015 the kennel club launched the campaign ‘De stamboomhond, hond uit een goed nest’."
      ],
      "care": "Self-regulation described by one of the parties.",
      "src": [
        {
          "s": "hvh",
          "why": "Only source found for the convenant."
        }
      ]
    },
    {
      "id": "n28",
      "seq": 27,
      "cat": "ownership",
      "start": 2016,
      "end": 2018,
      "date": "2016 to 2018",
      "tag": "Cities drop dog tax",
      "title": "Amsterdam and Rotterdam stop taxing dogs",
      "sum": "Amsterdam abolished the tax from 1 January 2016. Landsmeer followed in 2017 and Rotterdam stopped collecting it in 2018.",
      "pts": [
        "Leiden had already stopped in 2005."
      ],
      "care": "Dutch Wikipedia only; footnotes not named.",
      "src": [
        {
          "s": "nltax",
          "why": "Source of the dates."
        }
      ]
    },
    {
      "id": "n29",
      "seq": 28,
      "cat": "ownership",
      "start": 2016,
      "date": "December 2016 and later",
      "tag": "‘Zero strays’ claim",
      "title": "How solid is the ‘no stray dogs’ claim?",
      "sum": "A 2016 column doubts the headline that the Netherlands keeps its streets stray-free, and a retold ‘first country without strays’ story offers few dated sources.",
      "pts": [
        "The Observant column calls the claim doubtful and cites anecdotes, not counts.",
        "DutchReview’s article (updated August 2026) tells the story without dates for the rabies outbreaks, the dog tax or the national programme, and its readers question the ‘first’ claim.",
        "Sternheim credits prosperity, smaller families, sterilisation, welfare attitudes, stricter laws and a strong network of animal organisations. She also describes CNVR (collect, neuter, vaccinate, mark, return) and cites a 1990 WHO/WSPA report that found sterilisation, education and registration the most effective combination."
      ],
      "care": "No source read gives a national count of stray dogs, so ‘zero’ is a claim, not a measured figure.",
      "team": {
        "t": "DR18 · Dutch stray dogs",
        "n": "Your entry states there are zero stray dogs. This node suggests rewording it as a widely repeated claim."
      },
      "src": [
        {
          "s": "obs",
          "why": "A sceptical voice on the claim."
        },
        {
          "s": "dutchrev",
          "why": "The popular version of the story, with its gaps."
        },
        {
          "s": "stern",
          "why": "A fuller list of causes."
        }
      ],
      "verify": "\"December 2016 and later\": open-ended, stored as a point"
    },
    {
      "id": "n30",
      "seq": 29,
      "cat": "breed",
      "start": 2018,
      "date": "2018",
      "tag": "Short-snout talks",
      "title": "Talks on short-snouted breeds intensify",
      "sum": "A meeting on French Bulldog welfare took place on 12 February 2018, and the kennel club contacted the ministry on 30 May.",
      "pts": [
        "A study led by Marjan van Hagen started on 1 June 2018.",
        "In June 2018 European vet bodies Fecava and FVE issued a position paper saying health and welfare must come before appearance."
      ],
      "care": "Entries come from the kennel club–side timeline, which also records disagreements among breed clubs.",
      "src": [
        {
          "s": "hvh",
          "why": "Dated record of the meetings."
        }
      ]
    },
    {
      "id": "n31",
      "seq": 30,
      "cat": "breed",
      "start": 2019,
      "date": "2019",
      "tag": "Government report and rules",
      "title": "The minister sends a short-snout report to parliament",
      "sum": "On 17 March 2019 the minister sent a welfare letter, the ECGG report and the FairFok report to the Tweede Kamer.",
      "pts": [
        "On 1 August 2019 the kennel club submitted its breeding guidance plan to the ministry.",
        "On 21 and 28 October 2019 the timeline notes that NVWA enforcement started."
      ],
      "care": "Kennel club–side account. Its objections to the criteria are recorded in the timeline.",
      "src": [
        {
          "s": "hvh",
          "why": "Dated record of the steps."
        }
      ]
    },
    {
      "id": "n32",
      "seq": 31,
      "cat": "ownership",
      "start": 2019,
      "date": "2019",
      "tag": "Marktplaats charges for pet ads",
      "title": "Online marketplace starts charging for pet adverts",
      "sum": "Marktplaats says rules in force since 2019, which make advertisers pay, cut pet listings sharply.",
      "pts": [
        "In the first half of 2021 listings rose 20% but were still 43% below 2019, according to the platform."
      ],
      "care": "The figures are the platform’s own, as reported by NOS.",
      "team": {
        "t": "DR10 · Illegal Puppy Mills Article",
        "n": "Shows one way online selling was made more costly."
      },
      "src": [
        {
          "s": "nos2021",
          "why": "Reports the platform’s numbers."
        }
      ]
    },
    {
      "id": "n33",
      "seq": 32,
      "cat": "breed",
      "start": 2020,
      "date": "6 May 2020",
      "tag": "Snout-ratio limit kept",
      "title": "The minister keeps a minimum CFR of 0.3",
      "sum": "After the kennel club’s objections, the minister’s reply kept a minimum CFR of 0.3.",
      "pts": [
        "In June 2020 the NVWA, vets’ association and ECGG produced a brochure for vets.",
        "On 18 August 2020 seven clubs left the talks, and on 3 September the kennel club signed a letter of intent with Cambridge University and the English Kennel Club on a breathing test."
      ],
      "care": "The timeline does not spell out CFR; it refers to the measurement used in the ministry’s report. The source is the kennel club’s account.",
      "src": [
        {
          "s": "hvh",
          "why": "Dated record of the decision and the reactions."
        }
      ]
    },
    {
      "id": "n34",
      "seq": 33,
      "cat": "ownership",
      "start": 2021,
      "date": "August 2021",
      "tag": "Pandemic puppy boom",
      "title": "The pandemic puppy boom",
      "sum": "The Sophia-Vereeniging estimated that 1–1.5 million Dutch people bought a pet in a year, and the trade body Dibevo estimated about 400,000 extra dogs entered the market.",
      "pts": [
        "House of Animals put annual demand at about 150,000 dogs before the pandemic, with 60,000–80,000 imported.",
        "Dierenbescherming saw no rise in dogs or cats at its shelters, though rabbit intakes doubled. Amsterdam’s main shelter stopped accepting animals because it was full.",
        "The Sophia-Vereeniging’s director said the threshold for getting a pet was far too low."
      ],
      "care": "Estimates come from trade bodies and charities. Later shelter figures were not checked.",
      "team": {
        "t": "DR14 · Risk factors of relinquishment",
        "n": "Compare with the Korean pattern of post-pandemic relinquishment."
      },
      "src": [
        {
          "s": "nos2021",
          "why": "Source of all figures and quotes."
        }
      ]
    },
    {
      "id": "n35",
      "seq": 34,
      "cat": "law",
      "start": 2023,
      "date": "4 October 2023",
      "tag": "Aggressive-dog plan",
      "title": "A trait-based plan against aggressive dogs",
      "sum": "A VVD plan would stop people breeding and keeping dogs with strong jaws that cause serious bites, without naming breeds.",
      "pts": [
        "It followed surgeons’ reports of more than 100 serious dog bites in 18 months.",
        "A broad majority of MPs backed it, and the farm minister was asked to draft legislation."
      ],
      "care": "A parliamentary proposal. Whether it became law was not checked.",
      "src": [
        {
          "s": "dn2023",
          "why": "Source of the proposal and the 1993/2008 background."
        }
      ],
      "verify": "Moved from Trade, ownership and risk: dangerous-dog rules are Law"
    },
    {
      "id": "n36",
      "seq": 35,
      "cat": "ownership",
      "start": 2025,
      "date": "15 January 2025",
      "tag": "Dog tax in decline",
      "title": "113 of 342 municipalities still tax dogs",
      "sum": "About a third of municipalities levy dog tax, down 7% on the year before, and six had decided to abolish it in 2026 or 2027.",
      "pts": [
        "The article says the original purpose, fighting strays and rabies, is long outdated, and that revenue is not tied to dog policy.",
        "Rates run from €14.59 in Hoorn to €139.03 in Katwijk for a first dog."
      ],
      "care": "Figures are from huisdierenverzekering.nl as cited by the article. The number of municipalities differs from 2013 because of mergers.",
      "src": [
        {
          "s": "bb2025",
          "why": "Source of the 2025 figures."
        }
      ]
    },
    {
      "id": "n37",
      "seq": 36,
      "cat": "ownership",
      "start": 2026,
      "date": "4 May 2026 (rule as of)",
      "tag": "Registration rules today",
      "title": "Registration rules as they stand",
      "sum": "Breeders must provide a chip, registration and passport when a dog is sold, and importers and non-commercial litters must register with RVO.",
      "pts": [
        "RVO issues the unique number needed to chip puppies and apply for passports.",
        "Most dogs need an official EU pet passport."
      ],
      "care": "The page was checked on 4 May 2026. Fines are not mentioned.",
      "team": {
        "t": "DR18 · Dutch stray dogs",
        "n": "Your entry covers the vaccination and passport rules for buying a dog."
      },
      "src": [
        {
          "s": "rvo",
          "why": "The current official rules."
        }
      ]
    },
    {
      "id": "n38",
      "seq": 37,
      "cat": "ownership",
      "start": 1801,
      "end": 2025,
      "approx": true,
      "date": "Early 19th century to 2025",
      "tag": "Dog tax",
      "bar": "Municipal dog tax, from the early 1800s",
      "title": "A municipal tax that is slowly disappearing",
      "sum": "The dog tax is set by each municipality. The share of municipalities that levy it has been falling.",
      "pts": [
        "2013: 287 of 408 municipalities levied it.",
        "2025: 113 of 342 municipalities levy it, about 33%.",
        "The tax is charged under article 226 of the Gemeentewet, and a municipality may levy it but does not have to."
      ],
      "care": "The two counts come from different sources and different years, and mergers changed the total. Use the trend, not the exact difference.",
      "src": [
        {
          "s": "nltax",
          "why": "Source of the 2013 count and the legal basis."
        },
        {
          "s": "bb2025",
          "why": "Source of the 2025 count."
        },
        {
          "s": "stern",
          "why": "Source of the early 19th-century origin."
        }
      ]
    }
  ]
});
