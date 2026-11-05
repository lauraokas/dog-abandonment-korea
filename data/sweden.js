// Shared data for the dog timeline. One file per country, same format.
// Years: negative = BCE. See data/README.md for every field.
window.DOGTL = window.DOGTL || { countries: [] };
window.DOGTL.countries.push({
  "id": "sweden",
  "name": "Sweden",
  "main": false,
  "intro": "This timeline begins with Swedish legislation concerning dog taxation, supervision, wildlife protection, identification and registration, and animal welfare.",
  "eras": [
    {
      "n": "Modern Sweden",
      "from": 1923,
      "to": 2026
    }
  ],
  "sources": {
    "dios": {
      "t": "Isabella Diós, Hundskatt – föråldrad beskattningsform eller modern möjlighet?, degree thesis, Faculty of Law, Lund University.",
      "k": "Degree thesis"
    },
    "dogtax1923": {
      "t": "Förordning (1923:116) om hundskatt, later Lag (1923:116) om hundskatt.",
      "u": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1923116-om-hundskatt_sfs-1923-116/",
      "k": "Legislation"
    },
    "hunting1938": {
      "t": "Kungl. Maj:ts Jaktstadga (1938:279).",
      "u": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/kungl-majts-jaktstadga-1938279_sfs-1938-279/",
      "k": "Ordinance"
    },
    "supervision1943": {
      "t": "Lag (1943:459) om tillsyn över hundar och katter.",
      "u": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1943459-om-tillsyn-over-hundar-och-_sfs-1943-459/",
      "k": "Legislation"
    },
    "dogtaxRepeal": {
      "t": "Lag (1923:116) om hundskatt, repealed through SFS 1995:1209.",
      "u": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1923116-om-hundskatt_sfs-1923-116/",
      "k": "Legislation"
    },
    "identification2000": {
      "t": "Lag (2000:537) om märkning och registrering av hundar.",
      "u": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2000537-om-markning-och-registrering-av_sfs-2000-537/",
      "k": "Legislation"
    },
    "supervision2007": {
      "t": "Lag (2007:1150) om tillsyn över hundar och katter.",
      "u": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20071150-om-tillsyn-over-hundar-och-katter_sfs-2007-1150/",
      "k": "Legislation"
    },
    "animalWelfare2018": {
      "t": "Djurskyddslag (2018:1192).",
      "u": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/djurskyddslag-20181192_sfs-2018-1192/",
      "k": "Legislation"
    },
    "animalWelfareOrdinance2019": {
      "t": "Djurskyddsförordning (2019:66).",
      "u": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/djurskyddsforordning-201966_sfs-2019-66/",
      "k": "Ordinance"
    },
    "jordbruksverketDogCare": {
      "t": "Swedish Board of Agriculture (Jordbruksverket), Så sköter du din hund.",
      "u": "https://jordbruksverket.se/djur/hundar-katter-och-smadjur/hundar/sa-skoter-du-din-hund",
      "k": "Government guidance"
    },
    "hundstallet2022": {
      "t": "Hundstallet. (2022, 11 November). Fakta om Hundstallet, hundarna och insamlingsarbetet.",
      "u": "https://hundstallet.se/aktuellt/fakta-om-hundstallet-hundarna-och-insamlingsarbetet/",
      "k": "Organisation report"
    },
    "svtHundstallet2024": {
      "t": "SVT Nyheter. (2024, 26 November). Hundarna fortsätter välla in till Hundstallet i Staffanstorp – ”Alltid fullt”.",
      "u": "https://www.svt.se/nyheter/lokalt/skane/hundarna-fortsatter-valla-in-till-hundstallet-i-staffanstorp-alltid-fullt",
      "k": "News article"
    },
    "kslaDogHistory": {
      "t": "Kungl. Skogs- och Lantbruksakademien. Den gröna näringen under 200 år, del 1, chapter 16: Hunduppfödning.",
      "u": "https://www.ksla.se/wp-content/uploads/2023/01/SOLMED-nr-78-Den-grona-naringen-under-200-ar-del-1.pdf",
      "k": "Historical overview"
    },
    "harligaHund2019": {
      "t": "Larsén, A. (2019, 13 August). Hundägandet genom historien. Härliga Hund.",
      "u": "https://www.harligahund.se/nyheter/hundagandet-genom-historien/115587",
      "k": "Historical article"
    },
    "vildmarken2020": {
      "t": "Skoglund, M. (2020, 9 June). Jakthundens historia: Hur kom vi varandra så nära? Vildmarken.",
      "u": "https://vildmarken.se/reportage/jakthundens-historia-hur-kom-vi-varandra-sa-nara/",
      "k": "Historical article"
    }
  },
  "events": [
    {
      "id": "s01",
      "seq": 0,
      "cat": "ownership",
      "start": 1923,
      "end": 1995,
      "date": "17 May 1923",
      "tag": "Dog tax",
      "bar": "National dog tax period, 1923–1995",
      "title": "National dog tax introduced",
      "sum": "Sweden introduced a national dog tax, requiring dog owners to pay an annual tax to their municipality.",
      "pts": [
        "The Dog Tax Ordinance (1923:116) was issued on 17 May 1923.",
        "The tax was payable annually to the municipality for each dog, subject to specified exemptions.",
        "The tax was intended partly to reduce the number of free-roaming dogs and the damage they caused to wildlife, while also helping municipalities cover related costs."
      ],
      "src": [
        {
          "s": "dogtax1923",
          "why": "Primary legislation establishing the national dog tax."
        },
        {
          "s": "dios",
          "why": "Explains the historical reasons for introducing the tax."
        }
      ],
      "care": "The ordinance was later converted into an Act following a parliamentary decision in 1979/80. The historical rationale is described in the secondary thesis."
    },
    {
      "id": "s02",
      "seq": 1,
      "cat": "law",
      "start": 1938,
      "date": "3 June 1938",
      "tag": "Wildlife",
      "title": "Hunting Ordinance regulates dogs in wildlife areas",
      "sum": "The Hunting Ordinance included restrictions on dogs running loose in areas where game animals were present, as part of wildlife protection.",
      "pts": [
        "Section 12 contained provisions concerning restrictions on dogs running loose in areas where game animals were present.",
        "The provisions included a general restriction during 1 March–20 August and requirements for dog supervision outside that period.",
        "Exceptions were provided for certain hunting-related uses of dogs."
      ],
      "src": [
        {
          "s": "hunting1938",
          "why": "Primary source for the Hunting Ordinance and its dog-related provisions."
        }
      ],
      "care": "Section 12 was amended after the ordinance was introduced, including through SFS 1981:678. The consolidated text should not be treated as the unchanged original wording from 1938."
    },
    {
      "id": "s03",
      "seq": 2,
      "cat": "law",
      "start": 1943,
      "date": "30 June 1943",
      "tag": "Supervision",
      "title": "Act on the Supervision of Dogs and Cats",
      "sum": "Sweden introduced legislation requiring dogs and cats to be supervised to prevent them from causing damage or significant nuisance.",
      "pts": [
        "Section 1 established a general requirement for owners to supervise their dogs to prevent damage or significant nuisance.",
        "The Act included restrictions on dogs that had shown a tendency to bite people or domestic animals.",
        "Police authorities could issue measures such as requiring a dog to wear a muzzle, be kept on a leash, or be confined.",
        "The Act also addressed dogs running loose in areas where wildlife was present and established liability for damage caused by dogs."
      ],
      "src": [
        {
          "s": "supervision1943",
          "why": "Primary legislation establishing the supervision requirements and enforcement measures."
        }
      ],
      "care": "This Act was amended over time and repealed on 1 January 2008. The provisions described here should be understood in the context of the historical Act, not as current law."
    },
    {
      "id": "s04",
      "seq": 3,
      "cat": "ownership",
      "start": 1996,
      "date": "1 January 1996",
      "tag": "Tax abolished",
      "title": "National dog tax abolished",
      "sum": "Sweden abolished its national dog tax after more than seventy years of dog taxation.",
      "pts": [
        "The Dog Tax Act (1923:116) was repealed with effect from 1 January 1996.",
        "The tax had become less significant, and many municipalities had stopped collecting it or set the tax rate at zero.",
        "The reasons originally given for the tax were considered less relevant, while mandatory dog registration was later introduced through separate legislation."
      ],
      "src": [
        {
          "s": "dogtaxRepeal",
          "why": "Confirms the repeal date and the repealing instrument, SFS 1995:1209."
        },
        {
          "s": "dios",
          "why": "Discusses the reasons behind the abolition of the dog tax."
        }
      ],
      "care": "The explanation of why the tax was abolished is based on a secondary legal thesis. The repeal date is confirmed by the official legislation record."
    },
    {
      "id": "s05",
      "seq": 4,
      "cat": "ownership",
      "start": 2001,
      "date": "1 January 2001",
      "tag": "Registration",
      "title": "Mandatory dog identification and registration",
      "sum": "A new law required dog owners to permanently mark their dogs and register their ownership in a central national register.",
      "pts": [
        "The Act on the Identification and Registration of Dogs (2000:537) was issued in 2000 and entered into force on 1 January 2001.",
        "Dog owners were required to ensure that their dogs were permanently marked so they could be identified.",
        "Owners were also required to register their ownership in a central register."
      ],
      "src": [
        {
          "s": "identification2000",
          "why": "Primary legislation establishing mandatory identification and registration."
        },
        {
          "s": "dios",
          "why": "Discusses the background and reasons for introducing the registration law."
        }
      ],
      "care": "This Act was repealed on 1 January 2008 and its provisions were incorporated into the subsequent Act on the Supervision of Dogs and Cats."
    },
    {
      "id": "s06",
      "seq": 5,
      "cat": "law",
      "start": 2008,
      "date": "1 January 2008",
      "tag": "New framework",
      "title": "New Act on the Supervision of Dogs and Cats",
      "sum": "A new supervision law replaced the earlier legislation and brought dog supervision, identification, and registration under one legal framework.",
      "pts": [
        "The Act (2007:1150) was issued on 29 November 2007 and entered into force on 1 January 2008.",
        "It repealed both the 1943 Act on the Supervision of Dogs and Cats and the 2000 Act on the Identification and Registration of Dogs.",
        "The Act established general supervision requirements and continued the requirements for dog identification and registration."
      ],
      "src": [
        {
          "s": "supervision2007",
          "why": "Primary legislation and transitional provisions confirming the entry into force and repeal of the earlier Acts."
        }
      ],
      "care": "The Act has been amended several times since 2008. This entry describes the framework introduced in 2008, rather than all provisions in the current consolidated version."
    },
    {
      "id": "s07",
      "seq": 6,
      "cat": "law",
      "start": 2019,
      "date": "1 April 2019",
      "tag": "Animal welfare",
      "title": "New Animal Welfare Act enters into force",
      "sum": "Sweden's new Animal Welfare Act established updated general requirements for animal welfare, care, and protection against unnecessary suffering.",
      "pts": [
        "The Animal Welfare Act (2018:1192) was issued on 20 June 2018 and entered into force on 1 April 2019.",
        "The Act requires animals to be treated well and protected against unnecessary suffering and disease.",
        "It requires animals to be kept in an environment that promotes welfare, allows important natural behaviours, and prevents behavioural disorders.",
        "Chapter 2, Section 8 explicitly prohibits abandoning domesticated animals."
      ],
      "src": [
        {
          "s": "animalWelfare2018",
          "why": "Primary legislation establishing general welfare, natural-behaviour, and anti-abandonment requirements."
        }
      ],
      "care": "The Act applies to animals kept by people generally, not only dogs. The entry highlights provisions particularly relevant to dog ownership and welfare."
    },
    {
      "id": "s08",
      "seq": 7,
      "cat": "breed",
      "start": 2019,
      "date": "1 April 2019",
      "tag": "Breeding",
      "title": "Breeding that may cause suffering prohibited",
      "sum": "The Animal Welfare Act explicitly prohibited breeding practices that may cause suffering to parent animals or their offspring.",
      "pts": [
        "Chapter 2, Section 11 of the Animal Welfare Act (2018:1192) prohibits breeding with an orientation that may cause suffering to the parent animal or its offspring.",
        "The provision also authorises further regulations or restrictions on breeding that may affect natural behaviour, normal bodily functions, or the ability to give birth naturally.",
        "The rule is relevant to dog breeding practices that select for physical traits associated with suffering or impaired bodily function."
      ],
      "src": [
        {
          "s": "animalWelfare2018",
          "why": "Chapter 2, Section 11 provides the statutory prohibition on harmful breeding."
        }
      ],
      "care": "The provision applies to animal breeding generally. It does not name particular dog breeds or automatically prohibit every breed with health problems."
    },
    {
      "id": "s09",
      "seq": 8,
      "cat": "law",
      "start": 2019,
      "date": "1 April 2019",
      "tag": "Kupering",
      "title": "Cosmetic tail and ear docking restricted",
      "sum": "The Animal Welfare Act's rules on surgical procedures provide the legal basis for prohibiting cosmetic tail and ear docking in dogs.",
      "pts": [
        "Chapter 4, Section 2 prohibits surgical procedures on animals unless they are justified by veterinary medical reasons, subject to specified exceptions.",
        "The section also requires operative procedures to be performed under anaesthesia.",
        "Jordbruksverket explains that tail docking (svanskupering) and ear cropping (öronkupering) are not permitted unless medically necessary.",
        "The authority also states that forcing a dog's ears into a particular position by taping or binding is not permitted when it causes suffering."
      ],
      "src": [
        {
          "s": "animalWelfare2018",
          "why": "Chapter 4, Sections 2–3 establish the statutory framework for operative procedures."
        },
        {
          "s": "jordbruksverketDogCare",
          "why": "Government guidance specifically explains the rules for tail and ear docking in dogs."
        }
      ],
      "care": "This entry describes the framework in force from 2019 and the current official guidance. It does not establish when Sweden first restricted cosmetic docking; earlier legislation still needs to be researched."
    },
    {
      "id": "s10",
      "seq": 9,
      "cat": "breed",
      "start": 2019,
      "date": "1 April 2019",
      "tag": "Dog breeding",
      "title": "Breeding and keeping certain fighting-type dogs prohibited",
      "sum": "The Animal Welfare Ordinance prohibited keeping or breeding dogs displaying a specified combination of extreme fighting drive and aggressive characteristics.",
      "pts": [
        "Chapter 2, Section 20 of the Animal Welfare Ordinance (2019:66) prohibits keeping or breeding dogs that have extremely high fighting drive, are easily provoked and bite, are difficult to stop once attacking, and tend to direct their fighting interest towards people or other dogs.",
        "The provision defines the prohibited characteristics rather than naming specific dog breeds.",
        "Chapter 2, Section 21 also gives Jordbruksverket authority to issue further rules concerning harmful breeding."
      ],
      "src": [
        {
          "s": "animalWelfareOrdinance2019",
          "why": "Chapter 2, Sections 20–21 contain the dog-specific prohibition and further breeding provisions."
        }
      ],
      "care": "This is a prohibition based on a combination of behavioural characteristics, not a list of prohibited named breeds."
    },
    {
      "id": "s11",
      "seq": 10,
      "cat": "ownership",
      "start": 2022,
      "date": "2022",
      "tag": "Rescue",
      "title": "Hundstallet reports increasing numbers of dogs needing new homes",
      "sum": "Hundstallet reported receiving approximately 600 dogs in 2022, attributing increased demand to more animal-welfare interventions, owners surrendering pandemic-acquired dogs, and financial difficulties.",
      "pts": [
        "Hundstallet received 483 dogs in 2018 and 507 in 2019.",
        "The number fell to 356 in 2020 and 390 in 2021, which the organisation linked partly to fewer authority inspections and animal seizures during pandemic restrictions.",
        "Hundstallet forecast receiving approximately 600 dogs in 2022.",
        "During the third quarter of 2022, it received 204 dogs, compared with 82 during the same period in 2021.",
        "Reasons for increased private surrender requests included owners returning to workplaces after remote working and rising living costs.",
        "The opening of a third facility in Alingsås increased the organisation's capacity to more than 1,000 dogs annually from 2023."
      ],
      "src": [
        {
          "s": "hundstallet2022",
          "why": "Provides annual intake figures and the organisation's explanation for increased demand."
        }
      ],
      "care": "These figures describe dogs received by Hundstallet, not the total number of abandoned or surrendered dogs in Sweden. The 2022 figure is a forecast, not a final annual count."
    },
    {
      "id": "s12",
      "seq": 11,
      "cat": "ownership",
      "start": 2024,
      "date": "26 November 2024",
      "tag": "Rehoming",
      "title": "Hundstallet reports continued increase in dogs needing new homes",
      "sum": "Hundstallet received 831 dogs in 2023, a 45% increase from 2022, and expected to receive around 1,000 dogs in 2024.",
      "pts": [
        "Hundstallet's facilities across Sweden received 831 dogs in 2023, representing a 45% increase compared with 2022.",
        "The organisation forecast that it would receive approximately 1,000 dogs during 2024.",
        "Hundstallet attributed the continued increase partly to the economic downturn and rising costs of dog ownership, including insurance, veterinary care and dog food.",
        "The organisation reported that some dogs arrived in increasingly poor physical condition, including dental problems and tumours.",
        "The Staffanstorp facility had 12 places, all occupied, with another six dogs placed in temporary foster homes and boarding facilities.",
        "Hundstallet planned to expand its capacity in Örkelljunga by an additional 60 places."
      ],
      "src": [
        {
          "s": "svtHundstallet2024",
          "why": "Reports national intake figures, the economic reasons behind increased surrender requests and the organisation's capacity constraints."
        }
      ],
      "care": "The figures describe dogs received by Hundstallet, not the total number of dogs abandoned or surrendered in Sweden. The 2024 figure is a forecast, not a confirmed final count."
    },
    {
      "id": "s13",
      "seq": 12,
      "cat": "ownership",
      "start": 1900,
      "date": "Early 1900s",
      "approx": true,
      "tag": "Street dogs",
      "title": "Free-roaming dogs remain common in Swedish cities",
      "sum": "Free-roaming dogs were still common in Swedish cities in the early 20th century, with hundreds captured annually in Stockholm.",
      "pts": [
        "Dogs in Swedish cities included both ownerless street dogs and owned dogs allowed to roam freely during the day.",
        "In Stockholm, approximately 300–400 dogs were captured annually in the early 1900s.",
        "Street dogs often survived by feeding on discarded waste and were sometimes regarded as a public nuisance."
      ],
      "src": [
        {
          "s": "kslaDogHistory",
          "why": "Provides historical information about free-roaming dogs and annual dog captures in Stockholm."
        }
      ],
      "care": "The figures concern Stockholm, not Sweden as a whole. The source describes the early 1900s but does not establish when free-roaming dogs disappeared."
    },
    {
      "id": "s14",
      "seq": 13,
      "cat": "meaning",
      "start": 1970,
      "date": "1970s",
      "tag": "Companions",
      "title": "Companion dogs become a more established part of Swedish households",
      "sum": "Dog-care literature increasingly focused on companionship, reflecting a shift towards viewing dogs as friends and family members rather than primarily working animals.",
      "pts": [
        "Historically, dogs were primarily kept for practical purposes such as hunting, herding, guarding and keeping areas clean.",
        "An early companion-dog handbook, Jag och min hund: Sällskapshundens vård och dressyr, was published by Eric Sandstedt in 1932.",
        "During the 1970s, more dog-care books began addressing owners who kept dogs as companions.",
        "The genre expanded considerably during the 1990s, reflecting the growing interest in dogs as companion animals."
      ],
      "src": [
        {
          "s": "harligaHund2019",
          "why": "Describes the historical shift in the relationship between Swedish people and their dogs."
        }
      ]
    },
    {
      "id": "s15",
      "seq": 14,
      "cat": "origins",
      "start": -5000,
      "date": "Approximately 7,000 years ago",
      "approx": true,
      "tag": "Burials",
      "title": "Dogs buried with care at Skateholm",
      "sum": "Archaeological discoveries at Skateholm in southern Sweden reveal that dogs were sometimes buried with care comparable to that given to humans.",
      "pts": [
        "Approximately 7,000-year-old graves containing dogs have been discovered at Skateholm in Skåne.",
        "Some dogs were reportedly buried with similar care to humans, suggesting that dogs held an important position in prehistoric communities."
      ],
      "src": [
        {
          "s": "vildmarken2020",
          "why": "Describes archaeological evidence of prehistoric dog burials at Skateholm."
        }
      ],
      "care": "This is a secondary popular-history account. The interpretation of burial practices should ideally be checked against archaeological publications on Skateholm."
    }
  ]
});
