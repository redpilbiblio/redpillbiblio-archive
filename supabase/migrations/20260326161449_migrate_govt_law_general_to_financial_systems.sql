/*
  # Migrate Government & Law /general items to Financial Systems & Corporate Power
  
  Moves finance/lobbying/labor items from Government & Law /general to the
  existing Financial Systems & Corporate Power pillar with proper subcategories.
*/

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'corporate_capture'
WHERE id = 'a459e345-cafe-4b82-9277-d38b3d0e1a46';

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'institutional_power'
WHERE id IN (
  '6874ae38-9e77-4194-b832-afa867d663b1',
  '9a9f8b2f-592a-478e-92ab-e812ada09633'
);

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'market_manipulation'
WHERE id = 'da1578fe-582a-4285-a4f4-f83e9d5a8feb';

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'insider_trading'
WHERE id = 'ea589baf-64cf-4c08-b4c4-0d4a76786f77';

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'banking_dynasties'
WHERE id IN (
  '10000000-0000-0000-0001-000000000003',
  '10000000-0000-0000-0001-000000000002',
  '10000000-0000-0000-0001-000000000008'
);

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'revolving_door'
WHERE id IN (
  '1f1e39b2-d004-4258-aa19-518fa62e078b',
  '4db7769a-4a3b-4ebc-8273-c2b0c5484e12'
);

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'property_rights'
WHERE id = '87ba9c0d-484f-4151-9e72-cd5c54e3e6b2';

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'labor_exploitation'
WHERE id IN (
  'e238e1eb-8ed7-405e-8aed-930f83b2d19c',
  'ea802c79-dafa-4c2e-9d6f-424079305547'
);

UPDATE documents SET
  document_type = 'Financial Systems & Corporate Power',
  subcategory = 'housing_alternatives'
WHERE id = '959af53c-3d9d-4cd7-9fa0-f385904b66c6';
