export interface Connection {
  id: string;
  title: string;
  pillars: number[];
  summary: string;
  fullText: string;
  citations: string[];
  tags: string[];
}

export interface Pillar {
  id: number;
  name: string;
  shortName: string;
  color: string;
  icon: string;
}

export const pillars: Pillar[] = [
  {
    id: 1,
    name: "Financial Systems",
    shortName: "Finance",
    color: "#4A7C59",
    icon: "DollarSign"
  },
  {
    id: 2,
    name: "Space & Black Budget",
    shortName: "Black Budget",
    color: "#2C3E6B",
    icon: "Rocket"
  },
  {
    id: 3,
    name: "AI Ethics & Digital Rights",
    shortName: "AI & Surveillance",
    color: "#6B5B95",
    icon: "Eye"
  },
  {
    id: 4,
    name: "Health Transparency",
    shortName: "Health",
    color: "#C94C4C",
    icon: "HeartPulse"
  },
  {
    id: 5,
    name: "Child Safety & Human Trafficking",
    shortName: "Child Safety & Trafficking",
    color: "#D4A843",
    icon: "Shield"
  },
  {
    id: 6,
    name: "Energy & Suppressed Tech",
    shortName: "Energy",
    color: "#E88D3F",
    icon: "Zap"
  },
  {
    id: 7,
    name: "Media Manipulation",
    shortName: "Media",
    color: "#3C8DAD",
    icon: "Tv"
  },
  {
    id: 8,
    name: "War & Intelligence",
    shortName: "War",
    color: "#7A7A7A",
    icon: "Target"
  },
  {
    id: 9,
    name: "Government & Law",
    shortName: "Gov & Law",
    color: "#8B4F6E",
    icon: "Vote"
  },
  {
    id: 10,
    name: "Environmental & Corporate Accountability",
    shortName: "Environment",
    color: "#5A6F4C",
    icon: "Trees"
  }
];

export const connections: Connection[] = [
  {
    id: "conn-1",
    title: "The Fed → Surveillance State",
    pillars: [1, 3],
    summary: "Zero-interest-rate policy funded the construction of modern surveillance infrastructure through Silicon Valley.",
    fullText: "Zero-interest-rate policy (ZIRP) and quantitative easing from 2008–2022 flooded venture capital markets with cheap capital, directly funding the construction of the modern surveillance infrastructure. Google's parent Alphabet, Meta, and Amazon — the three companies that own the largest surveillance data ecosystems on earth — collectively saw their market capitalizations increase from approximately $300 billion in 2009 to over $5 trillion by 2022, a period that precisely tracked the Fed's balance sheet expansion from $900 billion to $8.9 trillion. The CIA's own venture capital arm, In-Q-Tel, seeded Palantir Technologies — now one of the highest-valued surveillance AI companies in the world — and receives approximately $100 million in taxpayer funding annually to invest in national security technology startups, creating a direct pipeline from the intelligence community to Silicon Valley.",
    citations: [
      "\"The CIA-Backed Venture Fund That Helped Launch Palantir and Anduril.\" Fortune, 28 July 2025.",
      "\"Palantir CEO Defends Surveillance Tech as US Government Contracts Boost Sales.\" Investing.com, 2 Feb. 2026.",
      "\"Palantir Is Extending Its Reach Even Further Into Government.\" Wired, 1 Aug. 2025."
    ],
    tags: ["#QE", "#Palantir", "#InQTel", "#SurveillanceCapitalism"]
  },
  {
    id: "conn-2",
    title: "Cantillon Effect → Political Capture",
    pillars: [1, 9],
    summary: "Monetary policy concentrates wealth, Citizens United allows unlimited political spending, creating a documented feedback loop.",
    fullText: "The Cantillon Effect describes how newly created money benefits those closest to its source — asset owners and financial institutions — before inflation erodes purchasing power for wage earners. The Fed's post-2008 quantitative easing drove asset prices to historic highs, concentrating wealth among the top 0.1% at unprecedented rates. Citizens United, decided in 2010 — the same year the Fed's QE programs were in full effect — removed the legal barriers preventing that newly concentrated wealth from flowing into politics. The result is a documented feedback loop: monetary policy concentrates wealth → Citizens United allows unlimited political spending from that wealth → the political system produces legislators who protect the monetary policy that created the wealth. Dark money in federal elections hit a record $1.9 billion in 2024.",
    citations: [
      "\"Dark Money Hit a Record High of $1.9 Billion in 2024 Federal Races.\" Brennan Center for Justice, 6 May 2025.",
      "\"Citizens United Gave Billionaires a Chance to Enrich Themselves.\" The Financial District, 20 Oct. 2024."
    ],
    tags: ["#CantillonEffect", "#CitizensUnited", "#DarkMoney", "#WealthConcentration"]
  },
  {
    id: "conn-3",
    title: "Operation Paperclip → MK-Ultra",
    pillars: [4, 8],
    summary: "Nazi human experimentation directly fed into CIA mind control programs through documented personnel transfers.",
    fullText: "The documented chain from Nazi human experimentation to CIA mind control is not speculative — it is confirmed in both the MK-Ultra Wikipedia entry and court-ordered FOIA releases. Kurt Blome, a Nazi scientist who conducted biological weapons experiments at Dachau concentration camp, was recruited under Operation Paperclip and later became involved in CIA programs Bluebird and Artichoke — the direct predecessors to MK-Ultra. American historian Stephen Kinzer documented that MK-Ultra's use of mescaline on unwitting subjects directly replicated earlier Nazi experiments conducted at Dachau. CIA Director Richard Helms ordered MK-Ultra records destroyed in 1973; approximately 20,000 documents survived only because they had been misfiled.",
    citations: [
      "\"MKUltra.\" Wikipedia, Wikimedia Foundation, 26 Feb. 2002.",
      "\"The True Story of MK-Ultra and the CIA Mad Scientist.\" Jacobin, 6 Oct. 2020.",
      "\"The Hidden History of Project MKUltra Experiments.\" Explore the Archive, 29 Jan. 2025."
    ],
    tags: ["#Paperclip", "#MKUltra", "#HumanExperimentation", "#CIA"]
  },
  {
    id: "conn-4",
    title: "Tobacco Playbook → Climate Denial",
    pillars: [4, 6],
    summary: "The disinformation playbook used by tobacco was built on oil industry foundations, not the other way around.",
    fullText: "Documents obtained through litigation by the Center for International Environmental Law revealed that the American Petroleum Institute launched the 'Smoke and Fumes Committee' approximately 70 years ago — and that the disinformation playbook used by the tobacco industry was built on oil industry foundations, not the other way around. PR firm Hill & Knowlton, which built tobacco's doubt campaign, first developed its tactics working for Big Oil clients. Richard Darrow, the principal architect of tobacco's anti-science strategy, also represented Hill & Knowlton's major oil company clients. A 2021 Harvard study confirmed that ExxonMobil used 'scientific hedging' language — describing climate change as a 'risk' rather than a reality — a tactic directly borrowed from tobacco's 1990s strategy.",
    citations: [
      "\"Evidence Suggests Big Oil Didn't Just Borrow Big Tobacco's Playbook.\" Truthout, 14 Aug. 2016.",
      "\"Exxon Uses Big Tobacco's Playbook to Downplay the Climate Crisis.\" CNN, 13 May 2021.",
      "\"Big Oil Denial Playbook Revealed by New Documents.\" Center for International Environmental Law, 26 July 2016."
    ],
    tags: ["#BigTobacco", "#ClimateChange", "#Disinformation", "#BigOil"]
  },
  {
    id: "conn-5",
    title: "Epstein → Banking Networks",
    pillars: [5, 1],
    summary: "JPMorgan processed over $1 billion in Epstein transactions despite internal concerns about his sex offender status.",
    fullText: "The documented connection between Jeffrey Epstein's trafficking operation and the global financial system is no longer speculative — it is established in court filings, Senate investigations, and bank records unsealed through federal litigation. JPMorgan Chase processed more than $1 billion in transactions for Epstein over 15 years despite internal concerns about his registered sex offender status. Newly unsealed financial records from October 2025 showed over $1 billion in transactions connected to Russian banks. In November 2025, JPMorgan and Deutsche Bank were subpoenaed by the House Committee on Oversight and Government Reform to release Epstein's financial records. JPMorgan settled for $290 million with Epstein victims in a class action, plus an additional $75 million with the U.S. Virgin Islands — while admitting no guilt.",
    citations: [
      "Government of the U.S. Virgin Islands v. JPMorgan Chase Bank, N.A., No. 22-cv-10904-JSR, U.S. District Court. Filed 13 Jan. 2023.",
      "\"Newly Unsealed Epstein Records Shed Light on Years of His Financial Activity.\" CNN, 31 Oct. 2025.",
      "\"JPMorgan, Deutsche Bank Subpoenaed to Release Epstein Records.\" Bloomberg, 19 Nov. 2025.",
      "\"Continuing Epstein Investigation: Wyden Releases New Analysis.\" U.S. Senate Finance Committee, 19 Nov. 2025."
    ],
    tags: ["#Epstein", "#JPMorgan", "#Banking", "#Trafficking"]
  },
  {
    id: "conn-6",
    title: "COINTELPRO → Social Media Surveillance",
    pillars: [8, 3],
    summary: "FBI surveillance tactics from the 1960s have been adapted to modern social media monitoring with AI tools.",
    fullText: "The continuity between the FBI's COINTELPRO program (1956–1971) and modern surveillance of domestic activists is documented through FOIA requests, not theory. Internal FBI documents obtained by The Intercept revealed that the Bureau tracked Black Lives Matter activists beginning in 2014 using surveillance techniques described as 'reminiscent of a rich American history of targeting black Americans.' A March 2025 Davis Vanguard analysis documented the through-line from COINTELPRO to modern social media monitoring tools, noting that COINTELPRO 'laid the foundation for modern surveillance methods, many of which continue to disproportionately target Black communities.' The FBI created a new category — 'Black Identity Extremists' — applying COINTELPRO-style targeting logic to social media monitoring with modern AI tools.",
    citations: [
      "\"COINTELPRO.\" Wikipedia, Wikimedia Foundation, 27 Sept. 2001.",
      "\"45 Years After COINTELPRO, FBI Continues to Monitor Activists.\" The Real News Network, 7 Mar. 2016.",
      "\"From COINTELPRO to Social Media: The Ongoing Police Surveillance of Black Communities.\" Davis Vanguard, 28 Feb. 2025."
    ],
    tags: ["#COINTELPRO", "#FBI", "#SocialMedia", "#Surveillance"]
  },
  {
    id: "conn-7",
    title: "Military-Industrial Complex",
    pillars: [8, 1, 9],
    summary: "Eisenhower's warning realized: defense contractors maintain 950 lobbyists and fund politicians who vote on their budgets.",
    fullText: "President Eisenhower's farewell warning on January 17, 1961 is among the most cited — and least acted upon — warnings in American political history. He cautioned against the 'acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex.' The Quincy Institute's 2025 analysis found that the top five Pentagon contractors received $771 billion in contract awards from 2020–2024, while maintaining 950 registered lobbyists, spending tens of millions in campaign contributions, and funding think tanks that advocate for higher military budgets. The American Prospect documented that over 70% of Lockheed Martin's $51 billion revenue comes from sales to the U.S. government — a government whose members hold personal stock portfolios in those same contractors, who vote on the budgets that fund those same contracts.",
    citations: [
      "\"Profits of War: Top Beneficiaries of Pentagon Spending, 2020–2024.\" Quincy Institute for Responsible Statecraft, 7 July 2025.",
      "\"The Members of Congress Who Profit from War.\" The American Prospect, 17 Jan. 2020.",
      "\"Eisenhower Warns of a Military Industrial Complex.\" Eisenhower Foundation."
    ],
    tags: ["#MilitaryIndustrialComplex", "#Pentagon", "#Lobbying", "#DefenseContractors"]
  },
  {
    id: "conn-8",
    title: "Black Budget → Energy Suppression",
    pillars: [2, 6],
    summary: "6,084 active secrecy orders on patents, with classified propulsion research potentially overlapping suppressed energy tech.",
    fullText: "The Invention Secrecy Act and the classified Special Access Programs infrastructure share the same legal framework — and researchers have long argued they share the same subject matter. The Federation of American Scientists documents approximately 6,084 active secrecy orders on patent applications, with categories including 'energy conversion' and 'solar photovoltaic generators.' Former Lockheed Skunk Works director Ben Rich famously stated before his death: 'We already have the means to travel among the stars, but these technologies are locked up in black projects.' Former Senate Intelligence Committee staffer Daniel Sheehan, in sworn declarations filed in UAP-related litigation, has asserted that classified propulsion research overlaps with energy technologies that would disrupt the fossil fuel economy. These claims remain unverified; the Invention Secrecy statistics are a matter of public record.",
    citations: [
      "\"Invention Secrecy Statistics.\" Federation of American Scientists.",
      "\"Special Access Program.\" Wikipedia, Wikimedia Foundation.",
      "Rich, Ben R., and Leo Janos. Skunk Works: A Personal Memoir of My Years at Lockheed. Little, Brown, 1994."
    ],
    tags: ["#InventionSecrecy", "#BlackBudget", "#EnergyTechnology", "#SAP"]
  },
  {
    id: "conn-9",
    title: "Media Consolidation → Health Coverups",
    pillars: [7, 4],
    summary: "Pharmaceutical companies spent $57.5 billion on promotion, creating structural conflicts in media health reporting.",
    fullText: "The documented capture of pharmaceutical advertising revenue by major media outlets creates a structural conflict of interest that has been quantified. A 2009 study in the Journal of General Internal Medicine found that pharmaceutical companies spent $57.5 billion on promotion in 2004 — the majority of which went to advertising in media outlets that also produce health journalism. A 2016 analysis found that pharmaceutical companies were among the top three advertising categories for most major television networks, magazines, and newspapers. The United States and New Zealand are the only two developed nations that allow direct-to-consumer pharmaceutical advertising. The documented consequence: media outlets that run pharmaceutical advertising face structural disincentives to report critically on drug safety — the same dynamic that allowed the Vioxx scandal to persist for five years before major media coverage caught up to internal Merck documents.",
    citations: [
      "Gagnon, Marc-André, and Joel Lexchin. \"The Cost of Pushing Pills: A New Estimate of Pharmaceutical Promotion Expenditures in the United States.\" PLOS Medicine, vol. 5, no. 1, 2008.",
      "\"Direct-to-Consumer Advertising.\" Wikipedia, Wikimedia Foundation."
    ],
    tags: ["#MediaConsolidation", "#PharmaceuticalAdvertising", "#Journalism", "#ConflictOfInterest"]
  },
  {
    id: "conn-10",
    title: "AI Bias → Electoral Manipulation",
    pillars: [3, 9],
    summary: "AI chatbots are 4× more persuasive than TV ads, have documented liberal bias, and face no disclosure requirements.",
    fullText: "The convergence of three documented facts creates an unprecedented electoral risk: (1) AI chatbots have documented liberal political bias (14 of 15 compass tests, per peer-reviewed research); (2) a December 2025 Science study found AI chatbots are approximately four times more persuasive than television political advertising; (3) there are currently no federal disclosure requirements mandating that political actors reveal when AI systems are used in voter contact operations. The Yale study found the asymmetry particularly alarming — liberal framing in AI outputs affected both liberals and conservatives, while conservative framing only affected conservatives. At scale, an unregulated AI-driven political communication infrastructure with embedded liberal bias represents the most significant undisclosed influence operation in electoral history. None of the four elements — bias, persuasion power, scale, and lack of disclosure — are disputed in the peer-reviewed literature.",
    citations: [
      "\"AI's Hidden Bias: Chatbots Can Influence Opinions Without Trying.\" Yale News, 3 Mar. 2026.",
      "\"AI Chatbots Can Sway Voters with Remarkable Ease.\" Nature, 3 Dec. 2025.",
      "\"The Levers of Political Persuasion with Conversational AI.\" Science, 3 Dec. 2025."
    ],
    tags: ["#AIBias", "#Elections", "#Persuasion", "#Chatbots"]
  },
  {
    id: "conn-11",
    title: "War Funding → Surveillance → Domestic",
    pillars: [8, 3, 1],
    summary: "Post-9/11 military budgets funded surveillance tech that was then commercialized and deployed domestically.",
    fullText: "The technology that now constitutes the domestic surveillance infrastructure was almost entirely funded through post-9/11 military and intelligence budgets before being transferred to the commercial sector. DARPA funded the precursor technologies to the internet, GPS, voice recognition, and much of the foundational AI research later commercialized by Google, Amazon, and Apple. The NSA's post-9/11 Stellar Wind surveillance program built the legal architecture and technical infrastructure that companies like Palantir then commercialized. In-Q-Tel, the CIA's venture arm, seeded dozens of Silicon Valley companies that now form the backbone of both commercial data collection and government surveillance contracting — earning approximately $40 in private VC investment for every $1 of In-Q-Tel funding, according to the CIA itself.",
    citations: [
      "\"The CIA-Backed Venture Fund That Helped Launch Palantir and Anduril.\" Fortune, 28 July 2025.",
      "\"Defense Advanced Research Projects Agency.\" Wikipedia, Wikimedia Foundation."
    ],
    tags: ["#DARPA", "#InQTel", "#Surveillance", "#MilitaryFunding"]
  },
  {
    id: "conn-12",
    title: "The Revolving Door Across All Pillars",
    pillars: [1, 4, 9, 8],
    summary: "Officials accumulate institutional knowledge at public expense, then monetize that access in the private sector.",
    fullText: "The 'revolving door' is not a single phenomenon — it is a universal institutional mechanism documented independently across every sector covered in this knowledge base. The FDA revolving door (11 of 16 recent commissioners joined pharma after leaving); the Pentagon revolving door (in 2018 alone, top 20 defense contractors hired 645 former senior government officials as lobbyists, board members, or executives; 90% became registered lobbyists); the financial revolving door (former Treasury Secretaries Rubin and Paulson both came from Goldman Sachs); the lobbying revolving door in Congress (65%+ of departing members join lobbying); and the intelligence revolving door (former CIA, NSA, and DHS officials routinely joining the surveillance contractors they previously oversaw). The common mechanism: individuals accumulate institutional knowledge and relationships at public expense, then monetize that access in the private sector.",
    citations: [
      "\"Profits of War: Top Beneficiaries of Pentagon Spending.\" Quincy Institute, 7 July 2025.",
      "\"Reduce Corporate Influence at the Pentagon.\" Office of Senator Elizabeth Warren, 1 Apr. 2020.",
      "\"The Members of Congress Who Profit from War.\" The American Prospect, 17 Jan. 2020."
    ],
    tags: ["#RevolvingDoor", "#Lobbying", "#InstitutionalCapture", "#Corruption"]
  },
  {
    id: "conn-13",
    title: "Surveillance → Child Protection Paradox",
    pillars: [3, 5],
    summary: "Trillion-dollar surveillance infrastructure failed to prevent trafficking networks operating in plain sight for decades.",
    fullText: "The EARN IT Act debate exposes the sharpest documented paradox in this entire knowledge base: the most powerful surveillance infrastructure in human history — built at a cost of trillions of dollars, legally authorized through FISA, and technically capable of monitoring virtually all digital communications — demonstrably failed to prevent the trafficking networks documented in Pillar 5. Jeffrey Epstein operated his network for over two decades while maintaining accounts at JPMorgan and Deutsche Bank that processed over $1 billion in transactions; his private island, planes, and residences were publicly known. NCMEC received 36 million CyberTipline reports in a single year. The documented paradox: the surveillance apparatus is extraordinarily capable of tracking political dissidents, journalists, and activists, but the documented prosecution rate for child trafficking remains remarkably low relative to the ILO's estimated 6.3 million victims in commercial sexual exploitation globally.",
    citations: [
      "\"Newly Unsealed Epstein Records Shed Light on His Financial Activity.\" CNN, 31 Oct. 2025.",
      "Global Estimates of Modern Slavery. International Labour Organization, 2022.",
      "\"CyberTipline Data.\" National Center for Missing & Exploited Children."
    ],
    tags: ["#Surveillance", "#ChildTrafficking", "#EARNIT", "#Paradox"]
  },
  {
    id: "conn-14",
    title: "UAP + Energy + Black Budget Convergence",
    pillars: [2, 6, 1],
    summary: "Congressional testimony about recovered craft and reverse-engineering intersects with suppressed energy technology.",
    fullText: "The July 2023 congressional UAP hearing introduced three documented facts into the congressional record that had previously been discussed only in classified settings: (1) David Grusch testified under oath about 'non-human' craft recovered by the U.S. government; (2) Representative Mike Gallagher stated the UAP program involved 'reverse-engineering' of recovered technology; (3) multiple witnesses confirmed the programs operated outside normal congressional oversight and appropriations. If advanced propulsion technology — whether extraterrestrial in origin or developed in classified SAPs — exists and has been concealed, it would represent the most profound example of the energy suppression dynamic, with implications for every financial system built around fossil fuel dependency. This connection represents the most speculative item in this knowledge base, but the congressional testimony is documented primary source material.",
    citations: [
      "Hearing on Unidentified Anomalous Phenomena: Implications on National Security, Public Safety, and Government Transparency. U.S. House of Representatives, 26 July 2023.",
      "\"David Grusch.\" Wikipedia, Wikimedia Foundation."
    ],
    tags: ["#UAP", "#BlackBudget", "#EnergyTechnology", "#Disclosure"]
  },
  {
    id: "conn-15",
    title: "The Iran Trilogy — 73 Years of Documented Blowback",
    pillars: [1, 6, 7, 8, 9],
    summary: "From the 1953 CIA coup for oil, to the 1979 revolution, to the 2026 war — a single continuous, documented story spanning seven decades.",
    fullText: "This three-item sequence connects to nearly every pillar in the knowledge base and represents the most powerful narrative thread in modern American foreign policy: In 1953, the CIA and MI6 overthrew Iran's democratically elected Prime Minister Mohammad Mosaddegh in Operation Ajax after he nationalized Iranian oil. The CIA's own declassified documents confirm the agency spent $1 million bribing officials, hired mobs to create chaos, and installed the Shah as dictator. With CIA and Mossad assistance, the Shah created SAVAK — a secret police force that tortured dissidents for 25 years. In 1979, after a quarter-century of CIA-backed repression, the Iranian people revolted. The National Security Archive's assessment is unambiguous: the revolution was direct blowback from the 1953 coup. In 2026, the United States and Israel launched Operation Epic Fury — killing Iran's Supreme Leader and triggering the closure of the Strait of Hormuz, disrupting 20% of global oil supply. The Fed explicitly cited the Iran war in its March 2026 decision to hold rates. The war connects to Pillar 1 (oil profits drove the coup; oil disruption is the primary consequence); Pillar 6 (energy dependence creates geopolitical vulnerability); Pillar 7 (media coverage follows the Pentagon analyst playbook); Pillar 8 (SAVAK trained by CIA/Mossad like COINTELPRO); and Pillar 9 (defense contractors benefit while their former executives serve in government). The people who designed Operation Ajax are dead. The consequences are on the news tonight.",
    citations: [
      "\"CIA Confirms Role in 1953 Iran Coup.\" National Security Archive, George Washington University.",
      "\"Declassified Documents Reveal CIA Role in 1953 Iranian Coup.\" NPR, 1 Sept. 2013.",
      "\"1979 Iran Hostage Crisis Recalled.\" National Security Archive, 4 Nov. 2019.",
      "\"What US Strikes on Iran Mean for Oil, Energy and Hormuz.\" Forbes, 28 Feb. 2026.",
      "\"2026 Iran War.\" Wikipedia, Wikimedia Foundation."
    ],
    tags: ["#IranTrilogy", "#OperationAjax", "#Blowback", "#Oil", "#SAVAK"]
  },
  {
    id: "conn-16",
    title: "The Master Pattern — Institutional Capture",
    pillars: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    summary: "Across all nine pillars, institutions created to serve the public are captured by the interests they were meant to regulate.",
    fullText: "Across hundreds of documented items in this knowledge base, a single meta-pattern appears in every domain: institutions created to serve the public interest are captured by the private interests they were designed to regulate or constrain. The Federal Reserve was created to stabilize the economy — it has transferred trillions to asset owners. The FDA was created to protect public health — its commissioners cycle through pharmaceutical company boards. Congress was created to represent citizens — its members hold stock in defense contractors whose budgets they vote on and become lobbyists for the industries they oversaw. Intelligence agencies were created to protect national security — they built surveillance infrastructure later privatized and deployed domestically. Media was created to inform the public — it was infiltrated by the CIA and consolidated under six corporations. Child welfare systems were created to protect the vulnerable — they became pipelines into exploitation. Energy innovation was funded by public universities and government labs — promising technologies were defunded, classified, or suppressed. The EPA acknowledged geoengineering is real after decades of public ridicule. This is not a theory. It is the documented record across every domain, verified through the government's own records, court filings, and congressional testimony cited across all ten pillars.",
    citations: [
      "See citations across all nine pillars for comprehensive documentation."
    ],
    tags: ["#InstitutionalCapture", "#MasterPattern", "#SystemicCorruption", "#RegulatoryCapture"]
  }
];
