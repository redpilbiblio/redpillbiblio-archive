/*
  # Add 2025-2026 Events and Documents

  This migration adds comprehensive evidence items across all 9 pillars:
  
  ## New Events Added:
  
  ### Pillar 1: Financial Systems (4 events)
  1. Fed Ends Quantitative Tightening (October 2025)
  2. Fed Holds Rates Steady in March 2026 amid Still-Sticky Inflation
  3. Fed Holds Rates Amid War With Iran (March 2026)
  4. Pentagon Rushes to Spend $153 Billion in One Year (February 2026)
  
  ### Pillar 2: Space & Black Budget Programs (4 events)
  1. House UAP Transparency Hearing (September 2025)
  2. FY2026 NDAA Mandates Pentagon UAP Intercept Briefings (December 2025)
  3. White House Registers Alien.gov and Aliens.gov (March 2026)
  4. FY2026 Military Intelligence Budget: $33.6 Billion Disclosed
  
  ### Pillar 3: AI Ethics & Digital Rights (5 events)
  1. Trump Signs Executive Order to Preempt State AI Laws (December 2025)
  2. The TAKE IT DOWN Act (April 2025)
  3. FISA Section 702 - The April 2026 Expiration Showdown
  4. EU Fines X €120 Million (2026)
  5. Trump Launches Freedom.gov (February 2026)
  
  ### Pillar 4: Government Health Transparency (3 events)
  1. Big Pharma Deploys 545 Lobbyists (2025)
  2. Drug Price Transparency Delayed Again (December 2025)
  3. PBM Transparency Rules Take Effect (2026)
  4. State Attorneys General Warn: Federal Online Safety Bill Would Weaken State Protections (February 2026)
  
  ### Pillar 5: Child Safety & Trafficking (4 events)
  1. AI-Generated CSAM Explodes 624% (2025)
  2. Epstein Financial Records Unsealed (October-November 2025)
  3. Meta Faces Trial Over Child Exploitation (2026)
  4. New York Moves to Criminalize AI-Generated CSAM (January 2026)
  
  ### Pillar 6: Energy & Suppressed Technology (4 events)
  1. Trump Drug Pricing EO Signals "Most Favored Nation" Model (May 2025)
  2. China's "Artificial Sun" Breaks Fusion Density Barrier (January 2026)
  3. The Fusion Startup Race (2026)
  
  ### Pillar 7: Media Manipulation (3 events)
  1. 17,000+ Journalism Jobs Cut in 2025
  2. "Algorithmic Capture" - The 2026 Prediction That Became Reality
  3. AI Governance in 2026: "No Longer Optional"
  
  ### Pillar 8: War & Intelligence Operations (3 events)
  1. Palantir's $1 Billion DHS Contract (March 2026)
  2. Pentagon IT Budget Hits $66.1 Billion (March 2026)
  3. U.S.-Israel War With Iran (March 2026)
  
  ### Pillar 9: Elections & Democratic Process (4 events)
  1. DHS SAVE System Flagging U.S. Citizens (2025-2026)
  2. The National Voter Roll (February 2026)
  3. The SAVE America Act Passes the House (February 2026)
  4. States Pass Their Own SAVE Acts (March 2026)
  
  ## Security
  - All inserts use the existing public read policies
  - No changes to RLS policies required
*/

-- Pillar 1: Financial Systems

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'Fed Ends Quantitative Tightening — Balance Sheet Reduction Stops',
  'At its October 29, 2025 meeting, the Federal Reserve cut the federal funds rate by 25 basis points to 3.75–4.00% and simultaneously announced it would conclude the reduction of its $6.58 trillion balance sheet — ending quantitative tightening (QT) effective December 1, 2025. Signs of liquidity stress in short-term funding markets forced the halt. The Fed now plans to use "reserve management purchases" (RMPs) to maintain liquidity without formally restarting QE — a distinction critics have called semantic.',
  '2025-10-29',
  'Financial Systems',
  '{"sources": ["Federal Reserve FOMC Statement", "Silicon Valley Bank / First Citizens", "RSM Real Economy"]}'::jsonb
),
(
  'Fed Holds Rates Steady in March 2026 — "Still-Sticky Inflation"',
  'At its March 2026 meeting, the Fed held the benchmark interest rate unchanged. The Fed had already slowed its balance sheet runoff in March 2025, reducing the monthly Treasury rolloff cap from $25 billion to just $5 billion. After the most aggressive tightening cycle in 40 years (2022–2024), the Fed has effectively reversed course on QT while keeping rates in a holding pattern — leaving a $6.5+ trillion balance sheet permanently in place.',
  '2026-03-19',
  'Financial Systems',
  '{"sources": ["Fidelity", "CNBC"]}'::jsonb
),
(
  'Fed Holds Rates Amid War With Iran — "Unprecedented Uncertainty"',
  'On March 18, 2026, the Federal Reserve voted 11-1 to hold the federal funds rate at 3.50%–3.75%, as policymakers confronted simultaneous economic shocks from the U.S.-Israeli war with Iran (now entering its third week), surging oil prices, ongoing tariff impacts, and sticky inflation. The Fed revised its 2026 inflation projection upward to 2.7% and its unemployment forecast to 4.4%. Markets that had priced in two rate cuts entering 2026 have now repriced to a maximum of one — or none.',
  '2026-03-18',
  'Financial Systems',
  '{"sources": ["CNBC", "CNN", "Petiole"]}'::jsonb
),
(
  'Pentagon Rushes to Spend $153 Billion in One Year — Military Spending Exceeds $1 Trillion',
  'On February 23, 2026, the Pentagon informed Congress it intends to spend over $153 billion in supplemental military funding within a single year — funds originally authorized to be spent over five years. Combined with the $900 billion annual defense budget, total U.S. military spending in 2026 will exceed $1 trillion for the first time. Global defense spending is projected to surpass $2.6 trillion.',
  '2026-02-23',
  'Financial Systems',
  '{"sources": ["New York Times", "Intellectia AI"]}'::jsonb
);

-- Pillar 2: Space & Black Budget Programs

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'House UAP Transparency Hearing — "Restoring Public Trust"',
  'On September 9, 2025, the House Oversight Committee''s Task Force on the Declassification of Federal Secrets held a hearing titled "Restoring Public Trust Through UAP Transparency and Whistleblower Protection." Representatives Tim Burchett (R-TN) and Anna Paulina Luna (R-FL) introduced the UAP Whistleblower Protection Act to shield individuals who share UAP-related information with Congress from retaliation.',
  '2025-09-09',
  'Space & Black Budget Programs',
  '{"sources": ["DefenseScoop", "House Committee on Oversight and Reform"]}'::jsonb
),
(
  'FY2026 NDAA Mandates Pentagon UAP Intercept Briefings',
  'The fiscal year 2026 National Defense Authorization Act, passed in December 2025, mandates that AARO brief Congress on the "number, location, and nature" of any UAP intercepts conducted by NORAD and U.S. Northern Command since 2004. This provision arrived amid reports of unexplained drone and UAP incursions near sensitive military installations.',
  '2025-12-10',
  'Space & Black Budget Programs',
  '{"sources": ["DefenseScoop"]}'::jsonb
),
(
  'White House Registers Alien.gov and Aliens.gov — Disclosure Infrastructure Takes Shape',
  'On March 17, 2026, the White House registered two new government domains — alien.gov and aliens.gov. This followed President Trump''s February 19 Truth Social post instructing Defense Secretary Pete Hegseth to declassify files related to "aliens, UAP, UFOs, and related topics." AARO maintains over 2,000 documented UAP cases and is collaborating with the White House to expedite release of previously undisclosed information.',
  '2026-03-17',
  'Space & Black Budget Programs',
  '{"sources": ["DefenseScoop", "Yahoo News", "CNN"]}'::jsonb
),
(
  'FY2026 Military Intelligence Budget: $33.6 Billion Disclosed — Black Budget Grows',
  'The Department of Defense released the fiscal year 2026 Military Intelligence Program (MIP) budget topline: $33.6 billion. This covers only military components; the separate National Intelligence Program adds another $70+ billion. Combined, the U.S. intelligence budget exceeds $100 billion annually — not including classified Special Access Programs hidden within other defense line items.',
  '2025-12-31',
  'Space & Black Budget Programs',
  '{"sources": ["U.S. Department of Defense", "Intellectia AI"]}'::jsonb
);

-- Pillar 3: AI Ethics & Digital Rights

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'Trump Signs Executive Order to Preempt State AI Laws',
  'On December 11, 2025, President Trump signed an executive order establishing a national AI policy framework designed to limit state-level AI regulation. The order instructs the DOJ to create an "AI Litigation Council" to challenge state AI laws deemed inconsistent with federal policy. Mary Anne Franks of the Cyber Civil Rights Initiative called it "a mafia-style warning to state lawmakers."',
  '2025-12-11',
  'AI Ethics & Digital Rights',
  '{"sources": ["Greenberg Traurig", "Tech Policy Press"]}'::jsonb
),
(
  'The TAKE IT DOWN Act — Congress Passes AI Deepfake Law',
  'On April 29, 2025, Congress passed the TAKE IT DOWN Act in near-unanimous bipartisan support. The law prohibits the publication of non-consensual intimate imagery, including AI-generated deepfakes, and requires social media platforms to remove such content upon request. This was the first federal law specifically targeting AI-generated sexual imagery of real people.',
  '2025-04-29',
  'AI Ethics & Digital Rights',
  '{"sources": ["JD Supra"]}'::jsonb
),
(
  'FISA Section 702 — The April 2026 Expiration Showdown',
  'Section 702 is set to expire on April 20, 2026, and the path to reauthorization is deeply contested. Senators Dick Durbin (D-IL) and Mike Lee (R-UT) introduced legislation placing new limits including warrant requirements for querying Americans'' communications. House GOP leaders are eyeing a "clean" reauthorization vote, but the warrant amendment that failed by just one vote in 2024 is expected to be even more contested.',
  '2026-02-23',
  'AI Ethics & Digital Rights',
  '{"sources": ["Brookings Institution", "Politico", "The Hill", "Lawfare"]}'::jsonb
),
(
  'EU Fines X €120 Million — Algorithmic Censorship Goes Mainstream',
  'In December 2025, the European Commission fined X (formerly Twitter) €120 million under the Digital Services Act. Simultaneously, in 2026, the U.S. Federal Trade Commission opened a public inquiry into potential illegal censorship by tech platforms. The convergence of EU enforcement and U.S. inquiry signals that algorithmic suppression — long dismissed as conspiracy theory — is now a regulatory target on both sides of the Atlantic.',
  '2025-12-15',
  'AI Ethics & Digital Rights',
  '{"sources": ["AI Certs", "Human Rights Watch"]}'::jsonb
),
(
  'Trump Launches Freedom.gov — Critics Call It "Selective Free Speech"',
  'In February 2026, the Trump administration announced Freedom.gov, an online portal where Americans could report instances of online censorship. Human Rights Watch published analysis arguing the initiative was "selective" — championing free speech for politically aligned voices while the administration simultaneously expanded surveillance powers (FISA 702) and pushed voter suppression legislation.',
  '2026-02-15',
  'AI Ethics & Digital Rights',
  '{"sources": ["Human Rights Watch"]}'::jsonb
);

-- Pillar 4: Government Health Transparency

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'Big Pharma Deploys 545 Lobbyists to Undermine Medicare Drug Price Negotiations',
  'A November 2025 report by Public Citizen documented that through the first three quarters of 2025, the pharmaceutical industry had engaged 545 unique lobbyist-client relationships targeting three bills designed to undermine Medicare''s newly gained authority to negotiate drug prices under the Inflation Reduction Act. Supporters of the industry bills outnumbered opposition lobbyists 20 to 1.',
  '2025-11-20',
  'Government Health Transparency',
  '{"sources": ["Public Citizen"]}'::jsonb
),
(
  'Drug Price Transparency Delayed Again — December 2025',
  'On December 19, 2025, the Trump administration issued a proposed rule that effectively delayed the public disclosure of net drug prices indefinitely. This data has been legally required under the Affordable Care Act and subsequent federal rules, but more than five years after the initial mandate, pharmaceutical companies and PBMs have never been required to actually publish the numbers.',
  '2025-12-19',
  'Government Health Transparency',
  '{"sources": ["STAT News"]}'::jsonb
),
(
  'PBM Transparency Rules Take Effect — But Don''t Fix the Problem',
  'In 2026, new federal transparency rules for Pharmacy Benefit Managers went into effect, requiring PBMs to disclose what health plans pay for drugs. However, transparency alone cannot change the incentive structure: PBMs still profit from high list prices because their rebate income is calculated as a percentage — the higher the list price, the larger the rebate, the more the PBM earns.',
  '2026-01-01',
  'Government Health Transparency',
  '{"sources": ["KevinMD", "American Hospital Association", "Human Medical Billing"]}'::jsonb
),
(
  'State Attorneys General Warn: Federal Online Safety Bill Would Weaken State Protections',
  'On February 10, 2026, a bipartisan coalition of state attorneys general sent a letter to Congress warning that the House version of the Kids Online Safety Act contains "expansive preemption language" that would strip states of their ability to enact stronger protections for children online. They detailed how platforms "deliberately target minors and employ product designs that are intentionally addictive."',
  '2026-02-10',
  'Government Health Transparency',
  '{"sources": ["National Association of Attorneys General", "Fast Company"]}'::jsonb
);

-- Pillar 5: Child Safety & Trafficking

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'AI-Generated CSAM Explodes 624% — 485,000 Reports in First Half of 2025',
  'NCMEC received 67,000 reports of AI-generated child sexual abuse material in all of 2024. In the first half of 2025 alone, that number surged to 485,000 — a 624% increase. As of August 2025, 45 states had enacted laws criminalizing AI-generated CSAM. The ENFORCE Act of 2025 was introduced in Congress to ensure federal penalties match those for physical CSAM production.',
  '2025-08-01',
  'Child Safety & Trafficking',
  '{"sources": ["Enough Abuse", "Thorn"]}'::jsonb
),
(
  'Epstein Financial Records Unsealed — $1 Billion Through JPMorgan, Russian Bank Connections',
  'In October 2025, newly unsealed financial records revealed that Jeffrey Epstein''s accounts at JPMorgan Chase processed more than $1 billion in transactions over 15 years, including connections to Russian bank Sberbank. In November 2025, Senator Ron Wyden released new analysis detailing how the tax structure of Epstein''s financial network may have facilitated money laundering.',
  '2025-10-31',
  'Child Safety & Trafficking',
  '{"sources": ["CNN", "U.S. Senate Finance Committee", "House Judiciary Committee"]}'::jsonb
),
(
  'Meta Faces Trial Over Child Exploitation — AG Built Evidence by Posing as Children',
  'In early 2026, New Mexico Attorney General Raúl Torrez''s case against Meta moved toward trial. Torrez''s team created accounts posing as children on Facebook and Instagram and documented the sexual solicitations that followed. The suit was filed under New Mexico''s Unfair Trade Practices Act, a consumer protection statute that prosecutors argue sidesteps Section 230 protections.',
  '2026-02-01',
  'Child Safety & Trafficking',
  '{"sources": ["Malwarebytes", "Wikipedia"]}'::jsonb
),
(
  'New York Moves to Criminalize AI-Generated CSAM and Platform Negligence',
  'On January 4, 2026, New York State Senator Andrew Gounardes announced legislation targeting platforms that fail to prevent distribution of AI-generated child sexual abuse material and imposing a Duty of Care on social media companies. The bill joins a growing state-level movement — by late 2025, 45 states had enacted laws criminalizing AI-generated CSAM.',
  '2026-01-04',
  'Child Safety & Trafficking',
  '{"sources": ["New York State Senate", "Wilson Sonsini Goodrich & Rosati"]}'::jsonb
);

-- Pillar 6: Energy & Suppressed Technology

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'Trump Drug Pricing EO Signals "Most Favored Nation" Model — Energy Parallels',
  'On May 12, 2025, the White House issued an executive order mandating that U.S. drug prices align more closely with prices in comparable nations. The structural parallel to energy is significant: just as pharmaceutical pricing opacity allows companies to extract multiples of fair value, energy pricing structures have historically been shielded from transparency mandates.',
  '2025-05-12',
  'Energy & Suppressed Technology',
  '{"sources": ["ZS Associates"]}'::jsonb
),
(
  'China''s "Artificial Sun" Breaks Fusion Density Barrier — BEST Reactor Targets 2030',
  'At the Fusion Energy Technology and Industry Conference 2026 in Hefei, China announced researchers using the EAST fusion reactor had broken through a long-standing density barrier in fusion plasma. China''s BEST project is designed to demonstrate net fusion power gain and fusion-based electricity generation by 2030. Meanwhile, the U.S. NIF achieved 8.6 megajoules of fusion energy output in April 2025.',
  '2026-01-16',
  'Energy & Suppressed Technology',
  '{"sources": ["Xinhua / People''s Daily", "World Economic Forum", "Science Daily"]}'::jsonb
),
(
  'The Fusion Startup Race — Private Companies Diverge from Government Timelines',
  'A January 2026 feature surveyed nuclear energy technologies and found private companies are moving faster than government projects. While ITER has pushed its timeline to 2034 for research operations and 2039 for full-scale fusion, private companies like Helion Energy and Realta Fusion are pursuing faster timelines with alternative architectures.',
  '2026-01-19',
  'Energy & Suppressed Technology',
  '{"sources": ["ASME", "Forbes"]}'::jsonb
);

-- Pillar 7: Media Manipulation

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  '17,000+ Journalism Jobs Cut in 2025 — The Collapse of the Fourth Estate',
  'The journalism industry recorded over 17,000 job cuts in 2025, with more than 11,000 journalists and media professionals losing positions in the first months of 2026 alone. CNN, Vox Media, HuffPost, NBC, and the Washington Post all announced major layoffs. The structural consequence: fewer journalists means less investigative capacity to hold institutions accountable.',
  '2026-02-10',
  'Media Manipulation',
  '{"sources": ["LinkedIn / Journalists Networking", "Nieman Reports", "Yotru"]}'::jsonb
),
(
  '"Algorithmic Capture" — The 2026 Prediction That Became Reality',
  'The Media Diversity Institute''s 2026 media predictions report warned that "algorithmic capture" — the ability of powerful actors to influence platform algorithms — would be the defining media threat. This materialized rapidly: Google''s January 2025 algorithm changes cut independent Turkish media outlet traffic by up to 80%.',
  '2026-01-14',
  'Media Manipulation',
  '{"sources": ["Media Diversity Institute", "Nordic Monitor"]}'::jsonb
),
(
  'AI Governance in 2026: "No Longer Optional" — But Who Sets the Rules?',
  'A March 2026 analysis declared that "the distinction between ethical integrity and legal compliance has effectively vanished" for AI companies. The EU AI Act''s first compliance deadlines are arriving, while the U.S. pursues a competing model prioritizing innovation over regulation. The same AI model may be regulated in Europe but unaccountable in the United States.',
  '2026-03-01',
  'Media Manipulation',
  '{"sources": ["Beam Data", "Mind Foundry"]}'::jsonb
);

-- Pillar 8: War & Intelligence Operations

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'Palantir''s $1 Billion DHS Contract — The Surveillance-Industrial Complex in 2026',
  'In March 2026, the Department of Homeland Security signed a billion-dollar purchasing agreement with Palantir Technologies. Palantir''s U.S. government revenue surged 66% in Q4 2025, reaching $570 million in a single quarter. The company, seeded by the CIA''s In-Q-Tel venture arm, now holds a $10 billion Army contract and other major government engagements.',
  '2026-03-16',
  'War & Intelligence Operations',
  '{"sources": ["The Tech Buzz", "Reuters", "The Hill", "Insider Finance"]}'::jsonb
),
(
  'Pentagon IT Budget Hits $66.1 Billion — AI and Electronic Warfare Prioritized',
  'The Pentagon''s FY2026 budget allocates $66.1 billion specifically for IT and cyberspace activities — a 2.8% increase focused on AI integration and electronic warfare modernization. This sits within a total defense budget now exceeding $1 trillion when supplemental funding is included. Global defense spending is projected to surpass $2.6 trillion in 2026.',
  '2026-03-13',
  'War & Intelligence Operations',
  '{"sources": ["Intellectia AI", "New York Times"]}'::jsonb
),
(
  'U.S.-Israel War With Iran — The Middle East Conflict Escalates',
  'As of March 2026, the United States and Israel are engaged in active military operations against Iran. The conflict has triggered unprecedented disruption in global oil supplies, caused energy prices to surge, and injected massive uncertainty into the Federal Reserve''s economic projections. This marks the first direct U.S.-Iran military engagement of this scale.',
  '2026-03-01',
  'War & Intelligence Operations',
  '{"sources": ["CNBC", "CNN"]}'::jsonb
);

-- Pillar 9: Elections & Democratic Process

INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'DHS SAVE System Flagging U.S. Citizens for Voter Roll Purges',
  'A January 2026 Wired investigation revealed that the Department of Homeland Security had expanded its SAVE database and states were using it to check voter registrations. The result: U.S. citizens were being incorrectly flagged and removed from voter rolls based on erroneous data. Texas alone flagged thousands of registrations, including confirmed U.S. citizens.',
  '2026-01-22',
  'Elections & Democratic Process',
  '{"sources": ["Wired"]}'::jsonb
),
(
  'The National Voter Roll — Federal Government Seeks State Voter Data',
  'In February 2026, the Trump administration invoked the National Voter Registration Act to demand state voter rolls. The DOJ argued it needed to inspect state procedures, but DHS admitted the goal was to cross-reference voter data with immigration databases. Civil liberties organizations warned this amounts to creation of a de facto national voter database under federal control.',
  '2026-02-02',
  'Elections & Democratic Process',
  '{"sources": ["Popular Information"]}'::jsonb
),
(
  'The SAVE America Act — Proof of Citizenship to Vote Passes the House',
  'On February 11, 2026, the U.S. House passed the SAVE America Act on a 218-213 party-line vote. The bill requires documentary proof of U.S. citizenship to register to vote, mandates photo ID at the polls, prohibits universal mail voting, and requires mail voters to submit copies of photo identification. The Brennan Center estimates approximately 21.3 million eligible American voters lack the required documents.',
  '2026-02-11',
  'Elections & Democratic Process',
  '{"sources": ["National Conference of State Legislatures", "National Constitution Center", "Brennan Center for Justice", "New York Times"]}'::jsonb
),
(
  'States Pass Their Own SAVE Acts — Federal-State Voting Law Divergence Accelerates',
  'By March 2026, several Republican-led states had passed their own versions of the SAVE America Act without waiting for the federal bill. Florida was among the first to enact a state-level replica. This creates a fragmented national landscape in which the ease of voting varies dramatically depending on which state a citizen resides in.',
  '2026-03-19',
  'Elections & Democratic Process',
  '{"sources": ["NPR"]}'::jsonb
);
