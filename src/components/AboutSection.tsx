interface AboutSectionProps {
  onBookCall: () => void;
}

export default function AboutSection({ onBookCall }: AboutSectionProps) {
  return (
    <section id="o-marini" className="pt-6 sm:pt-10 pb-16 sm:pb-24 container mx-auto px-4 sm:px-6 md:px-8">
      {/* Top Category Tag & Horizontal Divider matching screenshot */}
      <div className="mb-10 sm:mb-14">
        <span className="text-[#3A9FB3] text-[11px] sm:text-[16px] font-medium tracking-normal block mb-3">
          O Marini
        </span>
        <div className="w-full border-b border-neutral-200/90" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Landscape Portrait matching screenshot */}
        <div className="lg:col-span-6">
          <div className="rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#edf3f4] aspect-[16/10] shadow-xs border border-neutral-200/50">
            <img
              src="/image/marini-img.png"
              alt="Marina Novaković"
              className="w-full h-full object-cover object-[center_20%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Bio & Call to action matching screenshot */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="font-serif-hero text-2xl sm:text-[30px] font-bold text-[#3A9FB3] tracking-wide mb-4 sm:mb-5">
              O Marini
            </h3>

            <p className="text-neutral-600 text-xs sm:text-[13px] md:text-[16px] leading-[1.65] font-sans mb-3.5 sm:mb-4">
              Radim sa ženama koje su izvana funkcionalne, odgovorne i uspješne — ali iznutra umorne od stalnog prilagođavanja, preuzimanja i života po tuđim pravilima.
            </p>

            <p className="text-neutral-600 text-xs sm:text-[13px] md:text-[16px] leading-[1.65] font-sans mb-4 sm:mb-5">
              Kroz spoj coaching pristupa, NLP i Wingwave edukacije te rada na identitetu i obrascima ponašanja, pomaže ženama prepoznati obrazac "dobre djevojčice", vratiti vlastiti unutarnji autoritet i početi donositi odluke koje su stvarno njihove.
            </p>

            <div className="text-neutral-800 text-xs sm:text-[13px] md:text-[16px] font-semibold leading-relaxed font-sans space-y-0.5 mb-5 sm:mb-6">
              <p>Ne radi se o tome da postaneš bolja.</p>
              <p>Radi se o tome da napokon postaneš svoja.</p>
            </div>
          </div>

          {/* Action button aligned to bottom right matching screenshot */}
          <div className="flex justify-end pt-1">
            <button
              id="about-book-call-btn"
              onClick={onBookCall}
              className="btn-primary"
            >
              Dogovori uvodni razgovor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
