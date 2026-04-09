/*
  # Add Remaining Tier 1 Evidence Items (Part 2)

  Adds nodes 2-5 of Tier 1 evidence
*/

-- NODE 2: Pentagon-to-Silicon Valley Pipeline
INSERT INTO documents (
  title,
  slug,
  description,
  content,
  document_type,
  date_published,
  verification_tier,
  metadata
) VALUES
(
  'The Pentagon-to-Silicon Valley Pipeline',
  'pentagon-silicon-valley-pipeline',
  'The CIA has a venture capital firm called In-Q-Tel, founded in 1999, operating on $100 million/year in taxpayer funding. It has invested in 800+ companies. The technologies it incubated now sit in your pocket, track your movements, and map your face.',
  E'# The Pentagon-to-Silicon Valley Pipeline (1999–Present)\n\n## Summary\nThe CIA has a venture capital firm. It''s called In-Q-Tel, founded in 1999, operates on $100 million per year in taxpayer funding, and has invested in over 800 companies. The technologies it incubated now sit in your pocket, track your movements, and map your face.\n\n## The Evidence\n• In-Q-Tel: $1.8 billion invested across 800+ companies\n• Keyhole, Inc. (2003): In-Q-Tel funded → Google acquired (2004) → Google Earth (2005)\n• Palantir: In-Q-Tel backed, now $250B valuation, $1B DHS contract (2026)\n• Pentagon failed 8 consecutive audits; controls $4.65 trillion, 60%+ untrackable\n• DARPA developed: internet, GPS, Siri, autonomous vehicles — all commercialized privately\n• NSA PRISM: $20M/year for warrantless access to 9+ tech companies\n\n## The Red Pill\nEvery app on your phone exists because the Pentagon funded the internet. GPS, maps, voice assistant — all originated in classified military programs. The CIA''s venture capital arm invested in companies that now possess more data on Americans than any intelligence agency. They funded startups to build the surveillance state — and you carry it voluntarily.\n\n## Sources\nIn-Q-Tel. "About IQT." 2024.\nMazzetti, Mark. "Spy Agencies Fund Start-Ups." NYT, 2020.\nShorrock, Tim. Spies for Hire. Simon & Schuster, 2008.',
  'Intelligence Report / Financial Records',
  '1999-01-01',
  'verified',
  jsonb_build_object(
    'category', 'AI & Surveillance',
    'pillar', 'AI & Surveillance',
    'years', '1999–Present',
    'importance', 'PURE_GOLD',
    'tags', ARRAY['CIA', 'In-Q-Tel', 'Palantir', 'DARPA', 'surveillance', 'Pentagon'],
    'connection_web', ARRAY['DARPA Research', 'Palantir', 'Special Access Programs', 'Snowden NSA Leaks', 'NSA Stellar Wind']
  )
),

-- NODE 3: LIBOR Scandal
(
  'The LIBOR Scandal — Banks Rigged the World''s Most Important Number',
  'libor-scandal-banks-rigged-interest-rates',
  'For a decade, 16 banks colluded to rig LIBOR — the rate determining $350 trillion in financial products: your mortgage, student loans, municipal bonds. Total fines: $9 billion. Senior executives imprisoned: zero.',
  E'# The LIBOR Scandal (2003–2012)\n\n## Summary\nFor at least a decade, the world''s largest banks colluded to rig LIBOR — the single most important number in global finance. LIBOR determined interest rates on $350 trillion in financial products worldwide. Sixteen banks manipulated it daily. Total fines exceeded $9 billion. Senior banking executives who went to prison: zero.\n\n## The Evidence\n• LIBOR set benchmark for $350 trillion in global financial products\n• 16+ banks manipulated rates: Barclays ($453M), UBS ($1.5B), Deutsche Bank ($2.5B)\n• Total fines: $9 billion across regulators\n• 38 traders charged; 9 imprisoned; ZERO senior executives prosecuted\n• NY Fed knew since August 2007 — did nothing\n• BBC found convicted traders were original whistleblowers\n• U.S. municipalities lost $6 billion from LIBOR suppression\n\n## The Red Pill\nSixteen banks rigged the number determining your mortgage, student loan, and city borrowing costs — daily, for a decade. Regulators knew. The Fed knew. When justice came, whistleblowers went to prison. Executives paid fines from shareholder money and kept bonuses. $350 trillion priced on a lie. Not one person at the top spent a night in jail.\n\n## Sources\nHou, David. "LIBOR Reform." Federal Reserve Bank of NY, 2014.\nVaughan, Liam. The Fix. Bloomberg Press, 2017.\nBBC Panorama. "The LIBOR Scandal." 2017.',
  'Court Records / Financial Records',
  '2003-01-01',
  'verified',
  jsonb_build_object(
    'category', 'Financial Systems',
    'pillar', 'Financial Systems',
    'years', '2003–2012',
    'importance', 'PURE_GOLD',
    'tags', ARRAY['LIBOR', 'banking fraud', 'financial crime', 'regulatory capture'],
    'connection_web', ARRAY['Federal Reserve System', 'Gramm-Leach-Bliley Act', 'BlackRock', 'Student Loan Crisis']
  )
),

-- NODE 4: UN Peacekeeping Sexual Exploitation
(
  'UN Peacekeeping Sexual Exploitation Scandals',
  'un-peacekeeping-sexual-exploitation',
  'UN peacekeepers sent to protect the world''s most vulnerable systematically exploited them. 2004–2016: 2,000+ allegations. In Haiti, 134 Sri Lankan peacekeepers ran a child sex ring. 30+ years, 53 peacekeepers jailed — 3% conviction rate.',
  E'# UN Peacekeeping Sexual Exploitation (1993–Present)\n\n## Summary\nUN peacekeepers sent to protect the vulnerable systematically exploited them. Between 2004-2016: 2,000+ allegations. In Haiti, 134 Sri Lankan peacekeepers ran a child sex ring with victims as young as 11. In 30+ years, only 53 peacekeepers have been jailed — a 3% conviction rate. 747 paternity claims filed. 29 resolved.\n\n## The Evidence\n• 2,000+ allegations documented 2004–2016 (AP investigation)\n• Haiti: 134 Sri Lankan peacekeepers in child sex ring; victims as young as 11\n• 747 paternity claims filed — only 29 resolved (UN dashboard, 2025)\n• Kathryn Bolkovac exposed DynCorp trafficking in Bosnia — was fired, won £110,221\n• 1,700+ allegations = 53 imprisoned = <3% conviction rate\n• UN has NO jurisdiction; troop countries responsible, almost never act\n\n## The Red Pill\nBlue helmets were supposed to protect the vulnerable. Instead, they exploited them. Three decades of "zero tolerance" with <3% conviction rate. The UN can sanction nations and authorize military force. But it cannot — or will not — imprison soldiers who rape children under its flag. 747 paternity claims. 29 resolved.\n\n## Sources\nAP. "UN Peacekeeping Sexual Abuse Problem." April 2017.\nCode Blue Campaign. "Accountability for SEA by UN Peacekeepers." 2023.\nBolkovac, Kathryn. The Whistleblower. Palgrave Macmillan, 2011.',
  'International & Human Rights Reports',
  '1993-01-01',
  'verified',
  jsonb_build_object(
    'category', 'Child Safety & Trafficking',
    'pillar', 'Child Safety & Trafficking',
    'years', '1993–Present',
    'importance', 'PURE_GOLD',
    'tags', ARRAY['UN', 'peacekeeping', 'sexual exploitation', 'child trafficking', 'human rights'],
    'connection_web', ARRAY['Yemen War', 'Plan Colombia', 'Ghislaine Maxwell Trial', 'Child Welfare System Failures']
  )
),

-- NODE 5: Fossil Fuel Campaign Spending
(
  'Fossil Fuel Industry Campaign Spending & Regulatory Capture',
  'fossil-fuel-campaign-spending-regulatory-capture',
  'In 1977, Exxon''s scientists told them fossil fuels were warming the planet. Harvard 2023 study: Exxon''s projections were 63–83% accurate. Their response: spend four decades funding disinformation. Since 2000: $2 billion lobbying to block climate legislation.',
  E'# Fossil Fuel Industry Campaign Spending (1990–Present)\n\n## Summary\nIn 1977, Exxon''s scientists told them burning fossil fuels was warming the planet. A 2023 Harvard study found 63–83% of ExxonMobil''s internal climate projections were accurate. Their response: spend four decades funding disinformation. Since 2000: $2 billion lobbying to block climate legislation. They knew. They lied. They bought the politicians who would help them keep lying.\n\n## The Evidence\n• Oil/gas spent $2 billion lobbying 2000–2016 to block climate legislation (Brulle, Climatic Change)\n• Koch network: $400 million in 2012 election alone\n• ExxonMobil internal projections (1977): 63–83% accurate over 40+ years (Harvard, Science, 2023)\n• $558 million dark money to climate-denial orgs 2003–2010\n• 43 former fossil fuel figures at EPA, DOI, DOE (2025)\n• EPA enforcement dropped 60% under Pruitt\n\n## The Red Pill\nExxon''s scientists told them the planet was warming in 1977. Projections were 83% accurate. Response: spend billions funding the lie that climate science was "uncertain." They bought politicians, funded think tanks, staffed agencies, suspended enforcement. 47 years later, oil flows, subsidies remain, same dark money funds lawmakers overseeing energy policy. They modeled it, graphed it, buried it.\n\n## Sources\nSupran, Geoffrey. "Assessing ExxonMobil''s Projections." Science, 2023.\nBrulle, Robert. "Climate Lobby, 2000-2016." Climatic Change, 2018.\nPublic Citizen. "43 Fossil Fuel Appointees." 2025.',
  'Financial Records / Lobbying Disclosure',
  '1990-01-01',
  'verified',
  jsonb_build_object(
    'category', 'Environmental & Corporate',
    'pillar', 'Environmental & Corporate',
    'years', '1990–Present',
    'importance', 'PURE_GOLD',
    'tags', ARRAY['fossil fuels', 'ExxonMobil', 'climate denial', 'lobbying', 'regulatory capture'],
    'connection_web', ARRAY['Seed Monopoly', 'Brazil Deforestation', 'PFAS Forever Chemicals', 'Dark Money', 'Citizens United']
  )
);
