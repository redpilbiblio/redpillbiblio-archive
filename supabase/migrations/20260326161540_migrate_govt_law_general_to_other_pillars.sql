/*
  # Migrate Government & Law /general items to Space, Energy, AI, Health, Child Safety, Media, War pillars
  
  Redistributes remaining /government_law/general items to their correct canonical pillars.
*/

-- Space & Black Budget Programs
UPDATE documents SET
  document_type = 'Space & Black Budget Programs',
  subcategory = 'uap_encounters'
WHERE id = '09965a55-aad7-4e04-84ae-815c062b2c37';

UPDATE documents SET
  document_type = 'Space & Black Budget Programs',
  subcategory = 'classification_secrecy'
WHERE id = '944421dc-131c-4d40-b970-28a508fd0065';

-- Energy & Suppressed Technology
UPDATE documents SET
  document_type = 'Energy & Suppressed Technology',
  subcategory = 'suppressed_inventions'
WHERE id IN (
  '79b7f1b2-8d99-407c-89cf-30da427a39e9',
  'fb4d0c52-cfe5-4c42-baf9-fea896724a11',
  'e98a7125-e114-481a-b594-b4031ffe3736'
);

UPDATE documents SET
  document_type = 'Energy & Suppressed Technology',
  subcategory = 'energy_policy'
WHERE id IN (
  '75830869-1402-42d2-9b34-3ec16a0643d8',
  '723b0917-5781-48bf-9898-1318df32a6bd'
);

UPDATE documents SET
  document_type = 'Energy & Suppressed Technology',
  subcategory = 'pattern_analysis'
WHERE id = '970c6cd5-e445-453b-829b-770f183cb324';

UPDATE documents SET
  document_type = 'Energy & Suppressed Technology',
  subcategory = 'energy_geopolitics'
WHERE id = '7f0b3066-d755-4dac-8db9-a92511121736';

-- AI, Surveillance & Digital Rights
UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'ai_manipulation'
WHERE id = 'efb1941c-5962-4ff2-b963-2024fd7a9ae7';

UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'ai_ethics'
WHERE id IN (
  'c6b57afd-0a67-4c2a-afa6-a3447e536551',
  '52aaa01c-5cfd-40f3-a7a0-0fe6bb73e248'
);

UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'encryption_policy'
WHERE id = 'a37a8b1b-0141-4ad6-9cbb-bc9ccd53a935';

UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'surveillance_state'
WHERE id = '339b562d-5bbf-4c76-8c47-c2ea5a886800';

UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'government_transparency'
WHERE id = '9f3cc95f-7158-468e-b6a9-216594a87c60';

UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'osint_tools'
WHERE id = '95a7184b-117a-4717-abea-6f556eda381d';

-- Health & Pharma Transparency
UPDATE documents SET
  document_type = 'Health & Pharma Transparency',
  subcategory = 'military_health'
WHERE id = 'dd47d190-662d-4a73-8318-c0ebf6429f15';

UPDATE documents SET
  document_type = 'Health & Pharma Transparency',
  subcategory = 'lab_safety'
WHERE id = 'e3a3abd7-a17a-4613-b192-140f07af94f5';

UPDATE documents SET
  document_type = 'Health & Pharma Transparency',
  subcategory = 'corporate_coverup'
WHERE id = 'bbae4fee-27f2-4732-8d79-9c1ee7b52fc4';

UPDATE documents SET
  document_type = 'Health & Pharma Transparency',
  subcategory = 'insurance_system'
WHERE id = '2a78a276-ead8-4c69-9103-553a7491ddc5';

-- Child Safety & Human Trafficking
UPDATE documents SET
  document_type = 'Child Safety & Human Trafficking',
  subcategory = 'institutional_abuse'
WHERE id = 'd803933e-cf07-4baf-9fbe-831aaf55ab49';

UPDATE documents SET
  document_type = 'Child Safety & Human Trafficking',
  subcategory = 'online_exploitation'
WHERE id = 'f490d400-4234-4527-b373-12e142676c00';

UPDATE documents SET
  document_type = 'Child Safety & Human Trafficking',
  subcategory = 'law_enforcement_ops'
WHERE id = '087f6484-d48a-4eb1-9d62-cc8bbb2159e3';

-- Media Manipulation & Information Control
UPDATE documents SET
  document_type = 'Media Manipulation & Information Control',
  subcategory = 'embedded_journalism'
WHERE id = 'bf2fa767-e807-424f-a215-fec9bfa04676';

UPDATE documents SET
  document_type = 'Media Manipulation & Information Control',
  subcategory = 'media_trust'
WHERE id = '9407825c-98f0-43c3-95a1-48309b2d1949';

UPDATE documents SET
  document_type = 'Media Manipulation & Information Control',
  subcategory = 'military_media'
WHERE id = '0fec9a75-a50d-4635-a3c1-90e0f2ef0796';

UPDATE documents SET
  document_type = 'Media Manipulation & Information Control',
  subcategory = 'media_consolidation'
WHERE id = 'c18dec72-aeee-487b-82fd-736a3eecff13';

-- War & Intelligence
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'foreign_intervention'
WHERE id = '17d1c909-8f8b-4e69-919d-60a1c5eedffd';

UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'pattern_analysis'
WHERE id = '86fe8c57-3356-4653-ac65-a3081a967538';

UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'pentagon_operations'
WHERE id = '579903f0-1cf3-45d6-a301-aeff0c731835';

-- Environmental & Corporate Accountability
UPDATE documents SET
  document_type = 'Environmental & Corporate Accountability',
  subcategory = 'water_rights'
WHERE id = '2df58bbd-4cc7-4eaf-8456-d793e2301075';

-- Haiti/foreign aid: goes to war_intelligence / foreign_intervention
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'foreign_intervention'
WHERE id = 'f96f2182-c333-45b8-8a1f-0b6186261bbf';
