/*
  # Reassign 10 evidence items from 6 small standalone categories to main pillars

  1. Modified Tables
    - `documents`
      - Updates `document_type` for 10 specific records to reassign them to main pillars

  2. Reassignments
    - "Settlement" (1 item) -> "Government & Law"
      - Senator Grassley Mediates Settlement for 10 FBI Whistleblowers
    - "Surveillance Program" (1 item) -> "Government & Law"
      - FBI Surveillance of Parents at School Board Meetings
    - "Whistleblower Retaliation" (2 items) -> "Government & Law"
      - Marcus Allen: 27-Month Suspension for Forwarding News Articles
      - FBI Retaliation Against Agent O'Boyle: Family Left Homeless
    - "Legal Ruling" (1 item) -> "Government & Law"
      - MSPB Rules No Jurisdiction Over FBI Security Clearance Retaliation
    - "Congressional Testimony" (2 items) -> split between pillars
      - Bank of America Warrantless Customer Data Transfer to FBI -> "Financial Systems & Corporate Power"
      - FBI Agent Garret O'Boyle Congressional Testimony on FBI Weaponization -> "Government & Law"
    - "Cross-Pillar Pattern" (3 items) -> split across pillars
      - The Pattern - The Health-to-Profit Conversion -> "Health & Pharma Transparency"
      - The Pattern - The Whistleblower Arc -> "Government & Law"
      - The Pattern - The Privatization Playbook -> "Financial Systems & Corporate Power"

  3. Result
    - Government & Law: gains 7 items (101 + 7 = 108)
    - Financial Systems & Corporate Power: gains 2 items (35 + 2 = 37)
    - Health & Pharma Transparency: gains 1 item (28 + 1 = 29)
    - 6 small standalone categories dissolved (Settlement, Surveillance Program, Whistleblower Retaliation, Legal Ruling, Congressional Testimony, Cross-Pillar Pattern)

  4. Important Notes
    - No evidence items are deleted, only reassigned
    - No schema changes
*/

UPDATE documents
SET document_type = 'Government & Law'
WHERE id = '9e83c822-0cd6-431c-b937-32ff8ef04c3a';

UPDATE documents
SET document_type = 'Government & Law'
WHERE id = 'ed5401c2-47ad-4ac5-a4b8-2dee5b6ef535';

UPDATE documents
SET document_type = 'Government & Law'
WHERE id = '00d8c53b-1026-4e8c-92b0-df38b71d970a';

UPDATE documents
SET document_type = 'Government & Law'
WHERE id = '80936531-3207-4b34-aaf1-ca4cfeb4cfcd';

UPDATE documents
SET document_type = 'Government & Law'
WHERE id = '14c9d653-56ca-46e3-93b2-2d79349c7802';

UPDATE documents
SET document_type = 'Financial Systems & Corporate Power'
WHERE id = '659b6194-5585-402e-9197-282e664d4a15';

UPDATE documents
SET document_type = 'Government & Law'
WHERE id = '33eeddca-61a4-4873-a45f-508a059bec36';

UPDATE documents
SET document_type = 'Health & Pharma Transparency'
WHERE id = 'ffc51ced-482c-4eb5-9f61-260600d76772';

UPDATE documents
SET document_type = 'Government & Law'
WHERE id = '925df3bd-a644-494e-9302-9cc6afd7792c';

UPDATE documents
SET document_type = 'Financial Systems & Corporate Power'
WHERE id = '864fb5e2-f0bb-4553-a31a-a04153dd1ca8';
