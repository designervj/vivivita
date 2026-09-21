import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIAL_SLIDES } from '../data/content';

const getImagePositionClass = (image: string) => {
  if (image.includes('about-img')) {
    return 'object-[82%_center]';
  }

  return 'object-center';
};

export default function TestimonialsSection() {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const totalSlides = TESTIMONIAL_SLIDES.length;
  const currentSlide = TESTIMONIAL_SLIDES[currentSlideIdx];

  const handlePrev = () => {
    setCurrentSlideIdx((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIdx((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section id="iskustva" className="pt-8 sm:pt-12 pb-16 sm:pb-24 container mx-auto px-3 sm:px-6 md:px-8">
      {/* Top Category Tag & Horizontal Divider matching screenshot */}
      <div className="mb-12 sm:mb-[58px]">
        <span className="text-[#3A9FB3] text-[11px] sm:text-[16px] font-medium tracking-normal block mb-3">
          Što žene kažu nakon rada sa mnom
        </span>
        <div className="w-full border-b border-neutral-200/90" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
        {/* Left Column: Quotes */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] pt-1 lg:pl-8">
          {/* Active Quotes */}
          <div className="space-y-8 sm:space-y-9 animate-in fade-in duration-300" key={currentSlide.id}>
            {currentSlide.quotes.map((item) => (
              <div key={item.id} className="max-w-4xl">
                <blockquote className="text-neutral-800 text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.55] font-sans font-semibold">
                  “{item.quote}”
                </blockquote>
                <div className="text-[12px] sm:text-[16px] text-neutral-500 font-sans mt-3 sm:mt-4">
                  {item.author}, {item.age}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: 3-Photo Collage with Quotation Mark matching screenshot */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
          <div className="flex justify-center lg:justify-end w-full">
            <div className="flex items-end justify-center gap-3 sm:gap-4 max-w-[560px] w-full">
              {/* Column 1: Tall Vertical Photo (spans full height) */}
              <div className="w-[31%] aspect-[7/12] rounded-[12px] overflow-hidden bg-neutral-100 shadow-2xs shrink-0">
                <img
                  key={currentSlide.images[0]}
                  src={currentSlide.images[0]}
                  alt="Polaznica"
                  className={`w-full h-full object-cover ${getImagePositionClass(currentSlide.images[0])} filter contrast-[0.98]`}
                />
              </div>

              {/* Column 2: Quotation mark on top, Photo 2 at bottom */}
              <div className="w-[31%] aspect-[7/12] flex flex-col justify-between shrink-0">
                {/* Large subtle quote mark */}
                <div className="flex items-center justify-center h-1/2 select-none">

                  <img src="/image/Union.svg" alt='Union Icon'></img>
                </div>

                {/* Photo 2: Young girl/woman looking up */}
                <div className="aspect-[4/3.35] rounded-[12px] overflow-hidden bg-neutral-100 shadow-2xs">
                  <img
                    key={currentSlide.images[1]}
                    src={currentSlide.images[1]}
                    alt="Iskustvo rada"
                    className={`w-full h-full object-cover ${getImagePositionClass(currentSlide.images[1])} filter contrast-[0.95]`}
                  />
                </div>
              </div>

              {/* Column 3: Blank on top, Photo 3 at bottom */}
              <div className="w-[31%] aspect-[7/12] flex flex-col justify-end shrink-0">
                {/* Photo 3: Smiling woman resting chin on hand */}
                <div className="aspect-[4/3.35] rounded-[12px] overflow-hidden bg-neutral-100 shadow-2xs">
                  <img
                    key={currentSlide.images[2]}
                    src={currentSlide.images[2]}
                    alt="Zadovoljna klijentica"
                    className={`w-full h-full object-cover ${getImagePositionClass(currentSlide.images[2])}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex flex-col items-center justify-center pt-8 sm:pt-10 max-w-[420px] w-full lg:ml-[-220px]">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                id="testimonial-prev-btn"
                onClick={handlePrev}
                aria-label="Prethodna iskustva"
                className="flex-1 sm:flex-none px-0 sm:px-[48px] py-[12px] sm:py-[10px] rounded-full bg-[#eaedef] hover:bg-[#dfe3e6] active:scale-95 flex items-center justify-center text-[#3A9FB3] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={handleNext}
                aria-label="Sljedeća iskustva"
                className="flex-1 sm:flex-none px-0 sm:px-[48px] py-[12px] sm:py-[10px] rounded-full bg-[#eaedef] hover:bg-[#dfe3e6] active:scale-95 flex items-center justify-center text-[#3A9FB3] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-[11px] font-sans italic text-neutral-600 mt-2  font-[600] text-[#636B78]">
              {currentSlideIdx + 1} / {totalSlides}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
