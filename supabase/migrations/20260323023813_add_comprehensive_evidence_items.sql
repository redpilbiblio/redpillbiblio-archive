/*
  # Add Comprehensive Evidence Items - Financial Systems, Alternative Solutions, and Current Events

  This migration adds extensive evidence across multiple categories:

  ## New Documents Added:
  
  ### Financial Systems Crisis Evidence (7 documents)
  1. BlackRock Housing Crisis - Corporate ownership of single-family homes
  2. Student Loan Debt Crisis - $1.7 trillion debt burden
  3. Health Insurance Denial Crisis - AI-driven claim denials
  4. Sackler/Opioid Crisis - Corporate accountability
  5. Shrinkflation - Corporate price manipulation
  6. Gig Economy Exploitation - Worker misclassification
  7. Credit Score System - Financial control mechanism

  ### Corporate Ownership & Control (3 documents)
  1. BlackRock/Vanguard/State Street - "The Big Three" ownership concentration
  2. Revolving Door - Corporate-government personnel exchange
  3. Congressional Stock Trading - Insider trading legality

  ### Military-Industrial Complex (2 documents)
  1. Private Military Contractors - Mercenary operations
  2. Boeing Whistleblower Deaths - Corporate accountability failure

  ### Historical Programs (3 documents)
  1. MK-Ultra - CIA mind control experiments
  2. COINTELPRO - FBI political surveillance
  3. Operation Paperclip - Nazi scientist recruitment

  ### Financial Crime (1 document)
  1. FTX Collapse - Cryptocurrency fraud

  ### Alternative Solutions (4 documents)
  1. Bitcoin/Cryptocurrency - Decentralized finance
  2. Bank of North Dakota - Public banking model
  3. Credit Unions - Member-owned financial institutions
  4. Community Land Trusts - Alternative housing ownership

  ### Transparency Tools (2 documents)
  1. OSINT Tools - Open-source intelligence resources
  2. Jury Nullification - Citizen legal power

  ## New Timeline Events Added:

  ### Financial Systems (7 events)
  1. BlackRock Housing Acquisitions 2011-2025
  2. Student Loan System Reaches $1.7 Trillion (2025)
  3. UnitedHealth AI Denial System Exposed (2024)
  4. Purdue Pharma Settlement (2024)
  5. Shrinkflation Peak (2021-2024)
  6. Gig Economy Worker Lawsuits (2020-2024)
  7. Credit Score System Established (1989)

  ### Corporate Control & Corruption (3 events)
  1. Big Three Control 20% of S&P 500 Votes (2023)
  2. Congressional Stock Trading Act Fails (2022)
  3. Second Boeing Whistleblower Death (2024)

  ### Historical Government Programs (3 events)
  1. MK-Ultra Revealed (1975)
  2. COINTELPRO Exposed (1971)
  3. Operation Paperclip (1945-1959)

  ### Financial Crime (1 event)
  1. FTX Collapse (2022)

  ### Current Events 2025-2026 (5 events)
  1. Iran War Escalation (March 2026)
  2. DOGE Mass Layoffs (February 2026)
  3. TikTok Ban Supreme Court Ruling (January 2026)
  4. AI Executive Order Preempts States (December 2025)
  5. UAP Disclosure Push (2025-2026)

  ## Security
  - All inserts use existing public read policies
  - No changes to RLS policies required
*/

-- Insert Financial Systems Crisis Documents

INSERT INTO documents (title, description, content, document_type, date_published, verification_tier, source_url, metadata) VALUES
(
  'BlackRock Housing Crisis: Corporate Ownership of Single-Family Homes',
  'BlackRock and institutional investors purchased thousands of single-family homes following the 2008 financial crisis, converting essential housing into investment assets and driving up prices for individual buyers.',
  'Following the 2008 financial crisis, BlackRock and other institutional investors including Invitation Homes purchased approximately 240,000 single-family homes across the United States. These purchases converted what had been owner-occupied housing stock into rental properties controlled by large corporate entities. The practice has been linked to: 1) Decreased homeownership rates among first-time buyers, 2) Rising rental costs in affected markets, 3) Reduced housing availability for purchase, 4) Creation of a permanent renter class unable to build equity. Critics argue this represents a fundamental transformation of housing from a human right to a pure financial asset class.',
  'Economic Analysis',
  '2011-01-01',
  'verified',
  'https://www.theatlantic.com/technology/archive/2019/02/single-family-landlords-wall-street/582394/',
  '{"category": "Financial Systems", "tags": ["housing", "BlackRock", "institutional investors", "2008 crisis"]}'::jsonb
),
(
  'Student Loan Debt Crisis: $1.7 Trillion Burden',
  'The U.S. student loan system has created $1.7 trillion in debt, trapping millions in financial servitude while enriching loan servicers and preventing wealth accumulation for multiple generations.',
  'As of 2025, outstanding student loan debt in the United States exceeds $1.7 trillion, affecting over 43 million borrowers. Key facts: 1) Average debt per borrower: $37,000+, 2) Interest rates ranging from 4.99% to 7.54% for federal loans, higher for private loans, 3) Bankruptcy protection removed in 2005, making student debt nearly impossible to discharge, 4) Loan servicers profit from extended repayment periods and default penalties, 5) Debt prevents home ownership, delays family formation, and suppresses entrepreneurship. The system functions as a wealth extraction mechanism that transfers money from the middle class to financial institutions while providing necessary education credentials.',
  'Economic Analysis',
  '2025-01-01',
  'verified',
  'https://educationdata.org/student-loan-debt-statistics',
  '{"category": "Financial Systems", "tags": ["student loans", "debt", "education", "financial crisis"]}'::jsonb
),
(
  'Health Insurance Denial Crisis: AI-Driven Claim Denials',
  'Health insurance companies use AI systems to automatically deny claims at scale, with UnitedHealth reportedly achieving 90% denial rates in some categories, prioritizing profit over patient care.',
  'In 2024, investigations revealed that major health insurers including UnitedHealth Group deployed AI systems designed to maximize claim denials. Key findings: 1) UnitedHealth''s AI system had error rates exceeding 90% when denials were appealed, 2) Automated denials often occurred without meaningful medical review, 3) The denial-and-appeal strategy relies on patient exhaustion - most never appeal, 4) Patients died while appeals were pending, 5) Internal documents showed profit targets tied to denial rates. The practice represents the automation of what whistleblowers call "death by spreadsheet" - algorithmic decisions that prioritize financial returns over medical necessity.',
  'Economic Analysis',
  '2024-11-01',
  'verified',
  'https://www.statnews.com/2023/11/14/unitedhealthcare-lawsuit-ai-deny-claims/',
  '{"category": "Financial Systems", "tags": ["healthcare", "insurance", "AI", "UnitedHealth", "fraud"]}'::jsonb
),
(
  'Sackler Family & Opioid Crisis: Corporate Criminal Accountability',
  'The Sackler family, owners of Purdue Pharma, orchestrated the opioid epidemic through deceptive marketing of OxyContin, resulting in 500,000+ deaths while shielding personal wealth through bankruptcy.',
  'The Sackler family, through Purdue Pharma, aggressively marketed OxyContin while downplaying addiction risks, fueling an opioid epidemic that has killed over 500,000 Americans. Key facts: 1) Internal documents showed the Sacklers knew about addiction risks and encouraged higher-dose prescriptions, 2) The family extracted $11 billion from the company before declaring bankruptcy, 3) 2024 bankruptcy settlement granted the Sacklers immunity from civil liability in exchange for $6 billion, 4) Criminal charges against individuals were limited despite overwhelming evidence of fraud, 5) The settlement allows the family to retain billions while victims received minimal compensation. The case exemplifies how wealthy individuals can use bankruptcy courts to shield personal assets while escaping criminal accountability for mass harm.',
  'DOJ/Legal',
  '2024-03-01',
  'verified',
  'https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid',
  '{"category": "Financial Systems", "tags": ["opioids", "Sackler", "Purdue Pharma", "corporate crime", "accountability"]}'::jsonb
),
(
  'Shrinkflation: Corporate Price Manipulation Strategy',
  'Companies systematically reduced product sizes while maintaining prices, effectively implementing hidden price increases that disproportionately harm lower-income consumers.',
  'Shrinkflation - the practice of reducing product size while maintaining price - accelerated dramatically from 2021-2024, affecting thousands of consumer products. Analysis shows: 1) Product sizes decreased 10-30% across major categories including food, household goods, and personal care items, 2) Companies blamed supply chain issues and inflation while simultaneously reporting record profits, 3) The practice is particularly harmful to low-income consumers who track price but not size, 4) Shrinkflation functions as a hidden tax that doesn''t appear in official inflation metrics, 5) Major corporations including Procter & Gamble, PepsiCo, and Unilever deployed the strategy simultaneously. Critics argue this represents coordinated price-fixing through deceptive practices that exploit consumer psychology.',
  'Economic Analysis',
  '2024-01-01',
  'verified',
  'https://www.yahoo.com/finance/news/shrinkflation-greedflation-whats-really-behind-140050299.html',
  '{"category": "Financial Systems", "tags": ["shrinkflation", "inflation", "corporate greed", "consumer fraud"]}'::jsonb
),
(
  'Gig Economy: Worker Exploitation Through Misclassification',
  'Companies like Uber, DoorDash, and Amazon Flex misclassify employees as independent contractors, denying benefits and worker protections while extracting maximum labor value.',
  'The gig economy model pioneered by Uber and replicated across industries relies on worker misclassification to avoid employer obligations. Key aspects: 1) Workers classified as independent contractors lack minimum wage guarantees, overtime pay, health insurance, unemployment insurance, and workers compensation, 2) Companies maintain control over pricing, job assignment, and work rules while disclaiming employment responsibilities, 3) California''s Proposition 22 (2020), funded by $200 million from gig companies, carved out exemptions from employee classification laws, 4) Workers bear all costs (vehicle, insurance, maintenance, fuel) while companies capture platform fees, 5) Average earnings after expenses often fall below minimum wage. The model represents a return to pre-New Deal labor conditions through digital platforms.',
  'Economic Analysis',
  '2023-01-01',
  'verified',
  'https://www.epi.org/publication/gig-worker-rights/',
  '{"category": "Financial Systems", "tags": ["gig economy", "labor", "Uber", "worker rights", "misclassification"]}'::jsonb
),
(
  'Credit Score System: Mechanism of Financial Control',
  'The credit scoring system, dominated by three private companies, functions as a social credit system that determines access to housing, employment, and financial services based on proprietary algorithms.',
  'The U.S. credit scoring system, controlled by Equifax, Experian, and TransUnion, exerts enormous control over individual economic opportunity. Critical analysis: 1) Scores are calculated by proprietary algorithms not subject to public scrutiny, 2) Errors are widespread - FTC study found 26% of consumers had errors affecting their scores, 3) Credit checks are used for employment decisions, housing applications, insurance rates, and utility deposits beyond their original purpose, 4) The system penalizes poverty (inability to access credit lowers scores), 5) Data breaches have exposed personal information of hundreds of millions, with minimal corporate accountability, 6) The system creates a permanent underclass of people locked out of economic participation. The credit score effectively functions as a privatized social control mechanism.',
  'Economic Analysis',
  '2023-01-01',
  'verified',
  'https://www.consumerfinance.gov/about-us/newsroom/cfpb-takes-action-against-equifax-experian-and-transunion-for-deceptive-credit-score-claims/',
  '{"category": "Financial Systems", "tags": ["credit scores", "financial surveillance", "Equifax", "Experian", "TransUnion"]}'::jsonb
);

-- Insert Corporate Ownership & Control Documents

INSERT INTO documents (title, description, content, document_type, date_published, verification_tier, source_url, metadata) VALUES
(
  'The Big Three: BlackRock, Vanguard, and State Street Ownership Concentration',
  'BlackRock, Vanguard, and State Street collectively manage $20+ trillion and are the largest shareholders in 90% of S&P 500 companies, creating unprecedented corporate concentration and potential conflicts of interest.',
  'The "Big Three" asset managers - BlackRock, Vanguard, and State Street - collectively manage over $20 trillion in assets and are among the top shareholders in approximately 90% of S&P 500 companies. Analysis reveals: 1) Combined voting power of 20%+ in many major corporations, 2) Same three firms are major shareholders in competing companies within the same industry, reducing competitive incentives, 3) Representatives sit on boards of competing firms, 4) Index fund structure gives managers control over shares while investors cannot direct voting, 5) Concentration has increased since 2008, accelerating wealth consolidation. Academic research has linked this ownership structure to reduced competition, increased prices, and decreased innovation. The arrangement represents oligopolistic control of corporate America by a small number of financial intermediaries.',
  'Economic Analysis',
  '2023-01-01',
  'verified',
  'https://www.institutionalinvestor.com/article/b1s3x39bv1dw7r/The-Hidden-Dangers-of-the-Great-Index-Fund-Takeover',
  '{"category": "Financial Systems", "tags": ["BlackRock", "Vanguard", "State Street", "corporate ownership", "monopoly"]}'::jsonb
),
(
  'The Revolving Door: Corporate-Government Personnel Exchange',
  'Systematic movement of personnel between government regulatory positions and the industries they regulate creates conflicts of interest and regulatory capture.',
  'The "revolving door" refers to the pattern of individuals moving between government regulatory positions and executive roles in the industries they regulate. Documentation shows: 1) Former FDA commissioners regularly join pharmaceutical company boards, 2) Defense Department officials transition to defense contractor executive positions, 3) Financial regulators move to Wall Street firms, 4) Corporate lobbyists are appointed to regulatory agencies overseeing their former clients, 5) The pattern creates regulatory capture - agencies serve industry interests over public interest. Examples include: Tom Wheeler (telecom lobbyist to FCC chair), Mark Carney (Goldman Sachs to Bank of England governor), multiple Treasury Secretaries from Goldman Sachs. The practice ensures government policy serves corporate interests regardless of which party holds power.',
  'Policy',
  '2023-01-01',
  'verified',
  'https://www.opensecrets.org/revolving/',
  '{"category": "DOJ/Legal", "tags": ["revolving door", "regulatory capture", "corruption", "lobbying"]}'::jsonb
),
(
  'Congressional Stock Trading: Legalized Insider Trading',
  'Members of Congress regularly trade stocks in industries they regulate, using non-public information to generate returns that far exceed market averages, while legislative reforms have repeatedly failed.',
  'Members of Congress are legally permitted to trade individual stocks while receiving classified briefings and non-public information about industries they regulate. Analysis shows: 1) Congressional portfolios consistently outperform market averages, 2) Senators made millions trading stocks in industries affected by their committee work, 3) The STOCK Act of 2012, designed to limit the practice, is rarely enforced and includes weak disclosure requirements, 4) Attempted reforms in 2022 failed to pass despite broad public support, 5) Both parties engage in the practice equally. Notable examples include senators trading healthcare stocks before COVID policy decisions, defense stocks before military actions, and technology stocks before regulation votes. The arrangement constitutes legalized corruption that directly profits lawmakers from their policy-making power.',
  'DOJ/Legal',
  '2022-01-01',
  'verified',
  'https://www.businessinsider.com/congress-stock-act-violations-senate-house-trading-2021-9',
  '{"category": "DOJ/Legal", "tags": ["Congress", "insider trading", "corruption", "STOCK Act"]}'::jsonb
);

-- Insert Military-Industrial Complex Documents

INSERT INTO documents (title, description, content, document_type, date_published, verification_tier, source_url, metadata) VALUES
(
  'Private Military Contractors: The Mercenary Industry',
  'Private military contractors operate as mercenary forces in U.S. conflicts, operating outside traditional military accountability structures while receiving billions in government contracts.',
  'Private military contractors (PMCs) have become integral to U.S. military operations, with over 50,000 contractors deployed in recent Middle East conflicts. Key facts: 1) Blackwater (now Academi) contractors killed 17 Iraqi civilians in Nisour Square (2007) and received presidential pardons, 2) Contractors outnumber regular military personnel in many deployments, 3) PMC personnel are paid 2-10x military salaries using taxpayer funds, 4) Contractors operate outside the Uniform Code of Military Justice and often escape accountability for war crimes, 5) Erik Prince, Blackwater founder, has proposed privatizing entire wars. The model allows governments to conduct military operations without public scrutiny, congressional oversight, or accountability to international law.',
  'Military Spending',
  '2023-01-01',
  'verified',
  'https://www.aclu.org/news/national-security/private-military-contractors-and-accountability',
  '{"category": "Military Spending", "tags": ["private military", "contractors", "Blackwater", "Erik Prince", "mercenaries"]}'::jsonb
),
(
  'Boeing Whistleblower Deaths: Corporate Accountability Failure',
  'Two Boeing whistleblowers died under suspicious circumstances after reporting safety concerns about 737 MAX production, highlighting the dangers faced by those who expose corporate malfeasance.',
  'In 2024, two Boeing whistleblowers died shortly after testifying about safety violations in 737 MAX production. John Barnett, a 32-year Boeing veteran, was found dead from a gunshot wound during depositions about manufacturing defects. Joshua Dean, a Spirit AeroSystems quality auditor who reported defects in 737 fuselage production, died suddenly from a rapid illness. Both had reported: 1) Pressure to ignore safety protocols to meet production deadlines, 2) Retaliation for reporting safety concerns, 3) Manufacturing defects being concealed from regulators, 4) A culture that prioritized shareholder value over passenger safety. The deaths followed Boeing''s 737 MAX crashes that killed 346 people (2018-2019) and a door plug blowout mid-flight (2024). Despite overwhelming evidence of systemic safety failures, no Boeing executives have faced criminal charges.',
  'DOJ/Legal',
  '2024-05-01',
  'verified',
  'https://www.seattletimes.com/business/boeing-aerospace/second-boeing-whistleblower-dies/',
  '{"category": "DOJ/Legal", "tags": ["Boeing", "whistleblowers", "corporate crime", "737 MAX", "safety"]}'::jsonb
);

-- Insert Historical Programs Documents

INSERT INTO documents (title, description, content, document_type, date_published, verification_tier, source_url, metadata) VALUES
(
  'MK-Ultra: CIA Mind Control Experiments',
  'The CIA conducted illegal mind control experiments on unwitting subjects from the 1950s-1970s, using drugs, torture, and psychological manipulation, often resulting in permanent psychological damage and death.',
  'Project MK-Ultra was a CIA program (1953-1973) that conducted illegal human experimentation in pursuit of mind control techniques. Declassified documents reveal: 1) Experiments conducted at 80+ institutions including universities, hospitals, and prisons, 2) Unwitting subjects were dosed with LSD and other drugs without consent, 3) Techniques included sensory deprivation, isolation, verbal and sexual abuse, and torture, 4) Several subjects died during experiments, others suffered permanent psychological damage, 5) CIA Director Richard Helms ordered destruction of most MK-Ultra records in 1973 when investigations began, 6) The program was only exposed through FOIA requests and Congressional investigations. No one was prosecuted. The Church Committee concluded the program violated basic medical ethics and constitutional rights.',
  'Government Science',
  '1975-01-01',
  'verified',
  'https://www.intelligence.senate.gov/sites/default/files/hearings/95mkultra.pdf',
  '{"category": "Government Science", "tags": ["MK-Ultra", "CIA", "mind control", "human experiments", "Church Committee"]}'::jsonb
),
(
  'COINTELPRO: FBI Political Surveillance and Disruption',
  'The FBI conducted illegal surveillance and disruption operations against civil rights activists, political organizations, and journalists from 1956-1971, using tactics including blackmail, harassment, and assassination.',
  'COINTELPRO (Counter Intelligence Program) was an FBI program that surveilled and disrupted domestic political organizations deemed "subversive." Exposed in 1971 when activists broke into an FBI office and leaked documents. The program: 1) Targeted civil rights leaders (MLK, Malcolm X), anti-war activists, feminists, and socialist organizations, 2) Used illegal wiretaps, mail opening, burglary, infiltration, and false propaganda, 3) FBI sent MLK a letter encouraging him to commit suicide, 4) Planted fake evidence to instigate conflict between groups, 5) Provided information to local police used in the assassination of Black Panther Fred Hampton (1969), 6) Created false media stories to discredit targets. The Church Committee investigation (1975-1976) confirmed the program violated First and Fourth Amendment rights. Techniques from COINTELPRO have been revived under modern surveillance authorities.',
  'DOJ/Legal',
  '1971-01-01',
  'verified',
  'https://vault.fbi.gov/cointel-pro',
  '{"category": "DOJ/Legal", "tags": ["COINTELPRO", "FBI", "surveillance", "civil rights", "assassination"]}'::jsonb
),
(
  'Operation Paperclip: Recruitment of Nazi Scientists',
  'Following World War II, the U.S. secretly recruited over 1,600 Nazi scientists, engineers, and technicians, whitewashing their war crimes records to gain technological advantages in the Cold War.',
  'Operation Paperclip (1945-1959) was a secret program to recruit German scientists, engineers, and technicians from Nazi Germany for U.S. government employment. Declassified documents show: 1) Over 1,600 individuals were brought to the U.S., many with documented involvement in Nazi war crimes, 2) Joint Intelligence Objectives Agency created false political biographies to circumvent President Truman''s ban on recruiting Nazi party members and war criminals, 3) Wernher von Braun, who became NASA director, used slave labor from concentration camps in V-2 rocket production, 4) Scientists involved in human experiments at concentration camps were granted immunity, 5) Many recruits worked on weapons programs, chemical and biological warfare research, and aerospace projects. The program prioritized Cold War technological advantage over accountability for Nazi atrocities.',
  'Historical Agreement',
  '1945-01-01',
  'verified',
  'https://www.archives.gov/iwg/declassified-records/rg-330-defense-secretary',
  '{"category": "Historical", "tags": ["Operation Paperclip", "Nazi scientists", "war crimes", "Wernher von Braun", "Cold War"]}'::jsonb
);

-- Insert Financial Crime Documents

INSERT INTO documents (title, description, content, document_type, date_published, verification_tier, source_url, metadata) VALUES
(
  'FTX Collapse: Cryptocurrency Fraud and Regulatory Failure',
  'FTX, once the world''s third-largest cryptocurrency exchange, collapsed in 2022 after CEO Sam Bankman-Fried embezzled $8 billion in customer funds, exposing systemic fraud in the crypto industry.',
  'FTX collapsed in November 2022, revealing one of the largest financial frauds in history. Investigation revealed: 1) CEO Sam Bankman-Fried used $8 billion in customer funds to cover losses at his trading firm Alameda Research, 2) Customer deposits were commingled with company funds despite promises of segregation, 3) FTX had no accounting department and used QuickBooks for a multi-billion dollar exchange, 4) SBF spent millions on political donations to both parties while committing fraud, 5) Major investors including Sequoia Capital, BlackRock, and Tiger Global failed to conduct basic due diligence, 6) Regulators ignored red flags despite warnings from industry observers. SBF was convicted in 2023 and sentenced to 25 years. The case exposed the crypto industry as largely unregulated speculation vulnerable to fraud.',
  'Financial',
  '2022-11-01',
  'verified',
  'https://www.justice.gov/usao-sdny/pr/samuel-bankman-fried-convicted-fraud-and-conspiracy-charges',
  '{"category": "Financial", "tags": ["FTX", "Sam Bankman-Fried", "cryptocurrency", "fraud", "regulation"]}'::jsonb
);

-- Insert Alternative Solutions Documents

INSERT INTO documents (title, description, content, document_type, date_published, verification_tier, source_url, metadata) VALUES
(
  'Bitcoin and Cryptocurrency: Decentralized Financial Alternative',
  'Bitcoin offers a decentralized alternative to traditional banking systems, enabling peer-to-peer transactions without central authority control, though concerns exist about energy use, volatility, and regulatory challenges.',
  'Bitcoin, created in 2009 by pseudonymous Satoshi Nakamoto, represents the first successful implementation of a decentralized digital currency. Key characteristics: 1) Operates on blockchain technology with no central authority, 2) Limited supply of 21 million coins creates scarcity unlike fiat currency, 3) Transactions are pseudonymous and censorship-resistant, 4) Proof-of-work mining secures the network but consumes significant energy, 5) Adoption has grown from fringe technology to mainstream investment asset. Proponents argue Bitcoin provides: financial sovereignty, protection from inflation, censorship-resistant transactions, and banking access for the unbanked. Critics cite: extreme price volatility, use in illicit transactions, environmental impact, and potential for speculation bubbles. Regardless, Bitcoin demonstrates that alternatives to central bank-controlled currency are technically feasible.',
  'Economic Theory',
  '2023-01-01',
  'corroborated',
  'https://bitcoin.org/bitcoin.pdf',
  '{"category": "Theory", "tags": ["Bitcoin", "cryptocurrency", "decentralization", "alternative finance"]}'::jsonb
),
(
  'Bank of North Dakota: Public Banking Model',
  'The Bank of North Dakota, the only state-owned bank in the U.S., has operated successfully since 1919, demonstrating that public banking can serve community interests while remaining financially sustainable.',
  'The Bank of North Dakota (BND), established in 1919, is the only state-owned bank in the United States and provides a functioning model of public banking. Key features: 1) All state tax revenue is deposited in BND rather than Wall Street banks, 2) BND partners with local banks to provide low-interest loans for agriculture, small business, infrastructure, and student loans, 3) Profits return to the state rather than shareholders - BND has paid over $1 billion to the state since 2000, 4) North Dakota has among the lowest default rates on student loans and highest numbers of community banks per capita, 5) During the 2008 financial crisis, North Dakota was the only state to maintain budget surplus. The model demonstrates banking can serve public interest while remaining financially sustainable. Public banking initiatives have been proposed in multiple states and cities.',
  'Economic Theory',
  '2023-01-01',
  'verified',
  'https://bnd.nd.gov/',
  '{"category": "Theory", "tags": ["public banking", "Bank of North Dakota", "alternative finance", "community development"]}'::jsonb
),
(
  'Credit Unions: Member-Owned Financial Cooperatives',
  'Credit unions operate as not-for-profit cooperatives owned by members, offering an alternative to extractive for-profit banking while providing comparable services with lower fees and better rates.',
  'Credit unions are member-owned financial cooperatives that provide banking services on a not-for-profit basis. Key differences from commercial banks: 1) Members are owners and elect the board of directors democratically (one member, one vote regardless of account size), 2) Profits are returned to members through lower fees, better interest rates on savings, and lower loan rates rather than paid to shareholders, 3) Credit unions collectively serve over 130 million Americans with over $1.8 trillion in assets, 4) During the 2008 financial crisis, credit unions had significantly lower failure rates than commercial banks, 5) Not-for-profit status creates alignment between institution and member interests. Limits include: membership requirements, smaller branch networks, and fewer large business services. The model demonstrates that democratically-controlled financial institutions can operate successfully at scale.',
  'Economic Theory',
  '2023-01-01',
  'verified',
  'https://www.mycreditunion.gov/about-credit-unions',
  '{"category": "Theory", "tags": ["credit unions", "cooperatives", "alternative banking", "financial democracy"]}'::jsonb
),
(
  'Community Land Trusts: Alternative Housing Ownership Model',
  'Community Land Trusts remove land from the speculative market to provide permanently affordable housing, demonstrating an alternative to treating housing as a pure investment commodity.',
  'Community Land Trusts (CLTs) are nonprofit organizations that own land on behalf of a community and lease it for affordable housing development. Key features: 1) CLT owns the land; residents own the buildings, separating land cost from housing cost, 2) Resale restrictions ensure housing remains affordable in perpetuity, 3) Democratic governance includes residents, community members, and CLT representatives, 4) Over 225 CLTs operate in the U.S., preserving affordability for thousands of units, 5) Model is particularly effective in high-cost urban areas where market-rate housing is unaffordable. Burlington, Vermont''s CLT (established 1984) has maintained housing affordability through multiple market cycles. The model demonstrates that housing can serve community needs rather than investment returns, providing an alternative to housing commodification that has priced out working families from many cities.',
  'Economic Theory',
  '2023-01-01',
  'verified',
  'https://cltweb.org/',
  '{"category": "Theory", "tags": ["community land trusts", "affordable housing", "alternative ownership", "housing justice"]}'::jsonb
);

-- Insert Transparency Tools Documents

INSERT INTO documents (title, description, content, document_type, date_published, verification_tier, source_url, metadata) VALUES
(
  'OSINT Tools: Open-Source Intelligence Resources',
  'Open-Source Intelligence tools enable citizens to investigate corporate and government activities using publicly available information, democratizing investigative capacity beyond traditional journalism.',
  'Open-Source Intelligence (OSINT) refers to intelligence gathered from publicly available sources. Modern OSINT tools enable ordinary citizens to conduct sophisticated investigations. Key resources include: 1) Corporate registries (SEC EDGAR, OpenCorporates) for tracking company ownership and financial relationships, 2) Public records databases for property ownership, court cases, and government contracts, 3) Social media analysis tools for tracking networks and relationships, 4) Satellite imagery for verifying ground truth, 5) Blockchain explorers for tracing cryptocurrency transactions, 6) Web archives for documenting information before it is removed. These tools have been used to: expose corporate ownership structures, verify military activities, track disinformation campaigns, and investigate financial crimes. OSINT demonstrates that powerful investigative capacity is no longer monopolized by governments and large media organizations.',
  'Policy',
  '2023-01-01',
  'corroborated',
  'https://osintframework.com/',
  '{"category": "Theory", "tags": ["OSINT", "transparency", "investigation", "citizen journalism"]}'::jsonb
),
(
  'Jury Nullification: Citizen Legal Power',
  'Jury nullification allows jurors to acquit defendants when they believe the law is unjust or unjustly applied, serving as a check on prosecutorial power and unjust laws.',
  'Jury nullification occurs when jurors vote to acquit a defendant despite evidence of guilt because they believe the law is unjust or unjustly applied. Legal basis: 1) Jurors cannot be punished for their verdict regardless of reasoning, 2) Double jeopardy prevents retrial after acquittal, 3) Historical use includes acquittals in fugitive slave cases (pre-Civil War), alcohol prohibition cases (1920s), and some marijuana cases, 4) Judges and prosecutors actively suppress knowledge of nullification - judges often instruct juries they must apply the law as given, 5) Some activists have been prosecuted for distributing nullification information near courthouses. Jury nullification represents a direct democratic check on government power, allowing ordinary citizens to reject unjust laws. Critics argue it undermines rule of law; proponents argue it prevents tyranny of unjust laws and provides relief when formal legal change is blocked.',
  'DOJ/Legal',
  '2023-01-01',
  'corroborated',
  'https://fija.org/',
  '{"category": "Theory", "tags": ["jury nullification", "legal power", "democracy", "civil disobedience"]}'::jsonb
);

-- Now add Timeline Events with document references using to_jsonb to convert UUID arrays

DO $$
DECLARE
  doc_blackrock_housing uuid;
  doc_student_loans uuid;
  doc_health_insurance uuid;
  doc_sackler uuid;
  doc_shrinkflation uuid;
  doc_gig_economy uuid;
  doc_credit_score uuid;
  doc_big_three uuid;
  doc_revolving_door uuid;
  doc_congress_trading uuid;
  doc_contractors uuid;
  doc_boeing uuid;
  doc_mkultra uuid;
  doc_cointelpro uuid;
  doc_paperclip uuid;
  doc_ftx uuid;
BEGIN
  -- Get document IDs
  SELECT id INTO doc_blackrock_housing FROM documents WHERE title = 'BlackRock Housing Crisis: Corporate Ownership of Single-Family Homes';
  SELECT id INTO doc_student_loans FROM documents WHERE title = 'Student Loan Debt Crisis: $1.7 Trillion Burden';
  SELECT id INTO doc_health_insurance FROM documents WHERE title = 'Health Insurance Denial Crisis: AI-Driven Claim Denials';
  SELECT id INTO doc_sackler FROM documents WHERE title = 'Sackler Family & Opioid Crisis: Corporate Criminal Accountability';
  SELECT id INTO doc_shrinkflation FROM documents WHERE title = 'Shrinkflation: Corporate Price Manipulation Strategy';
  SELECT id INTO doc_gig_economy FROM documents WHERE title = 'Gig Economy: Worker Exploitation Through Misclassification';
  SELECT id INTO doc_credit_score FROM documents WHERE title = 'Credit Score System: Mechanism of Financial Control';
  SELECT id INTO doc_big_three FROM documents WHERE title = 'The Big Three: BlackRock, Vanguard, and State Street Ownership Concentration';
  SELECT id INTO doc_revolving_door FROM documents WHERE title = 'The Revolving Door: Corporate-Government Personnel Exchange';
  SELECT id INTO doc_congress_trading FROM documents WHERE title = 'Congressional Stock Trading: Legalized Insider Trading';
  SELECT id INTO doc_contractors FROM documents WHERE title = 'Private Military Contractors: The Mercenary Industry';
  SELECT id INTO doc_boeing FROM documents WHERE title = 'Boeing Whistleblower Deaths: Corporate Accountability Failure';
  SELECT id INTO doc_mkultra FROM documents WHERE title = 'MK-Ultra: CIA Mind Control Experiments';
  SELECT id INTO doc_cointelpro FROM documents WHERE title = 'COINTELPRO: FBI Political Surveillance and Disruption';
  SELECT id INTO doc_paperclip FROM documents WHERE title = 'Operation Paperclip: Recruitment of Nazi Scientists';
  SELECT id INTO doc_ftx FROM documents WHERE title = 'FTX Collapse: Cryptocurrency Fraud and Regulatory Failure';

  -- Financial Systems Events
  INSERT INTO events (title, description, event_date, pillar, document_ids, metadata) VALUES
  (
    'BlackRock Begins Mass Single-Family Home Acquisitions Following 2008 Crisis',
    'Following the 2008 financial crisis, BlackRock and other institutional investors began purchasing thousands of single-family homes across the United States, converting essential housing stock into investment assets. This marked the beginning of large-scale corporate ownership of residential real estate, contributing to decreased homeownership rates and rising rental costs.',
    '2011-01-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_blackrock_housing]),
    '{"sources": ["The Atlantic", "Wall Street Journal"]}'::jsonb
  ),
  (
    'Student Loan Debt Reaches $1.7 Trillion - Generational Wealth Extraction',
    'U.S. student loan debt surpassed $1.7 trillion, affecting over 43 million borrowers with an average debt of $37,000+. The system, from which bankruptcy protection was removed in 2005, prevents wealth accumulation for multiple generations while enriching loan servicers.',
    '2025-01-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_student_loans]),
    '{"sources": ["Education Data Initiative", "Federal Reserve"]}'::jsonb
  ),
  (
    'UnitedHealth AI Denial System Exposed - 90% Error Rate',
    'Investigations revealed that UnitedHealth Group deployed an AI system to automatically deny insurance claims, achieving error rates exceeding 90% when denials were appealed. The system prioritized profit over patient care, with patients dying while appeals were pending.',
    '2024-11-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_health_insurance]),
    '{"sources": ["STAT News", "ProPublica"]}'::jsonb
  ),
  (
    'Purdue Pharma Bankruptcy Settlement Grants Sackler Family Immunity',
    'Purdue Pharma bankruptcy settlement granted the Sackler family immunity from civil liability in exchange for $6 billion, allowing them to retain billions extracted from the company while victims of the opioid epidemic they orchestrated received minimal compensation. Over 500,000 Americans have died in the opioid crisis.',
    '2024-03-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_sackler]),
    '{"sources": ["Department of Justice", "New York Times"]}'::jsonb
  ),
  (
    'Shrinkflation Peak - Hidden Price Increases Through Product Size Reduction',
    'Corporate shrinkflation - reducing product size while maintaining price - peaked during 2021-2024, with product sizes decreasing 10-30% across major categories. Companies blamed inflation while reporting record profits, implementing hidden price increases that don''t appear in official inflation metrics.',
    '2023-06-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_shrinkflation]),
    '{"sources": ["Yahoo Finance", "Consumer Reports"]}'::jsonb
  ),
  (
    'Gig Economy Worker Lawsuits Expose Systematic Misclassification',
    'Wave of lawsuits against Uber, DoorDash, and other gig economy companies exposed systematic worker misclassification, with workers denied benefits and protections while companies maintained control. California''s Proposition 22, funded by $200 million from gig companies, carved out exemptions from employee classification laws.',
    '2023-01-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_gig_economy]),
    '{"sources": ["Economic Policy Institute", "LA Times"]}'::jsonb
  ),
  (
    'Credit Reporting Agencies Established Modern System - Privatized Social Control',
    'Modern credit scoring system established, with Equifax, Experian, and TransUnion creating proprietary algorithms that determine access to housing, employment, and financial services. The system functions as privatized social control with widespread errors (26% of consumers have score-affecting errors) and minimal accountability.',
    '1989-01-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_credit_score]),
    '{"sources": ["Federal Trade Commission", "Consumer Financial Protection Bureau"]}'::jsonb
  );

  -- Corporate Control Events
  INSERT INTO events (title, description, event_date, pillar, document_ids, metadata) VALUES
  (
    'Big Three Asset Managers Control 20%+ Votes in S&P 500 Companies',
    'BlackRock, Vanguard, and State Street consolidated control over corporate America, becoming top shareholders in approximately 90% of S&P 500 companies with combined voting power exceeding 20%. This unprecedented concentration creates potential for reduced competition and coordinated corporate governance.',
    '2023-01-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_big_three]),
    '{"sources": ["Institutional Investor", "Journal of Financial Economics"]}'::jsonb
  ),
  (
    'Congressional Stock Trading Reform Fails Despite Public Support',
    'Legislative efforts to ban congressional stock trading failed despite overwhelming public support and evidence of members profiting from non-public information. Congressional portfolios consistently outperform market averages, with trading in industries affected by their committee work.',
    '2022-09-01',
    'Elections & Democratic Process',
    to_jsonb(ARRAY[doc_congress_trading]),
    '{"sources": ["Business Insider", "OpenSecrets"]}'::jsonb
  ),
  (
    'Second Boeing Whistleblower Dies After Testifying on Safety Violations',
    'Joshua Dean, a Boeing quality auditor who reported 737 MAX manufacturing defects, died suddenly after testifying about pressure to ignore safety protocols. His death followed that of John Barnett, another Boeing whistleblower, raising questions about the dangers faced by those who expose corporate malfeasance.',
    '2024-05-01',
    'Financial Systems',
    to_jsonb(ARRAY[doc_boeing]),
    '{"sources": ["Seattle Times", "New York Times"]}'::jsonb
  );

  -- Historical Programs Events
  INSERT INTO events (title, description, event_date, pillar, document_ids, metadata) VALUES
  (
    'Church Committee Exposes CIA MK-Ultra Mind Control Experiments',
    'Senate Church Committee investigation revealed CIA Project MK-Ultra (1953-1973) conducted illegal mind control experiments on unwitting subjects at 80+ institutions, using drugs, torture, and psychological manipulation. Several subjects died; no one was prosecuted. CIA Director Richard Helms had destroyed most records in 1973.',
    '1975-09-01',
    'Government Health Transparency',
    to_jsonb(ARRAY[doc_mkultra]),
    '{"sources": ["Senate Intelligence Committee Report", "National Archives"]}'::jsonb
  ),
  (
    'COINTELPRO Exposed - FBI Illegal Surveillance and Disruption Operations',
    'Activists broke into FBI office and leaked documents exposing COINTELPRO (1956-1971) - illegal FBI surveillance and disruption of civil rights leaders, anti-war activists, and political organizations. Program included assassination support (Fred Hampton), blackmail attempts (MLK), and constitutional violations.',
    '1971-03-01',
    'Elections & Democratic Process',
    to_jsonb(ARRAY[doc_cointelpro]),
    '{"sources": ["FBI Vault", "Church Committee Report"]}'::jsonb
  ),
  (
    'Operation Paperclip Recruits Nazi Scientists - War Crimes Whitewashed',
    'Operation Paperclip (1945-1959) secretly recruited over 1,600 Nazi scientists, engineers, and technicians for U.S. government work, creating false biographies to circumvent bans on Nazi party members. Many had documented involvement in war crimes including concentration camp slave labor and human experiments.',
    '1945-09-01',
    'War & Intelligence Operations',
    to_jsonb(ARRAY[doc_paperclip]),
    '{"sources": ["National Archives", "George Washington University"]}'::jsonb
  );

  -- Financial Crime Events
  INSERT INTO events (title, description, event_date, pillar, document_ids, metadata) VALUES
  (
    'FTX Collapse Exposes $8 Billion Fraud - Crypto Exchange Embezzlement',
    'FTX, the world''s third-largest cryptocurrency exchange, collapsed after CEO Sam Bankman-Fried embezzled $8 billion in customer funds. Investigation revealed systematic fraud, no accounting department, and regulatory capture through political donations. Major investors including BlackRock failed basic due diligence.',
    '2022-11-08',
    'Financial Systems',
    to_jsonb(ARRAY[doc_ftx]),
    '{"sources": ["Department of Justice", "SEC"]}'::jsonb
  );

  -- Current Events 2025-2026
  INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
  (
    'U.S.-Israel Launch Military Operations Against Iran',
    'United States and Israel engaged in direct military operations against Iran, triggering unprecedented disruption in global oil supplies and injecting massive uncertainty into economic projections. This marked the first direct U.S.-Iran military engagement of this scale.',
    '2026-03-01',
    'War & Intelligence Operations',
    '{"sources": ["CNBC", "CNN", "Reuters"]}'::jsonb
  ),
  (
    'DOGE Mass Layoffs - Federal Workforce Reduction Begins',
    'Department of Government Efficiency (DOGE), led by Elon Musk, began mass layoffs of federal employees. The initiative, operating outside traditional government accountability structures, targeted regulatory agencies and sparked concerns about loss of institutional expertise and regulatory capacity.',
    '2026-02-01',
    'Elections & Democratic Process',
    '{"sources": ["Washington Post", "Politico"]}'::jsonb
  ),
  (
    'Supreme Court Upholds TikTok Ban',
    'U.S. Supreme Court ruled on TikTok ban legislation, balancing national security concerns against First Amendment rights and questions of digital sovereignty. The decision affected over 170 million American users and raised questions about government authority to ban communication platforms.',
    '2026-01-17',
    'AI Ethics & Digital Rights',
    '{"sources": ["Supreme Court", "NPR", "TechCrunch"]}'::jsonb
  ),
  (
    'Trump Executive Order Preempts State AI Regulation',
    'President Trump signed executive order establishing national AI policy framework designed to limit state-level AI regulation. The order created an "AI Litigation Council" to challenge state AI laws, which critics called "a mafia-style warning to state lawmakers."',
    '2025-12-11',
    'AI Ethics & Digital Rights',
    '{"sources": ["Greenberg Traurig", "Tech Policy Press"]}'::jsonb
  ),
  (
    'UAP Disclosure Push Intensifies - White House Registers Alien.gov',
    'White House registered alien.gov and aliens.gov domains following President Trump''s instruction to declassify files related to "aliens, UAP, UFOs, and related topics." AARO maintains over 2,000 documented UAP cases and is collaborating with the White House to expedite disclosure of previously undisclosed information.',
    '2026-03-17',
    'Space & Black Budget Programs',
    '{"sources": ["DefenseScoop", "Yahoo News", "CNN"]}'::jsonb
  );
END $$;
