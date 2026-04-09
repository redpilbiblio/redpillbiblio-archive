/*
  # Reorganize Network View into 10 Subject-Matter Pillars
  
  1. Purpose
     - Consolidate 15+ document-type-based categories into 10 subject-matter pillars
     - Make the Evidence Board network view more intuitive and user-friendly
     - Group evidence by what it's about (financial systems, war, AI) rather than document type
  
  2. The 10 New Pillars
     - Financial Systems & Corporate Power
     - War & Intelligence
     - AI, Surveillance & Digital Rights
     - Health & Pharma Transparency
     - Child Safety & Human Trafficking
     - Energy & Suppressed Technology
     - Media Manipulation & Information Control
     - Government, Law & Elections
     - Middle East Conflict
     - Food, Environment & Public Health
  
  3. Changes
     - Update document_type column to reflect subject-matter categories
     - Preserve all evidence content (titles, descriptions, sources remain unchanged)
     - Only modify the categorization/pillar assignment
  
  4. Security
     - No changes to RLS policies
     - No changes to table structure
     - Data integrity maintained
*/

-- PILLAR 1: Financial Systems & Corporate Power
UPDATE documents SET document_type = 'Financial Systems & Corporate Power' 
WHERE title ILIKE '%Enclosure Movement%' 
   OR title ILIKE '%Transatlantic Slave Trade%Economic%'
   OR title ILIKE '%Cantillon%'
   OR title ILIKE '%Standard Oil%'
   OR title ILIKE '%Morgan%Purchasing Agent%'
   OR title ILIKE '%Glass-Steagall%'
   OR title ILIKE '%Gramm-Leach-Bliley%'
   OR title ILIKE '%BCCI%'
   OR title ILIKE '%Asian Financial Crisis%'
   OR title ILIKE '%LTCM%'
   OR title ILIKE '%Long-Term Capital Management%'
   OR title ILIKE '%Commodities Futures Modernization%'
   OR title ILIKE '%2008 Financial Crisis%'
   OR title ILIKE '%Wall Street%bailout%'
   OR title ILIKE '%Fed Balance Sheet%'
   OR title ILIKE '%Federal Reserve%Balance%'
   OR title ILIKE '%Sackler%financial%'
   OR title ILIKE '%BlackRock%housing%'
   OR title ILIKE '%Surveillance Capitalism%'
   OR title ILIKE '%FTX%'
   OR title ILIKE '%Bitcoin%'
   OR title ILIKE '%Cryptocurrency%'
   OR title ILIKE '%Student Loan%'
   OR title ILIKE '%Wage Theft%'
   OR title ILIKE '%Shrinkflation%'
   OR title ILIKE '%Credit Score%'
   OR title ILIKE '%Revolving Door%'
   OR title ILIKE '%Invention Secrecy Act%'
   OR title ILIKE '%Rockefeller%Federal Reserve%'
   OR title ILIKE '%Aldrich Plan%'
   OR title ILIKE '%Nixon Shock%'
   OR title ILIKE '%Bretton Woods%'
   OR title ILIKE '%Petrodollar%'
   OR title ILIKE '%Prison Industrial Complex%'
   OR title ILIKE '%Seed Monopoly%'
   OR title ILIKE '%LIBOR%'
   OR title ILIKE '%Panama Papers%'
   OR title ILIKE '%Corporate Consolidation%Housing%';

-- PILLAR 2: War & Intelligence
UPDATE documents SET document_type = 'War & Intelligence'
WHERE title ILIKE '%Opium Wars%'
   OR title ILIKE '%Operation Northwoods%'
   OR title ILIKE '%Gulf of Tonkin%'
   OR title ILIKE '%Pentagon Papers%'
   OR title ILIKE '%Iran-Contra%'
   OR title ILIKE '%Church Committee%'
   OR title ILIKE '%Operation Gladio%'
   OR title ILIKE '%Plan Colombia%'
   OR title ILIKE '%Gary Webb%'
   OR title ILIKE '%CIA%Cocaine%'
   OR title ILIKE '%Libya%regime%'
   OR title ILIKE '%Private military%'
   OR title ILIKE '%Pentagon%audit%'
   OR title ILIKE '%Special Access Programs%'
   OR title ILIKE '%Operation Paperclip%'
   OR title ILIKE '%MK-Ultra%'
   OR title ILIKE '%MK Ultra%'
   OR title ILIKE '%COINTELPRO%'
   OR title ILIKE '%FBI%Martin Luther King%'
   OR title ILIKE '%CIA Publication%1,000%Books%'
   OR title ILIKE '%Operation Mockingbird%'
   OR title ILIKE '%DARPA%Doorstep%'
   OR title ILIKE '%Pentagon-to-Silicon Valley%'
   OR title ILIKE '%Signalgate%'
   OR title ILIKE '%Operation Condor%'
   OR title ILIKE '%Dulles Brothers%';

-- PILLAR 3: AI, Surveillance & Digital Rights  
UPDATE documents SET document_type = 'AI, Surveillance & Digital Rights'
WHERE title ILIKE '%PRISM%'
   OR title ILIKE '%Snowden%'
   OR title ILIKE '%Palantir%'
   OR title ILIKE '%Stingray%'
   OR title ILIKE '%Predictive Policing%'
   OR title ILIKE '%Five Eyes%'
   OR title ILIKE '%ECHELON%'
   OR title ILIKE '%AI-Generated Content%'
   OR title ILIKE '%FISA%702%'
   OR title ILIKE '%EU AI Act%'
   OR title ILIKE '%Uyghur%Surveillance%'
   OR title ILIKE '%6G Spatial Surveillance%'
   OR title ILIKE '%Facebook Papers%'
   OR title ILIKE '%AI Political Bias%'
   OR title ILIKE '%AI Chatbots%Opinion%'
   OR title ILIKE '%Yale AI%'
   OR title ILIKE '%TikTok Ban%'
   OR title ILIKE '%Data Breach%'
   OR title ILIKE '%Equifax%'
   OR title ILIKE '%Cambridge Analytica%'
   OR title ILIKE '%Patriot Act%';

-- PILLAR 4: Health & Pharma Transparency
UPDATE documents SET document_type = 'Health & Pharma Transparency'
WHERE title ILIKE '%Tuskegee%'
   OR title ILIKE '%DES%Drug%'
   OR title ILIKE '%Thalidomide%'
   OR title ILIKE '%Vioxx%'
   OR title ILIKE '%Opioid%'
   OR title ILIKE '%Sackler%' AND title NOT ILIKE '%financial%'
   OR title ILIKE '%Radium Girls%'
   OR title ILIKE '%Lead%Gasoline%'
   OR title ILIKE '%Royal Rife%'
   OR title ILIKE '%Frequency Therapy%'
   OR title ILIKE '%NTP Fluoride%'
   OR title ILIKE '%PFAS%'
   OR title ILIKE '%Forever Chemicals%'
   OR title ILIKE '%Health Insurance AI%'
   OR title ILIKE '%FDA Adverse Event%'
   OR title ILIKE '%COVID%'
   OR title ILIKE '%Sugar Industry%Harvard%'
   OR title ILIKE '%Microplastics%'
   OR title ILIKE '%Asbestos%'
   OR title ILIKE '%Pharmaceutical Campaign Finance%'
   OR title ILIKE '%Tuskegee-to-COVID%'
   OR title ILIKE '%Agent Orange%' AND title ILIKE '%Environmental Legacy%';

-- PILLAR 5: Child Safety & Human Trafficking
UPDATE documents SET document_type = 'Child Safety & Human Trafficking'
WHERE title ILIKE '%Epstein%'
   OR title ILIKE '%Maxwell%'
   OR title ILIKE '%Catholic Church%Abuse%'
   OR title ILIKE '%Grooming Gangs%'
   OR title ILIKE '%Rotherham%'
   OR title ILIKE '%Child Welfare%'
   OR title ILIKE '%Foster Care%'
   OR title ILIKE '%NCMEC%'
   OR title ILIKE '%Backpage%'
   OR title ILIKE '%Wexner%'
   OR title ILIKE '%AI-CSAM%'
   OR title ILIKE '%EU CSA%'
   OR title ILIKE '%Human Trafficking%'
   OR title ILIKE '%UN Peacekeeping%Sexual%'
   OR title ILIKE '%School-to-Prison Pipeline%';

-- PILLAR 6: Energy & Suppressed Technology
UPDATE documents SET document_type = 'Energy & Suppressed Technology'
WHERE title ILIKE '%Tesla%Wardenclyffe%'
   OR title ILIKE '%Tesla%Seized Papers%'
   OR title ILIKE '%Suppression of Hemp%'
   OR title ILIKE '%Cold Fusion%'
   OR title ILIKE '%Fleischmann-Pons%'
   OR title ILIKE '%GM EV1%'
   OR title ILIKE '%Molten Salt Reactor%'
   OR title ILIKE '%Fukushima%'
   OR title ILIKE '%TEPCO%'
   OR title ILIKE '%Project Blue Book%'
   OR title ILIKE '%AATIP%'
   OR title ILIKE '%AARO%'
   OR title ILIKE '%David Grusch%'
   OR title ILIKE '%UAP Disclosure%'
   OR title ILIKE '%Trump UAP%'
   OR title ILIKE '%Connecticut UAP%'
   OR title ILIKE '%Alien.gov%'
   OR title ILIKE '%Artemis%'
   OR title ILIKE '%Space%';

-- PILLAR 7: Media Manipulation & Information Control
UPDATE documents SET document_type = 'Media Manipulation & Information Control'
WHERE title ILIKE '%Twitter Files%'
   OR title ILIKE '%Deloitte Media Trust%'
   OR title ILIKE '%Media Consolidation%'
   OR title ILIKE '%Project Censored%'
   OR title ILIKE '%Smith-Mundt%'
   OR title ILIKE '%Iraq WMD%media%'
   OR title ILIKE '%Manufacturing Consent%'
   OR title ILIKE '%Chomsky%'
   OR title ILIKE '%Sinclair Broadcasting%'
   OR title ILIKE '%Venezuela%media%';

-- PILLAR 8: Government, Law & Elections
UPDATE documents SET document_type = 'Government, Law & Elections'
WHERE title ILIKE '%Bush v. Gore%'
   OR title ILIKE '%Citizens United%'
   OR title ILIKE '%Shelby County%Holder%'
   OR title ILIKE '%Gerrymandering%'
   OR title ILIKE '%Dark Money%'
   OR title ILIKE '%Voter Suppression%'
   OR title ILIKE '%Electronic Voting%'
   OR title ILIKE '%DOGE Records%'
   OR title ILIKE '%Rwanda%Genocide%'
   OR title ILIKE '%China Rare Earth%'
   OR title ILIKE '%Haiti Earthquake Aid%'
   OR title ILIKE '%Trump DHS%'
   OR title ILIKE '%Boeing Whistleblower%'
   OR title ILIKE '%Senate Torture Report%'
   OR title ILIKE '%Exposed Torture%';

-- PILLAR 9: Middle East Conflict
UPDATE documents SET document_type = 'Middle East Conflict'
WHERE title ILIKE '%Balfour Declaration%'
   OR title ILIKE '%Iran%1953%'
   OR title ILIKE '%Iran Hostage%'
   OR title ILIKE '%Iraq War%'
   OR title ILIKE '%Yemen%' AND document_type = 'Military & Intelligence Records'
   OR title ILIKE '%Iran Strikes%'
   OR title ILIKE '%Israel%Palestine%'
   OR title ILIKE '%Yitzhak Rabin%';

-- PILLAR 10: Food, Environment & Public Health
UPDATE documents SET document_type = 'Food, Environment & Public Health'
WHERE title ILIKE '%Bolsonaro%Amazon%'
   OR title ILIKE '%Brazil%deforestation%'
   OR title ILIKE '%Congo Cobalt%'
   OR title ILIKE '%Corporate Poisoning Pattern%'
   OR title ILIKE '%Monsanto%' AND title NOT ILIKE '%Roundup%'
   OR title ILIKE '%Food safety%'
   OR title ILIKE '%Swiss AML%'
   OR title ILIKE '%Water Wars%'
   OR title ILIKE '%Nestlé%'
   OR title ILIKE '%Bechtel%'
   OR title ILIKE '%Fossil Fuel%Campaign Spending%';

-- Handle Pattern Analysis items (Cross-Pillar)
UPDATE documents SET document_type = 'Cross-Pillar Pattern'
WHERE document_type = 'Pattern Analysis / Meta-Item'
   OR title ILIKE '%Pattern%Whistleblower%'
   OR title ILIKE '%Pattern%Privatization%'
   OR title ILIKE '%Pattern%Health-to-Profit%';

-- Set default pillar for any remaining unmapped items
UPDATE documents SET document_type = 'Government, Law & Elections'
WHERE document_type NOT IN (
  'Financial Systems & Corporate Power',
  'War & Intelligence',
  'AI, Surveillance & Digital Rights',
  'Health & Pharma Transparency',
  'Child Safety & Human Trafficking',
  'Energy & Suppressed Technology',
  'Media Manipulation & Information Control',
  'Government, Law & Elections',
  'Middle East Conflict',
  'Food, Environment & Public Health',
  'Cross-Pillar Pattern'
);
