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
  { slug: 'elections-government', name: 'Elections & Governance', canonicalName: 'Elections & Governance', description: 'Voting systems, campaign finance, election integrity', icon: 'Scale' },
  { slug: 'military-covert-ops', name: 'War & Intelligence', canonicalName: 'War & Intelligence', description: 'Military operations, covert programs, defense spending', icon: 'Shield' },
  { slug: 'suppressed-technology', name: 'Energy & Suppressed Technology', canonicalName: 'Energy & Suppressed Technology', description: 'Patent secrecy, energy policy, suppressed innovation', icon: 'Zap' },
  { slug: 'trafficking-networks', name: 'Child Safety & Trafficking', canonicalName: 'Child Safety & Trafficking', description: 'Trafficking networks, institutional abuse, protection failures', icon: 'Baby' },
  { slug: 'black-budget', name: 'Space & Black Budget Programs', canonicalName: 'Space & Black Budget Programs', description: 'Classified programs, unaccounted spending, secret projects', icon: 'Globe' },
  { slug: 'surveillance-state', name: 'AI & Surveillance', canonicalName: 'AI & Surveillance', description: 'Digital monitoring, algorithmic control, privacy erosion', icon: 'Eye' },
  { slug: 'environmental-crimes', name: 'Environmental & Corporate Accountability', canonicalName: 'Environmental & Corporate Accountability', description: 'Corporate environmental destruction, industrial poisoning', icon: 'Trees' },
];

export const getPillarBySlug = (slug: string): PillarConfig | undefined =>
  PILLAR_CONFIGS.find(p => p.slug === slug);

export const getPillarSlugByName = (name: string): string | undefined => {
  const normalized = normalizePillarName(name);
  return PILLAR_CONFIGS.find(p => p.canonicalName === normalized)?.slug;
};

export const CONNECTED_PILLARS: Record<string, string[]> = {
  'financial-systems': ['media-manipulation', 'elections-government', 'environmental-crimes'],
  'media-manipulation': ['financial-systems', 'surveillance-state', 'elections-government'],
  'health-transparency': ['environmental-crimes', 'financial-systems', 'suppressed-technology'],
  'elections-government': ['financial-systems', 'media-manipulation', 'military-covert-ops'],
  'military-covert-ops': ['black-budget', 'surveillance-state', 'elections-government'],
  'suppressed-technology': ['health-transparency', 'black-budget', 'environmental-crimes'],
  'trafficking-networks': ['elections-government', 'media-manipulation', 'military-covert-ops'],
  'black-budget': ['military-covert-ops', 'suppressed-technology', 'surveillance-state'],
  'surveillance-state': ['media-manipulation', 'military-covert-ops', 'black-budget'],
  'environmental-crimes': ['financial-systems', 'health-transparency', 'media-manipulation'],
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
