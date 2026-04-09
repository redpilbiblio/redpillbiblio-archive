/*
  # Add Child Safety & Trafficking Nodes (12 new documents)

  Adds 12 new evidence nodes to the "Child Safety & Human Trafficking" pillar:
  41. Catholic Church Global Abuse Crisis
  42. Boy Scouts of America Abuse Files
  43. USA Gymnastics / Larry Nassar
  44. UK Grooming Gangs / Rotherham
  45. Canada Residential Schools
  46. Australian Stolen Generations
  47. DynCorp Bosnia / Afghanistan Trafficking
  48. Backpage.com / Sex Trafficking Facilitation
  49. Thailand Child Sex Tourism
  50. Foster Care Pipeline
  51. IWF CSAM / AI Crisis
  52. Philippines Webcam Studios
*/

INSERT INTO documents (title, slug, description, content, source_url, verification_tier, document_type, date_published, metadata)
VALUES

(
  'Catholic Church Global Sexual Abuse Crisis (1950s-Present)',
  'catholic-church-global-sexual-abuse-crisis',
  'The Catholic Church has been implicated in systematic sexual abuse of children by clergy worldwide, with institutional cover-up by Church hierarchy documented in official government investigations across multiple countries. The John Jay College study found over 4,000 U.S. priests credibly accused of abuse involving over 10,000 victims between 1950 and 2002. The Church''s policy of transferring accused priests rather than reporting them to authorities has been documented in scores of grand jury reports.',
  'The Catholic Church sexual abuse crisis represents the largest documented institutional cover-up of child sexual abuse in history. The John Jay College of Criminal Justice study commissioned by the U.S. Conference of Catholic Bishops (2004) found that 4,392 priests — approximately 4% of all U.S. priests serving between 1950 and 2002 — were credibly accused of sexually abusing minors, involving a minimum of 10,667 victims. Grand jury reports in Pennsylvania (2018), New Jersey, Illinois, and other states documented in hundreds of pages that Church leadership had systematically transferred accused priests between dioceses rather than reporting them to law enforcement, destroyed records, and instructed abuse victims not to contact authorities. The 2018 Pennsylvania Grand Jury report covering six dioceses found over 300 priest-perpetrators and over 1,000 identifiable child victims — with the report noting the true number was likely much higher. The Vatican''s handling of these cases across multiple countries has been the subject of government investigations in Ireland (Ryan Report, 2009), Australia (Royal Commission, 2017), France (CIASE Report, 2021), and Germany. The French CIASE report estimated approximately 330,000 people were sexually abused by clergy and Catholic school staff in France since 1950.',
  'https://en.wikipedia.org/wiki/Catholic_Church_sexual_abuse_cases',
  'verified',
  'Child Safety & Human Trafficking',
  '2004-02-27',
  '{"category": "Institutional child abuse / systematic cover-up", "importance": "PURE_GOLD", "tags": ["Catholic Church", "clergy abuse", "institutional cover-up", "grand jury", "John Jay study", "Pennsylvania", "Vatican"]}'
),

(
  'Boy Scouts of America Abuse Files (1920s-2020)',
  'boy-scouts-of-america-abuse-files',
  'The Boy Scouts of America maintained secret internal files — known as the Perversion Files or Ineligible Volunteer Files — documenting over 7,800 alleged abusers from 1920 to 2016. The BSA fought for decades to keep these files from law enforcement and the public. In 2020, the BSA filed for bankruptcy as over 92,000 abuse survivors came forward in the largest sex abuse litigation in U.S. history.',
  'The Boy Scouts of America maintained confidential internal records known as the Perversion Files or Ineligible Volunteer Files beginning as early as the 1920s. These files documented accusations of sexual abuse against scout leaders. The BSA used them to quietly expel accused volunteers without informing law enforcement or the public, and without warning parents. In 2012, the Los Angeles Times published approximately 1,900 of these files obtained through litigation, documenting cases spanning decades. A 2019 study by sexual abuse attorney Jeff Anderson found the files contained names of approximately 7,819 alleged abusers. In February 2020, the BSA filed for Chapter 11 bankruptcy protection as over 92,000 alleged abuse survivors filed claims — the largest sex abuse litigation in U.S. history. In April 2023, a $2.46 billion settlement was approved, compensating over 82,000 survivors. The settlement required the BSA to establish a compensation fund. Former BSA executives and insurance companies also contributed. Church organizations that sponsored BSA troops — including the Church of Jesus Christ of Latter-day Saints, the United Methodist Church, and Catholic dioceses — faced separate litigation.',
  'https://en.wikipedia.org/wiki/Boy_Scouts_of_America_sex_abuse_cases',
  'verified',
  'Child Safety & Human Trafficking',
  '2020-02-18',
  '{"category": "Institutional child abuse / cover-up files", "importance": "PURE_GOLD", "tags": ["Boy Scouts", "BSA", "Perversion Files", "child abuse", "bankruptcy", "cover-up", "92000 survivors"]}'
),

(
  'USA Gymnastics / Larry Nassar Abuse (1996-2018)',
  'usa-gymnastics-larry-nassar-abuse',
  'Dr. Larry Nassar, team physician for USA Gymnastics and Michigan State University, sexually abused over 500 girls and women over more than two decades under the guise of medical treatment. USA Gymnastics and MSU both received prior complaints about Nassar''s conduct and took no action. The FBI also received a credible complaint in 2015 and failed to act for 14 months, allowing Nassar to abuse at least 70 more victims.',
  'Dr. Larry Nassar served as the national team physician for USA Gymnastics from approximately 1986 to 2015 and as a sports medicine physician at Michigan State University from 1997 to 2016. Nassar sexually abused patients under the guise of performing legitimate medical procedures — intravaginal osteopathic adjustments. Over 500 victims have been identified; many were Olympic-level and elite gymnasts including Simone Biles, Aly Raisman, Jordyn Wieber, and Gabby Douglas. Both USA Gymnastics and Michigan State University had received prior complaints about Nassar''s conduct dating to at least the 1990s. Neither organization reported the complaints to law enforcement or took meaningful corrective action. In July 2015, USA Gymnastics reported Nassar to the FBI Indianapolis field office. The FBI conducted no interviews and took no action for 14 months — during which period Nassar continued to practice and abused at least 70 additional victims. In January 2018, Nassar was sentenced to 40 to 175 years in state prison by Judge Rosemarie Aquilina, who allowed more than 150 victim impact statements. A subsequent DOJ OIG report found that FBI agents from the Indianapolis field office had violated multiple policies in their handling of the case and potentially made false statements to investigators.',
  'https://en.wikipedia.org/wiki/Larry_Nassar',
  'verified',
  'Child Safety & Human Trafficking',
  '2018-01-24',
  '{"category": "Sports medicine abuse / institutional cover-up / FBI failure", "importance": "PURE_GOLD", "tags": ["Larry Nassar", "USA Gymnastics", "Michigan State", "FBI failure", "sports abuse", "Simone Biles", "500 victims"]}'
),

(
  'UK Grooming Gangs / Rotherham (1997-Present)',
  'uk-grooming-gangs-rotherham',
  'In Rotherham, South Yorkshire, at least 1,400 children — primarily white working-class girls — were subjected to organized sexual exploitation by networks of predominantly British-Pakistani men between 1997 and 2013. The Independent Inquiry found that South Yorkshire Police and Rotherham Council had received repeated warnings but failed to act, with internal documents showing concerns about appearing racist impeding investigation.',
  'The Rotherham child sexual exploitation scandal involved organized sexual exploitation of children in Rotherham, South Yorkshire, England, by networks of predominantly British-Pakistani men. The Jay Report (2014), authored by Professor Alexis Jay for Rotherham Metropolitan Borough Council, estimated that at least 1,400 children had been subjected to sexual exploitation between 1997 and 2013. Victims were typically girls aged 11-16 from vulnerable backgrounds who were groomed with gifts, alcohol, and drugs before being subjected to rape and trafficking. The Jay Report found that South Yorkshire Police and Rotherham Council had received warnings from their own front-line workers about the exploitation from at least 2001 but had repeatedly failed to act. Internal documents showed that some officials and police officers had been concerned that robust investigation and prosecution would be seen as racist, given the ethnicity of the suspects. Multiple agencies had received reports but dismissed them. Senior officials had suppressed research documenting the patterns. The Alexis Jay report triggered a national inquiry; similar organized exploitation networks have since been documented in Rochdale, Oxford, Telford, Newcastle, Bristol, and other British cities.',
  'https://en.wikipedia.org/wiki/Rotherham_child_sexual_exploitation_scandal',
  'verified',
  'Child Safety & Human Trafficking',
  '2014-08-26',
  '{"category": "Organized child sexual exploitation / institutional failure", "importance": "PURE_GOLD", "tags": ["Rotherham", "grooming gangs", "UK child exploitation", "South Yorkshire Police", "Jay Report", "1400 victims"]}'
),

(
  'Canada Residential Schools (1876-1996)',
  'canada-residential-schools',
  'Canada''s residential school system — a government and church-run network of 139 schools for First Nations, Metis, and Inuit children — forcibly removed approximately 150,000 Indigenous children from their families between 1876 and 1996. Physical and sexual abuse was systematic; an estimated 3,200 to 6,000 children died at the schools. The discovery of over 1,000 unmarked graves at former school sites in 2021 prompted the Canadian government to formally recognize this as cultural genocide.',
  'From 1876 to 1996, Canada operated a system of government-funded, church-administered residential schools designed to assimilate Indigenous children by separating them from their families, forbidding their languages and cultural practices, and teaching them European skills and Christian religion. Approximately 150,000 First Nations, Metis, and Inuit children attended these 139 schools. The Truth and Reconciliation Commission of Canada (2015) documented that the system was characterized by systemic physical and sexual abuse, inadequate food and medical care, and psychological trauma. The Commission identified at least 3,200 confirmed deaths; scholars estimate the true figure may be as high as 6,000 or more, as death records were poorly maintained. Beginning in 2021, ground-penetrating radar surveys of former school sites identified hundreds of previously unrecorded graves. The Kamloops Indian Residential School site in British Columbia announced the detection of 215 unmarked graves in May 2021; subsequent surveys at other sites added hundreds more. The Canadian government and Pope Francis subsequently offered formal apologies recognizing the residential school system as cultural genocide.',
  'https://en.wikipedia.org/wiki/Canadian_Indian_residential_school_system',
  'verified',
  'Child Safety & Human Trafficking',
  '2021-05-27',
  '{"category": "State-sponsored cultural genocide / child abuse", "importance": "PURE_GOLD", "tags": ["Canada residential schools", "Indigenous children", "cultural genocide", "unmarked graves", "TRC", "church abuse", "First Nations"]}'
),

(
  'Australian Stolen Generations (1910-1970)',
  'australian-stolen-generations',
  'Between approximately 1910 and 1970, Australian state and federal governments forcibly removed an estimated 10-33% of Aboriginal and Torres Strait Islander children from their families under policies aimed at assimilation. Children were placed with white families or in institutions where physical and sexual abuse was documented. The practice was explicitly designed to breed out Aboriginal people. Australia issued a formal apology in 2008.',
  'The Stolen Generations refers to the Aboriginal and Torres Strait Islander children who were forcibly removed from their families by Australian federal and state government agencies and church missions between approximately 1910 and 1970 under policies aimed at cultural assimilation. The Bringing Them Home report (1997) estimated that between 1 in 10 and 1 in 3 Indigenous children were removed from their families during this period. Children were taken without parental consent and placed with white families or in church-run institutions. Internal government documents from the era explicitly stated that the policies were intended to breed out the Aboriginal population within three generations. Physical and sexual abuse was extensively documented at the institutions where children were held. The long-term intergenerational trauma from these removals has been extensively documented by health researchers. Australian Prime Minister Kevin Rudd issued a formal apology to the Stolen Generations on February 13, 2008. Compensation has been paid in some Australian states; federal compensation legislation has been proposed but not fully implemented.',
  'https://en.wikipedia.org/wiki/Stolen_Generations',
  'verified',
  'Child Safety & Human Trafficking',
  '1997-05-26',
  '{"category": "State-sponsored child removal / cultural genocide", "importance": "PURE_GOLD", "tags": ["Stolen Generations", "Australia", "Aboriginal", "Indigenous children", "forced removal", "assimilation policy"]}'
),

(
  'DynCorp Human Trafficking / Bosnia and Afghanistan (1999-2009)',
  'dyncorp-human-trafficking-bosnia-afghanistan',
  'DynCorp International, a major U.S. defense contractor, faced documented allegations that its employees engaged in human trafficking and the sexual exploitation of minors in Bosnia (1999-2001) and Afghanistan (2009). The State Department investigated and confirmed misconduct in Bosnia. The U.S. government took no criminal action; DynCorp retained its government contracts. Whistleblower Kathryn Bolkovac was fired after reporting the Bosnia misconduct.',
  'DynCorp International is one of the largest U.S. defense contractors, providing privatized military and police training services to the U.S. government in conflict zones. In 1999-2001, DynCorp employees serving as UN police trainers in Bosnia were documented by whistleblowers — including Kathryn Bolkovac and Ben Johnston — to have purchased minors for sexual exploitation and participated in human trafficking networks. Johnston alleged that DynCorp employees had bought and sold women and children. Bolkovac reported the abuse to DynCorp management and was fired. She subsequently won a wrongful termination suit in the UK. The State Department conducted an investigation and confirmed that misconduct had occurred but granted immunity to the employees involved under Status of Forces Agreement provisions. DynCorp faced no criminal prosecution and retained its government contracts. In 2009, similar allegations arose in Afghanistan, where DynCorp was training the Afghan police. Whistleblowers and subsequent congressional investigation (2010) documented that DynCorp employees had funded a bacha bazi — a practice involving young boys — event for Afghan police recruits. The Pentagon acknowledged the allegations were substantiated.',
  'https://en.wikipedia.org/wiki/DynCorp_International',
  'corroborated',
  'Child Safety & Human Trafficking',
  '2001-01-01',
  '{"category": "Defense contractor trafficking / contractor immunity", "importance": "PURE_GOLD", "tags": ["DynCorp", "human trafficking", "Bosnia", "Afghanistan", "defense contractor", "State Department", "Kathryn Bolkovac"]}'
),

(
  'Backpage.com / Sex Trafficking Facilitation (2004-2018)',
  'backpage-sex-trafficking-facilitation',
  'Backpage.com, an online classified advertising site co-founded by Village Voice Media, became the dominant platform for sex trafficking advertisements in the United States. A 2017 U.S. Senate Permanent Subcommittee on Investigations report found that Backpage knowingly facilitated sex trafficking and child prostitution, actively helped traffickers edit ads to avoid detection, and generated $500 million in revenue primarily from adult ads. Backpage''s founders were indicted in 2018.',
  'Backpage.com was an online classifieds website founded in 2004 that became the dominant platform for sex trafficking advertisements in the United States, responsible for approximately 73% of all child sex trafficking reports to the National Center for Missing and Exploited Children between 2010 and 2014. A 2017 U.S. Senate Permanent Subcommittee on Investigations report, based on two years of investigation and 1.5 million internal Backpage documents, found that Backpage had knowingly facilitated sex trafficking and child prostitution. The report documented that Backpage had developed internal procedures to help traffickers edit their ads to avoid detection — including deleting references to minors from ad text — while the underlying trafficking continued. Backpage generated over $500 million in revenue, with approximately 99% coming from adult classified ads. In April 2018, the FBI seized Backpage.com and federal authorities indicted Backpage founders Michael Lacey and James Larkin, along with other executives, on charges including facilitating prostitution and money laundering. Lacey was acquitted of most charges in a 2023 trial; Larkin died by suicide in 2021 during the proceedings.',
  'https://en.wikipedia.org/wiki/Backpage',
  'verified',
  'Child Safety & Human Trafficking',
  '2018-04-06',
  '{"category": "Online sex trafficking platform / corporate facilitation", "importance": "GOLD", "tags": ["Backpage", "sex trafficking", "child exploitation", "online platform", "Senate investigation", "NCMEC"]}'
),

(
  'Thailand Child Sex Tourism (1970s-Present)',
  'thailand-child-sex-tourism',
  'Thailand became the world''s most prominent child sex tourism destination beginning in the 1970s — partly as a result of the U.S. military presence during the Vietnam War establishing the pattern of commercial sex tourism in the region. Government corruption has been extensively documented as enabling the industry. Despite periodic crackdowns, ECPAT and UNICEF have documented persistent child sexual exploitation in the country.',
  'Thailand''s commercial sex industry — including child sexual exploitation — developed substantially during the Vietnam War era, when U.S. military rest-and-recreation programs brought hundreds of thousands of American soldiers to Bangkok and Pattaya. After the war, the tourist infrastructure built for this purpose was repurposed for civilian sex tourism. By the 1980s and 1990s, Thailand had become the world''s most prominent destination for sex tourism, including child sex tourism. ECPAT International (End Child Prostitution and Trafficking), founded in Thailand in 1991, documented that child sexual exploitation was systematic and enabled by corruption at multiple levels of government and law enforcement. Studies by UNICEF and Thai government surveys estimated hundreds of thousands of children were involved in commercial sexual exploitation at the peak. International prosecutions of sex tourists began in multiple Western countries in the 1990s. Thailand has passed legislation strengthening child protection laws and conducted high-profile arrests of foreign sex tourists. However, researchers and NGOs document that child sexual exploitation persists, with online facilitation and dark tourism shifting patterns.',
  'https://en.wikipedia.org/wiki/Child_sex_tourism',
  'verified',
  'Child Safety & Human Trafficking',
  '1991-01-01',
  '{"category": "Child sex tourism / state corruption / military origin", "importance": "GOLD", "tags": ["Thailand", "child sex tourism", "ECPAT", "Vietnam War legacy", "corruption", "sex industry", "UNICEF"]}'
),

(
  'Foster Care Pipeline to Trafficking (1970s-Present)',
  'foster-care-pipeline-to-trafficking',
  'Studies consistently find that 50-80% of domestic sex trafficking victims in the United States have prior child welfare system involvement. Foster youth are disproportionately targeted by traffickers due to instability, lack of family support, and ease of manipulation. A 2013 Senate Finance Committee investigation found child welfare agencies failed to protect children in their care from trafficking, and that federal tracking systems systematically undercounted trafficking victims in foster care.',
  'Child welfare and trafficking research consistently documents a disproportionate overlap between the foster care system and commercial sexual exploitation. A 2013 FBI operation found that 60% of recovered child sex trafficking victims had been in foster care or group homes. A 2013 Senate Finance Committee investigation found that child welfare agencies failed to adequately protect children in their care from commercial sexual exploitation and that federal data systems had no mechanism to track foster children who were trafficking victims. Studies published in peer-reviewed journals have estimated that 50-80% of domestic minor sex trafficking victims have prior child welfare system involvement. Factors cited in research include: the instability of placement changes (the average foster child has 7-8 placements), lack of consistent adult advocates, the targeting of group homes by traffickers who know residents lack family monitoring, and the trauma histories that make youth vulnerable to manipulation. A 2021 Johns Hopkins study found that foster youth were 7 times more likely to have been trafficked than general population youth. Congressional legislation including FOSTA (2018) and the Family First Prevention Services Act (2018) attempted to address some of these vulnerabilities.',
  'https://en.wikipedia.org/wiki/Child_trafficking_in_the_United_States',
  'verified',
  'Child Safety & Human Trafficking',
  '2013-11-18',
  '{"category": "Foster care system / trafficking pipeline", "importance": "GOLD", "tags": ["foster care", "sex trafficking", "child welfare", "Senate investigation", "trafficking pipeline", "domestic minor trafficking"]}'
),

(
  'IWF CSAM / AI Generation Crisis (2010s-Present)',
  'iwf-csam-ai-generation-crisis',
  'The Internet Watch Foundation (IWF) documented in 2023 that AI-generated child sexual abuse material (CSAM) had increased dramatically, with over 20,000 AI-generated CSAM images found on a single dark web forum in a one-month period. Existing legislation in multiple countries had not been updated to clearly criminalize AI-generated CSAM not involving a real child, creating legal gaps exploited by offenders.',
  'Child sexual abuse material (CSAM) represents one of the most serious criminal content categories online. The Internet Watch Foundation (IWF), a UK-based organization working with law enforcement to identify and remove CSAM, published a landmark report in October 2023 documenting the emergence of AI-generated CSAM as a significant new threat. The IWF found more than 20,000 AI-generated CSAM images on a single dark web forum in a one-month period, including images of known real child victims whose faces were combined with AI-generated sexual content. The report found that 80% of AI-generated images were at the most serious levels of severity. AI-generated CSAM had not been clearly criminalized under existing legislation in all jurisdictions, as some laws required that material involve a real child who was abused in its production. The IWF and child protection advocates argued that AI-generated CSAM normalizes abuse and creates escalation pathways. Following the IWF report, multiple governments including the UK, EU member states, and U.S. states began legislative action to explicitly criminalize AI-generated CSAM.',
  'https://www.iwf.org.uk/about-us/why-we-exist/our-research/how-ai-is-being-abused-to-create-child-sexual-abuse-imagery/',
  'verified',
  'Child Safety & Human Trafficking',
  '2023-10-01',
  '{"category": "AI-generated CSAM / legislative gap / online exploitation", "importance": "PURE_GOLD", "tags": ["IWF", "CSAM", "AI-generated abuse", "child exploitation", "dark web", "legislative gap", "artificial intelligence"]}'
),

(
  'Philippines Webcam Child Sexual Abuse / Cyber Trafficking (2010s-Present)',
  'philippines-webcam-child-sexual-abuse',
  'The Philippines became a global center for live-streaming child sexual abuse, with perpetrators paying Western clients to direct the real-time sexual abuse of Filipino children via webcam. UNICEF estimated in 2016 that approximately 500,000 Filipino children were at risk. A 2021 Task Force Asog operation was one of the largest anti-trafficking operations in Philippine history, rescuing over 1,000 victims.',
  'Beginning in the early 2010s, law enforcement agencies identified the Philippines as the world''s largest source of live-streamed child sexual abuse material — a form of trafficking in which Filipino children, often in economically distressed areas, are sexually abused in real-time via webcam at the direction of paying clients primarily from Western countries including Australia, the United States, UK, and Germany. The abuse was typically orchestrated by local facilitators — sometimes including the children''s own family members — with payments made via digital transfer or remittance services. UNICEF published a report in 2016 estimating that approximately 500,000 Filipino children were at risk of online sexual exploitation. A 2020 Philippine National Bureau of Investigation study found the industry had grown dramatically during the COVID-19 pandemic as economic desperation increased. In 2021, Philippine authorities conducted Task Force Asog, one of the largest anti-trafficking operations in the country''s history, arresting more than 200 suspects and rescuing over 1,000 victims. International law enforcement cooperation through Interpol, the Australian Federal Police, and FBI have resulted in hundreds of arrests of Western clients.',
  'https://en.wikipedia.org/wiki/Child_sexual_abuse_in_the_Philippines',
  'corroborated',
  'Child Safety & Human Trafficking',
  '2016-01-01',
  '{"category": "Webcam child abuse / cyber trafficking / economic exploitation", "importance": "GOLD", "tags": ["Philippines", "webcam abuse", "child trafficking", "live-streaming abuse", "cyber trafficking", "UNICEF", "Western clients"]}'
)

ON CONFLICT (slug) DO NOTHING;
