import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-green-500/50 mb-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-green-400 transition-colors underline underline-offset-2"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-green-500/70">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="w-3 h-3" />
          )}
        </div>
      ))}
    </nav>
  );
}
