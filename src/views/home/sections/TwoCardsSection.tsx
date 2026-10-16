'use client';

import EditableText from '../../../components/shared/EditableText';
import { TWO_CARDS_CONTENT, type HomeContent } from '../../../lib/pages/content';
import { useLanguage, useCopy } from '../../../context/LanguageContext';

interface TwoCardsProps {
  onLearnMoreGoodGirl: () => void;
  onExploreProcess: () => void;
  content?: HomeContent['twoCards'];
}

const renderSplitBullet = (text: string, className: string) => {
  const [title, ...contentLines] = text.split('\n');
  const body = contentLines.join('\n');

  return (
    <span className={`${className} flex flex-col`}>
      <span>{title}</span>
      {body && <span className="font-normal opacity-90 text-[13px]">{body}</span>}
    </span>
  );
};

export default function TwoCards({ onLearnMoreGoodGirl, onExploreProcess, content = TWO_CARDS_CONTENT }: TwoCardsProps) {
  const { lang } = useLanguage();
  const copy = useCopy();

  const leftCard = {
    title: lang === 'en' ? copy.twoCards.leftCard.title : (content.leftCard.title || copy.twoCards.leftCard.title),
    description: lang === 'en' ? copy.twoCards.leftCard.description : (content.leftCard.description || copy.twoCards.leftCard.description),
    bullets: lang === 'en' ? copy.twoCards.leftCard.bullets : (content.leftCard.bullets.length ? content.leftCard.bullets : copy.twoCards.leftCard.bullets),
    bottomText: lang === 'en' ? copy.twoCards.leftCard.bottomText : (content.leftCard.bottomText || copy.twoCards.leftCard.bottomText),
    buttonText: lang === 'en' ? copy.twoCards.leftCard.buttonText : (content.leftCard.buttonText || copy.twoCards.leftCard.buttonText),
    image: content.leftCard.image || '/image/image 13.png',
  };

  const rightCard = {
    title: lang === 'en' ? copy.twoCards.rightCard.title : (content.rightCard.title || copy.twoCards.rightCard.title),
    subtitle: lang === 'en' ? copy.twoCards.rightCard.subtitle : (content.rightCard.subtitle || copy.twoCards.rightCard.subtitle),
    bullets: lang === 'en' ? copy.twoCards.rightCard.bullets : (content.rightCard.bullets.length ? content.rightCard.bullets : copy.twoCards.rightCard.bullets),
    closingLines: lang === 'en' ? copy.twoCards.rightCard.closingLines : (content.rightCard.closingLines.length ? content.rightCard.closingLines : copy.twoCards.rightCard.closingLines),
    buttonText: lang === 'en' ? copy.twoCards.rightCard.buttonText : (content.rightCard.buttonText || copy.twoCards.rightCard.buttonText),
    image: content.rightCard.image || '/image/about-img.png',
  };

  return (
    <section className="pb-14 sm:pb-20 container mx-auto px-3 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-4">
        {/* Card 1: Left Dark Card */}
        <div
          id="card-good-girl"
          className="relative rounded-[20px] sm:rounded-[20px] overflow-hidden min-h-[340px] sm:min-h-[410px] p-5 sm:p-8 flex flex-col justify-between text-white shadow-xs bg-neutral-900 group"
        >
          <img
            src={leftCard.image}
            alt="Dnevnik i bilješke"
            className="absolute inset-0 w-full h-full object-cover object-[65%_center] filter brightness-[0.80] contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
          />

          {/* Card 1 Content */}
          <div className="relative z-10 space-y-3.5 max-w-xl">
            <h2 className="section-title text-white">
              <EditableText sectionId="identity-cards-001" fieldPath={`leftCard.title.${lang}`} value={leftCard.title} />
            </h2>

            <div className="mt-5 space-y-5 font-sans">
              <div className="text-neutral-200 whitespace-pre-line">
                <EditableText
                  tag="p"
                  sectionId="identity-cards-001"
                  fieldPath={`leftCard.description.${lang}`}
                  value={leftCard.description}
                  multiline
                  className="text-[13px] sm:text-[16px] font-semibold text-white leading-[20px] sm:leading-[22px] tracking-[0%]"
                />
              </div>

              {/* 2x2 grid of bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6">
                {leftCard.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-[12.5px] text-white/95">
                    <img src="/image/Icon.svg" alt="User Icon" className="w-4 h-4 shrink-0" />
                    {renderSplitBullet(bullet, 'text-[16px] font-semibold text-white leading-[22px]')}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 1 Bottom Row */}
          <div className="relative z-10 pt-5 mt-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 font-sans">
            <p className="text-[13px] sm:text-[16px] font-semibold text-white leading-[20px] sm:leading-[22px] tracking-[0%]">
              <EditableText sectionId="identity-cards-001" fieldPath={`leftCard.bottomText.${lang}`} value={leftCard.bottomText} />
            </p>

            <button
              id="card-good-girl-btn"
              onClick={onLearnMoreGoodGirl}
              className="btn-primary sm:w-auto cursor-pointer"
            >
              <EditableText sectionId="identity-cards-001" fieldPath={`leftCard.buttonText.${lang}`} value={leftCard.buttonText} />
            </button>
          </div>
        </div>

        {/* Card 2: Right Light Card */}
        <div
          id="card-how-it-works"
          className="relative rounded-[20px] sm:rounded-[20px] overflow-hidden min-h-[340px] sm:min-h-[410px] p-5 sm:p-8 flex flex-col justify-between bg-[#e8edef] text-neutral-800 shadow-xs border border-[#e2e8ea] group"
        >
          <img
            src={rightCard.image}
            alt="Marina Novaković"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] sm:object-[75%_20%] group-hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient overlay: opaque on left (text area) → transparent on right (image visible) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8edef]/95 via-[#e8edef]/70 to-transparent" />
          {/* Mobile full overlay */}
          <div className="absolute inset-0 bg-[#e8edef]/85 sm:hidden" />

          {/* Card 2 Content */}
          <div className="relative z-10 space-y-3.5 max-w-xl">
            <h2 className="section-title text-neutral-900">
              <EditableText sectionId="identity-cards-001" fieldPath={`rightCard.title.${lang}`} value={rightCard.title} />
            </h2>

            <div className="mt-5 space-y-4 font-sans">
              <p className="text-[13px] sm:text-[16px] font-semibold text-neutral-800">
                <EditableText sectionId="identity-cards-001" fieldPath={`rightCard.subtitle.${lang}`} value={rightCard.subtitle} />
              </p>

              <div className=" grid gap-3">
                {rightCard.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-[16px] text-muted font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 space-y-1">
                {rightCard.closingLines.map((line, idx) => (
                  <p key={idx} className="text-[13px] sm:text-[14px] font-semibold text-neutral-900">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 Bottom Row */}
          <div className="relative z-10 pt-5 mt-4 flex justify-end font-sans">
            <button
              id="card-process-btn"
              onClick={onExploreProcess}
              className="btn-primary sm:w-auto cursor-pointer"
            >
              <EditableText sectionId="identity-cards-001" fieldPath={`rightCard.buttonText.${lang}`} value={rightCard.buttonText} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
