/*
  # Clinton Epstein Depositions — March 2, 2026

  ## Summary
  Adds the House Oversight Committee's release of Clinton deposition videos and related
  timeline events. Also updates the existing Bill Clinton Epstein entry with full deposition details.

  ## New Documents
  - "The Clintons Under Oath: House Oversight Releases 9 Hours of Epstein Deposition Video"
    (Pillar: Child Safety & Trafficking + Elections & Democracy)

  ## New Timeline Events
  - Feb 26–27, 2026: Clinton depositions conducted in Chappaqua, NY
  - Mar 2, 2026: House Oversight releases full deposition videos (9 hr 9 min)

  ## Modified Documents
  - Bill Clinton Epstein entry (8c58c263-8dff-4fd0-a837-cb71c5ac4bb3): updated with deposition details

  ## Notes
  - Hillary Clinton initially refused to appear Jan 13, 2026; contempt proceedings threatened
  - Bill Clinton recalled Trump conversation placing Trump outside investigation scope
  - No criminal referrals produced; pattern consistent with existing DOJ prosecution gap analysis
*/

-- Insert new document: Clinton depositions
INSERT INTO documents (
  title, description, content, source_url, verification_tier, document_type,
  date_published, official_response, challenges, slug, metadata
) VALUES (
  'The Clintons Under Oath: House Oversight Releases 9 Hours of Epstein Deposition Video',
  'On March 2, 2026, the House Oversight Committee released full video depositions of Hillary and Bill Clinton — 9 hours and 9 minutes taken under oath about their relationships with Jeffrey Epstein and Ghislaine Maxwell.',
  'On March 2, 2026, the House Committee on Oversight and Government Reform released the full video depositions of former Secretary of State Hillary Clinton and former President Bill Clinton, taken under oath regarding their connections to convicted sex trafficker Jeffrey Epstein. The depositions were conducted on February 26 and 27, 2026, in Chappaqua, New York, and together run 9 hours and 9 minutes. The committee''s stated scope covered "the personal relationships between the Clintons and Mr. Epstein and Ghislaine Maxwell, including but not limited to illegal activities and potential violations of ethics rules related to elected officials."

THE EVENT: Bill Clinton described his relationship with Epstein as a "short-term acquaintance" for "humanitarian endeavors" that concluded in 2003 — before Epstein''s offenses became public. He denied any sexual activity occurred during time spent at Epstein''s properties. He recalled a conversation with Trump around 2002–2003 about Epstein: "[Trump] never indicated anything that would lead me to believe he was involved in any inappropriate activities concerning Epstein. He simply stated: ''We were friends, but then we had a disagreement over a property deal.''"

Hillary Clinton initially failed to appear for a January 13, 2026 deposition date. The committee formally considered contempt proceedings before she appeared on February 26. Her legal team had sought a public hearing and was denied by the committee. When a photograph from the closed deposition was subsequently leaked, her team expressed frustration — a closed proceeding that still became public through back channels. Both Clintons denied any awareness of Epstein''s criminal activities, despite Ghislaine Maxwell — Epstein''s convicted co-conspirator — having attended Clinton events.

OFFICIAL RECORD: No criminal referrals emerged from the depositions. Despite 3.5 million pages of Epstein files being released broadly, the DOJ has produced no new prosecutions. Global fallout from the Epstein files has included Prince Andrew being detained, ambassadors fired, Thomas Pritzker resigning from Hyatt, and multiple criminal investigations opened abroad — none yet touching the Clintons.

AFTERMATH: The depositions represent the first time a former president and a former Secretary of State have been compelled under oath to answer questions about a convicted sex trafficker. The nine hours of testimony were released in full video form. The committee''s decision to hold a closed hearing — despite Clinton''s own team requesting a public one — and the subsequent photograph leak illustrate the information control dynamics that have characterized the entire Epstein investigation. The DOJ''s failure to prosecute any of Epstein''s clients despite Maxwell''s conviction establishing the trafficking network''s existence remains the central unresolved legal question.

In May 2025, President Trump had posted a "Clinton Body Count" video on Truth Social, which the Washington Post characterized as "false conspiracy theories" — a reference to a theory dating to 1994 that has shadowed the Clintons throughout the Epstein investigation.

CONNECTION WEB: Bill Clinton (26 documented flights on Lolita Express) → Ghislaine Maxwell (Clinton events attendance) → House Oversight Committee deposition Feb 2026 → Hillary Clinton contempt threat → no criminal referrals → DOJ prosecution gap → Epstein Files Transparency Act (3.5M pages released) → Prince Andrew detention → Thomas Pritzker resignation → Trump "Clinton Body Count" post (May 2025) → Politico reporting on DOJ no-prosecution pattern.',
  'https://oversight.house.gov/release/oversight-committee-releases-bill-and-hillary-clinton-deposition-videos/',
  'Tier 1',
  'Congressional Record / Video Testimony',
  '2026-03-02',
  'Both Clintons denied awareness of Epstein''s criminal activities. Bill Clinton characterized the relationship as a short-term humanitarian acquaintance that ended in 2003. Hillary Clinton''s team stated the closed hearing format was imposed by the committee over her team''s objection to that format. No criminal referrals were issued. The DOJ has made no public statement connecting the depositions to any investigation.',
  'The depositions produced no criminal referrals and no admissions. Bill Clinton''s account of his relationship with Epstein as brief and humanitarian cannot be independently contradicted by public evidence beyond the documented flight logs. The absence of criminal referrals following 9 hours of sworn testimony may reflect genuine lack of prosecutable evidence, or may reflect the same institutional reluctance that has characterized the DOJ''s broader approach to Epstein''s client network. The distinction between these interpretations remains unresolvable on current public record.',
  'clintons-under-oath-house-oversight-epstein-deposition-2026',
  jsonb_build_object(
    'pillar', 'Child Safety & Trafficking',
    'category', 'Epstein Network & Elite Trafficking',
    'connection_pillars', ARRAY['Elections & Democracy', 'Media Manipulation', 'War & Intelligence'],
    'importance', 'PURE_GOLD',
    'sources', ARRAY[
      'Oversight Committee. "Oversight Committee Releases Bill and Hillary Clinton Deposition Videos." House Committee on Oversight and Government Reform, 2 Mar. 2026, https://oversight.house.gov/release/oversight-committee-releases-bill-and-hillary-clinton-deposition-videos/.',
      '"Clinton Epstein Deposition — Live Coverage." BBC News, 2 Mar. 2026, https://www.bbc.com/news/live/ce94y2yykgrt.',
      '"Watch: Hillary Clinton''s Full Deposition on Jeffrey Epstein Ties Before House Oversight Panel." PBS NewsHour, https://www.pbs.org/newshour/politics/watch-hillary-clintons-full-deposition-on-jeffrey-epstein-ties-before-house-oversight-panel.',
      '"Bill and Hillary Clinton Deposition — House Oversight Committee." CNN, 2 Mar. 2026, https://www.cnn.com/2026/03/02/politics/video/bill-hillary-clinton-deposition-house-oversight-committee-digvid-vrtc.',
      '"Bill Clinton Full Deposition." YouTube, uploaded by House Oversight Committee, https://www.youtube.com/watch?v=WMVrlC9fheo.',
      'Bump, Philip. "Trump Promoted False Conspiracy Theories About the Clintons." The Washington Post, 17 May 2025, https://www.washingtonpost.com/politics/2025/05/17/trump-clinton-false-conspiracy-theories/.',
      'Gerstein, Josh. "Epstein Files, Justice Department, No Prosecutions." Politico, 11 Mar. 2026, https://www.politico.com/news/magazine/2026/03/11/epstein-files-justice-department-no-prosecutions-column-00821127.',
      '"Epstein Files Fallout: Resignations, Firings, Investigations." NBC News, https://www.nbcnews.com/politics/justice-department/epstein-files-fallout-resignations-firings-investigations-rcna259702.'
    ],
    'keywords', ARRAY['Hillary Clinton', 'Bill Clinton', 'Epstein deposition', 'House Oversight', 'Ghislaine Maxwell', 'contempt proceedings', 'no criminal referrals', 'DOJ prosecution gap', 'Chappaqua', '2026']
  )
);

-- Add timeline events
INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'Clinton Depositions Conducted — Chappaqua, NY',
  'Former President Bill Clinton (Feb 27) and former Secretary of State Hillary Clinton (Feb 26) are deposed under oath in Chappaqua, New York by the House Committee on Oversight and Government Reform. Hillary Clinton had initially refused to appear on January 13, 2026, forcing the committee to prepare contempt proceedings. Together the depositions run 9 hours and 9 minutes. Both Clintons deny awareness of Epstein''s criminal activities. The hearings are held closed to the public — the opposite of what Clinton''s legal team had requested.',
  '2026-02-26',
  'Child Safety & Trafficking',
  jsonb_build_object(
    'significance', 'CRITICAL',
    'tags', ARRAY['Clinton', 'Epstein', 'deposition', 'House Oversight', 'congressional testimony', 'Chappaqua'],
    'related_pillars', ARRAY['Elections & Democracy', 'Media Manipulation']
  )
),
(
  'House Oversight Releases Full Clinton-Epstein Deposition Videos',
  'The House Committee on Oversight and Government Reform publicly releases the complete video recordings of both Clinton depositions — 9 hours and 9 minutes of sworn testimony about the Clintons'' relationships with Jeffrey Epstein and Ghislaine Maxwell. The release marks the first time a former president and former Secretary of State have been compelled to answer questions under oath about a convicted sex trafficker. No criminal referrals are issued. The DOJ has produced no new prosecutions despite 3.5 million pages of Epstein files already released.',
  '2026-03-02',
  'Child Safety & Trafficking',
  jsonb_build_object(
    'significance', 'CRITICAL',
    'tags', ARRAY['Clinton', 'Epstein', 'deposition release', 'House Oversight', 'video testimony', 'no criminal referrals', 'DOJ', 'Ghislaine Maxwell'],
    'related_pillars', ARRAY['Elections & Democracy', 'Media Manipulation', 'War & Intelligence'],
    'source_url', 'https://oversight.house.gov/release/oversight-committee-releases-bill-and-hillary-clinton-deposition-videos/'
  )
),
(
  'Hillary Clinton Misses Epstein Deposition — Contempt Proceedings Threatened',
  'Hillary Clinton fails to appear for her scheduled January 13, 2026 deposition before the House Oversight Committee regarding her connections to Jeffrey Epstein and Ghislaine Maxwell. The committee formally prepares contempt proceedings. Clinton ultimately appears six weeks later on February 26, 2026.',
  '2026-01-13',
  'Elections & Democracy',
  jsonb_build_object(
    'significance', 'HIGH',
    'tags', ARRAY['Hillary Clinton', 'Epstein', 'contempt proceedings', 'House Oversight', 'deposition', 'no-show'],
    'related_pillars', ARRAY['Child Safety & Trafficking', 'Media Manipulation']
  )
);

-- Update existing Bill Clinton Epstein entry with deposition details
UPDATE documents SET
  description = 'Bill Clinton''s documented connections to Jeffrey Epstein — 26 flights on the Lolita Express, Ghislaine Maxwell''s attendance at Clinton events — and his February 27, 2026 sworn deposition before the House Oversight Committee, the first time a former U.S. president has testified under oath about a convicted sex trafficker.',
  content = CONCAT(
    content,
    E'\n\n2026 UPDATE — CONGRESSIONAL DEPOSITION: On February 27, 2026, Bill Clinton was deposed under oath in Chappaqua, New York by the House Committee on Oversight and Government Reform. The deposition, part of a 9-hour, 9-minute combined testimony release with Hillary Clinton, covered "personal relationships between the Clintons and Mr. Epstein and Ghislaine Maxwell, including but not limited to illegal activities and potential violations of ethics rules." Clinton described his relationship with Epstein as a "short-term acquaintance" for "humanitarian endeavors" that ended in 2003. He denied any sexual activity occurred at Epstein''s properties. When asked about Trump, Clinton recalled: "[Trump] never indicated anything that would lead me to believe he was involved in any inappropriate activities concerning Epstein. He simply stated: ''We were friends, but then we had a disagreement over a property deal.''" No criminal referrals resulted from the depositions. The full video was released by the committee on March 2, 2026.'
  ),
  metadata = jsonb_set(
    jsonb_set(
      metadata,
      '{sources}',
      (metadata->'sources')::jsonb || '["Oversight Committee. \"Oversight Committee Releases Bill and Hillary Clinton Deposition Videos.\" House Committee on Oversight and Government Reform, 2 Mar. 2026, https://oversight.house.gov/release/oversight-committee-releases-bill-and-hillary-clinton-deposition-videos/.", "\"Bill Clinton Full Deposition.\" YouTube, uploaded by House Oversight Committee, https://www.youtube.com/watch?v=WMVrlC9fheo."]'::jsonb
    ),
    '{tags}',
    '["Bill Clinton", "Epstein", "flight logs", "DOJ", "political connections", "House Oversight deposition", "Chappaqua", "2026", "sworn testimony", "Ghislaine Maxwell", "no criminal referrals"]'::jsonb
  )
WHERE id = '8c58c263-8dff-4fd0-a837-cb71c5ac4bb3';
