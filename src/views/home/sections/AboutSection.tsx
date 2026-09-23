import EditableText from '../../../components/shared/EditableText';
import { ABOUT_MARINA, type HomeContent } from '../../../lib/pages/content';

interface AboutSectionProps {
  onBookCall: () => void;
  content?: HomeContent['about'];
}

export default function AboutSection({ onBookCall, content = ABOUT_MARINA }: AboutSectionProps) {
  return (
    <section id="o-marini" className="pt-6 sm:pt-10 pb-16 sm:pb-24 container mx-auto px-3 sm:px-6 md:px-8">
      {/* Top Category Tag & Horizontal Divider matching screenshot */}
      <div className="mb-10 sm:mb-12">
        <span className="text-[var(--primary)] text-[11px] sm:text-[16px] font-medium tracking-normal block mb-3">
          <EditableText sectionId="about-marina-001" fieldPath="tag.hr" value={content.tag} />
        </span>
        <div className="w-full border-b border-neutral-200/90" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Landscape Portrait matching screenshot */}
        <div className="lg:col-span-6">
          <div className="rounded-[20px] sm:rounded-[20px] overflow-hidden bg-[#edf3f4] aspect-[16/10] shadow-xs border border-neutral-200/50">
            <img
              src={content.image}
              alt="Marina Novaković"
              className="w-full h-full object-cover object-[center_20%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Bio & Call to action matching screenshot */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="font-serif-hero text-2xl sm:text-[var(--text-h3)] font-bold  tracking-wide mb-4 sm:mb-5">
              <EditableText className='text-[var(--primary)]' sectionId="about-marina-001" fieldPath="title.hr" value={content.title} />
            </h3>

            <p className="text-neutral-600 text-[14px] sm:text-[13px] md:text-[16px] leading-[1.65] font-sans mb-3.5 sm:mb-4">
              <EditableText sectionId="about-marina-001" fieldPath="intro.hr" value={content.intro} multiline />
            </p>

            <p className="text-neutral-600 text-[14px] sm:text-[13px] md:text-[16px] leading-[1.65] font-sans mb-4 sm:mb-5">
              <EditableText sectionId="about-marina-001" fieldPath="p1.hr" value={content.p1} multiline />
            </p>

            <div className="text-neutral-800 text-[14px] sm:text-[13px] md:text-[16px] font-semibold leading-relaxed font-sans space-y-0.5 mb-5 sm:mb-6">
              {content.credentials.slice(0, 2).map((credential, index) => (
                <EditableText
                  key={index}
                  tag="p"
                  sectionId="about-marina-001"
                  fieldPath={`credentials.${index}.hr`}
                  value={credential}
                />
              ))}
            </div>
          </div>

          {/* Action button aligned to bottom right matching screenshot */}
          <div className="flex justify-stretch sm:justify-end pt-1">
            <button
              id="about-book-call-btn"
              onClick={onBookCall}
              className="btn-primary sm:w-auto"
            >
              <EditableText sectionId="about-marina-001" fieldPath="cta.label.hr" value="Dogovori uvodni razgovor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
