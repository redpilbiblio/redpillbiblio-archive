/*
  # Add 12 AI & Surveillance Pillar Entries (April 2026)

  1. New Documents (12 entries)
    - Weapons of Math Destruction (2016 book)
    - DOJ Criminal Justice AI Report (Dec 2024)
    - Digital Jim Crow Era Analysis (2025)
    - Data Analytics & Algorithmic Bias in Policing (2023)
    - Lethal Autonomous Weapons Systems (2022)
    - Treaty on Autonomous Weapons (2020 updated)
    - Geofence Warrants: Model Policy (June 2025)
    - Geofence Warrant Primer (2024)
    - Geofence Warrants & Fourth Amendment (2021)
    - DeepFake Identities Threat (2024)
    - AI Deepfakes Disinformation Primer (2022)
    - Facial Recognition Bias Analysis (2020)

  2. All entries use verification_tier: 'verified'
  3. All entries stored with metadata.tags array containing topic tags
  4. Slugs normalized to lowercase with hyphens
  5. Document types set to 'AI & Surveillance'
  6. Source URLs included in metadata
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
  'Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy',
  'weapons-of-math-destruction-cathy-oneil-2016',
  'Cathy O''Neil''s seminal analysis of how opaque algorithms in predictive policing and sentencing create self-reinforcing feedback loops of bias.',
  'Cathy O''Neil''s seminal 2016 analysis exposes how opaque algorithms in predictive policing, risk assessments, and sentencing create self-reinforcing feedback loops of bias that systematically disadvantage the poor and minorities while shielding elites from scrutiny. These "math destruction" models are presented as objective science but function as unaccountable weapons that automate historical prejudice at massive scale.',
  'AI & Surveillance',
  'verified',
  '2016-01-01'::date,
  'https://ia800603.us.archive.org/12/items/fflch-livro-weapons-of-math-destruction-cathy-240826-220339/(FFLCH)%20LIVRO%20Weapons%20of%20Math%20Destruction%20-%20Cathy%20_240826_220339.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('book', 'algorithmic_bias', 'verified'),
    'category', 'Algorithmic Bias & Automated Discrimination',
    'importance', 'PURE_GOLD',
    'source_url', 'https://ia800603.us.archive.org/12/items/fflch-livro-weapons-of-math-destruction-cathy-240826-220339/(FFLCH)%20LIVRO%20Weapons%20of%20Math%20Destruction%20-%20Cathy%20_240826_220339.pdf'
  )
),
(
  'Artificial Intelligence and Criminal Justice, Final Report',
  'doj-artificial-intelligence-criminal-justice-final-report-2024',
  'U.S. Department of Justice December 2024 report on AI deployment in sentencing, bail, and predictive policing systems.',
  'U.S. Department of Justice December 2024 report examines the rapid deployment of AI in sentencing, bail, predictive policing, and police surveillance systems, documenting how flawed training data produces racially disparate outcomes and opaque "black box" decisions that undermine due process. It highlights the urgent need for transparency and bias audits in justice algorithms already in widespread use.',
  'AI & Surveillance',
  'verified',
  '2024-12-01'::date,
  'https://www.justice.gov/olp/media/1381796/dl',
  jsonb_build_object(
    'tags', jsonb_build_array('government_report', 'verified'),
    'category', 'Criminal Justice AI',
    'importance', 'PURE_GOLD',
    'source_url', 'https://www.justice.gov/olp/media/1381796/dl'
  )
),
(
  'How AI is Setting the Stage for a Digital Jim Crow Era',
  'how-ai-setting-stage-digital-jim-crow-era-2025',
  'Fara Rodriguez 2025 analysis on predictive policing and algorithmic bias creating digital discrimination.',
  'Fara Rodriguez''s 2025 analysis shows how predictive policing and threat-scoring algorithms create racially biased digital profiles that justify over-policing and mass surveillance of minority communities, effectively resurrecting Jim Crow through code rather than statute. The report details real-world cases where AI systems amplify historical disparities into automated systemic discrimination.',
  'AI & Surveillance',
  'verified',
  '2025-03-01'::date,
  'https://chci.org/wp-content/uploads/2025/03/Rodriguez_Fara_Predictive-Policing-How-AI-is-Setting-the-Stage-for-a-Digital-Jim-Crow-Era-.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('report', 'verified'),
    'category', 'Algorithmic Bias & Automated Discrimination',
    'importance', 'PURE_GOLD',
    'source_url', 'https://chci.org/wp-content/uploads/2025/03/Rodriguez_Fara_Predictive-Policing-How-AI-is-Setting-the-Stage-for-a-Digital-Jim-Crow-Era-.pdf'
  )
),
(
  'Data Analytics and Algorithmic Bias in Policing',
  'data-analytics-algorithmic-bias-policing-rusi-2023',
  'RUSI report detailing how police analytics tools embed historical biases into operational decisions.',
  'RUSI (UK) report by Alexander Babuta and Marion Oswald details how police analytics tools embed historical biases into operational decisions, producing discriminatory outcomes in stop-and-search, resource allocation, and surveillance targeting. It warns that without rigorous oversight these systems will entrench institutional prejudice under the guise of data-driven efficiency.',
  'AI & Surveillance',
  'verified',
  '2023-01-01'::date,
  'https://assets.publishing.service.gov.uk/media/5d7f6b2540f0b61ccdfa4b80/RUSI_Report_-_Algorithms_and_Bias_in_Policing.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('report', 'verified'),
    'category', 'Algorithmic Bias & Automated Discrimination',
    'importance', 'GOLD',
    'source_url', 'https://assets.publishing.service.gov.uk/media/5d7f6b2540f0b61ccdfa4b80/RUSI_Report_-_Algorithms_and_Bias_in_Policing.pdf'
  )
),
(
  'Lethal Autonomous Weapons Systems & Artificial Intelligence',
  'lethal-autonomous-weapons-systems-artificial-intelligence-2022',
  'Science & Global Security journal overview on fully autonomous weapons and the accountability gap.',
  'Science & Global Security journal overview (2022) examines the proliferation of fully autonomous "killer robots" that remove meaningful human control from lethal decisions, raising accountability gaps, escalation risks, and ethical crises in modern warfare. The paper stresses the urgent need for international norms before these systems become standard battlefield technology.',
  'AI & Surveillance',
  'verified',
  '2022-10-01'::date,
  'https://sciencepolicyreview.org/wp-content/uploads/securepdfs/2022/10/v3_AI_Defense-1.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('journal_article', 'verified'),
    'category', 'Autonomous Weapons & Military AI',
    'importance', 'GOLD',
    'source_url', 'https://sciencepolicyreview.org/wp-content/uploads/securepdfs/2022/10/v3_AI_Defense-1.pdf'
  )
),
(
  'The Need for and Elements of a New Treaty on Fully Autonomous Weapons',
  'new-treaty-fully-autonomous-weapons-harvard-2020',
  'Harvard Law School and Human Rights Watch case for binding treaty banning lethal autonomous weapons.',
  'Harvard Law School International Human Rights Clinic / Human Rights Watch joint report makes the legal and moral case for a binding treaty banning lethal autonomous weapons systems that operate without meaningful human oversight. It highlights the accountability vacuum created when machines make life-and-death decisions at machine speed.',
  'AI & Surveillance',
  'verified',
  '2020-06-01'::date,
  'https://humanrightsclinic.law.harvard.edu/wp-content/uploads/2022/10/202006arms_rio_autonomous_weapons_systems_2.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('report', 'verified'),
    'category', 'Autonomous Weapons & Military AI',
    'importance', 'GOLD',
    'source_url', 'https://humanrightsclinic.law.harvard.edu/wp-content/uploads/2022/10/202006arms_rio_autonomous_weapons_systems_2.pdf'
  )
),
(
  'Geofence Warrants: A Model State Policy',
  'geofence-warrants-model-state-policy-colorado-2025',
  'University of Colorado report on comprehensive policy framework for geofence warrant oversight.',
  'University of Colorado Samuelson-Glushko Technology Law & Policy Clinic June 2025 report provides a comprehensive policy framework exposing how geofence warrants enable mass, suspicionless location surveillance of thousands of innocent people through reverse warrants on Google and other providers. It offers model legislation to curb this dragnet surveillance tool.',
  'AI & Surveillance',
  'verified',
  '2025-06-01'::date,
  'https://tlpc.colorado.edu/wp-content/uploads/2025/06/TLPC-Geofence-Report-June-2025.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('policy_report', 'verified'),
    'category', 'Mass Surveillance & Warrants',
    'importance', 'GOLD',
    'source_url', 'https://tlpc.colorado.edu/wp-content/uploads/2025/06/TLPC-Geofence-Report-June-2025.pdf'
  )
),
(
  'Geofence Warrant Primer',
  'geofence-warrant-primer-nacdl-2024',
  'National Association of Criminal Defense Lawyers primer on how geofence warrants enable digital dragnets.',
  'National Association of Criminal Defense Lawyers primer details how geofence warrants force companies to hand over location data on every device in a geographic area during a time window, sweeping up countless non-suspects in digital dragnets that bypass traditional probable-cause requirements.',
  'AI & Surveillance',
  'verified',
  '2024-01-01'::date,
  'https://www.nacdl.org/getattachment/816437c7-8943-425c-9b3b-4faf7da24bba/nacdl-geofence-primer.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('primer', 'verified'),
    'category', 'Mass Surveillance & Warrants',
    'importance', 'GOLD',
    'source_url', 'https://www.nacdl.org/getattachment/816437c7-8943-425c-9b3b-4faf7da24bba/nacdl-geofence-primer.pdf'
  )
),
(
  'Geofence Warrants and the Fourth Amendment',
  'geofence-warrants-fourth-amendment-harvard-2021',
  'Harvard Law Review analysis arguing geofence warrants violate constitutional protections.',
  'Harvard Law Review analysis (2021, with ongoing case updates) argues that geofence warrants function as unconstitutional general warrants, authorizing bulk surveillance without individualized suspicion in direct violation of the Fourth Amendment. Courts are increasingly scrutinizing their use as mass surveillance disguised as routine investigation tools.',
  'AI & Surveillance',
  'verified',
  '2021-05-01'::date,
  'https://harvardlawreview.org/wp-content/uploads/2021/05/134-Harv.-L.-Rev.-2508-2.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('law_review', 'verified'),
    'category', 'Mass Surveillance & Warrants',
    'importance', 'GOLD',
    'source_url', 'https://harvardlawreview.org/wp-content/uploads/2021/05/134-Harv.-L.-Rev.-2508-2.pdf'
  )
),
(
  'Increasing Threat of DeepFake Identities',
  'increasing-threat-deepfake-identities-dhs-2024',
  'Department of Homeland Security assessment on synthetic identities and deepfake threats.',
  'U.S. Department of Homeland Security assessment warns that AI-generated synthetic identities and deepfake media now pose a severe threat to identity verification, elections, financial systems, and national security. The report documents the rapid evolution of tools that can create undetectable false identities at scale.',
  'AI & Surveillance',
  'verified',
  '2024-01-01'::date,
  'https://www.dhs.gov/sites/default/files/publications/increasing_threats_of_deepfake_identities_0.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('government_assessment', 'verified'),
    'category', 'DeepFakes & Synthetic Media',
    'importance', 'GOLD',
    'source_url', 'https://www.dhs.gov/sites/default/files/publications/increasing_threats_of_deepfake_identities_0.pdf'
  )
),
(
  'Artificial Intelligence, Deepfakes, and Disinformation: A Primer',
  'artificial-intelligence-deepfakes-disinformation-primer-rand-2022',
  'RAND Corporation primer on deepfake creation, detection, and weaponization in modern disinformation.',
  'RAND Corporation primer by Tim Helmus (2022) maps the escalating arms race between deepfake creation and detection technologies, detailing how state and non-state actors weaponize synthetic media to undermine trust, elections, and public discourse. It outlines policy options to counter the societal destabilization caused by AI-driven disinformation.',
  'AI & Surveillance',
  'verified',
  '2022-01-01'::date,
  'https://www.rand.org/content/dam/rand/pubs/perspectives/PEA1000/PEA1043-1/RAND_PEA1043-1.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('primer', 'verified'),
    'category', 'DeepFakes & Synthetic Media',
    'importance', 'GOLD',
    'source_url', 'https://www.rand.org/content/dam/rand/pubs/perspectives/PEA1000/PEA1043-1/RAND_PEA1043-1.pdf'
  )
),
(
  'Understanding Bias in Facial Recognition Technologies',
  'understanding-bias-facial-recognition-technologies-turing-2020',
  'Alan Turing Institute report on racial and gender biases in facial recognition systems.',
  'Dr. David Leslie (Alan Turing Institute) 2020 technical report dissects how facial recognition systems embed racial, gender, and age biases from flawed training datasets, enabling discriminatory mass surveillance and wrongful arrests. It warns that unchecked deployment of these tools risks automating historical prejudice at unprecedented scale.',
  'AI & Surveillance',
  'verified',
  '2020-10-01'::date,
  'https://www.turing.ac.uk/sites/default/files/2020-10/understanding_bias_in_facial_recognition_technology.pdf',
  jsonb_build_object(
    'tags', jsonb_build_array('report', 'verified'),
    'category', 'Facial Recognition & Biometric Surveillance',
    'importance', 'GOLD',
    'source_url', 'https://www.turing.ac.uk/sites/default/files/2020-10/understanding_bias_in_facial_recognition_technology.pdf'
  )
);