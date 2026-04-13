/*
  # Add 12 Media Manipulation / Propaganda Pillar Entries (April 2026)

  1. New Documents (12 entries - 4 marked as featured)
    - Twitter Files: Gov-Platform Censorship (2022-2023) - FEATURED
    - CISA as Thought Police Senate Report (2023) - FEATURED
    - House Judiciary Censorship Industrial Complex (2025) - FEATURED
    - Digital Media Oligarchy: Ownership Consolidation (2026) - FEATURED
    - Ellison Family Empire: Media Consolidation (2026)
    - Missouri v. Biden / Murthy v. Missouri (2022-2024)
    - Stanford EIP & Virality Project Censorship (2021-2023)
    - BlackRock/Vanguard Institutional Control (2020s)
    - Nexstar-Tegna Merger Local TV Consolidation (2026)
    - Pentagon Psy-Ops on Social Media (2022-2023)
    - Harvard Future of Media Index (2024-2025)
    - Network Propaganda: Benkler et al. (2018)

  2. All entries use verification_tier: 'verified'
  3. First 4 entries marked with featured: true
  4. All entries stored with appropriate tags and metadata
  5. Slugs normalized to lowercase with hyphens
  6. Document type set to 'Media Manipulation'
*/

INSERT INTO documents (
  title,
  slug,
  description,
  content,
  document_type,
  verification_tier,
  date_published,
  source_url,
  metadata
) VALUES
(
  'Twitter Files: Government-Platform Censorship Pipeline Exposed',
  'twitter-files-government-platform-censorship-pipeline-2022-2023',
  'Journalists revealed FBI pre-flagging, White House pressure, and federal agency coordination with social media platforms on election and COVID content.',
  'In December 2022–March 2023, journalists Matt Taibbi, Michael Shellenberger, Bari Weiss and others released internal Twitter (X) emails, Slack messages and documents. The files revealed FBI pre-flagging, White House pressure to suppress the Hunter Biden laptop story, COVID-19 dissent, and election content, plus shadowbanning pipelines and post-2016 coordination between federal agencies and social media platforms.',
  'Media Manipulation',
  'verified',
  '2022-12-01'::date,
  'https://twitterfiles.substack.com',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'censorship_pipeline', 'gov_tech_collusion', 'twitter_files', 'verified'),
    'category', 'Government-Tech Collusion',
    'importance', 'PURE_GOLD',
    'featured', true,
    'source_url', 'https://twitterfiles.substack.com'
  )
),
(
  'CISA as Thought Police: Senate Commerce Committee Report',
  'cisa-thought-police-senate-commerce-committee-2023',
  'Senate report documented how CISA was transformed into a domestic speech regulator coordinating with social media platforms to flag and remove alleged misinformation.',
  'U.S. Senate Committee on Commerce, Science, & Transportation Chairman Ted Cruz''s May 2023 report (with 2025 follow-ups) documented how the Biden Administration transformed the Cybersecurity and Infrastructure Security Agency (CISA) into a domestic speech regulator. CISA created systems to flag and outsource removal of alleged misinformation to social media platforms, especially around elections and COVID.',
  'Media Manipulation',
  'verified',
  '2023-05-01'::date,
  'https://www.commerce.senate.gov/services/files/BFE7787E-0C18-47DF-B781-D6B92613DDC3',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'cisa_censorship', 'gov_platform_coordination', 'censorship_industrial_complex', 'verified'),
    'category', 'Government Speech Regulation',
    'importance', 'PURE_GOLD',
    'featured', true,
    'source_url', 'https://www.commerce.senate.gov/services/files/BFE7787E-0C18-47DF-B781-D6B92613DDC3'
  )
),
(
  'House Judiciary Report: The Censorship Industrial Complex',
  'house-judiciary-censorship-industrial-complex-2024-2025',
  'House Judiciary Committee mapped the full network of White House, DHS/CISA, Stanford EIP, and NGOs pressuring platforms to censor lawful speech.',
  'House Judiciary Committee investigations and February 2025 hearings mapped the full network — White House officials, DHS/CISA, Stanford Election Integrity Partnership (EIP), Virality Project, and NGOs — that pressured tech platforms to censor lawful speech on elections, public health, and political topics. Primary documents show direct government coercion.',
  'Media Manipulation',
  'verified',
  '2025-02-01'::date,
  'https://judiciary.house.gov',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'censorship_industrial_complex', 'weaponization', 'gov_ngo_tech_axis', 'verified'),
    'category', 'Censorship Industrial Complex',
    'importance', 'PURE_GOLD',
    'featured', true,
    'source_url', 'https://judiciary.house.gov'
  )
),
(
  'Digital Media Oligarchy: Extreme 2020s Ownership Consolidation',
  'digital-media-oligarchy-ownership-consolidation-2026',
  'Analysis shows seven families/entities now control over 50% of top 50 news sites'' monthly visits, with institutional investor dominance creating unprecedented media concentration.',
  'February 2026 FAIR analysis shows seven families/entities (Ochs-Sulzberger/NYT, Murdoch, Warner Bros. Discovery, Apollo/Yahoo, Comcast, Microsoft, IAC) now control >50% of top 50 news sites'' 45.6 billion monthly visits. Combined with institutional investor dominance (BlackRock/Vanguard), this represents the most concentrated media ownership in the digital era.',
  'Media Manipulation',
  'verified',
  '2026-02-01'::date,
  'https://mronline.org/2026/02/05/165285/',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'ownership_consolidation', 'digital_oligarchy', 'billionaire_control', 'verified'),
    'category', 'Media Ownership Concentration',
    'importance', 'PURE_GOLD',
    'featured', true,
    'source_url', 'https://mronline.org/2026/02/05/165285/'
  )
),
(
  'Ellison Family Empire: Skydance-Paramount & CNN Consolidation',
  'ellison-family-empire-skydance-paramount-cnn-consolidation-2026',
  'Ellison family investments in Skydance-Paramount, Warner Bros. Discovery, and CBS further concentrated billionaire dynasty control over narrative infrastructure.',
  'The Ellison family''s major investments, including the Skydance-Paramount merger and stakes in Warner Bros. Discovery/CNN and CBS, further concentrated control over legacy and streaming media. This continues the pattern of billionaire dynasties and private equity dominating narrative infrastructure.',
  'Media Manipulation',
  'verified',
  '2026-03-01'::date,
  'https://nonprofitquarterly.org',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'ownership_consolidation', 'billionaire_control', 'verified'),
    'category', 'Media Ownership Concentration',
    'importance', 'GOLD',
    'source_url', 'https://nonprofitquarterly.org'
  )
),
(
  'Missouri v. Biden / Murthy v. Missouri: Supreme Court Censorship Case',
  'missouri-v-biden-murthy-v-missouri-supreme-court-censorship-2022-2024',
  'Landmark lawsuit discovery proved Biden administration officials directly coerced social media platforms to suppress protected speech on elections and COVID.',
  'Landmark lawsuit discovery documents (2022–2024) proved Biden administration officials directly coerced social media platforms to suppress protected speech on elections, COVID-19, and Hunter Biden stories. Amicus briefs from Twitter Files journalists detailed the coordination pipeline.',
  'Media Manipulation',
  'verified',
  '2024-12-01'::date,
  'https://judiciary.house.gov',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'gov_tech_collusion', 'supreme_court', 'verified'),
    'category', 'Government-Tech Collusion',
    'importance', 'GOLD',
    'source_url', 'https://judiciary.house.gov'
  )
),
(
  'Stanford EIP & Virality Project: Government-Backed Censorship Network',
  'stanford-eip-virality-project-government-censorship-network-2021-2023',
  'Internal documents exposed Stanford''s Election Integrity Partnership and Virality Project coordinating with government and NGOs to suppress dissenting narratives.',
  'Internal documents from Stanford''s Election Integrity Partnership and Virality Project (2021–2023) exposed coordinated efforts with government agencies and NGOs to flag and suppress dissenting narratives on COVID-19 and elections across major platforms.',
  'Media Manipulation',
  'verified',
  '2023-12-01'::date,
  'https://judiciary.house.gov',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'censorship_pipeline', 'stanford_eip', 'verified'),
    'category', 'Censorship Networks',
    'importance', 'GOLD',
    'source_url', 'https://judiciary.house.gov'
  )
),
(
  'BlackRock / Vanguard Institutional Investor Media Control',
  'blackrock-vanguard-institutional-investor-media-control-2020s',
  'Major asset managers hold significant ownership stakes across Disney, Comcast, Warner, News Corp, creating centralized influence over mainstream media narratives.',
  'Major asset managers BlackRock and Vanguard hold significant ownership stakes across Disney, Comcast, Warner, News Corp and other legacy/digital giants, creating centralized influence over mainstream media narratives through passive index-fund dominance.',
  'Media Manipulation',
  'verified',
  '2025-06-01'::date,
  'https://news.harvard.edu',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'ownership_consolidation', 'institutional_investors', 'verified'),
    'category', 'Institutional Media Control',
    'importance', 'GOLD',
    'source_url', 'https://news.harvard.edu'
  )
),
(
  'Nexstar-Tegna Merger: Local TV Consolidation Overreach',
  'nexstar-tegna-merger-local-tv-consolidation-2026',
  'Proposed merger would place one company in control of local TV stations reaching nearly 80% of U.S. households, raising concerns about news diversity and consolidation.',
  'The proposed Nexstar-Tegna deal would place one company in control of local TV stations reaching nearly 80% of U.S. households, prompting CPJ warnings about unprecedented local news ownership concentration and reduced viewpoint diversity.',
  'Media Manipulation',
  'verified',
  '2026-03-01'::date,
  'https://cpj.org',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'ownership_consolidation', 'local_news', 'verified'),
    'category', 'Local Media Consolidation',
    'importance', 'GOLD',
    'source_url', 'https://cpj.org'
  )
),
(
  'Pentagon Psy-Ops on Social Media',
  'pentagon-psy-ops-social-media-twitter-files-2022-2023',
  'Twitter Files exposed Pentagon and government agencies running influence operations and requesting content moderation across social media platforms.',
  'Twitter Files releases exposed Pentagon and other government agencies running influence operations and requesting content moderation on social media platforms, including pre-bunking and narrative shaping efforts.',
  'Media Manipulation',
  'verified',
  '2023-01-01'::date,
  'https://twitterfiles.substack.com',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'gov_tech_collusion', 'psy_ops', 'verified'),
    'category', 'Government-Tech Collusion',
    'importance', 'GOLD',
    'source_url', 'https://twitterfiles.substack.com'
  )
),
(
  'Harvard Future of Media Index: Institutional Ownership Update',
  'harvard-future-of-media-index-institutional-ownership-2024-2025',
  'Harvard Future of Media Project data tracks rising institutional investor stakes across major media conglomerates, documenting shift from family to mega-fund control.',
  'Recent Harvard Future of Media Project data tracks rising institutional investor stakes (BlackRock, Vanguard, State Street) across major media conglomerates, documenting the shift from traditional family ownership to passive mega-fund control.',
  'Media Manipulation',
  'verified',
  '2025-06-01'::date,
  'https://news.harvard.edu',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'ownership_consolidation', 'institutional_investors', 'verified'),
    'category', 'Institutional Media Control',
    'importance', 'GOLD',
    'source_url', 'https://news.harvard.edu'
  )
),
(
  'Network Propaganda: Manipulation, Disinformation, and Radicalization',
  'network-propaganda-manipulation-disinformation-radicalization-benkler-2018',
  'Benkler, Faris, and Roberts'' study mapped how asymmetric media ecosystems and algorithms drive propaganda and radicalization in U.S. politics.',
  'Yochai Benkler, Robert Faris, and Hal Roberts'' 2018 study (with post-2016 social media data) mapped how asymmetric media ecosystems and platform algorithms drive propaganda and radicalization in U.S. politics.',
  'Media Manipulation',
  'verified',
  '2018-01-01'::date,
  'https://oxford.universitypressscholarship.com',
  jsonb_build_object(
    'tags', jsonb_build_array('media_manipulation', 'network_propaganda', 'algorithmic_bias', 'verified'),
    'category', 'Propaganda & Radicalization',
    'importance', 'GOLD',
    'source_url', 'https://oxford.universitypressscholarship.com'
  )
);