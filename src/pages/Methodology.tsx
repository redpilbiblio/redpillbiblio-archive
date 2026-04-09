import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, FileSearch, Link2, Database, CircleCheck as CheckCircle2, BookOpen, Archive } from 'lucide-react';

export function Methodology() {
  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title="Methodology"
        description="Three-tier verification system: VERIFIED primary documents, VALID secondary sources, and PRELIMINARY evidence. Every item is traced to its origin."
        url="https://redpillbiblio.wtf/methodology"
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <Navigation />

      <div className="container mx-auto px-6 py-8 pt-20 pb-24 max-w-5xl relative z-10">
        <PageHeader
          title="&gt; METHODOLOGY.doc"
          description="Verification process and evidence standards for this archive"
          icon={<BookOpen className="w-8 h-8" />}
        />

        <div className="space-y-6">
          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">
                  VERIFICATION TIERS
                </h2>
                <p className="text-green-300/70 text-sm leading-relaxed">
                  Every item in this archive is assigned a credibility tier based on source authenticity and corroboration.
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-9">
              <div className="bg-black border border-green-500/30 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 font-mono text-xs">
                    VERIFIED
                  </Badge>
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-green-300/80 text-xs leading-relaxed">
                  <strong>Primary source documents</strong> from government agencies, courts, or official archives.
                  These include declassified files, court filings, official transcripts, and authenticated government records.
                  <span className="block mt-2 text-green-500/60">
                    Examples: Congressional hearing transcripts, DOJ press releases, Supreme Court opinions, FOIA releases
                  </span>
                </p>
              </div>

              <div className="bg-black border border-yellow-500/30 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 font-mono text-xs">
                    VALID
                  </Badge>
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                </div>
                <p className="text-green-300/80 text-xs leading-relaxed">
                  <strong>Secondary Corroboration Validated — Primary Sources Pending.</strong> These items have been independently verified by multiple credible secondary sources (investigative journalism, academic research, official investigations) but primary source documents (government records, court filings, declassified files) are still being located or authenticated.
                  <span className="block mt-2 text-green-500/60">
                    Examples: Multi-source investigative journalism, academic research with citations, verified whistleblower testimony
                  </span>
                </p>
              </div>

              <div className="bg-black border border-gray-500/30 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/50 font-mono text-xs">
                    PRELIMINARY
                  </Badge>
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-green-300/80 text-xs leading-relaxed">
                  <strong>Emerging evidence</strong> from credible sources but awaiting additional corroboration.
                  Single-source reporting, leaked documents pending authentication, or official statements without supporting documentation.
                  <span className="block mt-2 text-green-500/60">
                    Examples: Single-source investigative reports, unverified leaked documents, official statements without backing records
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <FileSearch className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">
                  SOURCE VALIDATION PROCESS
                </h2>
              </div>
            </div>

            <div className="space-y-3 ml-9 text-green-300/80 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">1.</span>
                <div>
                  <strong className="text-green-300">Primary Source Verification:</strong> All documents are traced to original sources.
                  We prioritize .gov domains, official archives, court dockets, and authenticated government databases.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">2.</span>
                <div>
                  <strong className="text-green-300">Cross-Reference Check:</strong> Claims are cross-referenced against multiple independent sources.
                  Contradictions are noted and flagged for further investigation.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">3.</span>
                <div>
                  <strong className="text-green-300">Date Authentication:</strong> Publication dates, filing dates, and release dates are verified
                  against official records. Backdating and misdating are flagged.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">4.</span>
                <div>
                  <strong className="text-green-300">Context Preservation:</strong> Documents are presented with full context including jurisdiction,
                  case numbers, and procedural history to prevent misinterpretation.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">5.</span>
                <div>
                  <strong className="text-green-300">Ongoing Review:</strong> Items are re-verified when new information emerges.
                  Corrections are made immediately and transparently.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-cyan-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Archive className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-cyan-400 font-mono text-lg font-bold mb-2">
                  DOCUMENT ARCHIVAL POLICY
                </h2>
              </div>
            </div>

            <div className="space-y-4 ml-9 text-green-300/80 text-sm">
              <p className="leading-relaxed">
                External links are inherently fragile: websites go offline, pages get removed, and documents disappear.
                To preserve evidence integrity, we maintain a read-only archival system for our most critical sources.
              </p>

              <div className="bg-black border border-cyan-500/20 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 font-mono text-xs">
                    <Archive className="w-3 h-3 mr-1" />
                    Mirrored Copy
                  </Badge>
                </div>
                <p className="text-green-300/80 text-xs leading-relaxed">
                  For <strong>VERIFIED</strong> items, we store a read-only archival copy for research continuity.
                  Original source links are always displayed alongside the mirror. These archives are timestamped
                  and preserved exactly as downloaded — we do not modify, annotate, or alter archived documents in any way.
                </p>
              </div>

              <div className="bg-black border border-yellow-500/20 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-yellow-500/10 text-yellow-500/80 border-yellow-500/30 font-mono text-xs">
                    External Link
                  </Badge>
                </div>
                <p className="text-green-300/80 text-xs leading-relaxed">
                  Items without a mirrored copy link to external sources only. These links may become unavailable
                  over time. If you encounter a broken link, use the "Report Issue" button on any evidence item
                  to notify our team so we can attempt to locate an archived version.
                </p>
              </div>

              <p className="text-green-500/60 text-xs italic">
                Note: We respect robots.txt, paywalls, and copyright. Archival is limited to publicly accessible documents
                that permit preservation under fair use for research and educational purposes.
              </p>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Link2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">
                  CONNECTION METHODOLOGY
                </h2>
              </div>
            </div>

            <div className="space-y-4 ml-9">
              <div>
                <h3 className="text-green-300 font-mono text-sm font-bold mb-2">Manual Connections</h3>
                <p className="text-green-300/80 text-sm leading-relaxed">
                  Expert-curated connections established through direct citation, explicit reference, or documented relationship between documents.
                  These are manually verified by researchers and include detailed justification.
                </p>
              </div>

              <div>
                <h3 className="text-green-300 font-mono text-sm font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  Auto-Generated Connections
                </h3>
                <p className="text-green-300/80 text-sm leading-relaxed mb-2">
                  AI-assisted pattern detection identifies potential relationships through entity extraction, temporal analysis,
                  and semantic similarity. Each connection includes:
                </p>
                <ul className="list-disc list-inside text-green-300/70 text-xs space-y-1">
                  <li>Confidence score (0.0 - 1.0)</li>
                  <li>Reasoning explanation</li>
                  <li>Shared entities or concepts</li>
                  <li>Connection type (corroborates, references, contradicts)</li>
                </ul>
                <p className="text-yellow-400/80 text-xs mt-3 italic">
                  Note: Auto-generated connections are marked distinctly and should be independently verified before use in research.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Database className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">
                  EXCLUSION CRITERIA
                </h2>
              </div>
            </div>

            <div className="ml-9 text-green-300/80 text-sm space-y-2">
              <p className="leading-relaxed">
                This archive explicitly excludes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-green-300/70">
                <li>Unverified social media posts or forum content</li>
                <li>Anonymous sources without corroboration</li>
                <li>Speculative analysis or opinion pieces not backed by documentation</li>
                <li>Altered, fabricated, or deepfaked materials</li>
                <li>Documents with contested authenticity pending resolution</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <h2 className="text-red-400 font-mono text-sm font-bold mb-3">
              IMPORTANT DISCLAIMERS
            </h2>
            <div className="text-green-300/80 text-xs leading-relaxed space-y-2">
              <p>
                This archive is compiled from publicly available sources for research and educational purposes.
                Inclusion in this database does not constitute endorsement of claims or accusations.
              </p>
              <p>
                Criminal charges do not equal guilt. Convictions can be overturned. Context matters.
                Users are responsible for their own interpretation and verification of information.
              </p>
              <p className="text-yellow-400/90 italic">
                This platform presents documents as they exist in the public record. We do not add speculation,
                commentary, or editorial interpretation beyond categorization and connection-mapping.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-green-500/50 font-mono text-xs">
            LAST METHODOLOGY UPDATE: {new Date().toISOString().split('T')[0]}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
