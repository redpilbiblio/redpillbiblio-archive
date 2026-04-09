import { DynastyMember, DynastyFounder, DynastyConnection, DynastySource } from './dynasty_medici';

interface OriginsData {
  paragraphs: string[];
  preWealthLineage: string[];
  keyNote?: string;
  dynastyClassification?: string;
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

interface WealthMechanism {
  amount: string;
  label: string;
  description: string;
}

interface VehicleAsset {
  name: string;
  type: string;
  description: string;
  aum?: string;
  status: 'Active' | 'Closed' | 'Dark Money' | 'Indirect';
}

interface LegalRecord {
  case: string;
  person: string;
  jurisdiction: string;
  outcome: string;
  outcomeType: 'cleared' | 'impeached' | 'settled' | 'nocharge' | 'active';
}

interface Allegation {
  name: string;
  description: string;
  status: string;
  statusType: 'admitted' | 'settled' | 'denied';
}

interface EpsteinFact {
  fact: string;
  status: 'documented' | 'claimed' | 'none';
}

interface PowerMechanism {
  title: string;
  description: string;
}

interface OpaqueStructure {
  name: string;
  description: string;
}

export interface ClintonDynastyData {
  id: string;
  origins: OriginsData;
  founder: DynastyFounder;
  wealthMechanisms: WealthMechanism[];
  generations: GenerationData[];
  minorChildren: {
    names: string[];
    note: string;
    ages: string;
  };
  vehicles: VehicleAsset[];
  connections: DynastyConnection[];
  legalRecord: LegalRecord[];
  allegations: Allegation[];
  vincentFosterNote: string;
  epsteinConnection: {
    stats: { label: string; value: string; color?: string }[];
    facts: EpsteinFact[];
  };
  powerAnalysis: {
    mechanisms: PowerMechanism[];
    opaqueStructures: OpaqueStructure[];
    capitalVsSymbolic: { person: string; classification: string; role: string }[];
  };
  legacy: LegacyData;
  allSources: DynastySource[];
}

export const clintonDynasty: ClintonDynastyData = {
  id: 'clinton',

  origins: {
    paragraphs: [
      "The surname Clinton derives from a Norman-English place name. Its principal English root traces to Glympton (also written \"Glinton\"), an estate in Oxfordshire, England, formed from Old English clīn (\"hill\") + tun (\"enclosure\"), meaning roughly \"settlement by the hill.\" The name entered the aristocratic record after the Norman Conquest of 1066. Geoffrey de Clinton (fl. 1130) served as Chamberlain and Treasurer to King Henry I and is credited as the founder of the great Clinton family of England; he built Kenilworth Castle in Warwickshire.",
      "A separate Irish branch emerged in the 1650s when a William Clinton — who had supported the Royalist cause in the English Civil War and lost his English estates — settled in County Longford, Ireland. His son Charles emigrated to America in the summer of 1729. The Clinton name also appears in Irish/Scottish lineages through the Scots-Irish McClinton contraction.",
    ],
    preWealthLineage: [
      "1700s–1800s: South Carolina / Arkansas — Subsistence farmers, small traders; Cassidy line; Levi Cassidy (c. 1790–c. 1850), Chesterfield, SC",
      "Late 1800s: Sherman, TX / Hope, AR — Poor farmers; William Jefferson Blythe Sr. (1884–1935)",
      "1918–1946: Midwest/South (traveling) — Working class; William Jefferson Blythe Jr. (1918–1946), traveling heavy equipment salesman; dies in auto accident 3 months before son's birth",
      "1923–1994: Arkansas — Nursing/working class; Virginia Dell Cassidy Kelley, nurse anesthetist; four marriages; Bill raised partly by maternal grandparents",
      "1930s–1960s: Hope / Hot Springs, AR — Small business, lower-middle class; Roger Clinton Sr. (stepfather), car dealership co-owner; alcoholic and abusive; Bill takes his surname",
    ],
    keyNote: "Bill Clinton's maternal grandfather, James Eldridge Cassidy, owned a small grocery store on Hazel Street in Hope, Arkansas — notably one of the most racially integrated establishments in the segregated South, extending credit across racial lines. This early exposure deeply shaped Clinton's stated worldview.",
    dynastyClassification: "The Clinton dynasty does not follow the traditional inherited-wealth model. Power and capital accumulation begin with Bill Clinton himself, making him simultaneously the dynasty's founder and its most powerful generator. This is a political-to-corporate conversion dynasty — public power converted into private wealth over a 25-year post-White House period.",
    sources: [
      { label: "Wikipedia — Bill Clinton", url: "https://en.wikipedia.org/wiki/Bill_Clinton" },
      { label: "Wikipedia — Geoffrey de Clinton", url: "https://en.wikipedia.org/wiki/Geoffrey_de_Clinton" },
    ],
  },

  founder: {
    fullName: "William Jefferson Clinton",
    status: 'LIVING',
    dob: "August 19, 1946 · Hope, Arkansas, USA",
    dod: null,
    spouse: "Hillary Diane Rodham Clinton — married October 11, 1975; still married; born Chicago, IL; from middle-class Chicago suburban Republican family (Hugh E. Rodham Sr., drapery/textile business)",
    spouseFamily: "Rodham family — middle-class Chicago suburban; Hugh E. Rodham Sr. owned small drapery/textile business",
    profession: "42nd President of the United States (1993–2001); Governor of Arkansas (1979–1981, 1983–1992); Attorney General of Arkansas (1977–1979); post-presidency: author, global speaker, foundation chairman, consultant",
    majorPositions: "42nd President; Chairman, Clinton Foundation; Honorary Chancellor, Laureate Education (2010–2015); Partner/Advisor, Yucaipa Companies (2001–c.2008)",
    netWorth: "~$120–240M (combined with Hillary) · Forbes analyzed $240M earnings 2001–2015",
    political: "Democratic Party; \"Third Way\" centrist / Clintonism",
    donations: "Major Democratic donor and fundraiser",
    wikiUrl: "https://en.wikipedia.org/wiki/Bill_Clinton",
    sources: [
      { label: "Wikipedia — Bill Clinton", url: "https://en.wikipedia.org/wiki/Bill_Clinton" },
      { label: "Forbes — Clinton Earnings Analysis", url: "https://www.forbes.com/sites/danalexander/2015/10/13/how-the-clintons-made-more-than-230-million-after-leaving-the-white-house/" },
    ],
  },

  wealthMechanisms: [
    {
      amount: "$104.9M",
      label: "Presidential Speaking Fees",
      description: "542 speeches, 2001–2013. Combined with Hillary: $153M+ in speaking fees 2001–2015. Single speech to Renaissance Capital (Moscow, Kremlin-linked bank): $500,000.",
    },
    {
      amount: "$17.5M",
      label: "Laureate Education",
      description: "\"Honorary Chancellor\" 2010–2015. Laureate donated $1–5M to Clinton Foundation. For-profit education company; Walden University affiliate placed on Education Dept. monitoring list.",
    },
    {
      amount: "$15.4M",
      label: "Yucaipa Companies (Ron Burkle)",
      description: "Partner/Advisor 2001–c.2008. Yucaipa investors included Sheikh Mohammed Bin Rashid al-Maktoum, ruler of Dubai. Legal scholars questioned what specific services were rendered.",
    },
    {
      amount: "$12M",
      label: "Book Advance",
      description: "Memoir My Life (2004). Additional book deals throughout post-presidential career contributed to total earnings.",
    },
    {
      amount: "$2.125M+",
      label: "GEMS Education",
      description: "Advisor/Partner 2010–2015. World's largest private K–12 operator. GEMS named Clinton Global Initiative \"strategic partner\" in 2010.",
    },
    {
      amount: "$500K+",
      label: "Foreign Govt. Donations via Foundation",
      description: "Millions in foreign-government and corporate donations channeled through the Clinton Foundation during Hillary's Secretary of State tenure. Algeria alone: $500K (violated MOU with State Dept.).",
    },
  ],

  generations: [
    {
      number: 1,
      label: "Co-Architect",
      members: [
        {
          id: 'hillary-clinton',
          fullName: "Hillary Diane Rodham Clinton",
          parentName: null,
          status: 'LIVING',
          borderType: 'living',
          dob: "October 26, 1947 · Chicago, Illinois",
          dod: null,
          spouse: "Bill Clinton (married 1975)",
          spouseFamily: null,
          profession: "First Lady (1993–2001); U.S. Senator, NY (2001–2009); Secretary of State (2009–2013); 2016 Presidential Nominee; Professor of Practice, Columbia SIPA (2023–present); Chair, Faculty Advisory Board, Columbia Institute of Global Politics",
          majorPositions: "U.S. Senator (NY); 67th Secretary of State; 2016 Democratic Presidential Nominee; Co-founder, HiddenLight Productions; Founder, Onward Together PAC",
          netWorth: "~$120M combined (2024–2025 estimates)",
          political: "Democratic Party",
          donations: "Onward Together funded Swing Left, Indivisible, Color of Change, Emerge America, Run for Something during 2018 midterms",
          wikiUrl: "https://en.wikipedia.org/wiki/Hillary_Clinton",
          sources: [
            { label: "Wikipedia — Hillary Clinton", url: "https://en.wikipedia.org/wiki/Hillary_Clinton" },
          ],
        },
      ],
    },
    {
      number: 2,
      label: "Generation 2",
      members: [
        {
          id: 'chelsea-clinton',
          fullName: "Chelsea Victoria Clinton",
          parentName: "Bill Clinton & Hillary Clinton",
          status: 'LIVING',
          borderType: 'living',
          dob: "February 27, 1980 · Little Rock, Arkansas",
          dod: null,
          spouse: "Marc Mezvinsky (married July 31, 2010, Rhinebeck, NY)",
          spouseFamily: "Mezvinsky family — Edward Mezvinsky (former Democratic congressman, Iowa) convicted of fraud 2001; Marjorie Margolies (Democratic congresswoman, Pennsylvania)",
          profession: "Vice Chair, Clinton Foundation; Corporate Board Director (Expedia, IAC, Clover Health); Co-Founder, HiddenLight Productions; Columbia University Mailman School (adjunct faculty)",
          majorPositions: "Vice Chair, Clinton Foundation; Vice Chair, CHAI; Director, Expedia Group (Chair, Compensation Committee); Director, IAC Inc.; Co-founder, HiddenLight Productions",
          netWorth: "~$30M (combined with Marc Mezvinsky)",
          political: "Democratic Party",
          donations: "Foundation work primarily",
          wikiUrl: "https://en.wikipedia.org/wiki/Chelsea_Clinton",
          sources: [
            { label: "Wikipedia — Chelsea Clinton", url: "https://en.wikipedia.org/wiki/Chelsea_Clinton" },
          ],
        },
        {
          id: 'marc-mezvinsky',
          fullName: "Marc Margolies Mezvinsky",
          parentName: null,
          status: 'LIVING',
          borderType: 'inlaw',
          dob: "December 10, 1977",
          dod: null,
          spouse: "Chelsea Clinton (married 2010)",
          spouseFamily: "Clinton family",
          profession: "Partner, TPG Rise Climate; Former Goldman Sachs Principal (8 years); 3G Capital Partners (2008–2011); Social Capital (Vice Chairman); Eaglevale Partners LP founder (CLOSED 2016)",
          majorPositions: "Partner, TPG Rise Climate ($220B+ AUM platform); Director, AmSpec LLC; Director, Anew Climate LLC; Director, Miratech Group LLC (since 2024)",
          netWorth: "Combined with Chelsea ~$30M",
          political: "Democratic Party",
          donations: "Not publicly disclosed",
          wikiUrl: "https://en.wikipedia.org/wiki/Marc_Mezvinsky",
          sources: [
            { label: "Wikipedia — Marc Mezvinsky", url: "https://en.wikipedia.org/wiki/Marc_Mezvinsky" },
          ],
        },
      ],
    },
  ],

  minorChildren: {
    names: ["Charlotte Clinton Mezvinsky", "Aidan Clinton Mezvinsky", "Jasper Clinton Mezvinsky"],
    note: "Per protocol, minor children are not profiled individually beyond what is already in the public record. No sensitive personal details are presented for children.",
    ages: "Charlotte (b. Sep. 26, 2014, age ~11); Aidan (b. Jun. 18, 2016, age ~9); Jasper (b. Jul. 22, 2019, age ~6)",
  },

  vehicles: [
    {
      name: "Bill, Hillary & Chelsea Clinton Foundation",
      type: "501(c)(3) Public Charity",
      description: "Raised ~$2B+ cumulatively; operates in 180+ countries. Revenue ~$41–116M/year (2015–2023 range); ~$48.5M (2023 IRS). Controversy over foreign government donations while Hillary was Secretary of State. Control: Bill Clinton: Chairman; Chelsea Clinton: Vice Chair; Hillary Clinton: former board member.",
      aum: "~$48.5M revenue (2023)",
      status: "Active",
    },
    {
      name: "Clinton Health Access Initiative (CHAI)",
      type: "Independent 501(c)(3)",
      description: "Spin-off; historically ~2/3 of foundation revenues. Focus on HIV/AIDS drug pricing in sub-Saharan Africa. Remained semi-independent after 2016 campaign restructuring. Control: Chelsea Clinton — Vice Chair since 2022.",
      aum: "Majority of foundation revenues",
      status: "Active",
    },
    {
      name: "Clinton Family Foundation (Private)",
      type: "Private 501(c)(3)",
      description: "Total assets: $717K (2024, down 41.4% YoY). Annual giving: $502K (2024). Donor sources not required to disclose. Control: Bill Clinton: President; Hillary Clinton: Secretary/Treasurer; Chelsea Clinton: Director.",
      aum: "$717K assets (2024)",
      status: "Active",
    },
    {
      name: "Onward Together",
      type: "Political 501(c)(4)",
      description: "Founded by Hillary Clinton (2017). Funnels money to progressive infrastructure: Swing Left, Indivisible, Color of Change, Emerge America, Run for Something. Donors not required to disclose — full dark money protection. Co-founded with Howard Dean.",
      aum: "Revenue undisclosed",
      status: "Dark Money",
    },
    {
      name: "HiddenLight Productions",
      type: "For-Profit Production Company",
      description: "Emmy award-winning. Projects: Gutsy (Apple TV+), In Her Hands (Netflix). Co-founded 2020/2021. Control: Hillary Clinton + Chelsea Clinton (co-founders/exec producers); Sam Branson (Richard Branson's son): Co-founder.",
      aum: "Revenue undisclosed",
      status: "Active",
    },
    {
      name: "TPG Rise Climate (via Marc Mezvinsky)",
      type: "Private Equity Climate Fund",
      description: "Marc Mezvinsky: Partner. TPG manages $220B+ AUM. Rise Climate dedicated fund: $7B+; second large fund in progress (2025). Indirect Clinton family capital exposure via son-in-law. Not directly controlled by Clintons.",
      aum: "$7B+ (Rise Climate)",
      status: "Indirect",
    },
    {
      name: "Clinton Global Initiative (CGI)",
      type: "Membership Organization — WOUND DOWN",
      description: "Shut down 2022 (final meeting). Layoffs of 22 employees announced January 2017. Peak: 200+ full-time employees, $25.7M program expenses. Wound down amid 2016 campaign fundraising conflicts.",
      aum: "Peak $25.7M expenses",
      status: "Closed",
    },
    {
      name: "Eaglevale Partners LP (via Marc Mezvinsky)",
      type: "Hedge Fund — CLOSED",
      description: "Launched 2011 with two Goldman Sachs colleagues. ~$400M AUM at peak. Lost ~90% on Hellenic Opportunity fund (Greece). Investors included Goldman CEO Lloyd Blankfein. Closed 2016.",
      aum: "Lost ~90%",
      status: "Closed",
    },
  ],

  connections: [
    { entity: "Office of the President", relationship: "Bill Clinton — 42nd President (1993–2001)", significance: "Longest peacetime economic expansion in U.S. history; NAFTA; welfare reform; CHIP; impeached 1998, acquitted 1999" },
    { entity: "U.S. Senate (New York)", relationship: "Hillary Clinton — Senator (2001–2009)", significance: "First former First Lady elected to Senate; platform for 2008 and 2016 presidential bids" },
    { entity: "U.S. Department of State", relationship: "Hillary Clinton — Secretary of State (2009–2013)", significance: "Arab Spring, Libya intervention, Benghazi; private email server — FBI investigation concluded 2016" },
    { entity: "Clinton Foundation / CHAI", relationship: "Bill, Hillary, Chelsea — Leadership", significance: "Raised ~$2B+ cumulatively; 180+ countries; controversy over foreign government donations" },
    { entity: "Laureate International Universities", relationship: "Bill Clinton — Honorary Chancellor (2010–2015)", significance: "Paid $17.5M over 5 years; Laureate donated $1–5M to Clinton Foundation" },
    { entity: "Goldman Sachs", relationship: "Marc Mezvinsky — Principal (8 years)", significance: "Goldman CEO Lloyd Blankfein invested in Mezvinsky's Eaglevale fund" },
    { entity: "TPG Capital / TPG Rise Climate", relationship: "Marc Mezvinsky — Partner (2019–present)", significance: "TPG: $220B+ AUM; Rise Climate $7B+ climate tech fund" },
    { entity: "IAC / InterActiveCorp", relationship: "Chelsea Clinton — Board Director (2011–present)", significance: "Barry Diller longtime Clinton fundraiser; Chelsea earned $9M total through 2020" },
    { entity: "Expedia Group", relationship: "Chelsea Clinton — Board Director (2017–present)", significance: "Appointed by Diller; $250K/year in stock + $45K cash retainer" },
    { entity: "Jeffrey Epstein Network", relationship: "Bill Clinton — Documented association (2001–2003)", significance: "26 documented flights on Epstein's aircraft; Ghislaine Maxwell attended Chelsea's 2010 wedding" },
  ],

  legalRecord: [
    {
      case: "Whitewater Real Estate Investigation",
      person: "Bill + Hillary Clinton",
      jurisdiction: "U.S. Federal / Independent Counsel",
      outcome: "Cleared — \"insufficient evidence\" to charge either (Independent Counsel Robert Ray, 2000–2002). 6-year investigation, $50M–$77M cost.",
      outcomeType: "cleared",
    },
    {
      case: "Monica Lewinsky / Perjury & Obstruction",
      person: "Bill Clinton",
      jurisdiction: "U.S. Federal / House",
      outcome: "Impeached December 19, 1998 by House on perjury and obstruction charges. Acquitted by Senate February 12, 1999.",
      outcomeType: "impeached",
    },
    {
      case: "Paula Jones Sexual Harassment Suit",
      person: "Bill Clinton",
      jurisdiction: "U.S. Federal Civil",
      outcome: "Settled November 1998 for $850,000 — no admission of liability.",
      outcomeType: "settled",
    },
    {
      case: "Email Controversy",
      person: "Hillary Clinton",
      jurisdiction: "U.S. Federal (FBI / State Dept.)",
      outcome: "No charges filed (2016). FBI Dir. Comey: \"extremely careless.\" 100 emails retroactively classified; 22 Top Secret.",
      outcomeType: "nocharge",
    },
    {
      case: "Clinton Foundation–State Dept. Controversy",
      person: "Hillary Clinton / Foundation",
      jurisdiction: "Congressional / Media",
      outcome: "No charges. Foundation accepted $40M+ from Arab nations. Multiple congressional investigations found ethical concerns but no prosecutable conduct.",
      outcomeType: "nocharge",
    },
    {
      case: "Epstein Congressional Deposition",
      person: "Bill + Hillary Clinton",
      jurisdiction: "U.S. Congress, House Oversight Committee",
      outcome: "Deposed Feb. 26–27, 2026 in Chappaqua. Initially defied subpoena; agreed after contempt threat. Testimony transcribed, behind closed doors. No charges as of March 2026.",
      outcomeType: "active",
    },
  ],

  allegations: [
    { name: "Monica Lewinsky", description: "Consensual affair with White House intern (Clinton's own admission). Led directly to 1998 impeachment proceedings.", status: "Admitted by Clinton", statusType: "admitted" },
    { name: "Paula Jones", description: "Sexual harassment (1991, Arkansas): unwanted exposure and proposition.", status: "Settled $850K", statusType: "settled" },
    { name: "Juanita Broaddrick", description: "Alleged rape in Little Rock hotel, 1978. Widely reported. Clinton denies all allegations.", status: "Clinton Denies · No Charges", statusType: "denied" },
    { name: "Kathleen Willey", description: "Alleged groping in Oval Office anteroom, 1993. Clinton denies. No charges filed.", status: "Clinton Denies · No Charges", statusType: "denied" },
    { name: "Leslie Millwee", description: "Alleged sexual assault, 1980. Clinton denies. No charges filed.", status: "Clinton Denies · No Charges", statusType: "denied" },
  ],

  vincentFosterNote: "Vince Foster Death (July 20, 1993): Foster was the White House Deputy Counsel and longtime friend of both Clintons. His death was ruled a suicide by multiple independent investigations, including by Independent Counsel Kenneth Starr. Claims of Clinton involvement have circulated for decades but have never been supported by any credible evidentiary finding from any of the five separate investigations. Classification: Alleged / Widely Circulated / NOT judicially established or credibly documented by any independent investigation.",

  epsteinConnection: {
    stats: [
      { label: "Flight Log Entries", value: "26" },
      { label: "Clinton's Initial Stated Count", value: "4", color: "accent" },
      { label: "Congressional Deposition Year", value: "2026" },
      { label: "Criminal Charges Filed (to date)", value: "0", color: "muted" },
    ],
    facts: [
      { fact: "26 documented flights on Epstein's aircraft (per flight logs)", status: "documented" },
      { fact: "Clinton initially stated \"four trips\" to reporters", status: "documented" },
      { fact: "Clinton spokesperson denied visits to Little St. James island", status: "documented" },
      { fact: "FOIA requests for Secret Service records found no evidence of island visit", status: "documented" },
      { fact: "Ghislaine Maxwell attended Chelsea Clinton's wedding (2010)", status: "documented" },
      { fact: "Doug Band (former Clinton aide) claimed Clinton visited Epstein's island in Jan. 2003 (2020 Vanity Fair)", status: "claimed" },
      { fact: "Both Clintons deposed by House Oversight Committee (Feb. 26–27, 2026)", status: "documented" },
      { fact: "Criminal charges related to Epstein network", status: "none" },
    ],
  },

  powerAnalysis: {
    mechanisms: [
      { title: "The Political Conversion Mechanism", description: "The presidency (1993–2001) was not the product of inherited wealth — it was the entry point into a post-presidential commercial empire. Credibility and a Rolodex worth hundreds of millions in speaking fees, consulting, and foundation donations." },
      { title: "The Foundation Vehicle", description: "The Clinton Foundation became the central instrument for converting global political access into philanthropic prestige and commercial adjacency. Foreign governments, corporations, and UHNW donors contributed, creating mutual benefit without legally provable quid pro quo." },
      { title: "The Speaking Circuit", description: "Bill earned $104.9M for 542 speeches in a 12-year post-presidential window. Combined with Hillary: $153M+ in speaking fees alone 2001–2015. This made them among the most financially successful post-presidential families in U.S. history." },
      { title: "Hillary's Independent Platform", description: "Senator → Secretary of State → Presidential nominee created independent access and earning capacity ($9M/year in speaking fees in 2013 and 2014). Also maintained a political pipeline for foundation fundraising independent of Bill." },
      { title: "Next-Generation Board Capture", description: "Chelsea's placement on IAC (2011) and Expedia (2017) boards — both controlled by longtime Clinton ally Barry Diller — translates family prestige into corporate governance compensation and influence without a traditional operating track record." },
      { title: "Climate Capital via In-Law", description: "Marc Mezvinsky's position at TPG Rise Climate (managing $220B+, dedicated $7B climate tech fund) places the Clinton family orbit at the center of ESG and impact investing capital flows at a global scale." },
    ],
    opaqueStructures: [
      { name: "Harry Walker Agency", description: "Manages all Clinton speaking engagements. IRS forms disclose only gross income — specific speech buyers not disclosed." },
      { name: "Clinton Family Foundation (Private)", description: "Assets $717K (2024). Officers: all three Clintons. Donor sources not required to disclose under private foundation rules." },
      { name: "Onward Together 501(c)(4)", description: "Legally prohibited from disclosing donors. Funds progressive political infrastructure organizations. Full dark money protection." },
      { name: "Consulting Arrangements (Yucaipa/GEMS/Laureate)", description: "Precise nature of \"advisory services\" rendered was never publicly detailed. Yucaipa payments sourced in part from capital from Sheikh Mohammed of Dubai." },
      { name: "Foundation Donor Overlap", description: "Nearly half of Hillary's 2008 and 2016 campaign bundlers were also Clinton Foundation donors. Foundation donors were among those getting State Department access." },
    ],
    capitalVsSymbolic: [
      { person: "Bill Clinton", classification: "\"A\" + \"B\"", role: "Primary capital generator and political brand; actively directed consulting, foundation" },
      { person: "Hillary Clinton", classification: "\"A\" + \"B\"", role: "Co-capital generator; independent power operator; active foundation controller, production company operator" },
      { person: "Chelsea Clinton", classification: "Primarily \"B\"", role: "Manages foundation, corporate boards, HiddenLight; less public political profile" },
      { person: "Marc Mezvinsky", classification: "\"B\"", role: "Highest-AUM capital allocator in family orbit; $220B+ platform; relatively low public profile" },
    ],
  },

  legacy: {
    intro: "The Clinton dynasty represents a distinct model of American power accumulation: political-to-corporate conversion over a 25-year post-White House period.",
    items: [
      { title: "Political Legacy", description: "42nd President; defined Democratic Party centrism for 30+ years; longest peacetime economic expansion; NAFTA; welfare reform" },
      { title: "Philanthropic Scale", description: "~$2B+ raised through Clinton Foundation; 180+ countries; major HIV/AIDS drug access work through CHAI" },
      { title: "Commercial Conversion", description: "$240M+ in post-presidential earnings; pioneered the modern presidential speaking circuit model" },
      { title: "Next Generation", description: "Chelsea positioned in corporate governance and media production; Marc Mezvinsky in climate finance at scale" },
    ],
  },

  allSources: [
    { label: "Wikipedia — Bill Clinton", url: "https://en.wikipedia.org/wiki/Bill_Clinton" },
    { label: "Wikipedia — Hillary Clinton", url: "https://en.wikipedia.org/wiki/Hillary_Clinton" },
    { label: "Wikipedia — Chelsea Clinton", url: "https://en.wikipedia.org/wiki/Chelsea_Clinton" },
    { label: "Wikipedia — Marc Mezvinsky", url: "https://en.wikipedia.org/wiki/Marc_Mezvinsky" },
    { label: "Forbes — Clinton Earnings Analysis", url: "https://www.forbes.com/sites/danalexander/2015/10/13/how-the-clintons-made-more-than-230-million-after-leaving-the-white-house/" },
    { label: "Clinton Foundation 990 Filings", url: "https://www.clintonfoundation.org/about/annual-financial-reports/" },
    { label: "New York Times — Clinton Foundation Coverage", url: "https://www.nytimes.com/topic/organization/clinton-foundation" },
    { label: "Washington Post — Clinton Coverage", url: "https://www.washingtonpost.com/politics/clinton-foundation/" },
    { label: "Independent Counsel Robert Ray Final Report (2002)", url: "https://www.justice.gov/archives/sco/file/809866/download" },
    { label: "FBI Director Comey Press Statement (July 2016)", url: "https://www.fbi.gov/news/press-releases/press-releases/statement-by-fbi-director-james-b-comey-on-the-investigation-of-secretary-hillary-clintons-use-of-a-personal-e-mail-system" },
  ],
};
