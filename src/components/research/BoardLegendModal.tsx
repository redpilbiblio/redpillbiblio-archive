import { useState, useEffect } from 'react';
import { X, Move, Link2, Palette, Filter, CircleHelp as HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'researchBoardIntroDismissed';

function checkDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function setDismissed() {
  try {
    localStorage.setItem(STORAGE_KEY, 'true');
  } catch { /* ignore */ }
}

interface BoardLegendModalProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export function useLegendModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!checkDismissed()) {
      setOpen(true);
    }
  }, []);

  return {
    open,
    openLegend: () => setOpen(true),
    closeLegend: () => setOpen(false),
  };
}

const ITEMS = [
  {
    icon: Move,
    color: 'text-amber-700',
    bg: 'bg-amber-100',
    title: 'Drag notes',
    desc: 'Drag any note by its header bar to reposition it on the board. Positions are saved automatically.',
  },
  {
    icon: Link2,
    color: 'text-blue-700',
    bg: 'bg-blue-100',
    title: 'Connect notes with string',
    desc: 'Right-click (desktop) or long-press (mobile) a note to start connecting. Drag to another note to draw a colored string between them.',
  },
  {
    icon: Palette,
    color: 'text-rose-700',
    bg: 'bg-rose-100',
    title: 'Choose string colors',
    desc: 'Use the color palette in the board toolbar to pick the color for new connections. Click an existing string to change its color or delete it.',
  },
  {
    icon: Filter,
    color: 'text-emerald-700',
    bg: 'bg-emerald-100',
    title: 'Pillar filters keep everything visible',
    desc: 'Selecting pillars in the filter sidebar prioritizes matching items at the top — all items remain visible so nothing is ever hidden from your board.',
  },
];

export function BoardLegendModal({ forceOpen = false, onClose }: BoardLegendModalProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  function handleClose() {
    if (dontShowAgain) {
      setDismissed();
    }
    onClose?.();
  }

  if (!forceOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div
        className="relative w-full max-w-md rounded-2xl shadow-2xl z-10 overflow-hidden"
        style={{ backgroundColor: '#fef9c3', border: '2px solid #d4a843' }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ background: 'linear-gradient(90deg, #d4a843, #f59e0b, #d4a843)' }}
        />

        <div className="px-6 pt-6 pb-2 flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-700/10">
              <HelpCircle size={20} className="text-amber-800" />
            </div>
            <div>
              <h2 className="text-base font-bold text-amber-950">Research Board Controls</h2>
              <p className="text-xs text-amber-800/60">How to use the interactive corkboard</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-amber-800/50 hover:text-amber-900 hover:bg-amber-200/50 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-4 space-y-3">
          {ITEMS.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${item.bg}`}>
                  <Icon size={15} className={item.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-amber-950 mb-0.5">{item.title}</p>
                  <p className="text-xs text-amber-900/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-6 py-4 border-t border-amber-300/60 flex items-center justify-between gap-4">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={e => setDontShowAgain(e.target.checked)}
              className="w-3.5 h-3.5 rounded accent-amber-700 cursor-pointer"
            />
            <span className="text-xs text-amber-800/70">Don't show again</span>
          </label>

          <button
            onClick={handleClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors"
            style={{ backgroundColor: '#92400e' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#78350f')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#92400e')}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
