/*
  # Add 12 New March 2026 Timeline Events

  1. New Events (all dated March 2026)
    - White House National AI Legislative Framework (2026-03-20)
    - SEC/CFTC Joint Crypto Asset Interpretation (2026-03-17)
    - Artemis II Moon Rocket Rolls to Launch Pad (2026-03-20)
    - Federal Bank Capital Overhaul Proposals (2026-03-19)
    - DOJ Settles Social Media Censorship Lawsuits (2026-03-24)
    - Operation Safe Return — 37 Missing Children Recovered (2026-03-10)
    - China Thorium MSR Breeding Milestone (2026-03-02)
    - 2026 Worldwide Threats Hearing (2026-03-19)
    - Strategic Bitcoin Reserve — One Year Assessment (2026-03-06)
    - Russia Massive Drone/Missile Strikes Against Ukraine (2026-03-24)
    - SAVE Act Reaches Senate (2026-03-17)
    - UN Binding Treaty Push for Corporate Environmental Accountability (2026-03-11)

  2. Notes
    - All events use metadata: { "era": "Modern" }
    - All document_ids are empty arrays
    - Pillar names match the existing normalization mapping
*/

INSERT INTO events (id, title, description, event_date, pillar, document_ids, metadata)
VALUES
  (
    gen_random_uuid(),
    'White House Unveils National AI Legislative Framework',
    'On March 20, 2026, the White House released its National Policy Framework for Artificial Intelligence — a sweeping set of legislative recommendations to Congress designed to preempt state AI laws and channel federal oversight through existing agencies (FTC, FCC, SEC). The framework rejects creating a new federal AI regulatory body and outlines seven priorities: federal preemption of state AI laws, child safety mandates, IP protections for creators, anti-censorship provisions, streamlined data center permitting, workforce training, and national security safeguards. The framework closely mirrors Sen. Marsha Blackburn''s ''TRUMP AMERICA AI Act'' discussion draft, which would sunset Section 230 and mandate third-party audits to prevent political bias.',
    '2026-03-20',
    'AI & Surveillance',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'SEC and CFTC Issue Landmark Joint Crypto Asset Interpretation',
    'On March 17, 2026, the SEC issued a landmark joint interpretation with the CFTC clarifying how federal securities laws apply to crypto assets — the most significant crypto regulatory guidance in over a decade. SEC Chairman Paul Atkins declared that ''most crypto assets are not themselves securities,'' establishing a formal token taxonomy for digital commodities, digital collectibles, digital tools, stablecoins, and digital securities. The interpretation clarifies when a non-security crypto asset becomes subject to an investment contract and addresses airdrops, protocol mining, staking, and wrapping. CFTC Chairman Michael Selig called it the end of regulatory uncertainty for American builders and entrepreneurs.',
    '2026-03-17',
    'Financial Systems',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'Artemis II Moon Rocket Rolls to Launch Pad — First Crewed Lunar Mission in 53 Years',
    'On March 20, 2026, NASA''s Space Launch System rocket carrying the Orion spacecraft completed its 4-mile overnight journey to Launch Complex 39B at Kennedy Space Center. The four-person crew — Commander Reid Wiseman, Pilot Victor Glover (first Black astronaut to reach the Moon), Mission Specialist Christina Koch (first woman), and CSA astronaut Jeremy Hansen (first non-American) — entered quarantine the same day. Launch is targeted for April 1, 2026. This will be NASA''s first crewed mission beyond low Earth orbit since Apollo 17 in December 1972.',
    '2026-03-20',
    'Space & Black Budget Programs',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'Federal Bank Capital Overhaul — Regulators Propose $87.7 Billion in Relief',
    'On March 19, 2026, the Federal Reserve, FDIC, and OCC jointly proposed three sweeping proposals to overhaul bank capital requirements, replacing the controversial 2023 Basel III Endgame rule. The proposals reduce CET1 capital requirements by 4.8% for G-SIBs, 5.2% for large regionals, and 7.8% for smaller banks — freeing an estimated $87.7 billion system-wide. The framework streamlines from two sets of calculations to one for the largest banks and modifies mortgage servicing requirements. Bank stock volatility compressed below broader market levels following the announcement.',
    '2026-03-19',
    'Financial Systems',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'DOJ Settles Social Media Censorship Lawsuits — 10-Year Ban on Government Coercion',
    'On March 24, 2026, the Department of Justice settled Missouri v. Biden and Children''s Health Defense v. Biden — landmark lawsuits alleging the Biden administration coerced social media companies to suppress protected speech. Under the settlement, the Surgeon General''s office, CDC, and CISA are barred for 10 years from threatening social media companies with legal, regulatory, or financial consequences to compel content removal. AG Pamela Bondi stated the Biden administration ''coerced social media companies to stifle free speech.'' The settlements implement Trump''s Executive Order ''Restoring Freedom of Speech and Ending Federal Censorship.''',
    '2026-03-24',
    'Media Manipulation',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'Operation Safe Return — 37 Missing Children Recovered in Anti-Trafficking Operation',
    'California AG Rob Bonta and Governor Newsom announced on March 10, 2026, that 37 missing children — some as young as 14 — were recovered during ''Operation Safe Return,'' a five-day operation (March 2-6) led by the U.S. Marshals Service and Riverside County Sheriff''s Anti-Human Trafficking Task Force. Seven individuals were arrested. Multiple recovered children were confirmed victims of child sex trafficking and sexual assault. The operation spanned Southern California, Arizona, and Nevada.',
    '2026-03-10',
    'Child Safety & Trafficking',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'China Confirms World''s First In-Reactor Thorium Breeding — MSR Milestone',
    'As detailed in a comprehensive March 2026 analysis, China''s TMSR-LF1 thorium molten-salt reactor — a 2-MWth prototype operated by the Shanghai Institute of Applied Physics (SINAP) — achieved the world''s first confirmed breeding of uranium-233 from thorium inside an operating reactor. The liquid-fuel design allows continuous refueling without shutdown. China is now accelerating toward a 100-MWth thorium MSR demonstration reactor by 2035, with commercial thorium MSRs envisioned by 2040. The milestone provides the first experimental data on thorium fuel conversion in a working molten-salt reactor.',
    '2026-03-02',
    'Energy & Suppressed Technology',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    '2026 Worldwide Threats Hearing — Foreign Intelligence Collection Against U.S. Up 25%',
    'On March 19, 2026, the House Permanent Select Committee on Intelligence held its annual open hearing on worldwide threats. Testimony revealed foreign intelligence collection against the U.S. has increased 25% overall, with a 100% increase from China and 45% increase targeting U.S. technology and AI sectors. Counter-narcotics operations were reported up 70%. The hearing featured questions about the expansion of Section 702 surveillance authorities and which companies can assist government intelligence collection — topics officials deferred to closed session.',
    '2026-03-19',
    'War & Intelligence',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'Strategic Bitcoin Reserve — One Year Later, Zero Purchases Made',
    'Exactly one year after President Trump signed Executive Order 14233 establishing the Strategic Bitcoin Reserve as a ''Digital Fort Knox,'' a March 2026 assessment reveals the reserve remains dormant. Zero additional BTC have been purchased. No federal agency has been designated to manage the reserve. The stockpile consists entirely of ~200,000 BTC seized from criminal cases (Silk Road, Bitfinex), valued at ~$14.6 billion but having lost $2.4 billion since creation. Jurisdictional confusion between DOJ, Treasury, and Commerce has stalled implementation.',
    '2026-03-06',
    'Financial Systems',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'Russia Launches Nearly 1,000 Drones and Missiles Against Ukraine in Massive Strike Series',
    'On March 23-24, 2026, Russian forces launched nearly 1,000 drones and missiles against Ukraine in a prolonged strike series — one of the most intense aerial bombardments of the war. A Russian milblogger publicly criticized the military''s inability to achieve outright victory and called for serious reforms. The escalation continues as the Institute for the Study of War assesses that Russian offensive operations persist without decisive territorial gains.',
    '2026-03-24',
    'War & Intelligence',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'SAVE Act Reaches Senate — Passport or Birth Certificate Required to Register to Vote',
    'By March 2026, the SAVE Act advanced to the U.S. Senate, requiring citizens to present a passport or birth certificate to register to vote — far exceeding any voter ID requirement previously gaining serious legislative traction. The bill requires states to hand voter roll data to DHS for scrutiny, with the federal government already requesting the ability to demand removal of specific voters from rolls. An amendment would effectively end voting by mail. The Brennan Center warned the bill would block ''many, many more American citizens from voting than any voter ID rule that has come anywhere close to passage.''',
    '2026-03-17',
    'Elections & Democratic Process',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  ),
  (
    gen_random_uuid(),
    'UN Binding Treaty Push for Corporate Environmental Accountability',
    'On March 11, 2026, a coalition including the Center for International Environmental Law (CIEL), FIAN International, and ESCR-Net published ''Time to Act: Securing a Sustainable Future Through Corporate Accountability'' — a major briefing calling for enforceable corporate obligations under a UN Binding Treaty on Business and Human Rights. The paper documents how transnational corporations often enjoy stronger protections under trade agreements than affected communities. It calls for translating the right to a clean environment into binding regulations, noting communities worldwide face environmental destruction and human rights abuses linked to corporate activity without access to justice.',
    '2026-03-11',
    'Environmental & Corporate Accountability',
    '[]'::jsonb,
    '{"era": "Modern"}'::jsonb
  );
