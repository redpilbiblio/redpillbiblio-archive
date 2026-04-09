/*
  # Step 4: Migrate Middle East Conflict items to War & Intelligence
  # Step 5: Rename Food, Environment & Public Health → Environmental & Corporate Accountability
  # Step 5b: Reassign Food/Environment general items to meaningful subcategories
*/

-- Step 4: Middle East Conflict → War & Intelligence
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'arms_trade'
WHERE id = 'a7cf3f5b-3a55-4e9e-ba17-40757d4ed126';

UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'foreign_intervention'
WHERE document_type = 'Middle East Conflict'
  AND id IN (
    '2f6a597d-8f9e-4f67-a47a-dd960a5623b3',
    '22c0bcbb-2246-4c7c-969b-384f171497df',
    'dc21468f-3415-4579-9f53-6a8e9afb8083'
  );

UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'iraq_war'
WHERE document_type = 'Middle East Conflict'
  AND id IN (
    '00a544dd-23a5-48c4-a252-bee0df7527be',
    '2ce98809-61f1-41f0-aa5e-7d2501df8ba0'
  );

-- Catch-all any remaining Middle East Conflict items
UPDATE documents SET
  document_type = 'War & Intelligence',
  subcategory = 'foreign_intervention'
WHERE document_type = 'Middle East Conflict';

-- Step 5: Rename Food, Environment & Public Health → Environmental & Corporate Accountability
UPDATE documents SET document_type = 'Environmental & Corporate Accountability'
WHERE document_type = 'Food, Environment & Public Health';

-- Step 5b: Reassign Environmental general items to meaningful subcategories
UPDATE documents SET subcategory = 'water_contamination'
WHERE document_type = 'Environmental & Corporate Accountability'
  AND subcategory = 'general'
  AND id IN (
    '3f53e587-2505-4459-b9c5-16c640ba9a9c',
    '59e835d9-6ca6-49f8-9e13-74a7f372361e',
    'ff5c7f8e-123a-49c5-8ee5-aa7ca9f7e0bd'
  );

UPDATE documents SET subcategory = 'chemical_exposure'
WHERE document_type = 'Environmental & Corporate Accountability'
  AND subcategory = 'general'
  AND id IN (
    '479ce722-a967-4434-abff-620bdfbb1810',
    '04b29a50-36be-44ca-b1fd-36266e80cf42',
    '2e42ee67-8e86-4248-bb4f-27b9b7ddbed3',
    'ee23dd3c-cbef-42c2-ba60-15899810da04',
    'b486c329-5ff2-4605-aa07-7f9d6fd7453f'
  );

UPDATE documents SET subcategory = 'corporate_pollution'
WHERE document_type = 'Environmental & Corporate Accountability'
  AND subcategory = 'general'
  AND id IN (
    'a9e0455e-199e-47a6-8481-b4e9e88f9ea3',
    '06dd53c4-6e4c-463c-940c-a54a8349a45e',
    '0ab34310-4c65-4828-a8a2-dd8946239bec',
    'd69cd705-07b9-4920-8a2e-792f013a7a00'
  );

UPDATE documents SET subcategory = 'resource_extraction'
WHERE document_type = 'Environmental & Corporate Accountability'
  AND subcategory = 'general'
  AND id IN (
    '95cef700-451e-407c-9636-eff351e27552',
    'ad545854-a2f9-4813-aa11-f70fc444d671'
  );

UPDATE documents SET subcategory = 'climate_accountability'
WHERE document_type = 'Environmental & Corporate Accountability'
  AND subcategory = 'general'
  AND id IN (
    '00460495-05c6-41f7-bafa-36448c710446',
    '503e5bb3-78f2-4bf8-87f9-752906657ab4',
    '24e8b6c0-2e0e-4b34-97d8-0edb8c9824e0'
  );

UPDATE documents SET subcategory = 'nuclear_disasters'
WHERE document_type = 'Environmental & Corporate Accountability'
  AND subcategory = 'general'
  AND id IN (
    '8e25833f-91ec-44b2-a011-9e04c277b583',
    '016d8036-aa82-44c4-b037-f83376977c05',
    '548d7cd8-e83b-4d3d-98c8-61dca2d379a4'
  );

UPDATE documents SET subcategory = 'food_systems'
WHERE document_type = 'Environmental & Corporate Accountability'
  AND subcategory = 'general'
  AND id IN (
    '7cea67ae-2c1e-43be-9d51-82d464f69b81',
    '2c0d49ad-3933-479e-adfc-08f96e1a4ab2'
  );

-- Catch-all remaining Environmental general → corporate_pollution
UPDATE documents SET subcategory = 'corporate_pollution'
WHERE document_type = 'Environmental & Corporate Accountability'
  AND subcategory = 'general';
