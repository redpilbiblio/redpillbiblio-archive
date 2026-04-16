interface ScientistEntry {
  id: string;
  name: string;
  status: 'MISSING' | 'DECEASED-UNKNOWN' | 'DECEASED-SOLVED' | 'DECEASED-UNDETERMINED';
  date: string;
  location: string;
  institution: string;
  summary: string;
  connections?: string[];
  note?: string;
  sourceLinks: string[];
  tags: string[];
}

interface TechContextCard {
  title: string;
  content: string;
  sourceLinks: string[];
  tags: string[];
}

export interface MissingScientistsCaseFile {
  id: string;
  title: string;
  subtitle: string;
  statusBadge: string;
  statusBadgeColor: string;
  accentColor: string;
  openingStatement: string;
  clusterDescription: string;
  congressionalAttention: { speaker: string; quote: string }[];
  entries: ScientistEntry[];
  techContext: TechContextCard;
  redFlags: string[];
  officialSources: { name: string; description: string }[];
  lastUpdated: string;
}

export const missingScientistsCaseFile: MissingScientistsCaseFile = {
  id: 'missing-scientists',
  title: 'The Missing Scientists Pattern (2023–2026)',
  subtitle: '10 Deaths & Disappearances Across NASA-JPL, LANL, MIT, Caltech, AFRL',
  statusBadge: 'ACTIVE — UNRESOLVED',
  statusBadgeColor: '#ff4444',
  accentColor: '#3b82f6',
  openingStatement: 'Since July 2023, at least 10 individuals connected to NASA-JPL, Los Alamos National Laboratory, MIT Plasma Science and Fusion Center, Caltech, and the Air Force Research Laboratory have died or disappeared. The cluster centers on retired USAF Maj. Gen. William Neil McCasland, missing since Feb 27, 2026. Law enforcement has found no coordinated link. Congress has taken notice. The White House acknowledged the pattern on April 15, 2026.',
  clusterDescription: 'The strongest documented institutional thread runs through a classified nickel superalloy called Mondaloy — co-invented by Monica Jacinto Reza and Dallis Hardwick, funded through McCasland\'s AFRL budget. Hardwick died in January 2014. Reza vanished June 2025. McCasland vanished February 2026. The entire surviving human knowledge chain for this strategic propulsion material has been disrupted.',
  congressionalAttention: [
    { speaker: 'Rep. Eric Burlison (MO-R)', quote: 'McCasland has a lot of information about UFOs — national security concern.' },
    { speaker: 'Rep. Tim Burchett (TN-R)', quote: 'Dark patterns in the deaths and disappearances.' },
    { speaker: 'White House Press Secretary Karoline Leavitt', quote: 'Acknowledged the pattern on April 15, 2026.' },
    { speaker: 'BCSO (April 14, 2026)', quote: 'We have not uncovered evidence linking disappearance to his classified work.' },
  ],
  entries: [
    {
      id: 'mccasland',
      name: 'Maj. Gen. William Neil McCasland (USAF, Ret.)',
      status: 'MISSING',
      date: '2026-02-27',
      location: 'Albuquerque, NM (Sandia Heights)',
      institution: 'USAF Air Force Research Laboratory (AFRL); Applied Technology Associates',
      summary: 'Retired USAF Maj. Gen. and AFRL commander (2011–2013) with $4.4B annual R&D oversight vanished on foot from his Albuquerque home Feb 27, 2026. Left behind: phone (turned off), prescription glasses, smartwatch. Took: .38-cal revolver in leather holster, red backpack, hiking boots, wallet. Last seen 10:00 AM by repairman; wife called 911 at 3:07 PM. FBI Albuquerque Field Office assisting BCSO. Gray USAF sweatshirt found ~1.25 miles east March 7 — no blood detected. Hiking boots/green shirt found at second home in Pagosa Springs, CO (200 mi north). Silver Alert issued. No confirmed sightings.',
      connections: [
        'Monica Jacinto Reza (Mondaloy co-inventor, also missing — he oversaw funding for her work)',
        'Dallis Hardwick (Mondaloy co-inventor, died Jan 2014)',
        'Tom DeLonge / TTSA (unpaid consultant; named in 2016 WikiLeaks/Podesta emails as UAP insider)',
        'AFRL Space Vehicles Directorate, Phillips Research Site Kirtland AFB 2001–2004',
        'Riverside Research (board member 2019+, classified IC/DoD research nonprofit)',
      ],
      sourceLinks: [
        'https://www.newsweek.com',
        'https://www.uniladtech.com/science/space/william-neil-mccasland-ufo-links-vanish-us-scientists-missing-158153-20260323',
        'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
      ],
      tags: ['UAP', 'AFRL', 'Missing-Person', 'Nuclear-Secrets', 'Mondaloy', 'FBI-Investigation'],
    },
    {
      id: 'reza',
      name: 'Monica Jacinto Reza',
      status: 'MISSING',
      date: '2025-06-22',
      location: 'Mount Waterman Trail, Angeles National Forest, CA',
      institution: 'NASA-JPL (Director, Materials Processing Group); formerly Aerojet Rocketdyne (Technical Fellow, 30 years)',
      summary: 'Senior aerospace engineer and co-inventor of Mondaloy. After 30 years at Aerojet Rocketdyne she joined NASA-JPL. On June 22, 2025, she was hiking with two companions. At ~9:10 AM she was observed ~30 feet behind her companion, "smiling and waving." When her companion turned back moments later, she had vanished. Months of helicopter, drone, service dog, and volunteer searches found no trace. Still listed as missing person by LASD. BCSO confirmed cross-investigation with McCasland case.',
      connections: [
        'William Neil McCasland (AFRL commander whose budget directly funded Mondaloy program)',
        'Dallis Hardwick (Mondaloy co-inventor, worked under McCasland at Wright-Patterson, died Jan 2014)',
        'AR1 Rocket Engine program (replacing Russian RD-180 strategic dependency)',
      ],
      note: 'Reza and McCasland represent the complete surviving human knowledge chain for Mondaloy. With Hardwick (2014), Reza (2025), and McCasland (2026) all now dead or missing, the entire chain of custody for this technology has been disrupted.',
      sourceLinks: [
        'https://www.wionews.com',
        'https://www.uniladtech.com/science/space/william-neil-mccasland-ufo-links-vanish-us-scientists-missing-158153-20260323',
        'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
      ],
      tags: ['Mondaloy', 'Missing-Person', 'NASA-JPL', 'Aerojet-Rocketdyne', 'AR1-Engine'],
    },
    {
      id: 'hicks',
      name: 'Michael David Hicks',
      status: 'DECEASED-UNKNOWN',
      date: '2023-07-30',
      location: 'Not publicly disclosed',
      institution: 'NASA Jet Propulsion Laboratory (1998–2022)',
      summary: 'JPL scientist for 24 years; contributed to 80+ scientific papers including DART asteroid deflection, NEAT, Dawn mission, and Deep Space 1. Died age 59, approximately one year after leaving JPL. No cause of death disclosed. No autopsy details released. JPL/NASA did not comment. Obituary requests donations to Alcoholics Anonymous.',
      sourceLinks: ['https://cassiopaea.substack.com/p/missing-and-dead-scientists'],
      tags: ['NASA-JPL', 'DART', 'No-Cause-Disclosed'],
    },
    {
      id: 'maiwald',
      name: 'Frank Maiwald',
      status: 'DECEASED-UNKNOWN',
      date: '2024-07-04',
      location: 'Los Angeles, CA',
      institution: 'NASA Jet Propulsion Laboratory (25 years; JPL Principal designation)',
      summary: 'JPL Principal-level scientist — the highest individual contributor designation. Died age 61. Lead researcher on a biosignature detection breakthrough for Europa, Enceladus, and Ceres (June 2023, 13 months before death). No cause of death disclosed. No autopsy performed. JPL/NASA did not comment. Longtime colleague of Hicks — two JPL Principal-level deaths within 12 months.',
      sourceLinks: ['https://cassiopaea.substack.com/p/missing-and-dead-scientists'],
      tags: ['NASA-JPL', 'Biosignatures', 'Europa', 'No-Cause-Disclosed'],
    },
    {
      id: 'chavez',
      name: 'Anthony Chavez',
      status: 'MISSING',
      date: '2025-05-04',
      location: 'Los Alamos, NM',
      institution: 'Los Alamos National Laboratory (retired 2017)',
      summary: 'Retired LANL employee, age ~78–79, vanished from his Los Alamos residence. Wallet, keys, and cigarettes left on the table. Car locked. No forced entry. No blood. Cadaver dogs found nothing. Banking ceased around May 5. Los Alamos PD confirmed no new leads after nearly one year.',
      sourceLinks: ['https://cassiopaea.substack.com/p/missing-and-dead-scientists'],
      tags: ['LANL', 'Missing-Person', 'New-Mexico'],
    },
    {
      id: 'casias',
      name: 'Melissa Casias',
      status: 'MISSING',
      date: '2025-06-26',
      location: 'Taos County, NM',
      institution: 'Los Alamos National Laboratory (administrative, DoE advisory ties)',
      summary: 'Disappeared June 26, 2025 — just four days after Monica Reza vanished in California. Had uncharacteristically worked from home that day. Last seen walking alone miles from her residence without wallet, phone, or keys. Most unusual detail: her mobile devices had been factory-reset before her disappearance. NM State Police reported no breakthroughs as of September 2025.',
      sourceLinks: ['https://cassiopaea.substack.com/p/missing-and-dead-scientists'],
      tags: ['LANL', 'DoE', 'Missing-Person', 'Factory-Reset-Devices'],
    },
    {
      id: 'garcia',
      name: 'Steven Garcia',
      status: 'MISSING',
      date: '2025-08-28',
      location: 'Albuquerque, NM',
      institution: 'Kansas City National Security Campus (KCNSC) — Albuquerque facility',
      summary: 'KCNSC contractor. Property custodian overseeing assets valued in tens/hundreds of millions — some classified — requiring high-level security clearance. Age 48. Surveillance footage shows him leaving home on foot carrying a handgun, wearing green camouflage. Not seen since. KCNSC reviewed computers and files — no leads. Pattern closely mirrors McCasland disappearance 6 months later: Albuquerque, on-foot, firearm, items left behind.',
      sourceLinks: ['https://cassiopaea.substack.com/p/missing-and-dead-scientists'],
      tags: ['Nuclear-Weapons', 'KCNSC', 'Missing-Person', 'Security-Clearance'],
    },
    {
      id: 'loureiro',
      name: 'Nuno Loureiro',
      status: 'DECEASED-SOLVED',
      date: '2025-12-15',
      location: 'Brookline, MA',
      institution: 'MIT Plasma Science and Fusion Center (Director, 2024)',
      summary: 'Director of MIT\'s Plasma Science and Fusion Center (250+ personnel). Shot multiple times at home while family present. Died age 47. World-leading plasma physicist. Had met with IAEA Director General Rafael Grossi. Active collaborations with Commonwealth Fusion Systems (SPARC tokamak). Perpetrator: Claudio Manuel Neves Valente, 48 — also Brown University mass shooter (Dec 13, 2 killed, 9 wounded). Valente found dead by FBI SWAT Dec 18 — suicide. Both attended IST Lisbon in 1990s. Motive: personal grievance/fixation.',
      note: 'CASE SOLVED. Motive established. Perpetrator dead. Included due to significance of victim\'s role amid broader pattern.',
      sourceLinks: ['https://cassiopaea.substack.com/p/missing-and-dead-scientists'],
      tags: ['MIT-PSFC', 'Fusion', 'Homicide-Solved', 'SPARC', 'IAEA'],
    },
    {
      id: 'grillmair',
      name: 'Carl Grillmair',
      status: 'DECEASED-SOLVED',
      date: '2026-02-16',
      location: 'Llano, CA (rural Mojave Desert)',
      institution: 'Caltech IPAC; NASA',
      summary: 'Caltech IPAC astronomer, 30 years. NASA Scientific Achievement Medal. Discovered multiple stellar streams. Found shot dead on porch — single gunshot wound. Suspect: Freddy Snyder, 29, neighbor ~2 mi away. Snyder arrested Dec 2025 for trespassing on Grillmair\'s property with loaded unregistered rifle — released on own recognizance, charges dropped Feb 2026, two weeks before murder. No clear motive. Snyder in custody, awaiting trial.',
      note: 'CASE SOLVED. Included due to Caltech-NASA/JPL institutional overlap. The system failure: felony weapons charges dropped two weeks before the killing.',
      sourceLinks: ['https://cassiopaea.substack.com/p/missing-and-dead-scientists'],
      tags: ['Caltech', 'NASA-JPL', 'Homicide-Solved', 'System-Failure'],
    },
    {
      id: 'thomas',
      name: 'Jason Thomas',
      status: 'DECEASED-UNDETERMINED',
      date: '2026-03-17',
      location: 'Massachusetts (remains found in lake)',
      institution: 'Novartis Pharmaceuticals',
      summary: 'Novartis researcher testing cancer treatments. Disappeared ~December 2025 while grieving deaths of both parents. Remains discovered in Massachusetts lake March 17, 2026. No foul play suspected. Cause of death undetermined.',
      note: 'WEAKEST CONNECTION. Pharmaceutical research, personal grief circumstances, no aerospace/nuclear link. Included due to timing and scientist status.',
      sourceLinks: ['https://cassiopaea.substack.com/p/missing-and-dead-scientists'],
      tags: ['Pharmaceutical', 'Weakest-Connection'],
    },
  ],
  techContext: {
    title: 'Why Mondaloy and Aneutronic Fusion Matter',
    content: 'MONDALOY: A burn-resistant nickel-based superalloy co-developed by Monica Reza and Dallis Hardwick in the 1990s. By 2016–2017 it was incorporated into the AR1 rocket engine, ending U.S. dependence on Russian RD-180 engines for national security satellite launches.\n\nANEUTRONIC FUSION (proton-Boron 11): Unlike standard D-T fusion which produces neutrons requiring massive shielding, p-B fusion yields only charged alpha particles that can be directly converted to electricity or thrust at efficiencies potentially 70–90% — bypassing the thermodynamic Carnot limit. Applications: directed-energy weapons, advanced aerospace propulsion (specific impulse 10,000–1,000,000 seconds vs. chemical rockets\' ~450), and energy-independent military platforms.\n\nThe Defense Intelligence Agency addressed direct conversion potential in 2010 (DIA-08-1011-003). NASA published on aneutronic fusion spacecraft architecture in 2012. TAE Technologies announced a breakthrough p-B plasma result in Nature Communications April 2025.\n\nMcCasland\'s AFRL Propulsion and Space Vehicle Directorates were precisely the programs investigating these technologies. Loureiro\'s MIT PSFC was directly building toward plasma confinement for fusion systems.',
    sourceLinks: [
      'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
      'https://www.reddit.com/r/UFOs/comments/1rzwk7e/',
    ],
    tags: ['Mondaloy', 'Aneutronic-Fusion', 'TAE-Technologies', 'DIA', 'NASA', 'AR1-Engine', 'RD-180'],
  },
  redFlags: [
    'The complete three-person knowledge chain for Mondaloy — a classified strategic propulsion material — has been disrupted: Hardwick dead (2014), Reza missing (2025), McCasland missing (2026).',
    'Garcia (KCNSC, Aug 2025) and McCasland (AFRL, Feb 2026) share an identical operational pattern: Albuquerque, left on foot, carried firearm, personal items left behind.',
    'Casias\'s mobile devices were factory-reset before her disappearance — suggesting either premeditation or third-party data destruction.',
    'Casias disappeared just four days after Reza. Both were connected to national laboratory systems (LANL and NASA-JPL).',
    'Two JPL Principal-level scientists (Hicks and Maiwald) died within 12 months of each other. Neither cause of death was disclosed. JPL/NASA issued no comment for either.',
    'McCasland left his phone turned off and prescription glasses behind — yet took a loaded .38-cal revolver, wallet, and hiking boots. This combination is inconsistent with a disoriented individual but consistent with deliberate departure.',
    'Despite congressional attention from multiple representatives, no federal agency has announced a coordinated investigation into the cluster pattern.',
    'Grillmair\'s killer had been arrested on felony weapons charges on Grillmair\'s own property — and was released with charges dropped two weeks before the murder.',
  ],
  officialSources: [
    { name: 'Newsweek', description: 'BCSO statement April 14, 2026 re: McCasland investigation' },
    { name: 'UNILAD Tech', description: 'Comprehensive cluster reporting, March 23, 2026' },
    { name: 'Cassiopaea Substack', description: 'Missing and Dead Scientists investigative report' },
    { name: 'WION News', description: 'The Mondaloy Mystery reporting' },
    { name: 'Deutsche Welle / NDTV', description: 'International coverage of pattern' },
    { name: 'House Judiciary Committee', description: 'Congressional statements by Rep. Burlison and Rep. Burchett' },
    { name: 'White House Press Briefing', description: 'Press Secretary Leavitt acknowledgment, April 15, 2026' },
  ],
  lastUpdated: '2026-04-15',
};
