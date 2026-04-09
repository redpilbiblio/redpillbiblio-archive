/*
  # Add Media Manipulation Nodes (12 new documents)

  Adds 12 new evidence nodes to the "Media Manipulation & Information Control" pillar:
  77. Operation Mockingbird
  78. Telecom Act 1996 / Media Consolidation
  79. Sinclair Broadcasting / Local News Capture
  80. Pentagon Military Analyst Program
  81. Fox News / Roger Ailes
  82. Jeff Bezos / Washington Post
  83. Judith Miller / NYT Iraq WMD
  84. Gary Webb / Dark Alliance
  85. Julian Assange / WikiLeaks
  86. Manufacturing Consent / Chomsky
  87. Social Media Algorithm Manipulation
  88. Project Censored
*/

INSERT INTO documents (title, slug, description, content, source_url, verification_tier, document_type, date_published, metadata)
VALUES

(
  'Operation Mockingbird / CIA Media Infiltration (1950s-1970s)',
  'operation-mockingbird-cia-media-infiltration',
  'Operation Mockingbird was a CIA program that recruited American journalists and media organizations to serve as intelligence assets, placing CIA operatives at major news outlets and funding friendly foreign media. The program was revealed by the Church Committee in 1975-76. CIA Director William Colby testified that the CIA had over 400 American journalists on its payroll and had infiltrated virtually every major news organization.',
  'Operation Mockingbird refers to a large-scale CIA program to recruit journalists, editors, and publishers as intelligence assets — running from the late 1940s through at least the 1970s. The program was organized by Frank Wisner, head of the Office of Policy Coordination (OPC), which was the CIA''s covert operations division. The Church Committee investigation (1975-76) revealed that the CIA had recruited American journalists to plant stories, gather intelligence, and shape foreign and domestic opinion. CIA Director William Colby testified that at the program''s peak, the CIA had over 400 Americans working as paid assets in print and broadcast journalism, including journalists at the New York Times, CBS, Time, Life, Newsweek, and the Associated Press. The program funded Radio Free Europe and Radio Liberty, placed CIA officers inside foreign wire services, and funded foreign newspapers and magazines. Carl Bernstein''s 1977 Rolling Stone article, based on CIA and Senate documents, identified over 400 journalists who had carried out assignments for the CIA and named specific operations. Although the Church Committee recommended banning the use of journalists as CIA assets, the CIA''s implementing guidelines still permit such relationships with foreign journalists and some domestic contacts.',
  'https://en.wikipedia.org/wiki/Operation_Mockingbird',
  'verified',
  'Media Manipulation & Information Control',
  '1975-11-01',
  '{"category": "CIA media infiltration / propaganda program", "importance": "PURE_GOLD", "tags": ["Operation Mockingbird", "CIA", "media infiltration", "Church Committee", "propaganda", "journalists", "New York Times"]}'
),

(
  'Telecom Act 1996 / Media Consolidation (1996-Present)',
  'telecom-act-1996-media-consolidation',
  'The Telecommunications Act of 1996 — the first major overhaul of U.S. communications law since 1934 — eliminated caps on how many radio stations, television stations, and other media properties a single company could own nationally. The result was dramatic consolidation: Clear Channel went from 40 radio stations to over 1,200 within five years. By 2012, six corporations controlled 90% of all U.S. media.',
  'The Telecommunications Act of 1996 was signed by President Clinton and represented the first comprehensive overhaul of U.S. communications law since the Communications Act of 1934. The law eliminated or dramatically relaxed caps on how many radio stations, television stations, and other media properties a single company could own nationally. Prior to the Act, a single company could own a maximum of 40 radio stations nationally; after, there was no national cap. Clear Channel Communications grew from 40 radio stations to over 1,200 within five years of the Act''s passage — acquiring approximately 43% of the radio industry''s revenue. Television ownership rules were similarly relaxed. The FCC subsequently relaxed newspaper-broadcast cross-ownership rules. By 2012, approximately six corporations — News Corp, Disney, Viacom, Time Warner, CBS Corporation, and Comcast — controlled approximately 90% of all U.S. media, according to Business Insider analysis. Media researchers at the Pew Research Center documented a corresponding decline in local news coverage, investigative journalism, and foreign bureaus. Broadcast news employment declined by approximately 39% between 2008 and 2020 as consolidated ownership prioritized profitability over journalism.',
  'https://en.wikipedia.org/wiki/Telecommunications_Act_of_1996',
  'verified',
  'Media Manipulation & Information Control',
  '1996-02-08',
  '{"category": "Media consolidation / regulatory change", "importance": "GOLD", "tags": ["Telecom Act 1996", "media consolidation", "Clear Channel", "six corporations", "FCC", "local news decline"]}'
),

(
  'Sinclair Broadcasting / Local News Propaganda (2010s-Present)',
  'sinclair-broadcasting-local-news-propaganda',
  'Sinclair Broadcast Group, the largest owner of local television stations in the United States, has been documented forcing its stations to air centrally produced political commentary — including scripts promoting Trump administration positions — while prohibiting local editorial independence. A 2018 deadspin.com compilation of stations reading identical Sinclair-mandated scripts simultaneously went viral and prompted congressional scrutiny.',
  'Sinclair Broadcast Group is the largest owner of local television stations in the United States, reaching approximately 40% of American households. Sinclair has long required its stations to air centrally produced editorial content — including segments called Must Run Content — without local editorial discretion. In 2018, Deadspin published a video compilation showing dozens of local Sinclair-owned news anchors across the country reciting word-for-word identical scripts warning about one-sided reporting and fake news on the internet. The scripts were written by Sinclair corporate and bore close resemblance to language used by President Trump. The compilation went viral with over 6 million views. Congressional Democrats called for FCC hearings. Sinclair''s executive chairman David Smith was previously documented in a 2004 FCC filing to have required stations to air Stolen Honor, a documentary attacking John Kerry''s Vietnam War record, in the weeks before the 2004 presidential election. Sinclair has been involved in multiple FCC proceedings regarding its ownership of stations that exceeded regulatory limits through the use of legally dubious local marketing agreements. Its proposed $3.9 billion acquisition of Tribune Media collapsed in 2018 after an FCC review finding that Sinclair had not been forthright with regulators.',
  'https://en.wikipedia.org/wiki/Sinclair_Broadcast_Group',
  'verified',
  'Media Manipulation & Information Control',
  '2018-04-02',
  '{"category": "Local news capture / right-wing media control", "importance": "GOLD", "tags": ["Sinclair Broadcasting", "local news", "propaganda scripts", "media consolidation", "David Smith", "Must Run Content"]}'
),

(
  'Pentagon Military Analyst Program (2002-2008)',
  'pentagon-military-analyst-program',
  'A 2008 Pulitzer Prize-winning New York Times investigation revealed that the Pentagon had secretly recruited approximately 75 retired military officers — who were simultaneously paid military analysts for networks including CNN, Fox News, NBC, and ABC — as covert propagandists to promote the Iraq War and favorable views of the Bush administration''s defense policies. The analysts were given exclusive briefings and access in exchange for favorable commentary.',
  'In April 2008, New York Times reporter David Barstow published a Pulitzer Prize-winning investigation revealing that the Pentagon had secretly recruited approximately 75 retired military officers — who were simultaneously employed as paid military analysts at CNN, Fox News, NBC, ABC, MSNBC, and other networks — as informal ambassadors for the Bush administration''s Iraq War policies. The analysts were given exclusive background briefings by Pentagon officials, access to classified information, and private meetings with Donald Rumsfeld, in exchange for delivering Pentagon-approved talking points on television. Barstow''s investigation, based on thousands of pages of documents obtained through FOIA, revealed that the analysts were simultaneously working as lobbyists or consultants for defense contractors that benefited from the Iraq War. The analysts almost universally supported the Iraq invasion on air and frequently disputed or minimized reports of problems with the war effort. The program was organized and overseen by the Pentagon''s public affairs office. Networks initially resisted disclosing the relationships between their analysts and defense contractors. The Pentagon Inspector General investigated and found the program violated Department of Defense directives, though no personnel were disciplined.',
  'https://en.wikipedia.org/wiki/Pentagon_pundit_scandal',
  'verified',
  'Media Manipulation & Information Control',
  '2008-04-20',
  '{"category": "Pentagon propaganda / embedded media analysts", "importance": "PURE_GOLD", "tags": ["Pentagon military analysts", "Iraq War propaganda", "network news", "Barstow", "Pulitzer Prize", "Defense contractor conflicts"]}'
),

(
  'Fox News / Roger Ailes Political Machine (1996-2017)',
  'fox-news-roger-ailes-political-machine',
  'Roger Ailes founded Fox News in 1996 after a career as a Republican political consultant — advising Nixon, Reagan, and George H.W. Bush. Internal documents released after Ailes''s death and in subsequent litigation documented that Fox News operated as a political operation coordinating with the Republican Party and the Trump White House, rather than as a journalism organization. Dominion Voting Systems'' $787.5 million defamation settlement included Fox admission that hosts broadcast claims they knew were false.',
  'Roger Ailes founded Fox News Channel in 1996 with backing from Rupert Murdoch. Ailes had previously worked as a media consultant for Richard Nixon (1968), Ronald Reagan, and George H.W. Bush. Documents released after Ailes''s death and in subsequent litigation established that Fox News operated in coordination with Republican political interests. Texts and emails released in Dominion Voting Systems'' defamation lawsuit against Fox News revealed that Fox hosts including Tucker Carlson, Sean Hannity, and Laura Ingraham privately expressed disbelief or contempt for the Trump 2020 election fraud claims that they were broadcasting to their audience. Murdoch privately expressed that he wished Fox could have been stronger in calling the election for Biden. Fox News agreed to pay $787.5 million to settle Dominion''s lawsuit in April 2023 — without issuing any on-air correction or apology. Internal communications showed Fox executives and hosts discussing the business consequences of contradicting Trump''s election fraud narrative (losing viewers to Newsmax and OAN) as the primary reason for continuing to broadcast claims they knew were false.',
  'https://en.wikipedia.org/wiki/Fox_News',
  'verified',
  'Media Manipulation & Information Control',
  '2023-04-18',
  '{"category": "Partisan media / election disinformation / Dominion settlement", "importance": "PURE_GOLD", "tags": ["Fox News", "Roger Ailes", "Dominion settlement", "election fraud lies", "Tucker Carlson", "Rupert Murdoch", "defamation"]}'
),

(
  'Jeff Bezos / Washington Post / Amazon Conflicts (2013-Present)',
  'jeff-bezos-washington-post-amazon-conflicts',
  'Amazon founder Jeff Bezos purchased the Washington Post in 2013 for $250 million. Critics have documented that Washington Post coverage of Amazon and of issues important to Bezos''s business interests has been favorable while coverage of Amazon critics — including Senator Bernie Sanders — has been documented as disproportionately negative. Bezos also holds a $600 million CIA cloud computing contract through Amazon Web Services.',
  'Jeff Bezos purchased the Washington Post in August 2013 for $250 million in a personal transaction, separate from Amazon. The Post had previously been owned by the Graham family since 1933. Bezos purchased the Post after Amazon Web Services (AWS) won a $600 million CIA cloud computing contract in 2013 — a contract that was central to the intelligence community''s digital infrastructure buildout. Critics including media analysts and journalism researchers have documented patterns in Post coverage that appear to reflect Bezos''s business interests: coverage of Amazon labor practices, antitrust concerns, and corporate accountability has been described as systematically less critical than coverage by other major outlets; coverage of political figures who criticized Amazon — particularly Senator Bernie Sanders, whose 2016 and 2020 presidential campaigns emphasized corporate accountability — has been documented by media critics as disproportionately negative. Former Post journalist Spencer Ackerman and others have raised concerns about the inherent conflicts of interest in a major newspaper being owned by a billionaire who simultaneously holds massive government contracts including intelligence community work.',
  'https://en.wikipedia.org/wiki/The_Washington_Post',
  'corroborated',
  'Media Manipulation & Information Control',
  '2013-08-05',
  '{"category": "Billionaire media ownership / conflicts of interest", "importance": "GOLD", "tags": ["Jeff Bezos", "Washington Post", "Amazon", "CIA contract", "media ownership", "conflicts of interest", "Bernie Sanders coverage"]}'
),

(
  'Judith Miller / New York Times / Iraq WMD Propaganda (2002-2003)',
  'judith-miller-nyt-iraq-wmd-propaganda',
  'New York Times reporter Judith Miller published a series of front-page stories in 2002-2003 claiming Iraq possessed weapons of mass destruction, citing unnamed administration sources — including Ahmad Chalabi, an Iraqi exile with financial interests in a U.S. invasion. The stories helped build public support for the Iraq War. After no WMD were found, the Times issued an extraordinary editors'' note acknowledging the coverage was insufficiently skeptical.',
  'In the months before the 2003 U.S. invasion of Iraq, New York Times reporter Judith Miller published a series of influential front-page stories asserting that Iraq possessed weapons of mass destruction, based primarily on information from Iraqi defectors connected to Ahmed Chalabi''s Iraqi National Congress and from anonymous U.S. government officials promoting the case for invasion. Miller''s stories appeared to corroborate the Bush administration''s WMD claims with the implied authority of Times journalism. After the invasion produced no WMD, the New York Times published an extraordinary editorial note on May 26, 2004, acknowledging that its pre-war Iraq coverage — including Miller''s stories — was insufficiently skeptical and over-relied on sources with agendas. The note did not name Miller. Chalabi, the primary source for many Miller stories, was a convicted fraudster who had been paid approximately $300,000 per month by the U.S. government and had financial interests in an Iraq War that would make him a political figure in post-Saddam Iraq. Miller was later imprisoned for 85 days for refusing to testify to a grand jury about the leak of CIA officer Valerie Plame''s identity, in a case connected to the same Iraq War political environment.',
  'https://en.wikipedia.org/wiki/Judith_Miller',
  'verified',
  'Media Manipulation & Information Control',
  '2004-05-26',
  '{"category": "Stenographic journalism / war propaganda / NYT failure", "importance": "PURE_GOLD", "tags": ["Judith Miller", "New York Times", "Iraq WMD", "Ahmed Chalabi", "war propaganda", "NYT editors note", "journalism failure"]}'
),

(
  'Gary Webb / Dark Alliance / CIA Drug Trafficking (1996-2004)',
  'gary-webb-dark-alliance-cia-drug-trafficking',
  'Gary Webb''s 1996 San Jose Mercury News series Dark Alliance documented that the CIA-backed Contra network funneled crack cocaine into South Los Angeles in the 1980s, fueling the crack epidemic. Major newspapers mounted a coordinated attack on Webb''s reporting. Webb was ultimately vindicated by a 1998 CIA Inspector General report confirming the agency had known about and protected drug operations connected to the Contras. Webb died in 2004 from two gunshot wounds to the head — ruled a suicide.',
  'In August 1996, San Jose Mercury News reporter Gary Webb published a three-part series titled Dark Alliance documenting that the CIA-backed Contra network — the anti-Sandinista rebels in Nicaragua — had funneled large quantities of crack cocaine into South Los Angeles through drug dealers Ricky Ross and the Blandon-Meneses network, with proceeds funding Contra operations. The series included documented evidence of CIA knowledge and protection of the drug trafficking. Within months, the Los Angeles Times, Washington Post, and New York Times published lengthy rebuttals of Webb''s reporting — unusual instances of major newspapers mounting coordinated attacks on a competitor''s work. Webb was demoted and subsequently resigned from the Mercury News. In 1998, the CIA Inspector General published a report that acknowledged the CIA had been aware of and concealed from the Justice Department dozens of instances of drug trafficking by Contra-connected organizations in the 1980s. The report vindicated the core of Webb''s reporting. Webb''s career never recovered. On December 10, 2004, Webb was found dead from two gunshot wounds to the head. The coroner ruled it a suicide — a conclusion that has been disputed by Webb''s family and journalists who have studied the case.',
  'https://en.wikipedia.org/wiki/Gary_Webb',
  'corroborated',
  'Media Manipulation & Information Control',
  '1996-08-18',
  '{"category": "Journalist persecution / CIA drug trafficking / media assassination", "importance": "PURE_GOLD", "tags": ["Gary Webb", "Dark Alliance", "CIA", "crack cocaine", "Contras", "media attack", "suspicious death", "vindicated"]}'
),

(
  'Julian Assange / WikiLeaks Prosecution (2006-Present)',
  'julian-assange-wikileaks-prosecution',
  'Julian Assange founded WikiLeaks in 2006, publishing classified documents exposing U.S. war crimes in Iraq and Afghanistan (Collateral Murder video), global diplomatic cables, CIA surveillance tools (Vault 7), and other government and corporate secrets. Assange was confined to the Ecuadorian Embassy in London from 2012 to 2019, then imprisoned in Belmarsh Prison. After 14 years of legal proceedings, Assange pleaded guilty to a single espionage count and was released in 2024.',
  'Julian Assange is an Australian journalist and publisher who founded WikiLeaks in 2006. WikiLeaks published a series of landmark disclosures including: the Collateral Murder video (2010) — classified footage of a U.S. Army helicopter crew killing 11 civilians in Baghdad, including two Reuters journalists, while laughing; 400,000 Iraq War logs documenting previously unreported civilian casualties; 250,000 U.S. diplomatic cables; the Guantanamo Files; and the Vault 7 CIA surveillance tools documents. The U.S. government argued that these publications endangered intelligence sources; journalism organizations including the Freedom of the Press Foundation argued they represented legitimate publication of documents revealing government wrongdoing. Assange spent seven years in the Ecuadorian Embassy in London under asylum protection, then was arrested in April 2019 and imprisoned in Belmarsh Prison in the UK while fighting a U.S. extradition request. The U.S. government sought extradition under the Espionage Act with a potential sentence of 175 years. After 14 years of legal proceedings, Assange pleaded guilty to a single count of unlawfully obtaining and disclosing national defense information and was released in June 2024 as time served. The case has been described by press freedom organizations as the most dangerous prosecution of a publisher in U.S. history.',
  'https://en.wikipedia.org/wiki/Julian_Assange',
  'verified',
  'Media Manipulation & Information Control',
  '2010-04-05',
  '{"category": "Press freedom / publisher persecution / government secrecy", "importance": "PURE_GOLD", "tags": ["Julian Assange", "WikiLeaks", "Collateral Murder", "Espionage Act", "press freedom", "Vault 7", "Belmarsh Prison"]}'
),

(
  'Manufacturing Consent / Propaganda Model (1988-Present)',
  'manufacturing-consent-propaganda-model',
  'Edward Herman and Noam Chomsky''s 1988 book Manufacturing Consent proposed a propaganda model of mass media, arguing that U.S. corporate media systematically filters news through five mechanisms — ownership, advertising, sourcing, flak, and anti-communism — to produce narratives favorable to elite interests. Forty years of subsequent media research has broadly supported the model''s predictions.',
  'Manufacturing Consent: The Political Economy of the Mass Media (1988) by Edward Herman and Noam Chomsky presented a structural analysis of U.S. corporate media, arguing that news content is systematically shaped by five filters: (1) the size, concentrated ownership, and profit orientation of dominant media firms; (2) advertising as the primary income source, creating editorial pressure to avoid content that displeases advertisers; (3) reliance on government, business, and experts as primary sources, creating structural deference to official narratives; (4) flak — organized criticism and legal or economic threats used to discipline deviant reporting; and (5) anti-communism (updated to anti-terrorism) as a primary control mechanism. Herman and Chomsky argued this model predicted systematic propaganda for state and corporate power, not through overt censorship but through structural incentives and naturalized assumptions. Subsequent media research — including studies of Iraq War coverage, climate change reporting, labor coverage, and electoral coverage — has broadly supported the model''s predictions. The book was adapted into a documentary film in 1992.',
  'https://en.wikipedia.org/wiki/Manufacturing_Consent:_The_Political_Economy_of_the_Mass_Media',
  'verified',
  'Media Manipulation & Information Control',
  '1988-01-01',
  '{"category": "Structural media analysis / propaganda theory", "importance": "GOLD", "tags": ["Manufacturing Consent", "Noam Chomsky", "Edward Herman", "propaganda model", "corporate media", "media criticism"]}'
),

(
  'Social Media Algorithm Manipulation / Facebook Papers (2010s-Present)',
  'social-media-algorithm-manipulation-facebook-papers',
  'Internal Facebook documents published by whistleblower Frances Haugen in 2021 revealed that the company knew its algorithms amplified anger, division, and misinformation because such content generated more engagement — and had repeatedly rejected internal research recommendations to change the algorithms because doing so would reduce growth and revenue. Facebook''s own data showed Instagram caused body image harm in teenage girls; the company suppressed this research.',
  'In October 2021, former Facebook product manager Frances Haugen leaked tens of thousands of pages of internal Facebook documents to the Wall Street Journal and a congressional subcommittee. The documents — which journalists called the Facebook Papers — revealed that Facebook''s own researchers had documented numerous harms the platform caused and that the company had systematically declined to implement fixes. Key findings: Facebook''s algorithms rewarded engagement, and internal research showed divisive, angry, and sensational content generated the most engagement — meaning the algorithm was specifically amplifying the most harmful content; a 2019 internal presentation on political polarization concluded Facebook had created an angry, divisive world and recommended algorithm changes that would have reduced the problem but were rejected because they reduced engagement metrics; internal Instagram research showed that 13% of British teenage girls said Instagram made their thoughts of suicide more frequent, and 32% said that when they felt bad about their bodies, Instagram made them feel worse — research the company suppressed from publication; and the company repeatedly exempted high-profile politicians and other XCheck whitelisted accounts from its normal content enforcement rules.',
  'https://en.wikipedia.org/wiki/Facebook_Papers',
  'verified',
  'Media Manipulation & Information Control',
  '2021-10-03',
  '{"category": "Social media harm / algorithm manipulation / internal cover-up", "importance": "PURE_GOLD", "tags": ["Facebook Papers", "Frances Haugen", "Meta", "algorithm manipulation", "Instagram harm", "teenage girls", "engagement over safety"]}'
),

(
  'Project Censored / Systematic News Suppression (1976-Present)',
  'project-censored-systematic-news-suppression',
  'Project Censored, founded in 1976 at Sonoma State University, systematically documents the most important underreported news stories each year through an annual review process involving students, faculty, and journalists. Its annual list of censored stories has documented decades of systematic suppression of news about corporate wrongdoing, government misconduct, and military actions. Academic research on Project Censored''s lists has found they consistently predict major news cycles 5-10 years later.',
  'Project Censored is a media research organization founded in 1976 at Sonoma State University by Professor Carl Jensen. Each year, Project Censored publishes an annual list of the 25 most important underreported news stories of the previous year, based on a systematic review process involving faculty, students, and journalists assessing original source documentation and coverage levels. The organization documents systematic suppression of news through five mechanisms: corporate ownership of news outlets; dependence on corporate advertising revenue; sourcing of news from official sources; editorial self-censorship to avoid controversy; and structural constraints on journalists. Academic researchers who have analyzed Project Censored''s historical lists have found that stories on the list — which received minimal coverage at the time — frequently become major news stories 5 to 10 years later, after they can no longer be suppressed. Examples include early Project Censored coverage of the AIDS epidemic, corporate contributions to political campaigns, the CIA''s involvement in drug trafficking, and NSA surveillance programs — all of which became major news stories years after Project Censored had identified the underlying reporting.',
  'https://en.wikipedia.org/wiki/Project_Censored',
  'verified',
  'Media Manipulation & Information Control',
  '1976-01-01',
  '{"category": "Systematic news suppression / media criticism", "importance": "GOLD", "tags": ["Project Censored", "news suppression", "media criticism", "censorship", "underreported stories", "Carl Jensen"]}'
)

ON CONFLICT (slug) DO NOTHING;
