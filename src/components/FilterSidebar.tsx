import { useState } from 'react';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from './ui/sheet';
import { FileText, Calendar, Tag, Shield, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { normalizeDocumentType } from '@/lib/pillarUtils';

interface FilterSidebarProps {
  documentTypes: string[];
  topicTags: string[];
  verificationTiers: string[];
  dateRange: { start: string; end: string };
  selectedTypes: Set<string>;
  selectedTags: Set<string>;
  selectedTiers: Set<string>;
  onTypeChange: (type: string) => void;
  onTagChange: (tag: string) => void;
  onTierChange: (tier: string) => void;
  onDateRangeChange: (range: { start: string; end: string }) => void;
  onClearAll: () => void;
  onQuickPreset: (preset: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function FilterSidebar({
  documentTypes,
  topicTags,
  verificationTiers,
  dateRange,
  selectedTypes,
  selectedTags,
  selectedTiers,
  onTypeChange,
  onTagChange,
  onTierChange,
  onDateRangeChange,
  onClearAll,
  onQuickPreset,
  isCollapsed = false,
  onToggleCollapse,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['types', 'tiers', 'dates', 'presets'])
  );

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const activeFilterCount = selectedTypes.size + selectedTags.size + selectedTiers.size;

  const FilterContent = () => (
    <>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3 pr-8 md:pr-8">
          <h3 className="text-green-400 font-bold text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            ACTIVE FILTERS
          </h3>
          {activeFilterCount > 0 && (
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
              {activeFilterCount}
            </Badge>
          )}
        </div>
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="w-full text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/30 min-h-[44px]"
          >
            CLEAR ALL FILTERS
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <button
            onClick={() => toggleSection('presets')}
            className="w-full flex items-center justify-between text-green-400 text-xs font-bold mb-2 hover:text-green-300 transition-colors min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-3 h-3" />
              QUICK DOSSIERS
            </span>
            {expandedSections.has('presets') ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
          {expandedSections.has('presets') && (
            <div className="space-y-2 pl-1">
              <button
                onClick={() => onQuickPreset('court-filings')}
                className="w-full text-left text-xs text-green-300/70 hover:text-green-300 hover:bg-green-500/10 p-2 rounded transition-colors border border-green-500/20 min-h-[44px]"
              >
                All Court Filings
              </button>
              <button
                onClick={() => onQuickPreset('post-2020')}
                className="w-full text-left text-xs text-green-300/70 hover:text-green-300 hover:bg-green-500/10 p-2 rounded transition-colors border border-green-500/20 min-h-[44px]"
              >
                Post-2020 Declassifications
              </button>
              <button
                onClick={() => onQuickPreset('cross-referenced')}
                className="w-full text-left text-xs text-green-300/70 hover:text-green-300 hover:bg-green-500/10 p-2 rounded transition-colors border border-green-500/20 min-h-[44px]"
              >
                Cross-Referenced Chains
              </button>
            </div>
          )}
        </div>

        <div className="border-t border-green-500/20 pt-4">
          <button
            onClick={() => toggleSection('types')}
            className="w-full flex items-center justify-between text-green-400 text-xs font-bold mb-2 hover:text-green-300 transition-colors min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-3 h-3" />
              DOCUMENT TYPE
            </span>
            {expandedSections.has('types') ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
          {expandedSections.has('types') && (
            <div className="space-y-2 pl-1">
              {documentTypes.map(type => (
                <div key={type} className="flex items-center space-x-2 min-h-[44px]">
                  <Checkbox
                    id={`type-${type}`}
                    checked={selectedTypes.has(type)}
                    onCheckedChange={() => onTypeChange(type)}
                    className="border-green-500/50 data-[state=checked]:bg-green-500/20 data-[state=checked]:border-green-500 min-w-[24px] min-h-[24px]"
                  />
                  <label
                    htmlFor={`type-${type}`}
                    className="text-xs text-green-300/70 cursor-pointer hover:text-green-300 leading-tight flex-1"
                  >
                    {normalizeDocumentType(type)}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-green-500/20 pt-4">
          <button
            onClick={() => toggleSection('tiers')}
            className="w-full flex items-center justify-between text-green-400 text-xs font-bold mb-2 hover:text-green-300 transition-colors min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <Shield className="w-3 h-3" />
              SOURCE CREDIBILITY
            </span>
            {expandedSections.has('tiers') ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
          {expandedSections.has('tiers') && (
            <div className="space-y-2 pl-1">
              {verificationTiers.map(tier => (
                <div key={tier} className="flex items-center space-x-2 min-h-[44px]">
                  <Checkbox
                    id={`tier-${tier}`}
                    checked={selectedTiers.has(tier)}
                    onCheckedChange={() => onTierChange(tier)}
                    className="border-green-500/50 data-[state=checked]:bg-green-500/20 data-[state=checked]:border-green-500 min-w-[24px] min-h-[24px]"
                  />
                  <label
                    htmlFor={`tier-${tier}`}
                    className="text-xs text-green-300/70 cursor-pointer hover:text-green-300 leading-tight uppercase flex-1"
                  >
                    {tier === 'corroborated' ? 'VALID' : tier}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-green-500/20 pt-4">
          <button
            onClick={() => toggleSection('dates')}
            className="w-full flex items-center justify-between text-green-400 text-xs font-bold mb-2 hover:text-green-300 transition-colors min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              DATE RANGE
            </span>
            {expandedSections.has('dates') ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
          {expandedSections.has('dates') && (
            <div className="space-y-2 pl-1">
              <div>
                <Label htmlFor="start-date" className="text-xs text-green-300/70 mb-1 block">
                  FROM
                </Label>
                <Input
                  id="start-date"
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => onDateRangeChange({ ...dateRange, start: e.target.value })}
                  className="bg-black border-green-500/30 text-green-400 text-base min-h-[44px]"
                />
              </div>
              <div>
                <Label htmlFor="end-date" className="text-xs text-green-300/70 mb-1 block">
                  TO
                </Label>
                <Input
                  id="end-date"
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => onDateRangeChange({ ...dateRange, end: e.target.value })}
                  className="bg-black border-green-500/30 text-green-400 text-base min-h-[44px]"
                />
              </div>
            </div>
          )}
        </div>

        {topicTags.length > 0 && (
          <div className="border-t border-green-500/20 pt-4">
            <button
              onClick={() => toggleSection('tags')}
              className="w-full flex items-center justify-between text-green-400 text-xs font-bold mb-2 hover:text-green-300 transition-colors min-h-[44px]"
            >
              <span className="flex items-center gap-2">
                <Tag className="w-3 h-3" />
                TOPIC TAGS
              </span>
              {expandedSections.has('tags') ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
            {expandedSections.has('tags') && (
              <div className="space-y-2 pl-1">
                {topicTags.map(tag => (
                  <div key={tag} className="flex items-center space-x-2 min-h-[44px]">
                    <Checkbox
                      id={`tag-${tag}`}
                      checked={selectedTags.has(tag)}
                      onCheckedChange={() => onTagChange(tag)}
                      className="border-green-500/50 data-[state=checked]:bg-green-500/20 data-[state=checked]:border-green-500 min-w-[24px] min-h-[24px]"
                    />
                    <label
                      htmlFor={`tag-${tag}`}
                      className="text-xs text-green-300/70 cursor-pointer hover:text-green-300 leading-tight flex-1"
                    >
                      {tag}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Mobile filter button */}
      <div className="md:hidden fixed bottom-4 left-4 z-40">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="bg-green-500/20 text-green-400 border-2 border-green-500/50 hover:bg-green-500/30 shadow-lg min-w-[56px] min-h-[56px] rounded-full"
              size="lg"
            >
              <Filter className="w-6 h-6" />
              {activeFilterCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-black border-0 min-w-[24px] min-h-[24px] rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black/95 border-green-500/30 text-green-500 w-[85vw] sm:w-[400px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-green-400 font-mono">FILTERS</SheetTitle>
            </SheetHeader>
            <div className="mt-6 font-mono">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar - Fixed/Locked position */}
      {!isCollapsed ? (
        <div className="hidden md:block fixed left-0 top-16 bottom-0 w-80 bg-black/95 border-r border-green-500/30 overflow-y-auto p-4 pb-24 font-mono z-30 transition-all duration-300">
          <button
            onClick={onToggleCollapse}
            className="sticky top-0 float-right text-green-500/50 hover:text-green-400 hover:bg-green-500/10 p-2 rounded transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center mb-2 bg-black/80 backdrop-blur-sm border border-green-500/30"
            aria-label="Minimize filters"
            title="Minimize filters"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <FilterContent />
        </div>
      ) : (
        <button
          onClick={onToggleCollapse}
          className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-green-500/20 text-green-400 border-2 border-l-0 border-green-500/50 hover:bg-green-500/30 p-3 rounded-r-lg transition-all duration-300 flex-col items-center gap-2 min-w-[48px] shadow-lg"
          aria-label="Expand filters"
          title="Expand filters"
        >
          <ChevronRight className="w-4 h-4" />
          <span className="text-xs font-mono writing-mode-vertical transform -rotate-180">FILTERS</span>
          {activeFilterCount > 0 && (
            <Badge className="bg-green-500 text-black border-0 min-w-[20px] min-h-[20px] text-xs rounded-full">
              {activeFilterCount}
            </Badge>
          )}
        </button>
      )}
    </>
  );
}
