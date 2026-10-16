'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from './sections/HeroSection';
import IntroQuote from './sections/IntroQuoteSection';
import TwoCards from './sections/TwoCardsSection';
import ProgramsSection from './sections/ProgramsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import AboutSection from './sections/AboutSection';
import Modals from '../../components/shared/Modals';
import { Program } from '../../types';
import { DEFAULT_HOME_CONTENT, type HomeContent } from '../../lib/pages/content';
import { useCopy, useLanguage } from '../../context/LanguageContext';

export default function HomePage({ initialContent = DEFAULT_HOME_CONTENT }: { initialContent?: HomeContent }) {
  const homeContent = initialContent;
  const { lang } = useLanguage();
  const copy = useCopy();

  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [infoModal, setInfoModal] = useState<{
    title: string;
    content: string;
    bullets?: string[];
  } | null>(null);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLearnMoreGoodGirl = () => {
    setInfoModal({
      title: copy.modals.goodGirlInfo.title,
      content: copy.modals.goodGirlInfo.content,
      bullets: copy.modals.goodGirlInfo.bullets,
    });
  };

  const handleExploreProcess = () => {
    setInfoModal({
      title: copy.modals.processInfo.title,
      content: copy.modals.processInfo.content,
      bullets: copy.modals.processInfo.bullets,
    });
  };

  return (
    <div className="vivivita-page">
      {/* Top Navigation */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onSelectProgramTab={(cat) => setSelectedTab(cat)}
        onScrollTo={scrollToSection}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Banner */}
        <Hero
          content={homeContent.hero}
          onStartProcess={() => {
            setSelectedTab('all');
            scrollToSection('programi');
          }}
          onPlayVideo={() => setVideoModalOpen(true)}
        />

        {/* 2. Philosophy & Intro Quote */}
        <IntroQuote content={homeContent.philosophy} />

        {/* 3. Two Comparison Cards */}
        <TwoCards
          content={homeContent.twoCards}
          onLearnMoreGoodGirl={handleLearnMoreGoodGirl}
          onExploreProcess={handleExploreProcess}
        />

        {/* 4. Programs Grid ("Načini rada") */}
        <ProgramsSection
          programs={homeContent.programs}
          content={homeContent.programsContent}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
          onSelectProgram={(program) => setSelectedProgram(program)}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* 5. Testimonials & Client Stories */}
        <TestimonialsSection slides={homeContent.testimonialSlides} content={homeContent.testimonialsContent} />

        {/* 6. About Marina */}
        <AboutSection content={homeContent.about} onBookCall={() => setContactModalOpen(true)} />
      </main>

      {/* Interactive Modals */}
      <Modals
        videoModalOpen={videoModalOpen}
        onCloseVideo={() => setVideoModalOpen(false)}
        contactModalOpen={contactModalOpen}
        onCloseContact={() => setContactModalOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
        selectedProgram={selectedProgram}
        onCloseProgram={() => setSelectedProgram(null)}
        infoModal={infoModal}
        onCloseInfoModal={() => setInfoModal(null)}
      />
    </div>
  );
}
