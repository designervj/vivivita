export type Language = 'hr' | 'en';

export interface LocalizedString {
  hr: string;
  en: string;
}

export const translations = {
  nav: {
    programs: { hr: 'Programi', en: 'Programs' },
    allPrograms: { hr: 'Svi programi', en: 'All programs' },
    overview: { hr: 'Pregled', en: 'Overview' },
    mentalReset: { hr: 'Mentalni reset', en: 'Mental reset' },
    intensive: { hr: 'Intenziv', en: 'Intensive' },
    premium: { hr: 'Premium 1:1 program', en: 'Premium 1:1 program' },
    about: { hr: 'O Marini', en: 'About Marina' },
    testimonials: { hr: 'Što drugi kažu', en: 'What others say' },
    contact: { hr: 'Kontaktirajte me', en: 'Contact me' },
    menu: { hr: 'Izbornik', en: 'Menu' },
  },

  hero: {
    headline: {
      hr: 'OD "DOBRE DJEVOJČICE"\nDO ŽENE KOJA VODI SVOJ ŽIVOT.',
      en: 'FROM THE "GOOD GIRL"\nTO A WOMAN WHO LEADS HER LIFE.',
    },
    subtitle: {
      hr: 'Za nas koje smo živjele tuđe MORAŠ, a sada biramo svoje ŽELIM i vlastita pravila života.',
      en: 'For those of us who lived by others\' "HAVE TO", and now choose our own "WANT TO" and our own rules of life.',
    },
    ctaButton: {
      hr: 'Započni svoj proces',
      en: 'Start your process',
    },
    playAria: {
      hr: 'Pogledaj uvodni video',
      en: 'Watch intro video',
    },
  },

  philosophy: {
    highlightedPhrases: {
      hr: ['dobre djevojčice', 'moraš', 'želiš', 'vlastitim izborima'],
      en: ['good girl', 'have to', 'want to', 'own choices'],
    },
    paragraphs: {
      hr: [
        'Postoji trenutak kada shvatiš da ti je dosta toga da svi oko tebe budu zadovoljni tobom — osim tebe same.',
        'Izvana sve može izgledati dobro: karijera, odnosi, život koji funkcionira. A iznutra osjećaš umor od prilagođavanja, prazninu i osjećaj da samo odrađuješ dane umjesto da živiš svoj život.',
        'Znam taj osjećaj. I sama sam godinama živjela kroz tuđa očekivanja, tražeći potvrdu da sam dovoljno dobra.',
        'Moj rad temelji se na osvještavanju i transformaciji nesvjesnih obrazaca koji te drže u identitetu „dobre djevojčice“ — kako bi prestala živjeti iz onoga što moraš i počela birati ono što stvarno želiš.',
        'Našim zajedničkim radom vraćaš sebi unutarnji autoritet i gradiš život koji više nije vođen tuđim očekivanjima, nego tvojim vlastitim izborima.',
        'Ne gradimo bolju verziju tebe. Vraćamo se onoj koja je oduvijek bila tvoja.',
      ],
      en: [
        'There comes a moment when you realize you are tired of everyone around you being happy with you — except yourself.',
        'On the outside, everything may seem fine: career, relationships, a life that functions. But inside, you feel exhausted from constant adapting, emptiness, and the sense that you are merely getting through the days instead of living your life.',
        'I know that feeling. I spent years living through others\' expectations, seeking proof that I was good enough.',
        'My work is based on recognizing and transforming the unconscious patterns that keep you in the "good girl" identity — so you can stop living from what you have to do and begin choosing what you truly want.',
        'Through our work together, you reclaim your inner authority and build a life that is no longer driven by other people\'s expectations, but by your own choices.',
        'We aren\'t building a "better" version of you. We are returning to the one that has always been yours.',
      ],
    },
  },

  twoCards: {
    leftCard: {
      title: {
        hr: 'TKO JE „DOBRA DJEVOJČICA“?',
        en: 'WHO IS THE "GOOD GIRL"?',
      },
      description: {
        hr: '„Dobra djevojčica“ nije tvoja osobnost. To je obrazac koji si naučila.',
        en: 'The "good girl" is not your personality. It is a pattern you learned.',
      },
      bullets: {
        hr: [
          'Živi u stalnom MORAŠ\nVlastite želje uvijek stavlja na posljednje mjesto.',
          'Bježi od kritike i neuspjeha\nPokreće je strah da će razočarati druge.',
          'Traži vanjsku potvrdu\nTeško vjeruje sebi bez tuđeg odobravanja.',
          'Šuti kada želi reći NE\nPotiskuje svoje potrebe kako bi sačuvala mir.',
        ],
        en: [
          'Lives in a constant HAVE TO\nAlways puts her own desires last.',
          'Runs from criticism and failure\nDriven by the fear of disappointing others.',
          'Seeks external validation\nStruggles to trust herself without approval.',
          'Stays silent when wanting to say NO\nSuppresses her needs to keep the peace.',
        ],
      },
      bottomText: {
        hr: 'I zato često ne donosiš odluke koje znaš da želiš donijeti.',
        en: 'And that is why you often don\'t make the decisions you know you want to make.',
      },
      buttonText: {
        hr: 'Saznaj više',
        en: 'Learn more',
      },
    },
    rightCard: {
      title: {
        hr: 'KAKO TI JA POMAŽEM?',
        en: 'HOW I HELP YOU',
      },
      subtitle: {
        hr: 'U radu 1:1 zajedno otkrivamo:',
        en: 'In our 1:1 work, together we uncover:',
      },
      bullets: {
        hr: [
          'gdje si izgubila vlastiti autoritet',
          'zašto ostaješ na istom mjestu iako želiš promjenu',
          'što te vraća starim obrascima',
          'što je zaista tvoja želja, a što još jedno „moram“',
        ],
        en: [
          'where you lost your own authority',
          'why you stay in the same place even though you want change',
          'what pulls you back into old patterns',
          'what is truly your desire, and what is just another "have to"',
        ],
      },
      closingLines: {
        hr: [
          'Cilj nije postati „bolja“.',
          'Cilj je postati svoja.',
        ],
        en: [
          'The goal is not to become "better".',
          'The goal is to become your true self.',
        ],
      },
      buttonText: {
        hr: 'Kako izgleda proces',
        en: 'How the process works',
      },
    },
  },

  programs: {
    tag: {
      hr: 'Načini rada',
      en: 'Ways of Working',
    },
    heading: {
      hr: 'Ne moraš odmah znati koliko duboko želiš ići.\nMožeš krenuti od jednog konkretnog problema, intenzivno raditi na onome što te trenutno koči ili ući u dubinski individualni proces. Odaberi mjesto na kojem si sada.',
      en: 'You don\'t need to know right away how deep you want to go.\nYou can start with one specific challenge, work intensively on what is holding you back, or enter a deep individual process. Choose where you are right now.',
    },
    tabs: [
      { id: 'all', label: { hr: 'Svi programi', en: 'All programs' } },
      { id: 'mentalni-reset', label: { hr: 'Mentalni reset', en: 'Mental reset' } },
      { id: 'intenziv', label: { hr: 'Intenziv', en: 'Intensive' } },
      { id: 'premium', label: { hr: 'Premium 1:1 program', en: 'Premium 1:1 program' } },
    ],
    items: [
      {
        id: 'kljucevi-zivota',
        category: 'mentalni-reset',
        categoryLabel: { hr: 'MENTALNI RESET', en: 'MENTAL RESET' },
        title: { hr: 'Ključevi života', en: 'Keys of Life' },
        description: {
          hr: 'Za trenutke kada shvatiš da već predugo živiš prema tuđim očekivanjima.',
          en: 'For moments when you realize you\'ve been living by other people\'s expectations for far too long.',
        },
        duration: { hr: '60 min', en: '60 min' },
        price: '39 €',
        meta: { hr: '60 min · 39 €', en: '60 min · 39 €' },
        actionText: { hr: 'Saznaj više', en: 'Learn more' },
        url: '/programi/kljucevi-zivota',
        image: '/image/Pety - 17cm 1.png',
        popupDescription: {
          hr: 'Za žene koje su cijeli život bile uzorne, odgovorne i „dobre“, a danas osjećaju da samo odrađuju dane.\n\nU ovom 60-minutnom radu otkrivamo čija očekivanja još uvijek upravljaju tvojim odlukama i vraćamo ti pravo na pogrešku, granice i vlastiti izbor.',
          en: 'For women who spent their whole lives being exemplary, responsible, and "good", and today feel they are just getting through the days.\n\nIn this 60-minute session, we uncover whose expectations still control your decisions and return your right to make mistakes, set boundaries, and choose for yourself.',
        },
        popupInfo: { hr: '60 min · Cijena: 39 €', en: '60 min · Price: 39 €' },
        bullets: {
          hr: [
            'Mapiranje situacija u kojima osjećaš najveći pritisak',
            'Osvještavanje čija očekivanja pokušavaš ispuniti',
            'Vježba „Vraćanje ključeva“',
            'Vraćanje prava na pogrešku, NE i vlastiti izbor',
          ],
          en: [
            'Mapping situations where you feel the greatest pressure',
            'Recognizing whose expectations you are trying to fulfill',
            'Exercise "Reclaiming the Keys"',
            'Restoring your right to make mistakes, say NO, and choose for yourself',
          ],
        },
        popupActionText: { hr: 'Saznaj više', en: 'Learn more' },
      },
      {
        id: 'iskljuci-moram-ukljuci-zelim',
        category: 'mentalni-reset',
        categoryLabel: { hr: 'MENTALNI RESET', en: 'MENTAL RESET' },
        title: { hr: 'Isključi MORAM. Uključi ŽELIM.', en: 'Turn off HAVE TO. Turn on WANT TO.' },
        description: {
          hr: 'Za trenutke kada ti je život postao beskrajan popis obaveza.',
          en: 'For moments when life has become an endless list of obligations.',
        },
        duration: { hr: '90 min', en: '90 min' },
        price: '49 €',
        meta: { hr: '90 min · 49 €', en: '90 min · 49 €' },
        actionText: { hr: 'Saznaj više', en: 'Learn more' },
        url: '/programi/iskljuci-moram-ukljuci-zelim',
        image: '/image/Pety - 17cm 1 (1).png',
        popupDescription: {
          hr: 'Za žene koje su stalno pod unutarnjim pritiskom i imaju osjećaj da je sve u životu obaveza.\n\nU 90 minuta otkrivamo kako „moram“ utječe na tvoju energiju i svakodnevne odluke te učimo prebaciti fokus na ono što želiš i biraš.',
          en: 'For women under constant internal pressure who feel everything in life is an obligation.\n\nIn 90 minutes, we uncover how "have to" drains your energy and daily choices, and learn to shift focus to what you genuinely desire and choose.',
        },
        popupInfo: { hr: '90 min · Cijena: 49 €', en: '90 min · Price: 49 €' },
        bullets: {
          hr: [
            'Osvještavanje nesvjesnog jezika „moram“',
            'Prepoznavanje tjelesnih reakcija na pritisak',
            'Tehnika preusmjeravanja s izbjegavanja na želju',
            'Vježba „Magnetska linija“ za povezivanje s ciljem',
          ],
          en: [
            'Uncovering the subconscious language of "have to"',
            'Recognizing your body\'s physical response to pressure',
            'Technique to shift from avoidance to genuine desire',
            'Exercise "Magnetic Line" to connect with your goal',
          ],
        },
        popupActionText: { hr: 'Saznaj više', en: 'Learn more' },
      },
      {
        id: 'ukloni-kocnice-kreni-u-akciju',
        category: 'intenziv',
        categoryLabel: { hr: 'DVODNEVNI INTENZIV', en: '2-DAY INTENSIVE' },
        title: { hr: 'Ukloni kočnice. Kreni u akciju.', en: 'Release the Brakes. Take Action.' },
        description: {
          hr: 'Znaš što želiš. Ali nešto te svaki put zaustavi.',
          en: 'You know what you want. But something stops you every time.',
        },
        duration: { hr: '2 dana', en: '2 days' },
        price: '250 €',
        meta: { hr: '2 dana × 120 min · 250 €', en: '2 days × 120 min · 250 €' },
        actionText: { hr: 'Saznaj više', en: 'Learn more' },
        url: '/programi/ukloni-kocnice-kreni-u-akciju',
        image: '/image/Pety - 17cm 1 (2).png',
        popupDescription: {
          hr: 'Za žene koje imaju jasnu ideju ili cilj, ali stalno odgađaju početak.\n\nU 2 dana po 120 minuta razbijamo unutarnje otpore, neutraliziramo strah od neuspjeha i stvaramo mentalni prostor za djelovanje.',
          en: 'For women who have a clear goal or idea, but keep postponing taking action.\n\nOver 2 days (120 minutes each), we break through internal resistance, neutralize fear of failure, and create mental clarity for real action.',
        },
        popupInfo: { hr: '2 dana × 120 min · Cijena: 250 €', en: '2 days × 120 min · Price: 250 €' },
        bullets: {
          hr: [
            'Dan 1: Mapiranje i razbijanje unutarnjih otpora',
            'Dan 2: Vježba tri pozicije — nova stvarnost postaje prirodna',
            'Prepoznavanje okidača koji te vraćaju u pasivu',
            'Konkretan plan za prvi korak bez odgađanja',
          ],
          en: [
            'Day 1: Mapping and breaking through internal resistance',
            'Day 2: Three Positions Exercise — making your new reality feel natural',
            'Recognizing triggers that pull you back into passivity',
            'Concrete actionable plan for your first step without delay',
          ],
        },
        popupActionText: { hr: 'Saznaj više', en: 'Learn more' },
      },
      {
        id: 'zena-koja-vodi-svoj-zivot',
        category: 'premium',
        categoryLabel: { hr: 'PREMIUM 1:1 PROGRAM', en: 'PREMIUM 1:1 PROGRAM' },
        title: { hr: 'Žena koja vodi svoj život', en: 'A Woman Who Leads Her Life' },
        description: {
          hr: 'Dubinski individualni proces za ženu koja više ne želi samo riješiti jedan problem, nego razumjeti i promijeniti obrazac iz kojeg živi.',
          en: 'A deep individual process for a woman ready to not just fix one problem, but understand and transform the core pattern she lives from.',
        },
        duration: { hr: 'Individualni rad', en: 'Individual work' },
        price: '1.500 €',
        meta: { hr: 'Individualni 1:1 program · 1.500 €', en: 'Individual 1:1 program · 1.500 €' },
        actionText: { hr: 'Saznaj više', en: 'Learn more' },
        url: '/programi/zena-koja-vodi-svoj-zivot',
        image: '/image/Pety - 17cm 1 (3).png',
        popupDescription: {
          hr: 'Sveobuhvatni tromjesečni 1:1 mentoring program.\n\nKroz 9 faza prolazimo put od osvještavanja identiteta „dobre djevojčice“ do potpune izgradnje unutarnjeg autoriteta, postavljanja granica i života prema vlastitim pravilima.',
          en: 'A comprehensive 3-month 1:1 mentoring program.\n\nThrough 9 transformative phases, we move from recognizing the "good girl" pattern to fully establishing inner authority, healthy boundaries, and a life lived on your own terms.',
        },
        popupInfo: { hr: '3 mjeseca · 1:1 rad · Cijena: 1.500 €', en: '3 months · 1:1 coaching · Price: 1.500 €' },
        bullets: {
          hr: [
            '9 strukturiranih faza transformacije',
            'Redoviti 1:1 susreti i kontinuirana podrška',
            'NLP tehnike, vizualizacije i audio vježbe',
            'Trajni alati za samostalan nastavak rasta',
          ],
          en: [
            '9 structured transformation phases',
            'Regular 1:1 sessions and continuous support',
            'NLP techniques, guided visualizations, and audio exercises',
            'Lifelong tools for independent, ongoing growth',
          ],
        },
        popupActionText: { hr: 'Saznaj više', en: 'Learn more' },
      },
    ],
    customProgram: {
      heading: {
        hr: 'Ne pronalaziš se potpuno ni u jednom programu?',
        en: 'Don\'t see yourself fully in any of the programs?',
      },
      paragraphs: {
        hr: [
          'Ne moraš se uklopiti u unaprijed zadani format.',
          'Ako znaš da želiš promjenu, ali tvoja situacija traži drugačiji fokus ili kombinaciju tema, možemo kreirati individualni program prema onome što ti je trenutno potrebno.',
          'Prvo razgovaramo o tome gdje si sada i kamo želiš doći. Zatim zajedno definiramo format i dinamiku rada.',
        ],
        en: [
          'You don\'t have to fit into a pre-defined format.',
          'If you know you want change, but your situation requires a different focus or combination of themes, we can create an individual program tailored to what you currently need.',
          'First we talk about where you are right now and where you want to go. Then together we define the format and pace of work.',
        ],
      },
      ctaText: {
        hr: 'Dogovori uvodni razgovor',
        en: 'Book an introductory call',
      },
    },
  },

  testimonials: {
    tag: {
      hr: 'Iskustva polaznica',
      en: 'Client Experiences',
    },
    prevAria: {
      hr: 'Prethodna iskustva',
      en: 'Previous testimonials',
    },
    nextAria: {
      hr: 'Sljedeća iskustva',
      en: 'Next testimonials',
    },
    imgAltParticipant: {
      hr: 'Polaznica',
      en: 'Participant',
    },
    imgAltExperience: {
      hr: 'Iskustvo rada',
      en: 'Working experience',
    },
    imgAltHappyClient: {
      hr: 'Zadovoljna klijentica',
      en: 'Satisfied client',
    },
    slides: [
      {
        id: 1,
        images: ['/image/Marin Medak 1.png', '/image/Marin Medak 2.png', '/image/marini-img.png'] as [string, string, string],
        quotes: {
          hr: [
            {
              id: 't1',
              quote: 'Prvi put u životu donijela sam odluku bez osjećaja krivnje i potrebe da se opravdavam drugima.',
              author: 'Marta M.',
              age: '36 g',
            },
            {
              id: 't2',
              quote: 'Shvatila sam koliko sam života gradila oko tuđih očekivanja.',
              author: 'Ivana K.',
              age: '42 g',
            },
          ],
          en: [
            {
              id: 't1',
              quote: 'For the first time in my life, I made a decision without guilt or the need to justify myself to others.',
              author: 'Marta M.',
              age: '36 y/o',
            },
            {
              id: 't2',
              quote: 'I realized how much of my life I had built around other people\'s expectations.',
              author: 'Ivana K.',
              age: '42 y/o',
            },
          ],
        },
      },
      {
        id: 2,
        images: ['/image/Marin Medak 2.png', '/image/Marin Medak 3.png', '/image/about-img.png'] as [string, string, string],
        quotes: {
          hr: [
            {
              id: 't3',
              quote: 'Naučila sam reći ne bez drhtanja u glasu. To mi je doslovno spasilo brak i donijelo mir koji godinama nisam osjetila.',
              author: 'Ana B.',
              age: '39 g',
            },
            {
              id: 't4',
              quote: 'Mislila sam da sam samo empatična, a zapravo sam bila kronično prestrašena od tuđeg nezadovoljstva.',
              author: 'Elena R.',
              age: '31 g',
            },
          ],
          en: [
            {
              id: 't3',
              quote: 'I learned to say no without a tremor in my voice. That literally saved my marriage and brought a peace I had not felt for years.',
              author: 'Ana B.',
              age: '39 y/o',
            },
            {
              id: 't4',
              quote: 'I thought I was just empathetic, but I was actually chronically terrified of other people\'s displeasure.',
              author: 'Elena R.',
              age: '31 y/o',
            },
          ],
        },
      },
      {
        id: 3,
        images: ['/image/Marin Medak 3.png', '/image/marini-img.png', '/image/about-img.png'] as [string, string, string],
        quotes: {
          hr: [
            {
              id: 't5',
              quote: 'Nakon 15 godina rada u korporaciji, napokon sam zatražila promaknuće i postavila granice oko radnog vremena.',
              author: 'Sanja V.',
              age: '45 g',
            },
            {
              id: 't6',
              quote: 'Ovaj proces nije bio lagan, ali je najvažnija stvar koju sam napravila za sebe i svoju djecu.',
              author: 'Katarina D.',
              age: '38 g',
            },
          ],
          en: [
            {
              id: 't5',
              quote: 'After 15 years working in corporate, I finally asked for a promotion and set clear boundaries around working hours.',
              author: 'Sanja V.',
              age: '45 y/o',
            },
            {
              id: 't6',
              quote: 'This process was not easy, but it is the most important thing I have ever done for myself and my children.',
              author: 'Katarina D.',
              age: '38 y/o',
            },
          ],
        },
      },
      {
        id: 4,
        images: ['/image/marini-img.png', '/image/about-img.png', '/image/Marin Medak 1.png'] as [string, string, string],
        quotes: {
          hr: [
            {
              id: 't7',
              quote: 'Prestala sam se ispričavati za to što postojim i imam potrebe. Marina me vodila s toliko mudrosti i topline.',
              author: 'Lana T.',
              age: '34 g',
            },
            {
              id: 't8',
              quote: 'Osjećaj slobode kada više ne analiziraš svaku izgovorenu riječ je neprocjenjiv.',
              author: 'Daria P.',
              age: '41 g',
            },
          ],
          en: [
            {
              id: 't7',
              quote: 'I stopped apologizing for simply existing and having needs. Marina guided me with so much wisdom and warmth.',
              author: 'Lana T.',
              age: '34 y/o',
            },
            {
              id: 't8',
              quote: 'The feeling of freedom when you no longer overanalyze every single spoken word is priceless.',
              author: 'Daria P.',
              age: '41 y/o',
            },
          ],
        },
      },
      {
        id: 5,
        images: ['/image/about-img.png', '/image/Marin Medak 1.png', '/image/Marin Medak 2.png'] as [string, string, string],
        quotes: {
          hr: [
            {
              id: 't9',
              quote: 'Najbolja investicija u vlastiti mentalni mir. Od dobre curice postala sam zrela žena sa stavom.',
              author: 'Nikolina Z.',
              age: '40 g',
            },
            {
              id: 't10',
              quote: 'Rad s Marinom otvorio mi je oči. Sada znam tko sam kad ne pokušavam ugoditi cijelom svijetu.',
              author: 'Mirna S.',
              age: '35 g',
            },
          ],
          en: [
            {
              id: 't9',
              quote: 'The best investment in my own mental peace. From a good girl, I became a mature woman with a backbone.',
              author: 'Nikolina Z.',
              age: '40 y/o',
            },
            {
              id: 't10',
              quote: 'Working with Marina opened my eyes. Now I know who I am when I am not trying to please the whole world.',
              author: 'Mirna S.',
              age: '35 y/o',
            },
          ],
        },
      },
    ],
  },

  about: {
    tag: {
      hr: 'O meni',
      en: 'About Me',
    },
    title: {
      hr: 'O Marini',
      en: 'About Marina',
    },
    bio: [
      {
        text: {
          hr: 'Godina je 2017. Zatvorila sam jedno životno poglavlje, a novo nikako nisam uspijevala započeti.',
          en: 'The year was 2017. I had closed one life chapter, but couldn\'t manage to begin a new one.',
        },
        bold: true,
      },
      {
        text: {
          hr: 'Bila sam u međuprostoru — s osjećajem neuspjeha, bez jasnog smjera i sa zidom ispred sebe.',
          en: 'I was in limbo — feeling like a failure, without clear direction, facing a solid wall.',
        },
      },
      {
        text: {
          hr: 'Tražeći pomoć za sebe, upisala sam NLP.',
          en: 'Seeking help for myself, I enrolled in NLP.',
        },
      },
      {
        text: {
          hr: 'I tada sam prvi put stvarno shvatila koliko se toga može promijeniti kada razumiješ vlastite obrasce i dobiješ prave alate, znanje i vodstvo.',
          en: 'And then, for the first time, I truly understood how much can change when you understand your own patterns and receive the right tools, knowledge, and guidance.',
        },
      },
      {
        text: {
          hr: 'Poželjela sam drugima prenijeti ono što sam sama iskusila.',
          en: 'I wanted to pass on to others what I had experienced myself.',
        },
      },
      {
        text: {
          hr: 'Danas radim sa ženama koje izvana djeluju sposobno, odgovorno i uspješno, a iznutra osjećaju da već predugo žive prema pravilima koja nisu njihova.',
          en: 'Today, I work with women who appear capable, responsible, and successful on the outside, but inside feel they have lived by rules that aren\'t theirs for far too long.',
        },
      },
      {
        text: {
          hr: 'Moj talent je prepoznati tko možeš postati — i što te još drži na mjestu.',
          en: 'My gift is recognizing who you can become — and what is still holding you back.',
        },
        bold: true,
      },
      {
        text: {
          hr: 'Zato nisam coach koji će ti samo postavljati pitanja.',
          en: 'That is why I am not a coach who will merely ask questions.',
        },
      },
      {
        text: {
          hr: 'Ja sam tvoj mentor kroz proces.',
          en: 'I am your mentor through the entire process.',
        },
        bold: true,
      },
      {
        text: {
          hr: 'Dajem ti alate, znanje, strukturu i podršku, ali cilj nije da ovisiš o meni. Cilj je upravo suprotan:',
          en: 'I provide you with tools, knowledge, structure, and support, but the goal is never for you to depend on me. The goal is the exact opposite:',
        },
      },
      {
        text: {
          hr: 'da ponovno vjeruješ sebi.',
          en: 'to trust yourself once again.',
        },
        bold: true,
      },
    ],
    ctaText: {
      hr: 'Dogovori uvodni razgovor',
      en: 'Book an introductory call',
    },
  },

  modals: {
    video: {
      title: { hr: 'Dobrodošla u svoj novi početak', en: 'Welcome to Your New Beginning' },
      description: {
        hr: 'Kratka 3-minutna poruka Marine o prvim koracima izlaska iz obrasca "dobre djevojčice" i vraćanju osobnog mira.',
        en: 'A short 3-minute message from Marina on the first steps out of the "good girl" pattern and reclaiming personal peace.',
      },
      playing: { hr: 'Reprodukcija u tijeku...', en: 'Playing now...' },
    },
    contact: {
      title: { hr: 'Dogovori uvodni razgovor', en: 'Book an Introductory Call' },
      subtitle: {
        hr: 'Ispuni kratki obrazac i javit ću ti se u roku od 24 sata kako bismo dogovorili termin.',
        en: 'Fill out this short form and I will get back to you within 24 hours to schedule a time.',
      },
      nameLabel: { hr: 'Ime i prezime', en: 'Full name' },
      namePlaceholder: { hr: 'Tvoje ime', en: 'Your name' },
      emailLabel: { hr: 'Email adresa', en: 'Email address' },
      emailPlaceholder: { hr: 'tvoj@email.com', en: 'your@email.com' },
      phoneLabel: { hr: 'Broj telefona (opcionalno)', en: 'Phone number (optional)' },
      phonePlaceholder: { hr: '+385 91 ...', en: '+385 91 ...' },
      topicLabel: { hr: 'Program ili tema koja te zanima', en: 'Program or topic of interest' },
      topicOptions: [
        { hr: 'Žena koja vodi svoj život (Premium 1:1)', en: 'A Woman Who Leads Her Life (Premium 1:1)' },
        { hr: 'Ključevi života (Mentalni reset)', en: 'Keys of Life (Mental Reset)' },
        { hr: 'Isključi MORAM. Uključi ŽELIM.', en: 'Turn off HAVE TO. Turn on WANT TO.' },
        { hr: 'Ukloni kočnice. Kreni u akciju. (Intenziv)', en: 'Release the Brakes. Take Action. (Intensive)' },
        { hr: 'Nisam sigurna — trebam preporuku', en: 'Not sure — I need guidance' },
      ],
      noteLabel: { hr: 'Kratka poruka (opcionalno)', en: 'Short message (optional)' },
      notePlaceholder: {
        hr: 'Napiši ukratko s čime se trenutno suočavaš...',
        en: 'Briefly share what you are currently facing...',
      },
      submitButton: { hr: 'Pošalji upit', en: 'Send inquiry' },
      submitting: { hr: 'Slanje...', en: 'Sending...' },
      successTitle: { hr: 'Poruka je poslana!', en: 'Message sent!' },
      successMessage: {
        hr: 'Hvala ti na javljanju. Odgovorit ću ti u najkraćem mogućem roku.',
        en: 'Thank you for reaching out. I will get back to you as soon as possible.',
      },
    },
    goodGirlInfo: {
      title: { hr: 'Tko je "dobra djevojčica"?', en: 'Who is the "good girl"?' },
      content: {
        hr: 'Sindrom "dobre djevojčice" nastaje u ranom djetinjstvu kada djevojčica nauči da su ljubav, pohvala i sigurnost uvjetovani poslušnošću, predviđanjem tuđih potreba i nepravljenjem "problema".\n\nU odrasloj dobi, ovaj obrazac se manifestira kao nemogućnost odbijanja, stalni osjećaj krivnje kad stavimo sebe na prvo mjesto, perfekcionizam i duboki strah od konflikta.',
        en: 'The "good girl" syndrome begins in early childhood when a girl learns that love, praise, and safety are conditional on obedience, anticipating others\' needs, and never causing "problems".\n\nIn adulthood, this pattern manifests as inability to say no, constant guilt whenever putting yourself first, perfectionism, and a deep fear of conflict.',
      },
      bullets: {
        hr: [
          'Kronično preuzimanje tuđe odgovornosti',
          'Strah od izražavanja neslaganja ili ljutnje',
          'Zanemarivanje vlastitog tijela, odmora i snova',
          'Potraga za vanjskim odobrenjem prije donošenja odluka',
        ],
        en: [
          'Chronically taking on other people\'s responsibility',
          'Fear of expressing disagreement or anger',
          'Neglecting your own body, rest, and dreams',
          'Seeking external approval before making choices',
        ],
      },
    },
    processInfo: {
      title: { hr: 'Kako izgleda proces transformacije?', en: 'What does the transformation process look like?' },
      content: {
        hr: 'Proces se ne bavi samo površinskim savjetima poput "samo reci ne". Umjesto toga, radimo na razini regulacije živčanog sustava i transformacije temeljnih uvjerenja.\n\nKroz 3 faze rada prolazimo put od uočavanja automatske reakcije do potpunog unutarnjeg mira i slobode izbora.',
        en: 'The process goes far beyond superficial advice like "just say no". Instead, we work at the level of nervous system regulation and transformation of core beliefs.\n\nThrough 3 deliberate phases, we travel the path from noticing automatic reactions to experiencing genuine inner peace and true freedom of choice.',
      },
      bullets: {
        hr: [
          '1. Faza svijesti: mapiranje tvojih specifičnih okidača i obrazaca',
          '2. Faza regulacije: smirivanje tjelesnog osjećaja straha od odbačenosti',
          '3. Faza integracije: postavljanje granica s ljubavlju i jasnoćom',
        ],
        en: [
          '1. Awareness Phase: mapping your specific triggers and patterns',
          '2. Regulation Phase: calming somatic fears of rejection',
          '3. Integration Phase: establishing boundaries with love and clarity',
        ],
      },
    },
    programDetails: {
      whatsIncluded: { hr: 'Što uključuje rad:', en: 'What\'s included:' },
      closeAria: { hr: 'Zatvori', en: 'Close' },
    },
  },

  programDetailPages: {
    backToHome: { hr: 'Naslovnica', en: 'Home' },
    stepLabel: { hr: 'Korak', en: 'Step' },
    otherProgramsTitle: { hr: 'Želiš istražiti i druge opcije?', en: 'Want to explore other options?' },
    otherProgramsSubtitle: {
      hr: 'Usporedi ostale formate rada i odaberi program koji trenutno najbolje odgovara tvojoj situaciji.',
      en: 'Compare other ways of working and choose the program that best fits your current situation.',
    },
    otherProgramsTag: { hr: 'Navigacija između programa', en: 'Browse Programs' },
    openProgram: { hr: 'Otvori program', en: 'Open program' },
    orStartWithChat: { hr: 'Ili kreni od razgovora.', en: 'Or start with a conversation.' },
    bookCall: { hr: 'Dogovori uvodni razgovor', en: 'Book an introductory call' },
    nextStepTag: { hr: 'Sljedeći korak', en: 'Next Step' },
  },

  footer: {
    brandName: 'MARINA NOVAKOVIĆ',
    tagline: {
      hr: 'Programi i individualni rad za žene koje su spremne napustiti ulogu udovoljavanja i početi živjeti slobodno, autentično i po svojim pravilima.',
      en: 'Programs and individual coaching for women ready to leave the people-pleasing role and begin living freely, authentically, and by their own rules.',
    },
    quickLinks: { hr: 'Brzi linkovi', en: 'Quick Links' },
    links: {
      home: { hr: 'Naslovnica', en: 'Home' },
      goodGirl: { hr: 'Tko je dobra djevojčica', en: 'Who is the good girl' },
      programs: { hr: 'Programi i radionice', en: 'Programs & Workshops' },
      testimonials: { hr: 'Iskustva klijentica', en: 'Client Testimonials' },
      about: { hr: 'O meni', en: 'About Me' },
    },
    contactTitle: { hr: 'Kontakt & Konzultacije', en: 'Contact & Consultations' },
    rights: { hr: 'Sva prava pridržana.', en: 'All rights reserved.' },
  },
};
