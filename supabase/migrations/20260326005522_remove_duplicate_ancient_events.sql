/*
  # Remove Duplicate Ancient History Events

  1. Changes
    - Removes duplicate events that were inserted when older versions already existed
    - Keeps the original (older) version of each event
    - Affects 9 events from 1650 BCE to 1200 BCE that were accidentally duplicated
*/

DELETE FROM events
WHERE id IN (
  SELECT e.id
  FROM events e
  INNER JOIN (
    SELECT title, MIN(created_at) as first_created
    FROM events
    WHERE title IN (
      'The Hyksos Invasion of Egypt — The First Military-Technology Gap',
      'The Eruption of Thera (Santorini) — A Volcano That May Have Ended Minoan Civilization',
      'The Shang Dynasty Oracle Bones — Divination, Power, and the Origins of Chinese Writing',
      'The Olmec Civilization — Mesoamerica''s ''Mother Culture''',
      'The Vedic Age and the Origins of the Caste System — Inequality Sanctified by Religion',
      'The Reign of Ramesses II — Propaganda as Imperial Instrument',
      'The Exodus and the Origins of Jewish Monotheism',
      'The Collapse of the Bronze Age — Civilization''s First System Failure',
      'The Invention of Iron Smelting — The Metal That Democratized Warfare'
    )
    GROUP BY title
    HAVING COUNT(*) > 1
  ) dupes ON e.title = dupes.title AND e.created_at > dupes.first_created
);