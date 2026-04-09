/*
  # Reassign AI, Surveillance & Digital Rights /general items
  
  Moves all 16 items from the general subcategory to meaningful subcategories
  within AI, Surveillance & Digital Rights.
*/

-- Internet shutdowns → digital_rights
UPDATE documents SET subcategory = 'digital_rights'
WHERE id = 'ee67b9bb-4142-4a25-bddf-c67577d1adb6';

-- Data breaches → data_breaches
UPDATE documents SET subcategory = 'data_breaches'
WHERE id = '2a835cc7-ba6b-4c36-844f-eb098c7eef9f';

-- 23andMe breach → data_breaches
UPDATE documents SET subcategory = 'data_breaches'
WHERE id = '37703e90-b4a2-438e-b6a5-fcb44bae3029';

-- AI Political Bias → ai_manipulation
UPDATE documents SET subcategory = 'ai_manipulation'
WHERE id = '229fd394-b019-4bae-b585-bfbf54326b48';

-- Amazon Alexa COPPA → data_harvesting
UPDATE documents SET subcategory = 'data_harvesting'
WHERE id = '04e39469-8663-4071-b14e-854655c6cb17';

-- Apple Analytics → data_harvesting
UPDATE documents SET subcategory = 'data_harvesting'
WHERE id = '44008c1b-208e-4fe2-b206-c3c0d3c7528c';

-- Flock Safety license plates → surveillance_state
UPDATE documents SET subcategory = 'surveillance_state'
WHERE id = '958a723f-50e0-4876-896b-c0fa99e2e071';

-- Geofence Warrant → surveillance_state
UPDATE documents SET subcategory = 'surveillance_state'
WHERE id = '05175317-8856-407b-99a7-b81d3392394c';

-- Global Encryption Crackdown → encryption_policy
UPDATE documents SET subcategory = 'encryption_policy'
WHERE id = 'cc0d23ca-c020-4c3d-8ef7-b6b0eb0668ad';

-- Google Play COPPA → data_harvesting
UPDATE documents SET subcategory = 'data_harvesting'
WHERE id = 'd6b7b022-ae31-4174-859a-de3be8129e12';

-- Google Privacy Verdict → data_harvesting
UPDATE documents SET subcategory = 'data_harvesting'
WHERE id = '9af83639-6577-4b26-b64e-8ba1e7bf5c2d';

-- Police Drones → surveillance_state
UPDATE documents SET subcategory = 'surveillance_state'
WHERE id = '980b02dc-30fd-4472-a3bd-b88d2fdfefef';

-- REAL ID → surveillance_state
UPDATE documents SET subcategory = 'surveillance_state'
WHERE id = '34a65ef6-28ab-43ab-b44f-1db20eb37792';

-- TikTok COPPA → data_harvesting
UPDATE documents SET subcategory = 'data_harvesting'
WHERE id = 'ed5a940a-65d4-4d11-a530-ab22d254b11a';

-- UK Online Safety Act → encryption_policy
UPDATE documents SET subcategory = 'encryption_policy'
WHERE id = 'b207f32e-9eda-42ed-91e2-3f99658ce58a';

-- Yale AI Political Opinions → ai_manipulation
UPDATE documents SET subcategory = 'ai_manipulation'
WHERE id = 'f179bb4e-9c31-4b2b-99af-8d6c45056a2a';
