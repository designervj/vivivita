import EditableText from '../../../components/shared/EditableText';
import { useEffect, useState } from 'react';
import { Program } from '../../../types';
import { PROGRAMS, PROGRAMS_CONTENT, type HomeContent } from '../../../lib/pages/content';

interface ProgramsSectionProps {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
  onSelectProgram: (program: Program) => void;
  programs?: HomeContent['programs'];
  content?: HomeContent['programsContent'];
}

export default function ProgramsSection({
  selectedTab,
  onSelectTab,
  onSelectProgram,
  programs = PROGRAMS,
  content = PROGRAMS_CONTENT,
}: ProgramsSectionProps) {
  const [activeTab, setActiveTab] = useState(selectedTab || 'all');

  const tabs = content.tabs;

  useEffect(() => {
    setActiveTab(selectedTab || 'all');
  }, [selectedTab]);

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    onSelectTab(tabId);
  };

  const programsToDisplay = activeTab === 'all' || activeTab === 'webinar'
    ? programs
    : programs.filter((program) => program.category === activeTab);

  return (
    <section id="programi" className="pt-6 sm:pt-10 pb-16 sm:pb-24 container mx-auto px-3 sm:px-6 md:px-8">
      {/* Section Header */}
      <div className="mb-7 sm:mb-9">
        <span className="text-[var(--primary)] text-xs sm:text-[16px] font-medium tracking-normal block mb-3.5 border-b pb-2 border-[var(--border)]">
          <EditableText sectionId="programs-001" fieldPath="tag.hr" value={content.tag} />
        </span>

        <h2 className="text-[var(--muted)] text-[19px] sm:text-[23px] md:text-[var(--text-h3)] font-[500] leading-[150%] sm:leading-[160%] max-w-3xl md:pr-8">
          <EditableText
            sectionId="programs-001"
            fieldPath="heading.hr"
            value={content.heading}
            multiline
          />
        </h2>
      </div>

      {/* Filter Tabs matching the screenshot */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-0 overflow-x-auto pb-2 mb-7 sm:mb-9 text-xs sm:text-[13px] no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => handleSelectTab(tab.id)}
              className={`transition-all whitespace-nowrap cursor-pointer rounded-[6px] px-3 py-1.5 sm:px-10 text-[13px] sm:text-[14px] ${isActive
                ? 'bg-[var(--secondary)] text-[var(--primary)] font-medium'
                : 'text-[#4F4640] hover:text-neutral-900 font-normal hover:bg-neutral-100/60'
                }`}
            >
              <EditableText sectionId="programs-001" fieldPath={`tabs.${content.tabs.findIndex((item) => item.id === tab.id)}.label.hr`} value={tab.label} />
            </button>
          );
        })}
      </div>

      {/* 4 Cards Grid matching screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {programsToDisplay.map((program) => {
          const isSelectedTab = activeTab === program.category;

          return (
            <div
              key={program.id}
              id={`program-card-${program.id}`}
              onClick={() => onSelectProgram(program)}
              className={`group bg-[#f4f6f7] rounded-[20px] overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer ${isSelectedTab
                ? 'border-[#dbe3e5] shadow-xs'
                : 'border-[#eaedee] hover:border-[#d9e1e3] hover:shadow-xs'
                }`}
            >
              {/* Image Container with high visual fidelity to screenshot */}
              <div className="relative aspect-[1/1] sm:aspect-[4/3.8] bg-[#e6eaec] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Specific mockup overlay for Card 3: "Izlaz iz sindroma dobre djevojčice" */}


                {/* Specific mockup overlay for Card 4: "Žena koja vodi svoj život" (Wheel of Life diagram) */}
                {program.id === 'zena-koja-vodi-svoj-zivot' && (
                  <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
                    <div className="relative w-28 h-28 opacity-75">
                      <svg viewBox="0 0 100 100" className="w-full h-full stroke-neutral-700 fill-none" strokeWidth="1.2">
                        {/* Concentric circles */}
                        <circle cx="50" cy="50" r="42" strokeDasharray="1.5 1.5" />
                        <circle cx="50" cy="50" r="28" strokeDasharray="1 1" />
                        <circle cx="50" cy="50" r="14" />
                        {/* Radial spokes */}
                        <line x1="50" y1="8" x2="50" y2="92" />
                        <line x1="8" y1="50" x2="92" y2="50" />
                        <line x1="20" y1="20" x2="80" y2="80" />
                        <line x1="20" y1="80" x2="80" y2="20" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Body at Bottom */}
              <div className="p-4 sm:p-5 bg-[#f4f6f7] flex-1 flex flex-col justify-between">
                <div>
                  <h3 className=" font-semibold text-neutral-800 text-[13.5px] sm:text-[16px] leading-snug group-hover:text-[var(--accent)] transition-colors border-b border-[var(--border)] pb-3">
                    <EditableText sectionId="programs-001" fieldPath={`items.${programs.findIndex((item) => item.id === program.id)}.title`} value={program.title} />
                  </h3>
                </div>

                {/* Action Link at Bottom matching screenshot */}
                <div className="pt-2 mt-auto">
                  <span className="inline-block text-xs sm:text-[14px] text-[var(--accent)] font-medium ">
                    <EditableText sectionId="programs-001" fieldPath={`items.${programs.findIndex((item) => item.id === program.id)}.actionText`} value={program.actionText} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
