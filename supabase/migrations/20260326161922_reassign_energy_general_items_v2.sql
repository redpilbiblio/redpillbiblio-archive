/*
  # Reassign Energy & Suppressed Technology /general items
  
  Moves all items from general to meaningful subcategories.
*/

-- UAP / space / alien items → uap_disclosure
UPDATE documents SET subcategory = 'uap_disclosure'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general'
  AND id IN (
    'c214ea81-d36c-4fe7-bc9e-8e95885a8ac6',
    '337c8bee-ba65-4d56-9841-46c89176baaa'
  );

-- Space programs / moon race → space_programs
UPDATE documents SET subcategory = 'space_programs'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general'
  AND id = 'e40f3313-ef8f-4c87-b7aa-6fe6c84e1819';

-- LENR / cold fusion / free energy → suppressed_inventions
UPDATE documents SET subcategory = 'suppressed_inventions'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general'
  AND id IN (
    '33f686a2-38ca-4ce4-89ee-297ca2fe27be',
    '142f8c84-963d-407e-83b2-db6722b310f6',
    'b635fbd5-345c-4f7c-b9c1-3d0844068cba',
    'f9f68559-f8a9-408b-a020-6a926c6415fc',
    '6329504a-8038-432b-a961-d7134bb12c64',
    '99add077-e555-4b4d-be6a-2e90bb76898a',
    '62e3fe19-7ef4-45f6-b715-06213a8d7c5f',
    'd55ba4c2-ac16-485a-acd9-2afb8798936b',
    '66a971bd-a2d8-477c-a810-92351e186d21',
    '52eb8a91-e1ef-4165-82ab-41f05938aae6',
    '6c89603a-0942-4338-bb0d-40ee8ecaf85d',
    'cc1d549b-6b1f-42cc-890c-e8abf2d1e934',
    '90e2de13-de7d-474f-84a8-b25101dfdd4d',
    '57aaad8f-5ebe-4d83-84fa-80f3d480058e',
    '28605e21-a94e-42fc-814e-383982f07984'
  );

-- Nuclear / fusion milestones → nuclear_energy
UPDATE documents SET subcategory = 'nuclear_energy'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general'
  AND id IN (
    '9e7c3081-1002-45a6-882a-946a93c66537',
    '299c60f4-6b81-46f5-ad33-f3eb7fabc17f',
    '96a0fd0a-1052-4339-9b47-6ed3035c0493',
    '80b49066-e09d-4f26-ab8b-73eeecd4558c',
    'd037f67c-a3ce-4620-ae7b-165080d07129'
  );

-- EV / solar / renewable suppression → suppressed_inventions
UPDATE documents SET subcategory = 'suppressed_inventions'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general'
  AND id IN (
    '6a368f39-ced8-49fa-83be-73b310053556',
    '6319f8a2-6c22-4b3c-b7aa-c7d8b97088ac',
    'edc353a5-e291-49fe-b73d-90cac1e8d59e'
  );

-- Texas energy market / ERCOT → energy_monopolies
UPDATE documents SET subcategory = 'energy_monopolies'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general'
  AND id IN (
    'c8c9fbe7-2229-4a54-bee9-6ef66fa23928',
    'db909f5a-3903-4026-a37c-9476b07aa3dd',
    '8b9a5dea-dfed-491d-88e9-64146b83f806'
  );

-- Patent secrecy → patents
UPDATE documents SET subcategory = 'patents'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general'
  AND id IN (
    '3913623e-2fd8-4606-a489-0b003d37f7dd',
    '94ca6fa7-7b05-465e-9606-c18b4e7d2fad',
    'a6787512-587d-4d3a-892d-5afa7318f364'
  );

-- Solar tariffs → energy_monopolies
UPDATE documents SET subcategory = 'energy_monopolies'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general'
  AND id = '5fa87e0e-cffc-4b76-bb58-855e040817e7';

-- Catch-all: any remaining Energy general → suppressed_inventions
UPDATE documents SET subcategory = 'suppressed_inventions'
WHERE document_type = 'Energy & Suppressed Technology'
  AND subcategory = 'general';
