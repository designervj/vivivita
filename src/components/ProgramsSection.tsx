import { Program } from '../types';
import { PROGRAMS } from '../data/content';

interface ProgramsSectionProps {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
  onSelectProgram: (program: Program) => void;
}

export default function ProgramsSection({
  selectedTab,
  onSelectTab,
  onSelectProgram,
}: ProgramsSectionProps) {
  const tabs = [
    { id: 'all', label: 'Svi programi' },
    { id: 'webinar', label: 'Webinar' },
    { id: 'mini-trening', label: 'Mini trening' },
    { id: 'mini-program', label: 'Mini program' },
    { id: 'premium', label: 'Premium 1:1 program' },
  ];

  // In the reference design, all 4 progression offerings are shown in the overview grid
  // When a specific tab is selected, we keep all 4 visible to preserve the complete 4-step roadmap
  const programsToDisplay = PROGRAMS;

  return (
    <section id="programi" className="pt-6 sm:pt-10 pb-16 sm:pb-24 container mx-auto px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <div className="mb-7 sm:mb-9">
        <span className="text-[#2397a6] text-xs sm:text-[13px] font-medium tracking-normal block mb-3.5">
          Načini rada
        </span>

        <h2 className="text-[#2c3338] text-xl sm:text-[23px] md:text-[26px] font-semibold max-w-3xl leading-[1.34]">
          Proces je strukturiran tako da možeš postupno ulaziti u rad — od prvog prepoznavanja obrasca do dubinske transformacije identiteta.
        </h2>
      </div>

      {/* Filter Tabs matching the screenshot */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto pb-2 mb-7 sm:mb-9 text-xs sm:text-[13px] no-scrollbar">
        {tabs.map((tab) => {
          const isActive = selectedTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => onSelectTab(tab.id)}
              className={`transition-all whitespace-nowrap cursor-pointer rounded-md px-3.5 py-1.5 ${
                isActive
                  ? 'bg-[#eaedef] text-[#2397a6] font-medium'
                  : 'text-neutral-600 hover:text-neutral-900 font-normal hover:bg-neutral-100/60'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 4 Cards Grid matching screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {programsToDisplay.map((program, index) => {
          const isSelectedTab = selectedTab === program.category || (selectedTab === 'webinar' && index === 0);

          return (
            <div
              key={program.id}
              id={`program-card-${program.id}`}
              onClick={() => onSelectProgram(program)}
              className={`group bg-[#f4f6f7] rounded-[20px] overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isSelectedTab
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
                  <h3 className="font-semibold text-neutral-800 text-[13.5px] sm:text-[14.5px] leading-snug group-hover:text-[#2397a6] transition-colors">
                    {program.title}
                  </h3>
                </div>

                {/* Action Link at Bottom matching screenshot */}
                <div className="pt-3.5 mt-auto">
                  <span className="inline-block text-xs sm:text-[12.5px] text-[#2397a6] font-medium group-hover:underline underline-offset-4">
                    {program.actionText}
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
