// Survey statistics for the statistics page: where Korean dog owners get their dogs.
// Numbers are copied from the team's write-up of 11 Nov 2026 (percentages unless a block says otherwise).
// Not a country timeline file, so it lives in its own folder and tools/check-data.py does not read it.
// See data/README.md ("Statistics blocks") for the format.
window.DOGSTATS = {
  method: "Ministry of Agriculture, Food and Rural Affairs (MAFRA) national animal welfare awareness surveys, 2024 and 2025: online, 5,000 adults aged 20–64 each year, margin of error ±1.39 points, base: pet owners. The Aware surveys are from the animal welfare research institute Aware (smaller owner samples, noted under each chart). Values are percentages unless a chart says otherwise.",

  sources: [
    { id: "mafra2024", lang: "ko", t: "Ministry of Agriculture, Food and Rural Affairs. (2025). 2024년 동물복지에 대한 국민의식조사 결과보고서 [2024 national awareness survey on animal welfare]. National Animal Protection Information System.", u: "https://www.animal.go.kr/front/community/show.do?boardId=boardID03&page=1&pageSize=10&keyword=&column=&menuNo=5000300000&seq=300154" },
    { id: "mafra2025", lang: "ko", t: "Ministry of Agriculture, Food and Rural Affairs. (2026). 2025년 동물복지에 대한 국민의식 조사 [2025 national awareness survey on animal welfare]. National Animal Protection Information System.", u: "https://www.animal.go.kr/front/community/show.do?boardId=boardID03&page=1&pageSize=10&keyword=&column=&menuNo=5000300000&seq=300180" },
    { id: "rule", lang: "ko", t: "Ministry of Agriculture, Food and Rural Affairs. (2025). 동물보호법 시행규칙 [별표 10] [Enforcement Rule of the Animal Protection Act, Annex 10; amended 2025-08-07]. Korea Ministry of Government Legislation.", u: "https://www.law.go.kr/법령/동물보호법시행규칙" },
    { id: "aware2025", lang: "ko", t: "동물복지문제연구소 어웨어. (2025). 2025 반려동물 양육 현황 및 양육자 인식조사 [2025 survey of pet-keeping status and owner attitudes].", u: "https://aware.kr/bbs/board.php?bo_table=B10&wr_id=30" },
    { id: "aware2023", lang: "ko", t: "동물복지문제연구소 어웨어. (2024). 2023 동물복지에 대한 국민인식조사 [2023 national survey on public perception of animal welfare].", u: "https://aware.kr/bbs/board.php?bo_table=B10&wr_id=23&page=2" },
    { id: "aware2022", lang: "ko", t: "동물복지문제연구소 어웨어. (2023). 2022 동물복지에 대한 국민인식조사 [2022 national survey on public perception of animal welfare].", u: "https://aware.kr/bbs/board.php?bo_table=B10&wr_id=4&page=2" }
  ],

  // The four big numbers at the top
  headline: [
    { c: "vermilion", v: "47.7%", label: "of dog owners got their dog from an acquaintance in 2025", sub: "51.2% in 2024 (free + paid, derived)" },
    { c: "azure", v: "31.0%", label: "got their dog from a pet shop in 2025", sub: "28.4% in 2024" },
    { c: "magenta", v: "25.0%", label: "of all pets came as a puppy from a friend’s home litter in 2025", sub: "27.1% in 2024 (derived)" },
    { c: "vermilion", v: "64.2%", label: "of people who got a pet free from an acquaintance cite trust in the source", sub: "2024; seeing the animal 59.1%, low or no cost 42.1%" }
  ],

  blocks: {
    routes: {
      title: "How dog owners got their dog",
      lead: "Share of dog owners, by where the dog came from.",
      unit: "%", max: 40,
      series: ["2024", "2025"],
      groups: [
        { name: "From an acquaintance", c: "vermilion", total: "Free + paid (derived): 51.2% in 2024, 47.7% in 2025", rows: [
          { label: "Free from acquaintance", v: [38.5, 36.0] },
          { label: "Paid from acquaintance", v: [12.7, 11.7] }
        ] },
        { name: "Shops, breeders and shelters", rows: [
          { label: "Pet shop", c: "azure", v: [28.4, 31.0] },
          { label: "Shelter (municipal + private)", c: "teal", v: [13.3, 10.8] },
          { label: "Individual breeder", c: "magenta", v: [3.5, 7.1] }
        ] },
        { name: "Other", rows: [
          { label: "Took in a stray", c: "emerald", v: [2.5, 2.4] },
          { label: "Other", c: "indigo", v: [1.1, 0.9] }
        ] }
      ],
      notes: ["“Other” in 2024 includes 0.9% who bought online."],
      src: "Dog owners only. MAFRA 2024 Table 58 (p. 92); MAFRA 2025 Table 47 (p. 80)."
    },

    trend: {
      title: "Pet shops up, free transfers down",
      lead: "Share of all pets, by where the pet came from. Only the first and last years are in the data used here.",
      unit: "%", years: ["2022", "2025"],
      lines: [
        { label: "Free from acquaintance", c: "vermilion", v: [40.3, 35.9] },
        { label: "Pet shop", c: "azure", v: [21.9, 28.7] }
      ],
      src: "All pets. MAFRA 2024 Figure 32; MAFRA 2025 Table 47."
    },

    housing: {
      title: "Free transfers by type of home",
      lead: "Free acquaintance transfers, by the type of home the owner lives in (2025).",
      unit: "%", max: 50,
      series: ["2025"],
      groups: [ { c: "vermilion", rows: [
        { label: "Detached house", v: [47.2] },
        { label: "Apartment", v: [33.9] }
      ] } ],
      src: "MAFRA 2025 Table 47."
    },

    meaning: {
      title: "What “from an acquaintance” covers",
      lead: "How the acquaintance route splits up, in percent of acquaintance transfers.",
      parts: [
        { label: "Home litter: a puppy from a friend’s pet whose parent the owner knew", c: "magenta", v: 54.4 },
        { label: "Took over an animal its owner could no longer keep", c: "emerald", v: 34.4 },
        { label: "Distant acquaintance, met online", c: "indigo", v: 11.2 }
      ],
      notes: ["The three shares add up to 100%. Across all pets and both surveys, home litters were 54.4% to 58.6% of acquaintance transfers, which puts them at about a quarter of all pets (25.0% in 2025, 27.1% in 2024; derived). The surveys do not say whether the litters were planned."],
      src: "All pets. MAFRA 2024 and 2025 reports."
    },

    reasons: {
      title: "Why people choose each route",
      lead: "Share of people giving each reason.",
      unit: "%", max: 70,
      series: [""],
      groups: [
        { name: "Got a pet free from an acquaintance (2024)", c: "vermilion", rows: [
          { label: "Trust in the source", v: [64.2] },
          { label: "Seeing the animal", v: [59.1] },
          { label: "Low or no cost", v: [42.1] }
        ] },
        { name: "Bought from a pet shop", c: "azure", rows: [
          { label: "Seeing the animal", v: [62.7] },
          { label: "Breed or look", v: [61.3] },
          { label: "Low cost", v: [10.7] }
        ] }
      ],
      notes: ["The year for the pet shop reasons is not given in the source note."],
      src: "MAFRA reports."
    },

    litters: {
      title: "Home litters and what happens to the puppies",
      lead: "Share of owners, or of litters, in percent. More than one answer was allowed.",
      unit: "%", max: 80,
      series: ["2023", "2025"],
      groups: [
        { name: "Owners and acquaintance transfers", c: "magenta", rows: [
          { label: "Owners with a home litter in the past 5 years", v: [15.7, 19.1] },
          { label: "Acquaintance transfers that were a home litter", v: [68.7, 67.9] }
        ] },
        { name: "What happened to the dog litters", c: "vermilion", rows: [
          { label: "Given free to an acquaintance", v: [64.5, 67.2] },
          { label: "Sold to an acquaintance", v: [16.1, 23.5] },
          { label: "Kept by the owner", v: [17.7, 20.2] },
          { label: "Given free to a stranger", v: [16.1, 14.3] },
          { label: "Sold to a stranger", v: [9.7, 7.6] }
        ] }
      ],
      notes: [
        "Owners: Aware 2023 n=719, Aware 2025 n=1,122. Litter shares are of owners whose dog had a litter (2023 n=62; 2025 n=119), so they are small samples.",
        "“Stranger” means someone met via the internet in 2023 and an unknown individual in 2025."
      ],
      src: "Aware 2023 Tables 11, 12; Aware 2025 Tables 10, 12, 13."
    },

    neutering: {
      title: "Neutering",
      lead: "Share of dog owners, in percent.",
      unit: "%", max: 80,
      series: ["2022", "2023"],
      groups: [
        { name: "Dogs neutered", c: "teal", rows: [
          { label: "All dog owners", v: [63.5, 66.1] },
          { label: "Indoor dogs", v: [68.2, 68.9] },
          { label: "Dogs tied up outdoors", v: [32.6, 43.2] }
        ] },
        { name: "Reasons for not neutering", c: "rose", rows: [
          { label: "Fear of pain", v: [40.5, 21.8] },
          { label: "Seen as unnecessary", v: [29.8, 20.9] },
          { label: "Planning to", v: [22.8, 16.0] },
          { label: "Against the order of nature", v: [null, 14.6] },
          { label: "Health worries", v: [16.3, 11.7] },
          { label: "Cost", v: [14.9, 7.8] },
          { label: "To have puppies", v: [9.8, 4.4] }
        ] }
      ],
      notes: [
        "Reasons are asked of owners with unneutered pets (2022 n=215, 2023 n=206); several answers were allowed. “Not asked” means the question was not in the 2022 survey.",
        "In 2022 the report text gives 9.3% for “to have puppies” (its table gives 9.8%). In 2022 dog neutering was 69.6% in apartments against 41.0% in detached houses."
      ],
      src: "Aware 2022 Tables 12, 13; Aware 2023 Tables 24, 95."
    },

    price: {
      title: "Average price paid",
      lead: "Average price in thousand won, for the 351 people who paid. Free transfers and shelter adoptions are excluded.",
      unit: "", max: 700,
      series: [""],
      groups: [
        { name: "By source", c: "azure", rows: [
          { label: "Pet shop", v: [617] },
          { label: "Online seller", v: [561] },
          { label: "Vet", v: [459] },
          { label: "Unknown individual", v: [458] },
          { label: "Acquaintance", v: [361] }
        ] },
        { name: "Averages", c: "indigo", rows: [
          { label: "All buyers", v: [521] },
          { label: "Dog owners", v: [557] }
        ] }
      ],
      notes: ["The 2025 report’s text gives the average adoption cost as 48.6만원 (486 thousand won), but its own table gives 55.86만원 (559 thousand won). That is an inconsistency inside the report."],
      src: "Aware 2025 (n=351 who paid)."
    }
  }
};
