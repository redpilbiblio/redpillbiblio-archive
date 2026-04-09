import { DynastyMember, DynastyFounder, DynastyConnection, DynastySource } from './dynasty_medici';

interface OriginsData {
  paragraphs: string[];
  preWealthLineage: string[];
  sources: DynastySource[];
}

interface GenerationData {
  number: number;
  label?: string;
  note?: string;
  members: DynastyMember[];
}

interface LegacyData {
  intro: string;
  items: { title: string; description: string }[];
}

export interface WaltonDynastyData {
  id: string;
  origins: OriginsData;
  founder: DynastyFounder;
  generations: GenerationData[];
  modernClaimants: DynastyMember[];
  connections: DynastyConnection[];
  legacy: LegacyData;
  allSources: DynastySource[];
}

export const waltonDynasty: WaltonDynastyData = {
  id: 'walton',

  origins: {
    paragraphs: [
      "The Walton surname is English in origin, derived from the Old English Weald-tun — meaning 'farm by a forest' or 'settlement near a wood.' It appears consistently in English records from the 13th century onward and spread widely through the British Isles before emigrating to colonial America. The name arose independently in multiple English counties, making it one of Britain's more common topographic surnames.",
      "The American Walton line that produced Sam Walton traces to Scots-Irish and English Protestant settlers who entered the American colonies via Virginia and the Carolinas in the 1700s and migrated steadily westward across Appalachia, through Kentucky and Tennessee, into Missouri and finally into Oklahoma Territory — following the great arc of American frontier expansion across three centuries.",
      "Sam Walton's branch descends from mid-19th-century Missouri farming stock. His grandfather Jesse Walton was a farmer in Henry County, Missouri. His father Thomas Gibson Walton (1892–1984) was born in Diggins, Webster County, Missouri, and worked variously as a farmer, mortgage broker, banker, and real estate agent — moving the family frequently through rural Missouri and Oklahoma during Sam's childhood. Thomas lived to age 92, long enough to see his son become the richest man in America. The family carried no noble title, no inherited capital, and no dynastic banking connections — only frugality, relentless work, salesmanship, and a deeply practical intelligence.",
    ],
    preWealthLineage: [
      "English/Scots-Irish colonial settlers (1700s Virginia/Carolina) — unnamed ancestors",
      "Jesse Walton — farmer, Henry County, Missouri (mid-1800s)",
      "Thomas Gibson Walton (1892–1984) — born Diggins, Webster Co., MO; farmer, banker, mortgage man; moved family to Kingfisher, Oklahoma 1917; returned to Missouri 1923; farm loan appraiser and insurance agent through the Depression; lived to age 92",
      "Nancy Lee Lawrence Walton — Sam's mother; strong character who encouraged Sam's ambition and taught Sunday School",
    ],
    sources: [
      { label: "Walmart Corporate — Sam Walton biography", url: "https://corporate.walmart.com/about/sam-walton" },
      { label: "Encyclopedia of Arkansas — Sam Walton", url: "https://encyclopediaofarkansas.net/entries/samuel-moore-walton-1792/" },
      { label: "Wikipedia — Sam Walton", url: "https://en.wikipedia.org/wiki/Sam_Walton" },
    ],
  },

  founder: {
    fullName: "Samuel Moore 'Sam' Walton",
    status: 'DECEASED',
    dob: "29 March 1918, Kingfisher, Oklahoma",
    dod: "5 April 1992, Little Rock, Arkansas (aged 74; bone marrow cancer / hairy cell leukemia)",
    spouse: "Helen Robson (1919–2007; married 14 February 1943) — daughter of L.S. Robson, prominent Claremore, Oklahoma lawyer and banker; L.S. Robson lent Sam $20,000 toward his first store purchase",
    spouseFamily: "Robson family — Oklahoma legal/banking family; provided significant early business capital",
    profession: "Retail pioneer; opened first Ben Franklin franchise in Newport, Arkansas (1945); lost that lease in 1950; opened Walton's Five & Dime in Bentonville, AR (1950); opened first Walmart in Rogers, Arkansas (1962); opened first Sam's Club in Midwest City, Oklahoma (1983); took Walmart public 1970 (NYSE: WMT); became richest American ~1985. At death Walmart had 1,735 stores and $44B in sales. Graduated University of Missouri 1940; briefly worked for JCPenney; Army intelligence officer 1942–1945.",
    majorPositions: "Founder & Chairman, Walmart Inc. (WMT); Founder, Sam's Club; Presidential Medal of Freedom (March 17, 1992 — 19 days before death)",
    netWorth: "~$21–23 billion (1992); #1 richest American from mid-1980s until death",
    political: "Republican",
    donations: "Lifelong Republican donor; financed Arkansas Republican politics; opposed organized labor throughout career",
    wikiUrl: "https://en.wikipedia.org/wiki/Sam_Walton",
    sources: [
      { label: "Walmart Corporate — Sam Walton biography", url: "https://corporate.walmart.com/about/sam-walton" },
      { label: "Wikipedia — Sam Walton", url: "https://en.wikipedia.org/wiki/Sam_Walton" },
      { label: "Encyclopedia of Arkansas — Sam Walton", url: "https://encyclopediaofarkansas.net/entries/samuel-moore-walton-1792/" },
    ],
  },

  generations: [
    {
      number: 2,
      label: "Sam's Four Children + Co-Founder Branch",
      note: "Sam's brother Bud Walton (1921–1995) co-founded Walmart and managed real estate acquisition and store development during early expansion. His two daughters — Ann and Nancy — inherited substantial Walmart stakes and are documented in the Bud Branch below.",
      members: [
        {
          id: 'rob-walton',
          fullName: "Samuel Robson 'Rob' Walton",
          parentName: "Sam Walton",
          status: 'LIVING',
          borderType: 'living',
          dob: "27 October 1944 (age 81)",
          dod: null,
          spouse: "Melani Lowman Walton (married 2005; prev. Lynne McNabb, Carolyn Funk)",
          spouseFamily: null,
          profession: "Attorney (College of Law, University of Arkansas); Chairman of Walmart 1992–2015; resigned as board member 2024; led $4.65 billion purchase of Denver Broncos NFL team 2022 (record NFL sale); ceded controlling owner designation to son-in-law Greg Penner 2023; donated $115M to Arizona State University (Rob Walton School of Conservation, Sept 2025); vintage car collector; conservation philanthropist.",
          majorPositions: "Former Executive Chairman, Walmart Inc. (WMT); Co-owner, Denver Broncos (NFL)",
          netWorth: "~$145.1 billion (Forbes, February 2026) — 11th richest person in the world",
          political: "Republican",
          donations: "$16.5 million to Republican candidates and causes (Jan 2023 – Oct 2024) — largest political donation by any NFL owner; $2 million to Republican National Committee (Feb 2024)",
          wikiUrl: "https://en.wikipedia.org/wiki/S._Robson_Walton",
          sources: [
            { label: "Wikipedia — S. Robson Walton", url: "https://en.wikipedia.org/wiki/S._Robson_Walton" },
            { label: "OpenSecrets — Rob Walton 2024 donations", url: "https://www.opensecrets.org/outside-spending/donor_detail/2024?id=U0000003348" },
            { label: "Observer — Rob Walton $115M ASU donation", url: "https://observer.com/2025/09/walmart-heir-rob-walton-donates-115m-conservation-school/" },
          ],
        },
        {
          id: 'john-walton',
          fullName: "John Thomas Walton",
          parentName: "Sam Walton",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "8 October 1946",
          dod: "27 June 2005, Grand Junction, Colorado (aged 58; crash of homebuilt experimental ultralight aircraft he was piloting)",
          spouse: "Christy Tallant Walton (married 1974)",
          spouseFamily: null,
          profession: "Vietnam veteran (U.S. Navy, special warfare); venture capitalist; early investor in First Solar (stake worth billions at time of death); Walmart board director; adventure philanthropist; education reform advocate; co-founded True North Partners.",
          majorPositions: "Walmart Board Director; Co-founder, True North Partners",
          netWorth: "~$18.2 billion at death (2005); bulk of estate transferred to son Lukas (~$8.7B) and charitable trusts — not wife Christy as widely reported",
          political: "Not publicly documented",
          donations: "Education reform and conservation philanthropy",
          wikiUrl: "https://en.wikipedia.org/wiki/John_T._Walton",
          sources: [
            { label: "Wikipedia — John T. Walton", url: "https://en.wikipedia.org/wiki/John_T._Walton" },
            { label: "Bloomberg — Christy Walton court documents; wealth went to Lukas", url: "https://es.kaufmanrossin.com/news/a-wal-mart-heir-is-27-billion-poorer-than-everyone-thought/" },
          ],
        },
        {
          id: 'jim-walton',
          fullName: "James Carr 'Jim' Walton",
          parentName: "Sam Walton",
          status: 'LIVING',
          borderType: 'living',
          dob: "7 June 1948 (age 77)",
          dod: null,
          spouse: "Lynne Walton",
          spouseFamily: null,
          profession: "CEO (2000–2024) then Chairman, Arvest Bank Group — largest bank in Arkansas, $26 billion in assets (Dec 2025), 16,000+ employees, 280+ branches across 4 states; Chairman/owner Community Publishers Inc. (CPI) — regional newspaper group founded by Sam Walton (Arkansas, Missouri, Oklahoma); Walmart Board of Directors (2005–present, replacing deceased brother John).",
          majorPositions: "Chairman, Arvest Bank Group ($26B assets); Owner, Community Publishers Inc.; Walmart Board of Directors",
          netWorth: "~$142.4 billion (Forbes, February 2026) — 12th richest person in the world",
          political: "Republican-leaning; donates to charter school causes",
          donations: "$2M+ to charter school PACs (Legacy 44 PAC, Charter Public Schools PAC, Charter Schools Now) in 2024; primary giving through education reform PACs",
          wikiUrl: "https://en.wikipedia.org/wiki/Jim_Walton",
          businesses: [
            {
              name: "Arvest Bank Group",
              title: "Chairman",
              revenue: "$26B in assets (2025); 280+ branches; 16,000+ employees",
              url: "https://www.arvest.com",
              urlDisplay: "arvest.com",
            },
          ],
          sources: [
            { label: "Wikipedia — Jim Walton", url: "https://en.wikipedia.org/wiki/Jim_Walton" },
            { label: "Bloomberg — Jim Walton profile; Arvest $26B assets", url: "https://www.bloomberg.com/billionaires/profiles/jim-c-walton/" },
          ],
        },
        {
          id: 'alice-walton',
          fullName: "Alice Louise Walton",
          parentName: "Sam Walton",
          status: 'LIVING',
          borderType: 'living',
          dob: "7 October 1949 (age 76)",
          dod: null,
          spouse: "Never permanently married; twice divorced (names not publicly disclosed)",
          spouseFamily: null,
          profession: "Art collector; Founder and funder of Crystal Bridges Museum of American Art (Bentonville, Arkansas — opened 2011; free admission; $1.2 billion construction/endowment cost personally borne by Alice; ~1.2 million annual visitors); former investment banker; founded Llama Company investment bank 1988; founded Heartland Whole Health Institute (wellness research, Bentonville) 2023; built one of the most significant collections of American art ever assembled ($500M+ in acquisitions).",
          majorPositions: "Founder, Crystal Bridges Museum of American Art (endowment ~$800M); Founder, Heartland Whole Health Institute",
          netWorth: "~$109.8 billion (Bloomberg, July 2025) — richest woman in the world; 15th richest person overall",
          political: "Republican (donor); education reform focus",
          donations: "Consistent Republican donor; education reform causes; Crystal Bridges Museum $1.2B personal contribution",
          wikiUrl: "https://en.wikipedia.org/wiki/Alice_Walton",
          businesses: [
            {
              name: "Crystal Bridges Museum of American Art",
              title: "Founder & Funder",
              revenue: "~$800M endowment; free admission; 1.2M annual visitors",
              url: "https://crystalbridges.org",
              urlDisplay: "crystalbridges.org",
            },
          ],
          sources: [
            { label: "Wikipedia — Alice Walton", url: "https://en.wikipedia.org/wiki/Alice_Walton" },
            { label: "Forbes — Alice Walton profile", url: "https://www.forbes.com/profile/alice-walton/" },
          ],
        },
        {
          id: 'bud-walton',
          fullName: "James Lawrence 'Bud' Walton",
          parentName: "Sam Walton (brother / co-founder)",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "1921",
          dod: "21 March 1995, Bentonville, Arkansas (aged 73; leukemia)",
          spouse: "Audrey Walton",
          spouseFamily: null,
          profession: "Co-founder of Walmart; managed real estate acquisition and store development for Walmart's early expansion; opened first Sam's Club with Sam Walton. University of Arkansas' Bud Walton Arena named in his honor ($15M donation).",
          majorPositions: "Co-Founder, Walmart Inc.; Co-Founder, Sam's Club",
          netWorth: "Not separately disclosed; Walmart stake distributed to daughters Ann and Nancy",
          political: "Not publicly documented",
          donations: "$15M to University of Arkansas (Bud Walton Arena)",
          wikiUrl: "https://en.wikipedia.org/wiki/Bud_Walton",
          sources: [
            { label: "Wikipedia — Bud Walton", url: "https://en.wikipedia.org/wiki/Bud_Walton" },
          ],
        },
      ],
    },
    {
      number: 3,
      label: "Third Generation — Living Heirs",
      note: "Combined Walton family net worth (Feb 2026): ~$436–500 billion across all heirs, making this the richest family in the United States and second-richest in the world. The family collectively owns approximately 45% of Walmart stock through Walton Enterprises LLC.",
      members: [
        {
          id: 'lukas-walton',
          fullName: "Lukas Tyler Walton",
          parentName: "John T. Walton",
          status: 'LIVING',
          borderType: 'living',
          dob: "19 September 1986 (age 39)",
          dod: null,
          spouse: "Not publicly disclosed",
          spouseFamily: null,
          profession: "Founder and President, Builders Vision (Chicago-based impact investing firm — mission-focused investing across clean energy, food systems, and ocean health); controls Walmart stake inherited from father John Walton; Trustee Walton Family Foundation; described as most independently minded of the Walton heirs.",
          majorPositions: "Founder & President, Builders Vision; Trustee, Walton Family Foundation",
          netWorth: "~$41.5 billion (Forbes, September 2025)",
          political: "Democrat-leaning / nonpartisan",
          donations: "Impact investing; clean energy and ocean conservation philanthropy",
          wikiUrl: "https://en.wikipedia.org/wiki/Lukas_Walton",
          businesses: [
            {
              name: "Builders Vision",
              title: "Founder & President",
              revenue: "Private; impact investing platform — clean energy, food systems, ocean health",
              url: "https://buildersvision.com",
              urlDisplay: "buildersvision.com",
            },
          ],
          sources: [
            { label: "Wikipedia — Lukas Walton", url: "https://en.wikipedia.org/wiki/Lukas_Walton" },
            { label: "Forbes — Lukas Walton $41.5B (Sept 2025)", url: "https://www.forbes.com/profile/lukas-walton/" },
          ],
        },
        {
          id: 'christy-walton',
          fullName: "Christy Tallant Walton",
          parentName: "John T. Walton (widow)",
          status: 'LIVING',
          borderType: 'living',
          dob: "~1949 (age ~76)",
          dod: null,
          spouse: "John T. Walton (married 1974; died 2005)",
          spouseFamily: null,
          profession: "Inherited Walmart stake from husband John T. Walton (2005); philanthropist. Bloomberg's 2015 court document investigation revealed her reported net worth was substantially overstated — bulk of John's estate went to son Lukas and charitable trusts.",
          majorPositions: null,
          netWorth: "~$19.9 billion (Bloomberg, Feb 2025) — smaller than widely reported",
          political: "Not publicly active",
          donations: "Philanthropic; not publicly documented",
          wikiUrl: "https://en.wikipedia.org/wiki/Christy_Walton",
          note: "Bloomberg's 2015 investigation into court documents revealed the widely-reported figure that Christy Walton was the 'world's richest woman' was substantially false — most of John Walton's $18.2B estate went to son Lukas and charitable trusts.",
          sources: [
            { label: "Wikipedia — Christy Walton", url: "https://en.wikipedia.org/wiki/Christy_Walton" },
            { label: "Bloomberg — Court documents; wealth went to Lukas (2015)", url: "https://es.kaufmanrossin.com/news/a-wal-mart-heir-is-27-billion-poorer-than-everyone-thought/" },
          ],
        },
        {
          id: 'ann-walton-kroenke',
          fullName: "Ann Walton Kroenke",
          parentName: "Bud Walton",
          status: 'LIVING',
          borderType: 'living',
          dob: "1949 (age ~76)",
          dod: null,
          spouse: "E. Stanley 'Stan' Kroenke (married 1974) — billionaire real estate and sports mogul; owner of Los Angeles Rams (NFL), Arsenal F.C. (Premier League), Colorado Avalanche (NHL), Denver Nuggets (NBA), Colorado Rapids (MLS), Colorado Mammoth (NLL)",
          spouseFamily: "Kroenke Sports & Entertainment — multi-sport ownership empire valued at $15B+",
          profession: "Inherited Walmart stake from father Bud Walton 1995; philanthropist. Kroenke Sports & Entertainment is managed primarily by husband Stan and son Josh.",
          majorPositions: null,
          netWorth: "~$10–13 billion (Forbes 2024–2026 range)",
          political: "Republican-leaning",
          donations: "Philanthropic; not publicly documented separately from Stan Kroenke",
          wikiUrl: "https://en.wikipedia.org/wiki/Ann_Walton_Kroenke",
          sources: [
            { label: "Wikipedia — Ann Walton Kroenke", url: "https://en.wikipedia.org/wiki/Ann_Walton_Kroenke" },
          ],
        },
        {
          id: 'nancy-walton-laurie',
          fullName: "Nancy Walton Laurie",
          parentName: "Bud Walton",
          status: 'LIVING',
          borderType: 'living',
          dob: "15 May 1951 (age 74)",
          dod: null,
          spouse: "Bill Laurie (married in high school in Versailles, Missouri) — former owner of St. Louis Blues (NHL); NBA/NHL arena owner",
          spouseFamily: "Laurie family — Missouri; sports arena ownership (St. Louis Blues)",
          profession: "Inherited Walmart stake from father Bud 1995; major donor University of Missouri (Walton Family Hall of Fame arena, $25M gift); philanthropist.",
          majorPositions: null,
          netWorth: "~$20.8 billion (Forbes, February 2026)",
          political: "Not publicly active",
          donations: "$25M to University of Missouri (Walton Family Hall of Fame arena)",
          wikiUrl: "https://en.wikipedia.org/wiki/Nancy_Walton_Laurie",
          sources: [
            { label: "Wikipedia — Nancy Walton Laurie", url: "https://en.wikipedia.org/wiki/Nancy_Walton_Laurie" },
          ],
        },
        {
          id: 'greg-penner',
          fullName: "Gregory Boyd 'Greg' Penner",
          parentName: "Rob Walton (son-in-law)",
          status: 'LIVING',
          borderType: 'living',
          dob: "18 December 1969 (age 56)",
          dod: null,
          spouse: "Carrie Ann Walton (daughter of Rob Walton; granddaughter of Sam Walton)",
          spouseFamily: "Walton family (married into); granddaughter of Sam Walton",
          profession: "Chairman of Walmart Inc. (WMT) since 2015 — succeeded Rob Walton; Controlling Owner and CEO of Denver Broncos (NFL) since 2023 (formally recognized by NFL); Partner at Madrone Capital Partners (Silicon Valley investment firm, 2005–present); former VP at Goldman Sachs Japan; former Walmart CFO trainee.",
          majorPositions: "Chairman, Walmart Inc. (WMT) — FY2025 Revenue: $681B; Controlling Owner & CEO, Denver Broncos (NFL)",
          netWorth: "~$3–5 billion (primarily through Walton-family-connected investments)",
          political: "Republican-leaning",
          donations: "$171,500 to Republican causes 2023–2024",
          wikiUrl: "https://en.wikipedia.org/wiki/Greg_Penner",
          businesses: [
            {
              name: "Walmart Inc. (WMT)",
              title: "Chairman",
              revenue: "$681B total revenues FY2025 (ended Jan 31, 2025); $29.3B operating income — world's largest company by revenue",
              url: "https://walmart.com",
              urlDisplay: "walmart.com",
            },
            {
              name: "Denver Broncos (NFL)",
              title: "Controlling Owner & CEO",
              revenue: "Franchise value ~$6.5B (2025 Forbes); purchased for $4.65B in 2022 (record NFL sale at time)",
              url: "https://www.denverbroncos.com",
              urlDisplay: "denverbroncos.com",
            },
          ],
          sources: [
            { label: "Wikipedia — Greg Penner", url: "https://en.wikipedia.org/wiki/Greg_Penner" },
            { label: "Yahoo Finance — Walmart FY2025 income statement", url: "https://stock.walmart.com/financial-information/income-statement" },
          ],
          note: "Greg Penner is the operational nexus of the Walton dynasty — as Chairman of Walmart (world's largest company by revenue at $681B) and controlling owner of the Denver Broncos NFL franchise. Though not a blood descendant of Sam Walton, he effectively controls the enterprise Sam built.",
        },
      ],
    },
  ],

  modernClaimants: [],

  connections: [
    {
      type: "FOUNDED",
      institution: "Walmart Inc. (WMT) — NYSE: WMT; FY2025 revenue $681B",
      relationship: "Sam Walton opened first store Rogers, Arkansas 1962; took public 1970; family controls ~45% via Walton Enterprises LLC; world's largest company by revenue; ~2.1 million employees (largest private employer in the U.S.)",
    },
    {
      type: "FOUNDED",
      institution: "Sam's Club — membership warehouse retail chain",
      relationship: "Sam Walton and Bud Walton opened first Sam's Club in Midwest City, Oklahoma 1983; now 600+ locations; ~$90B revenue (part of Walmart Inc.)",
    },
    {
      type: "BANKING",
      institution: "Arvest Bank Group — $26B assets (2025)",
      relationship: "Founded by Sam Walton as Bank of Bentonville 1961; Jim Walton family controls 44% stake; largest bank in Arkansas; 280+ branches across 4 states; 16,000+ employees",
    },
    {
      type: "SPORTS",
      institution: "Denver Broncos (NFL) — purchased $4.65B (2022)",
      relationship: "Rob Walton, Carrie Walton Penner, and Greg Penner purchased the Broncos for $4.65B in 2022 — record NFL sale at the time. Greg Penner is now the controlling owner and CEO, recognized by the NFL.",
    },
    {
      type: "SPORTS",
      institution: "Los Angeles Rams (NFL), Arsenal F.C. (EPL), Colorado Avalanche (NHL), Denver Nuggets (NBA)",
      relationship: "Stan Kroenke (husband of Ann Walton Kroenke) owns this multi-sport empire via Kroenke Sports & Entertainment; connecting the Walton family to elite global sports ownership",
    },
    {
      type: "PHILANTHROPY",
      institution: "Walton Family Foundation — ~$550M in grants (2024)",
      relationship: "Family philanthropy arm; ~$5B+ in assets; single largest private funder of charter school expansion in U.S. history ($1.7B+ given to charter schools over 20+ years); education reform, environment, and regional Arkansas development",
    },
    {
      type: "FOUNDED",
      institution: "Crystal Bridges Museum of American Art — endowment ~$800M",
      relationship: "Alice Walton personally funded $1.2B construction and endowment; opened 2011 in Bentonville, Arkansas; free admission; 1.2 million annual visitors; one of the most significant American art collections ever assembled",
    },
    {
      type: "FOUNDED",
      institution: "Builders Vision — impact investing platform",
      relationship: "Lukas Walton founded in 2021; focuses on decarbonization, regenerative agriculture, and ocean conservation; most publicly progressive arm of the Walton family",
    },
    {
      type: "POLICY",
      institution: "Charter School Movement — $1.7B+ in educational funding",
      relationship: "Walton Family Foundation is the single largest private funder of U.S. charter school expansion; Jim Walton donated $2M+ to charter school PACs in 2024 alone; contested intervention with major implications for public school systems",
    },
    {
      type: "MEDIA",
      institution: "Community Publishers Inc. (CPI) — regional newspaper group",
      relationship: "Founded by Sam Walton; now owned/operated by Jim Walton; publishes regional newspapers across Arkansas, Missouri, and Oklahoma — maintaining family media influence in their home region",
    },
    {
      type: "POLICY",
      institution: "National Rifle Association (NRA) / Firearms retail",
      relationship: "Sam Walton was NRA member; Walmart was historically one of U.S.'s largest firearms and ammunition retailers; reversed policy in 2019 (stopped selling some ammo/handguns) following the El Paso Walmart mass shooting — one of the largest U.S. retail policy changes in recent memory",
    },
    {
      type: "ACADEMIC",
      institution: "University of Arkansas — Sam M. Walton College of Business; Bud Walton Arena",
      relationship: "Primary philanthropic home institution; Bud Walton $15M arena donation; Sam M. Walton College of Business named in Sam's honor; multiple gifts across decades from the entire family",
    },
  ],

  legacy: {
    intro: "The Walton dynasty transformed American retail, reshaped the U.S. labor market, and created the largest fortune in American history — built on a philosophy of relentless price discipline, distribution logistics, and direct manufacturer relationships that destroyed or absorbed virtually every competitor it encountered.",
    items: [
      {
        title: "The World's Largest Company",
        description: "Walmart's FY2025 revenue of $681 billion makes it larger than the GDP of most countries on Earth. When Sam Walton opened his first store in 1962 — the same year Kmart and Target opened theirs — no one predicted his discount concept would grow into the world's most dominant retailer. His edge: lower prices through direct manufacturer relationships, obsessive cost control, and a logistics and distribution system that kept overhead structurally lower than any competitor.",
      },
      {
        title: "The $1,650 IPO",
        description: "Walmart went public in 1970. A $1,650 investment in the IPO was worth $7 million by 1992. The stock split many times over subsequent decades. The Walton family's ~45% ownership stake means that at $681B in annual revenue, they receive a proportional share of ~$29.3B in annual operating income — generating more wealth per year than most entire economies.",
      },
      {
        title: "Destruction of Small-Town Retail",
        description: "Walmart's expansion through rural and small-town America systematically eliminated the local retail economy that Sam Walton himself grew up in. Studies consistently documented the 'Walmart effect' — store closures, wage suppression, and tax base erosion in towns where a Walmart opened. The man who opened his first store in a small Arkansas town built a company that made small-town stores everywhere economically impossible.",
      },
      {
        title: "Labor Practices and Union Suppression",
        description: "Walmart is the largest private employer in the United States with ~2.1 million workers. The company has maintained a decades-long policy of opposing union organizing at every location. In 2000, when meat-cutters in a Texas store voted to unionize, Walmart eliminated the meat-cutting department at every store in the country within weeks. This posture has shaped the entire U.S. retail labor market.",
      },
      {
        title: "Charter School Funding Empire",
        description: "The Walton Family Foundation has given over $1.7 billion to charter school expansion since 2000 — making the Walton family the single largest private funder of charter school expansion in American history. Jim Walton donated $2M+ to charter school PACs in 2024 alone. This is a deliberate, sustained, and contested intervention in U.S. public education policy funded by retail wealth.",
      },
      {
        title: "The Denver Broncos and the Wealth of Sports",
        description: "Rob Walton's $4.65 billion purchase of the Denver Broncos in 2022 was the largest transaction in professional sports history at that time. It exemplifies how Walton family wealth — generated from retail margins on everyday consumer goods — has flowed into prestige assets including sports franchises, art museums, and conservation land. Son-in-law Greg Penner is now the controlling owner.",
      },
      {
        title: "Media Misinformation: The Christy Walton Story",
        description: "For years, news outlets reported Christy Walton (widow of John Walton) as 'the world's richest woman.' Bloomberg's 2015 investigation into court documents revealed this was substantially false — most of John Walton's $18.2B estate went to his son Lukas and charitable trusts. The error was repeated for years by Forbes, the media, and was never fully corrected. It is one of the most documented examples of wealth misinformation in the modern era.",
      },
    ],
  },

  allSources: [
    { label: "Walmart Corporate — Sam Walton biography", url: "https://corporate.walmart.com/about/sam-walton" },
    { label: "Wikipedia — Sam Walton", url: "https://en.wikipedia.org/wiki/Sam_Walton" },
    { label: "Encyclopedia of Arkansas — Sam Walton", url: "https://encyclopediaofarkansas.net/entries/samuel-moore-walton-1792/" },
    { label: "Wikipedia — Walton family", url: "https://en.wikipedia.org/wiki/Walton_family" },
    { label: "Wikipedia — S. Robson Walton", url: "https://en.wikipedia.org/wiki/S._Robson_Walton" },
    { label: "OpenSecrets — Rob Walton 2024 donations", url: "https://www.opensecrets.org/outside-spending/donor_detail/2024?id=U0000003348" },
    { label: "Mile High Sports — Rob Walton $16.5M Republican donations", url: "https://feeds.milehighsports.com/denver-broncos-owner-rob-walton-donated-16-5m-to-republicans-since-2023/" },
    { label: "Observer — Rob Walton $115M ASU donation (Sept 2025)", url: "https://observer.com/2025/09/walmart-heir-rob-walton-donates-115m-conservation-school/" },
    { label: "Wikipedia — Jim Walton", url: "https://en.wikipedia.org/wiki/Jim_Walton" },
    { label: "Bloomberg — Jim Walton; Arvest $26B assets (Dec 2025)", url: "https://www.bloomberg.com/billionaires/profiles/jim-c-walton/" },
    { label: "United for Respect — Walmart 2024 Political Spending", url: "https://united4respect.org/reports/walmart-political-spending-2024/" },
    { label: "Wikipedia — Alice Walton", url: "https://en.wikipedia.org/wiki/Alice_Walton" },
    { label: "Forbes — Alice Walton profile", url: "https://www.forbes.com/profile/alice-walton/" },
    { label: "Wikipedia — John T. Walton", url: "https://en.wikipedia.org/wiki/John_T._Walton" },
    { label: "Bloomberg — Christy Walton court docs; wealth went to Lukas (2015)", url: "https://es.kaufmanrossin.com/news/a-wal-mart-heir-is-27-billion-poorer-than-everyone-thought/" },
    { label: "Wikipedia — Christy Walton", url: "https://en.wikipedia.org/wiki/Christy_Walton" },
    { label: "Wikipedia — Lukas Walton", url: "https://en.wikipedia.org/wiki/Lukas_Walton" },
    { label: "Forbes — Lukas Walton $41.5B (Sept 2025)", url: "https://www.forbes.com/profile/lukas-walton/" },
    { label: "Wikipedia — Bud Walton", url: "https://en.wikipedia.org/wiki/Bud_Walton" },
    { label: "Wikipedia — Ann Walton Kroenke", url: "https://en.wikipedia.org/wiki/Ann_Walton_Kroenke" },
    { label: "Wikipedia — Nancy Walton Laurie", url: "https://en.wikipedia.org/wiki/Nancy_Walton_Laurie" },
    { label: "Wikipedia — Greg Penner", url: "https://en.wikipedia.org/wiki/Greg_Penner" },
    { label: "Yahoo Finance — Walmart FY2025 income statement ($706B net sales)", url: "https://stock.walmart.com/financial-information/income-statement" },
    { label: "Business Insider — Walton family net worth ~$440B (Oct 2025)", url: "https://www.businessinsider.com/life-of-the-walton-family-behind-walmart-and-sams-club-2018-12" },
    { label: "CNBC — Walton fortune family offices $500B (Dec 2025)", url: "https://www.cnbc.com/2025/12/11/walton-fortune-family-offices.html" },
    { label: "Walton Family Foundation — $550M grants (2024)", url: "https://www.waltonfamilyfoundation.org" },
    { label: "Crystal Bridges Museum of American Art", url: "https://crystalbridges.org" },
    { label: "Builders Vision — Lukas Walton", url: "https://buildersvision.com" },
    { label: "Quartr — Walton family dynasty overview", url: "https://quartr.com/insights/business-philosophy/the-walton-family-the-dynasty-behind-the-walmart-empire" },
    { label: "Statista — Largest U.S. private companies / Walmart revenues", url: "https://stock.walmart.com/financial-information/income-statement" },
  ],
};
