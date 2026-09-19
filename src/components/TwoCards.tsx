import { User } from 'lucide-react';
import { TWO_CARDS_CONTENT } from '../data/content';

interface TwoCardsProps {
  onLearnMoreGoodGirl: () => void;
  onExploreProcess: () => void;
}

export default function TwoCards({ onLearnMoreGoodGirl, onExploreProcess }: TwoCardsProps) {
  return (
    <section className="pb-14 sm:pb-20 container mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">

        {/* Card 1: Left Dark Card */}
        <div
          id="card-good-girl"
          className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden min-h-[380px] sm:min-h-[410px] p-6 sm:p-8 flex flex-col justify-between text-white shadow-xs bg-neutral-900 group"
        >
          {/* Background image: hands writing with pen in open notebook */}
          <img
            src="/image/image 13.png"
            alt="Dnevnik i bilješke"
            className="absolute inset-0 w-full h-full object-cover object-[65%_center] filter brightness-[0.75] contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
          />

          {/* Left-to-right gradient overlay keeping hands visible while making text crisp */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-black/30 pointer-events-none" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" /> */}

          {/* Card 1 Content */}
          <div className="relative z-10 space-y-3.5 max-w-md">
            <h2 className="font-serif-hero font-medium tracking-wide text-lg sm:text-[21px] text-white">
              {TWO_CARDS_CONTENT.leftCard.title}
            </h2>

            <div className="text-xs sm:text-[13px] text-neutral-200 whitespace-pre-line leading-relaxed font-sans">
              {TWO_CARDS_CONTENT.leftCard.description}
            </div>

            {/* 2x2 grid of bullet points */}
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 pt-2 font-sans">
              {TWO_CARDS_CONTENT.leftCard.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-[12.5px] text-white/95">
                  <User className="w-3.5 h-3.5 text-[#6ec9d7] shrink-0" />
                  <span className="font-normal">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 1 Bottom Row */}
          <div className="relative z-10 pt-5 mt-4 flex items-end justify-between gap-4 font-sans">
            <p className="text-[11.5px] sm:text-xs text-neutral-300/90 max-w-[280px] leading-relaxed">
              {TWO_CARDS_CONTENT.leftCard.bottomText}
            </p>

            <button
              id="card-good-girl-btn"
              onClick={onLearnMoreGoodGirl}
              className="px-5 py-2 rounded-full bg-[#2397a6] hover:bg-[#1f8795] text-white text-xs font-medium transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              {TWO_CARDS_CONTENT.leftCard.buttonText}
            </button>
          </div>
        </div>

        {/* Card 2: Right Light Card */}
        
        <div
          id="card-how-it-works"
          className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden min-h-[380px] sm:min-h-[410px] p-6 sm:p-8 flex flex-col justify-between bg-[#f0f3f4] text-neutral-800 shadow-xs border border-[#e2e8ea] group"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(240, 243, 244, 0.98) 0%, rgba(240, 243, 244, 0.9) 48%, rgba(240, 243, 244, 0.25) 100%), url("/image/about-img.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Coach portrait cut in right corner */}
          

          {/* Card 2 Content */}
          <div className="relative z-10 space-y-3.5 max-w-sm">
            <h2 className="font-serif-hero font-medium tracking-wide text-lg sm:text-[21px] text-[#2397a6]">
              {TWO_CARDS_CONTENT.rightCard.title}
            </h2>

            <p className="text-xs sm:text-[13px] text-neutral-600 font-normal font-sans">
              {TWO_CARDS_CONTENT.rightCard.subtitle}
            </p>

            {/* Vertical list of points */}
            <div className="space-y-2.5 pt-1 font-sans">
              {TWO_CARDS_CONTENT.rightCard.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-neutral-700">
                  <User className="w-3.5 h-3.5 text-[#2397a6] shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 Bottom Row */}
          <div className="relative z-10 pt-5 mt-4 flex items-end justify-between gap-4 font-sans">
            <div className="text-[12px] sm:text-[12.5px] text-neutral-700 leading-relaxed space-y-0.5">
              <p>{TWO_CARDS_CONTENT.rightCard.closingLines[0]}</p>
              <p className="text-neutral-900 font-medium">{TWO_CARDS_CONTENT.rightCard.closingLines[1]}</p>
            </div>

            <button
              id="card-how-it-works-btn"
              onClick={onExploreProcess}
              className="px-5 py-2 rounded-full bg-[#2397a6] hover:bg-[#1f8795] text-white text-xs font-medium transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              {TWO_CARDS_CONTENT.rightCard.buttonText}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
