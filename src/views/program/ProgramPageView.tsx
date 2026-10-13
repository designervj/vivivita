'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Modals from '../../components/shared/Modals';
import { ProgramPageData } from '../../lib/programPages';

interface ProgramPageViewProps {
  program: ProgramPageData;
  otherPrograms: ProgramPageData[];
}

export default function ProgramPageView({ program, otherPrograms }: ProgramPageViewProps) {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const goToHomeSection = (id: string) => {
    window.location.href = id === 'top' ? '/' : `/#${id}`;
  };

  const renderSectionContent = (section: ProgramPageData['sections'][number], dark = false) => (
    <>
      {section.copy && (
        <div className={`mt-5 max-w-3xl space-y-3 text-[14px] leading-[1.75] sm:text-[16px] ${dark ? 'text-white/90' : 'text-neutral-700'}`}>
          {section.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      )}

      {section.bullets && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.bullets.map((item) => (
            <li key={item} className={`flex items-start gap-2.5 rounded-[14px] p-4 text-[14px] leading-relaxed sm:text-[15px] ${dark ? 'bg-white/12 text-white ring-1 ring-white/15' : 'bg-white text-neutral-700 ring-1 ring-[#ebeeee]'}`}>
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? 'text-white' : 'text-[var(--primary)]'}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.steps && (
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {section.steps.map((step, stepIndex) => (
            <div key={step.title} className="rounded-[14px] bg-white p-5 ring-1 ring-[#ebeeee]">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#23909d] text-sm font-semibold text-white">
                  {String(stepIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                  Korak
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#2f2b27]">{step.title}</h3>
              <div className="mt-2 space-y-2 text-[14px] leading-relaxed text-neutral-700">
                {step.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          ))}
        </div>
      )}

      {section.timeline && (
        <div className="mt-7 grid gap-3">
          {section.timeline.map((item, timelineIndex) => (
            <div key={item.title} className="grid gap-3 rounded-[14px] bg-white p-4 ring-1 ring-[#ebeeee] sm:grid-cols-[54px_1fr] sm:gap-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#edf3f4] text-[12px] font-semibold text-[var(--primary)]">
                {String(timelineIndex + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-semibold text-[#2f2b27]">{item.title}</h3>
                <div className="mt-2 space-y-2 text-[14px] leading-relaxed text-neutral-700 sm:text-[15px]">
                  {item.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {(section.meta || section.supportingText || section.cta) && (
        <div className={`mt-7 flex flex-col gap-4 rounded-[14px] p-5 sm:flex-row sm:items-center sm:justify-between ${dark ? 'bg-white/12 ring-1 ring-white/15' : 'bg-white ring-1 ring-[#ebeeee]'}`}>
          <div className={`text-sm leading-6 ${dark ? 'text-white/90' : 'text-neutral-700'}`}>
            {section.meta && <p className={dark ? 'font-semibold text-white' : 'font-semibold text-neutral-950'}>{section.meta}</p>}
            {section.supportingText && <p className="mt-1">{section.supportingText}</p>}
          </div>
          {section.cta && (
            <button type="button" onClick={() => setContactModalOpen(true)} className="btn-primary justify-center sm:w-auto">
              {section.cta}
            </button>
          )}
        </div>
      )}
    </>
  );

  return (
    <div className="vivivita-page bg-[var(--background)] text-[var(--foreground)]">
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onSelectProgramTab={() => undefined}
        onScrollTo={goToHomeSection}
      />

      <main>
        <section className="container mx-auto px-3 sm:px-6 md:px-8 pt-2 sm:pt-3 pb-16 sm:pb-24">
          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[15px] bg-neutral-200 sm:min-h-[500px] md:min-h-[540px]">
            <img
              src={program.image}
              alt={program.title}
              className="absolute inset-0 h-full w-full object-cover brightness-[0.82] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/22 to-black/10" />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-8 text-center sm:px-6">
              <span className="inline-flex rounded-full bg-white/85 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#196b75] backdrop-blur-sm">
                {program.category}
              </span>
              <h1 className="font-serif-hero mt-5 max-w-3xl text-[23px] font-medium uppercase leading-[1.18] tracking-[0.04em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-[32px] md:text-[38px] lg:text-[43px]">
                {program.title}
              </h1>
              <p className="mt-4 max-w-2xl text-[14px] font-semibold leading-snug text-white/95 drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)] sm:text-[17px] md:text-[20px]">
                {program.subtitle}
              </p>
              <p className="mt-4 max-w-2xl text-[13px] leading-[1.75] text-white/90 drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)] sm:text-[15px] md:text-[16px]">
                {program.intro}
              </p>

              <div className="mt-6 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="hero-btn-primary justify-center sm:w-auto"
                >
                  {program.cta}
                </button>
                <div className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/80 px-5 text-sm font-semibold text-[#2f2b27] backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-[var(--primary)]" />
                  <span>{program.meta}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-3 sm:px-6 md:px-8 pt-6 sm:pt-10 pb-16 sm:pb-24">
          {program.sections.length > 0 && (
            <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
              {program.sections.slice(0, 2).map((section, index) => {
                const isDarkFeature = index === 0;
                return (
                  <article
                    key={`${section.heading}-${index}`}
                    className={`relative min-h-[360px] overflow-hidden rounded-[20px] p-5 sm:p-8 ${isDarkFeature ? 'bg-neutral-900 text-white' : 'border border-[#eaedee] bg-[#f4f6f7] text-neutral-800'}`}
                  >
                    <img
                      src={program.image}
                      alt=""
                      aria-hidden="true"
                      className={`absolute inset-0 h-full w-full object-cover ${isDarkFeature ? 'opacity-55' : 'opacity-25'}`}
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute inset-0 ${isDarkFeature ? 'bg-gradient-to-r from-black/75 via-black/55 to-black/25' : 'bg-gradient-to-r from-[#f4f6f7]/95 via-[#f4f6f7]/82 to-[#f4f6f7]/40'}`} />
                    <div className="relative z-10 flex min-h-[300px] flex-col justify-between">
                      <div>
                        {section.eyebrow && (
                          <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${isDarkFeature ? 'text-white/80' : 'text-[var(--primary)]'}`}>
                            {section.eyebrow}
                          </p>
                        )}
                        <h2 className={`font-serif-title mt-4 max-w-xl text-[24px] font-bold leading-tight tracking-wide sm:text-[30px] ${isDarkFeature ? 'text-white' : 'text-[var(--primary)]'}`}>
                          {section.heading}
                        </h2>
                        {renderSectionContent(section, isDarkFeature)}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <div className="mt-5 grid gap-4 sm:gap-5">
            {program.sections.slice(2).map((section, index) => (
              <article
                key={`${section.heading}-${index + 2}`}
                className="rounded-[18px] border border-[#eaedee] bg-[#f4f6f7] p-5 sm:p-7 lg:p-8"
              >
                <div className="mb-7">
                  <span className="block border-b border-[#dde3e5] pb-2 text-[11px] font-medium tracking-normal text-[var(--primary)] sm:text-[16px]">
                    {section.eyebrow || `Dio ${String(index + 3).padStart(2, '0')}`}
                  </span>
                  <div className="mt-4 flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[var(--primary)] ring-1 ring-[#dce5e7]">
                      {String(index + 3).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif-title max-w-3xl text-[24px] font-bold leading-tight tracking-wide text-[#2f2b27] sm:text-[30px]">
                      {section.heading}
                    </h2>
                  </div>
                </div>

                <div className="max-w-4xl">
                  {renderSectionContent(section)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-3 sm:px-6 md:px-8 pt-6 sm:pt-10 pb-16 sm:pb-24">
          <div>
            <div className="max-w-2xl">
              <p className="border-b border-[#dde3e5] pb-2 text-[11px] font-medium tracking-normal text-[var(--primary)] sm:text-[16px]">
                Navigacija između programa
              </p>
              <h2 className="font-serif-title mt-3 text-[24px] font-semibold leading-tight text-neutral-950 sm:text-[30px]">
                Želiš istražiti i druge opcije?
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                Usporedi ostale formate rada i odaberi program koji trenutno najbolje odgovara tvojoj situaciji.
              </p>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {otherPrograms.map((item) => (
                <Link
                  key={item.slug}
                  href={`/programi/${item.slug}`}
                  className="group overflow-hidden rounded-[14px] bg-[#f4f5f5] ring-1 ring-[#ebeeee] transition-all duration-200 hover:ring-[#dce5e7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[1/0.72] overflow-hidden bg-[#e6eaec]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#196b75]">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex min-h-[170px] flex-col justify-between p-4">
                    <div>
                      <h3 className="text-[15px] font-semibold leading-snug text-[#2f2b27] transition-colors group-hover:text-[var(--primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[12.5px] leading-[1.55] text-neutral-600">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="mt-4 space-y-3 border-t border-[#dde3e5] pt-4">
                      <span className="inline-flex rounded-md bg-white px-4 py-1.5 text-[12px] font-medium text-[#514b45]">
                        {item.meta}
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[var(--primary)]">
                        Otvori program
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#dde3e5] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif-title text-xl font-semibold text-neutral-950 sm:text-2xl">
                Ili kreni od razgovora.
              </p>
              <button type="button" onClick={() => setContactModalOpen(true)} className="btn-primary justify-center sm:w-auto">
                Dogovori uvodni razgovor
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-3 sm:px-6 md:px-8 pt-6 sm:pt-10 pb-16 sm:pb-24">
          <div className="rounded-[18px] border border-[#eaedee] bg-[#f4f6f7] p-6 sm:p-10">
            <div className="grid gap-7 lg:grid-cols-[1fr_340px] lg:items-center">
              <div>
                <p className="border-b border-[#dde3e5] pb-2 text-[11px] font-medium tracking-normal text-[var(--primary)] sm:text-[16px]">
                  Sljedeći korak
                </p>
                <h2 className="font-serif-hero mt-3 max-w-3xl text-[24px] font-semibold leading-tight tracking-wide text-neutral-950 sm:text-[30px]">
                  {program.finalCta.heading}
                </h2>
                {program.finalCta.copy && (
                  <p className="mt-5 max-w-3xl text-[14px] leading-[1.75] text-neutral-700 sm:text-[16px]">
                    {program.finalCta.copy}
                  </p>
                )}
              </div>

              <div className="rounded-[14px] bg-white p-5 ring-1 ring-[#ebeeee]">
                <div className="flex items-start gap-2 text-sm font-semibold leading-6 text-neutral-800">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span>{program.finalCta.supportingText}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setContactModalOpen(true)}
                  className="btn-primary mt-5 justify-center sm:w-auto"
                >
                  {program.finalCta.cta}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Modals
        videoModalOpen={false}
        onCloseVideo={() => undefined}
        contactModalOpen={contactModalOpen}
        onCloseContact={() => setContactModalOpen(false)}
        selectedProgram={null}
        onCloseProgram={() => undefined}
        infoModal={null}
        onCloseInfoModal={() => undefined}
      />
    </div>
  );
}
