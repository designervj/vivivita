import { Program, TestimonialSlide } from '../../types';
import pages from './pages.json';

type LocalizedText = string | { hr?: string; en?: string } | null | undefined;
type PageLike = Record<string, any> | undefined;

const text = (value: LocalizedText) => {
  if (typeof value === 'string') return value;
  return value?.hr || value?.en || '';
};

const textList = (values: LocalizedText[] = []) => (Array.isArray(values) ? values : []).map(text);

const pageData = pages as any[];
const fallbackHomePage = pageData.find((page) => page.slug === 'home');

const pageSections = (page: PageLike) => {
  const payload = page?.payload && typeof page.payload === 'object' ? page.payload : {};
  if (Array.isArray(payload.blocks)) return payload.blocks;
  if (Array.isArray(page?.content)) return page.content;
  return [];
};

const homeSection = (page: PageLike, id: string) => pageSections(page).find((section: any) => section.id === id);
const sectionProps = (page: PageLike, id: string) => homeSection(page, id)?.props || homeSection(fallbackHomePage, id)?.props || {};

export function buildHomeContent(page?: PageLike) {
  const heroSection = sectionProps(page, 'hero-001');
  const philosophySection = sectionProps(page, 'philosophy-001');
  const cardsSection = sectionProps(page, 'identity-cards-001');
  const programsSection = sectionProps(page, 'programs-001');
  const testimonialsSection = sectionProps(page, 'testimonials-001');
  const aboutSection = sectionProps(page, 'about-marina-001');

  return {
    hero: {
      headline: text(heroSection.heading),
      subtitle: text(heroSection.subheading),
      ctaButton: text(heroSection.cta?.label),
      image: heroSection.image || heroSection.fallbackImage || '/image/Rectangle 1795.png',
    },
    philosophy: {
      part1: textList(philosophySection.part1),
      part2: textList(philosophySection.part2),
    },
    twoCards: {
      leftCard: {
        title: text(cardsSection.leftCard?.title),
        description: text(cardsSection.leftCard?.description),
        bullets: textList(cardsSection.leftCard?.bullets),
        bottomText: text(cardsSection.leftCard?.bottomText),
        buttonText: text(cardsSection.leftCard?.buttonText),
        image: cardsSection.leftCard?.image || '/image/image 13.png',
      },
      rightCard: {
        title: text(cardsSection.rightCard?.title),
        subtitle: text(cardsSection.rightCard?.subtitle),
        bullets: textList(cardsSection.rightCard?.bullets),
        closingLines: textList(cardsSection.rightCard?.closingLines),
        buttonText: text(cardsSection.rightCard?.buttonText),
        image: cardsSection.rightCard?.image || '/image/about-img.png',
      },
    },
    programs: (programsSection.items || []) as Program[],
    programsContent: {
      tag: text(programsSection.tag),
      heading: text(programsSection.heading),
      tabs: (programsSection.tabs || []).map((tab: any) => ({
        id: tab.id,
        label: text(tab.label),
      })),
    },
    testimonialSlides: (testimonialsSection.slides || []) as TestimonialSlide[],
    testimonialsContent: {
      tag: text(testimonialsSection.tag),
    },
    about: {
      tag: text(aboutSection.tag),
      title: text(aboutSection.title),
      intro: text(aboutSection.intro),
      p1: text(aboutSection.p1),
      credentials: textList(aboutSection.credentials),
      image: aboutSection.image || '/image/marini-img.png',
    },
  };
}

export type HomeContent = ReturnType<typeof buildHomeContent>;

export const DEFAULT_HOME_CONTENT = buildHomeContent(fallbackHomePage);
export const HERO_CONTENT = DEFAULT_HOME_CONTENT.hero;
export const PHILOSOPHY_CONTENT = DEFAULT_HOME_CONTENT.philosophy;
export const TWO_CARDS_CONTENT = DEFAULT_HOME_CONTENT.twoCards;
export const PROGRAMS = DEFAULT_HOME_CONTENT.programs;
export const PROGRAMS_CONTENT = DEFAULT_HOME_CONTENT.programsContent;
export const TESTIMONIAL_SLIDES = DEFAULT_HOME_CONTENT.testimonialSlides;
export const TESTIMONIALS_CONTENT = DEFAULT_HOME_CONTENT.testimonialsContent;
export const ABOUT_MARINA = DEFAULT_HOME_CONTENT.about;
