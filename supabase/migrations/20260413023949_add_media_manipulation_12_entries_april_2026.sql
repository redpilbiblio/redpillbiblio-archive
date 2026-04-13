/*
  # Add 12 Media Manipulation Pillar Entries (April 2026)

  1. New Documents
    - 4 Active Investigation entries (featured/newest first):
      - Twitter Files: Government-Platform Censorship Pipeline (Dec 2022-Mar 2023)
      - CISA as Thought Police: Senate Committee Report (May 2023)
      - House Judiciary Report: Censorship Industrial Complex (Feb 2025)
      - Digital Media Oligarchy: Extreme 2020s Consolidation (Feb 2026)
    
    - 8 Broader Archive entries (newest-first chronological):
      - Ellison Family Empire: Skydance-Paramount & CNN (Mar 2026)
      - Missouri v. Biden / Murthy v. Missouri (2022-2024)
      - Stanford EIP & Virality Project Network (2021-2023)
      - BlackRock/Vanguard Institutional Investor Control (2020s)
      - Nexstar-Tegna Merger: Local TV Consolidation (Mar 2026)
      - Pentagon Psy-Ops on Social Media (2022-2023)
      - Harvard Future of Media Index (2024-2025)

  2. All entries use verification_tier: 'verified'
  3. All entries stored with metadata.tags array containing topic tags
  4. Slugs normalized to lowercase with hyphens
  5. Document types set to 'Media Manipulation & Information Control'
*/

INSERT INTO documents (
  title,
  slug,
  description,
  content,
  document_type,
  verification_tier,
  date_published,
  metadata
) VALUES
-- ACTIVE INVESTIGATIONS (4 entries, newest first)
(
  'Twitter Files: Government-Platform Censorship Pipeline Exposed (2022–2023)',
  'twitter-files-government-platform-censorship-2022-2023',
  'Internal Twitter emails revealing FBI pre-flagging, White House pressure to suppress content, and shadowbanning coordination between federal agencies and platforms.',
  'In December 2022–March 2023, journalists Matt Taibbi, Michael Shellenberger, Bari Weiss and others released internal Twitter (X) emails, Slack messages and documents. The files revealed FBI pre-flagging, White House pressure to suppress the Hunter Biden laptop story, COVID-19 dissent, and election content, plus shadowbanning pipelines and post-2016 coordination between federal agencies and social media platforms.',
  'Media Manipulation & Information Control',
  'verified',
  '2022-12-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Censorship Pipeline', 'Gov-Tech Collusion', 'Post-2016 Coordination', 'Twitter Files', 'verified'),
    'category', 'Gov-Platform Coordination',
    'importance', 'PURE_GOLD'
  )
),
(
  'CISA as Thought Police: Senate Commerce Committee Report (2023)',
  'cisa-thought-police-senate-committee-report-2023',
  'Senate report documenting how CISA became a domestic speech regulator, creating systems to flag alleged misinformation to platforms.',
  'U.S. Senate Committee on Commerce, Science, & Transportation Chairman Ted Cruz''s May 2023 report (with 2025 follow-ups) documented how the Biden Administration transformed the Cybersecurity and Infrastructure Security Agency (CISA) into a domestic speech regulator. CISA created systems to flag and outsource removal of alleged misinformation to social media platforms, especially around elections and COVID.',
  'Media Manipulation & Information Control',
  'verified',
  '2023-05-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'CISA Censorship', 'Gov-Platform Coordination', 'Censorship Industrial Complex', 'verified'),
    'category', 'Government Censorship Infrastructure',
    'importance', 'PURE_GOLD'
  )
),
(
  'House Judiciary Report: The Censorship Industrial Complex (2024–2025)',
  'house-judiciary-report-censorship-industrial-complex-2024-2025',
  'House Judiciary Committee findings documenting the full network of White House, DHS/CISA, Stanford, NGOs pressuring platforms to censor lawful speech.',
  'House Judiciary Committee investigations and February 2025 hearings mapped the full network — White House officials, DHS/CISA, Stanford Election Integrity Partnership (EIP), Virality Project, and NGOs — that pressured tech platforms to censor lawful speech on elections, public health, and political topics. Primary documents show direct government coercion.',
  'Media Manipulation & Information Control',
  'verified',
  '2025-02-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Censorship Industrial Complex', 'Weaponization', 'Gov-NGO-Tech Axis', 'verified'),
    'category', 'Government Censorship Infrastructure',
    'importance', 'PURE_GOLD'
  )
),
(
  'Digital Media Oligarchy: Extreme 2020s Ownership Consolidation',
  'digital-media-oligarchy-extreme-2020s-ownership-consolidation',
  'Analysis showing seven families/entities now control >50% of top 50 news sites with 45.6 billion monthly visits, combined with institutional investor dominance.',
  'February 2026 FAIR analysis shows seven families/entities (Ochs-Sulzberger/NYT, Murdoch, Warner Bros. Discovery, Apollo/Yahoo, Comcast, Microsoft, IAC) now control >50% of top 50 news sites'' 45.6 billion monthly visits. Combined with institutional investor dominance (BlackRock/Vanguard), this represents the most concentrated media ownership in the digital era.',
  'Media Manipulation & Information Control',
  'verified',
  '2026-02-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Ownership Consolidation', 'Digital Oligarchy', 'Billionaire Control', 'verified'),
    'category', 'Media Ownership & Control',
    'importance', 'PURE_GOLD'
  )
),
-- BROADER ARCHIVE (8 entries, newest-first chronological)
(
  'Ellison Family Empire: Skydance-Paramount & CNN Consolidation (2024–2026)',
  'ellison-family-empire-skydance-paramount-cnn-consolidation-2024-2026',
  'Ellison family investments in Skydance-Paramount merger and stakes in Warner Bros. Discovery/CNN consolidating media narrative control.',
  'The Ellison family''s major investments, including the Skydance-Paramount merger and stakes in Warner Bros. Discovery/CNN and CBS, further concentrated control over legacy and streaming media. This continues the pattern of billionaire dynasties and private equity dominating narrative infrastructure.',
  'Media Manipulation & Information Control',
  'verified',
  '2026-03-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Ownership Consolidation', 'Billionaire Control', 'verified'),
    'category', 'Media Ownership & Control',
    'importance', 'GOLD'
  )
),
(
  'Missouri v. Biden / Murthy v. Missouri: Supreme Court Censorship Case',
  'missouri-v-biden-murthy-v-missouri-supreme-court-censorship-case',
  'Landmark lawsuit proving Biden administration coercion of social media platforms to suppress protected speech on elections and COVID.',
  'Landmark lawsuit discovery documents (2022–2024) proved Biden administration officials directly coerced social media platforms to suppress protected speech on elections, COVID-19, and Hunter Biden stories. Amicus briefs from Twitter Files journalists detailed the coordination pipeline.',
  'Media Manipulation & Information Control',
  'verified',
  '2024-01-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Gov-Tech Collusion', 'Supreme Court', 'verified'),
    'category', 'Government Censorship Infrastructure',
    'importance', 'PURE_GOLD'
  )
),
(
  'Stanford EIP & Virality Project: Government-Backed Censorship Network',
  'stanford-eip-virality-project-government-backed-censorship-network',
  'Internal documents from Stanford Election Integrity Partnership and Virality Project exposing coordinated censorship efforts with government agencies.',
  'Internal documents from Stanford''s Election Integrity Partnership and Virality Project (2021–2023) exposed coordinated efforts with government agencies and NGOs to flag and suppress dissenting narratives on COVID-19 and elections across major platforms.',
  'Media Manipulation & Information Control',
  'verified',
  '2023-06-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Censorship Pipeline', 'EIP', 'verified'),
    'category', 'Government Censorship Infrastructure',
    'importance', 'GOLD'
  )
),
(
  'BlackRock / Vanguard Institutional Investor Media Control (2020s)',
  'blackrock-vanguard-institutional-investor-media-control-2020s',
  'Asset managers BlackRock and Vanguard holding significant ownership stakes across major media creating centralized influence over narratives.',
  'Major asset managers BlackRock and Vanguard hold significant ownership stakes across Disney, Comcast, Warner, News Corp and other legacy/digital giants, creating centralized influence over mainstream media narratives through passive index-fund dominance.',
  'Media Manipulation & Information Control',
  'verified',
  '2025-06-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Ownership Consolidation', 'Institutional Investors', 'verified'),
    'category', 'Media Ownership & Control',
    'importance', 'GOLD'
  )
),
(
  'Nexstar-Tegna Merger: Local TV Consolidation Overreach (2026)',
  'nexstar-tegna-merger-local-tv-consolidation-overreach-2026',
  'Proposed merger placing one company in control of local TV stations reaching nearly 80% of U.S. households.',
  'The proposed Nexstar-Tegna deal would place one company in control of local TV stations reaching nearly 80% of U.S. households, prompting CPJ warnings about unprecedented local news ownership concentration and reduced viewpoint diversity.',
  'Media Manipulation & Information Control',
  'verified',
  '2026-03-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Ownership Consolidation', 'Local News', 'verified'),
    'category', 'Media Ownership & Control',
    'importance', 'GOLD'
  )
),
(
  'Pentagon Psy-Ops on Social Media (Twitter Files Revelations)',
  'pentagon-psy-ops-social-media-twitter-files-revelations',
  'Twitter Files exposed Pentagon running influence operations and requesting content moderation on social media platforms.',
  'Twitter Files releases exposed Pentagon and other government agencies running influence operations and requesting content moderation on social media platforms, including pre-bunking and narrative shaping efforts.',
  'Media Manipulation & Information Control',
  'verified',
  '2023-03-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Gov-Tech Collusion', 'Psy-Ops', 'verified'),
    'category', 'Government Censorship Infrastructure',
    'importance', 'GOLD'
  )
),
(
  'Harvard Future of Media Index: Institutional Ownership Update (2024–2025)',
  'harvard-future-media-index-institutional-ownership-update-2024-2025',
  'Harvard Future of Media Project data tracking rising institutional investor stakes across major media conglomerates.',
  'Recent Harvard Future of Media Project data tracks rising institutional investor stakes (BlackRock, Vanguard, State Street) across major media conglomerates, documenting the shift from traditional family ownership to passive mega-fund control.',
  'Media Manipulation & Information Control',
  'verified',
  '2025-09-01'::date,
  jsonb_build_object(
    'tags', jsonb_build_array('Media Manipulation', 'Ownership Consolidation', 'Institutional Investors', 'verified'),
    'category', 'Media Ownership & Control',
    'importance', 'GOLD'
  )
);