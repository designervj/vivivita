'use client';

import EditableText from '../../../components/shared/EditableText';
import { ABOUT_MARINA, type HomeContent } from '../../../lib/pages/content';
import { useLanguage, useCopy } from '../../../context/LanguageContext';

interface AboutSectionProps {
  onBookCall: () => void;
  content?: HomeContent['about'];
}

export default function AboutSection({ onBookCall, content = ABOUT_MARINA }: AboutSectionProps) {
  const { lang } = useLanguage();
  const copy = useCopy();

  const tagText = lang === 'en' ? copy.about.tag : (content.tag || copy.about.tag);
  const titleText = lang === 'en' ? copy.about.title : (content.title || copy.about.title);
  const ctaText = lang === 'en' ? copy.about.ctaText : (content.ctaText || copy.about.ctaText);
  const bio = copy.about.bio;

  return (
    <section id="o-marini" className="pt-6 sm:pt-10 pb-16 sm:pb-24 container mx-auto px-3 sm:px-6 md:px-8">
      {/* Top Category Tag & Horizontal Divider */}
      <div className="mb-10 sm:mb-12">
        <span className="text-[var(--primary)] text-[11px] sm:text-[16px] font-medium tracking-normal block mb-3">
          <EditableText sectionId="about-marina-001" fieldPath={`tag.${lang}`} value={tagText} />
        </span>
        <div className="w-full border-b border-neutral-200/90" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Landscape Portrait */}
        <div className="lg:col-span-6">
          <div className="rounded-[20px] sm:rounded-[20px] overflow-hidden bg-[#edf3f4] aspect-[16/10] shadow-xs border border-neutral-200/50">
            <img
              src={content.image || '/image/marini-img.png'}
              alt="Marina Novaković"
              className="w-full h-full object-cover object-[center_20%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Bio & Call to action */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="font-serif-hero text-2xl sm:text-[var(--text-h3)] font-bold tracking-wide mb-4 sm:mb-5">
              <EditableText
                className="text-[var(--primary)]"
                sectionId="about-marina-001"
                fieldPath={`title.${lang}`}
                value={titleText}
              />
            </h3>

            <div className="space-y-2.5 text-[14px] leading-[1.65] text-neutral-600 sm:text-[13px] md:text-[16px]">
              {bio.map((item, idx) => (
                <p key={idx} className={item.bold ? 'font-semibold text-neutral-800' : undefined}>
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          {/* Action button aligned to bottom right */}
          <div className="flex justify-stretch sm:justify-end pt-5">
            <button
              id="about-book-call-btn"
              onClick={onBookCall}
              className="btn-primary sm:w-auto py-4 cursor-pointer"
            >
              <EditableText
                sectionId="about-marina-001"
                fieldPath={`cta.label.${lang}`}
                value={ctaText}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
