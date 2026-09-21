import { PHILOSOPHY_CONTENT } from '../data/content';

export default function IntroQuote() {
  return (
    <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-7">
        {/* First Paragraph Group */}
        <div className="space-y-1.5 text-[#4F4640] text-[16px] sm:text-[16px] md:text-[21px] leading-[160%] font-medium tracking-[0%]">
          <p>
            Postoji trenutak kada žena shvati da više ne želi živjeti život koji je izgradila oko očekivanja drugih.
            Izvana sve može izgledati dobro:karijera, odnosi, funkcionalnost.
          </p>

          <p className='text-center pt-6'>Ali iznutra osjeća: umor od prilagođavanja, unutarnji konflikt i osjećaj da ne živi svoj život.</p>
          <p>  Moj rad temelji se na prepoznavanju i transformaciji identiteta{' '}

            <span className="text-[#3A9FB3] font-semibold">
              “dobre djevojčice”
            </span>
            {' '}— obrasca zbog kojeg žena prestaje vjerovati sebi i počinje živjeti prema tuđim pravilima.

          </p>
        </div>

        {/* Second Paragraph Group with teal highlighted phrase */}
        <div className="space-y-1.5 text-[#2c3338] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] font-normal pt-1">
          <p>

          </p>
          <p>

          </p>
        </div>
      </div>
    </section>
  );
}
