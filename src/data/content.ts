import { Program, TestimonialSlide } from '../types';

export const HERO_CONTENT = {
  headline: 'OD “DOBRE DJEVOJČICE”\nDO ŽENE KOJA VODI SVOJ ŽIVOT.',
  subtitle: 'Za žene koje su cijeli život živjele po tuđim pravilima i sada žele početi živjeti svoj život.',
  ctaButton: 'Započni svoj proces',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1800&q=85',
};

export const PHILOSOPHY_CONTENT = {
  part1: [
    'Postoji trenutak kada žena shvati da više ne želi živjeti život koji je izgradila oko očekivanja drugih.',
    'Izvana sve može izgledati dobro: karijera, odnosi, funkcionalnost.',
  ],
  part2: [
    'Ali iznutra osjeća: umor od prilagođavanja, unutarnji konflikt i osjećaj da ne živi svoj život.',
    'Moj rad temelji se na prepoznavanju i transformaciji identiteta ',
    'dobre djevojčice',
    ' — obrasca zbog kojeg žena prestaje vjerovati sebi i počinje živjeti prema tuđim pravilima.',
  ],
};

export const TWO_CARDS_CONTENT = {
  leftCard: {
    title: 'TKO JE “DOBRA DJEVOJČICA”?',
    description: '"Dobra djevojčica" nije osobnost.\nTo je obrazac ponašanja razvijen kroz:',
    bullets: [
      'Prilagođavanje',
      'Traženje odobrenja',
      'Izbjegavanje konflikta',
      'Potiskivanje vlastitih želja',
    ],
    bottomText: 'I zbog toga žena često ne donosi odluke koje zna da želi donijeti.',
    buttonText: 'Saznaj više',
  },
  rightCard: {
    title: 'KAKO IZGLEDA RAD SA MNOM?',
    subtitle: 'U radu 1:1 zajedno otkrivamo:',
    bullets: [
      'gdje si izgubila vlastiti autoritet',
      'zašto ostaješ na istom mjestu',
      'što te vraća starim obrascima',
    ],
    closingLines: [
      'Cilj nije postati "bolja".',
      'Cilj je postati svoja.',
    ],
    buttonText: 'Kako izgleda proces',
  },
};

export const PROGRAMS: Program[] = [
  {
    id: 'sindrom-dobre-djevojcice',
    title: 'Sindrom dobre djevojčice',
    category: 'webinar',
    categoryLabel: 'Webinar',
    description: 'Online predavanje i interaktivna radionica o korijenima potrebe za udovoljavanjem, strahu od tuđeg neodobravanja i prvim koracima postavljanja granica.',
    duration: '2 sata predavanje + Q&A',
    actionText: 'Saznaj više',
    image: '/image/Pety - 17cm 1.png',
    price: '45 €',
    bullets: [
      'Prepoznavanje nesvjesnih okidača udovoljavanja',
      'Zašto riječ "NE" stvara osjećaj krivnje',
      'Praktične vježbe za svakodnevne situacije',
      'Snimka dostupna 6 mjeseci',
    ],
  },
  {
    id: 'otpor-prema-promjeni',
    title: 'Otpor prema promjeni',
    category: 'mini-trening',
    categoryLabel: 'Mini trening',
    description: 'Intenzivan 3-dnevni vođeni trening za razumijevanje sabotirajućih mehanizama mozga kada pokušavamo izaći iz poznate uloge.',
    duration: '3 dana radnih materijala i vježbi',
    actionText: 'Prijavi se',
    image: '/image/Pety - 17cm 1 (1).png',
    price: '95 €',
    bullets: [
      'Alati za savladavanje anksioznosti pri postavljanju granica',
      'Dnevnički upiti za otkrivanje autentičnih potreba',
      'Audio vođene refleksije',
    ],
  },
  {
    id: 'izlaz-iz-sindroma',
    title: 'Izlaz iz sindroma dobre djevojčice',
    category: 'mini-program',
    categoryLabel: 'Mini program',
    description: '4-tjedni strukturirani grupni program s tjednim modulima: uvjerenja → obrasci → reakcije → izbor. Promijeni automatizme u svjesne odluke.',
    duration: '4 tjedna / 4 modula',
    actionText: 'Detalji programa',
    image: '/image/Pety - 17cm 1 (2).png',
    price: '280 €',
    bullets: [
      '4 tjedna video lekcija i radnih bilježnica',
      'Tjedni live pozivi za pitanja i podršku',
      'Zatvorena sigurna zajednica polaznica',
      'Certificirani alati kognitivno-bihevioralnog pristupa',
    ],
  },
  {
    id: 'zena-koja-vodi-svoj-zivot',
    title: 'Žena koja vodi svoj život',
    category: 'premium',
    categoryLabel: 'Premium 1:1 program',
    description: 'Duboki, individualni 3-mjesečni mentorski rad. Potpuno prilagođen tvojoj životnoj situaciji, dinamici obitelji i karijernim ciljevima.',
    duration: '3 mjeseca / 12 susreta 1:1',
    actionText: 'Rezerviraj razgovor',
    image: '/image/Pety - 17cm 1 (3).png',
    price: 'Na upit (ograničen broj mjesta)',
    bullets: [
      '12 individualnih sesija po 60 minuta (Zoom ili uživo)',
      'Kontinuirana WhatsApp/glasovna podrška između susreta',
      'Izgradnja nepokolebljivog unutarnjeg autoriteta',
      'Integracija u sve sfere svakodnevnog života',
    ],
  },
];

export const TESTIMONIAL_SLIDES: TestimonialSlide[] = [
  {
    id: 1,
    quotes: [
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
  },
  {
    id: 2,
    quotes: [
      {
        id: 't3',
        quote: 'Naučila sam reći "ne" bez drhtanja u glasu. To mi je doslovno spasilo brak i donijelo mir koji godinama nisam osjetila.',
        author: 'Ana B.',
        age: '39 g',
      },
      {
        id: 't4',
        quote: 'Mislila sam da sam samo "empatična", a zapravo sam bila kronično prestrašena od tuđeg nezadovoljstva.',
        author: 'Elena R.',
        age: '31 g',
      },
    ],
  },
  {
    id: 3,
    quotes: [
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
  },
  {
    id: 4,
    quotes: [
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
  },
  {
    id: 5,
    quotes: [
      {
        id: 't9',
        quote: 'Najbolja investicija u vlastiti mentalni mir. Od "dobre curice" postala sam zrela žena sa stavom.',
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
  },
];

export const ABOUT_MARINA = {
  tag: 'O Marini',
  title: 'Marina Novaković, mag. psych. & Transformacijski coach',
  intro: 'Nakon više od 12 godina rada s više od 600 žena, vidjela sam isti obrazac koji se ponavlja: iznimno sposobne, tople i marljive žene koje duboko u sebi nose iscrpljujući teret "biti dobra svima".',
  p1: 'Odrastanje u okruženju gdje je ljubav bila uvjetovana poslušnošću stvara nevidljivi kavez. Moja misija nije naučiti te novim tehnikama manipulacije ili hladnoće, već ti pomoći da izgradiš unutarnju snagu iz koje prirodno proizlazi poštovanje prema sebi.',
  credentials: [
    'Magistra psihologije (FFZG)',
    'Certificirani Somatic Experiencing & ACT praktičar',
    'Preko 1000 sati individualnog i grupnog rada',
    'Autorica programa "Žena koja vodi svoj život"',
  ],
};
