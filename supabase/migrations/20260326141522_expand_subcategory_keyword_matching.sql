/*
  # Expand subcategory keyword matching for auto-classification

  1. Summary
    Improves the initial keyword-based subcategory assignment introduced in the
    previous migration. Documents that remained as 'general' are re-evaluated
    against a broader set of keyword patterns covering common content types
    found in the database.

  2. New keyword rules added
    - 'FOIA' -> 'whistleblower_cases' (Government & Law)
    - 'whistleblow' -> 'whistleblower_cases' (Government & Law)
    - 'FBI' / 'federal bureau' -> 'fbi_ops' (Government & Law)
    - 'executive order' -> 'executive_orders' (Government & Law)
    - 'judge' / 'court' / 'judicial' -> 'judicial_corruption' (Government & Law)
    - 'surveillance' / 'wiretap' -> 'mass_surveillance' (AI, Surveillance)
    - 'facial recognition' -> 'facial_recognition' (AI, Surveillance)
    - 'data harvest' / 'data broker' -> 'data_harvesting' (AI, Surveillance)
    - 'Monsanto' / 'pesticide' / 'glyphosate' -> 'corporate_pollution' (Environmental)
    - 'chemical spill' / 'toxic waste' -> 'chemical_spills' (Environmental)
    - 'climate' -> 'climate_data' (Environmental)
    - 'Goldman' / 'hedge fund' / 'short sell' -> 'market_manipulation' (Financial)
    - 'money launder' -> 'money_laundering' (Financial)
    - 'tax haven' / 'offshore' -> 'tax_havens' (Financial)
    - 'insider trad' -> 'insider_trading' (Financial)
    - 'Facebook' / 'Twitter' / 'censorship' / 'social media' -> 'social_media_censorship' (Media)
    - 'propaganda' / 'Operation Mockingbird' -> 'war_propaganda' (Media)
    - 'Bilderberg' -> 'bilderberg' (Secret Societies)
    - 'Skull and Bones' -> 'skull_bones' (Secret Societies)
    - 'Bohemian Grove' -> 'bohemian_grove' (Secret Societies)
    - 'cold war' -> 'cold_war_ops' (War & Intelligence)
    - 'arms deal' / 'arms trade' / 'weapon' -> 'arms_trade' (War & Intelligence)
    - 'sex traffick' / 'child traffick' -> 'trafficking_networks' (Child Safety)
    - 'energy monopol' / 'oil cartel' -> 'energy_monopolies' (Energy)

  3. Notes
    - Only updates documents that are currently 'general'
    - Does not overwrite previously assigned specific subcategories
    - Uses ILIKE for case-insensitive matching
    - Matches on both title and description columns
*/

UPDATE documents SET subcategory = CASE

  -- Government & Law
  WHEN (title ILIKE '%FOIA%' OR description ILIKE '%FOIA%'
     OR title ILIKE '%whistleblow%' OR description ILIKE '%whistleblow%')
    THEN 'whistleblower_cases'

  WHEN (title ILIKE '%FBI%' OR description ILIKE '%FBI%'
     OR title ILIKE '%federal bureau%' OR description ILIKE '%federal bureau%')
    THEN 'fbi_ops'

  WHEN (title ILIKE '%executive order%' OR description ILIKE '%executive order%')
    THEN 'executive_orders'

  WHEN (title ILIKE '%judicial%' OR description ILIKE '%judicial%'
     OR title ILIKE '%corrupt judge%' OR description ILIKE '%corrupt judge%')
    THEN 'judicial_corruption'

  -- AI & Surveillance
  WHEN (title ILIKE '%surveillance%' OR description ILIKE '%surveillance%'
     OR title ILIKE '%wiretap%' OR description ILIKE '%wiretap%')
    THEN 'mass_surveillance'

  WHEN (title ILIKE '%facial recognition%' OR description ILIKE '%facial recognition%')
    THEN 'facial_recognition'

  WHEN (title ILIKE '%data harvest%' OR description ILIKE '%data harvest%'
     OR title ILIKE '%data broker%' OR description ILIKE '%data broker%')
    THEN 'data_harvesting'

  -- Environmental
  WHEN (title ILIKE '%Monsanto%' OR description ILIKE '%Monsanto%'
     OR title ILIKE '%pesticide%' OR description ILIKE '%pesticide%'
     OR title ILIKE '%glyphosate%' OR description ILIKE '%glyphosate%')
    THEN 'corporate_pollution'

  WHEN (title ILIKE '%chemical spill%' OR description ILIKE '%chemical spill%'
     OR title ILIKE '%toxic waste%' OR description ILIKE '%toxic waste%'
     OR title ILIKE '%toxic dump%' OR description ILIKE '%toxic dump%')
    THEN 'chemical_spills'

  WHEN (title ILIKE '%climate%' OR description ILIKE '%climate%')
    THEN 'climate_data'

  -- Financial
  WHEN (title ILIKE '%Goldman%' OR description ILIKE '%Goldman%'
     OR title ILIKE '%hedge fund%' OR description ILIKE '%hedge fund%'
     OR title ILIKE '%short sell%' OR description ILIKE '%short sell%')
    THEN 'market_manipulation'

  WHEN (title ILIKE '%money launder%' OR description ILIKE '%money launder%')
    THEN 'money_laundering'

  WHEN (title ILIKE '%tax haven%' OR description ILIKE '%tax haven%'
     OR title ILIKE '%offshore%' OR description ILIKE '%offshore%')
    THEN 'tax_havens'

  WHEN (title ILIKE '%insider trad%' OR description ILIKE '%insider trad%')
    THEN 'insider_trading'

  -- Media Manipulation
  WHEN (title ILIKE '%Facebook%' OR description ILIKE '%Facebook%'
     OR title ILIKE '%Twitter%' OR description ILIKE '%Twitter%'
     OR title ILIKE '%censorship%' OR description ILIKE '%censorship%'
     OR title ILIKE '%social media%' OR description ILIKE '%social media%')
    THEN 'social_media_censorship'

  WHEN (title ILIKE '%propaganda%' OR description ILIKE '%propaganda%'
     OR title ILIKE '%Operation Mockingbird%' OR description ILIKE '%Operation Mockingbird%')
    THEN 'war_propaganda'

  -- Secret Societies
  WHEN (title ILIKE '%Bilderberg%' OR description ILIKE '%Bilderberg%')
    THEN 'bilderberg'

  WHEN (title ILIKE '%Skull and Bones%' OR description ILIKE '%Skull and Bones%'
     OR title ILIKE '%Skull & Bones%' OR description ILIKE '%Skull & Bones%')
    THEN 'skull_bones'

  WHEN (title ILIKE '%Bohemian Grove%' OR description ILIKE '%Bohemian Grove%')
    THEN 'bohemian_grove'

  -- War & Intelligence
  WHEN (title ILIKE '%cold war%' OR description ILIKE '%cold war%')
    THEN 'cold_war_ops'

  WHEN (title ILIKE '%arms deal%' OR description ILIKE '%arms deal%'
     OR title ILIKE '%arms trade%' OR description ILIKE '%arms trade%'
     OR title ILIKE '%weapon%' OR description ILIKE '%weapon%')
    THEN 'arms_trade'

  -- Child Safety
  WHEN (title ILIKE '%sex traffick%' OR description ILIKE '%sex traffick%'
     OR title ILIKE '%child traffick%' OR description ILIKE '%child traffick%')
    THEN 'trafficking_networks'

  -- Energy
  WHEN (title ILIKE '%energy monopol%' OR description ILIKE '%energy monopol%'
     OR title ILIKE '%oil cartel%' OR description ILIKE '%oil cartel%')
    THEN 'energy_monopolies'

  ELSE 'general'
END
WHERE subcategory = 'general';
