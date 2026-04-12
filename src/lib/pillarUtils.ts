export const normalizePillarName = (pillar: string): string => {
  const mapping: Record<string, string> = {
    'AI, Surveillance & Digital Rights': 'AI & Surveillance',
    'AI & Surveillance': 'AI & Surveillance',
    'AI Ethics & Digital Rights': 'AI & Surveillance',
    'AI & Technology': 'AI & Surveillance',
    'Surveillance & Technology': 'AI & Surveillance',
    'Surveillance State': 'AI & Surveillance',
    'surveillance': 'AI & Surveillance',

    'Child Safety & Human Trafficking': 'Child Safety & Trafficking',
    'Child Safety & Trafficking': 'Child Safety & Trafficking',
    'Child Safety': 'Child Safety & Trafficking',
    'child_safety': 'Child Safety & Trafficking',

    'Elections & Governance': 'Elections & Governance',
    'Government & Law': 'Elections & Governance',
    'Government, Law & Elections': 'Elections & Governance',
    'Government Accountability': 'Elections & Governance',
    'Elections & Democratic Process': 'Elections & Governance',
    'governance': 'Elections & Governance',
    'elections': 'Elections & Governance',
    'compliance': 'Elections & Governance',

    'Energy & Suppressed Technology': 'Energy & Suppressed Technology',
    'energy': 'Energy & Suppressed Technology',

    'Environmental & Corporate Accountability': 'Environmental & Corporate Accountability',
    'Food, Environment & Public Health': 'Environmental & Corporate Accountability',
    'Corporate Accountability': 'Environmental & Corporate Accountability',
    'accountability': 'Environmental & Corporate Accountability',
    'environment': 'Environmental & Corporate Accountability',

    'Financial Systems & Corporate Power': 'Financial Systems',
    'Financial Systems': 'Financial Systems',
    'Finance': 'Financial Systems',
    'finance': 'Financial Systems',
    'Financial Crimes & Corruption': 'Financial Systems',

    'Health & Pharma Transparency': 'Health Transparency',
    'Health Transparency': 'Health Transparency',
    'Government Health Transparency': 'Health Transparency',
    'Health & Pharma': 'Health Transparency',
    'transparency': 'Health Transparency',
    'health': 'Health Transparency',

    'Media Manipulation & Information Control': 'Media Manipulation',
    'Media Manipulation': 'Media Manipulation',
    'media': 'Media Manipulation',

    'Space & Black Budget Programs': 'Space & Black Budget Programs',
    'Black Budget Programs': 'Space & Black Budget Programs',
    'black_budget': 'Space & Black Budget Programs',

    'War & Intelligence': 'War & Intelligence',
    'War & Intelligence Operations': 'War & Intelligence',
    'Military-Industrial Complex': 'War & Intelligence',
    'Middle East Conflict': 'War & Intelligence',
    'war_intelligence': 'War & Intelligence',
    'war': 'War & Intelligence',
  };

  return mapping[pillar] || pillar;
};

export interface PillarConfig {
  slug: string;
  name: string;
  canonicalName: string;
  description: string;
  icon: string;
}

export const PILLAR_CONFIGS: PillarConfig[] = [
  { slug: 'financial-systems', name: 'Financial Systems', canonicalName: 'Financial Systems', description: 'Banking, corporate influence, economic manipulation', icon: 'DollarSign' },
  { slug: 'media-manipulation', name: 'Media Manipulation', canonicalName: 'Media Manipulation', description: 'Propaganda, narrative control, corporate media influence', icon: 'Target' },
  { slug: 'health-transparency', name: 'Health Transparency', canonicalName: 'Health Transparency', description: 'Pharmaceutical influence, medical research, public health', icon: 'FileText' },
  { slug: 'elections-governance', name: 'Elections & Governance', canonicalName: 'Elections & Governance', description: 'Voting systems, campaign finance, election integrity', icon: 'Scale' },
  { slug: 'war-intelligence', name: 'War & Intelligence', canonicalName: 'War & Intelligence', description: 'Military operations, covert programs, defense spending', icon: 'Shield' },
  { slug: 'energy-suppressed-technology', name: 'Energy & Suppressed Technology', canonicalName: 'Energy & Suppressed Technology', description: 'Patent secrecy, energy policy, suppressed innovation', icon: 'Zap' },
  { slug: 'child-safety-trafficking', name: 'Child Safety & Trafficking', canonicalName: 'Child Safety & Trafficking', description: 'Trafficking networks, institutional abuse, protection failures', icon: 'Baby' },
  { slug: 'space-black-budget', name: 'Space & Black Budget', canonicalName: 'Space & Black Budget', description: 'Classified programs, unaccounted spending, secret projects', icon: 'Globe' },
  { slug: 'ai-surveillance', name: 'AI & Surveillance', canonicalName: 'AI & Surveillance', description: 'Digital monitoring, algorithmic control, privacy erosion', icon: 'Eye' },
  { slug: 'environmental-corporate-accountability', name: 'Environmental & Corporate Accountability', canonicalName: 'Environmental & Corporate Accountability', description: 'Corporate environmental destruction, industrial poisoning', icon: 'Trees' },
];

export const getPillarBySlug = (slug: string): PillarConfig | undefined =>
  PILLAR_CONFIGS.find(p => p.slug === slug);

export const getPillarSlugByName = (name: string): string | undefined => {
  const normalized = normalizePillarName(name);
  return PILLAR_CONFIGS.find(p => p.canonicalName === normalized)?.slug;
};

export function normalizePillarSlug(raw: string | null | undefined): string | null {
  if (!raw) return null;

  const slug = raw.toString().toLowerCase().trim();
  if (!slug) return null;

  const mapping: Record<string, string> = {
    'financial-systems': 'financial-systems',
    'financial systems': 'financial-systems',
    'finance': 'financial-systems',
    'financial crimes & corruption': 'financial-systems',
    'financial systems & corporate power': 'financial-systems',

    'media-manipulation': 'media-manipulation',
    'media manipulation': 'media-manipulation',
    'media': 'media-manipulation',
    'media manipulation & information control': 'media-manipulation',

    'health-transparency': 'health-transparency',
    'health transparency': 'health-transparency',
    'health & pharma': 'health-transparency',
    'health & pharma transparency': 'health-transparency',
    'government health transparency': 'health-transparency',

    'elections-governance': 'elections-governance',
    'elections & governance': 'elections-governance',
    'elections & democratic process': 'elections-governance',
    'elections & democracy': 'elections-governance',
    'government, law & elections': 'elections-governance',
    'government & law': 'elections-governance',
    'government accountability': 'elections-governance',
    'elections-government': 'elections-governance',
    'compliance': 'elections-governance',
    'governance': 'elections-governance',
    'elections': 'elections-governance',

    'war-intelligence': 'war-intelligence',
    'war & intelligence': 'war-intelligence',
    'war & intelligence operations': 'war-intelligence',
    'military-industrial complex': 'war-intelligence',
    'middle east conflict': 'war-intelligence',
    'war_intelligence': 'war-intelligence',
    'war': 'war-intelligence',
    'military-covert-ops': 'war-intelligence',

    'energy-suppressed-technology': 'energy-suppressed-technology',
    'energy & suppressed technology': 'energy-suppressed-technology',
    'suppressed-technology': 'energy-suppressed-technology',
    'energy': 'energy-suppressed-technology',

    'child-safety-trafficking': 'child-safety-trafficking',
    'child safety & trafficking': 'child-safety-trafficking',
    'child safety & human trafficking': 'child-safety-trafficking',
    'trafficking networks': 'child-safety-trafficking',
    'trafficking-networks': 'child-safety-trafficking',
    'child_safety': 'child-safety-trafficking',
    'child safety': 'child-safety-trafficking',

    'space-black-budget': 'space-black-budget',
    'space & black budget': 'space-black-budget',
    'black budget programs': 'space-black-budget',
    'space & black budget programs': 'space-black-budget',
    'black-budget': 'space-black-budget',
    'black_budget': 'space-black-budget',

    'ai-surveillance': 'ai-surveillance',
    'ai & surveillance': 'ai-surveillance',
    'surveillance & technology': 'ai-surveillance',
    'surveillance-state': 'ai-surveillance',
    'surveillance state': 'ai-surveillance',
    'ai, surveillance & digital rights': 'ai-surveillance',
    'ai ethics & digital rights': 'ai-surveillance',
    'ai & technology': 'ai-surveillance',
    'surveillance': 'ai-surveillance',

    'environmental-corporate-accountability': 'environmental-corporate-accountability',
    'environmental & corporate accountability': 'environmental-corporate-accountability',
    'environmental-crimes': 'environmental-corporate-accountability',
    'environmental crimes': 'environmental-corporate-accountability',
    'food, environment & public health': 'environmental-corporate-accountability',
    'corporate accountability': 'environmental-corporate-accountability',
    'accountability': 'environmental-corporate-accountability',
    'environment': 'environmental-corporate-accountability',
  };

  const normalized = mapping[slug];
  return normalized ?? null;
}

export const CONNECTED_PILLARS: Record<string, string[]> = {
  'financial-systems': ['media-manipulation', 'elections-governance', 'environmental-corporate-accountability'],
  'media-manipulation': ['financial-systems', 'ai-surveillance', 'elections-governance'],
  'health-transparency': ['environmental-corporate-accountability', 'financial-systems', 'energy-suppressed-technology'],
  'elections-governance': ['financial-systems', 'media-manipulation', 'war-intelligence'],
  'war-intelligence': ['space-black-budget', 'ai-surveillance', 'elections-governance'],
  'energy-suppressed-technology': ['health-transparency', 'space-black-budget', 'environmental-corporate-accountability'],
  'child-safety-trafficking': ['elections-governance', 'media-manipulation', 'war-intelligence'],
  'space-black-budget': ['war-intelligence', 'energy-suppressed-technology', 'ai-surveillance'],
  'ai-surveillance': ['media-manipulation', 'war-intelligence', 'space-black-budget'],
  'environmental-corporate-accountability': ['financial-systems', 'health-transparency', 'media-manipulation'],
};

export const normalizeDocumentType = (type: string): string => {
  const mapping: Record<string, string> = {
    'academic': 'Academic',
    'declassified': 'Declassified',
    'financial-record': 'Financial Record',
    'historical-record': 'Historical Record',
    'news': 'News',
    'policy-document': 'Policy Document',
    'Academic': 'Academic',
    'Declassified': 'Declassified',
    'Financial Record': 'Financial Record',
    'Historical Record': 'Historical Record',
    'News': 'News',
    'Policy Document': 'Policy Document',
  };

  return mapping[type] || type;
};
