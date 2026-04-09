/*
  # Migrate Government & Law non-general subcategory items to canonical pillars
  
  Redistributes all remaining Government & Law items (with specific subcategories)
  to the correct canonical pillars. This completes the dissolution of the
  Government & Law root node.
*/

-- cia_operations items → various pillars based on content
-- Bank of North Dakota → Financial Systems (public banking)
UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'public_banking'
WHERE id = 'ed35a9cb-797a-4d1a-a665-669b3dba2d67';

-- CIA Iran 1953 → War & Intelligence / cia_operations
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'cia_operations'
WHERE id = '40714025-6dc0-49ba-a05e-debac2e8401a';

-- CIA Geoengineering → Environmental & Corporate Accountability
UPDATE documents SET
  document_type = 'Environmental & Corporate Accountability',
  subcategory = 'geoengineering'
WHERE id = 'ebe69299-f9c6-405f-b897-769c110010de';

-- Citizens United (duplicate in cia_operations) → Elections & Governance
UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'campaign_finance'
WHERE id = '72f6fb24-79df-4f7c-9ee9-6df323bdb9a2';

-- Clearview AI → AI, Surveillance
UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'facial_recognition'
WHERE id = '8caaa8e0-22e7-494f-aaf5-73172acdfe4b';

-- Clinton-Associated Deaths → War & Intelligence / pattern_analysis
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'pattern_analysis'
WHERE id = '79295c21-5419-42dd-8dc1-c6d49fc0a2db';

-- Commodity Futures Act → Financial Systems / market_manipulation
UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'market_manipulation'
WHERE id = 'c55cd37d-8be3-4977-95f7-200112f819ec';

-- Credit Unions → Financial Systems / public_banking
UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'public_banking'
WHERE id = 'ad122dd5-0387-46b6-b520-8bd175d2e311';

-- DEA Deputy Indicted → War & Intelligence / cia_operations (drug enforcement corruption)
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'cia_operations'
WHERE id = 'b617789d-20dd-43da-bfcb-ab47da0fd2f4';

-- Exposed CIA Assassination Programs → War & Intelligence / cia_operations
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'cia_operations'
WHERE id = 'c235e902-a7db-4e6e-a01d-372de6dfc382';

-- Senate Torture Report → War & Intelligence / cia_operations
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'cia_operations'
WHERE id = '27eb304a-e31b-4f5e-8303-79ffb636b820';

-- FBI Agent O'Boyle testimony → AI, Surveillance / whistleblower_protection
UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'whistleblower_protection'
WHERE id = '33eeddca-61a4-4873-a45f-508a059bec36';

-- Iran-Contra → War & Intelligence / cia_operations
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'cia_operations'
WHERE id = 'c3717196-092d-42f2-9775-c17982199a58';

-- Marcus Allen suspension → AI, Surveillance / whistleblower_protection
UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'whistleblower_protection'
WHERE id = '00d8c53b-1026-4e8c-92b0-df38b71d970a';

-- Pentagon Black Budget → Space & Black Budget Programs / black_budget
UPDATE documents SET
  document_type = 'Space & Black Budget Programs',
  subcategory = 'black_budget'
WHERE id = '85668600-06d6-4b12-85ec-cb73e8c1536b';

-- Rothschild Napoleonic Wars financing → Financial Systems / banking_dynasties
UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'banking_dynasties'
WHERE id = '10000000-0000-0000-0001-000000000001';

-- Grassley Mediates FBI Whistleblowers → AI, Surveillance / whistleblower_protection
UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'whistleblower_protection'
WHERE id = '9e83c822-0cd6-431c-b937-32ff8ef04c3a';

-- Social Media Algorithm → Media Manipulation / social_media_censorship
UPDATE documents SET
  document_type = 'Media Manipulation & Information Control',
  subcategory = 'social_media_censorship'
WHERE id = '9465e423-1a9a-4125-bee8-4dc68530b46c';

-- Deloitte Media Outlook (in cia_operations slot) → Media Manipulation / media_trust
UPDATE documents SET
  document_type = 'Media Manipulation & Information Control',
  subcategory = 'media_trust'
WHERE id = '248a29a1-6e0f-41fd-87eb-8fb7bd112885';

-- Venezuela Operation → War & Intelligence / cia_operations
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'cia_operations'
WHERE id = '29808c02-2929-4f99-a816-340c7549108e';

-- China Rare Earth Controls → War & Intelligence / arms_trade
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'arms_trade'
WHERE id = 'a64f7a3c-5623-4377-9940-dc456ded9c33';

-- Koch Network Dark Money → Financial Systems / corporate_capture
UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'corporate_capture'
WHERE id = '3f936a7a-978f-41fd-b0ee-a74eee2cd4ed';

-- International Climate Litigation → Environmental & Corporate Accountability / climate_accountability
UPDATE documents SET
  document_type = 'Environmental & Corporate Accountability',
  subcategory = 'climate_accountability'
WHERE id = '73675c21-e127-4993-b8cd-e944125a37ad';

-- COINTELPRO → War & Intelligence / fbi_operations
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'fbi_operations'
WHERE id = '91598885-32af-4611-8ec1-f1d8eb41c9b3';

-- USA Gymnastics / Nassar → Child Safety / institutional_abuse
UPDATE documents SET
  document_type = 'Child Safety & Human Trafficking',
  subcategory = 'institutional_abuse'
WHERE id = 'd67eb80e-0161-47d5-8c60-e1923b7eafcf';

-- mass_surveillance items → AI, Surveillance
UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'data_harvesting'
WHERE id = '94cbb64e-031f-4393-84ce-5fa4c0174aec';

UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'mass_surveillance'
WHERE id IN (
  '66b6061f-c071-4441-8829-3bcd3bd56c00',
  'b0508c5a-fadc-4a2a-8ca0-a4f45bc3507d'
);

-- Watergate → Elections & Governance / electoral_system
UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'electoral_system'
WHERE id = '5399fc26-6438-4d73-8113-d098ee43ff59';

-- pharma_fraud items → Health & Pharma Transparency
UPDATE documents SET
  document_type = 'Health & Pharma Transparency',
  subcategory = 'pharma_fraud'
WHERE id IN (
  'e05668b5-e169-403c-8232-d3eb99e44e53',
  '0e5116bd-43f9-4e6e-a634-399fdea63d88'
);

-- trafficking_networks items → Child Safety
UPDATE documents SET
  document_type = 'Child Safety & Human Trafficking',
  subcategory = 'trafficking_networks'
WHERE id IN (
  '2acb5637-6b9d-4191-bf0a-a49083c77dc3',
  '3e37b2ab-87fc-4682-811a-bb6d2da003d4'
);

-- uap_disclosure items → Space & Black Budget Programs
UPDATE documents SET
  document_type = 'Space & Black Budget Programs',
  subcategory = 'uap_disclosure'
WHERE id IN (
  '1553a4cb-48ee-47c9-b486-785de35998f6',
  'e0fa22da-5e04-473e-8933-566b46225c4f',
  'c213cfeb-0f23-4766-9fee-e04d1cd47279'
);

-- war_propaganda → Media Manipulation
UPDATE documents SET
  document_type = 'Media Manipulation & Information Control',
  subcategory = 'war_propaganda'
WHERE id = '67ab8d68-daaf-484c-b894-603204dad908';

-- whistleblower_cases → AI, Surveillance / whistleblower_protection
UPDATE documents SET
  document_type = 'AI, Surveillance & Digital Rights',
  subcategory = 'whistleblower_protection'
WHERE id IN (
  '937083fe-8603-4a74-94e4-d4e6df4c317b',
  '2fab71da-feb8-4362-a608-3bcd370e01f5',
  '80936531-3207-4b34-aaf1-ca4cfeb4cfcd',
  'ed5401c2-47ad-4ac5-a4b8-2dee5b6ef535',
  '14c9d653-56ca-46e3-93b2-2d79349c7802',
  'a1996fd0-61c7-4f5a-b807-8fd59441051d',
  '925df3bd-a644-494e-9302-9cc6afd7792c'
);

-- insider_trading → Financial Systems
UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'insider_trading'
WHERE id = 'b377604b-c37a-4663-ab1e-a2a9919ee395';
