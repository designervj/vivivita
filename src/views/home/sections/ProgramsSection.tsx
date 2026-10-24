'use client';

import EditableText from '../../../components/shared/EditableText';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Program } from '../../../types';
import { PROGRAMS, PROGRAMS_CONTENT, type HomeContent } from '../../../lib/pages/content';
import { useLanguage, useCopy } from '../../../context/LanguageContext';

interface ProgramsSectionProps {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
  onSelectProgram: (program: Program) => void;
  onOpenContact?: () => void;
  programs?: HomeContent['programs'];
  content?: HomeContent['programsContent'];
}

export default function ProgramsSection({
  selectedTab,
  onSelectTab,
  onSelectProgram,
  onOpenContact,
  programs = PROGRAMS,
  content = PROGRAMS_CONTENT,
}: ProgramsSectionProps) {
  const { lang } = useLanguage();
  const copy = useCopy();
  const [activeTab, setActiveTab] = useState(selectedTab || 'all');

  const tabs = copy.programs.tabs;
  const currentPrograms = copy.programs.items as unknown as Program[];

  useEffect(() => {
    setActiveTab(selectedTab || 'all');
  }, [selectedTab]);

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    onSelectTab(tabId);
  };

  const programsToDisplay = activeTab === 'all'
    ? currentPrograms
    : currentPrograms.filter((program) => program.category === activeTab);

  const tagText = lang === 'en' ? copy.programs.tag : (content.tag || copy.programs.tag);
  const headingText = lang === 'en' ? copy.programs.heading : (content.heading || copy.programs.heading);
  const customHeading = lang === 'en' ? copy.programs.customProgram.heading : (content.customProgram?.heading || copy.programs.customProgram.heading);
  const customParagraphs = lang === 'en' ? copy.programs.customProgram.paragraphs : (content.customProgram?.paragraphs || copy.programs.customProgram.paragraphs);
  const customCta = lang === 'en' ? copy.programs.customProgram.ctaText : (content.customProgram?.ctaText || copy.programs.customProgram.ctaText);

  return (
    <>
      <section id="programi" className="pt-6 sm:pt-10 pb-16 sm:pb-24 container mx-auto px-3 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-7 sm:mb-9">
          <span className="text-[var(--primary)] text-xs sm:text-[16px] font-medium tracking-normal block mb-3.5 border-b pb-2 border-[var(--border)]">
            <EditableText sectionId="programs-001" fieldPath={`tag.${lang}`} value={tagText} />
          </span>

          <h2 className="text-[var(--muted)] text-[19px] sm:text-[23px] md:text-[var(--text-h3)] font-[500] leading-[150%] sm:leading-[160%] max-w-3xl md:pr-8 whitespace-pre-line">
            <EditableText
              sectionId="programs-001"
              fieldPath={`heading.${lang}`}
              value={headingText}
              multiline
            />
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 mb-5 sm:mb-6 text-[11px] no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => handleSelectTab(tab.id)}
                className={`min-w-[92px] sm:min-w-[150px] transition-all whitespace-nowrap cursor-pointer px-3 py-2 text-[15px] rounded-[6px] text-center leading-none ${
                  isActive
                    ? 'bg-[#eef2f3] text-[var(--primary)] font-semibold'
                    : 'text-[#1f1f1f] hover:bg-[#f5f5f5] hover:text-[var(--primary)] font-normal'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {programsToDisplay.map((program) => {
            const isSelectedTab = activeTab === program.category;
            const programIndex = currentPrograms.findIndex((item) => item.id === program.id);

            return (
              <div
                key={program.id}
                id={`program-card-${program.id}`}
                className={`group bg-[#f4f5f5] rounded-[14px] overflow-hidden transition-all duration-300 flex flex-col ${
                  isSelectedTab
                    ? 'shadow-[0_0_0_1px_#dce5e7]'
                    : 'shadow-[0_0_0_1px_#ebeeee] hover:shadow-[0_10px_26px_rgba(28,25,23,0.08),0_0_0_1px_#dce5e7]'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[1/0.9] bg-[#e6eaec] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-80" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#196b75] backdrop-blur-sm">
                    <EditableText sectionId="programs-001" fieldPath={`items.${programIndex}.categoryLabel.${lang}`} value={program.categoryLabel} />
                  </span>
                </div>

                {/* Content Body at Bottom */}
                <div className="min-h-[196px] p-4 bg-[#f4f5f5] flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="font-semibold text-[#2f2b27] text-[16px] leading-snug group-hover:text-[var(--primary)] transition-colors">
                      <EditableText sectionId="programs-001" fieldPath={`items.${programIndex}.title.${lang}`} value={program.title} />
                    </h3>
                    <p className="text-[14px] leading-[1.55] text-neutral-600">
                      <EditableText sectionId="programs-001" fieldPath={`items.${programIndex}.description.${lang}`} value={program.description} multiline />
                    </p>
                  </div>

                  {/* Action Link at Bottom */}
                  <div className="pt-3 mt-auto space-y-3">
                    <div className="border-t border-[#dde3e5] pb-0 mb-0 pt-4 text-[14px] font-medium text-[#514b45] ">
                      <EditableText
                        className="bg-[#fff] rounded-sm px-4 py-1.5 border border-[#dde3e5]"
                        sectionId="programs-001"
                        fieldPath={`items.${programIndex}.meta.${lang}`}
                        value={program.meta || `${program.duration} · ${program.price || ''}`.trim()}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectProgram(program)}
                      className="group/action inline-flex min-h-8 items-center gap-1.5 rounded-full pt-4 text-[16px] font-semibold text-[var(--primary)] transition-colors hover:text-[#196b75] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 cursor-pointer"
                    >
                      <span className="border-b border-transparent transition-colors group-hover/action:border-current">
                        <EditableText sectionId="programs-001" fieldPath={`items.${programIndex}.actionText.${lang}`} value={program.actionText} />
                      </span>
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 transition-transform group-hover/action:translate-x-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Custom Program Banner */}
      <section className="pt-6 sm:pt-6 pb-16 sm:pb-20 container mx-auto px-3 sm:px-6 md:px-8">
        <div className="mt-10 sm:mt-6 bg-[#f4f6f7] rounded-[18px] p-6 sm:p-10 border border-[#eaedee] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif-hero text-2xl sm:text-[var(--text-h3)] font-bold tracking-wide mb-4 sm:mb-5">
              <EditableText
                className="text-[var(--primary)]"
                sectionId="programs-001"
                fieldPath={`customProgram.heading.${lang}`}
                value={customHeading}
              />
            </h3>
            <div className="text-[13px] sm:text-[16px] text-neutral-600 leading-relaxed space-y-1.5">
              {customParagraphs.map((paragraphText, idx) => (
                <p key={idx}>{paragraphText}</p>
              ))}
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenContact}
              className="btn-primary w-full md:w-auto py-4 text-center justify-center whitespace-nowrap shadow-sm hover:shadow cursor-pointer"
            >
              {customCta}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
