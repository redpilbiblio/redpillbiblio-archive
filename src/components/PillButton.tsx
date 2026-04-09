import { motion } from 'framer-motion';

interface PillButtonProps {
  type: 'red' | 'blue';
  onClick: () => void;
  disabled?: boolean;
}

export function MobilePillButton({ type, onClick, disabled = false }: PillButtonProps) {
  const colors = {
    red: {
      pill: '#ff0033',
      glow: 'rgba(255, 0, 51, 0.4)',
      text: 'Take the Red Pill',
      subtitle: 'See how deep it goes',
      label: 'Enter the evidence dashboard'
    },
    blue: {
      pill: '#0066ff',
      glow: 'rgba(0, 102, 255, 0.4)',
      text: 'Take the Blue Pill',
      subtitle: 'Go back to sleep',
      label: 'Visit the UN Global Compact website'
    }
  };

  const config = colors[type];

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className="w-full p-6 rounded-lg border-2 transition-all duration-300 font-matrix active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
      style={{
        borderColor: config.pill,
        backgroundColor: config.glow,
        color: config.pill
      }}
      aria-label={config.label}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-bold">{config.text}</span>
        <span className="text-sm opacity-80">{config.subtitle}</span>
      </div>
    </motion.button>
  );
}
