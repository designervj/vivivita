'use client';

import Link from 'next/link';
import { useState } from 'react';
import { X, CheckCircle2, Clock, Play, Send } from 'lucide-react';
import { Program } from '../../types';
import { useLanguage, useCopy } from '../../context/LanguageContext';

interface ModalsProps {
  videoModalOpen: boolean;
  onCloseVideo: () => void;
  contactModalOpen: boolean;
  onCloseContact: () => void;
  onOpenContact?: () => void;
  selectedProgram: Program | null;
  onCloseProgram: () => void;
  infoModal: { title: string; content: string; bullets?: string[] } | null;
  onCloseInfoModal: () => void;
}

export default function Modals({
  videoModalOpen,
  onCloseVideo,
  contactModalOpen,
  onCloseContact,
  selectedProgram,
  onCloseProgram,
  infoModal,
  onCloseInfoModal,
}: ModalsProps) {
  const { lang } = useLanguage();
  const copy = useCopy();
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // If a program is selected, find its localized version from copy if available
  const localizedProgram = selectedProgram
    ? copy.programs.items.find((p) => p.id === selectedProgram.id) || selectedProgram
    : null;

  const programDescription = localizedProgram?.popupDescription || localizedProgram?.description || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: copy.modals.contact.topicOptions[0] || 'Žena koja vodi svoj život',
    note: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      onCloseContact();
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: copy.modals.contact.topicOptions[0] || '',
        note: '',
      });
    }, 2800);
  };

  return (
    <>
      {/* 1. Video Preview Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <button
              onClick={onCloseVideo}
              aria-label={copy.modals.programDetails.closeAria}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                alt="Marina video"
                className="absolute inset-0 w-full h-full object-cover filter brightness-40"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-[#23909d] text-white flex items-center justify-center mx-auto shadow-lg animate-pulse">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <h3 className="font-serif-title text-xl sm:text-2xl text-white font-semibold">
                  {copy.modals.video.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {copy.modals.video.description}
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs backdrop-blur-md">
                    {copy.modals.video.playing}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Program Details Modal */}
      {localizedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-y-auto shadow-2xl border border-neutral-100 max-h-[90vh]">
            <button
              onClick={onCloseProgram}
              aria-label={copy.modals.programDetails.closeAria}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center shadow transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Image */}
            <div className="relative h-32 sm:h-40 bg-neutral-900">
              <img
                src={localizedProgram.image}
                alt={localizedProgram.title}
                className="w-full h-full object-cover filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-[#23909d] px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                  {localizedProgram.categoryLabel}
                </span>
                <h3 className="font-serif-title text-xl sm:text-2xl font-medium leading-tight">
                  {localizedProgram.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 text-neutral-700 text-sm">
              <div className="space-y-1.5 text-neutral-700 leading-relaxed text-[14px]">
                {programDescription.split(/\n\s*\n/).map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 py-2 border-y border-neutral-100 text-xs text-neutral-600">
                <div className="flex items-center gap-1.5 font-medium text-neutral-900">
                  <Clock className="w-4 h-4 text-[#23909d]" />
                  <span>
                    {localizedProgram.popupInfo || (
                      localizedProgram.meta || `${localizedProgram.duration} · ${localizedProgram.price || ''}`
                    )}
                  </span>
                </div>
              </div>

              {Boolean(('bullets' in localizedProgram && localizedProgram.bullets?.length) || ('popupBullets' in localizedProgram && (localizedProgram as any).popupBullets?.length)) && (
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                    {copy.modals.programDetails.whatsIncluded}
                  </div>
                  <ul className="space-y-2">
                    {((localizedProgram as any).popupBullets || localizedProgram.bullets || []).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                        <CheckCircle2 className="w-4 h-4 text-[#23909d] shrink-0 mt-0.5" />
                        <span>{item.replace(/^✓\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-3 flex justify-end gap-3 border-t border-neutral-200 pt-4">
                <Link
                  href={localizedProgram.url || `/programi/${localizedProgram.id}`}
                  onClick={onCloseProgram}
                  className="btn-primary min-w-[190px] justify-center px-8 py-0"
                >
                  {localizedProgram.popupActionText || localizedProgram.actionText}
                </Link>
                <button
                  onClick={onCloseProgram}
                  className="px-5 py-3 rounded-full border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-sm font-medium transition-colors cursor-pointer"
                >
                  {copy.modals.programDetails.closeAria}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. General Info Modal */}
      {infoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[92dvh] overflow-y-auto bg-white rounded-2xl p-5 sm:p-8 shadow-2xl border border-neutral-100 space-y-5">
            <button
              onClick={onCloseInfoModal}
              aria-label={copy.modals.programDetails.closeAria}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif-title text-xl sm:text-2xl text-neutral-900 font-medium">
              {infoModal.title}
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
              {infoModal.content}
            </p>

            {infoModal.bullets && (
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                {infoModal.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#23909d] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={onCloseInfoModal}
                className="btn-primary w-full justify-center cursor-pointer"
              >
                {lang === 'en' ? 'Understood' : 'Razumijem'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Consultation & Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[92dvh] overflow-y-auto bg-white rounded-2xl p-5 sm:p-8 shadow-2xl border border-neutral-100">
            <button
              onClick={onCloseContact}
              aria-label={copy.modals.programDetails.closeAria}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-[#e8f6f7] text-[#23909d] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-title text-xl sm:text-2xl text-neutral-900 font-medium">
                  {copy.modals.contact.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  {copy.modals.contact.successMessage}
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#23909d] mb-1">
                    {lang === 'en' ? 'Free introductory consultation' : 'Besplatne uvodne konzultacije'}
                  </div>
                  <h3 className="font-serif-title text-xl sm:text-2xl text-neutral-900 font-medium">
                    {copy.modals.contact.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    {copy.modals.contact.subtitle}
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-3.5 text-sm sm:text-sm">
                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">
                      {copy.modals.contact.nameLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={copy.modals.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">
                        {copy.modals.contact.emailLabel}
                      </label>
                      <input
                        required
                        type="email"
                        placeholder={copy.modals.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">
                        {copy.modals.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        placeholder={copy.modals.contact.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">
                      {copy.modals.contact.topicLabel}
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all bg-white"
                    >
                      {copy.modals.contact.topicOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">
                      {copy.modals.contact.noteLabel}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={copy.modals.contact.notePlaceholder}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-3.5 py-3 sm:py-2.5 text-base sm:text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full mt-2 justify-center cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{copy.modals.contact.submitButton}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
