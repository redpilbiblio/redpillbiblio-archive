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

export interface KochDynastyData {
  id: string;
  origins: OriginsData;
  founder: DynastyFounder;
  generations: GenerationData[];
  modernClaimants: DynastyMember[];
  connections: DynastyConnection[];
  legacy: LegacyData;
  allSources: DynastySource[];
}

export const kochDynasty: KochDynastyData = {
  id: 'koch',

  origins: {
    paragraphs: [
      "The surname Koch is German and Dutch (and also Ashkenazic Jewish) in origin, derived from the Middle High German koch — meaning simply 'cook.' It is an occupational name equivalent to the English surname 'Cook,' given to those who prepared food professionally. The name appears across German-speaking Europe from the medieval period onward. The specific Koch line that produced Fred C. Koch and Koch Industries traces not to mainland Germany but to the Netherlands — specifically the province of Friesland in the far north.",
      "The founder's father, Harry Koch, was born in Workum, Friesland, Netherlands, in approximately 1867 — a Dutch Protestant working-class printer who trained as a printer's apprentice before emigrating to the United States in 1888, first passing through The Hague. He settled in Quanah, Texas, where he purchased the failing local newspaper, The Tribune-Chief, and became its publisher. He married Mattie B. Mixson, an American woman. Their son Fred Chase Koch was born in Quanah in 1900.",
      "The family's Dutch origins explain the pronunciation — 'KOHK' not 'KOTCH' — which mirrors Dutch phonology. Harry Koch was described as 'reasonably well off' — well enough for Fred to attend both Rice University and MIT, two of the most expensive and competitive universities in early 20th-century America. From a Dutch immigrant printer in a small Texas newspaper office, Fred Koch would build an oil refining empire that his son Charles would grow over sixty years into one of the most powerful private industrial conglomerates on Earth.",
    ],
    preWealthLineage: [
      "Dutch printing family in Workum, Friesland, Netherlands — no named ancestors documented prior to Harry",
      "Harry Koch (born ~1867, Workum, Netherlands; died ~1942) — Dutch immigrant printer; emigrated USA 1888; settled Quanah, Texas; purchased The Tribune-Chief newspaper; married Mattie B. Mixson",
      "Mattie B. (née Mixson) Koch — American wife of Harry; mother of Fred C. Koch",
    ],
    sources: [
      { label: "Wikipedia — Fred C. Koch", url: "https://en.wikipedia.org/wiki/Fred_C._Koch" },
      { label: "New Netherland Institute — Fred Chase Koch [1900-1967]", url: "https://www.newnetherlandinstitute.org/history-and-heritage/dutch_americans/frederick-chase-koch" },
      { label: "Family Root App — Koch Family Tree", url: "https://familyrootapp.com/blog/koch-family-tree-the-billionaire-industrialists" },
    ],
  },

  founder: {
    fullName: "Fred Chase Koch",
    status: 'DECEASED',
    dob: "23 September 1900, Quanah, Texas",
    dod: "17 November 1967, Wichita, Kansas (aged 67; heart attack while on a quail-hunting trip)",
    spouse: "Mary Clementine Robinson Koch (1907–1990; married 1932) — daughter of a Wichita, Kansas family; her love of the arts influenced eldest son Frederick's collecting passions",
    spouseFamily: "Robinson family — Wichita, Kansas",
    profession: "MIT B.S. Chemical Engineering (1922); developed a more efficient thermal cracking process for deriving gasoline from crude oil (1927) — allowing smaller refiners to compete with major oil companies; co-founded Wood River Oil and Refining Company (1940); founded Koch Engineering Company (1943); built oil refineries for Soviet Union (1929–1930s, 14 refineries) and Nazi Germany (1934–1935) — later publicly regretted the Soviet work and became a fervent anti-communist; co-founded the John Birch Society (1958); self-published A Businessman Looks at Communism (1960); company renamed Koch Industries in his honor in 1968 by son Charles.",
    majorPositions: "Co-Founder, Wood River Oil and Refining Company (1940); Founder, Koch Engineering Company (1943); Co-Founder, John Birch Society (1958)",
    netWorth: "~$21 million at death (1967); Koch Industries grew to $125B+ in revenue under son Charles",
    political: "Republican; co-founder John Birch Society; fierce anti-communist, anti-government ideology passed directly to sons Charles and David",
    donations: "Funded John Birch Society; Republican causes in Kansas",
    wikiUrl: "https://en.wikipedia.org/wiki/Fred_C._Koch",
    sources: [
      { label: "Wikipedia — Fred C. Koch", url: "https://en.wikipedia.org/wiki/Fred_C._Koch" },
      { label: "NPR / Jane Mayer — Dark Money: Hidden History of Koch Brothers", url: "https://www.npr.org/2016/01/19/463565987/hidden-history-of-koch-brothers-traces-their-childhood-and-political-rise" },
    ],
  },

  generations: [
    {
      number: 2,
      label: "Fred's Four Sons — A Dynasty at War With Itself",
      note: "The four Koch brothers became one of the most litigated family business disputes in American history. Frederick and Bill sued Charles and David in 1980 claiming they had been cheated out of shares. A settlement was reached in 1983. Bill continued to litigate for years afterward. By the end, Charles and David controlled Koch Industries, while Frederick and Bill were bought out.",
      members: [
        {
          id: 'frederick-koch',
          fullName: "Frederick Robinson Koch",
          parentName: "Fred C. Koch",
          status: 'DECEASED',
          borderType: 'gold',
          dob: "26 August 1933, Wichita, Kansas",
          dod: "12 February 2020, Manhattan, New York (aged 86; heart failure)",
          spouse: "Never married; no known children",
          spouseFamily: null,
          profession: "Arts philanthropist; rare book and manuscript collector; historic property restorer; graduated Harvard (humanities, 1955) and Yale School of Drama (MFA, 1961); donated $2.8 million to build Royal Shakespeare Company's Swan Theatre in Stratford-upon-Avon (opened 1986, attended by Queen Elizabeth II); owned Austrian castle Schloss Blühnbach, Villa Torre Clementina (French Riviera), a 72-room Tudor mansion in Surrey; donated extensively to Morgan Library & Museum, Frick Collection (NYC), and Carnegie Museum (Pittsburgh); entire estate designated to 'promote the study of literature, history and the arts.'",
          majorPositions: "Founder, Frederick R. Koch Foundation",
          netWorth: "~$1–2 billion (private; inherited share from 1983 Koch Industries buyout)",
          political: "None documented",
          donations: "Arts and cultural institutions — Royal Shakespeare Company ($2.8M Swan Theatre), Morgan Library, Frick Collection, Carnegie Museum",
          wikiUrl: "https://en.wikipedia.org/wiki/Frederick_R._Koch",
          note: "Frederick actively distanced himself from the Koch Industries business empire, the Koch political network, and his brothers' public ideology. He rarely saw Charles or David in his final decades. His friend and assistant said 'he spent his life as he wished, which was far removed from the business his father started.' His entire estate was left to arts promotion rather than family trusts — the clearest case in this dynasty of a family member who rejected the family's power structure.",
          sources: [
            { label: "Wikipedia — Frederick R. Koch", url: "https://en.wikipedia.org/wiki/Frederick_R._Koch" },
            { label: "Toronto City News — Frederick Koch death Feb 2020", url: "https://toronto.citynews.ca/2020/02/14/frederick-koch-low-profile-koch-brother-dies-at-86/" },
          ],
        },
        {
          id: 'charles-koch',
          fullName: "Charles de Ganahl Koch",
          parentName: "Fred C. Koch",
          status: 'LIVING',
          borderType: 'living',
          dob: "1 November 1935 (age 90)",
          dod: null,
          spouse: "Elizabeth 'Liz' Koch (married 1972)",
          spouseFamily: null,
          profession: "Chairman and CEO, Koch Industries (1967–present); took over at age 32 upon father's death; grew company from $21M value (1967) to $125B+ in annual revenue (2024); MIT B.S. General Engineering (1957), M.S. Nuclear Engineering (1958), M.S. Chemical Engineering (1959) — three degrees from MIT; authored The Science of Success (2007), Good Profit (2015), and Believe in People (2020); co-founded Cato Institute (1974); founded Americans for Prosperity (2004); founded Stand Together nonprofit network; donated $5.3 billion in Koch Industries nonvoting shares to nonprofits 2020–2022 (largest charitable gift by any American billionaire in that period); personally opposes Donald Trump.",
          majorPositions: "Chairman & CEO, Koch Industries ($125B+ revenue); Chairman, Stand Together; Co-Founder, Cato Institute (1974); Founder, Americans for Prosperity (2004)",
          netWorth: "~$73.8 billion (Forbes, March 2026)",
          political: "Libertarian/Republican — historically opposed Trump; AFP spent ~$72M to oppose Trump in 2024 primary before pivoting",
          donations: "Koch political network raised $578 million and spent $548 million during the 2024 election cycle (IRS documents); Americans for Prosperity Action (super PAC) received $397M; $4.3 billion in Koch stock donated to Believe in People 501(c)4 (2022); $1.3 billion in Koch stock donated to Stand Together (2020)",
          wikiUrl: "https://en.wikipedia.org/wiki/Charles_Koch",
          businesses: [
            {
              name: "Koch Industries",
              title: "Chairman & CEO",
              revenue: "$125 billion+ annual revenue (2024) — 2nd largest private company in the U.S. by revenue",
              url: "https://www.kochind.com",
              urlDisplay: "kochind.com",
            },
          ],
          sources: [
            { label: "Wikipedia — Charles Koch", url: "https://en.wikipedia.org/wiki/Charles_Koch" },
            { label: "Forbes — Charles Koch gave $5.3B in stock to nonprofits (Oct 2023)", url: "https://www.forbes.com/sites/mattdurot/2023/10/10/exclusive-charles-koch-koch-industries-has-given-more-than-5-billion-of-his-stock-to-two-nonprofits/" },
            { label: "New York Times — Koch Network spent ~$550M in 2024 cycle (Dec 2025)", url: "https://www.nytimes.com/2025/12/20/us/politics/koch-network-2024-election-trump.html" },
          ],
        },
        {
          id: 'david-koch',
          fullName: "David Hamilton Koch",
          parentName: "Fred C. Koch",
          status: 'DECEASED',
          borderType: 'deceased',
          dob: "22 May 1940, Wichita, Kansas",
          dod: "23 August 2019, Southampton, New York (aged 79; prostate cancer)",
          spouse: "Julia Margaret Flesher Koch (married May 1996; met on blind date 1991) — Iowa-born; relocated to NYC 1980s as fashion designer/model",
          spouseFamily: "Flesher family — Iowa retail/farming; no prior dynastic wealth",
          profession: "MIT B.S. and M.S. Chemical Engineering; joined Koch Industries 1970; served as EVP until retirement 2018; 1980 Libertarian Party vice-presidential candidate; major donor to cancer research, arts, and medical institutions ($1.3B+ lifetime philanthropy — David H. Koch Theater at Lincoln Center, Koch Institute for Integrative Cancer Research at MIT); diagnosed with prostate cancer 1992 — funded research thereafter.",
          majorPositions: "EVP, Koch Industries; 1980 Libertarian Party VP Candidate; Co-Founder, Americans for Prosperity; Major Donor, Koch Institute for Integrative Cancer Research (MIT)",
          netWorth: "~$58.7 billion (Forbes/Bloomberg, August 2019)",
          political: "Libertarian; 1980 Libertarian VP nominee; co-architect of Koch political network with Charles",
          donations: "$1.3B+ lifetime philanthropy — Lincoln Center ($100M), Sloan-Kettering, MIT Koch Institute; major AFP funder",
          wikiUrl: "https://en.wikipedia.org/wiki/David_Koch",
          sources: [
            { label: "Wikipedia — David Koch", url: "https://en.wikipedia.org/wiki/David_Koch" },
            { label: "Business Insider — Koch Brothers net worth and biography", url: "https://www.businessinsider.com/koch-brothers-net-worth-2018-8" },
          ],
        },
        {
          id: 'bill-koch',
          fullName: "William Ingraham 'Bill' Koch",
          parentName: "Fred C. Koch",
          status: 'LIVING',
          borderType: 'living',
          dob: "3 May 1940 (age 85)",
          dod: null,
          spouse: "Bridget Rooney (married 2005; prev. Joan Granlund, Angela Browne) — actress; niece of Pittsburgh Steelers owner Dan Rooney",
          spouseFamily: "Rooney family — Pittsburgh, Pennsylvania; Pittsburgh Steelers NFL ownership",
          profession: "MIT B.S., M.S., Ph.D. Chemical Engineering; attempted hostile takeover of Koch Industries 1980 (failed); co-founded lawsuit against Charles Koch 1980; forced out; used settlement proceeds to found Oxbow Corporation (1983) — energy and commodities trading; won America's Cup sailing race 1992 with yacht America³; extensive art and wine collector (estimated $600M+ wine collection); filed multi-million dollar lawsuits against wine counterfeiters including FBI sting operation.",
          majorPositions: "Founder & CEO, Oxbow Corporation (1983–present)",
          netWorth: "~$2.1 billion (Forbes, 2024–2025)",
          political: "Republican-leaning (less political than Charles/David)",
          donations: "Arts and cultural philanthropy; sports; wine fraud litigation",
          wikiUrl: "https://en.wikipedia.org/wiki/Bill_Koch",
          businesses: [
            {
              name: "Oxbow Corporation",
              title: "Founder",
              revenue: "Private; energy and commodities trading — petroleum coke, natural gas, coal, industrial minerals",
              url: "https://www.oxbow.com",
              urlDisplay: "oxbow.com",
            },
          ],
          sources: [
            { label: "Wikipedia — Bill Koch", url: "https://en.wikipedia.org/wiki/Bill_Koch" },
          ],
        },
      ],
    },
    {
      number: 3,
      label: "Third Generation — Living Descendants",
      note: "The third generation spans Charles Koch's two children (Chase and Elizabeth) and David Koch's three children with wife Julia (who inherited his 42% stake and is now the richest woman in the United States). Bill Koch's five children maintain low public profiles.",
      members: [
        {
          id: 'chase-koch',
          fullName: "Charles Chase Koch",
          parentName: "Charles Koch",
          status: 'LIVING',
          borderType: 'living',
          dob: "15 June 1977 (age 48)",
          dod: null,
          spouse: "Annie Koch",
          spouseFamily: null,
          profession: "President, Koch Disruptive Technologies (KDT) — Koch's venture capital arm investing in disruptive technology companies; Chairman, Stand Together Ventures Lab; Board Member, Koch Industries; Board Member, Charles Koch Foundation; previously EVP Koch Agronomic Services; Texas A&M B.S. Business Administration; first summer job age 15 digging holes at a Koch cattle feedlot in Kansas; described as 'less political' than father but still libertarian-conservative; only family member currently working in Koch Industries operational management.",
          majorPositions: "President, Koch Disruptive Technologies (KDT); Chairman, Stand Together Ventures Lab; Board Member, Koch Industries",
          netWorth: "Not independently reported; heir to Koch Industries stake; estimated in billions",
          political: "Libertarian-conservative leaning",
          donations: "Stand Together Ventures; Koch political network adjacent",
          wikiUrl: "https://en.wikipedia.org/wiki/Chase_Koch",
          businesses: [
            {
              name: "Koch Disruptive Technologies (KDT)",
              title: "President",
              revenue: "Private venture capital; investments across software, data analytics, medical devices, advanced materials, and sustainability",
              url: "https://www.kochind.com",
              urlDisplay: "kochind.com",
            },
          ],
          sources: [
            { label: "Wikipedia — Chase Koch", url: "https://en.wikipedia.org/wiki/Chase_Koch" },
            { label: "InfluenceWatch — Chase Koch profile, KDT, Stand Together Ventures", url: "https://www.influencewatch.org/person/chase-koch/" },
          ],
        },
        {
          id: 'elizabeth-koch',
          fullName: "Elizabeth Koch",
          parentName: "Charles Koch",
          status: 'LIVING',
          borderType: 'living',
          dob: "1976 (age ~49–50)",
          dod: null,
          spouse: "Not publicly disclosed",
          spouseFamily: null,
          profession: "Founder and Publisher, Catapult (literary publishing house and online community for writers); Founder, Perception Box (consciousness research nonprofit); received $60M grant from Koch-affiliated donor conduit 'Unlikely Giving' (2022) for consciousness and perception research interests; described as operating outside Koch Industries and the political network.",
          majorPositions: "Founder & Publisher, Catapult; Founder, Perception Box",
          netWorth: "Not independently disclosed; heir to Koch Industries stake",
          political: "Not publicly active; operates outside family political network",
          donations: "$60M received from Koch network 'Unlikely Giving' (2022) for consciousness research",
          wikiUrl: null,
          note: "Elizabeth Koch's $60M consciousness research funding from Koch network 'Unlikely Giving' was exposed by The Daily Beast in 2022 as an unusual allocation from within the Koch political funding apparatus.",
          businesses: [
            {
              name: "Catapult",
              title: "Founder & Publisher",
              revenue: "Literary publishing house and online writers community; private",
              url: "https://catapult.co",
              urlDisplay: "catapult.co",
            },
          ],
          sources: [
            { label: "Catapult.co — Elizabeth Koch profile", url: "https://catapult.co" },
          ],
        },
        {
          id: 'julia-koch',
          fullName: "Julia Margaret Flesher Koch",
          parentName: "David Koch (widow)",
          status: 'LIVING',
          borderType: 'living',
          dob: "12 April 1962, Des Moines, Iowa (age 63)",
          dod: null,
          spouse: "David Hamilton Koch (married May 1996; died August 2019)",
          spouseFamily: "Flesher family — Iowa retail/farming",
          profession: "Inherited 42% stake in Koch Industries from husband David Koch (2019); socialite and philanthropist; former fashion designer/model; paid ~$700M for 15% stake in BSE Global (Brooklyn Nets, NY Liberty, Barclays Center) 2024; negotiating minority stake in New York Giants NFL franchise 2025 (deal valued franchise at $10B+); donated $75M to NYU Langone Health (Julia Koch Ambulatory Center, West Palm Beach) 2024.",
          majorPositions: "42% stake holder, Koch Industries (held with three minor children); 15% stake, BSE Global (Brooklyn Nets, NY Liberty, Barclays Center)",
          netWorth: "~$81.25 billion (Forbes, September 2025) — richest woman in the United States",
          political: "Not publicly active",
          donations: "$75M to NYU Langone Health (2024); arts and medical philanthropy",
          wikiUrl: "https://en.wikipedia.org/wiki/Julia_Koch",
          businesses: [
            {
              name: "Koch Industries (42% stake)",
              title: "Major Stakeholder (with children)",
              revenue: "$125B+ annual revenue — 2nd largest private company in U.S.",
              url: "https://www.kochind.com",
              urlDisplay: "kochind.com",
            },
            {
              name: "BSE Global (Brooklyn Nets / NY Liberty / Barclays Center)",
              title: "15% Stake Owner",
              revenue: "~$700M investment; entity valued at ~$6B (NBA, WNBA, arena ownership)",
              url: "https://www.bseglobal.net",
              urlDisplay: "bseglobal.net",
            },
          ],
          sources: [
            { label: "Wikipedia — Julia Koch", url: "https://en.wikipedia.org/wiki/Julia_Koch" },
            { label: "Forbes — Julia Koch $74.2B richest heirs 2025", url: "https://www.forbes.com.au/news/billionaires/trust-fund-fortunes-the-worlds-richest-heirs-2025/" },
            { label: "North Jersey — Julia Koch NY Giants stake negotiations (Sept 2025)", url: "https://www.northjersey.com/story/news/2025/09/04/ny-giants-sell-stake-to-koch-family-who-is-julia-koch-david-koch-giants-worth/" },
          ],
          note: "Julia Koch and her three children (David Jr., Mary Julia, and John Koch) collectively hold the ~42% Koch Industries stake that David Koch owned. Mary Julia Koch is publicly identified as associate opinion editor at The Wall Street Journal. Julia is now the richest woman in the United States.",
        },
      ],
    },
  ],

  modernClaimants: [],

  connections: [
    {
      type: "FOUNDED",
      institution: "Koch Industries — $125B revenue; 120,000+ employees; 2nd largest private company in U.S.",
      relationship: "Fred Koch co-founded Wood River Oil and Refining (1940); renamed Koch Industries (1968) by Charles; grew from $21M (1967) to $125B+ revenue (2024) under Charles's 60-year leadership; subsidiaries include Flint Hills Resources, Georgia-Pacific (Angel Soft, Brawny, Quilted Northern, Dixie), Invista (Lycra, Stainmaster), Guardian Industries (glass), Molex (electronics), Koch Ag & Energy Solutions",
    },
    {
      type: "FOUNDED",
      institution: "John Birch Society (1958)",
      relationship: "Fred Koch was a co-founder of the John Birch Society — the primary organized extreme anti-communist political movement in postwar America. He passed this anti-government, anti-communist ideology directly to sons Charles and David, who institutionalized it into the most powerful libertarian political network in American history.",
    },
    {
      type: "FOUNDED",
      institution: "Cato Institute (1974) — premier libertarian think tank",
      relationship: "Charles Koch co-founded with Ed Crane, seed-funded with $500K; Washington D.C.; major policy influence on deregulation, free markets, and anti-government legislation across five decades",
    },
    {
      type: "FOUNDED",
      institution: "Americans for Prosperity (AFP) — Koch flagship political 501(c)4",
      relationship: "Founded by Charles and David Koch (2004); AFP Action super PAC spent $257M+ since 2004; $72M spent opposing/supporting candidates in 2024 election cycle; primary vehicle for Koch electoral influence across state and federal races",
    },
    {
      type: "POLICY",
      institution: "Stand Together / Believe in People — Koch dark money umbrella",
      relationship: "Charles Koch's nonprofit network; raised $578M and spent $548M in the 2024 election cycle (IRS documents); received $4.3B in Koch Industries stock in 2022 — largest disclosed gift to a 501(c)4 in U.S. history; operates with fewer disclosure requirements than formal charities",
    },
    {
      type: "ACADEMIC",
      institution: "Charles Koch Foundation — university funding program",
      relationship: "Donated $52.6M to over 400 colleges in 2022; critics document systematic curriculum influence at recipient universities across economics, public policy, and legal departments; Chase Koch is board member",
    },
    {
      type: "PHILANTHROPY",
      institution: "David H. Koch Charitable Foundation — $1.3B+ lifetime gifts",
      relationship: "David Koch's philanthropic arm; David H. Koch Theater at Lincoln Center ($100M); Koch Institute for Integrative Cancer Research at MIT; Memorial Sloan-Kettering Cancer Center; major arts and medical institution donor",
    },
    {
      type: "SPORTS",
      institution: "BSE Global — Brooklyn Nets (NBA), NY Liberty (WNBA), Barclays Center",
      relationship: "Julia Koch (David's widow) purchased ~15% stake for ~$700M in 2024; connecting Koch family wealth to professional basketball and one of America's premier entertainment venues",
    },
    {
      type: "SPORTS",
      institution: "New York Giants (NFL) — minority stake negotiations (2025)",
      relationship: "Julia Koch in negotiations for minority stake in New York Giants in 2025; franchise valued at $10B+ — would be highest-valued franchise deal in NFL history if completed",
    },
    {
      type: "ENERGY",
      institution: "Flint Hills Resources — petroleum refining and chemicals",
      relationship: "Koch Industries' primary refining unit; 4,000+ miles of pipelines; major U.S. refinery operator; historically one of the largest industrial polluters per EPA superfund records",
    },
    {
      type: "CORPORATE",
      institution: "Georgia-Pacific — consumer goods ($20-22B revenue est.)",
      relationship: "Acquired by Koch Industries 2005 for $21B — then the largest LBO in history; produces Angel Soft, Brawny, Quilted Northern, Dixie, Sparkle, Vanity Fair, Mardi Gras — consumer products used by virtually every American household",
    },
    {
      type: "POLICY",
      institution: "Climate Change Denial Infrastructure",
      relationship: "Koch Industries documented as one of the largest U.S. industrial polluters per EPA records; Charles Koch and Koch-funded organizations including Heartland Institute, Cato Institute, and AFP systematically funded and organized climate change denial for decades while Koch's oil refining, pipeline, and chemical operations generated billions from fossil fuel production",
    },
  ],

  legacy: {
    intro: "The Koch dynasty is perhaps the most consequential private industrial family in American political history — not for the size of their company alone, but for their systematic construction of a parallel political infrastructure that reshaped American conservatism, libertarianism, and the regulatory environment for private industry over five decades.",
    items: [
      {
        title: "Koch Industries: The Invisible Giant",
        description: "At $125 billion in annual revenue, Koch Industries is the second-largest private company in the United States by revenue (behind only Cargill). Unlike Walmart or ExxonMobil, it operates entirely outside public disclosure requirements — no quarterly earnings, no SEC filings, no shareholder letters. Its subsidiaries include petroleum refining (Flint Hills), consumer goods (Georgia-Pacific — makers of Angel Soft, Brawny, Quilted Northern, and Dixie), synthetic fibers (Invista — Lycra, Stainmaster), float glass (Guardian), and electronic components (Molex). Most Americans interact with Koch-made products every day without knowing it.",
      },
      {
        title: "The Dark Money Network",
        description: "Charles Koch constructed the most powerful private political funding network in American history. The Koch network raised $578 million and spent $548 million in the 2024 election cycle alone (per IRS documents). Americans for Prosperity has spent $257M+ since 2004. Charles Koch donated $5.3 billion in Koch Industries stock to two political nonprofits — Stand Together and Believe in People — in 2020–2022. This is the largest disclosed private donation to political organizations in American history.",
      },
      {
        title: "From John Birch to Libertarianism",
        description: "Fred Koch co-founded the John Birch Society in 1958 — an extreme anti-communist organization that accused President Eisenhower of being a Soviet agent. This ideology passed directly to Charles and David, who transformed it from paranoid Cold War politics into mainstream libertarianism: anti-government, anti-regulation, anti-labor, pro-market. The Cato Institute (1974) is their intellectual legacy; Americans for Prosperity (2004) is their electoral one.",
      },
      {
        title: "The University Funding Strategy",
        description: "The Charles Koch Foundation donated $52.6 million to over 400 colleges in 2022 alone. Critics and investigative journalists have documented a systematic pattern: Koch Foundation grants to economics and public policy departments come with influence over faculty hiring, curriculum design, and research focus. This is a documented, deliberate strategy to shape the next generation of economists and policymakers.",
      },
      {
        title: "Climate Denial and Industrial Pollution",
        description: "Koch Industries has been consistently listed among the largest industrial polluters in the United States per EPA superfund records. For decades, Koch-funded organizations including the Heartland Institute and Cato Institute were primary organizers of climate change denial. Charles Koch personally opposed the Paris Climate Agreement. Koch Industries' core business — oil refining, pipelines, and petrochemicals — generated billions from the fossil fuel economy while its political network worked systematically to prevent climate regulation.",
      },
      {
        title: "The Brothers' Civil War",
        description: "The Koch family saga includes one of the most complex and litigated family business disputes in American corporate history. In 1980, Frederick and Bill Koch sued Charles, claiming they had been cheated out of shares in Koch Industries. The lawsuit lasted years, culminated in a 1983 settlement, and was followed by continued litigation from Bill. Charles and David retained control of Koch Industries; Frederick and Bill were bought out. Frederick spent the rest of his life in the arts and arts philanthropy; Bill founded Oxbow Corporation with his settlement proceeds.",
      },
      {
        title: "Frederick Koch: The One Who Walked Away",
        description: "Of the four Koch brothers, the eldest — Frederick Robinson Koch (1933–2020) — is historically notable for being the one who completely rejected the family's industrial and political identity. He lived in European castles, donated to the Royal Shakespeare Company, and spent his life as a patron of arts and historic preservation. His entire estate was left to promote 'literature, history and the arts.' He rarely saw his brothers in his final decades. His assistant said of him: 'He spent his life as he wished, which was far removed from the business his father started.'",
      },
    ],
  },

  allSources: [
    { label: "Wikipedia — Fred C. Koch", url: "https://en.wikipedia.org/wiki/Fred_C._Koch" },
    { label: "New Netherland Institute — Fred Chase Koch [1900-1967]", url: "https://www.newnetherlandinstitute.org/history-and-heritage/dutch_americans/frederick-chase-koch" },
    { label: "Wikipedia — Koch family", url: "https://en.wikipedia.org/wiki/Koch_family" },
    { label: "Koch at a Glance 2024 (Official PDF)", url: "https://kochind.scene7.com/is/content/kochind/2024-Koch-at-a-Glance-US-web" },
    { label: "Family Root App — Koch Family Tree", url: "https://familyrootapp.com/blog/koch-family-tree-the-billionaire-industrialists" },
    { label: "Wikipedia — Charles Koch", url: "https://en.wikipedia.org/wiki/Charles_Koch" },
    { label: "Forbes — Charles Koch $73.8B (March 2026)", url: "https://www.celebritynetworth.com/richest-businessmen/richest-billionaires/charles-koch-net-worth/" },
    { label: "Forbes — Charles Koch gave $5.3B in stock to nonprofits (Oct 2023)", url: "https://www.forbes.com/sites/mattdurot/2023/10/10/exclusive-charles-koch-koch-industries-has-given-more-than-5-billion-of-his-stock-to-two-nonprofits/" },
    { label: "Wikipedia — David Koch", url: "https://en.wikipedia.org/wiki/David_Koch" },
    { label: "Business Insider — Koch Brothers net worth, biography", url: "https://www.businessinsider.com/koch-brothers-net-worth-2018-8" },
    { label: "Wikipedia — Frederick R. Koch", url: "https://en.wikipedia.org/wiki/Frederick_R._Koch" },
    { label: "Toronto City News — Frederick Koch death Feb 2020", url: "https://toronto.citynews.ca/2020/02/14/frederick-koch-low-profile-koch-brother-dies-at-86/" },
    { label: "Wikipedia — Bill Koch", url: "https://en.wikipedia.org/wiki/Bill_Koch" },
    { label: "Wikipedia — Chase Koch", url: "https://en.wikipedia.org/wiki/Chase_Koch" },
    { label: "InfluenceWatch — Chase Koch profile, KDT, Stand Together Ventures", url: "https://www.influencewatch.org/person/chase-koch/" },
    { label: "Wikipedia — Julia Koch", url: "https://en.wikipedia.org/wiki/Julia_Koch" },
    { label: "Forbes — Julia Koch $74.2B richest heirs 2025", url: "https://www.forbes.com.au/news/billionaires/trust-fund-fortunes-the-worlds-richest-heirs-2025/" },
    { label: "North Jersey — Julia Koch NY Giants stake negotiations (Sept 2025)", url: "https://www.northjersey.com/story/news/2025/09/04/ny-giants-sell-stake-to-koch-family-who-is-julia-koch-david-koch-giants-worth/" },
    { label: "New York Times — Koch Network spent ~$550M in 2024 cycle (Dec 2025)", url: "https://www.nytimes.com/2025/12/20/us/politics/koch-network-2024-election-trump.html" },
    { label: "Raw Story — AFP Action third in outside spending 2024, $257M since 2004", url: "https://www.rawstory.com/koch-networks-flagship-super-pac-pours-big-money-into-2024-elections/" },
    { label: "CMD — Charles Koch's Stand Together moved $176M (2022 IRS filings)", url: "https://www.exposedbycmd.org/2023/12/20/charles-kochs-stand-together-donor-conduits-move-176-million/" },
    { label: "NPR / Jane Mayer — Dark Money: Hidden History of Koch Brothers", url: "https://www.npr.org/2016/01/19/463565987/hidden-history-of-koch-brothers-traces-their-childhood-and-political-rise" },
    { label: "Statista — Largest U.S. private companies by revenue 2024 (Koch #2 behind Cargill)", url: "https://www.statista.com/statistics/549091/largest-private-us-companies-by-revenue/" },
    { label: "Porter's Five Forces — Koch Industries Revenue $125B (Nov 2024)", url: "https://portersfiveforce.com/blogs/how-it-works/kochind" },
    { label: "LeaderPortfolio — Charles Koch $73.79B (March 2026)", url: "https://leaderportfolio.com/billionaires/charles-koch" },
    { label: "Koch Industries official site", url: "https://www.kochind.com" },
    { label: "Catapult — Elizabeth Koch publisher", url: "https://catapult.co" },
    { label: "Inspirepreneur — Julia Koch biography, 42% Koch stake", url: "https://inspirepreneurmagazine.com/julia-koch/" },
    { label: "AOL/AFP — Koch network raises $70M+, launches anti-Trump ads (2023)", url: "https://www.aol.com/koch-network-raises-more-70-231351871.html" },
    { label: "Oxbow Corporation", url: "https://www.oxbow.com" },
  ],
};
