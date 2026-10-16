'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EditableText from '../../../components/shared/EditableText';
import { TESTIMONIALS_CONTENT, TESTIMONIAL_SLIDES, type HomeContent } from '../../../lib/pages/content';
import { useLanguage, useCopy } from '../../../context/LanguageContext';

const getImagePositionClass = (image: string) => {
  if (image.includes('about-img')) {
    return 'object-[82%_center]';
  }

  return 'object-center';
};

export default function TestimonialsSection({
  slides = TESTIMONIAL_SLIDES,
  content = TESTIMONIALS_CONTENT,
}: {
  slides?: HomeContent['testimonialSlides'];
  content?: HomeContent['testimonialsContent'];
}) {
  const { lang } = useLanguage();
  const copy = useCopy();
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const activeSlides = copy.testimonials.slides;
  const totalSlides = activeSlides.length;
  const currentSlide = activeSlides[currentSlideIdx] || activeSlides[0];

  const handlePrev = () => {
    setCurrentSlideIdx((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIdx((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const tagText = lang === 'en' ? copy.testimonials.tag : (content.tag || copy.testimonials.tag);

  return (
    <section id="iskustva" className="pt-8 sm:pt-12 pb-16 sm:pb-20 container mx-auto px-3 sm:px-6 md:px-8">
      {/* Top Category Tag & Horizontal Divider */}
      <div className="mb-12 sm:mb-[58px]">
        <span className="text-[var(--primary)] text-[11px] sm:text-[16px] font-medium tracking-normal block mb-3">
          <EditableText sectionId="testimonials-001" fieldPath={`tag.${lang}`} value={tagText} />
        </span>
        <div className="w-full border-b border-neutral-200/90" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
        {/* Left Column: Quotes */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[250px] sm:min-h-[340px] pt-1 lg:pl-8">
          <div className="space-y-8 sm:space-y-9 animate-in fade-in duration-300" key={`${currentSlide.id}-${lang}`}>
            {currentSlide.quotes.map((item, qIdx) => (
              <div key={item.id} className="max-w-4xl">
                <blockquote className="text-neutral-800 text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.55] font-sans font-semibold">
                  “<EditableText sectionId="testimonials-001" fieldPath={`slides.${currentSlideIdx}.quotes.${qIdx}.quote.${lang}`} value={item.quote} />”
                </blockquote>
                <div className="text-[12px] sm:text-[16px] text-neutral-500 font-sans mt-3 sm:mt-4">
                  <EditableText sectionId="testimonials-001" fieldPath={`slides.${currentSlideIdx}.quotes.${qIdx}.author.${lang}`} value={item.author} />,
                  {' '}
                  <EditableText sectionId="testimonials-001" fieldPath={`slides.${currentSlideIdx}.quotes.${qIdx}.age.${lang}`} value={item.age} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3-Photo Collage */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
          <div className="flex justify-center lg:justify-end w-full">
            <div className="flex items-end justify-center gap-3 sm:gap-4 max-w-[560px] w-full">
              {/* Column 1: Tall Vertical Photo */}
              <div className="w-[31%] aspect-[7/12] rounded-[12px] overflow-hidden bg-neutral-100 shadow-2xs shrink-0">
                <img
                  key={currentSlide.images[0]}
                  src={currentSlide.images[0]}
                  alt={copy.testimonials.imgParticipant}
                  className={`w-full h-full object-cover ${getImagePositionClass(currentSlide.images[0])} filter contrast-[0.98]`}
                />
              </div>

              {/* Column 2: Quotation mark on top, Photo 2 at bottom */}
              <div className="w-[31%] aspect-[7/12] flex flex-col justify-between shrink-0">
                <div className="flex items-center justify-center h-1/2 select-none">
                  <img src="/image/Union.svg" alt="Union Icon" />
                </div>

                <div className="aspect-[4/3.35] rounded-[12px] overflow-hidden bg-neutral-100 shadow-2xs">
                  <img
                    key={currentSlide.images[1]}
                    src={currentSlide.images[1]}
                    alt={copy.testimonials.imgExperience}
                    className={`w-full h-full object-cover ${getImagePositionClass(currentSlide.images[1])} filter contrast-[0.95]`}
                  />
                </div>
              </div>

              {/* Column 3: Photo 3 at bottom */}
              <div className="w-[31%] aspect-[7/12] flex flex-col justify-end shrink-0">
                <div className="aspect-[4/3.35] rounded-[12px] overflow-hidden bg-neutral-100 shadow-2xs">
                  <img
                    key={currentSlide.images[2]}
                    src={currentSlide.images[2]}
                    alt={copy.testimonials.imgHappyClient}
                    className={`w-full h-full object-cover ${getImagePositionClass(currentSlide.images[2])}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="col-span-1 lg:col-span-12 flex justify-center pt-8 sm:pt-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              aria-label={copy.testimonials.prevAria}
              className="px-8 sm:px-[48px] py-[12px] sm:py-[10px] rounded-full bg-[var(--secondary)] hover:bg-[var(--primary-soft)] active:scale-95 flex items-center justify-center text-[var(--primary)] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              aria-label={copy.testimonials.nextAria}
              className="px-8 sm:px-[48px] py-[12px] sm:py-[10px] rounded-full bg-[var(--secondary)] hover:bg-[var(--primary-soft)] active:scale-95 flex items-center justify-center text-[var(--primary)] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
