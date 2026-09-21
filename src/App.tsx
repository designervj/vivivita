'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroQuote from './components/IntroQuote';
import TwoCards from './components/TwoCards';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { Program } from './types';
import { PROGRAMS } from './data/content';

export default function App() {
  const [selectedTab, setSelectedTab] = useState<string>('webinar');
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
      title: 'Tko je "dobra djevojčica"?',
      content:
        'Sindrom "dobre djevojčice" nastaje u ranom djetinjstvu kada djevojčica nauči da su ljubav, pohvala i sigurnost uvjetovani poslušnošću, predviđanjem tuđih potreba i nepravljenjem "problema".\n\nU odrasloj dobi, ovaj obrazac se manifestira kao nemogućnost odbijanja, stalni osjećaj krivnje kad stavimo sebe na prvo mjesto, perfekcionizam i duboki strah od konflikta.',
      bullets: [
        'Kronično preuzimanje tuđe odgovornosti',
        'Strah od izražavanja neslaganja ili ljutnje',
        'Zanemarivanje vlastitog tijela, odmora i snova',
        'Potraga za vanjskim odobrenjem prije donošenja odluka',
      ],
    });
  };

  const handleExploreProcess = () => {
    setInfoModal({
      title: 'Kako izgleda proces transformacije?',
      content:
        'Proces se ne bavi samo površinskim savjetima poput "samo reci ne". Umjesto toga, radimo na razini regulacije živčanog sustava i transformacije temeljnih uvjerenja.\n\nKroz 3 faze rada prolazimo put od uočavanja automatske reakcije do potpunog unutarnjeg mira i slobode izbora.',
      bullets: [
        '1. Faza svijesti: mapiranje tvojih specifičnih okidača i obrazaca',
        '2. Faza regulacije: smirivanje tjelesnog osjećaja straha od odbačenosti',
        '3. Faza integracije: postavljanje granica s ljubavlju i jasnoćom',
      ],
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#2c3338] selection:bg-[#23909d]/20 selection:text-[#196b75] font-sans antialiased">
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
          onStartProcess={() => {
            setSelectedTab('all');
            scrollToSection('programi');
          }}
          onPlayVideo={() => setVideoModalOpen(true)}
        />

        {/* 2. Philosophy & Intro Quote */}
        <IntroQuote />

        {/* 3. Two Comparison Cards */}
        <TwoCards
          onLearnMoreGoodGirl={handleLearnMoreGoodGirl}
          onExploreProcess={handleExploreProcess}
        />

        {/* 4. Programs Grid ("Načini rada") */}
        <ProgramsSection
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
          onSelectProgram={(program) => setSelectedProgram(program)}
        />

        {/* 5. Testimonials & Client Stories */}
        <TestimonialsSection />

        {/* 6. About Marina */}
        <AboutSection onBookCall={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      {/* <Footer
        onOpenContact={() => setContactModalOpen(true)}
        onScrollTo={scrollToSection}
      /> */}

      {/* Interactive Modals */}
      <Modals
        videoModalOpen={videoModalOpen}
        onCloseVideo={() => setVideoModalOpen(false)}
        contactModalOpen={contactModalOpen}
        onCloseContact={() => setContactModalOpen(false)}
        selectedProgram={selectedProgram}
        onCloseProgram={() => setSelectedProgram(null)}
        infoModal={infoModal}
        onCloseInfoModal={() => setInfoModal(null)}
      />
    </div>
  );
}
