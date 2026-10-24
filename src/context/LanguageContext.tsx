'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { Language, translations } from '../lib/language/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isEn: boolean;
  t: (key: string) => string;
  copy: typeof translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'hr',
  setLang: () => {},
  isEn: false,
  t: (key) => key,
  copy: translations,
});

const STORAGE_KEY = 'vivivita_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('hr');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === 'en' || saved === 'hr') {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch (e) {
      // ignore in environments without localStorage
    }
  }, []);

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    try {
      localStorage.setItem(STORAGE_KEY, nextLang);
      document.cookie = `NEXT_LOCALE=${nextLang}; path=/; max-age=31536000; SameSite=Lax`;
      if (typeof document !== 'undefined') {
        document.documentElement.lang = nextLang;
      }
    } catch (e) {
      // ignore
    }
  };

  const t = (path: string): string => {
    const parts = path.split('.');
    let current: any = translations;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return path;
      }
    }
    if (current && typeof current === 'object' && ('hr' in current || 'en' in current)) {
      return current[lang] || current.hr || current.en || path;
    }
    return typeof current === 'string' ? current : path;
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      isEn: lang === 'en',
      t,
      copy: translations,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

/**
 * Convenience hook that returns strongly typed copy for the current language.
 */
export function useCopy() {
  const { lang } = useLanguage();

  return useMemo(() => {
    return {
      nav: {
        programs: translations.nav.programs[lang],
        allPrograms: translations.nav.allPrograms[lang],
        overview: translations.nav.overview[lang],
        mentalReset: translations.nav.mentalReset[lang],
        intensive: translations.nav.intensive[lang],
        premium: translations.nav.premium[lang],
        about: translations.nav.about[lang],
        testimonials: translations.nav.testimonials[lang],
        blog: translations.nav.blog[lang],
        contact: translations.nav.contact[lang],
        menu: translations.nav.menu[lang],
      },
      hero: {
        headline: translations.hero.headline[lang],
        subtitle: translations.hero.subtitle[lang],
        ctaButton: translations.hero.ctaButton[lang],
        playAria: translations.hero.playAria[lang],
      },
      philosophy: {
        highlightedPhrases: translations.philosophy.highlightedPhrases[lang],
        paragraphs: translations.philosophy.paragraphs[lang],
      },
      twoCards: {
        leftCard: {
          title: translations.twoCards.leftCard.title[lang],
          description: translations.twoCards.leftCard.description[lang],
          bullets: translations.twoCards.leftCard.bullets[lang],
          bottomText: translations.twoCards.leftCard.bottomText[lang],
          buttonText: translations.twoCards.leftCard.buttonText[lang],
        },
        rightCard: {
          title: translations.twoCards.rightCard.title[lang],
          subtitle: translations.twoCards.rightCard.subtitle[lang],
          bullets: translations.twoCards.rightCard.bullets[lang],
          closingLines: translations.twoCards.rightCard.closingLines[lang],
          buttonText: translations.twoCards.rightCard.buttonText[lang],
        },
      },
      programs: {
        tag: translations.programs.tag[lang],
        heading: translations.programs.heading[lang],
        tabs: translations.programs.tabs.map((tab) => ({
          id: tab.id,
          label: tab.label[lang],
        })),
        items: translations.programs.items.map((item) => ({
          id: item.id,
          category: item.category,
          categoryLabel: item.categoryLabel[lang],
          title: item.title[lang],
          description: item.description[lang],
          duration: item.duration[lang],
          price: item.price,
          meta: item.meta[lang],
          actionText: item.actionText[lang],
          url: item.url,
          image: item.image,
          popupDescription: item.popupDescription[lang],
          popupInfo: item.popupInfo[lang],
          bullets: item.bullets[lang],
          popupActionText: item.popupActionText[lang],
        })),
        customProgram: {
          heading: translations.programs.customProgram.heading[lang],
          paragraphs: translations.programs.customProgram.paragraphs[lang],
          ctaText: translations.programs.customProgram.ctaText[lang],
        },
      },
      testimonials: {
        tag: translations.testimonials.tag[lang],
        prevAria: translations.testimonials.prevAria[lang],
        nextAria: translations.testimonials.nextAria[lang],
        imgParticipant: translations.testimonials.imgAltParticipant[lang],
        imgExperience: translations.testimonials.imgAltExperience[lang],
        imgHappyClient: translations.testimonials.imgAltHappyClient[lang],
        slides: translations.testimonials.slides.map((s) => ({
          id: s.id,
          images: s.images,
          quotes: s.quotes[lang],
        })),
      },
      about: {
        tag: translations.about.tag[lang],
        title: translations.about.title[lang],
        bio: translations.about.bio.map((b) => ({
          text: b.text[lang],
          bold: b.bold,
        })),
        ctaText: translations.about.ctaText[lang],
      },
      modals: {
        video: {
          title: translations.modals.video.title[lang],
          description: translations.modals.video.description[lang],
          playing: translations.modals.video.playing[lang],
        },
        contact: {
          title: translations.modals.contact.title[lang],
          subtitle: translations.modals.contact.subtitle[lang],
          nameLabel: translations.modals.contact.nameLabel[lang],
          namePlaceholder: translations.modals.contact.namePlaceholder[lang],
          emailLabel: translations.modals.contact.emailLabel[lang],
          emailPlaceholder: translations.modals.contact.emailPlaceholder[lang],
          phoneLabel: translations.modals.contact.phoneLabel[lang],
          phonePlaceholder: translations.modals.contact.phonePlaceholder[lang],
          topicLabel: translations.modals.contact.topicLabel[lang],
          topicOptions: translations.modals.contact.topicOptions.map((opt) => opt[lang]),
          noteLabel: translations.modals.contact.noteLabel[lang],
          notePlaceholder: translations.modals.contact.notePlaceholder[lang],
          submitButton: translations.modals.contact.submitButton[lang],
          submitting: translations.modals.contact.submitting[lang],
          successTitle: translations.modals.contact.successTitle[lang],
          successMessage: translations.modals.contact.successMessage[lang],
        },
        goodGirlInfo: {
          title: translations.modals.goodGirlInfo.title[lang],
          content: translations.modals.goodGirlInfo.content[lang],
          bullets: translations.modals.goodGirlInfo.bullets[lang],
        },
        processInfo: {
          title: translations.modals.processInfo.title[lang],
          content: translations.modals.processInfo.content[lang],
          bullets: translations.modals.processInfo.bullets[lang],
        },
        programDetails: {
          whatsIncluded: translations.modals.programDetails.whatsIncluded[lang],
          closeAria: translations.modals.programDetails.closeAria[lang],
        },
      },
      programDetailPages: {
        backToHome: translations.programDetailPages.backToHome[lang],
        stepLabel: translations.programDetailPages.stepLabel[lang],
        otherProgramsTitle: translations.programDetailPages.otherProgramsTitle[lang],
        otherProgramsSubtitle: translations.programDetailPages.otherProgramsSubtitle[lang],
        otherProgramsTag: translations.programDetailPages.otherProgramsTag[lang],
        openProgram: translations.programDetailPages.openProgram[lang],
        orStartWithChat: translations.programDetailPages.orStartWithChat[lang],
        bookCall: translations.programDetailPages.bookCall[lang],
        nextStepTag: translations.programDetailPages.nextStepTag[lang],
      },
      footer: {
        brandName: translations.footer.brandName,
        tagline: translations.footer.tagline[lang],
        quickLinks: translations.footer.quickLinks[lang],
        links: {
          home: translations.footer.links.home[lang],
          goodGirl: translations.footer.links.goodGirl[lang],
          programs: translations.footer.links.programs[lang],
          testimonials: translations.footer.links.testimonials[lang],
          about: translations.footer.links.about[lang],
          blog: translations.footer.links.blog[lang],
        },
        contactTitle: translations.footer.contactTitle[lang],
        rights: translations.footer.rights[lang],
      },
    };
  }, [lang]);
}
