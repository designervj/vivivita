import EditableText from '../../../components/shared/EditableText';
import { ABOUT_MARINA, type HomeContent } from '../../../lib/pages/content';

const aboutBio = [
  {
    text: 'Godina je 2017. Zatvorila sam jedno životno poglavlje, a novo nikako nisam uspijevala započeti.',
    bold: true,
  },
  {
    text: 'Bila sam u međuprostoru — s osjećajem neuspjeha, bez jasnog smjera i sa zidom ispred sebe.',
  },
  {
    text: 'Tražeći pomoć za sebe, upisala sam NLP.',
  },
  {
    text: 'I tada sam prvi put stvarno shvatila koliko se toga može promijeniti kada razumiješ vlastite obrasce i dobiješ prave alate, znanje i vodstvo.',
  },
  {
    text: 'Poželjela sam drugima prenijeti ono što sam sama iskusila.',
  },
  {
    text: 'Danas radim sa ženama koje izvana djeluju sposobno, odgovorno i uspješno, a iznutra osjećaju da već predugo žive prema pravilima koja nisu njihova.',
  },
  {
    text: 'Moj talent je prepoznati tko možeš postati — i što te još drži na mjestu.',
    bold: true,
  },
  {
    text: 'Zato nisam coach koji će ti samo postavljati pitanja.',
  },
  {
    text: 'Ja sam tvoj mentor kroz proces.',
    bold: true,
  },
  {
    text: 'Dajem ti alate, znanje, strukturu i podršku, ali cilj nije da ovisiš o meni. Cilj je upravo suprotan:',
  },
  {
    text: 'da ponovno vjeruješ sebi.',
    bold: true,
  },
];

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
            <h3 className="font-serif-hero text-2xl sm:text-[var(--text-h3)] font-bold tracking-wide mb-4 sm:mb-5">
              <EditableText className='text-[var(--primary)]' sectionId="about-marina-001" fieldPath="title.hr" value="O Marini" />
            </h3>

            <div className="space-y-2.5 text-[14px] leading-[1.65] text-neutral-600 sm:text-[13px] md:text-[16px]">
              {aboutBio.map((item, idx) => (
                <p key={idx} className={item.bold ? 'font-semibold text-neutral-800' : undefined}>
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          {/* Action button aligned to bottom right matching screenshot */}
          <div className="flex justify-stretch sm:justify-end pt-1">
            <button
              id="about-book-call-btn"
              onClick={onBookCall}
              className="btn-primary sm:w-auto py-4"
            >
              <EditableText sectionId="about-marina-001" fieldPath="cta.label.hr" value={content.ctaText || "Dogovori uvodni razgovor"} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
