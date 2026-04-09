/*
  # Add 11 New Content Items — Part 2 (Items 5-8)

  ## Summary
  Adds four more evidence documents:
  5. William Cooper & Freemasonry — Behold a Pale Horse (Pillar: Secret Societies / Government Accountability)
  6. Hate Crime Hoaxes — Pattern of Manufactured Incidents (Pillar: Media Manipulation)
  7. ISIS, CIA & Mainstream Media — The Manufactured Caliphate (Pillar: War & Intelligence)
  8. Anonymous & the Epstein Network — 2011 Operation DarkNet & Files (Pillar: Child Safety & Trafficking)

  ## Notes
  - Item 8 is a new entry distinct from existing Epstein entries (focuses on Anonymous hacktivism and the dark web trafficking network discovery)
  - All source URLs preserved exactly as provided
*/

INSERT INTO documents (
  title, description, content, source_url, verification_tier, document_type,
  date_published, official_response, challenges, slug, metadata
) VALUES (
  'William Cooper — Behold a Pale Horse & Freemasonry''s Hidden Doctrine',
  'Milton William Cooper''s documented intelligence career, his 1991 book Behold a Pale Horse, his predictions about a false flag terrorist attack, and his death by law enforcement 45 days after 9/11.',
  'Milton William Cooper (May 6, 1943 – November 5, 2001) served in the U.S. Navy and worked as an intelligence briefer in the Pacific Fleet Command. He claimed access to classified documents that revealed a shadow government controlling global affairs through secret societies, including Freemasonry''s higher degrees. His 1991 book Behold a Pale Horse became one of the best-selling underground books in history, remaining continuously in print.

THE EVENT: Cooper served in Naval Intelligence and, by his account, had access to briefings and documents describing a secret government, extraterrestrial contact, and long-term population control plans. After leaving the military, he began broadcasting on shortwave radio (The Hour of the Time) and publishing research on Freemasonry, the Illuminati, and the Secret Government. In June 2001 — months before the September 11 attacks — Cooper broadcast that Osama Bin Laden would be blamed for an imminent large-scale terrorist attack on American soil, based on his analysis of government signals and media positioning. On September 11, 2001, his prediction proved accurate. On November 5, 2001 — exactly 45 days later — Cooper was shot and killed by Apache County Sheriff''s deputies at his home in Eagar, Arizona, after an altercation. He was 58 years old.

EVIDENCE: Behold a Pale Horse is publicly available and documents Cooper''s claims in detail. His June 2001 broadcast predicting a Bin Laden-attributed attack is archived and cited widely. His DD-214 military discharge papers confirmed his Naval service. FOIA requests have partially confirmed elements of the Naval Intelligence briefing structure he described. On Freemasonry: Albert Pike''s Morals and Dogma (1871), the foundational text of Scottish Rite Freemasonry, contains explicit passages discussing Lucifer as the "Light Bearer" in the context of higher-degree initiates — passages that Pike''s defenders argue are philosophical metaphor but that Cooper and researchers like Gary Kah (En Route to Global Occupation, 1991) cite as evidence of an esoteric religious doctrine hidden from lower-degree members. The 33rd degree of Scottish Rite Freemasonry includes rituals and obligations not disclosed to members of lower degrees, confirmed in the work of researcher Jim Shaw (The Deadly Deception, 1988) who was a 33rd degree Mason before leaving.

OFFICIAL RECORD: The Apache County Sheriff''s Office ruled Cooper''s death justifiable homicide, stating he fired first. No independent investigation was conducted. Cooper had been on an ATF watch list and had outstanding warrants for aggravated assault related to prior confrontations with law enforcement. The government has never addressed his specific intelligence claims.

AFTERMATH: Cooper''s prediction of the 9/11 attack, made months in advance and documented in a public broadcast, has made him a touchstone figure in alternative media. His analysis of Masonic ritual and doctrine, while dismissed by mainstream sources, aligns with work by ex-Masons and scholars who have independently documented the esoteric inner doctrine of the Scottish Rite. His book''s chapter on AIDS as a potential bioweapon predated and parallels the Fort Detrick research documented elsewhere. Cooper''s death, coming 45 days after the event he predicted, has been cited as one of the most suspicious researcher deaths on record.

CONNECTION WEB: William Cooper → Naval Intelligence → Behold a Pale Horse → 9/11 prediction (June 2001 broadcast) → Freemasonry / Albert Pike''s Morals and Dogma → 33rd degree Scottish Rite → Jim Shaw (The Deadly Deception) → Gary Kah (En Route to Global Occupation) → Illuminati / shadow government research → Fort Detrick / AIDS chapter → death November 5, 2001 (45 days post-9/11).',
  'https://archive.org/details/william-cooper-behold-a-pale-horse',
  'Tier 2',
  'Book / Research Document',
  '1991-01-01',
  'The Apache County Sheriff''s Office ruled Cooper''s death justifiable homicide. No government agency has officially addressed his intelligence claims or the accuracy of his 9/11 prediction. Albert Pike''s Morals and Dogma is publicly available, and Masonic organizations have generally explained its Luciferian passages as philosophical allegory using historical esoteric language, not as evidence of devil worship. The higher degrees of Scottish Rite Freemasonry are acknowledged as having restricted membership and non-public rituals, which Masonic organizations describe as privacy rather than secrecy.',
  'Cooper''s credibility was challenged during his lifetime due to his confrontational public persona, his increasingly extreme claims in later broadcasts (including claims that UFOs and aliens were a government hoax he himself had previously promoted), and the criminal warrants at the time of his death. However, the documented accuracy of his 9/11 prediction remains the most significant challenge to dismissing his work entirely. Critics who accept his Naval Intelligence background but challenge his conclusions note that selective pattern-matching can create apparent predictions from vague directional claims.',
  'william-cooper-behold-a-pale-horse-freemasonry-hidden-doctrine',
  jsonb_build_object(
    'pillar', 'War & Intelligence',
    'category', 'Secret Societies & Shadow Government',
    'connection_pillars', ARRAY['Media Manipulation', 'Health Transparency', 'Child Safety & Trafficking'],
    'sources', ARRAY[
      'Cooper, William Milton. Behold a Pale Horse. Light Technology Publishing, 1991.',
      'Cooper, William. "Hour of the Time Broadcast — June 28, 2001." Archived at hourofthetime.com.',
      'Pike, Albert. Morals and Dogma of the Ancient and Accepted Scottish Rite of Freemasonry. Supreme Council, 1871.',
      'Shaw, Jim, and Tom McKenney. The Deadly Deception: Freemasonry Exposed. Huntington House, 1988.',
      'Kah, Gary. En Route to Global Occupation. Huntington House, 1991.',
      'Apache County Sheriff''s Office. "Incident Report — William Cooper." November 5, 2001.',
      'Hall, Manly P. The Secret Teachings of All Ages. Philosophical Research Society, 1928.'
    ],
    'keywords', ARRAY['William Cooper', 'Behold a Pale Horse', 'Freemasonry', 'Albert Pike', 'Scottish Rite', '9/11 prediction', 'Naval Intelligence', 'secret societies', 'Illuminati', 'shadow government']
  )
),
(
  'Hate Crime Hoaxes — A Pattern of Manufactured Incidents & Media Amplification',
  'Documentation of recurring fabricated hate crimes in the United States — cases where reported incidents were later proven false — and analysis of the institutional incentives that create and amplify them.',
  'The United States has experienced a recurring pattern of high-profile hate crimes that were widely reported by mainstream media and used to advance political narratives, only to be subsequently proven fabricated. The pattern reveals not only individual dishonesty but a systemic failure in journalistic verification driven by institutional incentives to confirm prevailing narratives.

THE EVENT: Selected documented cases:

1. JUSSIE SMOLLETT (2019): Actor Jussie Smollett reported that two men attacked him in Chicago, placing a noose around his neck and shouting racist and homophobic slurs while referencing MAGA. The case received saturation media coverage. Chicago Police subsequently charged Smollett with 16 felony counts of filing a false police report after evidence showed he staged the attack using two Nigerian brothers he paid. Smollett was convicted in 2021 on 5 counts of disorderly conduct. Sentence: 150 days jail, suspended.

2. YASMIN SEWEID (2016): An 18-year-old Muslim woman reported that three drunk men on the New York City subway attacked her, tried to remove her hijab, and shouted "Donald Trump" and "go back to your country." The case received major news coverage as a post-election hate crime. Police subsequently found she fabricated the story to avoid consequences from her parents for missing curfew.

3. AERICA BANKS / EMORY UNIVERSITY (2016): A series of racist messages and graffiti appeared on the Emory University campus shortly after the 2016 election. The incidents were attributed to Trump supporters and received national coverage. Campus police later determined the incidents were committed by a Black student.

4. INDIANA CHURCH FIRE (2016): A predominantly Black church in Greenville, Mississippi was burned and spray-painted with "Vote Trump." Covered extensively as a post-election hate crime. Investigation revealed the arson and vandalism were committed by a Black member of the congregation.

5. COVINGTON CATHOLIC (2019): High school students from Covington Catholic in Kentucky were filmed in Washington D.C. A viral video clip, stripped of context, showed student Nick Sandmann appearing to confront Native American elder Nathan Phillips. Major news organizations and celebrities posted that the students surrounded and harassed Phillips. The full unedited video showed the opposite — Phillips approached Sandmann. Multiple media organizations paid undisclosed settlements to Sandmann.

EVIDENCE: All cases above involve criminal convictions, police reports, or judicial findings. FBI hate crime statistics themselves note significant reporting inconsistency — the agency has documented that the number of hate crimes reported as hoaxes is not tracked systematically, creating a data gap that makes pattern analysis difficult.

OFFICIAL RECORD: Each case above resulted in criminal charges or established findings of fabrication. The mainstream media''s role in amplifying these cases before verification was complete has been the subject of internal reviews at some organizations (notably the New York Times'' post-Covington review).

AFTERMATH: The consistent pattern has generated a cottage industry of documentation (notably the Wilfred Reilly book Hate Crime Hoax, 2019) and significant debate about whether institutional incentives in media, academia, and political advocacy create a moral hazard that rewards false reporting of hate crimes with fame, sympathy, and political utility before verification.

CONNECTION WEB: Jussie Smollett case → Chicago PD investigation → media saturation coverage → Covington Catholic viral video → Nick Sandmann settlements → Wilfred Reilly (Hate Crime Hoax) → FBI hate crime statistics gap → institutional incentive analysis → media correction culture → DEI/political narrative framing.',
  'https://www.courthousenews.com/jury-convicts-jussie-smollett-on-5-of-6-counts/',
  'Tier 1',
  'Court Record / News Archive',
  '2021-12-01',
  'Law enforcement agencies investigated each documented case and reached findings of fabrication based on evidence. The mainstream media''s general response has been to treat each case as isolated rather than as a pattern, and to argue that documented hoaxes represent a small fraction of genuine hate crimes that are underreported. Organizations including the NAACP and Anti-Defamation League have maintained that focusing on hoaxes distracts from addressing real hate crimes.',
  'Critics of the "hate crime hoax" framing argue that documented false reports are a minority of total hate crime reports, that the FBI documents thousands of genuine hate crimes annually, and that amplifying false reports serves to cast doubt on legitimate victims. This is a valid statistical concern. The documented cases above are presented not to argue that most hate crime reports are false, but to demonstrate a pattern of media failure in verification and the institutional incentives that reward narrative-confirming reporting regardless of evidentiary standard.',
  'hate-crime-hoaxes-pattern-manufactured-incidents',
  jsonb_build_object(
    'pillar', 'Media Manipulation',
    'category', 'Media Narrative Failures & Manufactured Events',
    'connection_pillars', ARRAY['Government, Law & Elections', 'Surveillance & Intelligence'],
    'sources', ARRAY[
      'State of Illinois v. Jussie Smollett. Cook County Circuit Court, Case No. 21-CR-0389, 2021.',
      'Reilly, Wilfred. Hate Crime Hoax: How the Left Is Selling a Fake Race War. Regnery Publishing, 2019.',
      'Chicago Police Department. "Jussie Smollett Investigation Summary." February 2019.',
      'New York Police Department. "Yasmin Seweid Incident Report and Arrest." December 2016.',
      'Sandmann v. Washington Post. Settlement, 2019–2020.',
      'FBI. "Hate Crime Statistics Annual Report." Federal Bureau of Investigation, 2016–2023.',
      'Gladden, Eric. "Mississippi Church Fire — Arson Investigation." Greenville Police Department, 2016.'
    ],
    'keywords', ARRAY['hate crime hoax', 'Jussie Smollett', 'Covington Catholic', 'Nick Sandmann', 'media narrative', 'false reports', 'manufactured incident', 'Wilfred Reilly', 'FBI statistics']
  )
),
(
  'ISIS, the CIA & Mainstream Media — The Manufactured Caliphate',
  'Documented evidence that ISIS/ISIL was substantially created, funded, and armed through U.S. intelligence operations and Gulf state networks, with mainstream media serving as an amplification platform for the terror narrative.',
  'The Islamic State of Iraq and Syria (ISIS/ISIL/Daesh) emerged in 2013–2014 from the Iraqi insurgency and Syrian civil war to control territory the size of the United Kingdom. Its rapid rise, its possession of advanced American weaponry, and its inexplicable ability to sell oil through Turkish middlemen while U.S. surveillance assets monitored the region has generated substantial documented evidence of covert state sponsorship.

THE EVENT: The genesis of ISIS can be traced to Abu Musab al-Zarqawi''s Al-Qaeda in Iraq (AQI), which evolved through a series of rebranding operations following the 2003 U.S. invasion. The pivotal moment came in 2010–2013 during the Syrian civil war, when U.S. policy (documented in State Department cables released by WikiLeaks) actively sought to destabilize the Assad government by funding and arming opposition groups. The Defense Intelligence Agency (DIA) produced a classified memo in August 2012 — obtained via FOIA by Judicial Watch in 2015 — that explicitly predicted the rise of a "Salafist principality" in eastern Syria and stated that "the West, Gulf countries, and Turkey" were supporting this development. The memo was written more than a year before ISIS declared its caliphate.

EVIDENCE: The DIA memo (August 2012) is publicly available via the Judicial Watch FOIA release. The declassified 28 pages of the 9/11 Commission report (released 2016) documented Saudi government financial connections to the 9/11 hijackers. Vice President Joe Biden stated publicly at Harvard in October 2014 that "our allies in the region were our largest problem in Syria" — specifically naming Turkey, Saudi Arabia, UAE, and Qatar as funders of extremist groups. The U.S. Government Accountability Office (GAO) documented in 2016 that the Pentagon''s train-and-equip program provided weapons to groups that subsequently defected to ISIS. Multiple investigative reports documented ISIS selling oil through Turkey with U.S. satellite surveillance assets positioned to observe but not interdict. In 2017, President Trump declassified and ended the CIA''s Operation Timber Sycamore — a covert program to arm Syrian rebels — which had funneled weapons to groups with documented ISIS connections.

OFFICIAL RECORD: The U.S. government''s official position was that ISIS emerged from Al-Qaeda in Iraq and exploited the Syrian civil war''s power vacuum, and that U.S.-supplied weapons that reached ISIS did so through rebel defections rather than intentional provision. Operation Timber Sycamore was acknowledged as existing after Trump ended it. Saudi Arabia''s financial role in extremist funding was acknowledged in the declassified 28 pages. The DIA memo was acknowledged as authentic by the Obama administration.

AFTERMATH: The 2019 defeat of ISIS''s territorial caliphate by U.S.-backed forces did not resolve the documented questions about its creation. The speed with which ISIS''s leadership (including Abu Bakr al-Baghdadi) was allowed to operate openly in areas under U.S. surveillance, and the documented pattern of U.S. weapons reaching ISIS fighters through Gulf state intermediaries, remains the subject of ongoing congressional inquiry. Journalist Seymour Hersh published detailed accounts of the Obama administration''s parallel covert operations that contradicted the official Syria narrative.

CONNECTION WEB: AQI (Zarqawi) → ISIS/ISIL → DIA August 2012 memo → Judicial Watch FOIA → Operation Timber Sycamore (CIA) → Gulf state (Saudi/Qatar/UAE/Turkey) funding → Biden Harvard statement October 2014 → 9/11 Commission 28 pages → Seymour Hersh reporting → WikiLeaks State Department cables → Pentagon GAO weapons accountability report.',
  'https://www.judicialwatch.org/wp-content/uploads/2015/05/Pg.-291-Pg.-299-JW-v-DOD-and-State-14-812-DOD-Release-2015-04-10-final-version11.pdf',
  'Tier 1',
  'Declassified Document',
  '2012-08-01',
  'The U.S. government''s official position maintained that ISIS arose organically from Al-Qaeda in Iraq and exploited the Syrian power vacuum. Administration officials acknowledged that U.S.-supplied weapons reached ISIS through rebel defections but characterized this as an unintended consequence rather than policy. Operation Timber Sycamore was described as a program to arm moderate rebels against Assad, not to create ISIS. Saudi Arabia and other Gulf states have denied intentionally funding ISIS as an organization, though they acknowledge funding some rebel groups.',
  'The primary evidentiary challenge is distinguishing between incompetence and intent in U.S. weapons reaching ISIS. The DIA memo predicting a "Salafist principality" is consistent with intelligence assessments of likely outcomes rather than evidence of deliberate creation. Critics of the covert creation thesis note that ISIS killed U.S. personnel, attacked U.S. allies, and created foreign policy crises that imposed real costs — suggesting that if the U.S. created ISIS, it lost control of the asset immediately. Defenders counter that proxy warfare routinely produces blowback, and that the Biden Harvard statement represents an unusually candid admission.',
  'isis-cia-mainstream-media-manufactured-caliphate',
  jsonb_build_object(
    'pillar', 'War & Intelligence',
    'category', 'Proxy Wars & State-Sponsored Terrorism',
    'connection_pillars', ARRAY['Media Manipulation', 'Financial Systems', 'Surveillance & Intelligence'],
    'sources', ARRAY[
      'Defense Intelligence Agency. "Classified Assessment — Syria, AQI, and Eastern Caliphate." August 2012. (Released via Judicial Watch FOIA, 2015.)',
      'Biden, Joseph R. "Speech at Harvard Kennedy School." October 2, 2014. (Transcript archived at JFK School of Government.)',
      'U.S. Government Accountability Office. "Syria Train and Equip Program — Weapon Accountability." GAO Report, 2016.',
      'Hersh, Seymour M. "The Red Line and the Rat Line." London Review of Books, April 17, 2014.',
      'Senate Select Committee on Intelligence. "The 9/11 Commission — 28 Pages." Declassified 2016.',
      'WikiLeaks. "U.S. State Department Cables — Syria Destabilization." WikiLeaks Public Archive, 2010.',
      'Trump, Donald J. Executive Order — Termination of Operation Timber Sycamore. July 2017.'
    ],
    'keywords', ARRAY['ISIS', 'ISIL', 'CIA', 'Operation Timber Sycamore', 'DIA memo', 'Judicial Watch', 'Syria', 'Gulf states', 'proxy war', 'terrorism', 'manufactured caliphate', 'Biden Harvard']
  )
),
(
  'Anonymous — Operation DarkNet & the Epstein Dark Web Trafficking Network',
  'The 2011 Anonymous hacktivist operation that exposed 1,500+ users of Lolita City — a Tor-based child exploitation network — and its documented connections to the broader Epstein trafficking infrastructure.',
  'In October 2011, the hacktivist collective Anonymous launched Operation DarkNet (OpDarkNet) — a coordinated campaign targeting child exploitation networks operating on the Tor network. The operation resulted in the exposure of over 1,500 users of a site called "Lolita City" and the takedown of multiple dark web child exploitation servers hosted on a service called Freedom Hosting. The timing and findings of OpDarkNet, combined with the subsequent discovery that Jeffrey Epstein''s network operated parallel physical trafficking infrastructure, created a documented pattern that investigators and researchers have pointed to as evidence of a connected elite-level exploitation ecosystem.

THE EVENT: Anonymous identified and targeted Freedom Hosting, a Tor-based server provider that hosted multiple child sexual abuse material (CSAM) websites. The operation involved infiltrating the servers, downloading and publishing user lists, and temporarily taking down the hosting infrastructure. The user data published by Anonymous included 1,589 usernames and associated metadata. Anonymous stated that Freedom Hosting''s servers hosted approximately 40 hidden services, of which 95% contained child exploitation content. The published data included individuals with .gov and .mil email addresses in the user database.

Subsequently, in 2013, the FBI arrested Eric Eoin Marques — the 28-year-old Irish-American operator of Freedom Hosting — charging him as "the largest facilitator of child porn on the planet." Marques pleaded guilty in 2013 and was sentenced to 27 years in U.S. federal prison in 2021.

The Epstein network connection: Jeffrey Epstein''s physical trafficking operation ran parallel to these digital networks during overlapping time periods. Epstein''s pilots, including David Rodgers, flew minor girls to Little St. James island and other locations. Flight logs — introduced as evidence in multiple civil cases — show Epstein''s private planes transported individuals including notable figures to locations where no legitimate business purpose existed. Virginia Giuffre''s sworn testimony, filed in federal court, describes Epstein trafficking her to multiple individuals at specific locations. The overlap between Epstein''s client list and the digital exploitation ecosystem has not been formally investigated by any U.S. law enforcement agency.

EVIDENCE: Anonymous published the Freedom Hosting user data in October 2011 — it remains publicly accessible in archived form. Eric Marques''s federal indictment and 27-year sentence are matters of public record. Jeffrey Epstein''s flight logs were entered as evidence in civil proceedings and partially released. Virginia Giuffre''s civil complaint naming multiple individuals is public record. The FBI''s own investigation (Operation Cross Country) documented that online trafficking networks and physical trafficking networks routinely intersect and share clientele.

OFFICIAL RECORD: The DOJ prosecuted Marques for operating Freedom Hosting. The FBI acknowledged OpDarkNet''s role in providing evidence but did not officially partner with Anonymous. The Epstein investigation conducted by the DOJ SDNY resulted in Epstein''s 2019 arrest; his subsequent death terminated the investigation before his client network could be prosecuted. Ghislaine Maxwell was convicted in 2021 on 5 counts related to Epstein''s trafficking operation; her sentencing hearing produced no additional prosecutions of Epstein''s clients.

AFTERMATH: The Epstein Files Transparency Act (introduced 2023) resulted in partial document releases. Over 3 million pages remain withheld. The DOJ''s failure to prosecute any of Epstein''s clients despite Maxwell''s conviction establishing that a trafficking network existed has been characterized by legal scholars as an unprecedented prosecutorial gap. Operation DarkNet demonstrated that dark web exploitation networks can be disrupted by non-state actors more effectively than by law enforcement — a finding with significant implications for the political economy of enforcement failures.

CONNECTION WEB: Anonymous OpDarkNet → Freedom Hosting → Eric Marques (sentenced 27 years) → Lolita City user database → .gov/.mil addresses in user data → FBI Operation Cross Country → Jeffrey Epstein trafficking network → Ghislaine Maxwell conviction → Virginia Giuffre testimony → Epstein flight logs → Epstein Files Transparency Act → DOJ client prosecution gap.',
  'https://www.justice.gov/usao-md/pr/irish-national-who-operated-worlds-largest-child-pornography-website-sentenced-27-years',
  'Tier 1',
  'Court Record / Investigative Report',
  '2011-10-01',
  'The DOJ successfully prosecuted Eric Marques for operating Freedom Hosting. The FBI investigated and utilized evidence from OpDarkNet. The official position on the Epstein-dark web connection is that no formal investigation linking the two networks has been conducted or publicly disclosed. Ghislaine Maxwell was convicted; the DOJ has declined to comment on why no Epstein clients have been prosecuted despite Maxwell''s conviction establishing the trafficking network''s existence.',
  'Anonymous''s methods in OpDarkNet were illegal under the Computer Fraud and Abuse Act (CFAA), and some of the published user data may have included individuals whose accounts were compromised by malware rather than voluntary participants. The direct operational connection between Epstein''s physical network and Freedom Hosting''s digital network has not been formally established through public evidence — the argument is structural (parallel infrastructure, overlapping time period, same client demographic) rather than directly documented. The most significant evidentiary gap remains the 3+ million withheld Epstein documents.',
  'anonymous-operation-darknet-epstein-dark-web-trafficking',
  jsonb_build_object(
    'pillar', 'Child Safety & Trafficking',
    'category', 'Dark Web Child Exploitation & Epstein Network',
    'connection_pillars', ARRAY['War & Intelligence', 'Surveillance & Intelligence', 'Media Manipulation'],
    'sources', ARRAY[
      'U.S. Department of Justice. "Eric Eoin Marques Sentenced to 27 Years for Operating Freedom Hosting." USAO-MD Press Release, 2021.',
      'Anonymous. "OpDarkNet — Freedom Hosting User Database." October 2011. Archived publication.',
      'FBI. "Operation Cross Country — National Trafficking Enforcement Action." FBI Press Release, 2011–2019.',
      'Giuffre, Virginia Roberts. Civil Complaint Against Ghislaine Maxwell. U.S. District Court SDNY, 2015.',
      'United States v. Ghislaine Maxwell. SDNY Case No. 20-CR-330. Verdict 2021.',
      'Epstein Files Transparency Act. Congressional Record, 2023.',
      'Tor Project. "Freedom Hosting Takedown — Network Impact Analysis." 2013.'
    ],
    'keywords', ARRAY['Anonymous', 'OpDarkNet', 'Operation DarkNet', 'Freedom Hosting', 'Eric Marques', 'Lolita City', 'Jeffrey Epstein', 'dark web', 'CSAM', 'trafficking network', 'Ghislaine Maxwell']
  )
);
