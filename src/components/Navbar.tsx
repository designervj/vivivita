import { useState } from 'react';
import { ChevronDown, Phone, Menu, X, Check } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onSelectProgramTab?: (category: string) => void;
  onScrollTo: (id: string) => void;
}

export default function Navbar({ onOpenContact, onSelectProgramTab, onScrollTo }: NavbarProps) {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'Hr' | 'En'>('Hr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleProgramClick = (category: string) => {
    if (onSelectProgramTab) onSelectProgramTab(category);
    onScrollTo('programi');
    setIsProgramsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fafafa]/95 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="hidden md:flex items-center gap-7 sm:gap-9 text-[14px] font-semibold leading-none tracking-[0px] text-[#2c3338]">
          {/* Programi Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProgramsOpen(true)}
            onMouseLeave={() => setIsProgramsOpen(false)}
          >
            <button
              id="nav-programs-trigger"
              onClick={() => onScrollTo('programi')}
              className="flex items-center gap-1 hover:text-[#3A9FB3] transition-colors py-2 cursor-pointer"
            >
              <span>Programi</span>
              <ChevronDown className={`w-3 h-3 text-neutral-600 transition-transform duration-200 ${isProgramsOpen ? 'rotate-180' : ''}`} />
            </button>

            {isProgramsOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 animate-in fade-in zoom-in-95 duration-150 z-50">
                <button
                  onClick={() => handleProgramClick('all')}
                  className="w-full text-left px-4 py-2.5 text-xs sm:text-sm hover:bg-[#f0f6f7] hover:text-[#3A9FB3] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Svi programi</span>
                  <span className="text-xs text-neutral-400">Pregled</span>
                </button>
                <button
                  onClick={() => handleProgramClick('webinar')}
                  className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-[#f0f6f7] hover:text-[#3A9FB3] transition-colors cursor-pointer"
                >
                  Webinar: Sindrom dobre djevojčice
                </button>
                <button
                  onClick={() => handleProgramClick('mini-trening')}
                  className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-[#f0f6f7] hover:text-[#3A9FB3] transition-colors cursor-pointer"
                >
                  Mini trening: Otpor prema promjeni
                </button>
                <button
                  onClick={() => handleProgramClick('mini-program')}
                  className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-[#f0f6f7] hover:text-[#3A9FB3] transition-colors cursor-pointer"
                >
                  Mini program: Izlaz iz sindroma
                </button>
                <button
                  onClick={() => handleProgramClick('premium')}
                  className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-[#f0f6f7] hover:text-[#3A9FB3] transition-colors cursor-pointer font-medium text-[#3A9FB3]"
                >
                  Premium 1:1 rad
                </button>
              </div>
            )}
          </div>

          <button
            id="nav-about-btn"
            onClick={() => onScrollTo('o-marini')}
            className="hover:text-[#3A9FB3] transition-colors cursor-pointer"
          >
            O Marini
          </button>

          <button
            id="nav-testimonials-btn"
            onClick={() => onScrollTo('iskustva')}
            className="hover:text-[#3A9FB3] transition-colors cursor-pointer"
          >
            Što drugi kažu
          </button>
        </nav>

        {/* Mobile Logo / Brand representation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => onScrollTo('top')}
            className="font-serif-hero font-semibold text-lg tracking-wider text-neutral-800"
          >
            MARINA
          </button>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-6 sm:gap-7 text-[14px] font-semibold leading-none tracking-[0px] text-[#2c3338]">
          <button
            id="nav-contact-btn"
            onClick={onOpenContact}
            className="flex items-center gap-2 hover:text-[#3A9FB3] transition-colors cursor-pointer group"
          >
            <Phone className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#3A9FB3] transition-colors" />
            <span className="hidden sm:inline">Kontaktirajte me</span>
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              id="lang-selector-btn"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 hover:text-[#3A9FB3] transition-colors py-1 cursor-pointer text-[14px]"
            >
              <span>{currentLang}</span>
              <ChevronDown className={`w-3 h-3 text-neutral-600 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 w-28 bg-white rounded-lg shadow-md border border-neutral-100 py-1.5 z-50">
                <button
                  onClick={() => { setCurrentLang('Hr'); setIsLangOpen(false); }}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-[#f0f6f7] hover:text-[#3A9FB3] flex items-center justify-between"
                >
                  <span>Hrvatski</span>
                  {currentLang === 'Hr' && <Check className="w-3.5 h-3.5 text-[#3A9FB3]" />}
                </button>
                <button
                  onClick={() => { setCurrentLang('En'); setIsLangOpen(false); }}
                  className="w-full text-left px-3 py-1.5 text-xs hover:bg-[#f0f6f7] hover:text-[#3A9FB3] flex items-center justify-between"
                >
                  <span>English</span>
                  {currentLang === 'En' && <Check className="w-3.5 h-3.5 text-[#3A9FB3]" />}
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-[#3A9FB3]"
            aria-label="Izbornik"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => { onScrollTo('programi'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-base font-medium text-neutral-800 hover:text-[#23909d]"
          >
            Programi
          </button>
          <div className="pl-4 space-y-2 border-l-2 border-[#23909d]/30 text-sm text-neutral-600">
            <button onClick={() => handleProgramClick('webinar')} className="block py-1">Webinar</button>
            <button onClick={() => handleProgramClick('mini-trening')} className="block py-1">Mini trening</button>
            <button onClick={() => handleProgramClick('mini-program')} className="block py-1">Mini program</button>
            <button onClick={() => handleProgramClick('premium')} className="block py-1">Premium 1:1 rad</button>
          </div>
          <button
            onClick={() => { onScrollTo('o-marini'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-base font-medium text-neutral-800 hover:text-[#23909d]"
          >
            O Marini
          </button>
          <button
            onClick={() => { onScrollTo('iskustva'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-base font-medium text-neutral-800 hover:text-[#23909d]"
          >
            Što drugi kažu
          </button>
          <div className="pt-2 border-t border-neutral-100">
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="w-full bg-[#23909d] text-white py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Kontaktirajte me</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
