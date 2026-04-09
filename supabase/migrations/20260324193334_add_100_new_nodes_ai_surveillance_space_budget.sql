/*
  # Add AI & Surveillance Nodes (8) and Space & Black Budget Nodes (4)

  AI & Surveillance nodes (89-96):
  89. China Social Credit System
  90. Pegasus Spyware / NSO Group
  91. ECHELON / Five Eyes
  92. Predictive Policing Algorithms
  93. Amazon Ring Police Network
  94. Clearview AI
  95. PRISM / XKeyscore
  96. Palantir Government Surveillance

  Space & Black Budget nodes (97-100):
  97. Pentagon Missing $35 Trillion
  98. Area 51 Declassification
  99. Operation Paperclip
  100. Lockheed Skunk Works / Black Programs
*/

INSERT INTO documents (title, slug, description, content, source_url, verification_tier, document_type, date_published, metadata)
VALUES

-- AI & SURVEILLANCE NODES

(
  'China Social Credit System (2014-Present)',
  'china-social-credit-system',
  'China''s Social Credit System — a government initiative to rate citizen trustworthiness using financial, social, and behavioral data — has been widely mischaracterized in Western media as a single unified surveillance score. The reality is more complex: China operates multiple overlapping systems for blacklisting and whitelisting individuals and businesses, with consequences ranging from travel bans to public shaming. Over 14 million flight and train tickets have been blocked under blacklist systems.',
  'China''s Social Credit System refers to a collection of government and corporate systems that rate and regulate the trustworthiness of individuals, businesses, and government entities. The system was outlined in a 2014 State Council planning document with goals of creating a society of sincerity. The actual implementation involves multiple overlapping systems rather than a single unified score: a court-operated blacklist system that blocks flight and high-speed rail travel for those with outstanding judgments (blocking over 14 million flight purchases and 5 million train purchases through 2019); a financial credit system similar to Western credit scores; and various local government pilot programs in cities including Rongcheng that rate citizen behavior more broadly. Corporate social credit systems rate business compliance with regulations. Western media reporting has frequently conflated these distinct systems into a dystopian single score, which critics argue has obscured both the real harms and the real limitations of the actual system. Privacy researchers and human rights organizations including Human Rights Watch have documented that the systems are used to suppress dissidents, Uighur Muslims, and political opponents, with Xinjiang regional surveillance particularly severe.',
  'https://en.wikipedia.org/wiki/Social_Credit_System',
  'verified',
  'AI, Surveillance & Digital Rights',
  '2014-06-14',
  '{"category": "State surveillance / social control / digital rights", "importance": "GOLD", "tags": ["China", "Social Credit System", "surveillance", "blacklists", "Uyghur", "digital authoritarianism", "travel bans"]}'
),

(
  'Pegasus Spyware / NSO Group (2016-Present)',
  'pegasus-spyware-nso-group',
  'Pegasus is military-grade spyware developed by Israeli firm NSO Group that can be silently installed on smartphones — including iPhones — with no user interaction through zero-click exploits. Leaked data from the Pegasus Project revealed that over 50,000 phone numbers of potential targets were selected by NSO Group clients including authoritarian governments, with confirmed infections on phones belonging to journalists, activists, heads of state, and opposition politicians.',
  'Pegasus is a surveillance software package developed by NSO Group Technologies, an Israeli cybersecurity firm. Pegasus can be installed on smartphones running iOS or Android through zero-click exploits — meaning no action by the target is required. Once installed, Pegasus can access all data on the device including messages, emails, contacts, location data, microphone, and camera. In July 2021, a consortium of 17 media organizations including the Guardian, Washington Post, Le Monde, and others published the Pegasus Project — an investigation based on a list of over 50,000 phone numbers that NSO Group clients had selected as potential surveillance targets. Analysis confirmed Pegasus infections on phones belonging to journalists, human rights activists, lawyers, opposition politicians, and at least 14 heads of state. Confirmed targets included journalists associated with Jamal Khashoggi, who was murdered by Saudi agents in 2018 — with Pegasus on phones of his associates potentially enabling pre-assassination surveillance. NSO Group states it sells only to vetted government clients for legitimate law enforcement purposes. Apple, WhatsApp (Meta), and Microsoft have sued NSO Group. The U.S. Department of Commerce blacklisted NSO Group in November 2021.',
  'https://en.wikipedia.org/wiki/Pegasus_(spyware)',
  'verified',
  'AI, Surveillance & Digital Rights',
  '2021-07-18',
  '{"category": "State-sponsored spyware / zero-click surveillance", "importance": "PURE_GOLD", "tags": ["Pegasus", "NSO Group", "Israel", "spyware", "zero-click exploit", "journalists", "Khashoggi", "50000 targets"]}'
),

(
  'ECHELON / Five Eyes Global Surveillance (1960s-Present)',
  'echelon-five-eyes-global-surveillance',
  'ECHELON is a signals intelligence collection and analysis network operated by the Five Eyes alliance — the intelligence agencies of the United States, United Kingdom, Canada, Australia, and New Zealand. The program — revealed publicly through a European Parliament report in 2001 — collects virtually all electronic communications globally, including phone calls, faxes, emails, and internet traffic. The Snowden revelations in 2013 confirmed and expanded the documented scope of Five Eyes surveillance.',
  'ECHELON is the name commonly associated with a global signals intelligence (SIGINT) collection system operated jointly by the intelligence agencies of the Five Eyes alliance: the U.S. NSA, UK GCHQ, Canadian CSE, Australian ASD, and New Zealand GCSB. The system''s existence was publicly acknowledged after a 2001 European Parliament report documented that ECHELON had been used for commercial espionage against European companies — including interception of communications between Airbus and Saudi Arabia that reportedly led to a Boeing contract. The Five Eyes arrangement originated in a 1943 UKUSA Agreement between the U.S. and UK to share signals intelligence. The network expanded after WWII and during the Cold War into a global collection infrastructure including satellite interception stations, undersea cable taps, and internet backbone access points. The full scope of ECHELON remained classified until Edward Snowden''s 2013 revelations provided documentary evidence of the NSA''s XKeyscore system (which can search virtually all internet activity), PRISM (collecting data from major tech companies), and other programs that collected communications globally with minimal judicial oversight.',
  'https://en.wikipedia.org/wiki/ECHELON',
  'verified',
  'AI, Surveillance & Digital Rights',
  '2001-09-05',
  '{"category": "Global mass surveillance / intelligence alliance", "importance": "PURE_GOLD", "tags": ["ECHELON", "Five Eyes", "NSA", "GCHQ", "signals intelligence", "mass surveillance", "Snowden", "PRISM"]}'
),

(
  'Predictive Policing Algorithms / Racial Bias (2010s-Present)',
  'predictive-policing-algorithms-racial-bias',
  'Predictive policing systems — algorithms that predict where crimes will occur and who is likely to commit them — have been deployed by police departments in dozens of U.S. cities despite documented evidence that they encode and amplify racial biases from historical policing data. A 2016 ProPublica investigation found the COMPAS recidivism algorithm was nearly twice as likely to falsely flag Black defendants as future criminals compared to white defendants.',
  'Predictive policing refers to the use of algorithms to forecast future criminal activity — both geographically (where crimes will occur) and individually (who is likely to commit crimes or reoffend). Major systems include PredPol (now Geolitica), used in Los Angeles, Santa Cruz, and other cities; COMPAS (Correctional Offender Management Profiling for Alternative Sanctions), used in criminal sentencing decisions across multiple states; and ShotSpotter, which uses audio sensors and AI to detect and predict gunfire. A landmark 2016 ProPublica investigation by Julia Angwin found that the COMPAS recidivism algorithm — used in Florida sentencing — produced false positive rates (predicting future crime for people who did not reoffend) that were nearly twice as high for Black defendants (44.9%) as for white defendants (23.5%), while also producing false negatives (predicting low risk for people who did reoffend) at higher rates for white defendants. Algorithmic bias research has documented that predictive policing systems trained on historical arrest data encode historical police biases — as over-policed communities generate more arrest data, the algorithm directs more policing there, generating more arrests, in a feedback loop. Multiple cities including Los Angeles, Santa Cruz, and Chicago have discontinued some predictive policing programs.',
  'https://en.wikipedia.org/wiki/Predictive_policing_in_the_United_States',
  'verified',
  'AI, Surveillance & Digital Rights',
  '2016-05-23',
  '{"category": "Algorithmic racial bias / predictive policing", "importance": "GOLD", "tags": ["predictive policing", "COMPAS", "racial bias", "PredPol", "ProPublica", "criminal justice algorithm", "racial disparity"]}'
),

(
  'Amazon Ring Police Surveillance Network (2018-Present)',
  'amazon-ring-police-surveillance-network',
  'Amazon''s Ring doorbell camera system has been integrated into a national law enforcement surveillance network without homeowners'' knowledge or consent. Through the Neighbors app and direct police partnerships, Ring enabled law enforcement to request footage from homeowners without a warrant, share footage with government agencies, and use facial recognition-adjacent capabilities on video. By 2022, Ring had 2,161 active law enforcement partnerships.',
  'Amazon Ring is a network of doorbell cameras and home security devices that has been positioned as a consumer product while simultaneously building a national surveillance infrastructure. Amazon has formalized partnerships with over 2,161 law enforcement agencies as of 2022, enabling police to request Ring footage from homeowners through the Neighbors app. From 2019 to 2022, Amazon allowed law enforcement to request video directly without a warrant or homeowner consent; Amazon required police to request footage from homeowners through the app, but police could then re-request footage from Amazon directly without notifying homeowners. In July 2022, Senator Ed Markey obtained confirmation from Amazon that it had provided Ring footage to police without user consent or a warrant on 11 separate occasions in 2022, pursuant to emergency requests. Electronic Frontier Foundation analysis documented Ring''s Neighbors app creating a neighborhood watch infrastructure that has been used to report and circulate images of Black and Latino individuals in public spaces as suspected criminals. Ring has also tested facial recognition integration with its cameras. In 2023, Amazon agreed to pay $5.8 million to settle FTC charges that Ring had allowed employees and contractors to access private customer videos.',
  'https://en.wikipedia.org/wiki/Ring_(company)',
  'verified',
  'AI, Surveillance & Digital Rights',
  '2022-07-13',
  '{"category": "Consumer surveillance / warrantless surveillance / Amazon", "importance": "GOLD", "tags": ["Amazon Ring", "police surveillance", "doorbell cameras", "warrantless surveillance", "Neighbors app", "facial recognition", "EFF"]}'
),

(
  'Clearview AI / Facial Recognition Surveillance (2017-Present)',
  'clearview-ai-facial-recognition-surveillance',
  'Clearview AI built a facial recognition database of over 30 billion images scraped from social media, news sites, and public internet sources without consent, then sold access to over 600 law enforcement agencies and private clients. A 2020 New York Times investigation revealed Clearview''s existence; subsequent investigation found the database was used by Capitol Police on January 6 rioters and by authoritarian governments. Clearview lost a class action suit in Illinois and agreed to restrict commercial sales.',
  'Clearview AI is a facial recognition company founded approximately 2017 that built a database of over 30 billion images scraped from social media platforms including Facebook, Instagram, Twitter, Venmo, and LinkedIn, along with news sites and other publicly accessible sources — without obtaining consent from the individuals pictured or from the platforms. The company sold access to this database to law enforcement agencies, providing a tool that could identify individuals from a photograph with no prior criminal record required. A January 2020 investigation by New York Times reporter Kashmir Hill revealed the company''s existence and methods. Clearview had provided access to over 600 law enforcement agencies. Subsequent reporting found that Clearview had made its system available to private companies and individuals, foreign governments including Ukraine, and U.S. Capitol Police during the January 6, 2021 investigation. Major social media platforms sent Clearview cease-and-desist letters. In 2022, Clearview settled a class action lawsuit in Illinois under the state''s Biometric Information Privacy Act (BIPA), agreeing to restrict sales of its database to commercial entities in Illinois and limiting commercial use nationally. The company continues operating for government and law enforcement clients.',
  'https://en.wikipedia.org/wiki/Clearview_AI',
  'verified',
  'AI, Surveillance & Digital Rights',
  '2020-01-18',
  '{"category": "Facial recognition mass surveillance / data scraping", "importance": "GOLD", "tags": ["Clearview AI", "facial recognition", "30 billion images", "law enforcement", "surveillance", "social media scraping", "privacy violation"]}'
),

(
  'PRISM / XKeyscore / NSA Mass Surveillance (2007-Present)',
  'prism-xkeyscore-nsa-mass-surveillance',
  'PRISM is an NSA surveillance program — revealed by Edward Snowden in June 2013 — that collected internet communications from at least nine major U.S. internet companies including Google, Apple, Facebook, Microsoft, and Yahoo. XKeyscore is an NSA tool that allows analysts to search the content of emails, social media activity, and internet browsing histories. Snowden''s disclosures prompted the USA FREEDOM Act and a federal court ruling finding NSA bulk collection unconstitutional.',
  'PRISM is an NSA surveillance program that began in 2007 under the authority of Section 702 of the Foreign Intelligence Surveillance Act. Documents leaked by Edward Snowden in June 2013 revealed that PRISM collected internet communications — emails, video chats, file transfers, and social media content — directly from the servers of at least nine major U.S. technology companies: Microsoft, Yahoo, Google, Facebook, PalTalk, YouTube, Skype, AOL, and Apple. The companies disputed the characterization of the access but acknowledged complying with legal orders. XKeyscore is a separate NSA tool described in Snowden documents as the widest-reaching NSA intelligence collection and analysis system, capable of searching the content of emails, social media activity, and internet browsing histories of virtually any internet user globally in near real-time. A 2015 federal appeals court ruled that the NSA''s bulk telephone metadata collection program was illegal under the Patriot Act. Congress passed the USA FREEDOM Act in 2015, ending bulk domestic telephone records collection. However, Section 702 authorities — which enable PRISM-type collection — have been repeatedly reauthorized by Congress with minimal reform. In 2023, the FBI was found to have conducted 278,000 improper searches of Americans'' communications collected under Section 702.',
  'https://en.wikipedia.org/wiki/PRISM',
  'verified',
  'AI, Surveillance & Digital Rights',
  '2013-06-06',
  '{"category": "NSA mass surveillance / Section 702 / Snowden revelations", "importance": "PURE_GOLD", "tags": ["PRISM", "XKeyscore", "NSA", "Snowden", "Section 702", "Google", "Facebook", "mass surveillance", "unconstitutional"]}'
),

(
  'Palantir Government Surveillance / Data Analytics (2003-Present)',
  'palantir-government-surveillance-data-analytics',
  'Palantir Technologies, co-founded by Peter Thiel with CIA seed funding through In-Q-Tel, built its business on government surveillance contracts — integrating vast data pools for the NSA, CIA, FBI, ICE, and military. Its Gotham platform has been used to build predictive policing and immigration enforcement tools. Palantir''s tools were central to ICE''s ability to identify and deport undocumented immigrants at scale.',
  'Palantir Technologies was co-founded by Peter Thiel in 2003, with seed funding provided by In-Q-Tel — the CIA''s venture capital arm. Palantir''s core product is data integration and analysis software that can link disparate databases — financial records, surveillance data, social media, criminal records, location data — and surface patterns and connections. Palantir''s primary clients are government agencies: the NSA, CIA, FBI, U.S. Army, and Immigration and Customs Enforcement (ICE). Palantir''s Gotham platform was used extensively by the NSA to analyze bulk surveillance data revealed by Snowden. ICE used Palantir''s Investigative Case Management (ICM) system to identify undocumented immigrants for deportation — a system that privacy researchers documented could build profiles on individuals based on utility records, vehicle registration, social media, and other data without judicial authorization. A 2019 BuzzFeed News investigation found Palantir had helped ICE conduct thousands of deportation operations. Palantir has been the target of protests at Stanford, MIT, and other universities over its contracts with ICE. Despite public controversy, Palantir''s government contracts have continued to expand, including a $823 million Army contract in 2021.',
  'https://en.wikipedia.org/wiki/Palantir_Technologies',
  'verified',
  'AI, Surveillance & Digital Rights',
  '2003-01-01',
  '{"category": "Corporate surveillance infrastructure / government data analytics", "importance": "GOLD", "tags": ["Palantir", "Peter Thiel", "CIA", "In-Q-Tel", "NSA", "ICE", "surveillance", "immigration enforcement", "Gotham"]}'
),

-- SPACE & BLACK BUDGET NODES

(
  'Pentagon Missing $35 Trillion / Unaccountable Defense Spending (1998-Present)',
  'pentagon-missing-35-trillion-unaccountable-spending',
  'The U.S. Department of Defense has never passed a financial audit. Since the Inspector General began tracking the problem in 1998, the Pentagon has made unsupported accounting adjustments totaling over $35 trillion — meaning $35 trillion in bookkeeping entries that have no underlying documentation. The Pentagon failed all six audit attempts between 2018 and 2024. Over $2.5 trillion in assets cannot be located.',
  'The U.S. Department of Defense is the only major federal agency that has never passed a financial audit. Federal law (the Chief Financial Officers Act of 1990) requires all federal agencies to submit to annual independent audits. The DoD began attempting formal audits in 2018. It has failed every audit since. A 2021 audit found $2.7 trillion in assets that could not be confirmed to exist. The Inspector General''s office has documented that the DoD made over $35 trillion in unsupported accounting adjustments between 1998 and 2015 — adjustments used to plug bookkeeping gaps without documented transactions. This figure refers to cumulative accounting journal entries, not necessarily missing cash, but reflects a level of financial disorder that prevents any meaningful audit. A 2020 DoD Inspector General report found $715 billion in assets that could not be physically located. Former Deputy Defense Secretary Dov Zakheim acknowledged losing track of $1 trillion in assets while serving in the Pentagon in the early 2000s. The DoD employs over 750 financial systems that cannot communicate with each other. Critics including Senator Bernie Sanders and Senators Chuck Grassley and Rob Portman have called for withholding defense appropriations until the DoD achieves a clean audit opinion.',
  'https://en.wikipedia.org/wiki/United_States_federal_budget',
  'verified',
  'War & Intelligence',
  '2015-07-01',
  '{"category": "Defense accounting fraud / unauditable Pentagon", "importance": "PURE_GOLD", "tags": ["Pentagon", "missing trillions", "unauditable", "defense budget", "DoD audit failure", "black budget", "accounting adjustments"]}'
),

(
  'Area 51 Declassification / Groom Lake (1955-2013)',
  'area-51-declassification-groom-lake',
  'Area 51 — the classified U.S. Air Force installation in Nevada used for testing advanced aircraft including the U-2 and SR-71 — was officially acknowledged by the CIA in a 2013 declassified history. The installation''s existence had been the subject of UFO speculation for decades while the government denied it existed. Declassified documents confirmed the government had lied to the public and even to presidents about activities at the site.',
  'Area 51 — officially the Nevada Test and Training Range, located near Groom Lake, Nevada — is a classified U.S. Air Force facility used for testing highly classified aircraft and weapons systems. The facility was established in 1955 and used to develop the U-2 high-altitude reconnaissance aircraft, the SR-71 Blackbird, the A-12 OXCART, the F-117 stealth fighter, and subsequently other classified programs. The CIA officially acknowledged the existence of Area 51 in a declassified history released in August 2013, confirming that the government had for decades denied the existence of a facility that tens of thousands of defense contractors, military personnel, and aviation observers had seen evidence of. The declassified history confirmed that unexplained aerial phenomena reported by civilians in the area were frequently classified aircraft test flights — the U-2 flew at altitudes that commercial aviation had not reached, and its contrails and reflective surface were often mistaken for unknown craft. Area 51 has been used as a mechanism to dismiss legitimate questions about government secrecy: the conflation of Area 51 with UFO mythology has served to make serious inquiry into classified programs appear ridiculous. The facility continues to operate with approximately 1,500 workers commuted in on unmarked aircraft from Las Vegas.',
  'https://en.wikipedia.org/wiki/Area_51',
  'verified',
  'War & Intelligence',
  '2013-08-16',
  '{"category": "Classified facility / government secrecy / declassified history", "importance": "GOLD", "tags": ["Area 51", "Groom Lake", "CIA", "classified aircraft", "U-2", "SR-71", "government secrecy", "declassified 2013"]}'
),

(
  'Operation Paperclip / Nazi Scientists in U.S. Programs (1945-1990)',
  'operation-paperclip-nazi-scientists-us-programs',
  'Operation Paperclip was a secret U.S. intelligence program that recruited over 1,600 Nazi scientists, engineers, and technicians after WWII for employment in U.S. defense and space programs. The program recruited scientists including Wernher von Braun — the V-2 rocket designer and SS officer who became the director of NASA''s Marshall Space Flight Center. Evidence of subjects'' Nazi Party membership and war crimes was concealed from the State Department and President Truman.',
  'Operation Paperclip was a secret U.S. Office of Strategic Services (OSS) and subsequently Joint Intelligence Objectives Agency (JIOA) program that recruited and resettled over 1,600 Nazi German scientists, engineers, and technicians in the United States after WWII. The program was designed to prevent Nazi expertise from falling into Soviet hands and to leverage German advances in rocketry, aviation, chemical weapons, and other fields. President Truman authorized the program with an explicit prohibition against admitting war criminals or active Nazis. JIOA officials systematically created false employment histories for Paperclip recruits, scrubbing or reclassifying documentation of Nazi Party membership and war crimes to comply with Truman''s restrictions. Wernher von Braun, the V-2 rocket designer, was an SS officer who used slave labor from the Dora concentration camp to build V-2 rockets — a fact known to JIOA but omitted from his dossier. Von Braun became the first director of NASA''s Marshall Space Flight Center and was the chief architect of the Saturn V rocket that carried Apollo astronauts to the moon. Other Paperclip recruits included scientists who had conducted human medical experiments in concentration camps.',
  'https://en.wikipedia.org/wiki/Operation_Paperclip',
  'verified',
  'War & Intelligence',
  '1945-09-01',
  '{"category": "Nazi scientist recruitment / government deception / space program origins", "importance": "GOLD", "tags": ["Operation Paperclip", "Nazi scientists", "Wernher von Braun", "NASA", "SS officers", "war criminals", "space program"]}'
),

(
  'Lockheed Skunk Works / Black Programs (1943-Present)',
  'lockheed-skunk-works-black-programs',
  'Lockheed Martin''s Skunk Works division — created in 1943 by engineer Kelly Johnson — has produced the most advanced classified aircraft in history, including the U-2, SR-71, F-117 stealth fighter, and reportedly numerous current programs. The black budget for unacknowledged Special Access Programs has been estimated at $50-80 billion annually. Ben Rich, Skunk Works director from 1975 to 1991, made multiple public statements suggesting the organization had solved space travel.',
  'Lockheed''s Skunk Works (Advanced Development Programs) was established by chief engineer Clarence Kelly Johnson in Burbank, California in 1943 to produce the XP-80, America''s first operational jet fighter, under extreme secrecy. The division has since produced a series of classified aircraft including the U-2 high-altitude reconnaissance aircraft (1955), the SR-71 Blackbird — still the fastest air-breathing aircraft ever built (1966), and the F-117A Nighthawk — the first operational stealth aircraft (1983). Skunk Works is understood to be producing multiple current classified programs, none publicly acknowledged. The U.S. annual black budget — funding for classified programs not disclosed in regular defense appropriations — is estimated by researchers including Steven Aftergood of the Federation of American Scientists at approximately $50-80 billion annually, based on aggregate defense spending analysis and occasional disclosures. Ben Rich, who succeeded Kelly Johnson as Skunk Works director from 1975 to 1991, made several public statements before his death in 1995 suggesting Skunk Works had developed technology beyond conventional aerospace. In one well-documented quote to a 1993 UCLA engineering alumni gathering, Rich said: We already have the means to travel among the stars, but these technologies are locked up in black projects and it would take an act of God to ever get them out to benefit humanity.',
  'https://en.wikipedia.org/wiki/Skunk_Works',
  'corroborated',
  'War & Intelligence',
  '1943-06-17',
  '{"category": "Black budget / classified aerospace / Skunk Works", "importance": "GOLD", "tags": ["Skunk Works", "Lockheed", "black budget", "classified aircraft", "Ben Rich", "SR-71", "F-117", "Special Access Programs"]}'
)

ON CONFLICT (slug) DO NOTHING;
