import { User } from 'lucide-react';
import EditableText from '../../../components/shared/EditableText';
import { TWO_CARDS_CONTENT, type HomeContent } from '../../../lib/pages/content';

interface TwoCardsProps {
  onLearnMoreGoodGirl: () => void;
  onExploreProcess: () => void;
  content?: HomeContent['twoCards'];
}

export default function TwoCards({ onLearnMoreGoodGirl, onExploreProcess, content = TWO_CARDS_CONTENT }: TwoCardsProps) {
  return (
    <section className="pb-14 sm:pb-20 container mx-auto px-3 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-4">

        {/* Card 1: Left Dark Card */}
        <div
          id="card-good-girl"
          className="relative rounded-[20px] sm:rounded-[20px] overflow-hidden min-h-[340px] sm:min-h-[410px] p-5 sm:p-8 flex flex-col justify-between text-white shadow-xs bg-neutral-900 group"
        >
          {/* Background image: hands writing with pen in open notebook */}
          <img
            src={content.leftCard.image}
            alt="Dnevnik i bilješke"
            className="absolute inset-0 w-full h-full object-cover object-[65%_center] filter brightness-[0.80] contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
          />

          {/* Left-to-right gradient overlay keeping hands visible while making text crisp */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-black/30 pointer-events-none" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" /> */}

          {/* Card 1 Content */}
          <div className="relative z-10 space-y-3.5 max-w-xl">
            <h2 className="section-title text-white">
              <EditableText sectionId="identity-cards-001" fieldPath="leftCard.title.hr" value={content.leftCard.title} />
            </h2>

            <div className=" text-neutral-200 whitespace-pre-line font-sans">
              <EditableText
                tag="p"
                sectionId="identity-cards-001"
                fieldPath="leftCard.description.hr"
                value={content.leftCard.description}
                multiline
                className="pt-4 text-[14px] sm:text-[16px] font-semibold text-white leading-[22px] sm:leading-[24px] tracking-[0%]"
              />
            </div>

            {/* 2x2 grid of bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 pt-6 font-sans">
              {content.leftCard.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-[12.5px] text-white/95">
                  {/* <User className="w-3.5 h-3.5 text-[#6ec9d7] shrink-0" /> */}
                  <img src="../image/Icon.svg" alt='User Icon'></img>
                  <EditableText sectionId="identity-cards-001" fieldPath={`leftCard.bullets.${idx}.hr`} value={bullet} className="text-[14px] sm:text-[16px] font-semibold text-white leading-[22px] sm:leading-[24px]" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 1 Bottom Row */}
          <div className="relative z-10 pt-5 mt-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 font-sans">
            <p className='text-[14px] sm:text-[16px] font-semibold text-white leading-[22px] sm:leading-[24px] tracking-[0%]'>
              <EditableText sectionId="identity-cards-001" fieldPath="leftCard.bottomText.hr" value={content.leftCard.bottomText} />
            </p>

            <button
              id="card-good-girl-btn"
              onClick={onLearnMoreGoodGirl}
              className="btn-primary sm:w-auto"
            >
              <EditableText sectionId="identity-cards-001" fieldPath="leftCard.buttonText.hr" value={content.leftCard.buttonText} />
            </button>
          </div>
        </div>

        {/* Card 2: Right Light Card */}

        <div
          id="card-how-it-works"
          className="relative rounded-[20px] sm:rounded-[20px] overflow-hidden min-h-[340px] sm:min-h-[410px] p-5 sm:p-8 flex flex-col justify-between bg-[#f0f3f4] text-neutral-800 shadow-xs border border-[#e2e8ea] group"

        >

          <img
            src={content.rightCard.image}
            alt="Dnevnik i bilješke"
            className="absolute inset-0 w-full h-full object-cover object-[79%_center]  "
          />
          <div className="absolute inset-0 bg-[#f0f3f4]/80 sm:hidden" />

          {/* Coach portrait cut in right corner */}


          {/* Card 2 Content */}
          <div className="relative z-10 space-y-3.5 max-w-xl">
            <h2 className="section-title text-[var(--primary)]">
              <EditableText sectionId="identity-cards-001" fieldPath="rightCard.title.hr" value={content.rightCard.title} />
            </h2>

            <p className='pt-4 text-[14px] sm:text-[16px] font-semibold leading-[22px] sm:leading-[24px] tracking-[0%]'>
              <EditableText sectionId="identity-cards-001" fieldPath="rightCard.subtitle.hr" value={content.rightCard.subtitle} />
            </p>

            {/* Vertical list of points */}
            <div className="space-y-3.5 pt-6 font-sans">
              {content.rightCard.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-neutral-700">
                  <img src="../image/Icon.svg" alt='User Icon'></img>

                  <EditableText sectionId="identity-cards-001" fieldPath={`rightCard.bullets.${idx}.hr`} value={bullet} className="text-[14px] sm:text-[16px] font-semibold leading-[22px] sm:leading-[24px] tracking-[0%]" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 Bottom Row */}
          <div className="relative z-10 pt-5 mt-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 font-sans">
            <div className="text-[12px] sm:text-[12.5px] text-neutral-700 leading-relaxed space-y-0.5">
              <EditableText tag="p" sectionId="identity-cards-001" fieldPath="rightCard.closingLines.0.hr" value={content.rightCard.closingLines[0]} className="text-[14px] sm:text-[16px] font-semibold leading-[22px] sm:leading-[24px] tracking-[0%]" />
              <EditableText tag="p" sectionId="identity-cards-001" fieldPath="rightCard.closingLines.1.hr" value={content.rightCard.closingLines[1]} className="text-[14px] sm:text-[16px] font-semibold leading-[22px] sm:leading-[24px] tracking-[0%]" />
            </div>

            <button
              id="card-how-it-works-btn"
              onClick={onExploreProcess}
              className="btn-primary sm:w-auto"
            >
              <EditableText sectionId="identity-cards-001" fieldPath="rightCard.buttonText.hr" value={content.rightCard.buttonText} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
