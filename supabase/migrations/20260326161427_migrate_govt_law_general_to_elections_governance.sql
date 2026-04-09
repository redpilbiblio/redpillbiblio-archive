/*
  # Migrate Government & Law /general items to Elections & Governance pillar
  
  Moves election-related items from Government & Law /general to the new
  Elections & Governance pillar with proper subcategories.
  Items moved: Bush v Gore, Citizens United, dark money, voting machines,
  electoral college, gerrymandering, Shelby County, SuperPACs, HAVA,
  pattern analysis, voter suppression, Trump DHS.
*/

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'contested_elections'
WHERE id IN (
  'f88cecae-7a47-40dc-b486-8dd939164fce',
  '7f50951d-ddc8-4184-8266-a3041bbfb40f'
);

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'campaign_finance'
WHERE id IN (
  '58f66959-2ef3-4640-9a3e-7a6c03e45c18',
  'e88d35a4-6bbd-4b96-b653-9ba73f8049aa',
  '8c99d90f-ecc6-4c0a-baa3-0f0258ec0e63'
);

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'voting_infrastructure'
WHERE id IN (
  'e98e3436-d58b-4ad2-b7f0-dceeaea804d7',
  '734e8544-612c-401c-9a8b-298b6814edea',
  '9c782c38-0efa-42d7-89e7-a1dd5825e39d',
  '1ed93a77-3b9e-4716-9493-3b99c0e13e00'
);

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'electoral_system'
WHERE id IN (
  'c314a303-b3f8-4c63-8e03-a4aba5fe5645',
  'cdc9567c-c961-418c-8431-3ac9feee9e80'
);

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'gerrymandering'
WHERE id IN (
  '94048a6d-9beb-413a-962b-48e65acbf825',
  'f3116966-a682-4bd2-8c15-026ca072b9c9'
);

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'voter_suppression'
WHERE id IN (
  'f5828efd-8687-4b84-97b5-3917307890c8',
  '05f9d69b-5c57-48a6-9909-84ceeadc621b',
  '4b468b10-b4a7-4f6b-8f3e-1c37abebb7f0'
);

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'pattern_analysis'
WHERE id = '90a0a44a-33e4-484c-9f77-e1a4c01b3d6e';

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'executive_action'
WHERE id = '98542a68-0615-4eb3-800f-f1521d52e1cc';

UPDATE documents SET
  document_type = 'Elections & Governance',
  subcategory = 'citizen_rights'
WHERE id = '175e25bd-2fad-448b-92a0-85f99c5d8c25';
