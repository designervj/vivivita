'use client';

import { Play } from 'lucide-react';
import EditableText from '../../../components/shared/EditableText';
import { HERO_CONTENT, type HomeContent } from '../../../lib/pages/content';
import { useLanguage, useCopy } from '../../../context/LanguageContext';

interface HeroProps {
  onStartProcess: () => void;
  onPlayVideo: () => void;
  content?: HomeContent['hero'];
}

export default function Hero({ onStartProcess, onPlayVideo, content = HERO_CONTENT }: HeroProps) {
  const { lang } = useLanguage();
  const copy = useCopy();

  const headline = lang === 'en' ? copy.hero.headline : (content.headline || copy.hero.headline);
  const subtitle = lang === 'en' ? copy.hero.subtitle : (content.subtitle || copy.hero.subtitle);
  const ctaButton = lang === 'en' ? copy.hero.ctaButton : (content.ctaButton || copy.hero.ctaButton);

  return (
    <section className="pt-2 sm:pt-3 pb-8 sm:pb-12 container mx-auto px-3 sm:px-6 md:px-8">
      <div
        id="hero-banner-card"
        className="relative rounded-[15px] sm:rounded-[15px] md:rounded-[15px] overflow-hidden min-h-[430px] sm:min-h-[500px] md:min-h-[540px] flex items-center justify-center shadow-xs bg-neutral-200"
      >
        {/* Background Image of Coach Marina */}
        <img
          src={content.image}
          alt="Marina - Transformacijski coach"
          className="absolute inset-0 w-full h-full object-cover object-[73%_32%] sm:object-[75%_35%] scale-[1.01] filter brightness-[0.98] contrast-[1.01]"
          loading="eager"
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:pt-24 flex flex-col items-center text-center">
          {/* Circular Frosted Play Button */}
          <button
            id="hero-play-button"
            onClick={onPlayVideo}
            aria-label={copy.hero.playAria}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/45 hover:bg-white/65 active:scale-95 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-sm mb-4 sm:mb-5 cursor-pointer group"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white ml-0.5 group-hover:scale-105 transition-transform" />
          </button>

          {/* Main Title */}
          <EditableText
            tag="h1"
            sectionId="hero-001"
            fieldPath={`heading.${lang}`}
            value={headline}
            multiline
            className="font-serif-hero uppercase font-normal sm:font-medium text-white tracking-[0.04em] text-[23px] sm:text-[32px] md:text-[38px] lg:text-[43px] leading-[1.18] sm:leading-[1.22] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] whitespace-pre-line"
          />

          {/* Subtitle */}
          <EditableText
            tag="p"
            sectionId="hero-001"
            fieldPath={`subheading.${lang}`}
            value={subtitle}
            className="font-sans italic text-white/95 text-[12px] sm:text-[13.5px] md:text-[16px] font-[500] mx-auto mt-3 sm:mt-4 leading-[180%] sm:leading-[260%] drop-shadow-[2px_2px_2px_#00000040]"
          />

          {/* CTA Pill Button */}
          <button
            id="hero-cta-button"
            onClick={onStartProcess}
            className="hero-btn-primary mt-5 sm:mt-6 shadow-sm hover:shadow-md cursor-pointer"
          >
            <EditableText sectionId="hero-001" fieldPath={`cta.label.${lang}`} value={ctaButton} />
          </button>
        </div>
      </div>
    </section>
  );
}
