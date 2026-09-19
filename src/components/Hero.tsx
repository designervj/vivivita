import { Play } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

interface HeroProps {
  onStartProcess: () => void;
  onPlayVideo: () => void;
}

export default function Hero({ onStartProcess, onPlayVideo }: HeroProps) {
  return (
    <section className="pt-2 sm:pt-3 pb-8 sm:pb-12 container mx-auto px-4 sm:px-6 md:px-8">
      <div
        id="hero-banner-card"
        className="relative rounded-[15px] sm:rounded-[15px] md:rounded-[15px] overflow-hidden min-h-[460px] sm:min-h-[500px] md:min-h-[540px] flex items-center justify-center shadow-xs bg-neutral-200"
      >
        {/* Background Image of Coach Marina - Bright, natural daylight as in screenshot */}
        <img
          src="/image/Rectangle 1795.png"
          alt="Marina - Transformacijski coach"
          className="absolute inset-0 w-full h-full object-cover object-[73%_32%] sm:object-[75%_35%] scale-[1.01] filter brightness-[0.98] contrast-[1.01]"
          loading="eager"
        />

        {/* Soft luminous overlays that keep the daylight feel while ensuring white text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/14 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.08)_65%,transparent_100%)] pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-10 sm:pt-24 flex flex-col items-center text-center">
          {/* Circular Frosted Play Button */}
          <button
            id="hero-play-button"
            onClick={onPlayVideo}
            aria-label="Pogledaj uvodni video"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/45 hover:bg-white/65 active:scale-95 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-sm mb-4 sm:mb-5 cursor-pointer group"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white ml-0.5 group-hover:scale-105 transition-transform" />
          </button>

          {/* Main Title in Serif Capitalized */}
          <h1 className="font-serif-hero font-normal sm:font-medium text-white tracking-[0.04em] text-[25px] sm:text-[32px] md:text-[38px] lg:text-[43px] leading-[1.22] max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            OD “DOBRE DJEVOJČICE”<br />
            DO ŽENE KOJA VODI SVOJ ŽIVOT.
          </h1>

          {/* Subtitle */}
          <p className="font-serif-hero italic text-white/95 text-xs sm:text-[13.5px] md:text-[15px] font-light max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
            {HERO_CONTENT.subtitle}
          </p>

          {/* CTA Pill Button */}
          <button
            id="hero-cta-button"
            onClick={onStartProcess}
            className="mt-5 sm:mt-6 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#2397a6] hover:bg-[#1f8795] active:scale-98 text-white font-medium text-xs sm:text-[13.5px] tracking-normal transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            {HERO_CONTENT.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
}
