import { useState } from 'react';
import { X, CheckCircle2, Clock, Calendar, Sparkles, Send, Play } from 'lucide-react';
import { Program } from '../types';

interface ModalsProps {
  videoModalOpen: boolean;
  onCloseVideo: () => void;
  contactModalOpen: boolean;
  onCloseContact: () => void;
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
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Konzultacije 1:1',
    note: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      onCloseContact();
      setFormData({ name: '', email: '', phone: '', topic: 'Konzultacije 1:1', note: '' });
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
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                alt="Marina uvodni video"
                className="absolute inset-0 w-full h-full object-cover filter brightness-40"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-[#23909d] text-white flex items-center justify-center mx-auto shadow-lg animate-pulse">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <h3 className="font-serif-title text-xl sm:text-2xl text-white font-semibold">
                  Dobrodošla u svoj novi početak
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Kratka 3-minutna poruka Marine o prvim koracima izlaska iz obrasca "dobre djevojčice" i vraćanju osobnog mira.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs backdrop-blur-md">
                    Reprodukcija u tijeku...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 max-h-[90vh] flex flex-col">
            <button
              onClick={onCloseProgram}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center shadow transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Image */}
            <div className="relative h-44 sm:h-52 bg-neutral-900 shrink-0">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-[#23909d] px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                  {selectedProgram.categoryLabel}
                </span>
                <h3 className="font-serif-title text-xl sm:text-2xl font-medium leading-tight">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-neutral-700 text-sm">
              <p className="text-neutral-600 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 py-2 border-y border-neutral-100 text-xs text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#23909d]" />
                  <span>{selectedProgram.duration}</span>
                </div>
                {selectedProgram.price && (
                  <div className="flex items-center gap-1.5 font-medium text-neutral-900">
                    <Sparkles className="w-4 h-4 text-[#23909d]" />
                    <span>Cijena: {selectedProgram.price}</span>
                  </div>
                )}
              </div>

              {selectedProgram.bullets && (
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                    Što obuhvaća ovaj program:
                  </div>
                  <ul className="space-y-2">
                    {selectedProgram.bullets.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                        <CheckCircle2 className="w-4 h-4 text-[#23909d] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-3 flex gap-3">
                <button
                  onClick={() => {
                    onCloseProgram();
                    setFormData((prev) => ({ ...prev, topic: selectedProgram.title }));
                    // open contact modal
                  }}
                  className="btn-primary flex-1 justify-center"
                >
                  {selectedProgram.actionText}
                </button>
                <button
                  onClick={onCloseProgram}
                  className="px-5 py-3 rounded-full border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-sm font-medium transition-colors cursor-pointer"
                >
                  Zatvori
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. General Info Modal (for "Tko je dobra djevojčica" & "Kako izgleda proces") */}
      {infoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-100 space-y-5">
            <button
              onClick={onCloseInfoModal}
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
                className="btn-primary w-full justify-center"
              >
                Razumijem
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Consultation & Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-100">
            <button
              onClick={onCloseContact}
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
                  Hvala ti na javljanju!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Tvoja poruka je uspješno poslana. Marina će ti se javiti u roku od 24 sata s prijedlogom termina za uvodni razgovor.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#23909d] mb-1">
                    Besplatne uvodne konzultacije
                  </div>
                  <h3 className="font-serif-title text-xl sm:text-2xl text-neutral-900 font-medium">
                    Kontaktirajte me
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Javi se s povjerenjem. Prvi korak prema sebi počinje jednostavnim razgovorom.
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">Ime i prezime</label>
                    <input
                      required
                      type="text"
                      placeholder="Npr. Ana Horvat"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">Email adresa</label>
                      <input
                        required
                        type="email"
                        placeholder="tvoj@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">Telefon / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+385 9..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">Zanima me:</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all bg-white"
                    >
                      <option value="Konzultacije 1:1">Premium 1:1 rad</option>
                      <option value="Sindrom dobre djevojčice">Webinar: Sindrom dobre djevojčice</option>
                      <option value="Otpor prema promjeni">Mini trening: Otpor prema promjeni</option>
                      <option value="Izlaz iz sindroma">Mini program: Izlaz iz sindroma</option>
                      <option value="Opći upit">Opći upit / Savjet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">Kratka poruka ili pitanje (opcionalno)</label>
                    <textarea
                      rows={3}
                      placeholder="Ukratko opiši u kojem području života osjećaš najveći pritisak očekivanja..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full mt-2 justify-center"
                  >
                    <Send className="w-4 h-4" />
                    <span>Pošalji upit</span>
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
