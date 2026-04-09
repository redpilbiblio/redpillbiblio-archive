import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageHeader } from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { Eye, Users, FileCheck, GitBranch, MessageSquare, BookOpen, DollarSign, Mail, CircleAlert as AlertCircle } from 'lucide-react';

const editorialBoard = [
  {
    role: 'Lead Archivist',
    description: 'Site curator responsible for content selection, evidence prioritization, and editorial direction. Determines which items meet inclusion criteria and assigns pillar classifications.',
    icon: FileCheck,
  },
  {
    role: 'Verification Analyst',
    description: 'Source authentication specialist. Responsible for tier assignment (Verified, Corroborated, Preliminary), cross-referencing original sources, and maintaining provenance chains.',
    icon: Eye,
  },
  {
    role: 'Connection Mapper',
    description: 'Cross-reference analysis lead. Identifies and documents relationships between evidence items across pillars, maintains the network graph, and flags emerging patterns.',
    icon: GitBranch,
  },
  {
    role: 'Community Liaison',
    description: 'Tip processing and corrections handler. Reviews community submissions, processes correction requests, and manages public-facing communications.',
    icon: MessageSquare,
  },
];

export function Transparency() {
  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <SEOHead
        title="Transparency"
        description="Editorial board, verification standards, corrections log, and full funding transparency for The Red Pill Bibliography research archive."
        url="https://redpillbiblio.wtf/transparency"
      />

      <Navigation />

      <main id="main-content" className="container mx-auto px-6 py-8 pt-20 pb-24 max-w-5xl relative z-10">
        <PageHeader
          title="&gt; TRANSPARENCY.sys"
          description="How we operate, who we are, and how we hold ourselves accountable"
          icon={<Eye className="w-8 h-8" />}
        />

        <div className="space-y-6">
          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-5">
              <Users className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-1">EDITORIAL_BOARD.cfg</h2>
                <p className="text-green-300/60 font-mono text-xs">Pseudonymous roles. No public identities. Accountable through process.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {editorialBoard.map((member) => {
                const Icon = member.icon;
                return (
                  <div key={member.role} className="bg-black border border-green-500/20 rounded-lg p-4 hover:border-green-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-green-400" />
                      <h3 className="text-green-400 font-mono text-sm font-bold">{member.role}</h3>
                    </div>
                    <p className="text-green-300/60 font-mono text-xs leading-relaxed">{member.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">EDITORIAL_STANDARDS.md</h2>
                <p className="text-green-300/70 font-mono text-sm leading-relaxed mb-3">
                  All evidence items are subject to our three-tier verification framework. Sources must be independently verifiable, and all items link to their original primary source wherever possible.
                </p>
                <Link
                  to="/methodology"
                  className="text-green-400 text-sm hover:text-green-300 underline font-mono transition-colors"
                >
                  Read full methodology and verification standards &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-5">
              <AlertCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-1">CORRECTIONS_LOG.db</h2>
                <p className="text-green-300/60 font-mono text-xs mb-4">Transparent record of all corrections, updates, and retractions.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full font-mono text-xs">
                <thead>
                  <tr className="border-b border-green-500/30">
                    <th className="text-left text-green-400 py-2 px-3 font-bold">Date</th>
                    <th className="text-left text-green-400 py-2 px-3 font-bold">Item Title</th>
                    <th className="text-left text-green-400 py-2 px-3 font-bold">What Changed</th>
                    <th className="text-left text-green-400 py-2 px-3 font-bold">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-green-500/40 italic">
                      No corrections issued. We strive for accuracy but commit to transparency when we fall short.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">FUNDING_TRANSPARENCY.md</h2>
                <p className="text-green-300/70 font-mono text-sm leading-relaxed mb-3">
                  This project accepts no advertising revenue, corporate sponsorship, or grants with editorial conditions. Full details on our funding model are available on the About page.
                </p>
                <Link
                  to="/about"
                  className="text-green-400 text-sm hover:text-green-300 underline font-mono transition-colors"
                >
                  Read "How We Are Funded" &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-green-400 font-mono text-lg font-bold mb-2">CONTACT</h2>
                <p className="text-green-300/70 font-mono text-sm leading-relaxed mb-3">
                  Found an error? Have a correction? Spotted something we got wrong? We want to know.
                </p>
                <Link
                  to="/contact"
                  className="text-green-400 text-sm hover:text-green-300 underline font-mono transition-colors"
                >
                  Submit a correction or tip &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
