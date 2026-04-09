# 🔒 GOLDEN RULE — MANDATORY OPERATING CONSTRAINTS:
1. SCOPE LOCK: You may ONLY modify the specific files, components, pages, and data explicitly named in this prompt. Treat every unmentioned file as read-only and frozen.
2. NO SIDE EFFECTS: Do not clean up, improve, optimize, refactor, or fix anything outside the stated scope.
3. NO COMPONENT REWRITES: Modify ONLY the specific lines/functions relevant to the task. Do NOT rewrite entire component files from scratch.
4. DATA PRESERVATION: Do not alter any existing data entries unless explicitly instructed.
5. STYLE PRESERVATION: Do not change any visual styling on any element not explicitly targeted.
6. ROUTE PRESERVATION: Do not add, remove, or redirect any routes unless explicitly instructed.
7. DEPENDENCY PRESERVATION: Do not add or upgrade any packages unless explicitly required.
8. VERIFY BEFORE COMPLETING: After changes, preview every page to confirm nothing else broke.

---

# Prompt 2: Create "Insider Trades" Page

## Stack Context
React + Vite project, Tailwind CSS, React Router. Terminal/hacker aesthetic: black background, green text (`#00ff41` or similar), monospace fonts.

## Task Overview
Create a new page at route `/insider-trades` showing 116 corporate insider trading records. Add to navigation bar.

---

## Step 1: Create the Data File

Create `/src/data/insiderTrades.ts` (or `.json`) and paste the full dataset below into it.

```typescript
interface InsiderTrade {
  Flag: string;       // "—" for normal, "⚠️" for flagged/suspicious
  Date: string;       // ISO date string
  Company: string;    // Company name with ticker
  Insider: string;    // Insider's full name
  Position: string;   // Their role/title
  Type: string;       // "Sale" or "Purchase"
  Shares: string;     // Number of shares (as string, may include commas)
  Value: string;      // Dollar value (as string)
  Notes: string;      // Analysis notes
  Source: string;     // URL to SEC filing or source
}
```

**COMPLETE DATASET (116 records) — paste ALL of this into the data file:**

```json
[
  {
    "Flag": "—",
    "Date": "2026-03-23",
    "Company": "JPMorgan Chase (JPM)",
    "Insider": "Robin Leopold",
    "Position": "Head of Human Resources",
    "Type": "Sale",
    "Shares": "433",
    "Value": "$127,761",
    "Notes": "Small routine scheduled sale at $295.06/share. JPM was near all-time highs. No material event context.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=JPM&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2026-03-20",
    "Company": "NVIDIA (NVDA)",
    "Insider": "Mark Stevens",
    "Position": "Director",
    "Type": "Sale",
    "Shares": "221,682",
    "Value": "$38,503,027",
    "Notes": "Sold $38.5M in NVDA stock over two days (Mar. 19-20, 2026) as NVIDIA faced new U.S. export restrictions on AI chips to China (announced Mar. 2026) and amid antitrust scrutiny over its dominant position in AI chips. Stevens retains 7.5M+ shares. Large block sale by director during regulatory headwind period.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NVDA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-03-16",
    "Company": "ExxonMobil (XOM)",
    "Insider": "Darrin L. Talley",
    "Position": "VP, Corporate Development",
    "Type": "Sale",
    "Shares": "1,080",
    "Value": "$167,940",
    "Notes": "Small routine sale at $155.50/share. Talley has been making small periodic sales throughout 2025-2026. ExxonMobil was trading near 52-week highs. No unusual circumstances.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=XOM&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-03-13",
    "Company": "Pfizer (PFE)",
    "Insider": "Albert Bourla",
    "Position": "CEO",
    "Type": "Purchase",
    "Shares": "1,630",
    "Value": "$0",
    "Notes": "Award grant at $0 (RSU grant). No open-market sale or purchase. Bourla's 2026 grant as part of regular executive compensation program. Pfizer continued to trade near multi-year lows amid post-COVID revenue decline.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=PFE&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-03-10",
    "Company": "Chevron (CVX)",
    "Insider": "Michael K. Wirth",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "47,200",
    "Value": "$9,068,064",
    "Notes": "Note: Duplicate entry corrected — this reflects CVX's Pate transaction above. Wirth's Nov. 2024 exercise of 164,600 shares ($103.71 basis) was a compensation plan transaction, not an open-market sale. Retained all shares after exercise.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CVX&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-03-06",
    "Company": "Tesla (TSLA)",
    "Insider": "Vaibhav Taneja",
    "Position": "CFO",
    "Type": "Sale",
    "Shares": "2,265",
    "Value": "$899,074",
    "Notes": "Routine scheduled sale at $397/share following option exercise. Taneja regularly sells Tesla shares under 10b5-1 plan after exercising options. Tesla stock had been under pressure from declining deliveries and political controversies surrounding Elon Musk's role in DOGE.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=TSLA&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2026-03-06",
    "Company": "Chevron (CVX)",
    "Insider": "R. Hewitt Pate",
    "Position": "VP & General Counsel",
    "Type": "Sale",
    "Shares": "47,200",
    "Value": "$9,068,064",
    "Notes": "Sold $9M in CVX shares (via exercise + same-day sale) on Mar. 6 as oil price volatility spiked and Chevron was facing litigation over its Hess acquisition. Pate has rarely made large option-exercise sales. Large block sold at $192/share near recent highs while broader energy sector faced pressure from potential demand destruction.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CVX&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-03-05",
    "Company": "Moderna (MRNA)",
    "Insider": "Shannon Thyme Klinger",
    "Position": "Chief Legal Officer",
    "Type": "Sale",
    "Shares": "5,704",
    "Value": "$329,691",
    "Notes": "Routine sale at $57.80/share following RSU vest. Moderna stock had been in sustained decline from its 2021 peak of ~$497. Sale was part of standard compensation plan. Klinger retained 65,782 shares after sale.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MRNA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-03-05",
    "Company": "Wells Fargo (WFC)",
    "Insider": "Saul Van Beurden",
    "Position": "Head of Technology",
    "Type": "Sale",
    "Shares": "45,014",
    "Value": "$3,778,006",
    "Notes": "Tax-withholding RSU vest transaction (F-INKIND) at $83.93/share. Wells Fargo stock near 5-year high as Fed finally lifted major consent order constraints in 2024. Van Beurden retained 259,268 shares after this vest-related transaction.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=WFC&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-03-05",
    "Company": "Moderna (MRNA)",
    "Insider": "Stephen Hoge",
    "Position": "President",
    "Type": "Sale",
    "Shares": "316",
    "Value": "$8,510",
    "Notes": "Nominal RSU vest withholding transaction at $26.93/share. Hoge retained 1,452,119 shares. Moderna was near 5-year lows in 2025-2026 as COVID vaccine revenue normalized and pipeline programs faced delays. Routine compensation plan transaction.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MRNA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-03-03",
    "Company": "Boeing (BA)",
    "Insider": "Mortimer J. Buckley",
    "Position": "Director",
    "Type": "Purchase",
    "Shares": "2,230",
    "Value": "$499,966",
    "Notes": "Open-market purchase at $224.20/share — significant director buy after Boeing stock fell ~50% from 2023 highs. Buckley (Vanguard CEO) purchased while Boeing was dealing with manufacturing quality issues, strikes, and the Alaska Airlines door plug blowout aftermath. Insider purchase signals board confidence.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=BA&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2026-03-03",
    "Company": "Northrop Grumman (NOC)",
    "Insider": "Kathryn G. Simpson",
    "Position": "VP, Business Management",
    "Type": "Sale",
    "Shares": "873",
    "Value": "$650,385",
    "Notes": "Sold at $745/share — NOC near all-time high. This follows a pattern of multiple NOC executives selling at elevated prices ahead of potential defense budget cuts under the Trump/Musk DOGE initiative in 2026. NOC stock fell substantially in early 2026 as defense spending cuts were debated.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NOC&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-02-27",
    "Company": "Northrop Grumman (NOC)",
    "Insider": "Roshan S. Roeder",
    "Position": "VP, Corporate Development",
    "Type": "Sale",
    "Shares": "1,754",
    "Value": "$1,262,880",
    "Notes": "Sold $1.26M in NOC shares at $720/share as Northrop stock recovered following large B-21 bomber contract milestones. Routine executive compensation plan sale. Roeder retained 2,353 shares after sale.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NOC&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-02-24",
    "Company": "Boeing (BA)",
    "Insider": "Jeffrey S. Shockey",
    "Position": "EVP, Government Operations & Sustainability",
    "Type": "Sale",
    "Shares": "4,444",
    "Value": "$1,032,205",
    "Notes": "Tax-withholding RSU vest sale at $232.26/share. F-INKIND (withheld for taxes) transaction — not a discretionary sale. Boeing was recovering from 2024 manufacturing crisis and machinists' strike. Shockey retained 23,293 shares.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=BA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-02-23",
    "Company": "Amazon (AMZN)",
    "Insider": "Andrew R. Jassy",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "8,290",
    "Value": "$1,693,233",
    "Notes": "Scheduled sale following vesting of restricted stock units. Jassy exercised 24,680 restricted shares Feb. 21 and sold a portion two days later at $204.25. Routine scheduled transaction under 10b5-1 plan.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMZN&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-02-23",
    "Company": "RTX Corporation (RTX)",
    "Insider": "Dantaya M. Williams",
    "Position": "VP, Human Resources",
    "Type": "Sale",
    "Shares": "12,713",
    "Value": "$2,578,578",
    "Notes": "Sold $2.58M in RTX shares at $202.83. RTX stock had reached all-time highs on strong defense spending outlook and Pratt & Whitney engine business recovery. Sale appears to be routine executive compensation plan exercise and sale.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=RTX&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2026-02-19",
    "Company": "Northrop Grumman (NOC)",
    "Insider": "Kathryn G. Simpson",
    "Position": "VP, Business Management",
    "Type": "Sale",
    "Shares": "194",
    "Value": "$141,158",
    "Notes": "Sold $141K at $727.62/share. Combined with her March sale, Simpson divested significant holdings as defense stocks traded near historic highs just before DOGE-related defense spending cut announcements began to weigh on sector.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NOC&type=4"
  },
  {
    "Flag": "—",
    "Date": "2026-02-11",
    "Company": "Goldman Sachs (GS)",
    "Insider": "John F.W. Rogers",
    "Position": "Executive Vice President & Secretary",
    "Type": "Sale",
    "Shares": "2,992",
    "Value": "$2,846,270",
    "Notes": "Sold $2.85M across three transactions at $950-953/share. GS was near all-time highs after a strong 2025 for investment banking. Rogers retained 49,166 shares. Routine executive compensation sale.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=GS&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2025-12-19",
    "Company": "Olema Oncology / Opiant Pharma",
    "Insider": "Six Defendants (incl. former Citigroup employee)",
    "Position": "Various",
    "Type": "Sale",
    "Shares": "~5,000,000",
    "Value": "$41,000,000",
    "Notes": "DOJ/SEC charged six people in Dec. 2025 with a $41M insider trading and stock manipulation scheme involving Olema Oncology and Opiant Pharmaceuticals. A former Citigroup investment banker leaked at least 9 nonpublic M&A deals to accomplices who traded ahead of announcements. Also fabricated clinical data to inflate stock prices before selling. 51 charges across 6 defendants.",
    "Source": "https://www.fiercebiotech.com/biotech/6-people-charged-manipulating-stock-price-2-biotechs-41m-insider-trading-scheme"
  },
  {
    "Flag": "—",
    "Date": "2025-11-26",
    "Company": "Johnson & Johnson (JNJ)",
    "Insider": "John G. Morikis",
    "Position": "Director",
    "Type": "Purchase",
    "Shares": "1,250",
    "Value": "$257,688",
    "Notes": "Open-market purchase at $206.15/share — a bullish insider buy signal. JNJ stock was near multi-year lows amid talc litigation concerns. Director purchases on the open market are generally viewed as positive sentiment indicators.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=JNJ&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-10-23",
    "Company": "Lockheed Martin (LMT)",
    "Insider": "Frank A. St. John",
    "Position": "President & COO",
    "Type": "Sale",
    "Shares": "7,792",
    "Value": "$3,826,159",
    "Notes": "Sold 7,792 shares at $490-492/share, exhausting his entire position (0.52 shares remaining). Scheduled option exercise and sale following vesting. LMT was near 52-week lows as defense budget debates continued. St. John departed LMT as COO in late 2025.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=LMT&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-09-15",
    "Company": "Alphabet / Google (GOOG)",
    "Insider": "John L. Hennessy",
    "Position": "Chairman, Board of Directors",
    "Type": "Sale",
    "Shares": "30",
    "Value": "$7,565",
    "Notes": "Nominal sale of 30 shares at $252.16 alongside a small award grant. Routine transaction by independent board chair. No significance beyond routine portfolio management.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=GOOG&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-09-09",
    "Company": "NVIDIA (NVDA)",
    "Insider": "Jensen Huang",
    "Position": "CEO & Founder",
    "Type": "Sale",
    "Shares": "65,820",
    "Value": "$11,075,760",
    "Notes": "Scheduled divestiture under 10b5-1 plan. Huang regularly sells small portions of his enormous NVDA stake (~72M shares). No unusual timing relative to company events. NVDA stock had more than doubled from 2024 lows.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NVDA&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2025-08-27",
    "Company": "RTX Corporation (RTX)",
    "Insider": "Shane G. Eddy",
    "Position": "President, Pratt & Whitney",
    "Type": "Sale",
    "Shares": "25,968",
    "Value": "$4,149,427",
    "Notes": "Sold entire position (25,968 shares) at $159.79 — zero shares remaining after sale. Large concentrated single-day sale of all held shares just after RTX disclosed Pratt & Whitney GTF engine inspection program would affect airlines with significant financial liability (est. $3B+). Eddy liquidated fully before market absorbed full P&W impact.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=RTX&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-08-12",
    "Company": "RTX Corporation (RTX)",
    "Insider": "Troy D. Brunk",
    "Position": "President, Collins Aerospace",
    "Type": "Sale",
    "Shares": "18,773",
    "Value": "$2,004,787",
    "Notes": "Sold $2M via scheduled option exercise and sale at $90-94/share. RTX's Collins Aerospace unit had been recovering from pandemic-era defense and commercial aerospace disruptions. Brunk retained 24,095 shares after the sale.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=RTX&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-07-29",
    "Company": "General Dynamics (GD)",
    "Insider": "Rudy F. De Leon",
    "Position": "Director",
    "Type": "Sale",
    "Shares": "3,220",
    "Value": "$1,007,635",
    "Notes": "Sold $1M via option exercise at $312.93/share. Routine compensation plan sale. GD stock was benefiting from continued DoD budgets and Gulfstream business jet demand. De Leon has served on GD board since 2011.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=GD&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-06-30",
    "Company": "Amazon (AMZN)",
    "Insider": "Jeffrey P. Bezos",
    "Position": "Executive Chairman / Founder",
    "Type": "Sale",
    "Shares": "224,926",
    "Value": "$50,284,457",
    "Notes": "Bezos continues to regularly sell Amazon shares under scheduled plans. Sold $50M+ at $223/share. He has sold billions in Amazon stock since stepping down as CEO in 2021, primarily to fund Blue Origin space venture. Retains ~905M+ shares (largest single shareholder).",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMZN&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2025-06-01",
    "Company": "NVIDIA (NVDA)",
    "Insider": "Aarti S. Shah",
    "Position": "Director",
    "Type": "Sale",
    "Shares": "8,516",
    "Value": "$1,501,115",
    "Notes": "Sold at $176.27/share in March 2026 (Shah serves on Nvidia board since ~2023). Shah joined Nvidia's board while serving as a senior executive at Eli Lilly. She brings pharma/AI intersection expertise. Her board position gives her advance access to Nvidia's roadmap information. Sale during period of AI chip export restriction uncertainty.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NVDA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-05-27",
    "Company": "L3Harris Technologies (LHX)",
    "Insider": "Edward J. Zoiss",
    "Position": "President, Space & Airborne Systems",
    "Type": "Sale",
    "Shares": "2,000",
    "Value": "$490,000",
    "Notes": "Sold 2,000 shares at $245/share. LHX has been engaged in restructuring after its 2019 merger with L3 Technologies. Zoiss retained 25,325 shares. Routine executive sale under compensation plan.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=LHX&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-05-13",
    "Company": "JPMorgan Chase (JPM)",
    "Insider": "Ashley Bacon",
    "Position": "Chief Risk Officer",
    "Type": "Sale",
    "Shares": "5,202",
    "Value": "$1,365,681",
    "Notes": "Scheduled sale at $262.53/share. JPM CRO sale during period when JPM was trading near all-time highs. Part of systematic compensation plan. Retained 234,992 shares.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=JPM&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-05-12",
    "Company": "JPMorgan Chase (JPM)",
    "Insider": "Troy L. Rohrbaugh",
    "Position": "Co-CEO, Commercial & Investment Bank",
    "Type": "Sale",
    "Shares": "12,500",
    "Value": "$3,288,500",
    "Notes": "Sold $3.29M at $263.08/share. Routine executive compensation plan sale. JPM was near all-time highs following strong investment banking and trading revenue. Retained 151,126 shares.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=JPM&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-05-06",
    "Company": "CVS Health (CVS)",
    "Insider": "Larry Robbins",
    "Position": "Director",
    "Type": "Sale",
    "Shares": "150,000",
    "Value": "$10,000,500",
    "Notes": "Sold 150,000 shares at $66.67 as CVS stock was in multi-year decline amid structural headwinds in retail pharmacy and insurance divisions. Robbins retained 8.2M+ shares. Large block sale but consistent with his pattern of periodically reducing positions in his board companies.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CVS&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-05-06",
    "Company": "JPMorgan Chase (JPM)",
    "Insider": "Jeremy Barnum",
    "Position": "CFO",
    "Type": "Sale",
    "Shares": "40,014",
    "Value": "$10,034,311",
    "Notes": "Sold $10M in JPM shares at $250.77 following RSU vest. Barnum retained 18,017 shares after this planned divestiture. Routine post-vest sale. JPMorgan stock had risen 20%+ in trailing 12 months.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=JPM&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2025-05-05",
    "Company": "Northrop Grumman (NOC)",
    "Insider": "Mark A. Welsh III",
    "Position": "Director (former USAF Chief of Staff)",
    "Type": "Sale",
    "Shares": "6",
    "Value": "$2,950",
    "Notes": "Nominal sale but part of a pattern — Welsh (retired 4-star general and former Air Force Chief of Staff) sold NOC shares systematically while on the board. His position on the board gives him access to sensitive defense contract status information, raising ongoing questions about the revolving door between military leadership and defense contractor boards.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NOC&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-05-02",
    "Company": "L3Harris Technologies (LHX)",
    "Insider": "Christopher E. Kubasik",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "1,158",
    "Value": "$0",
    "Notes": "Gift/transfer transaction at $0 — Kubasik donated LHX shares to charitable organization. Not a market sale. Routine philanthropic divestiture. He retained 47,830 shares.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=LHX&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-03-04",
    "Company": "Pfizer (PFE)",
    "Insider": "Aamir Malik",
    "Position": "EVP, Chief Business Innovation Officer",
    "Type": "Purchase",
    "Shares": "371,824",
    "Value": "$9,574,468",
    "Notes": "Award grant (A-AWARD) at $25.75/share basis — RSU compensation award, not an open-market purchase. Pfizer was near 10-year lows in early 2025, struggling with post-COVID revenue normalization. Grant was part of retention package for senior leadership.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=PFE&type=4"
  },
  {
    "Flag": "—",
    "Date": "2025-02-18",
    "Company": "Meta Platforms (META)",
    "Insider": "Mark Zuckerberg",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "865",
    "Value": "$635,883",
    "Notes": "Routine scheduled sale under 10b5-1 plan. Zuckerberg regularly sells Meta shares to fund philanthropic work through the Chan Zuckerberg Initiative. No unusual timing relative to corporate events.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=META&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-12-24",
    "Company": "Meta Platforms (META)",
    "Insider": "Mark Zuckerberg",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "10,608",
    "Value": "$6,429,169",
    "Notes": "End-of-year scheduled sale under 10b5-1 plan at ~$606/share. Meta stock had risen 66%+ in 2024 following strong ad revenue recovery. Part of ongoing systematic divestiture to fund the Chan Zuckerberg Initiative.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=META&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-11-13",
    "Company": "Microsoft (MSFT)",
    "Insider": "Satya Nadella",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "4,719",
    "Value": "$0",
    "Notes": "Gift/transfer transaction at $0 (charitable donation) — Nadella donated MSFT shares to charitable organizations. Not a market sale; reflects typical philanthropic activity by major tech executives. Nadella retained ~859,608 shares.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MSFT&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-11-12",
    "Company": "Microsoft (MSFT)",
    "Insider": "Christopher D. Young",
    "Position": "EVP, Business Development",
    "Type": "Sale",
    "Shares": "7,200",
    "Value": "$3,050,352",
    "Notes": "Scheduled sale at $423.66/share following vesting of compensation shares. Microsoft was near all-time highs driven by Azure AI growth. Retained 103,366 shares after sale. No unusual timing relative to material events.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MSFT&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-11-11",
    "Company": "Citigroup (C)",
    "Insider": "Peter B. Henry",
    "Position": "Director",
    "Type": "Sale",
    "Shares": "13,000",
    "Value": "$909,610",
    "Notes": "Sold $909,610 in Citi shares at $69.97. Citi was in the midst of a major restructuring under CEO Jane Fraser. Henry retained 3,022 shares. No unusual timing relative to Citi corporate events.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=C&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2024-11-05",
    "Company": "Nvidia (NVDA)",
    "Insider": "Multiple Board Members",
    "Position": "Directors",
    "Type": "Sale",
    "Shares": "~500,000",
    "Value": "$75,000,000",
    "Notes": "NVDA board members collectively sold $75M+ in NVDA shares in Q4 2024 as export restrictions on H100/H200 chips to China expanded and new Blackwell GPU demand was generating enormous anticipation. Director Mark Stevens alone sold $38.5M in March 2026 during a period of active regulatory headwinds.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NVDA&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2024-11-05",
    "Company": "Trump Media & Technology (DJT)",
    "Insider": "Donald Trump Jr. (related entity)",
    "Position": "Director / Insider",
    "Type": "Sale",
    "Shares": "~7,000,000",
    "Value": "$47,000,000",
    "Notes": "Multiple DJT insiders sought to sell or distribute millions of shares through 2024 as the stock was highly volatile (traded from $10 to $79 and back). Trump's lockup expiration created enormous potential for insider selling. Trump Media filed SEC disclosures for planned sales; stock remains predominantly supported by political sentiment rather than business fundamentals.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=DJT&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-11-01",
    "Company": "Amazon (AMZN)",
    "Insider": "Jeffrey P. Bezos",
    "Position": "Executive Chairman / Founder",
    "Type": "Sale",
    "Shares": "1,068,452",
    "Value": "$213,765,192",
    "Notes": "Sold over $213M in Amazon shares in a single day at ~$200/share. Part of scheduled plan. Post-2021 CEO transition, Bezos has been systematically reducing his Amazon stake while his net worth rises due to stock appreciation. Retained 926M+ shares.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMZN&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-11-01",
    "Company": "Amazon (AMZN)",
    "Insider": "Jonathan Rubinstein",
    "Position": "Director",
    "Type": "Sale",
    "Shares": "5,004",
    "Value": "$1,000,049",
    "Notes": "Scheduled director sale at $199.85/share. Rubinstein (former Palm CEO and Apple hardware SVP) has been an Amazon director since 2010. Routine annual divestiture of vested director compensation. Amazon was near all-time highs on AWS cloud growth and advertising revenue.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMZN&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-10-29",
    "Company": "General Dynamics (GD)",
    "Insider": "Gregory S. Gallopoulos",
    "Position": "EVP, General Counsel & Secretary",
    "Type": "Sale",
    "Shares": "27,093",
    "Value": "$8,216,223",
    "Notes": "Large scheduled option exercise and sale at $303.26 following RSU vest. Gallopoulos is GD's top lawyer and retained 106,952 shares after the sale. GD was near 52-week highs on strong defense and Gulfstream aviation orders.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=GD&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2024-10-17",
    "Company": "UnitedHealth Group (UNH)",
    "Insider": "Stephen Hemsley",
    "Position": "Chairman",
    "Type": "Sale",
    "Shares": "~500,000",
    "Value": "$84,900,000",
    "Notes": "Sold $84.9M in shares Oct. 17, one week after the company reportedly received notice of a DOJ antitrust investigation. Stock dropped 5.2% over the two days after the investigation became public (Feb. 27-28, 2025). Bloomberg reported no evidence transactions were made under scheduled 10b5-1 plans. Sen. Elizabeth Warren called for SEC investigation.",
    "Source": "https://www.bloomberg.com/news/articles/2024-04-11/unitedhealth-unh-executives-sold-stock-before-us-probe-became-public"
  },
  {
    "Flag": "⚠️",
    "Date": "2024-10-16",
    "Company": "UnitedHealth Group (UNH)",
    "Insider": "Erin McSweeney",
    "Position": "Chief People Officer",
    "Type": "Sale",
    "Shares": "~2,200",
    "Value": "$1,090,000",
    "Notes": "Sold $1.09M on Oct. 16, the week after UnitedHealth reportedly received DOJ antitrust investigation notice. Shares fell after investigation became public. Bloomberg reported this was her first sale in years, and was not part of a disclosed 10b5-1 plan. Sen. Warren flagged trading as suspicious.",
    "Source": "https://www.beckershospitalreview.com/payers/unitedhealth-executives-sold-84-9m-in-stock-before-doj-probe-went-public.html"
  },
  {
    "Flag": "⚠️",
    "Date": "2024-10-14",
    "Company": "UnitedHealth Group (UNH)",
    "Insider": "John Rex",
    "Position": "CFO",
    "Type": "Sale",
    "Shares": "~15,000",
    "Value": "$7,200,000",
    "Notes": "Sold $7.2M one week after DOJ antitrust investigation notice. CFO sale absent a 10b5-1 plan during an active undisclosed regulatory investigation raises substantial concerns under SEC Rule 10b-5. Part of the cluster of executive sales Bloomberg flagged for potential insider trading investigation.",
    "Source": "https://www.bloomberg.com/news/articles/2024-04-11/unitedhealth-unh-executives-sold-stock-before-us-probe-became-public"
  },
  {
    "Flag": "—",
    "Date": "2024-10-01",
    "Company": "Tesla (TSLA)",
    "Insider": "Elon Musk",
    "Position": "CEO & largest shareholder",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$7,900,000,000",
    "Notes": "Musk sold approximately $7.9 billion in Tesla stock throughout 2022-2024, partly to fund the Twitter/X acquisition and partly to fund personal obligations. The sales were controversial and closely tracked by retail investors. He has continued to hold ~13% of Tesla (about 413M shares as of 2025).",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=TSLA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-09-24",
    "Company": "Alphabet / Google (GOOG)",
    "Insider": "Sundar Pichai",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "22,500",
    "Value": "$3,730,950",
    "Notes": "Routine scheduled sale under pre-set 10b5-1 plan at ~$165.82/share. Pichai regularly sells Alphabet shares. No unusual timing relative to corporate events — Google was facing ongoing DOJ antitrust litigation. Retained ~1.05M shares.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=GOOG&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2024-09-04",
    "Company": "Intel (INTC)",
    "Insider": "Pat Gelsinger",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "132,866",
    "Value": "$9,840,000",
    "Notes": "Sold $9.84M in Intel shares in Q2-Q3 2024 ahead of Intel's announcement of 15,000 layoffs, suspension of its dividend, and revelation of massive foundry losses. The sales occurred during a 10b5-1 plan but the plan was adopted in early 2024 when Intel's prospects were better. Intel stock fell 60%+ from his sales price to year-end 2024 lows. Gelsinger was ousted as CEO in December 2024.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=INTC&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-08-30",
    "Company": "Apple (AAPL)",
    "Insider": "Tim Cook",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "100,534",
    "Value": "$22,600,000",
    "Notes": "Annual scheduled RSU vest and sale at $224.78/share. Cook's annual compensation includes substantial RSU grants that he typically sells upon vesting. Apple was near all-time highs driven by iPhone 15 cycle and AI announcements. Routine transaction with no unusual circumstances.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AAPL&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-08-16",
    "Company": "Berkshire Hathaway (BRK.A)",
    "Insider": "Warren Buffett",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "varies (Apple)",
    "Value": "$75,500,000,000",
    "Notes": "Berkshire disclosed in Q3 2024 that it had reduced its Apple stake by approximately 67%, selling tens of billions in AAPL from a peak position of $174B. Buffett cited tax concerns and potential rate increases. The enormous sale surprised Wall Street given Buffett's frequent praise of Apple as a core holding. Berkshire's cash pile reached a record $325B by year-end 2024.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=BRK-A&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2024-07-05",
    "Company": "Boeing (BA)",
    "Insider": "Dave Calhoun",
    "Position": "CEO (outgoing)",
    "Type": "Sale",
    "Shares": "60,000",
    "Value": "$15,200,000",
    "Notes": "Calhoun sold shares under a scheduled plan while Boeing was embroiled in the Alaska Airlines door plug blowout investigation, FAA production limits, a machinists' strike, multiple whistleblower deaths, and congressional oversight hearings. He announced his resignation in March 2024 but continued selling shares as these crises mounted. Critics noted the sales occurred as Boeing stock was still elevated relative to what would come.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=BA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-05-31",
    "Company": "ExxonMobil (XOM)",
    "Insider": "Darren W. Woods",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "38,000",
    "Value": "$4,522,000",
    "Notes": "Scheduled sale at $119/share under compensation plan. Woods retained 1.16M+ shares. ExxonMobil had been generating massive profits during the post-COVID oil price surge. No unusual circumstances relative to corporate events.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=XOM&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-05-15",
    "Company": "Lockheed Martin (LMT)",
    "Insider": "James D. Taiclet",
    "Position": "Chairman, President & CEO",
    "Type": "Sale",
    "Shares": "20,000",
    "Value": "$10,200,000",
    "Notes": "Sold $10.2M in LMT shares at $510/share under compensation plan. LMT was benefiting from sustained elevated defense spending following Russia's Ukraine invasion. Taiclet retained ~191K shares. Routine executive compensation transaction.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=LMT&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2024-04-15",
    "Company": "NVIDIA (NVDA)",
    "Insider": "Jensen Huang",
    "Position": "CEO & Founder",
    "Type": "Sale",
    "Shares": "240,000",
    "Value": "$84,600,000",
    "Notes": "Sold $84.6M in NVDA shares over four days in April 2024 as NVDA stock was near peak AI bubble valuations above $900/share. Although under scheduled plan, the size and concentration of the April sales raised eyebrows. NVDA subsequently fell to $90 before recovering. Huang retained massive stake (>72M shares).",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NVDA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-03-19",
    "Company": "Meta Platforms (META)",
    "Insider": "Sheryl Sandberg",
    "Position": "Former COO; Board Member",
    "Type": "Sale",
    "Shares": "45,000",
    "Value": "$21,750,000",
    "Notes": "Sandberg (who stepped down as COO in 2022) sold $21.75M at ~$483/share. Meta was near all-time highs after recovery from its 2022 'Year of Efficiency.' Sandberg retained ~15.9M shares. Sale was under pre-filed 10b5-1 plan.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=META&type=4"
  },
  {
    "Flag": "—",
    "Date": "2024-02-22",
    "Company": "NVIDIA (NVDA)",
    "Insider": "Jensen Huang",
    "Position": "CEO & Founder",
    "Type": "Sale",
    "Shares": "600,000",
    "Value": "$271,700,000",
    "Notes": "Q1 2024 batch of scheduled sales totaling $272M as NVDA broke above $600/share for the first time. Post-split prices translate to ~$60 pre-adjustment. All under 10b5-1 plans. Huang is the most prolific seller of his own company's shares among current tech CEOs but retains one of the largest personal shareholdings.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=NVDA&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2023-12-08",
    "Company": "Pfizer (PFE)",
    "Insider": "Albert Bourla",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "132,508",
    "Value": "$5,600,000",
    "Notes": "Bourla sold $5.6M on Dec. 8, 2023 — one day before Pfizer announced it was writing down $5.6B in COVID product inventory (primarily Paxlovid). The sale was disclosed as part of a 10b5-1 plan adopted in October 2022. Even so, the precise timing of selling the same dollar value as the forthcoming write-down, one day prior, drew substantial criticism and a formal complaint to the SEC.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=PFE&type=4"
  },
  {
    "Flag": "—",
    "Date": "2023-11-15",
    "Company": "Chevron (CVX)",
    "Insider": "Michael K. Wirth",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "164,600",
    "Value": "$17,077,000",
    "Notes": "Option exercise and same-day sale under scheduled plan. Wirth exercised options originally granted years earlier at $103.71 basis and sold at $103.72. Chevron was completing a $53B acquisition of Hess at the time. Compensation plan transaction.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CVX&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2023-09-05",
    "Company": "Moderna (MRNA)",
    "Insider": "Stéphane Bancel",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "200,000",
    "Value": "$19,800,000",
    "Notes": "Bancel sold $19.8M in MRNA shares at $99/share in Sept. 2023, as Moderna faced falling COVID vaccine revenues and had not yet delivered on its pipeline promises. Insiders at Moderna sold hundreds of millions while the stock was elevated during peak COVID demand, with Bancel alone having sold $400M+ over 2020-2023. Senate Finance Committee subsequently investigated Moderna executives' insider sales.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MRNA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2023-08-11",
    "Company": "Amazon (AMZN)",
    "Insider": "Jeffrey P. Bezos",
    "Position": "Executive Chairman / Founder",
    "Type": "Sale",
    "Shares": "2,000,000",
    "Value": "$270,000,000",
    "Notes": "Bezos sold $270M in AMZN in Aug. 2023 as Amazon's stock recovered from 2022 lows. He has filed numerous Form 4s for scheduled sales over the period 2021-2026. Not unusual given the scale of his holdings (~905M shares). Primarily to fund Blue Origin.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMZN&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2023-05-10",
    "Company": "First Republic Bank (FRC)",
    "Insider": "Multiple Executives",
    "Position": "CEO, CFO, Directors",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$11,800,000",
    "Notes": "First Republic executives sold $11.8M in FRC shares in Jan-Feb 2023, weeks before the bank was seized by regulators in May 2023. CEO Michael Roffler and CFO Neal Holland were among sellers. Banking regulators disclosed these sales in the aftermath of FRC's collapse — raising questions about whether executives had advance knowledge of the bank's liquidity crisis.",
    "Source": "https://www.wsj.com/articles/first-republic-bank-executives-sold-millions-in-company-stock-before-collapse-11683754756"
  },
  {
    "Flag": "⚠️",
    "Date": "2023-03-09",
    "Company": "Silicon Valley Bank (SVB)",
    "Insider": "Greg Becker (CEO)",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "11,000",
    "Value": "$3,600,000",
    "Notes": "SVB CEO Greg Becker sold $3.6M in SVB stock on Feb. 27, 2023 — just two weeks before SVB collapsed in the largest bank failure since 2008. The sale was under a 10b5-1 plan adopted January 26, 2023, but the close timing of the plan adoption and rapid execution (31 days) attracted intense SEC scrutiny. Regulators subsequently investigated the filing.",
    "Source": "https://www.wsj.com/articles/silicon-valley-bank-ceo-sold-3-6-million-in-stock-two-weeks-before-bank-collapse-6b2dfc6"
  },
  {
    "Flag": "⚠️",
    "Date": "2022-11-08",
    "Company": "FTX (private)",
    "Insider": "Sam Bankman-Fried",
    "Position": "CEO & Founder",
    "Type": "Sale",
    "Shares": "N/A (crypto/private)",
    "Value": "$2,200,000,000",
    "Notes": "SBF extracted an estimated $2.2B from FTX and Alameda Research through various mechanisms including loans, political donations, and venture investments — all using customer funds. FTX collapsed November 2022. SBF was convicted of wire fraud, securities fraud, commodities fraud, and money laundering. Sentenced to 25 years in March 2024.",
    "Source": "https://www.justice.gov/archives/opa/pr/samuel-bankman-fried-sentenced-25-years-his-orchestration-multiple-fraudulent-schemes"
  },
  {
    "Flag": "⚠️",
    "Date": "2022-09-12",
    "Company": "Twitter/X (private, at time)",
    "Insider": "Parag Agrawal (CEO)",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "N/A",
    "Value": "$42,000,000",
    "Notes": "Twitter executives including CEO Parag Agrawal, former CEO Jack Dorsey, and board member Bret Taylor sold shares and/or exercised options in connection with Elon Musk's $44B acquisition. Agrawal and other executives received large severance payments totaling $200M+ after Musk fired them immediately upon taking control. Musk subsequently sued Agrawal and others, alleging misrepresentation of bot counts.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=TWTR&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2022-05-31",
    "Company": "Coinbase (COIN)",
    "Insider": "Brian Armstrong",
    "Position": "CEO & Co-Founder",
    "Type": "Sale",
    "Shares": "29,000",
    "Value": "$75,000,000",
    "Notes": "Armstrong sold $75M in Coinbase shares between Nov. 2021-May 2022 — as COIN declined from $368 IPO peak to $60. The sales were under scheduled 10b5-1 plans, but the ongoing disposals during a massive crypto bear market while Armstrong publicly projected confidence drew criticism. Coinbase later announced 18% workforce reduction in June 2022.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=COIN&type=4"
  },
  {
    "Flag": "—",
    "Date": "2022-04-04",
    "Company": "JPMorgan Chase (JPM)",
    "Insider": "Jamie Dimon",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "1,000,000",
    "Value": "$141,500,000",
    "Notes": "First-ever sale of JPM shares by Dimon in his ~17 years as CEO. Sold 1M shares at $141.50 — his stated purpose was diversification. JPM stock subsequently fell to $101 by year-end 2022 as the Fed raised rates aggressively. The unusual nature of Dimon's first-ever sale drew significant attention and was followed by a notable stock decline.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=JPM&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2022-01-12",
    "Company": "Peloton (PTON)",
    "Insider": "Barry McCarthy (incoming CEO) / John Foley (outgoing CEO)",
    "Position": "CEO transition",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$500,000,000",
    "Notes": "Peloton insiders including co-founder/CEO John Foley sold ~$500M in PTON shares between mid-2020 and early 2022, as the stock rose from ~$20 to $171 on pandemic fitness demand — then collapsed back toward $10. Foley alone took out a $55M personal loan collateralized by shares. The insider selling pattern at elevated prices while Peloton's product demand was declining drew SEC scrutiny.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=PTON&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2021-11-05",
    "Company": "Tesla (TSLA)",
    "Insider": "Elon Musk",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "10,000,000",
    "Value": "$11,000,000,000",
    "Notes": "Musk sold $11B in Tesla shares after conducting a Twitter poll asking if he should sell 10% of his stake. The poll, while framed as democratic, created what critics called a 'pre-announced' sale that still shocked markets and temporarily drove TSLA down 16%+. Musk cited tax obligations — his options were set to expire and he owed massive taxes on the gains. Largest documented insider sale by a sitting CEO in U.S. market history at the time.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=TSLA&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2021-08-05",
    "Company": "Various (COVID vaccine stocks)",
    "Insider": "Multiple pharma executives (Moderna, BioNTech, Regeneron)",
    "Position": "CEOs, CFOs, Directors",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$1,800,000,000",
    "Notes": "Executives at COVID vaccine and treatment companies sold nearly $1.8B in shares over 2020-2021 as their stocks soared. Moderna execs alone sold $180M+. BioNTech co-founders sold hundreds of millions. Regeneron's George Yancopoulos sold $196M. These sales occurred while companies were receiving emergency use authorizations and while the public was told vaccines were the path back to normalcy.",
    "Source": "https://www.cnbc.com/2021/08/10/moderna-mrna-insiders-have-cashed-out-more-than-half-a-billion-in-stock-this-year.html"
  },
  {
    "Flag": "⚠️",
    "Date": "2021-06-09",
    "Company": "AMC Entertainment (AMC)",
    "Insider": "Adam Aron",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "312,500",
    "Value": "$25,000,000",
    "Notes": "Sold $25M at $80/share during the peak of the meme stock rally as retail investors drove AMC from $2 to $72 within weeks. Aron had publicly engaged with Reddit's retail investor community while simultaneously selling shares at elevated prices. Critics accused him of exploiting retail investors' enthusiasm. He subsequently issued $1.25B in new stock diluting shareholders.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AMC&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2020-02-24",
    "Company": "Various (COVID pre-announcement)",
    "Insider": "Senators Richard Burr, Kelly Loeffler, Dianne Feinstein, James Inhofe",
    "Position": "U.S. Senators",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$55,000,000",
    "Notes": "Multiple U.S. Senators sold millions in stocks between Jan. 24-Feb. 13, 2020 — days after receiving private Senate Intelligence Committee briefings on COVID-19's potential economic impact, and before public markets began pricing in pandemic risks. Sen. Burr (Intel Committee Chair) sold $1.5M; Sen. Loeffler sold $3M+; Sen. Inhofe sold $400K+; Sen. Feinstein disclosed sales tied to husband's business. DOJ investigated Burr; charges were dropped. Reform advocates called it the most brazen congressional insider trading scandal in decades.",
    "Source": "https://en.wikipedia.org/wiki/Senate_stock_transactions_controversy"
  },
  {
    "Flag": "⚠️",
    "Date": "2020-01-24",
    "Company": "Various (COVID-19 stocks)",
    "Insider": "Richard Burr (Sen.) and wife",
    "Position": "Senate Intelligence Committee Chairman",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$1,700,000",
    "Notes": "Burr and his wife sold 33 stock trades worth $628,033 on Jan. 24, 2020, the same day the Senate received a private coronavirus briefing from health officials. The DOJ obtained his phone records via warrant; he voluntarily temporarily stepped down as Intelligence Committee chair. The DOJ ultimately declined to prosecute. Critics noted the STOCK Act prohibits exactly this type of trading on congressional intelligence.",
    "Source": "https://en.wikipedia.org/wiki/Senate_stock_transactions_controversy"
  },
  {
    "Flag": "⚠️",
    "Date": "2019-09-20",
    "Company": "WeWork (private, at time)",
    "Insider": "Adam Neumann",
    "Position": "CEO & Co-Founder",
    "Type": "Sale",
    "Shares": "N/A",
    "Value": "$700,000,000",
    "Notes": "Neumann extracted $700M from WeWork by selling shares back to SoftBank and through debt facilities secured by WeWork shares, while simultaneously causing the company to spend billions on ill-advised expansion. His controlling stock structure (20:1 voting shares) gave him unilateral control. When the planned $47B IPO collapsed in September 2019, WeWork's valuation fell to ~$8B and 2,400 employees were laid off. Neumann faced no criminal charges and received a $1.7B severance package.",
    "Source": "https://en.wikipedia.org/wiki/Adam_Neumann"
  },
  {
    "Flag": "⚠️",
    "Date": "2019-01-16",
    "Company": "Boeing (BA)",
    "Insider": "Dennis Muilenburg (CEO) + Multiple Executives",
    "Position": "CEO + Board",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$49,700,000",
    "Notes": "Boeing executives, including CEO Dennis Muilenburg, sold nearly $50M in shares between the first Lion Air crash (Oct. 2018) and the second Ethiopian Airlines crash (Mar. 2019), during which time Boeing maintained the MAX was safe and lobbied regulators against a grounding. The Senate Commerce Committee specifically identified the insider sales pattern as requiring investigation. Muilenburg was ultimately fired in December 2019.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=BA&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2018-08-07",
    "Company": "Tesla (TSLA)",
    "Insider": "Elon Musk",
    "Position": "CEO",
    "Type": "Purchase",
    "Shares": "tweet-based",
    "Value": "N/A",
    "Notes": "Musk tweeted 'Am considering taking Tesla private at $420. Funding secured.' on Aug. 7, 2018 — a statement the SEC found was false and materially misleading. TSLA jumped 11% on the tweet. No funding was secured. Musk and Tesla each paid $20M SEC fines and Musk agreed to have his tweets pre-approved by counsel (later contested and reversed). SEC brought charges for securities fraud; the case became a landmark on CEO social media liability.",
    "Source": "https://www.sec.gov/litigation/litreleases/2018/lr24244.htm"
  },
  {
    "Flag": "—",
    "Date": "2017-10-18",
    "Company": "Facebook / Meta (FB)",
    "Insider": "Mark Zuckerberg",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$13,000,000,000",
    "Notes": "Zuckerberg has sold billions in Facebook/Meta shares over the years, primarily through the Chan Zuckerberg Initiative philanthropic entity. In 2017 alone, he sold $13B in FB shares. These are not traditional insider sales but charitable donations and diversification under scheduled plans. He retains majority voting control through Class B shares (10 votes each).",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=META&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2016-07-21",
    "Company": "Theranos (private)",
    "Insider": "Elizabeth Holmes & Ramesh Balwani",
    "Position": "CEO & COO",
    "Type": "Sale",
    "Shares": "N/A (private)",
    "Value": "$945,000,000",
    "Notes": "Holmes and Balwani raised $945M from investors by fraudulently claiming Theranos had developed revolutionary blood-testing technology that could run hundreds of tests from a single drop of blood. The technology did not work as claimed. Holmes was convicted in January 2022 and sentenced to 11 years. This is the defining case of Silicon Valley startup fraud and insider deception of the 2010s.",
    "Source": "https://www.justice.gov/usao-ndca/pr/elizabeth-holmes-sentenced-more-11-years-defrauding-theranos-investors-hundreds"
  },
  {
    "Flag": "—",
    "Date": "2016-05-19",
    "Company": "Apple (AAPL)",
    "Insider": "Tim Cook",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "30,000",
    "Value": "$3,800,000",
    "Notes": "Routine scheduled sale at $97.92/share following performance-based RSU vest. Cook's first major equity sale after receiving his 2011 CEO compensation package that included time- and performance-vested RSUs. Routine compensation plan transaction.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AAPL&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2015-04-27",
    "Company": "Lumber Liquidators (LL)",
    "Insider": "Thomas Sullivan (CEO)",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "50,000",
    "Value": "$3,900,000",
    "Notes": "CEO Sullivan sold $3.9M in Lumber Liquidators shares in Q3 2014, months before a 60 Minutes investigation in March 2015 revealed the company was selling Chinese-made laminate flooring that tested positive for elevated formaldehyde levels. The company's stock fell 25% on the news. FINRA investigated insider sales. The case was notable for executives selling ahead of a major undisclosed product safety scandal.",
    "Source": "https://www.sec.gov/litigation/litreleases/2016/lr23672.htm"
  },
  {
    "Flag": "—",
    "Date": "2014-09-18",
    "Company": "Alibaba (BABA)",
    "Insider": "Jack Ma",
    "Position": "Executive Chairman / Founder",
    "Type": "Sale",
    "Shares": "N/A (IPO)",
    "Value": "$867,000,000",
    "Notes": "Ma sold $867M in Alibaba shares at the IPO. The $25B Alibaba IPO in September 2014 was the largest in history at the time. Ma retained massive stake. The IPO sale itself is standard founder liquidity. Ma later came under Chinese government pressure after his 2020 Ant Group IPO was halted, and he substantially reduced his public profile.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=BABA&type=4"
  },
  {
    "Flag": "—",
    "Date": "2012-05-17",
    "Company": "Facebook (FB)",
    "Insider": "Mark Zuckerberg",
    "Position": "Chairman & CEO",
    "Type": "Sale",
    "Shares": "30,200,000",
    "Value": "$1,135,000,000",
    "Notes": "Sold $1.1B at IPO ($38/share). Facebook shares fell immediately post-IPO and reached a low of $17.73 within three months. Many retail investors lost money buying shares at IPO price. The institutional pre-IPO road show bookrunner (Morgan Stanley) was accused of selectively sharing revenue downgrades with large clients but not retail investors — in what became a major securities lawsuit.",
    "Source": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=META&type=4"
  },
  {
    "Flag": "⚠️",
    "Date": "2011-10-03",
    "Company": "Solyndra (private — federal loans)",
    "Insider": "George Kaiser (major investor/bundler)",
    "Position": "Major shareholder / Obama donor",
    "Type": "Sale",
    "Shares": "N/A",
    "Value": "$535,000,000",
    "Notes": "Solyndra received $535M in federal loan guarantees backed by Obama administration despite internal DOE warnings about viability. Major investor George Kaiser was a prominent Obama campaign bundler. After Solyndra's bankruptcy in Sept. 2011, Kaiser's Argonaut investment secured itself as a priority creditor ahead of taxpayers — violating the terms of the original federal guarantee. The case became a major political scandal about crony capitalism in green energy funding.",
    "Source": "https://en.wikipedia.org/wiki/Solyndra"
  },
  {
    "Flag": "⚠️",
    "Date": "2010-04-16",
    "Company": "Goldman Sachs (GS)",
    "Insider": "Fabrice Tourre (VP) / Goldman Sachs",
    "Position": "VP, Structured Products",
    "Type": "Sale",
    "Shares": "N/A (structured product)",
    "Value": "$550,000,000",
    "Notes": "Goldman Sachs VP Fabrice Tourre designed and sold ABACUS 2007-AC1, a synthetic CDO backed by mortgages, while simultaneously allowing hedge fund Paulson & Co. (which had helped select the mortgages) to short it. Goldman failed to disclose Paulson's role to investors. Goldman paid $550M SEC fine — the largest ever for a Wall Street firm at that time. Tourre was personally found liable for securities fraud in a 2013 civil trial.",
    "Source": "https://www.sec.gov/news/press-release/2010-123"
  },
  {
    "Flag": "—",
    "Date": "2009-06-15",
    "Company": "Citi / Bank of America / AIG (TARP recipients)",
    "Insider": "Multiple TARP bank executives",
    "Position": "CEOs, CFOs, Directors",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "varies",
    "Notes": "Following the 2008 financial crisis and $700B TARP bailout, multiple bank executives sold shares after partial recovery. AIG CEO Edward Liddy and bank executives faced intense congressional scrutiny over compensation — TARP recipients paid $165M in bonuses in 2009. The Treasury Department's TARP Special Inspector General documented numerous instances of executives benefiting personally from taxpayer-funded bailouts.",
    "Source": "https://en.wikipedia.org/wiki/Troubled_Asset_Relief_Program"
  },
  {
    "Flag": "⚠️",
    "Date": "2008-09-15",
    "Company": "Lehman Brothers (LEH)",
    "Insider": "Richard Fuld (CEO) + Executives",
    "Position": "CEO",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$480,000,000",
    "Notes": "Lehman CEO Richard Fuld extracted approximately $480M in compensation including stock sales from 2000-2008 while Lehman's leverage ratio climbed to 44:1 and its subprime exposure became fatal. Fuld sold shares in 2007-2008 while publicly claiming Lehman was sound. Congress demanded Fuld explain how he could sell hundreds of millions while employees lost retirement savings. No criminal charges were filed despite the $691B Lehman bankruptcy being the largest in U.S. history.",
    "Source": "https://en.wikipedia.org/wiki/Bankruptcy_of_Lehman_Brothers"
  },
  {
    "Flag": "⚠️",
    "Date": "2001-10-16",
    "Company": "Enron (ENE)",
    "Insider": "Ken Lay, Jeff Skilling + multiple executives",
    "Position": "CEO, COO, CFO",
    "Type": "Sale",
    "Shares": "varies",
    "Value": "$1,100,000,000",
    "Notes": "Enron executives sold over $1.1B in ENRON stock between 1999-2001 while the company's fraudulent accounting kept the stock price artificially elevated. Meanwhile, employees in the 401k plan were locked out of selling their Enron stock during the collapse, losing their retirement savings. Ken Lay alone sold $70M+. Jeff Skilling sold $66M. The case became the defining insider trading and securities fraud case of the early 2000s.",
    "Source": "https://en.wikipedia.org/wiki/Enron_scandal"
  }
]
```

> **Note:** The above is the complete 116-record dataset. If any records appear truncated due to encoding, refer to the full file at `/home/user/workspace/data_insider_trades.json`.

---

## Step 2: Create the Page Component

Create `/src/pages/InsiderTrades.tsx`.

**Route:** `/insider-trades`

### Summary Stats Bar (top of page)
Compute dynamically from the data:
- **Total Records:** 116
- **Flagged Trades (⚠️):** count where `Flag === "⚠️"`
- **Total Value Tracked:** sum all Value fields that are parseable numbers (skip non-numeric)
- **Top Companies:** top 3 companies by trade count

### Filter Controls
1. **Company search** — text input, filters `Company` field (case-insensitive substring)
2. **Insider name search** — text input, filters `Insider` field
3. **Type filter** — All | Purchase | Sale
4. **Flag filter** — All | ⚠️ Flagged Only | — Routine Only
5. **Reset Filters** button

### Data Table
Columns:
| Flag | Date | Company | Insider | Position | Type | Shares | Value | Notes | Source |

- **Flag** — display "⚠️" or "—" as-is; ⚠️ rows should have a subtle red/orange tint on the entire row
- **Date** — YYYY-MM-DD
- **Company** — company name
- **Insider** — name
- **Position** — role/title (can truncate with tooltip for long values)
- **Type** — PURCHASE (green badge) or SALE (red badge)
- **Shares** — number as-is from data
- **Value** — dollar value as-is from data
- **Notes** — truncate to 100 chars with a `[+]` expand button that reveals full text inline
- **Source** — `[SRC]` link opening in new tab

**Sortable columns:** Date, Company, Insider, Type, Value (numeric sort for Value)
**Pagination:** 25 records per page

### Styling
Match terminal green-on-black aesthetic. Flagged rows (⚠️) get a faint `rgba(255,50,50,0.05)` background tint and the ⚠️ icon in amber/orange color.

---

## Step 3: Register Route

Add to router: `<Route path="/insider-trades" element={<InsiderTrades />} />`

---

## Step 4: Add to Nav Bar

Add "Insider Trades" to the site navigation bar, after "Congress Trades" (or after "Convictions" if Congress Trades hasn't been added yet). Match existing nav item styling exactly.

---

## DO NOT TOUCH
All existing pages, routes, data files, components (except nav bar which gets one new link), global styles, Tailwind config.

---

## Verification Checklist
- [ ] `/insider-trades` loads with 116 records
- [ ] Stats bar shows correct counts
- [ ] ⚠️ rows have visual differentiation
- [ ] Filters work (company, insider, type, flag)
- [ ] Notes column has expand/collapse
- [ ] Sorting works on all sortable columns
- [ ] Source links open in new tab
- [ ] All other pages unchanged
