export interface SubmissionFormData {
  document_type: string;
  title: string;
  source_url: string;
  document_date: string;
  pillar: string;
  summary: string;
  criteria_notes: string;
  is_anonymous: boolean;
  submitter_handle: string;
  signal_handle: string;
}

export const INITIAL_FORM_DATA: SubmissionFormData = {
  document_type: '',
  title: '',
  source_url: '',
  document_date: '',
  pillar: '',
  summary: '',
  criteria_notes: '',
  is_anonymous: true,
  submitter_handle: '',
  signal_handle: '',
};

export const DOCUMENT_TYPES = [
  { value: 'Government Document', icon: 'FileText', description: 'Official government records, reports, or publications' },
  { value: 'Court Filing', icon: 'Scale', description: 'Legal proceedings, indictments, rulings, or case documents' },
  { value: 'FOIA Release', icon: 'Unlock', description: 'Documents obtained through Freedom of Information Act requests' },
  { value: 'Investigative Report', icon: 'Search', description: 'Published investigations from credible news organizations' },
  { value: 'Whistleblower Testimony', icon: 'ShieldAlert', description: 'First-hand accounts from verified insiders' },
  { value: 'Other', icon: 'FileQuestion', description: 'Other documented evidence with verifiable sources' },
] as const;

export const PILLARS = [
  'AI, Surveillance & Digital Rights',
  'Child Safety & Human Trafficking',
  'Elections & Governance',
  'Energy & Suppressed Technology',
  'Environmental & Corporate Accountability',
  'Financial Systems & Corporate Power',
  'Health & Pharma Transparency',
  'Media Manipulation & Information Control',
  'Space & Black Budget Programs',
  'War & Intelligence',
] as const;
