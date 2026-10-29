// Shared data for the dog timeline. One file per country, same format.
// Years: negative = BCE. See data/README.md for every field.
window.DOGTL = window.DOGTL || { countries: [] };
window.DOGTL.countries.push({
  "id": "korea",
  "name": "Korea",
  "main": true,
  "intro": "What dogs were kept for on the Korean peninsula, from the Neolithic to 2026. Select any marker or bar for the detail and the sources behind it.",
  "teamDoc": "https://docs.google.com/document/d/19Hi8dxO-eTzSFt1fi5tv5RR4zIk3ii065Z6KhVJPNDA/edit",
  "eras": [
    {
      "n": "Prehistory",
      "from": -6000,
      "to": -300
    },
    {
      "n": "Early states and Three Kingdoms",
      "from": -300,
      "to": 668
    },
    {
      "n": "Unified Silla and Goryeo",
      "from": 668,
      "to": 1392
    },
    {
      "n": "Joseon",
      "from": 1392,
      "to": 1910
    },
    {
      "n": "Colonial era",
      "from": 1910,
      "to": 1945
    },
    {
      "n": "Modern Korea",
      "from": 1945,
      "to": 2027
    }
  ],
  "sources": {
    "lee2013": {
      "t": "Lee, J. J. (2013). Interpreting roles of domestic dogs in the Neolithic to the Three Kingdoms periods in Korea. Journal of Korean Ancient History, 81, 5–33.",
      "u": "https://scholar.kyobobook.co.kr/article/detail/4010023997841",
      "k": "Journal article (abstract)"
    },
    "kim2026": {
      "t": "Kim, H., et al. (2026). Ancient East Asian dog lineage is revealed by genome of ancient Korean dogs. PLOS One, 21(5), e0346864.",
      "u": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13148662/",
      "k": "Journal article"
    },
    "archmag": {
      "t": "Archaeology Magazine (8 May 2026). Study suggests Korea’s ancient dogs differed from other East Asian canines.",
      "u": "https://archaeology.org/news/2026/05/08/study-suggests-koreas-ancient-dogs-differed-from-other-east-asian-canines/",
      "k": "News report"
    },
    "jda2026": {
      "t": "Korea JoongAng Daily (2026). Korea-Japan research team completes first full genome sequencing of ancient dogs from Korean Peninsula.",
      "u": "https://www.koreajoongangdaily.com/lifestyle/korea-japan-research-team-completes-first-full-genome-sequencing-of-ancient-dogs-from-korean-peninsula/12516448",
      "k": "News report"
    },
    "ahn2023": {
      "t": "Ahn, B., et al. (2023). Origin and population structure of native dog breeds in the Korean peninsula and East Asia. iScience, 26(6), 106982.",
      "u": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10291505",
      "k": "Journal article"
    },
    "leeyoo": {
      "t": "Lee, C. G., & Yoo, G. H. (1988). Jindo dogs – Korean native dogs: A historical review. Korean Journal of Veterinary Research, 28(2), 405–408.",
      "u": "https://agris.fao.org/search/en/records/6471c7b377fd37171a6f3425",
      "k": "Journal article (abstract)"
    },
    "buyeo": {
      "t": "Buyeo (Wikipedia), summarising the Sanguozhi, ch. 30, ‘Dongyi’.",
      "u": "https://en.wikipedia.org/wiki/Buyeo",
      "k": "Reference site"
    },
    "koh2016": {
      "t": "Koh, K.-H. (2016). Food culture of Tomb of An-Ak No. 3 in Koguryo Dynasty. Journal of the Korean Society of Food Culture, 31(1), 51–63.",
      "u": "https://www.koreascience.or.kr/article/JAKO201609562999514.page?lang=ko",
      "k": "Journal article (abstract)"
    },
    "kstudies": {
      "t": "Korean Studies list (May 2013). Beginning of dog-meat consumption.",
      "u": "https://koreanstudies.com/pipermail/koreanstudies_koreanstudies.com/2013-May/010315.html",
      "k": "Scholars’ mailing-list thread"
    },
    "wikidm": {
      "t": "Dog meat consumption in South Korea (Wikipedia).",
      "u": "https://en.wikipedia.org/wiki/Dog_meat_consumption_in_South_Korea",
      "k": "Reference site"
    },
    "jindocty": {
      "t": "Jindo County. History of the Jindo dog.",
      "u": "https://jindo.go.kr/eng/sub.cs?m=46",
      "k": "Local government site"
    },
    "wikijindo": {
      "t": "Korean Jindo (Wikipedia).",
      "u": "https://en.wikipedia.org/wiki/Korean_Jindo",
      "k": "Reference site"
    },
    "jda2012": {
      "t": "Korea JoongAng Daily (8 April 2012). Dog of Silla royalty gets heritage designation.",
      "u": "https://www.koreajoongangdaily.com/korea/dog-of-silla-royalty-gets-heritage-designation/10149140",
      "k": "News report"
    },
    "yiam": {
      "t": "‘Dogs and puppies in Korean culture’ (April 2024), on Yi Am’s painting, tagged to the National Museum of Korea collection.",
      "u": "https://historylibrary.net/m/entry/Dogs-and-puppies-in-Korean-culture",
      "k": "Museum item (repost)"
    },
    "oh2012": {
      "t": "Oh, S.-D. (2012). A literature review on the types and cooking methods of soondae during the Joseon Dynasty. Journal of the Korean Society of Food Culture, 27(4), 340–345.",
      "u": "https://www.koreascience.or.kr/article/JAKO201225150622890.page?&lang=ko",
      "k": "Journal article (abstract)"
    },
    "ahn1999": {
      "t": "Ahn, Y.-G. (1999). Dog meat eating history and culture in Korea. The Korean Journal of Food and Nutrition, 12(4), 387–396.",
      "u": "https://koreascience.or.kr/article/JAKO199911920137949.page",
      "k": "Journal article (abstract)"
    },
    "gwangju": {
      "t": "Cho, N. (10 July 2017). The dog days in Korea: an attempt to get the facts right about ‘bosin-tang’. Gwangju News.",
      "u": "https://gwangjunewsgic.com/food-drink/korean-food/bosin-tang/",
      "k": "Magazine column"
    },
    "kh2018": {
      "t": "Kim, M. (2018). Sapsaree feature. The Korea Herald.",
      "u": "https://www.koreaherald.com/article/1543838",
      "k": "News report"
    },
    "kh2026": {
      "t": "Kang, H. (30 June 2026). Visual History of Korea. The Korea Herald.",
      "u": "https://www.koreaherald.com/article/10793384",
      "k": "News report"
    },
    "kt2024": {
      "t": "The Korea Times (9 January 2024). Korea bans age-old tradition of dog meat consumption.",
      "u": "https://www.koreatimes.co.kr/southkorea/politics/20240109/korea-bans-age-old-tradition-of-dog-meat-consumption",
      "k": "News report"
    },
    "iaka": {
      "t": "International Aid for Korean Animals. South Korea’s animal protection laws (last modified 4 Oct 2025).",
      "u": "https://koreananimals.org/south-koreas-animal-protection-laws/",
      "k": "NGO page"
    },
    "penn": {
      "t": "Pennington, R. (13 January 2024). Kanine kuisine in Korea.",
      "u": "https://richardpennington.com/2024/01/13/kanine-kuisine-in-korea/",
      "k": "Blog"
    },
    "dugn": {
      "t": "Dugnoille, J. (2018). Food, Culture and Society. Article on the South Korean dog-meat trade and the pet/food boundary.",
      "u": "https://ore.exeter.ac.uk/repository/handle/10871/27435",
      "k": "Journal article (abstract)"
    },
    "kbpet": {
      "t": "The Korea Times (30 June 2025). Pet ownership in Korea hits 15 million.",
      "u": "https://www.koreatimes.co.kr/amp/economy/others/20250630/pet-ownership-in-korea-hits-15-million",
      "k": "News report"
    },
    "mafra": {
      "t": "Ministry of Agriculture, Food and Rural Affairs (15 May 2026). Early closure of remaining dog meat farms, 82% closed.",
      "u": "https://www.mafra.go.kr/bbs/english/25/577928/artclView.do",
      "k": "Government statement"
    },
    "bbc": {
      "t": "Butler, G., & Kim, H. (25 June 2025). South Korea banned dog meat. So what happens to the dogs? BBC News.",
      "u": "https://www.bbc.com/news/articles/c20r7lkel68o",
      "k": "News report"
    },
    "jda2026b": {
      "t": "Seo, J., & Paik, J. (18 August 2026). As dog meat ban nears in Korea, canines still require rescue. Korea JoongAng Daily.",
      "u": "https://www.koreajoongangdaily.com/korea/as-dog-meat-ban-nears-in-korea-canines-still-require-rescue/12816395",
      "k": "News report"
    }
  },
  "events": [
    {
      "id": "e01",
      "seq": 0,
      "cat": "origins",
      "start": -6000,
      "end": -4000,
      "approx": true,
      "date": "Early Neolithic",
      "tag": "First domestic dogs",
      "title": "The earliest domestic dogs",
      "sum": "Dog remains from early Neolithic sites are the oldest evidence of domestic dogs on the peninsula.",
      "pts": [
        "Lee’s review pulls together dog remains from 61 archaeological sites, from the Neolithic to Unified Silla.",
        "The earliest domestic dogs come from early Neolithic sites such as Bibong-ri, Yeondae-do, Daeyeonpyeong-do and Dongsam-dong.",
        "The 2026 genome paper also states that dog remains have been excavated from Korean sites dating back to the Neolithic."
      ],
      "care": "The abstract names the sites but gives no calendar years. The absolute dates are in the full paper.",
      "src": [
        {
          "s": "lee2013",
          "why": "The only systematic survey of dog remains across Korean prehistory. It underpins every early entry on this page."
        },
        {
          "s": "kim2026",
          "why": "Confirms the Neolithic starting point in a recent peer-reviewed paper."
        }
      ],
      "verify": "Early Neolithic has no calendar years in the abstract; range is my estimate"
    },
    {
      "id": "e02",
      "seq": 1,
      "cat": "role",
      "start": -6000,
      "end": 935,
      "approx": true,
      "date": "Neolithic to Unified Silla (to 935 CE)",
      "tag": "Eaten in small amounts",
      "bar": "Dogs eaten, in small amounts",
      "title": "Dogs eaten, but not often",
      "sum": "Evidence that dogs were eaten runs through the whole period, but the quantities are small. Dogs were probably not a common food.",
      "pts": [
        "The evidence comes mainly from shell middens.",
        "Lee examined layers, butchery marks, cooking marks and associated finds at about 30 sites with clear context.",
        "North of the peninsula, Mark Byington cites dog and chicken bones in a settlement at Dahaimeng (central Jilin, early Puyo, latter half of the 3rd century BCE) as likely food waste."
      ],
      "care": "Byington also points out that acidic soil on the peninsula probably destroyed organic remains, so small numbers may understate real use. That is his opinion in a mailing-list post, not a finding.",
      "src": [
        {
          "s": "lee2013",
          "why": "Gives the main conclusion: consumption existed, but was marginal."
        },
        {
          "s": "kstudies",
          "why": "Adds the preservation caveat and the Dahaimeng example from named specialists."
        }
      ],
      "verify": "Category: eating dogs counted as a Role (the use); views of it are Meaning"
    },
    {
      "id": "e03",
      "seq": 2,
      "cat": "meaning",
      "start": -6000,
      "end": 935,
      "approx": true,
      "date": "Neolithic to Unified Silla (to 935 CE)",
      "tag": "Ritual sacrifice",
      "bar": "Ritual sacrifice",
      "title": "Dogs as ritual offerings",
      "sum": "Dogs were sacrificed in rituals for thousands of years, from the Neolithic to Unified Silla.",
      "pts": [
        "The best-known case is a young dog, about 5–6 months old, wrapped in a mesh bag and placed in a ritual pit at the Gangmun-dong wetland site.",
        "After the Three Kingdoms period, dogs were buried under building foundation stones and sacrificed in well rituals."
      ],
      "care": "Both points come from one author’s review, read here through its abstract.",
      "src": [
        {
          "s": "lee2013",
          "why": "The only source in this set that documents ritual use, which most popular accounts skip."
        }
      ]
    },
    {
      "id": "e04",
      "seq": 3,
      "cat": "meaning",
      "start": -6000,
      "end": 668,
      "approx": true,
      "date": "Neolithic to Three Kingdoms",
      "tag": "Deliberate burial",
      "bar": "Deliberate burial near people",
      "title": "Dogs buried with care",
      "sum": "Dogs were deliberately buried after natural death. At Neuk-do, some lay beside human graves and others in a separate dog cemetery.",
      "pts": [
        "Burials appear at Daeyeonpyeong-do Kkachisan shell midden, Gwangyang Osari Dontak shell midden and Sacheon Neuk-do.",
        "At Neuk-do, adult male dogs were buried near human graves, which Lee reads as a special role. Other dogs, including puppies, went into a separate dog cemetery.",
        "In the Three Kingdoms period dogs sometimes accompanied the dead, far less often than horses or cattle."
      ],
      "care": "Lee’s abstract does not use the word companion. Calling this a close bond is our reading of the burial pattern.",
      "src": [
        {
          "s": "lee2013",
          "why": "The strongest evidence we have that some dogs held a social place in the community."
        }
      ],
      "verify": "Bar ended at the 4th c. column before; I used the end of the Three Kingdoms (668)"
    },
    {
      "id": "e05",
      "seq": 4,
      "cat": "origins",
      "start": -250,
      "end": 100,
      "approx": true,
      "date": "3rd c. BCE to early CE",
      "tag": "Neuk-do dog",
      "title": "A dog from Neuk-do, Sacheon",
      "sum": "One of four dogs in the 2026 genome study came from this small island site off the southern coast.",
      "pts": [
        "Dog remains came from C District. The site runs from the 3rd century BCE into the early Common Era.",
        "Neuk-do has shell middens, burials, dwellings and artifacts showing contact with China and Japan. The paper calls it an exchange hub.",
        "The dog was small to medium in size by its bones."
      ],
      "care": "Individual radiocarbon dates are in the paper’s Supplementary Table S3, which was not opened here.",
      "src": [
        {
          "s": "kim2026",
          "why": "Primary source for the site, the dating and the genome result."
        },
        {
          "s": "jda2026",
          "why": "Names the two sites and the four institutions behind the study."
        }
      ]
    },
    {
      "id": "e06",
      "seq": 5,
      "cat": "role",
      "start": 201,
      "end": 300,
      "approx": true,
      "date": "3rd c. CE",
      "tag": "Dog ‘ka’ in Buyeo",
      "title": "The dog ‘ka’ of Buyeo",
      "sum": "A Chinese record of the 3rd century says Buyeo’s ruling lords held titles named for animals, and one of them was the dog.",
      "pts": [
        "The Records of the Three Kingdoms (Sanguozhi), chapter 30, describes the lords as ka, told apart by animal names.",
        "Four ka are listed: horse, cow, pig and dog.",
        "Goguryeo adopted a similar ka system."
      ],
      "care": "Read here through Wikipedia’s summary, not the Chinese text. What the dog title meant in practice is not explained in what was read.",
      "src": [
        {
          "s": "buyeo",
          "why": "A dated written source that puts the dog inside the political vocabulary of an early Korean state."
        }
      ]
    },
    {
      "id": "e07",
      "seq": 6,
      "cat": "role",
      "start": 301,
      "end": 400,
      "approx": true,
      "date": "4th c. CE (357 CE per one scholar)",
      "tag": "Anak Tomb No. 3 mural",
      "title": "Anak Tomb No. 3: dog in the meat store",
      "sum": "A Goguryeo tomb mural shows whole carcasses of roe deer, dog and pig in a meat storage space.",
      "pts": [
        "Koh (2016) studies the mural’s grain yard, well, kitchen and meat store, and compares them with Chinese tomb murals from before the 4th century.",
        "In the Anak mural whole carcasses are hung. In Chinese murals large animals were cut into parts.",
        "Youngsook Pak (in the Korean Studies thread) calls it the earliest evident depiction of dog as meat, dated 357, and says dog was then regarded more like other meat.",
        "Wikipedia also cites a 4th-century Goguryeo tomb painting of a slaughtered dog."
      ],
      "care": "Koh’s abstract confirms the dog but gives no year. The 357 date comes from a scholar’s post, and the Wikipedia claim rests on a 2008 newspaper column.",
      "src": [
        {
          "s": "koh2016",
          "why": "Peer-reviewed confirmation that the mural includes a dog among the carcasses."
        },
        {
          "s": "kstudies",
          "why": "Source of the 357 date and the reading of dog as ordinary meat."
        },
        {
          "s": "wikidm",
          "why": "Shows how the mural is usually cited."
        }
      ],
      "verify": "Mural dated 357 CE by one scholar only; kept to the 4th century"
    },
    {
      "id": "e08",
      "seq": 7,
      "cat": "origins",
      "start": 301,
      "end": 600,
      "approx": true,
      "date": "4th–6th c. CE",
      "tag": "Bonghwang-dong dog",
      "title": "A dog from Bonghwang-dong, Gimhae",
      "sum": "The second archaeological source of the 2026 genome study is a major Geumgwan Gaya centre.",
      "pts": [
        "Bonghwang-dong was a large residential and ceremonial centre of the Geumgwan Gaya polity.",
        "One dog bone was sampled from the upper (northern) district.",
        "The bone was small to medium in size."
      ],
      "care": "The paper says nothing about how this dog was used or why it was buried.",
      "src": [
        {
          "s": "kim2026",
          "why": "Primary source for the site and the dating."
        }
      ]
    },
    {
      "id": "e09",
      "seq": 8,
      "cat": "role",
      "start": 401,
      "end": 425,
      "approx": true,
      "date": "Early 5th c. CE",
      "tag": "Hunting dogs to Japan",
      "title": "Korean hunting dogs reach Japan",
      "sum": "Two sources agree that Korean hunting dogs were sent to Japan in the early 5th century.",
      "pts": [
        "Lee & Yoo (1988) say their review of Japanese history found Korean hunting dogs sent to Japan in the early 5th century. Blood-serum and molecular work they cite suggests Korean dogs reached Japan 1,300–2,500 years ago.",
        "Jindo County’s history page says dogs across the country were mainly hunting dogs in the 5th–6th centuries and mentions a Baekje hunting dog and a hawk being brought to Japan in the early 5th century."
      ],
      "care": "The county page names a text I could not match to a standard source. It also repeats local rumours (a sunken Song ship, Mongol soldiers) and a 15,000-year claim that conflicts with the 1,300–2,500-year estimate. Lee & Yoo is read through its abstract only.",
      "src": [
        {
          "s": "leeyoo",
          "why": "Peer-reviewed support for hunting dogs as an early export."
        },
        {
          "s": "jindocty",
          "why": "The only source found that calls hunting the main role of dogs in this period."
        }
      ],
      "verify": "\"Early 5th c.\" read as 401–425"
    },
    {
      "id": "e10",
      "seq": 9,
      "cat": "role",
      "start": 679,
      "end": 685,
      "date": "679 and 685 CE",
      "tag": "Silla gifts to Japan",
      "title": "Silla gives dogs to Japan",
      "sum": "The Jindo County page says horses, mules and dogs were given from Silla to Japan in 679 and 685.",
      "pts": [
        "The gifts are placed in the reign of the Chunmu emperor.",
        "If accurate, they show dogs circulating as valued goods between courts."
      ],
      "care": "The page does not name the text behind these dates, so treat this as a lead to check against the Japanese chronicles.",
      "src": [
        {
          "s": "jindocty",
          "why": "Only source found for this item."
        }
      ]
    },
    {
      "id": "e11",
      "seq": 10,
      "cat": "breed",
      "start": 601,
      "end": 700,
      "approx": true,
      "date": "7th c. CE (Silla)",
      "tag": "Sapsaree in Silla art",
      "title": "Sapsaree in early art and documents",
      "sum": "A newspaper feature says Sapsarees appear in paintings and documents from as early as the 7th century, tied to Silla.",
      "pts": [
        "The Sapsaree is a long-haired native breed.",
        "Genome work links it mainly to West Eurasian ancestry, which fits the idea of very old contact with dogs from the west."
      ],
      "care": "The 7th-century claim is a single statement in a news feature with no artwork or document named.",
      "src": [
        {
          "s": "kh2018",
          "why": "The only source here that dates the Sapsaree to Silla."
        },
        {
          "s": "ahn2023",
          "why": "Gives the genetic background for the breed."
        }
      ]
    },
    {
      "id": "e12",
      "seq": 11,
      "cat": "meaning",
      "start": 668,
      "end": 1392,
      "approx": true,
      "date": "Silla and Goryeo (to 1392)",
      "tag": "Buddhism limits meat",
      "title": "Buddhism discourages meat",
      "sum": "Dog meat was uncommon under Silla and Goryeo, when Buddhism was the state religion and meat eating was generally discouraged.",
      "pts": [
        "Wikipedia attributes this to the Jogye Order’s history of Korean Buddhism.",
        "Pennington gives the same reading, and adds that the prohibition on eating dogs relaxed under Neo-Confucian Joseon."
      ],
      "care": "This is a general rule about meat, not direct evidence about dogs. Neither source cites a text for the dog case.",
      "src": [
        {
          "s": "wikidm",
          "why": "Summarises the claim and its cited source."
        },
        {
          "s": "penn",
          "why": "Shows how the same story is repeated in popular accounts."
        }
      ],
      "verify": "Moved from Food: it is about attitudes (Buddhism) not use"
    },
    {
      "id": "e13",
      "seq": 12,
      "cat": "breed",
      "start": 918,
      "end": 1392,
      "approx": true,
      "date": "Goryeo period",
      "tag": "Donggyeong dog",
      "title": "The Donggyeong dog in records and clay",
      "sum": "The Gyeongju hunting breed appears in a Goryeo-era chronicle and on Silla earthenware.",
      "pts": [
        "The Chronicles of the Three Kingdoms, written in the Goryeo period, has a chapter about the dog.",
        "Donggyeong-like dogs appear on Silla earthenware depicting daily life.",
        "Choi Seok-gyu, who heads the preservation association, believes it was the dog of the Silla royalty.",
        "The breed has a bobtail or no tail, which separates it from the longer-tailed Jindo."
      ],
      "care": "The royal-dog idea is one person’s interpretation of the earthenware, not an established fact.",
      "src": [
        {
          "s": "jda2012",
          "why": "Brings together the written and visual traces of this breed."
        }
      ],
      "verify": "Category: a breed in the records; was in Hunting and status"
    },
    {
      "id": "e14",
      "seq": 13,
      "cat": "meaning",
      "start": 1501,
      "end": 1600,
      "approx": true,
      "date": "16th c. (Joseon)",
      "tag": "Yi Am’s puppies",
      "title": "Yi Am, ‘Dog and Puppies’",
      "sum": "A Joseon painting shows a mother dog with her puppies under a tree.",
      "pts": [
        "Yi Am was born in 1499.",
        "The image is in the National Museum of Korea’s collection."
      ],
      "care": "The page I could open is a repost and gives no year for the painting. Check the museum’s own catalogue entry before citing.",
      "src": [
        {
          "s": "yiam",
          "why": "A visual record of affection toward dogs in the Joseon period."
        }
      ]
    },
    {
      "id": "e14b",
      "seq": 14,
      "cat": "meaning",
      "start": 1392,
      "end": 1897,
      "approx": true,
      "date": "Joseon (1392–1897), undated",
      "tag": "Dogs as companions",
      "bar": "Officials: dogs are companions",
      "title": "Some Joseon officials call dogs companions",
      "sum": "Some Joseon officials argued that dogs were companions of people and called for dog meat to be banned.",
      "pts": [
        "Dog meat was still seen as a delicacy for special days: hot summer days, funerals and 60th birthdays (hwangap).",
        "Wikipedia cites this to Dugnoille (2021), p. 22."
      ],
      "care": "I could not open the 2021 source. The Dugnoille article I could check is from 2018 and covers the present day, not Joseon.",
      "src": [
        {
          "s": "wikidm",
          "why": "Where the claim appears, with its cited source."
        },
        {
          "s": "ahn1999",
          "why": "Confirms the same occasions for eating dog, in Chungnam, from a peer-reviewed article."
        }
      ]
    },
    {
      "id": "e15",
      "seq": 15,
      "cat": "role",
      "start": 1500,
      "end": 1700,
      "approx": true,
      "date": "Mid-Joseon",
      "tag": "Dog soondae recipe",
      "title": "Dog meat in a Joseon recipe, and then gone",
      "sum": "Across 12 Joseon cookbooks, dog meat appears in one of 15 soondae types, only in the middle period.",
      "pts": [
        "That is 6.7% of the recorded soondae types, the least common ingredient.",
        "The late-Joseon list has beef, lamb, fish and pork, and no dog."
      ],
      "care": "This tells us about one dish, not about how much dog was eaten overall. The abstract does not name the cookbook.",
      "src": [
        {
          "s": "oh2012",
          "why": "Rare quantitative evidence from Joseon texts."
        }
      ],
      "verify": "\"Mid-Joseon\" is vague; I used 1500–1700"
    },
    {
      "id": "e16",
      "seq": 16,
      "cat": "meaning",
      "start": 1783,
      "date": "1783",
      "tag": "Dog eaters shunned",
      "title": "Dog eaters kept from ginseng farms",
      "sum": "Yu Deuk-gong’s Goundangpilgi (1783) says people who ate dog were seen as irreverent and barred from ginseng farms.",
      "pts": [
        "It suggests that some people regarded dog meat as unclean."
      ],
      "care": "Read through Wikipedia’s summary, which cites the Korean Classics database. The original text was not opened.",
      "src": [
        {
          "s": "wikidm",
          "why": "Where the passage is summarised and sourced."
        }
      ],
      "verify": "Moved from Food: dog eaters being shunned is an attitude"
    },
    {
      "id": "e17",
      "seq": 17,
      "cat": "role",
      "start": 1816,
      "approx": true,
      "date": "c. 1816",
      "tag": "Poem: boiled dog",
      "title": "A poem of boiled dog for the in-laws",
      "sum": "A poem by a son of the scholar Chŏng Yagyong describes a woman serving boiled dog meat to her parents-in-law.",
      "pts": [
        "It shows dog meat as something served at home in the early 19th century."
      ],
      "care": "Wikipedia cites Ahn (2000) and Seo (2002) without page numbers and says so. Verify in the originals.",
      "src": [
        {
          "s": "wikidm",
          "why": "Only source found for the poem."
        }
      ],
      "verify": "Category: a poem about eating dog; could be Meaning"
    },
    {
      "id": "e18",
      "seq": 18,
      "cat": "role",
      "start": 1849,
      "date": "1849",
      "tag": "Bosintang recipe",
      "title": "Dongguk Sesigi records bosintang",
      "sum": "A Joseon calendar of customs contains a recipe for bosintang, the dog-meat soup, and is often cited as an early recipe.",
      "pts": [
        "Ahn (1999) says dog is traditionally eaten on Boknal, the hottest days of summer, and in some Chungnam communities at funerals and 60th birthdays.",
        "A 2017 column gives two folk explanations for the summer link: cows and pigs were worth more as farm animals, and a five-elements idea that fire (dog) defeats metal (summer)."
      ],
      "care": "The 1849 date and the recipe come from Wikipedia, which cites a 2008 newspaper column. The column about origins is not scholarly.",
      "src": [
        {
          "s": "wikidm",
          "why": "Where the 1849 recipe is dated."
        },
        {
          "s": "ahn1999",
          "why": "Peer-reviewed overview of the eating customs."
        },
        {
          "s": "gwangju",
          "why": "Useful for the folk reasoning, not as evidence."
        }
      ]
    },
    {
      "id": "e19",
      "seq": 19,
      "cat": "role",
      "start": 1910,
      "end": 1945,
      "date": "1910–45 (colonial era)",
      "tag": "Dogs killed for fur",
      "title": "Long-haired dogs killed for fur",
      "sum": "State archives are said to record long-haired dogs killed in large numbers to make winter coats for Japanese soldiers.",
      "pts": [
        "War and poverty after the occupation then brought the Sapsaree close to extinction."
      ],
      "care": "From a single news feature that refers to the archives without naming a document.",
      "src": [
        {
          "s": "kh2018",
          "why": "The only source found on the fur requisition."
        }
      ],
      "verify": "Category: dogs killed for fur is a use; was in Breeds and heritage"
    },
    {
      "id": "e20",
      "seq": 20,
      "cat": "breed",
      "start": 1938,
      "date": "1938",
      "tag": "Jindo registered",
      "title": "The Jindo becomes a Natural Treasure",
      "sum": "The colonial government registered the Jindo as its 53rd Natural Treasure in May 1938.",
      "pts": [
        "Professor Tamezo Mori surveyed the breed in February 1937.",
        "Jindo islanders traditionally used the dogs to hunt water deer and wild boar.",
        "A 2026 article describes Pungsan, Jindo, Sapsal, Donggyeongi and Jeju dogs as landraces shaped by environment and by generations of hunters and farmers."
      ],
      "care": "The details come from Wikipedia. The county page confirms 1938 but not the month or Mori.",
      "src": [
        {
          "s": "wikijindo",
          "why": "Gives the designation history and hunting use."
        },
        {
          "s": "jindocty",
          "why": "Local confirmation of the 1938 protection."
        },
        {
          "s": "kh2026",
          "why": "Frames the native breeds as working landraces."
        }
      ]
    },
    {
      "id": "e21",
      "seq": 21,
      "cat": "breed",
      "start": 1962,
      "date": "1962",
      "tag": "Jindo re-designated",
      "title": "Jindo re-designated by the Korean state",
      "sum": "South Korea designated the Jindo as Natural Monument No. 53 in 1962 and placed it under the Cultural Heritage Protection Act.",
      "pts": [
        "From here the dog is treated as national heritage as well as an animal."
      ],
      "care": "The county page does not mention 1962. This date rests on Wikipedia’s citation of the Cultural Heritage Administration.",
      "src": [
        {
          "s": "wikijindo",
          "why": "Source for the 1962 designation."
        }
      ]
    },
    {
      "id": "e22",
      "seq": 22,
      "cat": "law",
      "start": 1978,
      "date": "1978",
      "tag": "Dogs leave livestock list",
      "title": "Dogs removed from the livestock list",
      "sum": "A Food Sanitation Act revision in 1978 took dogs off the livestock list, leaving dog meat in a legal gray area for 46 years.",
      "pts": [
        "Dog farming remained legal under the Livestock Industry Act.",
        "No clear rules covered butchering or retailing dog meat."
      ],
      "care": "Taken from one news report. Check the date and wording in a legal source before citing it.",
      "src": [
        {
          "s": "kt2024",
          "why": "Gives the legal history behind the 2024 ban."
        }
      ]
    },
    {
      "id": "e23",
      "seq": 23,
      "cat": "breed",
      "start": 1985,
      "date": "1985",
      "tag": "Sapsaree rescued",
      "title": "Eight Sapsarees found in a kennel",
      "sum": "Dr Ha Ji-hong, back from genetics studies in the US, found eight Sapsarees in his father’s kennel, the start of the breed’s recovery.",
      "pts": [
        "The Sapsaree, Jindo and Donggyeongi were later named national treasures, with government help for breeding.",
        "A 2023 genome paper notes all three breeds were restored from a limited number of individuals."
      ],
      "care": "The feature gives no date for the designations.",
      "src": [
        {
          "s": "kh2018",
          "why": "Source for the 1985 episode."
        },
        {
          "s": "ahn2023",
          "why": "Confirms the small founding populations."
        }
      ]
    },
    {
      "id": "e24",
      "seq": 24,
      "cat": "meaning",
      "start": 1988,
      "date": "1988",
      "tag": "Olympics pressure",
      "title": "Foreign criticism around the Seoul Olympics",
      "sum": "Dog meat drew foreign criticism during the 1988 Seoul Olympics, and again in 2002 and 2018.",
      "pts": [
        "Pennington reports that the pressure led to a ban on selling or eating dog meat inside Seoul’s four main gates.",
        "Dugnoille’s ethnography finds that the public line between pets and food seems designed to deflect foreign criticism, yet often breaks down in practice. Dog meat’s symbolic value (medicinal belief, Korean identity) can override moral doubts."
      ],
      "care": "The four-gates ban comes from a blog with no citation. The foreign-criticism point is in the Korea Times.",
      "src": [
        {
          "s": "kt2024",
          "why": "Names the three events that drew criticism."
        },
        {
          "s": "penn",
          "why": "Source for the four-gates claim, unverified."
        },
        {
          "s": "dugn",
          "why": "Explains why the ‘pet versus food’ line is contested."
        }
      ],
      "verify": "Moved from Law: it is foreign opinion and pressure"
    },
    {
      "id": "e25",
      "seq": 25,
      "cat": "origins",
      "start": 1988,
      "date": "1988",
      "tag": "Jindo origin debate",
      "title": "Are Jindos native? A 1988 review",
      "sum": "Lee and Yoo concluded that Jindos are native Korean dogs, not descendants of Song dynasty or Mongolian dogs.",
      "pts": [
        "They say the dogs appear to descend from Stone Age dogs, kept pure on Jindo island.",
        "Popular accounts had given them a Chinese or Mongol origin."
      ],
      "care": "Read through the abstract record only. Later genome work (2023, 2026) gives a more detailed picture.",
      "src": [
        {
          "s": "leeyoo",
          "why": "An early scholarly argument for native origin."
        }
      ]
    },
    {
      "id": "e26",
      "seq": 26,
      "cat": "law",
      "start": 1991,
      "date": "1991",
      "tag": "Animal Protection Act",
      "title": "First Animal Protection Act",
      "sum": "South Korea adopted its first Animal Protection Law, with caretaker duties and bans on cruelty, but minimal penalties.",
      "pts": [
        "It also covers abandoned animals and inhumane slaughter.",
        "Weak penalties made it largely hard to enforce."
      ],
      "care": "From an advocacy group’s summary of the law.",
      "team": {
        "t": "DR07 · Animal Protection Act",
        "n": "Your team’s entry covers the law today. This node gives its starting date."
      },
      "src": [
        {
          "s": "iaka",
          "why": "A timeline of the law’s amendments from 1991 to 2024."
        }
      ]
    },
    {
      "id": "e27",
      "seq": 27,
      "cat": "law",
      "start": 2007,
      "end": 2011,
      "date": "2007 and 2011",
      "tag": "Penalties raised",
      "title": "Amendments raise penalties and owner duties",
      "sum": "The 2007 amendment raised abuse penalties and added pet-owner responsibilities. The 2011 amendment added committees and reporting.",
      "pts": [
        "2007: clearer definitions of care and cruelty, and rules for retailers, abandoned animals and shelters.",
        "2011: a national animal welfare committee, shelter committees and annual welfare reports."
      ],
      "care": "From the same advocacy summary as the 1991 entry.",
      "team": {
        "t": "DR07 · Animal Protection Act",
        "n": "These are the steps that added owner duties, relevant to your owner-responsibility theme."
      },
      "src": [
        {
          "s": "iaka",
          "why": "Source for both amendments."
        }
      ]
    },
    {
      "id": "e28",
      "seq": 28,
      "cat": "breed",
      "start": 2012,
      "date": "April–May 2012",
      "tag": "Donggyeong monument",
      "title": "Donggyeong dog designated a natural monument",
      "sum": "In April 2012 the Cultural Heritage Administration announced it would designate the Donggyeong as a natural monument, with registration expected in May.",
      "pts": [
        "The breed had been nearly endangered. A preservation effort began in 2006 and about 306 dogs were officially recognised."
      ],
      "care": "The article reports a plan and an expected date, not the final registration.",
      "src": [
        {
          "s": "jda2012",
          "why": "Source for the announcement and population figures."
        }
      ]
    },
    {
      "id": "e29",
      "seq": 29,
      "cat": "law",
      "start": 2018,
      "date": "2018",
      "tag": "Moran Market closes",
      "title": "Moran Market closes",
      "sum": "The largest dog-meat market, at Seongnam, closed in 2018 as sales declined, the year of the PyeongChang Winter Olympics.",
      "pts": [
        "Pennington also says the Taepyeong-dong slaughterhouse was forced out by Seongnam’s mayor, without a date."
      ],
      "care": "Both claims come from a blog with no citations.",
      "src": [
        {
          "s": "penn",
          "why": "Only source found for the closure."
        },
        {
          "s": "kt2024",
          "why": "Lists 2018 among the moments of foreign criticism."
        }
      ],
      "verify": "Category: a market closing; could be Role (the dog-meat trade)"
    },
    {
      "id": "e30",
      "seq": 30,
      "cat": "origins",
      "start": 2023,
      "date": "2023",
      "tag": "Native-breed genomes",
      "title": "Two ancestries behind Korea’s native breeds",
      "sum": "A 2023 genome study found Korean native breeds fall into two ancestral groups.",
      "pts": [
        "Sapsaree links mainly to West Eurasian ancestry. Jindo and Donggyeongi link mainly to Southeast and East Asian ancestry.",
        "Jindo and Donggyeongi show gene flow from the New Guinea singing dog lineage.",
        "East Asian dog populations are estimated to have diverged roughly 2,000 to 11,000 years ago.",
        "The three breeds are kept as natural monuments and were restored from small numbers."
      ],
      "care": "The paper reports 205 canids; the Korea Herald says 211. The Pungsan was not analysed. The paper does not discuss historical uses.",
      "src": [
        {
          "s": "ahn2023",
          "why": "Primary source for the genetics of today’s native breeds."
        },
        {
          "s": "kh2026",
          "why": "Reports the study for a general audience."
        }
      ]
    },
    {
      "id": "e31",
      "seq": 31,
      "cat": "law",
      "start": 2024,
      "date": "9 January 2024",
      "tag": "Dog meat ban passes",
      "title": "National Assembly passes the dog-meat ban",
      "sum": "The Assembly passed the special act 208–0 with two abstentions. It takes effect in 2027.",
      "pts": [
        "Raising or butchering dogs for food: up to three years in prison or a 30 million won fine. Distributing or selling: up to two years or 20 million won.",
        "A government study counted 1,156 dog farms with over 520,000 dogs, and 1,666 restaurants selling over 388,000 dogs a year. Industry puts the number of farmers at about 3,500.",
        "A survey found 93.4% of Koreans do not intend to eat dog meat in future and 82.3% support the ban."
      ],
      "care": "Eating dog meat itself carries no penalty. Survey wording and sample are not given in the article.",
      "team": {
        "t": "DR09 · Ban on Dog Meat",
        "n": "Your entry follows what happened to farms and dogs after the ban."
      },
      "src": [
        {
          "s": "kt2024",
          "why": "Main source for the vote, penalties and numbers."
        },
        {
          "s": "iaka",
          "why": "Confirms the three-year phase-out."
        }
      ]
    },
    {
      "id": "e32",
      "seq": 32,
      "cat": "ownership",
      "start": 2024,
      "date": "December 2024",
      "tag": "Pet ownership ~27%",
      "title": "Pet ownership reaches about 27% of households",
      "sum": "A KB Financial Group report counts 15.46 million pet owners (29.9% of people) and 5.91 million pet households (26.7%).",
      "pts": [
        "Pet households rose by about 60,000 from 2023.",
        "This is the companion-animal end of the timeline, set against the earlier food and working uses."
      ],
      "care": "The count covers all pets. The article gives no breakdown for dogs.",
      "team": {
        "t": "DR15 · Companion dogs raised as family members",
        "n": "Your entry on dogs as family sits at this end of the timeline."
      },
      "src": [
        {
          "s": "kbpet",
          "why": "Source for the figures and the report."
        }
      ],
      "verify": "Moved from Companion and bond: it counts pet owners, so it is Ownership"
    },
    {
      "id": "e33",
      "seq": 33,
      "cat": "origins",
      "start": 2026,
      "date": "6 May 2026",
      "tag": "Ancient genomes",
      "title": "First full genomes of ancient Korean dogs",
      "sum": "Four dogs about 2,000 years old, from Neuk-do and Bonghwang-dong, form a lineage separate from other East Asian dog populations.",
      "pts": [
        "They resembled the Australian dingo and the New Guinea singing dog.",
        "They carried DNA from European dogs, suggesting contact with western dogs over thousands of years.",
        "Dogs and wolves kept interbreeding after domestication, mostly with the extinct Japanese wolf.",
        "The work came from the Gaya National Research Institute of Cultural Heritage, NRICH, the Seokdang Museum of Dong-A University and Japan’s Sokendai."
      ],
      "care": "The coverage says nothing about how the four dogs were used.",
      "src": [
        {
          "s": "kim2026",
          "why": "The primary paper."
        },
        {
          "s": "archmag",
          "why": "Short summary of the findings."
        },
        {
          "s": "jda2026",
          "why": "Names the sites and institutions."
        }
      ]
    },
    {
      "id": "e34",
      "seq": 34,
      "cat": "law",
      "start": 2027,
      "date": "February 2027 (scheduled)",
      "tag": "Farm closure deadline",
      "title": "Deadline for closing dog-meat farms",
      "sum": "Farm owners have until February 2027 to close and sell off remaining animals.",
      "pts": [
        "By May 2026, 82% of farms had closed.",
        "About 97% of the dogs on closed farms were shipped out for slaughter or distribution, and only 623 were adopted."
      ],
      "care": "These figures are as recorded in your team’s DR09 entry. The three linked pages were not reopened for this timeline.",
      "team": {
        "t": "DR09 · Ban on Dog Meat",
        "n": "This node mirrors the facts in your entry."
      },
      "src": [
        {
          "s": "mafra",
          "why": "Official source for the closure figures."
        },
        {
          "s": "bbc",
          "why": "Background on what happens to the dogs."
        },
        {
          "s": "jda2026b",
          "why": "Recent report on rescue capacity."
        }
      ],
      "verify": "Scheduled, not yet happened"
    }
  ]
});
