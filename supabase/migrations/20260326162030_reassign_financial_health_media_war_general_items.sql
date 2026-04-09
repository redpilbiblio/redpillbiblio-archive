/*
  # Reassign general items: Financial Systems, Health & Pharma, Media, War & Intelligence
  
  Clears the general subcategory from these four pillars.
*/

-- FINANCIAL SYSTEMS & CORPORATE POWER /general
UPDATE documents SET subcategory = 'monetary_policy'
WHERE document_type = 'Financial Systems & Corporate Power'
  AND subcategory = 'general'
  AND id IN (
    '1d0dd0e4-6ea8-4dde-8970-4d63bc627f48',
    '621f65c2-4b42-44c7-9e79-1567b81ef4e2',
    '567d710e-dd08-4809-844a-88744be2925b',
    '59686183-fc22-46f5-a0e5-573369c73d5b',
    'b5b306c4-590f-46e4-acdf-43124ba203f6',
    'fe895498-b592-48b1-a222-e713eb34e0e7',
    'd9b88f1f-57c0-4a7a-b5be-de52f7535553',
    '10000000-0000-0000-0001-000000000005',
    '10000000-0000-0000-0001-000000000007',
    '10000000-0000-0000-0001-000000000004'
  );

UPDATE documents SET subcategory = 'housing_crisis'
WHERE document_type = 'Financial Systems & Corporate Power'
  AND subcategory = 'general'
  AND id = '017a1fa0-3cf9-4521-896f-ac76f7e4ecf6';

UPDATE documents SET subcategory = 'revolving_door'
WHERE document_type = 'Financial Systems & Corporate Power'
  AND subcategory = 'general'
  AND id = '8172e54f-4e74-4b8c-bca7-d4c2bf17989c';

UPDATE documents SET subcategory = 'market_manipulation'
WHERE document_type = 'Financial Systems & Corporate Power'
  AND subcategory = 'general'
  AND id IN (
    '947b94d3-1c22-4d42-b494-ccc7be934fb2',
    '95142b4f-74e9-4e67-a77b-1960f02f6b5a',
    'dcf3dc19-dc71-4f4b-8695-fa91207e2771'
  );

UPDATE documents SET subcategory = 'land_enclosure'
WHERE document_type = 'Financial Systems & Corporate Power'
  AND subcategory = 'general'
  AND id = '00a01ae7-a609-4c8a-96ce-54c665c87dcc';

UPDATE documents SET subcategory = 'patents'
WHERE document_type = 'Financial Systems & Corporate Power'
  AND subcategory = 'general'
  AND id = '0ae16738-5290-4c1b-8f06-fb03803dc0d3';

-- Catch-all remaining Financial Systems general
UPDATE documents SET subcategory = 'monetary_policy'
WHERE document_type = 'Financial Systems & Corporate Power'
  AND subcategory = 'general';

-- HEALTH & PHARMA TRANSPARENCY /general
UPDATE documents SET subcategory = 'military_health'
WHERE document_type = 'Health & Pharma Transparency'
  AND subcategory = 'general'
  AND id = '296e50f9-e40f-4c4a-a1c5-e36e8cc8ad85';

UPDATE documents SET subcategory = 'corporate_coverup'
WHERE document_type = 'Health & Pharma Transparency'
  AND subcategory = 'general'
  AND id IN (
    'bb542c4f-48d6-4d9b-b90f-26a0629b09fb',
    '374cd066-2885-434d-b95c-4c7e9540b971',
    '02df5c88-3cb0-4f0e-8dd8-6ca1d0f6f7bc',
    'a87142a1-39e2-473f-a5f8-369db3e092d0',
    '14b4f686-0f08-4f38-afcc-682c2dd022a7',
    'e8e55939-b19c-4146-b60f-b56ee79a9b9a',
    '8819c492-e91d-46f5-a225-c43eb9d366cd',
    '50cd9ae2-9724-4a35-b34e-9a0333cb15ff',
    'bf51e7ef-1d93-40d7-957c-892255f5c85e'
  );

UPDATE documents SET subcategory = 'lab_safety'
WHERE document_type = 'Health & Pharma Transparency'
  AND subcategory = 'general'
  AND id = 'dd8e5a6d-dcd0-45c3-b710-06f3c2d5316e';

UPDATE documents SET subcategory = 'regulatory_capture'
WHERE document_type = 'Health & Pharma Transparency'
  AND subcategory = 'general'
  AND id IN (
    '42d74402-59bf-469a-9488-40c295d60062',
    'baf7dc7a-e93f-4bd3-ad26-588eb0d8cb3c',
    '43305cfa-a889-4c0a-b8b7-46042d68b85b'
  );

UPDATE documents SET subcategory = 'historical_experiments'
WHERE document_type = 'Health & Pharma Transparency'
  AND subcategory = 'general'
  AND id IN (
    '70737f26-091a-4274-a501-d6152d048db0',
    '31b13d99-0382-42de-8977-99e136d1372f',
    '7c38fdd7-6592-4a8a-94f5-6947860ecaba'
  );

UPDATE documents SET subcategory = 'pharma_fraud'
WHERE document_type = 'Health & Pharma Transparency'
  AND subcategory = 'general'
  AND id IN (
    'ffc51ced-482c-4eb5-9f61-260600d76772',
    '76c72be5-dc13-4c85-a913-e8db273fec49'
  );

-- Catch-all remaining Health general
UPDATE documents SET subcategory = 'corporate_coverup'
WHERE document_type = 'Health & Pharma Transparency'
  AND subcategory = 'general';

-- MEDIA MANIPULATION & INFORMATION CONTROL /general
UPDATE documents SET subcategory = 'corporate_media'
WHERE document_type = 'Media Manipulation & Information Control'
  AND subcategory = 'general'
  AND id IN (
    'b3f97f74-507f-4c3f-97b0-a56dc54ad889',
    '8ff1c21f-884f-496e-9665-a10cdc5e0db3',
    '2342285c-67b4-4986-a2b3-12d713e1ef23',
    '52877f0c-7611-48d3-b37b-a02abca23203'
  );

UPDATE documents SET subcategory = 'gov_media_ops'
WHERE document_type = 'Media Manipulation & Information Control'
  AND subcategory = 'general'
  AND id IN (
    'b75e2491-74e6-4908-99a2-92c8f928f3bb',
    '6e2804a3-7e1b-4d2c-9a04-d955cdc905d5'
  );

UPDATE documents SET subcategory = 'suppressed_stories'
WHERE document_type = 'Media Manipulation & Information Control'
  AND subcategory = 'general'
  AND id IN (
    '4e3a0746-cd70-43b3-b648-279dd012e80b',
    'aec56f50-c432-4038-b49c-4522d7c487bb'
  );

UPDATE documents SET subcategory = 'broadcast_control'
WHERE document_type = 'Media Manipulation & Information Control'
  AND subcategory = 'general'
  AND id = '5c9dac14-2272-4342-9f0b-807a7c3ca88a';

-- Catch-all remaining Media general
UPDATE documents SET subcategory = 'corporate_media'
WHERE document_type = 'Media Manipulation & Information Control'
  AND subcategory = 'general';

-- WAR & INTELLIGENCE /general
UPDATE documents SET subcategory = 'foreign_intervention'
WHERE document_type = 'War & Intelligence'
  AND subcategory = 'general'
  AND id IN (
    '26f80009-83c8-41ae-8c48-0fca748ec443',
    'fbd066be-05fd-4afe-b7c1-a779c66e9461'
  );

UPDATE documents SET subcategory = 'false_flag_ops'
WHERE document_type = 'War & Intelligence'
  AND subcategory = 'general'
  AND id IN (
    'a4a9f0d8-6baf-4287-8ccb-12406a01eeeb',
    'fe23f6fd-ae6b-4ebd-a956-5a168ffe06ef'
  );

UPDATE documents SET subcategory = 'cold_war_ops'
WHERE document_type = 'War & Intelligence'
  AND subcategory = 'general'
  AND id IN (
    '55e7ae3f-515b-44a8-908a-d692b6b52220',
    '9d6c3d88-ab37-45ec-9a16-e40661778e51',
    'd6fcf9e1-26e2-4625-b6f3-19ce0af50660',
    'b0930ccd-0437-4d4d-9956-c9b73643ed49'
  );

UPDATE documents SET subcategory = 'modern_conflicts'
WHERE document_type = 'War & Intelligence'
  AND subcategory = 'general'
  AND id IN (
    '708cb584-0946-4ffa-b38b-012f4bada969',
    '8da59761-c329-4cee-9392-7d725ec7313f'
  );

UPDATE documents SET subcategory = 'silicon_valley'
WHERE document_type = 'War & Intelligence'
  AND subcategory = 'general'
  AND id = '3be9b47f-0cf3-4287-828d-de937f809f90';

UPDATE documents SET subcategory = 'drug_wars'
WHERE document_type = 'War & Intelligence'
  AND subcategory = 'general'
  AND id = '654c687d-675a-4488-8d0d-10c62881ce67';

-- Catch-all remaining War & Intelligence general
UPDATE documents SET subcategory = 'modern_conflicts'
WHERE document_type = 'War & Intelligence'
  AND subcategory = 'general';
