import { useState, useMemo } from 'react';
import { useResizableColumns } from '@/hooks/useResizableColumns';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, TriangleAlert as AlertTriangle, ArrowUpDown, ArrowLeft, ChevronDown } from 'lucide-react';

interface Incident {
  date: string;
  type: string;
  location: string;
  company: string;
  description: string;
  casualties: string;
  investigation: string;
  findings: string;
  pattern: boolean;
  patternNote?: string;
  sources: string[];
}

export function AccidentsContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Incident>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showPatternsOnly, setShowPatternsOnly] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const AC_DEFAULT_WIDTHS = [80, 110, 120, 150, 160, 220, 100, 220, 100];
  const { columnWidths: acWidths, handleMouseDown: acMouseDown, resetColumnWidth: acReset } = useResizableColumns(AC_DEFAULT_WIDTHS);

  const toggleCard = (i: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const incidents: Incident[] = [
    {
      date: '2024-03-26',
      type: 'Infrastructure',
      location: 'Baltimore, Maryland',
      company: 'MV Dali / Patapsco River',
      description: 'Francis Scott Key Bridge collapsed after container ship MV Dali lost power and struck a main support pier',
      casualties: '6 fatalities',
      investigation: 'NTSB - Ongoing',
      findings: 'Catastrophic power outage on vessel; bridge not designed to withstand modern container ship strike — a known structural vulnerability',
      pattern: true,
      patternNote: 'Bridge infrastructure not designed to modern impact standards; power outage cause under investigation',
      sources: ['https://en.wikipedia.org/wiki/Francis_Scott_Key_Bridge_collapse', 'https://www.npr.org/2024/03/26/1240857704/francis-scott-key-bridge-collapse-baltimore'],
    },
    {
      date: '2024-01-05',
      type: 'Aviation',
      location: 'Portland, OR (mid-air)',
      company: 'Boeing / Alaska Airlines Flight 1282',
      description: 'Boeing 737 MAX 9 door plug blew out at 16,000 feet; four bolts missing from factory installation',
      casualties: '0 fatalities; several minor injuries',
      investigation: 'Closed (NTSB report issued 2024)',
      findings: 'Four missing bolts at Boeing\'s Renton factory; quality control inspectors may have signed off without checking',
      pattern: true,
      patternNote: 'Part of ongoing Boeing 737 MAX quality control crisis; John Barnett had warned of exactly such failures',
      sources: ['https://www.ntsb.gov/investigations/Pages/DCA24MA063.aspx'],
    },
    {
      date: '2023-09-02',
      type: 'Aviation',
      location: 'Tver Oblast, Russia',
      company: 'Wagner Group Leadership (Prigozhin aircraft)',
      description: 'Embraer Legacy 600 fell after an explosion; all 10 aboard including Yevgeny Prigozhin killed',
      casualties: '10 (Prigozhin and senior Wagner commanders)',
      investigation: 'Closed (Russia)',
      findings: 'Russia: "no criminal act"; Western intelligence and analysts widely attribute to deliberate Kremlin action — occurred 2 months after Wagner mutiny',
      pattern: true,
      patternNote: 'Pattern of political enemies of Putin dying in convenient air crashes',
      sources: ['https://en.wikipedia.org/wiki/Death_of_Yevgeny_Prigozhin'],
    },
    {
      date: '2023-06-18',
      type: 'Maritime',
      location: 'North Atlantic, near Titanic wreck (3,800m depth)',
      company: 'OceanGate — Titan Submersible',
      description: 'Catastrophic implosion of the Titan pressure chamber; CEO had dismissed safety experts\' concerns about carbon fiber hull',
      casualties: '5 (all aboard — CEO Stockton Rush and 4 passengers)',
      investigation: 'Closed (Coast Guard investigation concluded 2025)',
      findings: 'Poor engineering; unconventional carbon fiber hull; US Navy detected implosion within 2 hours but information initially withheld from public search',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Titan_submersible_implosion', 'https://www.bbc.com/news/articles/cdeg7y4171xo'],
    },
    {
      date: '2023-02-03',
      type: 'Rail',
      location: 'East Palestine, Ohio',
      company: 'Norfolk Southern Railway',
      description: 'Train derailment with hazardous chemicals; controversial controlled burn of vinyl chloride released hydrogen chloride and phosgene gas',
      casualties: '0 direct fatalities; significant community health concerns',
      investigation: 'Closed (NTSB report issued 2024; lawsuits settled)',
      findings: 'Defective wheel bearing; NTSB found the vent-and-burn was not necessary; Norfolk Southern settled for $310 million in 2024',
      pattern: true,
      patternNote: 'Railway industry reduced inspection requirements through lobbying; controlled burn decision widely questioned',
      sources: ['https://en.wikipedia.org/wiki/East_Palestine,_Ohio,_train_derailment', 'https://www.ntsb.gov/news/press-releases/Pages/NR20240625.aspx'],
    },
    {
      date: '2022-11-24',
      type: 'Aviation',
      location: 'Guangxi, China',
      company: 'China Eastern Airlines Flight 5735',
      description: 'Boeing 737-800 entered near-vertical dive from 29,000 feet; no survivors',
      casualties: '132 (all aboard)',
      investigation: 'Ongoing (China has not released final report)',
      findings: 'WSJ reported NTSB investigators believe someone in the cockpit deliberately crashed the plane; China\'s CAAC has not released conclusions as of 2025',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/China_Eastern_Airlines_Flight_5735'],
    },
    {
      date: '2021-06-24',
      type: 'Infrastructure',
      location: 'Surfside, Florida',
      company: 'Champlain Towers South',
      description: '12-story oceanfront condo collapsed; 2018 engineering report had noted major structural concerns that were not addressed',
      casualties: '98 fatalities',
      investigation: 'Closed (NIST investigation concluded; civil lawsuits settled; no criminal charges)',
      findings: 'Pool deck as initiating failure point; inadequate original 1981 construction; saltwater intrusion; deferred repairs despite $15M assessment',
      pattern: true,
      patternNote: 'No structural failure victims saw criminal accountability; condo board had been warned years earlier',
      sources: ['https://en.wikipedia.org/wiki/Surfside_condominium_collapse', 'https://www.nist.gov/disaster-failure-studies/champlain-towers-south-collapse'],
    },
    {
      date: '2021-02-13',
      type: 'Industrial',
      location: 'Texas, USA',
      company: 'ERCOT / Texas Power Grid',
      description: 'Simultaneous failure of natural gas, wind, and coal during record cold; Texas grid nearly collapsed completely',
      casualties: '246+ direct deaths; hundreds more indirect',
      investigation: 'Closed (some regulatory changes; minimal accountability)',
      findings: 'Texas warned in 2011 about cold weather vulnerability; recommendations ignored; grid isolated from neighboring states to avoid federal regulation',
      pattern: true,
      patternNote: 'Regulatory avoidance of federal weatherization standards led directly to grid failure',
      sources: ['https://en.wikipedia.org/wiki/2021_Texas_power_crisis'],
    },
    {
      date: '2020-08-04',
      type: 'Industrial',
      location: 'Port of Beirut, Lebanon',
      company: 'Port of Beirut / Lebanese Government',
      description: '2,750 tonnes of ammonium nitrate stored unsafely for 6 years exploded; one of the largest non-nuclear explosions ever recorded',
      casualties: '218+ fatalities; 7,000+ injured; ~300,000 displaced',
      investigation: 'Ongoing (judicial investigation repeatedly obstructed)',
      findings: 'Officials warned repeatedly; no action taken; HRW found evidence implicating senior officials; lead judge suspended after issuing summons for politicians',
      pattern: true,
      patternNote: 'Senior Lebanese officials obstructed the investigation; no prosecutions as of 2025',
      sources: ['https://en.wikipedia.org/wiki/2020_Beirut_explosion', 'https://www.hrw.org/video-photos/interactive/2021/08/02/lebanon-evidence-implicates-officials-beirut-blast-targeted'],
    },
    {
      date: '2020-01-26',
      type: 'Aviation',
      location: 'Calabasas, CA',
      company: 'Island Express Helicopters (Kobe Bryant crash)',
      description: 'Sikorsky S-76B crashed into hillside; pilot entered clouds not instrument-rated, causing spatial disorientation',
      casualties: '9 (all aboard — Kobe Bryant, his daughter Gianna, and 7 others)',
      investigation: 'Closed (NTSB final report 2021; civil lawsuits settled)',
      findings: 'Pilot not enrolled in safety management program; continued VFR into IMC; not instrument rated',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/2020_Calabasas_helicopter_crash', 'https://www.ntsb.gov/investigations/Pages/DCA20MA059.aspx'],
    },
    {
      date: '2020-01-08',
      type: 'Aviation',
      location: 'Near Tehran, Iran',
      company: 'Ukraine International Airlines Flight 752',
      description: 'Shot down by Iran\'s IRGC using two Tor surface-to-air missiles shortly after takeoff from Tehran',
      casualties: '176 (all aboard — including 55 Canadians, 82 Iranians)',
      investigation: 'Partially closed (Iran sentenced 10; Canada demands full accountability)',
      findings: 'IRGC operator misidentified aircraft as cruise missile during heightened tensions after Iran\'s retaliatory strikes on US bases; Iran initially denied for 3 days',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Ukraine_International_Airlines_Flight_752'],
    },
    {
      date: '2019-03-10',
      type: 'Aviation',
      location: 'Near Bishoftu, Ethiopia',
      company: 'Boeing / Ethiopian Airlines Flight 302',
      description: 'Boeing 737 MAX — same MCAS defect as Lion Air 610 — pushed nose down repeatedly against crew\'s inputs',
      casualties: '157 (all aboard)',
      investigation: 'Closed (NTSB/BEA); ongoing Boeing DOJ criminal proceedings',
      findings: 'MCAS software defect; crew followed Boeing\'s official emergency procedure but it was ineffective at high speed; FAA certification failures',
      pattern: true,
      patternNote: 'Second 737 MAX crash within 5 months; same software defect Boeing concealed from pilots',
      sources: ['https://en.wikipedia.org/wiki/Ethiopian_Airlines_Flight_302'],
    },
    {
      date: '2019-01-25',
      type: 'Industrial',
      location: 'Brumadinho, Minas Gerais, Brazil',
      company: 'Vale Mining — Brumadinho Dam',
      description: 'Mining tailings dam collapsed; swept through Vale cafeteria where workers were having lunch',
      casualties: '270 fatalities',
      investigation: 'Ongoing (criminal trial of Vale executives)',
      findings: 'Second catastrophic dam failure by Vale in 4 years; certified stable weeks before by German safety firm; executives charged with homicide; $7B settlement',
      pattern: true,
      patternNote: 'Same failure mode as Vale\'s 2015 Samarco dam disaster (17 killed); repeated corporate negligence',
      sources: ['https://en.wikipedia.org/wiki/Brumadinho_dam_disaster'],
    },
    {
      date: '2018-11-08',
      type: 'Industrial',
      location: 'Butte County, California (Paradise)',
      company: 'Pacific Gas & Electric (PG&E)',
      description: 'Camp Fire — deadliest California wildfire in history; caused by PG&E power line failures after decades of deferred maintenance',
      casualties: '85 fatalities; 18,804 structures destroyed',
      investigation: 'Closed (PG&E convicted; ongoing infrastructure upgrades)',
      findings: 'PG&E pleaded guilty to 84 counts of involuntary manslaughter; decades of deferred transmission maintenance; paid $13.5B to victims',
      pattern: true,
      patternNote: 'PG&E had deferred critical maintenance for years; corporate negligence directly caused deadliest California wildfire',
      sources: ['https://en.wikipedia.org/wiki/Camp_Fire_(2018)'],
    },
    {
      date: '2018-10-29',
      type: 'Aviation',
      location: 'Java Sea, Indonesia',
      company: 'Boeing / Lion Air Flight 610',
      description: 'Boeing 737 MAX 8 crashed into sea 13 minutes after takeoff; MCAS software defect not disclosed to pilots',
      casualties: '189 (all aboard)',
      investigation: 'Closed',
      findings: 'MCAS activated on faulty AOA sensor data; Boeing concealed system from pilots and airlines; FAA certification failures; led to 20-month global grounding',
      pattern: true,
      patternNote: 'First of two fatal 737 MAX crashes; Boeing concealed MCAS design from regulators; $2.5B criminal settlement',
      sources: ['https://en.wikipedia.org/wiki/Lion_Air_Flight_610'],
    },
    {
      date: '2018-08-21',
      type: 'Infrastructure',
      location: 'Genoa, Italy',
      company: 'Autostrade per l\'Italia / Atlantia (Morandi Bridge)',
      description: 'Section of A10 motorway bridge collapsed during rainstorm; engineers had warned of deterioration since 2010',
      casualties: '43 fatalities',
      investigation: 'Ongoing (trial proceeding as of 2023)',
      findings: 'Corrosion of prestressed concrete and cables; Autostrade warned by own engineers repeatedly; 59 defendants including company managers',
      pattern: true,
      patternNote: 'Maintenance company had been warned for years; prioritized profits over structural safety',
      sources: ['https://en.wikipedia.org/wiki/Ponte_Morandi_collapse'],
    },
    {
      date: '2017-08-21',
      type: 'Maritime',
      location: 'East of Strait of Malacca, near Singapore',
      company: 'USS John S. McCain / US Navy',
      description: 'US Navy destroyer collided with tanker MV Alnic MC; crew confusion over steering control transfer',
      casualties: '10 sailors killed',
      investigation: 'Closed (criminal charges; officers convicted)',
      findings: 'Second US Navy destroyer collision in 2 months (17 deaths total); poor training, readiness deficits, excessive operational pace',
      pattern: true,
      patternNote: 'Two US Navy destroyer collisions in 10 weeks — systemic readiness crisis exposed',
      sources: ['https://en.wikipedia.org/wiki/USS_John_S._McCain_and_MV_Alnic_MC_collision'],
    },
    {
      date: '2017-06-17',
      type: 'Maritime',
      location: '56 nautical miles SW of Yokosuka, Japan',
      company: 'USS Fitzgerald / US Navy',
      description: 'US Navy guided-missile destroyer collided with Philippine container ship at 2:30 AM; seven sailors drowned in flooded compartments',
      casualties: '7 sailors killed; multiple injured',
      investigation: 'Closed (criminal charges resolved)',
      findings: 'Crew failure to monitor radar, communicate, or take evasive action; raised serious questions about Navy readiness and fatigue',
      pattern: true,
      patternNote: 'First of two US Navy destroyer collisions within 10 weeks in 2017',
      sources: ['https://en.wikipedia.org/wiki/USS_Fitzgerald_and_MV_ACX_Crystal_collision'],
    },
    {
      date: '2015-10-31',
      type: 'Aviation',
      location: 'Sinai Peninsula, Egypt',
      company: 'Metrojet Flight 9268 (ISIS bombing)',
      description: 'Airbus A321 Russian charter flight destroyed by IED at Sharm El-Sheikh airport; ISIS Sinai Branch claimed responsibility',
      casualties: '224 (all aboard — deadliest A320-family disaster)',
      investigation: 'Closed',
      findings: 'Bomb planted in Schweppes can; airport employee arrested; Egypt initially resisted terrorism conclusion; catastrophic airport security failures at Sharm El-Sheikh',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Metrojet_Flight_9268'],
    },
    {
      date: '2015-03-24',
      type: 'Aviation',
      location: 'French Alps, France',
      company: 'Germanwings Flight 9525',
      description: 'First officer Andreas Lubitz deliberately crashed aircraft into the Alps; had hidden medical unfitness certificate from employer',
      casualties: '150 (all aboard)',
      investigation: 'Closed',
      findings: 'Deliberate murder-suicide; Lubitz declared unfit to work by his doctor on day of flight; locked cockpit door; raised debate about pilot mental health disclosure',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Germanwings_Flight_9525'],
    },
    {
      date: '2014-07-17',
      type: 'Aviation',
      location: 'Eastern Ukraine (Donetsk Oblast)',
      company: 'Malaysia Airlines Flight MH17',
      description: 'Boeing 777 shot down at 33,000 feet by Russian-backed forces using Buk surface-to-air missile',
      casualties: '298 (all 283 passengers and 15 crew)',
      investigation: 'Closed (Dutch prosecution concluded; Russia refuses extradition)',
      findings: 'Russian military Buk launcher traced by serial number; three Russians and one Ukrainian convicted in absentia; ICAO ruled Russia violated international aviation law',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_17'],
    },
    {
      date: '2014-04-16',
      type: 'Maritime',
      location: 'Near Byeongpungdo, South Korea',
      company: 'MV Sewol Ferry',
      description: 'Overloaded ferry capsized; crew evacuated while instructing 304 passengers (mostly students) to remain in place and drown',
      casualties: '304 fatalities (including ~250 students)',
      investigation: 'Closed (captain convicted of murder; ferry raised 2017)',
      findings: 'Illegal modifications increased cargo; captain and crew abandoned passengers; captain convicted of murder; sparked widespread South Korean social crisis',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Sinking_of_MV_Sewol'],
    },
    {
      date: '2014-03-08',
      type: 'Aviation',
      location: 'Southern Indian Ocean (presumed)',
      company: 'Malaysia Airlines Flight MH370',
      description: 'Boeing 777 with 239 aboard disappeared; transponder disabled, deliberate course change detected; main wreckage never found',
      casualties: '239 (all 12 crew and 227 passengers)',
      investigation: 'Ongoing (no wreck found; formally concluded 2018 without determining cause)',
      findings: 'Inmarsat satellite data indicates southern Indian Ocean endpoint; no official cause determined; captain Zaharie prime suspect if human intervention involved',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370'],
    },
    {
      date: '2013-07-06',
      type: 'Rail',
      location: 'Lac-Mégantic, Quebec, Canada',
      company: 'Montreal, Maine and Atlantic Railway',
      description: 'Runaway 73-car oil train rolled 13 km downhill and exploded in town center; only 7 of 79 handbrakes applied',
      casualties: '47 fatalities (deadliest Canadian rail disaster since 1867)',
      investigation: 'Closed (acquittals entered; MMA liquidated)',
      findings: 'Engineer left train unattended; locomotive fire caused firefighters to shut off active brake; insufficient handbrakes; downtown largely destroyed',
      pattern: true,
      patternNote: 'Deadliest Canadian rail disaster in modern history; industry cost-cutting on crew staffing was a factor',
      sources: ['https://en.wikipedia.org/wiki/Lac-M%C3%A9gantic_rail_disaster'],
    },
    {
      date: '2013-06-05',
      type: 'Rail',
      location: 'Santiago de Compostela, Spain',
      company: 'Spanish National Railways (RENFE)',
      description: 'Driver entered curve at 195 km/h in an 80 km/h zone while on his mobile phone; 80 killed',
      casualties: '80 fatalities; 144 injured',
      investigation: 'Closed (driver convicted 2024)',
      findings: 'Driver using mobile phone at moment of crash; no automatic braking on that section; driver convicted of multiple counts of homicide',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/2013_Santiago_de_Compostela_derailment'],
    },
    {
      date: '2013-04-17',
      type: 'Industrial',
      location: 'West, Texas',
      company: 'West Fertilizer Company',
      description: 'Ammonium nitrate explosion destroyed 5-block radius; arson later determined as cause but no charges filed',
      casualties: '15 fatalities (12 first responders, 3 civilians); 160+ injured',
      investigation: 'Closed (arson suspected; no charges)',
      findings: 'ATF concluded fire was intentionally set; no suspect charged; facility had not informed emergency planners of ammonium nitrate inventory',
      pattern: true,
      patternNote: 'Facility storing hazardous materials without proper reporting; arson motive unknown',
      sources: ['https://en.wikipedia.org/wiki/2013_West_fertilizer_plant_explosion'],
    },
    {
      date: '2013-01-12',
      type: 'Maritime',
      location: 'Near Giglio Island, Italy',
      company: 'Costa Concordia / Captain Schettino',
      description: 'Captain ordered unauthorized flyby past Giglio Island, striking a charted rock; abandoned ship while passengers still aboard',
      casualties: '32 fatalities',
      investigation: 'Closed (Schettino convicted; sentenced to 16 years)',
      findings: 'Unauthorized route deviation; late evacuation order; captain Schettino convicted of multiple manslaughter and abandoning ship',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Francesco_Schettino'],
    },
    {
      date: '2011-07-23',
      type: 'Rail',
      location: 'Wenzhou, Zhejiang, China',
      company: 'Chinese High-Speed Rail (CRH)',
      description: 'Lightning disabled signal system; second high-speed train rear-ended a stopped train at 99 mph',
      casualties: '40 fatalities; 192 injured',
      investigation: 'Closed (China; criticized internationally for conflicts of interest)',
      findings: 'Signal design flaws; authorities initially ordered wreckage buried to destroy evidence; investigation conducted by the same Ministry that built the line',
      pattern: true,
      patternNote: 'Chinese authorities attempted to cover up the disaster by burying wreckage before investigation',
      sources: ['https://en.wikipedia.org/wiki/2011_Wenzhou_high-speed_railway_collision'],
    },
    {
      date: '2011-03-11',
      type: 'Industrial',
      location: 'Fukushima Prefecture, Japan',
      company: 'TEPCO — Fukushima Daiichi Nuclear Plant',
      description: 'Triple meltdown after tsunami flooded backup generators; Japanese parliamentary investigation called disaster "profoundly man-made"',
      casualties: '1 confirmed radiation cancer death; ~2,200 evacuation-related deaths',
      investigation: 'Ongoing (decommissioning expected to take until 2051)',
      findings: 'TEPCO and regulators failed to act on known tsunami risk warnings; TEPCO concealed safety data; 154,000 evacuated; cleanup taking decades',
      pattern: true,
      patternNote: 'Parliamentary investigation concluded this was a man-made disaster caused by regulatory failure — not just a natural disaster',
      sources: ['https://en.wikipedia.org/wiki/Fukushima_nuclear_disaster'],
    },
    {
      date: '2010-04-20',
      type: 'Industrial',
      location: 'Gulf of Mexico (41 miles off Louisiana)',
      company: 'BP / Transocean — Deepwater Horizon',
      description: 'Oil rig explosion and blowout; oil gushed for 87 days — largest marine oil spill in US history (4.9M barrels)',
      casualties: '11 fatalities; 17 injured; catastrophic environmental damage',
      investigation: 'Closed (BP settled; multiple criminal and civil actions resolved)',
      findings: 'Defective cement; blowout preventer failure; BP paid $65 billion in fines and cleanup; White House commission cited systemic cost-cutting and safety failures',
      pattern: true,
      patternNote: 'BP had history of safety violations including 2005 Texas City refinery explosion (15 killed)',
      sources: ['https://en.wikipedia.org/wiki/Deepwater_Horizon_oil_spill'],
    },
    {
      date: '2010-04-10',
      type: 'Aviation',
      location: 'Smolensk, Russia',
      company: 'Polish Air Force TU-154 (Smolensk air disaster)',
      description: '96 killed including Polish President Lech Kaczyński; crew attempted to land in severe fog; official finding: pilot error',
      casualties: '96 (all aboard)',
      investigation: 'Closed (official); Polish political re-examination ongoing',
      findings: 'Controlled flight into terrain in heavy fog; IAC cited excessive psychological pressure on captain; PiS party later alleged sabotage — not supported by independent forensic reviews',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Smolensk_air_disaster'],
    },
    {
      date: '2009-06-01',
      type: 'Aviation',
      location: 'Atlantic Ocean (mid-flight, Rio to Paris)',
      company: 'Air France Flight 447',
      description: 'Airbus A330 stalled after pitot tube icing caused autopilot disconnect; crew failed to recognize and recover from stall',
      casualties: '228 (all aboard)',
      investigation: 'Closed (BEA final report 2012)',
      findings: 'Pitot tube icing was a known unaddressed issue; crew simultaneously confused; inadequate stall recovery training for high-altitude manual flight',
      pattern: true,
      patternNote: 'Pitot tube icing on A330 was a known issue Airbus had not fully resolved before the crash',
      sources: ['https://en.wikipedia.org/wiki/Air_France_Flight_447'],
    },
    {
      date: '2007-08-01',
      type: 'Infrastructure',
      location: 'Minneapolis, Minnesota',
      company: 'I-35W Mississippi River Bridge',
      description: 'Interstate highway bridge collapsed during rush hour; rated "structurally deficient" since 1991 — design flaw in gusset plates',
      casualties: '13 fatalities; 145 injured',
      investigation: 'Closed',
      findings: 'Undersized gusset plates in 1967 design; additional construction weight as trigger; bridge had been rated structurally deficient for 16 years',
      pattern: true,
      patternNote: 'Bridge was known to be structurally deficient for 16 years before collapse',
      sources: ['https://en.wikipedia.org/wiki/I-35W_Mississippi_River_bridge'],
    },
    {
      date: '2005-08-29',
      type: 'Industrial',
      location: 'New Orleans, Louisiana',
      company: 'Army Corps of Engineers / US Federal Government (Hurricane Katrina)',
      description: 'Hurricane Katrina; levee system failed at multiple points due to design flaws — Army Corps acknowledged failure was not due to storm exceeding design parameters',
      casualties: '1,833 fatalities; $125 billion in damage',
      investigation: 'Closed (Army Corps acknowledged liability; litigation settled)',
      findings: 'Design flaws in levee system; Corp engineers\' warnings ignored; FEMA response widely criticized; exposed racial and class inequities in disaster response',
      pattern: true,
      patternNote: 'Army Corps acknowledged the levee failures were engineered failures, not acts of nature',
      sources: ['https://en.wikipedia.org/wiki/Hurricane_Katrina'],
    },
    {
      date: '2005-03-23',
      type: 'Industrial',
      location: 'Texas City, Texas',
      company: 'BP Refinery — Texas City',
      description: 'Hydrocarbon vapor cloud ignited; 15 workers in temporary trailers near blowdown stack killed; pattern of safety culture failures',
      casualties: '15 fatalities; 180 injured',
      investigation: 'Closed',
      findings: 'BP Baker Panel concluded corporate culture prioritized cost-cutting over safety; BP pleaded guilty to Clean Air Act felony; OSHA fined $87M for repeated violations — precursor to Deepwater Horizon',
      pattern: true,
      patternNote: 'Same BP safety culture failures that later caused Deepwater Horizon (11 killed)',
      sources: ['https://en.wikipedia.org/wiki/Texas_City_refinery_explosion'],
    },
    {
      date: '2003-02-01',
      type: 'Aviation',
      location: 'Over Texas and Louisiana (during reentry)',
      company: 'NASA — Space Shuttle Columbia',
      description: 'Shuttle disintegrated during reentry; foam strike damage to heat shield during launch; NASA management dismissed engineers\' concerns',
      casualties: '7 astronauts',
      investigation: 'Closed (CAIB report 2003)',
      findings: 'NASA\'s "broken safety culture" as much a cause as the technical failure — same conclusion as Challenger 1986; engineers\' concerns were reversed burden-of-proof dismissed',
      pattern: true,
      patternNote: 'NASA\'s identical management failure as Challenger 17 years earlier; engineers dismissed again',
      sources: ['https://en.wikipedia.org/wiki/Space_Shuttle_Columbia_disaster'],
    },
    {
      date: '1996-07-17',
      type: 'Aviation',
      location: 'Atlantic Ocean, off Long Island, New York',
      company: 'TWA Flight 800',
      description: 'Boeing 747 exploded and crashed; center wing fuel tank ignited; 258 witnesses reported ascending streak of light before fireball',
      casualties: '230 (all aboard)',
      investigation: 'Closed (NTSB declined to reopen 2014)',
      findings: 'Short circuit ignited fuel/air vapors in center wing tank; 6 former NTSB investigators alleged in 2013 that the final report was altered; NTSB rejected reopening',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/TWA_Flight_800'],
    },
    {
      date: '1995-06-29',
      type: 'Infrastructure',
      location: 'Seoul, South Korea',
      company: 'Sampoong Department Store',
      description: 'Deadliest peacetime building collapse in history; management evacuated themselves but not customers before collapse',
      casualties: '502 fatalities; 937 injured',
      investigation: 'Closed (convictions entered)',
      findings: 'Unauthorized 5th floor addition; structural columns weakened; management received warnings of cracking sounds; convicted of culpable homicide and bribery',
      pattern: true,
      patternNote: 'Management knew of structural warnings and prioritized business over evacuation',
      sources: ['https://en.wikipedia.org/wiki/Sampoong_department_store_collapse'],
    },
    {
      date: '1994-04-06',
      type: 'Aviation',
      location: 'Kigali, Rwanda',
      company: 'Rwandan Presidential Aircraft',
      casualties: '9 aboard; 800,000+ in subsequent genocide',
      investigation: 'Closed (genocide tribunal; aircraft shootdown perpetrators unclear)',
      findings: 'Responsibility disputed — French investigations pointed to both Hutu extremists and RPF; who fired the missiles remains one of history\'s most consequential unsolved crimes',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Assassination_of_Juv%C3%A9nal_Habyarimana_and_Cyprien_Ntaryamira'],
    },
    {
      date: '1989-03-24',
      type: 'Maritime',
      location: 'Prince William Sound, Alaska',
      company: 'Exxon Valdez',
      description: 'Tanker ran aground on Bligh Reef; captain below deck and drinking; unlicensed third mate in command; 11M gallons spilled',
      casualties: '0 human fatalities; catastrophic wildlife and ecosystem damage',
      investigation: 'Closed',
      findings: 'Captain Joseph Hazelwood had been drinking; vessel undermanned due to cost-cutting; Exxon paid $507M compensatory; punitive damages reduced from $5B to $507M by Supreme Court',
      pattern: true,
      patternNote: 'Led to Oil Pollution Act of 1990 requiring double-hull tankers; corporate cost-cutting on crew staffing a key factor',
      sources: ['https://en.wikipedia.org/wiki/Exxon_Valdez_oil_spill'],
    },
    {
      date: '1988-12-21',
      type: 'Aviation',
      location: 'Lockerbie, Scotland',
      company: 'Pan Am Flight 103 (Lockerbie bombing)',
      description: 'Boeing 747 destroyed by IED in cargo hold over Lockerbie; 270 killed',
      casualties: '270 (243 passengers, 16 crew, 11 Lockerbie residents)',
      investigation: 'Ongoing (second suspect Abu Agila Masud charged 2022; awaiting trial)',
      findings: 'Libyan intelligence officer al-Megrahi convicted 2001; Gaddafi acknowledged Libyan responsibility 2003; second suspect charged in US 2022; questions about Iran/PFLP-GC involvement persist',
      pattern: false,
      sources: ['https://en.wikipedia.org/wiki/Pan_Am_Flight_103'],
    },
    {
      date: '1986-04-26',
      type: 'Industrial',
      location: 'Chernobyl, Ukrainian SSR',
      company: 'Soviet RBMK Nuclear Program (Chernobyl)',
      description: 'Reactor No. 4 exploded during safety test; Soviet government concealed scale for days; evacuation delayed 36 hours',
      casualties: '31 direct deaths; estimated 4,000-60,000 long-term cancer deaths',
      investigation: 'Closed (post-Soviet investigation; ongoing health monitoring)',
      findings: 'RBMK reactor design flaw (positive void coefficient) combined with safety procedure violations; Soviet cover-up contributed to unnecessary exposure; contributed to USSR collapse',
      pattern: true,
      patternNote: 'Soviet government deliberately concealed the disaster from its own population and the world',
      sources: ['https://en.wikipedia.org/wiki/Chernobyl_disaster'],
    },
    {
      date: '1986-01-28',
      type: 'Aviation',
      location: 'Atlantic Ocean, off Cape Canaveral, Florida',
      company: 'NASA — Space Shuttle Challenger',
      description: 'Shuttle broke apart 73 seconds after launch; engineers specifically warned against launch in cold temperatures the night before',
      casualties: '7 crew members',
      investigation: 'Closed (Rogers Commission report 1986)',
      findings: 'O-ring failure in cold temperatures; Thiokol engineers warned NASA managers who overruled them; Roger Boisjoly became famous whistleblower; management suppressed safety concerns',
      pattern: true,
      patternNote: 'Classic example of management suppressing engineer safety warnings; same culture that caused Columbia 17 years later',
      sources: ['https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster'],
    },
    {
      date: '1984-12-03',
      type: 'Industrial',
      location: 'Bhopal, Madhya Pradesh, India',
      company: 'Union Carbide / UCIL',
      description: 'World\'s deadliest industrial disaster; 40+ tons of toxic methyl isocyanate gas released; 500,000+ exposed',
      casualties: '3,800+ immediate; 15,000-25,000+ long-term deaths; 500,000+ exposed',
      investigation: 'Partially closed (Indian convictions 2010; UCC never fully accountable; site cleanup ongoing)',
      findings: 'Safety systems deactivated to cut costs; CEO Warren Anderson arrested then allowed to leave India — never extradited; site remains contaminated; Union Carbide never fully held accountable',
      pattern: true,
      patternNote: 'CEO of responsible company was allowed to flee India and was never extradited; site contamination ongoing 40 years later',
      sources: ['https://en.wikipedia.org/wiki/Bhopal_disaster'],
    },
  ];

  const filteredIncidents = useMemo(() => {
    let filtered = incidents.filter((incident) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        incident.location.toLowerCase().includes(searchLower) ||
        incident.company.toLowerCase().includes(searchLower) ||
        incident.description.toLowerCase().includes(searchLower) ||
        incident.type.toLowerCase().includes(searchLower);

      const matchesPattern = !showPatternsOnly || incident.pattern;

      return matchesSearch && matchesPattern;
    });

    filtered.sort((a, b) => {
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';
      const direction = sortDirection === 'asc' ? 1 : -1;
      return aVal > bVal ? direction : -direction;
    });

    return filtered;
  }, [incidents, searchTerm, sortField, sortDirection, showPatternsOnly]);

  const handleSort = (field: keyof Incident) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const patternCount = incidents.filter((i) => i.pattern).length;

  return (
    <div className="pt-4">
      <div className="mb-8">
        <p className="text-[#a0a0a0] text-base">
          Tracking workplace accidents, transportation crashes, and industrial incidents revealing systemic safety failures and regulatory gaps.
        </p>
      </div>

      <div className="mb-6 space-y-3">
          <div className="flex items-center gap-3 bg-[#0a0a0a] border border-[#ff8800]/30 rounded-lg p-3" style={{ minHeight: '52px' }}>
            <Search className="w-5 h-5 text-[#ff8800] shrink-0" />
            <Input
              type="text"
              placeholder="Search by location, company, type, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-black border-[#ff8800]/30 text-[#e5e5e5] placeholder:text-[#666] focus:border-[#ff8800] h-11"
            />
          </div>

          <div className="flex items-center gap-3 bg-[#0a0a0a] border border-red-500/30 rounded-lg p-4" style={{ minHeight: '44px' }}>
            <input
              type="checkbox"
              id="patterns-only"
              checked={showPatternsOnly}
              onChange={(e) => setShowPatternsOnly(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="patterns-only" className="text-[#e5e5e5] text-sm flex items-center gap-2 cursor-pointer">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              Systemic patterns only ({patternCount} flagged)
            </label>
          </div>
        </div>

        {/* Mobile card layout */}
        <div className="md:hidden space-y-3 mb-4">
          {filteredIncidents.map((incident, index) => {
            const isExpanded = expandedCards.has(index);
            return (
              <div key={index} className="rounded-xl border border-[#333] overflow-hidden" style={{ background: '#1e1e1e', borderRadius: '12px' }}>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex-1 min-w-0">
                      <div className="text-[#e5e5e5] font-semibold text-base leading-tight">{incident.company}</div>
                      <div className="text-[#666] font-mono text-xs mt-0.5">{incident.date}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {incident.pattern && <AlertTriangle className="w-4 h-4 text-red-400" />}
                      <Badge className="bg-[#ff8800]/20 text-[#ff8800] border-[#ff8800]/50 font-mono text-xs">{incident.type}</Badge>
                    </div>
                  </div>
                  <div className="text-[#a0a0a0] text-sm mt-1 leading-snug">{incident.description}</div>
                  <div className="text-[#ff8800] font-mono text-sm font-semibold mt-1">{incident.casualties}</div>
                </div>
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono text-[#ff8800] border-t border-[#333] hover:bg-[#ff8800]/5 transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 pt-3 space-y-2 border-t border-[#222]">
                    <div>
                      <div className="text-[#666] text-xs font-mono">LOCATION</div>
                      <div className="text-[#e5e5e5] text-sm mt-0.5">{incident.location}</div>
                    </div>
                    <div>
                      <div className="text-[#666] text-xs font-mono">FINDINGS</div>
                      <div className="text-[#a0a0a0] text-xs mt-0.5 leading-relaxed">{incident.findings}</div>
                    </div>
                    {incident.patternNote && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded p-2">
                        <div className="text-red-400 text-xs leading-relaxed">{incident.patternNote}</div>
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      {incident.sources.map((src, i) => (
                        <a key={i} href={src} target="_blank" rel="noopener noreferrer" className="text-[#ff8800] hover:text-[#ff8800]/80 flex items-center gap-1 text-xs">
                          Source {i + 1} <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {filteredIncidents.length === 0 && (
            <div className="p-8 text-center text-[#666] font-mono text-sm">No incidents match the current filter.</div>
          )}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block bg-[#0a0a0a] border border-[#ff8800]/30 rounded-lg overflow-hidden">
          <div className="relative tracker-table-container" style={{ overflowX: 'auto', overflowY: 'visible' }}>
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent z-10 rounded-r-lg" />
            <div className="text-[#666] text-xs font-mono px-3 pt-2 pb-1 border-b border-[#ff8800]/10 lg:hidden">Swipe for more columns →</div>
            <table style={{ tableLayout: 'fixed', width: `${acWidths.reduce((a,b)=>a+b,0)}px`, minWidth: '100%', borderCollapse: 'collapse', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
              <colgroup>
                {acWidths.map((w, i) => <col key={i} style={{ width: `${w}px` }} />)}
              </colgroup>
              <thead>
                <tr className="bg-black border-b border-[#ff8800]/30">
                  <th style={{ width: `${acWidths[0]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Pattern
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(0, e.clientX); }} onDoubleClick={() => acReset(0)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[1]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('date')}>
                    <div className="flex items-center gap-2">Date <ArrowUpDown className="w-4 h-4" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); acMouseDown(1, e.clientX); }} onDoubleClick={() => acReset(1)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[2]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Type
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(2, e.clientX); }} onDoubleClick={() => acReset(2)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[3]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Location
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(3, e.clientX); }} onDoubleClick={() => acReset(3)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[4]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('company')}>
                    <div className="flex items-center gap-2">Company <ArrowUpDown className="w-4 h-4" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); acMouseDown(4, e.clientX); }} onDoubleClick={() => acReset(4)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[5]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Description
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(5, e.clientX); }} onDoubleClick={() => acReset(5)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[6]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Casualties
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(6, e.clientX); }} onDoubleClick={() => acReset(6)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[7]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Findings
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(7, e.clientX); }} onDoubleClick={() => acReset(7)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${acWidths[8]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff8800', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Sources
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); acMouseDown(8, e.clientX); }} onDoubleClick={() => acReset(8)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff880066'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredIncidents.map((incident, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#ff8800]/10 hover:border-l-4 hover:border-l-[#ff8800] transition-all"
                    style={{ backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#111' }}
                  >
                    <td className="p-4">
                      {incident.pattern && (
                        <div className="flex flex-col gap-1">
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                          {incident.patternNote && (
                            <span className="text-xs text-red-400/70">{incident.patternNote}</span>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-[#e5e5e5] text-sm font-mono">{incident.date}</td>
                    <td className="p-4">
                      <Badge className="bg-[#ff8800]/20 text-[#ff8800] border-[#ff8800]/50 font-mono text-xs">
                        {incident.type}
                      </Badge>
                    </td>
                    <td className="p-4 text-[#e5e5e5] text-sm">{incident.location}</td>
                    <td className="p-4 text-[#e5e5e5] text-sm font-semibold">{incident.company}</td>
                    <td className="p-4 text-[#a0a0a0] text-sm max-w-sm">{incident.description}</td>
                    <td className="p-4 text-[#e5e5e5] text-sm">{incident.casualties}</td>
                    <td className="p-4 text-[#a0a0a0] text-sm max-w-md">{incident.findings}</td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        {incident.sources.map((source, i) => (
                          <a
                            key={i}
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8800] hover:text-[#ff8800]/80 flex items-center gap-1 text-xs"
                          >
                            Source {i + 1} <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-[#0a0a0a] border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-400/80 text-sm leading-relaxed">
            <strong className="font-mono">METHODOLOGY:</strong> Incidents are flagged as patterns when they reflect systemic
            safety failures, regulatory gaps, or documented histories of similar incidents at the same company or industry.
            Data sourced from NTSB, OSHA, CSB, and verified news reports.
          </p>
        </div>
    </div>
  );
}

export default function AccidentsPage() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5]">
      <SEOHead
        title="Accidents & Incidents Tracker"
        description="Tracking patterns in workplace accidents, transportation crashes, and industrial incidents with regulatory and safety implications."
        url={`${window.location.origin}/trackers/accidents`}
      />
      <Navigation />
      <main id="main-content" className="container mx-auto px-4 py-8 pt-24 pb-24 max-w-[1600px] overflow-x-hidden">
        <Link
          to="/trackers"
          className="inline-flex items-center gap-2 text-[#00ff41] hover:text-[#00ff41]/80 font-mono text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Trackers
        </Link>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-8 h-8 text-[#ff8800]" />
            <h1 className="text-3xl font-bold text-[#e5e5e5] font-mono">&gt; ACCIDENTS_INCIDENTS.db</h1>
          </div>
        </div>
        <AccidentsContent />
      </main>
      <Footer />
    </div>
  );
}
