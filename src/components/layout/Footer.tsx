'use client';

import { Mail, Instagram, Linkedin } from 'lucide-react';
import { useCopy } from '../../context/LanguageContext';

interface FooterProps {
  onOpenContact: () => void;
  onScrollTo: (id: string) => void;
}

export default function Footer({ onOpenContact, onScrollTo }: FooterProps) {
  const copy = useCopy();

  return (
    <footer className="bg-white border-t border-neutral-200/80 mt-16 text-neutral-600 text-xs sm:text-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif-hero text-xl font-semibold text-neutral-900 tracking-wider block">
              {copy.footer.brandName}
            </span>
            <p className="text-neutral-500 text-xs sm:text-sm max-w-sm leading-relaxed">
              {copy.footer.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2 text-neutral-400">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-[#23909d] hover:border-[#23909d] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-[#23909d] hover:border-[#23909d] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenContact}
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-[#23909d] hover:border-[#23909d] transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              {copy.footer.quickLinks}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onScrollTo('hero-banner-card')}
                  className="hover:text-[#23909d] transition-colors cursor-pointer"
                >
                  {copy.footer.links.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('card-good-girl')}
                  className="hover:text-[#23909d] transition-colors cursor-pointer"
                >
                  {copy.footer.links.goodGirl}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('programi')}
                  className="hover:text-[#23909d] transition-colors cursor-pointer"
                >
                  {copy.footer.links.programs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('iskustva')}
                  className="hover:text-[#23909d] transition-colors cursor-pointer"
                >
                  {copy.footer.links.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('o-marini')}
                  className="hover:text-[#23909d] transition-colors cursor-pointer"
                >
                  {copy.footer.links.about}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              {copy.footer.contactTitle}
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              marinacoaching@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-neutral-400 text-xs">
          <p>© {new Date().getFullYear()} {copy.footer.brandName}. {copy.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
