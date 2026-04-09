import { X } from 'lucide-react';
import { Connection } from '../data/connectionMapData';
import { motion } from 'framer-motion';

interface ConnectionDetailProps {
  connection: Connection | null;
  onClose: () => void;
}

export default function ConnectionDetail({ connection, onClose }: ConnectionDetailProps) {
  if (!connection) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-neutral-900 border border-neutral-800 rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-neutral-900 border-b border-neutral-800 p-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{connection.title}</h2>
            <div className="flex flex-wrap gap-2">
              {connection.tags.map(tag => (
                <span key={tag} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide mb-2">
              Summary
            </h3>
            <p className="text-neutral-200 text-lg leading-relaxed">{connection.summary}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide mb-3">
              Full Analysis
            </h3>
            <p className="text-neutral-300 leading-relaxed whitespace-pre-line">{connection.fullText}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wide mb-3">
              Citations
            </h3>
            <ul className="space-y-2">
              {connection.citations.map((citation, index) => (
                <li key={index} className="text-sm text-neutral-400 pl-4 border-l-2 border-neutral-700">
                  {citation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
