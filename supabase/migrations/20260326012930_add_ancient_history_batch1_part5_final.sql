/*
  # Add Ancient History Events - Batch 1, Part 5 (Final 2 events)

  1. New Data
    - 2 remaining timeline events: Hunnic Invasions (441 CE) and Fall of Western Roman Empire (476 CE)

  2. Notes
    - CE events use actual dates
    - Uses NOT EXISTS checks to prevent duplicate inserts
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
SELECT * FROM (VALUES
  (
    'The Hunnic Invasions — Attila the Hun Brings Rome to Its Knees',
    'Between 441 and 453 CE, Attila the Hun led the most devastating barbarian assault on the late Roman Empire, destroying dozens of cities across the Balkans, invading Gaul in 451 CE (stopped at the Battle of the Catalaunian Plains in the only major defeat of his career), and sacking northern Italy in 452 CE. Attila extracted enormous tribute payments from Eastern Rome — estimated at 700 pounds of gold annually — a protection racket that drained Byzantine finances. When Attila died suddenly in 453 CE on his wedding night, the Hunnic Empire collapsed almost immediately, but the damage to the Western Empire was irreversible: Roman population, tax base, and military were so depleted that Romulus Augustulus was deposed without meaningful resistance 23 years later.',
    '0441-01-01'::date,
    'War & Intelligence Operations',
    '{"tags":["Attila","Huns","Rome","invasion","fall of Rome"],"category":"Ancient Wars","significance":"critical","sources":["Wikipedia - Attila","Britannica - Attila the Hun","World History Encyclopedia"],"year":441,"display_date":"441 CE","era":"CE"}'::jsonb
  ),
  (
    'The Fall of the Western Roman Empire — Civilization''s Most Studied Collapse',
    'On September 4, 476 CE, the Germanic chieftain Odoacer deposed the last Western Roman Emperor, Romulus Augustulus, sending the imperial regalia to Constantinople and ending a 985-year tradition of Roman rule in the West. Rome''s fall was not sudden: over a century, military overextension, inflation, barbarian migrations, political instability (26 emperors in 50 years during the 3rd century), and the severing of trade networks had hollowed the empire. Edward Gibbon famously blamed Christianity for turning Rome''s martial virtues inward; modern historians emphasize economic collapse. The fall ended ancient history and began the Middle Ages.',
    '0476-09-04'::date,
    'Financial Systems',
    '{"tags":["Rome","fall","Western Empire","Odoacer","collapse"],"category":"Civilizational Collapse","significance":"critical","sources":["Wikipedia - Fall of the Western Roman Empire","Britannica - Roman Empire","Reddit - Timescale of Roman History"],"year":476,"display_date":"476 CE","era":"CE"}'::jsonb
  )
) AS v(title, description, event_date, pillar, metadata)
WHERE NOT EXISTS (
  SELECT 1 FROM events e WHERE e.title = v.title
);