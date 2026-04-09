import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: ReactNode;
  stats?: Array<{
    label: string;
    value: string | number;
  }>;
  actions?: ReactNode;
  alert?: {
    icon: ReactNode;
    message: ReactNode;
  };
}

export function PageHeader({ title, description, icon, stats, actions, alert }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-green-400 mb-2 font-mono flex items-center gap-3 min-w-0 break-words">
            {icon}
            {title}
          </h1>
          <p className="text-green-500/70 font-mono text-sm">
            {description}
          </p>
        </div>
        {actions && (
          <div className="ml-4">
            {actions}
          </div>
        )}
      </div>

      {stats && stats.length > 0 && (
        <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-6 text-green-400 font-mono text-sm flex-wrap">
            {stats.map((stat, index) => (
              <div key={index}>
                <span className="text-green-500/70">{stat.label}:</span>
                <span className="font-bold ml-2">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {alert && (
        <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded flex items-start gap-2">
          {alert.icon}
          <div className="text-yellow-400/90 text-sm font-mono flex-1">
            {alert.message}
          </div>
        </div>
      )}
    </div>
  );
}
