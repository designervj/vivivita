import { Phone, Mail, Instagram, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onScrollTo: (id: string) => void;
}

export default function Footer({ onOpenContact, onScrollTo }: FooterProps) {
  return (
    <footer className="bg-white border-t border-neutral-200/80 mt-16 text-neutral-600 text-xs sm:text-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif-hero text-xl font-semibold text-neutral-900 tracking-wider block">
              MARINA NOVAKOVIĆ
            </span>
            <p className="text-neutral-500 text-xs sm:text-sm max-w-sm leading-relaxed">
              Programi i individualni rad za žene koje su spremne napustiti ulogu udovoljavanja i početi živjeti slobodno, autentično i po svojim pravilima.
            </p>
            <div className="flex items-center gap-3 pt-2 text-neutral-400">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-[#23909d] hover:border-[#23909d] transition-colors"
                aria-label="Instagram profil"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-[#23909d] hover:border-[#23909d] transition-colors"
                aria-label="LinkedIn profil"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenContact}
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-[#23909d] hover:border-[#23909d] transition-colors"
                aria-label="Pošalji poruku"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Brzi linkovi
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onScrollTo('hero-banner-card')}
                  className="hover:text-[#23909d] transition-colors"
                >
                  Naslovnica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('card-good-girl')}
                  className="hover:text-[#23909d] transition-colors"
                >
                  Tko je dobra djevojčica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('programi')}
                  className="hover:text-[#23909d] transition-colors"
                >
                  Programi i radionice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('iskustva')}
                  className="hover:text-[#23909d] transition-colors"
                >
                  Iskustva klijentica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('o-marini')}
                  className="hover:text-[#23909d] transition-colors"
                >
                  O meni
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Kontakt & Konzultacije
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Zanima te koji format rada bi bio najprikladniji za tvoju trenutnu fazu?
            </p>
            <div className="pt-1">
              <button
                id="footer-contact-btn"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#edf3f4] hover:bg-[#e2eced] text-[#23909d] font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Dogovori uvodni poziv</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-100 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} Marina Novaković. Sva prava pridržana.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Život po vlastitim pravilima</span>
            <Heart className="w-3 h-3 text-[#23909d] fill-[#23909d]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
