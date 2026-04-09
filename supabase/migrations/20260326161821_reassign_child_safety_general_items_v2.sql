/*
  # Reassign Child Safety & Human Trafficking /general items
  
  Moves all items from general to meaningful subcategories.
*/

-- Entertainment/celebrity abuse → celebrity_exploitation
UPDATE documents SET subcategory = 'celebrity_exploitation'
WHERE document_type = 'Child Safety & Human Trafficking'
  AND subcategory = 'general'
  AND id IN (
    '1238488d-0239-4545-8c46-84acd9b2fbeb',
    '9a0f9bad-495e-4c86-b78a-6423f80e0af9',
    'b227bf3c-3120-456b-8a60-2df74a24eb2b',
    '61db7518-fb13-440d-8aed-25d1eb114bef',
    '35fa308e-bbe3-4441-bfcf-4b5bc42f3eb8',
    'c2b6e98d-435b-41a1-8883-4766b11685a5'
  );

-- Child labor → child_labor
UPDATE documents SET subcategory = 'child_labor'
WHERE document_type = 'Child Safety & Human Trafficking'
  AND subcategory = 'general'
  AND id IN (
    '2b8928ce-2e28-40cf-85de-cbfb6305587b',
    '8dc0ddd8-099c-43ab-92be-a8651e0acc29',
    '7060880e-f587-484c-a551-8d53a3c753a8',
    'df7ee7e0-39ca-4ede-b622-5ae2f60693a4',
    'adfdf34b-f049-4995-a68a-491cd527b0ea'
  );

-- Historical institutional abuse (stolen generations, residential schools) → historical_abuse
UPDATE documents SET subcategory = 'historical_abuse'
WHERE document_type = 'Child Safety & Human Trafficking'
  AND subcategory = 'general'
  AND id IN (
    'd8674e4c-33f1-4791-8286-4e4350035b11',
    '6f6fae3f-db05-456f-a3d8-574a202ccb5a'
  );

-- Religious/sports institutional abuse → institutional_abuse
UPDATE documents SET subcategory = 'institutional_abuse'
WHERE document_type = 'Child Safety & Human Trafficking'
  AND subcategory = 'general'
  AND id IN (
    'cc3bad1d-a2ac-451f-8d6f-6846b55b0898',
    '367d39f7-9f8b-4db3-a023-2f64f03730a9',
    '36236e7b-2697-4524-9221-8f79a7475d98',
    '98f23546-d46f-4c71-ab61-188b95b42d39',
    '1bc28d4e-54f2-4c3d-b1b2-c1fde27f86be'
  );

-- CSAM / dark web / online exploitation → online_exploitation
UPDATE documents SET subcategory = 'online_exploitation'
WHERE document_type = 'Child Safety & Human Trafficking'
  AND subcategory = 'general'
  AND id IN (
    '180d950c-b5a6-4ed5-8e14-3cf2fa3c9940',
    'cd2c07a9-6611-429a-b579-c15eece2800d',
    'c94902de-27a5-4b3f-a128-081f224e7ac0',
    '256f415e-2237-4a70-9c60-236eb00e4abd',
    'd32481f8-9c1b-4ecd-ba82-0dcd983f7324',
    '60cca4cd-7596-411d-b3c3-b216c43ece1c',
    '0984c082-d699-49ea-a6fe-ebbe95fb86fd',
    '51855d92-7708-4df5-b9c6-9fa29781a702',
    '40113870-5fa6-4aee-93a9-b2bae389f719',
    'b996f4e8-4fa9-4b73-ba25-f60ea58da8ad'
  );

-- Grooming gangs / smuggling networks / exploitation → trafficking_networks
UPDATE documents SET subcategory = 'trafficking_networks'
WHERE document_type = 'Child Safety & Human Trafficking'
  AND subcategory = 'general'
  AND id IN (
    '65eb251f-4b65-4c2f-9a82-7ef8c9b6b548',
    '6323aeb4-b8fd-43a6-88fc-bcefd63ff1ae',
    'a039e60d-f8d3-4d79-b9e5-b6320d190c01',
    '27e35fde-090a-422c-b0fa-f28118d0d124'
  );

-- School to prison pipeline → systemic_failures
UPDATE documents SET subcategory = 'systemic_failures'
WHERE document_type = 'Child Safety & Human Trafficking'
  AND subcategory = 'general'
  AND id = '586ee770-85c0-4b62-9faa-35aabd3268b8';

-- Catch-all: any remaining general items in Child Safety → institutional_abuse
UPDATE documents SET subcategory = 'institutional_abuse'
WHERE document_type = 'Child Safety & Human Trafficking'
  AND subcategory = 'general';
