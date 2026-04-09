import { useState } from 'react';
import { NetworkGraph } from '@/components/NetworkGraph';
import { Document } from '@/lib/supabase';
import { ExternalLink, Calendar, Tag, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';

export function EvidenceBoard() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <SEOHead
        title="Network View"
        description="Interactive network visualization of evidence connections across all research pillars. Explore relationships between declassified documents and investigations."
        url="https://redpillbiblio.wtf/evidence"
      />
      <NetworkGraph onDocumentSelect={setSelectedDoc} />

      <div className={`fixed top-16 right-0 w-[340px] h-[calc(100vh-4rem)] bg-[#0a0a0a] border-l border-[#222] z-[200] transform transition-transform duration-200 overflow-y-auto
        ${selectedDoc ? 'translate-x-0' : 'translate-x-full'}
        max-md:w-full`}>

        {selectedDoc && (
          <>
            <div className="flex items-center justify-between p-4 border-b border-[#222]">
              <h2 className="text-[11px] text-[#00ff41] font-mono font-semibold">&gt; document.inspect</h2>
              <button
                onClick={() => setSelectedDoc(null)}
                className="w-6 h-6 flex items-center justify-center text-[#a0a0a0] border border-[#222] rounded-sm hover:text-[#00ff41] hover:border-[rgba(0,255,65,0.4)] transition-all font-mono"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <div className="text-[9px] uppercase tracking-[1px] text-[#666] mb-1 font-mono">Title</div>
                <div className="text-[11px] text-[#e5e5e5] leading-relaxed font-mono break-words">
                  {selectedDoc.title}
                </div>
              </div>

              <div>
                <div className="text-[9px] uppercase tracking-[1px] text-[#666] mb-1 font-mono">Verification</div>
                <Badge
                  variant="outline"
                  className={`border font-mono text-[10px] ${
                    selectedDoc.verification_tier === 'verified'
                      ? 'border-[#00ff41] text-[#00ff41]'
                      : selectedDoc.verification_tier === 'corroborated'
                      ? 'border-[#ffbf00] text-[#ffbf00]'
                      : 'border-[#a0a0a0] text-[#a0a0a0]'
                  }`}
                >
                  {selectedDoc.verification_tier === 'corroborated' ? 'VALID' : selectedDoc.verification_tier.toUpperCase()}
                </Badge>
              </div>

              {selectedDoc.description && (
                <div>
                  <div className="text-[9px] uppercase tracking-[1px] text-[#666] mb-1 font-mono">Description</div>
                  <p className="text-[10px] text-[#a0a0a0] leading-relaxed font-mono">
                    {selectedDoc.description}
                  </p>
                </div>
              )}

              {selectedDoc.date_published && (
                <div>
                  <div className="text-[9px] uppercase tracking-[1px] text-[#666] mb-1 font-mono">Date</div>
                  <div className="text-[10px] text-[#a0a0a0] font-mono flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(selectedDoc.date_published).toLocaleDateString()}
                  </div>
                </div>
              )}

              {selectedDoc.content && (
                <div>
                  <div className="text-[9px] uppercase tracking-[1px] text-[#666] mb-1 font-mono flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Content
                  </div>
                  <div className="bg-[#0f0f0f] p-3 rounded border border-[#222] text-[9px] text-[#a0a0a0] font-mono leading-relaxed max-h-60 overflow-y-auto whitespace-pre-wrap">
                    {selectedDoc.content}
                  </div>
                </div>
              )}

              {selectedDoc.source_url && (
                <Button
                  variant="outline"
                  className="w-full border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 text-[10px] font-mono"
                  asChild
                >
                  <a href={selectedDoc.source_url} target="_blank" rel="noopener noreferrer">
                    View Original Source
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
