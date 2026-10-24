import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const pagesDir = resolve(root, 'kalp-admin/pages');
mkdirSync(pagesDir, { recursive: true });

// Read existing home.json
const homeJsonPath = resolve(root, 'kalp-admin/homepage/home.json');
const homePage = JSON.parse(readFileSync(homeJsonPath, 'utf-8'));

// 1. Programs Overview Page
const programsPage = {
  slug: "programs",
  title: {
    hr: "Programi i radionice",
    en: "Programs & Workshops"
  },
  metaTitle: {
    hr: "Programi i radionice | Marina Coaching · Vivi Vita",
    en: "Programs & Workshops | Marina Coaching · Vivi Vita"
  },
  metaDescription: {
    hr: "Individualni rad i intenzivni programi za žene koje žele prekinuti obrazac dobre djevojčice i vratiti sebi unutarnji autoritet.",
    en: "Individual coaching and intensive workshops for women ready to break the good-girl pattern and reclaim inner authority."
  },
  isPublished: true,
  category: "OVERVIEW",
  content: [
    {
      id: "programs-hero-001",
      type: "pageHeader",
      layout: "centered",
      adminTitle: "Programs Header",
      props: {
        badge: { hr: "Strukturirani procesi", en: "Structured processes" },
        heading: { hr: "Programi i individualni rad", en: "Programs & Individual Coaching" },
        subheading: {
          hr: "Od kratkog uvodnog reseta do višemjesečne transformacije. Pronađi format koji najviše odgovara tvojoj trenutnoj točki na putu.",
          en: "From a quick mental reset to an extensive multi-month transformation. Find the format best suited to your current journey."
        }
      }
    },
    {
      id: "programs-grid-001",
      type: "programCardsGrid",
      layout: "cards-grid",
      adminTitle: "All Programs Grid",
      props: {
        items: [
          {
            id: "kljucevi-zivota",
            slug: "kljucevi-zivota",
            category: "MENTALNI RESET",
            title: { hr: "Ključevi života", en: "Keys to Life" },
            subtitle: { hr: "Vrati sebi pravo na vlastiti izbor.", en: "Reclaim your right to your own choice." },
            meta: "60 minuta · 39 €",
            price: "39 €",
            duration: "60 min",
            href: "/programi/kljucevi-zivota",
            image: "/image/Pety - 17cm 1.png"
          },
          {
            id: "iskljuci-moram-ukljuci-zelim",
            slug: "iskljuci-moram-ukljuci-zelim",
            category: "MENTALNI RESET",
            title: { hr: "Isključi MORAM. Uključi ŽELIM.", en: "Turn off HAVE TO. Turn on WANT TO." },
            subtitle: { hr: "Manje pritiska. Više izbora.", en: "Less pressure. More choice." },
            meta: "90 minuta · 49 €",
            price: "49 €",
            duration: "90 min",
            href: "/programi/iskljuci-moram-ukljuci-zelim",
            image: "/image/Pety - 17cm 1 (1).png"
          },
          {
            id: "ukloni-kocnice-kreni-u-akciju",
            slug: "ukloni-kocnice-kreni-u-akciju",
            category: "DVODNEVNI INTENZIV",
            title: { hr: "Ukloni kočnice. Kreni u akciju.", en: "Release Brakes. Take Action." },
            subtitle: { hr: "Znaš što želiš. Ali nešto te svaki put zaustavi.", en: "You know what you want. But something holds you back." },
            meta: "2 dana × 120 minuta · 250 €",
            price: "250 €",
            duration: "2 dana × 120 min",
            href: "/programi/ukloni-kocnice-kreni-u-akciju",
            image: "/image/Pety - 17cm 1 (2).png"
          },
          {
            id: "zena-koja-vodi-svoj-zivot",
            slug: "zena-koja-vodi-svoj-zivot",
            category: "PREMIUM 1:1 PROGRAM",
            title: { hr: "Žena koja vodi svoj život", en: "A Woman Leading Her Life" },
            subtitle: { hr: "Od „dobre djevojčice“ do žene koja vjeruje sebi i svojim odlukama.", en: "From the good girl to a woman who trusts her decisions." },
            meta: "Individualni 1:1 program · 1.500 €",
            price: "1.500 €",
            duration: "3-6 mjeseci",
            href: "/programi/zena-koja-vodi-svoj-zivot",
            image: "/image/Pety - 17cm 1 (3).png"
          }
        ]
      }
    }
  ]
};

// 2. Program: Ključevi života
const kljuceviZivotaPage = {
  slug: "kljucevi-zivota",
  title: {
    hr: "Ključevi života",
    en: "Keys to Life"
  },
  metaTitle: {
    hr: "Ključevi života | Mentalni Reset · Marina Coaching",
    en: "Keys to Life | Mental Reset · Marina Coaching"
  },
  metaDescription: {
    hr: "Vrati sebi pravo na vlastiti izbor. 60 minuta individualnog rada.",
    en: "Reclaim your right to your own choices. 60 minutes of transformational work."
  },
  isPublished: true,
  category: "MENTALNI RESET",
  props: {
    category: "MENTALNI RESET",
    price: "39 €",
    duration: "60 minuta",
    meta: "60 minuta · 39 €",
    cta: "Prijavi se",
    image: "/image/Pety - 17cm 1.png"
  },
  content: [
    {
      id: "hero-kz-001",
      type: "programHero",
      adminTitle: "Program Hero",
      props: {
        category: "MENTALNI RESET",
        title: { hr: "Ključevi života", en: "Keys to Life" },
        subtitle: { hr: "Vrati sebi pravo na vlastiti izbor.", en: "Reclaim your right to your own choice." },
        intro: {
          hr: "Cijeli si život bila uzorna, odgovorna i „dobra“. I možda danas shvaćaš da previše toga radiš kako bi drugi bili zadovoljni tobom — dok svoje potrebe stalno stavljaš na čekanje.",
          en: "All your life you have been exemplary, responsible, and good. Perhaps today you realize you do too much simply to keep everyone satisfied—while putting your own needs on hold."
        },
        meta: "60 minuta · 39 €",
        cta: "Prijavi se"
      }
    },
    {
      id: "section-kz-001",
      type: "programSection",
      adminTitle: "Je li ovo za tebe?",
      props: {
        eyebrow: "Je li ovo za tebe?",
        heading: "Možda ti je vrijeme vratiti ključeve sebi ako…",
        bullets: [
          "često govoriš DA i kada želiš reći NE",
          "osjećaš grižnju savjesti kada staviš sebe na prvo mjesto",
          "stalno razmišljaš hoće li se netko razočarati tvojom odlukom",
          "imaš osjećaj da živiš prema očekivanjima drugih",
          "znaš da bi nešto napravila drugačije, ali se teško odlučuješ na to",
          "osjećaš da si odgovorna za tuđe emocije i zadovoljstvo"
        ]
      }
    },
    {
      id: "section-kz-002",
      type: "programSection",
      adminTitle: "Što se zapravo događa?",
      props: {
        eyebrow: "Što se zapravo događa?",
        heading: "Tko zapravo drži ključeve tvog života?",
        copy: [
          "Kada si dugo živjela prema tuđim očekivanjima, lako je izgubiti osjećaj da ti sama odlučuješ.",
          "Možda su to roditelji, partner, posao, autoriteti ili jednostavno pravila koja si kroz godine usvojila kao svoja.",
          "„Moraš biti dobra.“ „Ne smiješ pogriješiti.“ „Nemoj razočarati druge.“ „Budi odgovorna.“",
          "S vremenom više ni ne primjećuješ da prema tim pravilima donosiš odluke.",
          "Ovaj rad počinje upravo tamo — osvještavanjem tko danas zapravo upravlja tvojim izborima."
        ]
      }
    },
    {
      id: "section-kz-003",
      type: "programSection",
      adminTitle: "Što radimo?",
      props: {
        eyebrow: "Što radimo?",
        heading: "U 60 minuta vraćamo ti ono što je tvoje.",
        copy: [
          "Zajedno mapiramo situacije u kojima osjećaš najveći pritisak i otkrivamo čija očekivanja pokušavaš ispuniti.",
          "Kroz vođeni razgovor i vježbu „Vraćanje ključeva“ razdvajamo tvoju osobnu vrijednost od tuđih očekivanja."
        ],
        bullets: ["pogrešku", "NE", "nesavršenost", "vlastiti izbor", "vlastite odluke"]
      }
    },
    {
      id: "section-kz-004",
      type: "programSection",
      adminTitle: "Što nosiš sa sobom?",
      props: {
        eyebrow: "Što nosiš sa sobom?",
        heading: "Ne odlaziš samo s uvidom.",
        copy: [
          "Nakon ovog rada jasnije vidiš čija očekivanja nosiš i gdje si svoj život počela prilagođavati drugima.",
          "Vraćaš sebi dio resursa koje si kroz godine potisnula — pravo na pogrešku, slobodu, hrabrost i mogućnost da kažeš NE.",
          "I radiš jedan konkretan korak kojim ćeš provjeriti kako izgleda kada ponovno ti držiš ključeve svog života."
        ]
      }
    },
    {
      id: "cta-kz-001",
      type: "finalCta",
      adminTitle: "Final CTA",
      props: {
        heading: "Vrijeme je da ključevi ponovno budu kod tebe.",
        cta: "Prijavi se na Mentalni Reset",
        supportingText: "60 minuta · 39 €"
      }
    }
  ]
};

// 3. Program: Isključi MORAM. Uključi ŽELIM.
const moramZelimPage = {
  slug: "iskljuci-moram-ukljuci-zelim",
  title: {
    hr: "Isključi MORAM. Uključi ŽELIM.",
    en: "Turn off HAVE TO. Turn on WANT TO."
  },
  metaTitle: {
    hr: "Isključi MORAM. Uključi ŽELIM. | Marina Coaching",
    en: "Turn off HAVE TO. Turn on WANT TO. | Marina Coaching"
  },
  metaDescription: {
    hr: "Manje pritiska. Više izbora. 90 minuta fokusiranog rada.",
    en: "Less pressure. More choice. 90 minutes of coaching."
  },
  isPublished: true,
  category: "MENTALNI RESET",
  props: {
    category: "MENTALNI RESET",
    price: "49 €",
    duration: "90 minuta",
    meta: "90 minuta · 49 €",
    cta: "Prijavi se",
    image: "/image/Pety - 17cm 1 (1).png"
  },
  content: [
    {
      id: "hero-mz-001",
      type: "programHero",
      adminTitle: "Program Hero",
      props: {
        category: "MENTALNI RESET",
        title: { hr: "Isključi MORAM. Uključi ŽELIM.", en: "Turn off HAVE TO. Turn on WANT TO." },
        subtitle: { hr: "Manje pritiska. Više izbora.", en: "Less pressure. More choice." },
        intro: {
          hr: "Ako ti se čini da je cijeli život postao popis stvari koje moraš napraviti, vrijeme je zastati i pogledati koliko ti taj osjećaj pritiska zapravo uzima.",
          en: "If life has become a relentless list of things you must do, it is time to pause and examine how much that constant pressure costs you."
        },
        meta: "90 minuta · 49 €",
        cta: "Prijavi se"
      }
    },
    {
      id: "section-mz-001",
      type: "programSection",
      adminTitle: "Prepoznaješ li se?",
      props: {
        eyebrow: "Prepoznaješ li se?",
        heading: "Koliko toga u svom životu radiš jer „moraš“?",
        copy: [
          "Moram ustati. Moram na posao. Moram ovo završiti. Moram biti dobra. Moram ispuniti očekivanja. Moram još ovo napraviti.",
          "Kada se „moram“ nakupi, život počinje izgledati kao beskrajan niz obaveza.",
          "Pritisak raste, energija pada, a ono što zapravo želiš sve se teže čuje."
        ]
      }
    },
    {
      id: "section-mz-002",
      type: "programSection",
      adminTitle: "Moram nije samo riječ",
      props: {
        eyebrow: "Moram nije samo riječ",
        heading: "„Moram“ stvara pritisak. „Želim“ vraća izbor.",
        copy: [
          "U ovom radu istražujemo što se događa kada svakodnevne obaveze promatraš kroz jezik „moram“.",
          "Primjećujemo kako se mijenja tvoje stanje kada istu situaciju formuliraš kao „želim“ ili „biram“.",
          "Ne radi se o tome da sve što trebaš napraviti odjednom postane zabavno.",
          "Radi se o tome da ponovno vidiš da imaš izbor."
        ]
      }
    },
    {
      id: "section-mz-003",
      type: "programSteps",
      adminTitle: "Od MORAŠ prema ŽELIM",
      props: {
        eyebrow: "Što radimo?",
        heading: "Od MORAŠ prema ŽELIM.",
        steps: [
          { title: "Osvještavamo tvoja „moram“.", copy: ["Prepoznajemo gdje si sama sebi nametnula pritisak."] },
          { title: "Primjećujemo reakciju tijela.", copy: ["Istražujemo kako se osjećaš kada kažeš „moram“, a kako kada kažeš „želim“ ili „biram“."] },
          { title: "Mijenjamo fokus.", copy: ["Umjesto da stalno gledaš ono što ne želiš, definiramo prema čemu se želiš kretati."] },
          { title: "Definiramo konkretan korak.", copy: ["Iz energije „želim“ biramo jedan mali korak koji možeš napraviti odmah."] }
        ]
      }
    },
    {
      id: "section-mz-004",
      type: "programSection",
      adminTitle: "Magnetska linija",
      props: {
        eyebrow: "Magnetska linija",
        heading: "Ne ostajemo samo na razgovoru.",
        copy: [
          "Kroz vježbu Magnetska linija povezujemo tvoju sadašnjost s bliskom budućnošću u kojoj živiš više iz „želim“ i „biram“.",
          "Ne tražimo savršen plan.",
          "Tražimo ono prema čemu te stvarno privlači krenuti."
        ]
      }
    },
    {
      id: "section-mz-005",
      type: "programSection",
      adminTitle: "Rezultat",
      props: {
        eyebrow: "Rezultat",
        heading: "Što dobivaš?",
        bullets: [
          "jasniji uvid u to gdje te „moram“ drži u pritisku",
          "sposobnost prepoznati kada sama sebi stvaraš nepotreban pritisak",
          "novi način formuliranja izbora",
          "jasniji fokus na ono što želiš, umjesto na ono što želiš izbjeći",
          "jedan konkretan korak prema onome što biraš"
        ]
      }
    },
    {
      id: "cta-mz-001",
      type: "finalCta",
      adminTitle: "Final CTA",
      props: {
        heading: "Ne moraš još više stisnuti zube. Možda trebaš vratiti sebi izbor.",
        cta: "Prijavi se na Mentalni Reset",
        supportingText: "90 minuta · 49 €"
      }
    }
  ]
};

// 4. Program: Ukloni kočnice. Kreni u akciju.
const ukloniKocnicePage = {
  slug: "ukloni-kocnice-kreni-u-akciju",
  title: {
    hr: "Ukloni kočnice. Kreni u akciju.",
    en: "Release Brakes. Take Action."
  },
  metaTitle: {
    hr: "Ukloni kočnice. Kreni u akciju. | Dvodnevni intenziv · Marina Coaching",
    en: "Release Brakes. Take Action. | Two-Day Intensive · Marina Coaching"
  },
  metaDescription: {
    hr: "Znaš što želiš. Ali nešto te svaki put zaustavi. Dvodnevni intenziv (2 × 120 min).",
    en: "You know what you want. But something holds you back. Two-day intensive workshop."
  },
  isPublished: true,
  category: "DVODNEVNI INTENZIV",
  props: {
    category: "DVODNEVNI INTENZIV",
    price: "250 €",
    duration: "2 dana × 120 minuta",
    meta: "2 dana × 120 minuta · 250 €",
    cta: "Prijavi se",
    image: "/image/Pety - 17cm 1 (2).png"
  },
  content: [
    {
      id: "hero-uk-001",
      type: "programHero",
      adminTitle: "Program Hero",
      props: {
        category: "DVODNEVNI INTENZIV",
        title: { hr: "Ukloni kočnice. Kreni u akciju.", en: "Release Brakes. Take Action." },
        subtitle: { hr: "Znaš što želiš. Ali nešto te svaki put zaustavi.", en: "You know what you want. But something stops you every time." },
        intro: {
          hr: "Imaš cilj, ideju ili odluku. Znaš prema čemu želiš krenuti. A onda se pojave strah, sumnja, odgađanje i deset dobrih razloga zašto još nije vrijeme.",
          en: "You have a vision and goal. But fear, doubt, and procrastination kick in with ten reasons why now isn't the time."
        },
        meta: "2 dana × 120 minuta · 250 €",
        cta: "Prijavi se"
      }
    },
    {
      id: "section-uk-001",
      type: "programSection",
      adminTitle: "Za koga je program?",
      props: {
        eyebrow: "Za koga je program?",
        heading: "Ovaj intenziv je za tebe ako…",
        bullets: [
          "znaš što želiš, ali ne poduzimaš konkretne korake",
          "stalno odgađaš ono što ti je važno",
          "čim trebaš krenuti, um ti počinje nuditi prepreke i razloge zašto ne možeš",
          "osjećaš se zaglavljeno ili paralizirano",
          "govoriš si „nisam ja za to“, „ne znam odakle krenuti“ ili „što ako ne uspijem?“",
          "želiš promjenu, ali dio tebe kao da je istovremeno pokušava zaustaviti"
        ]
      }
    },
    {
      id: "section-uk-002",
      type: "programSection",
      adminTitle: "Što je ispod otpora?",
      props: {
        eyebrow: "Što je ispod otpora?",
        heading: "Možda problem nije u tome što ne znaš što želiš.",
        copy: [
          "Ponekad cilj koji svjesno želiš samo je površina.",
          "Ispod njega mogu biti druge potrebe, strahovi i očekivanja koja stvaraju otpor.",
          "Zato nije dovoljno samo reći sebi: „Pokreni se.“",
          "Prvo treba razumjeti što te zapravo drži na mjestu i čemu taj otpor služi.",
          "Kada razumiješ pozadinu otpora, možeš početi mijenjati odnos prema njemu."
        ]
      }
    },
    {
      id: "section-uk-003",
      type: "programSection",
      adminTitle: "Dan 1 — Razbijamo otpore",
      props: {
        eyebrow: "Day 1",
        heading: "DAN 1 — Razbijamo otpore",
        copy: ["Prvog dana istražujemo što se događa kada zamisliš da je odluka koju odgađaš već realizirana."],
        bullets: [
          "Što te trenutno zaustavlja?",
          "Kako se osjećaš kada ono što želiš nemaš?",
          "Koje posljedice to ima na tvoj život?",
          "Kako bi se osjećala kada bi to ostvarila?",
          "Što bi se pozitivno promijenilo?"
        ]
      }
    },
    {
      id: "section-uk-004",
      type: "programSection",
      adminTitle: "Dan 2 — Nova verzija postaje poznata",
      props: {
        eyebrow: "Day 2",
        heading: "DAN 2 — Nova verzija postaje poznata",
        copy: [
          "Nije dovoljno samo vizualizirati ono što želiš. Ako ti je željeno stanje potpuno nepoznato, može djelovati daleko i strano.",
          "Zato drugi dan radimo na tome da novu stvarnost učinimo poznatijom i prirodnijom.",
          "Kroz vježbu s tri pozicije prolazimo kroz stanje nedostatka → neutralno stanje → stanje ostvarene želje.",
          "Krećemo se između tih pozicija i kroz vođena pitanja mijenjamo način na koji doživljavaš ono što želiš."
        ]
      }
    },
    {
      id: "section-uk-005",
      type: "programSection",
      adminTitle: "Format",
      props: {
        eyebrow: "Format",
        heading: "Kako izgleda intenziv?",
        copy: [
          "2 dana rada. 120 minuta dnevno.",
          "Rad se može odvijati individualno ili u maloj grupi do 8 sudionica.",
          "Cilj nije samo razumjeti zašto stojiš na mjestu.",
          "Cilj je napraviti prostor za ono prema čemu želiš krenuti."
        ]
      }
    },
    {
      id: "cta-uk-001",
      type: "finalCta",
      adminTitle: "Final CTA",
      props: {
        heading: "Znaš što želiš. Vrijeme je vidjeti što te zaustavlja.",
        cta: "Prijavi se na intenziv",
        supportingText: "2 dana × 120 minuta · 250 €"
      }
    }
  ]
};

// 5. Program: Žena koja vodi svoj život
const zenaVodiZivotPage = {
  slug: "zena-koja-vodi-svoj-zivot",
  title: {
    hr: "Žena koja vodi svoj život",
    en: "A Woman Leading Her Life"
  },
  metaTitle: {
    hr: "Žena koja vodi svoj život | Premium 1:1 Coaching · Marina",
    en: "A Woman Leading Her Life | Premium 1:1 Coaching · Marina"
  },
  metaDescription: {
    hr: "Od dobre djevojčice do žene koja vjeruje sebi i svojim odlukama. Cjeloviti višemjesečni mentorski proces.",
    en: "From good girl to a woman who trusts herself and her choices. Comprehensive 1:1 mentoring."
  },
  isPublished: true,
  category: "PREMIUM 1:1 PROGRAM",
  props: {
    category: "PREMIUM 1:1 PROGRAM",
    price: "1.500 €",
    duration: "3-6 mjeseci",
    meta: "Individualni 1:1 program · 1.500 €",
    cta: "Rezerviraj uvodni razgovor",
    image: "/image/Pety - 17cm 1 (3).png"
  },
  content: [
    {
      id: "hero-zv-001",
      type: "programHero",
      adminTitle: "Program Hero",
      props: {
        category: "PREMIUM 1:1 PROGRAM",
        title: { hr: "Žena koja vodi svoj život", en: "A Woman Leading Her Life" },
        subtitle: { hr: "Od „dobre djevojčice“ do žene koja vjeruje sebi i svojim odlukama.", en: "From the good girl to a woman who trusts her decisions." },
        intro: {
          hr: "Dubinski individualni proces za ženu koja više ne želi samo riješiti jedan problem, nego razumjeti i promijeniti obrazac iz kojeg živi.",
          en: "An in-depth personal process for the woman who desires to fundamentally transform the pattern from which she operates."
        },
        meta: "Individualni 1:1 program · 1.500 €",
        cta: "Rezerviraj uvodni razgovor"
      }
    },
    {
      id: "section-zv-001",
      type: "programSection",
      adminTitle: "Prepoznaješ li svoj trenutak?",
      props: {
        eyebrow: "Prepoznaješ li svoj trenutak?",
        heading: "Možda izvana sve izgleda dobro. Ali ti znaš da nešto više nije tvoje.",
        copy: [
          "Možda si obrazovana, sposobna, odgovorna i uspješna.",
          "Možda si cijeli život bila ona koja će uspjeti, ona koja može više, ona koja ne smije razočarati.",
          "A danas se pitaš: Što se dogodilo sa mnom? Zašto nemam više ambicije? Zašto samo odrađujem dane? Zašto znam da želim promjenu, ali se ne mogu pokrenuti? Što ja zapravo želim?",
          "Možda ne nedostaješ sebi zato što si izgubila sposobnost.",
          "Možda si izgubila kontakt sa sobom dok si pokušavala postati ono što se od tebe očekivalo."
        ]
      }
    },
    {
      id: "section-zv-002",
      type: "programSection",
      adminTitle: "Što je dobra djevojčica?",
      props: {
        eyebrow: "Što je „dobra djevojčica“?",
        heading: "„Dobra djevojčica“ nije tko jesi. To je obrazac koji si naučila.",
        copy: [
          "To je dio tebe koji je naučio da je sigurnije biti dobra, uspješna, odgovorna, prilagodljiva i prihvaćena.",
          "Da je bolje ne razočarati druge. Da pogreška može značiti neuspjeh. Da tvoju vrijednost potvrđuju rezultati, pohvale i tuđe zadovoljstvo.",
          "Taj obrazac možda ti je nekada pomagao.",
          "Ali ono što ti je nekada pomagalo da budeš prihvaćena, danas može upravljati tvojim životom."
        ]
      }
    },
    {
      id: "section-zv-003",
      type: "programSteps",
      adminTitle: "Tri stupa procesa",
      props: {
        eyebrow: "Što radimo?",
        heading: "Ne radimo na tome da postaneš „bolja“. Radimo na tome da postaneš svoja.",
        steps: [
          { title: "01 — Osvještavanje", copy: ["Prepoznajemo obrasce, okidače, uvjerenja i vanjske autoritete koji su godinama utjecali na tvoje odluke."] },
          { title: "02 — Transformacija", copy: ["Radimo na strahu od neuspjeha, ograničavajućim uvjerenjima, otporima, samosabotaži i obrascima koji te vraćaju na staro."] },
          { title: "03 — Izgradnja novog identiteta", copy: ["Definiramo što zaista želiš, vraćamo sigurnost u vlastite odluke i gradimo identitet koji više nije određen tuđim očekivanjima."] }
        ]
      }
    },
    {
      id: "section-zv-004",
      type: "programTimeline",
      adminTitle: "9 Faza Programa",
      props: {
        eyebrow: "Put kroz program",
        heading: "Od rušenja starog obrasca do nove verzije tebe.",
        timeline: [
          { title: "Faza 1 — Vraćanje autoriteta sebi", copy: ["Prepoznaješ čija očekivanja nosiš i vraćamo ključeve tebi."] },
          { title: "Faza 2 — Otpuštanje tereta", copy: ["Vraćamo pravo na pogrešku, nesavršenost, NE i vlastiti izbor."] },
          { title: "Faza 3 — Novi odnos prema neuspjehu", copy: ["Neuspjeh kao povratna informacija umjesto dokaza vrijednosti."] },
          { title: "Faza 4 — Razgradnja starih uvjerenja", copy: ["Transformacija temeljnih ograničavajućih uvjerenja."] },
          { title: "Faza 5 — Od moram prema želim", copy: ["Fokus na autentične želje i ponovno buđenje motivacije."] },
          { title: "Faza 6 — Rad na otporima", copy: ["Istraživanje i premošćivanje unutrašnjih kočnica."] },
          { title: "Faza 7 — Sigurnost u sebe", copy: ["Razvijanje stabilnog unutrašnjeg oslonca bez potrebe za potvrdom."] },
          { title: "Faza 8 — Novi identitet", copy: ["Integracija nove slike sebe kroz vođeni rad i audio sidra."] },
          { title: "Faza 9 — Cilj i sljedeći korak", copy: ["Konkretni dugoročni ciljevi i plan za samostalnost."] }
        ]
      }
    },
    {
      id: "cta-zv-001",
      type: "finalCta",
      adminTitle: "Final CTA",
      props: {
        heading: "Vrijeme je da prestaneš živjeti prema pravilima koja više nisu tvoja.",
        copy: "Ako osjećaš da je vrijeme za dublju promjenu, prvi korak je razgovor.",
        cta: "Rezerviraj uvodni razgovor",
        supportingText: "Premium 1:1 program · 1.500 €"
      }
    }
  ]
};

// 6. About Page
const aboutPage = {
  slug: "about",
  title: {
    hr: "O Marini",
    en: "About Marina"
  },
  metaTitle: {
    hr: "O Marini Novaković | Certificirani Life Coach · Vivi Vita",
    en: "About Marina Novaković | Certified Life Coach · Vivi Vita"
  },
  metaDescription: {
    hr: "Moja priča: Od udovoljavanja drugima i tuđih očekivanja do žene koja vodi svoj život i pomaže drugima učiniti isto.",
    en: "My story: From people-pleasing to leading my own life authentically and empowering women to do the same."
  },
  isPublished: true,
  content: [
    {
      id: "about-hero-001",
      type: "profileHero",
      layout: "split-image-text",
      adminTitle: "About Hero",
      props: {
        name: "Marina Novaković",
        role: { hr: "Certificirani Life Coach & NLP Trener", en: "Certified Life Coach & NLP Practitioner" },
        tagline: {
          hr: "Nisam ovdje da ti kažem kako živjeti. Ovdje sam da ti pomognem čuti tvoj vlastiti glas.",
          en: "I am not here to prescribe how to live. I am here to help you hear your own voice."
        },
        image: "/image/Rectangle 1795.png",
        bio: [
          "Godinama sam i sama živjela po nepisanim pravilima dobre djevojčice. Bila sam uspješna, marljiva, uvijek na raspolaganju svima.",
          "Dok u jednom trenutku nisam osjetila potpunu emocionalnu prazninu i shvatila da u vlastitom životu nemam mjesta za sebe.",
          "Kroz intenzivan rad na sebi, edukacije i stotine sati rada s klijenticama, stvorila sam metodologiju koja ženama pruža stvarne, trajne alate za oslobađanje od tuđih očekivanja."
        ]
      }
    }
  ]
};

// 7. Testimonials Page
const testimonialsPage = {
  slug: "testimonials",
  title: {
    hr: "Iskustva klijentica",
    en: "Client Testimonials"
  },
  metaTitle: {
    hr: "Iskustva klijentica | Što kažu žene koje su prošle proces",
    en: "Testimonials | What women say about the coaching process"
  },
  metaDescription: {
    hr: "Iskrene priče i transformacije žena koje su postavile granice, otpustile krivnju i preuzele vodstvo nad svojim životom.",
    en: "Honest stories of women who established healthy boundaries, shed guilt, and stepped into their leadership."
  },
  isPublished: true,
  content: [
    {
      id: "testimonials-grid-001",
      type: "testimonialsGrid",
      layout: "grid",
      adminTitle: "Testimonials Grid",
      props: {
        heading: { hr: "Priče o hrabrosti, granicama i slobodi", en: "Stories of Courage, Boundaries & Freedom" },
        items: [
          {
            name: "Ivana P.",
            role: "Poduzetnica & majka",
            quote: "Prije rada s Marinom mislila sam da reći NE znači biti loša osoba. Danas postavljam granice s lakoćom i mirnoćom.",
            program: "Žena koja vodi svoj život"
          },
          {
            name: "Maja K.",
            role: "Arhitektica",
            quote: "Radionica Isključi MORAM mi je doslovno otvorila oči. Shvatila sam koliko sam nepotrebnog stresa sama sebi tovarila na leđa.",
            program: "Mentalni Reset"
          },
          {
            name: "Ana S.",
            role: "Marketing menadžerica",
            quote: "Nakon dvodnevnog intenziva napokon sam prekinula dvogodišnju prokrastinaciju i pokrenula svoj projekt. Preporučujem od srca!",
            program: "Ukloni kočnice"
          }
        ]
      }
    }
  ]
};

// 8. Blog Page
const blogPage = {
  slug: "blog",
  title: {
    hr: "Blog & Inspiracija",
    en: "Blog & Insights"
  },
  metaTitle: {
    hr: "Blog & Inspiracija | Marina Coaching · Vivi Vita",
    en: "Blog & Insights | Marina Coaching · Vivi Vita"
  },
  metaDescription: {
    hr: "Članci, savjeti i uvidi o osobnom rastu, zdravim granicama i autentičnom životu bez krivnje.",
    en: "Articles, reflections, and guidance on personal growth, healthy boundaries, and leading your life authentically."
  },
  isPublished: true,
  content: [
    {
      id: "blog-header-001",
      type: "pageHeader",
      layout: "centered",
      adminTitle: "Blog Header",
      props: {
        badge: { hr: "Inspiracija i znanje", en: "Inspiration & Knowledge" },
        heading: { hr: "Blog & Inspiracija", en: "Blog & Insights" },
        subheading: {
          hr: "Članci, savjeti i uvidi o osobnom rastu, zdravim granicama i putu prema autentičnom životu bez krivnje.",
          en: "Articles, guidance, and reflections on personal growth, healthy boundaries, and leading your life authentically."
        }
      }
    },
    {
      id: "blog-articles-001",
      type: "articlesList",
      layout: "grid-with-featured",
      adminTitle: "Blog Articles List",
      props: {
        articles: [
          {
            slug: "od-dobre-djevojcice-do-zene-koja-vodi-svoj-zivot",
            title: {
              hr: "Od \"dobre djevojčice\" do žene koja vodi svoj život",
              en: "From \"Good Girl\" to a Woman Leading Her Life"
            },
            category: "Osobni rast",
            readTime: "6 min",
            date: "22. listopada 2026"
          },
          {
            slug: "kako-postaviti-granice-bez-osjecaja-krivnje",
            title: {
              hr: "Kako postaviti jasne granice bez onog poznatog osjećaja krivnje",
              en: "How to Set Clear Boundaries Without Guilt"
            },
            category: "Granice & Odnosi",
            readTime: "5 min",
            date: "18. listopada 2026"
          },
          {
            slug: "mentalni-reset-kako-utisati-unutarnjeg-kriticara",
            title: {
              hr: "Mentalni reset: Kako utišati unutarnjeg kritičara",
              en: "Mental Reset: Quieting the Inner Critic"
            },
            category: "Mentalni reset",
            readTime: "4 min",
            date: "12. listopada 2026"
          },
          {
            slug: "briga-o-sebi-nije-sebichnost",
            title: {
              hr: "Briga o sebi nije sebičnost",
              en: "Self-Care is Not Selfishness"
            },
            category: "Osobni rast",
            readTime: "4 min",
            date: "05. listopada 2026"
          }
        ]
      }
    }
  ]
};

// 9. Contact Page
const contactPage = {
  slug: "contact",
  title: {
    hr: "Kontakt & Konzultacije",
    en: "Contact & Consultations"
  },
  metaTitle: {
    hr: "Kontakt & Konzultacije | Dogovori uvodni razgovor",
    en: "Contact & Consultations | Book Introductory Call"
  },
  metaDescription: {
    hr: "Ispuni kratki obrazac i dogovori besplatni uvodni razgovor od 20 minuta.",
    en: "Fill out the short form to schedule a free 20-minute introductory consultation."
  },
  isPublished: true,
  content: [
    {
      id: "contact-form-001",
      type: "contactForm",
      layout: "two-column-card",
      adminTitle: "Contact Section",
      props: {
        tag: { hr: "Besplatne uvodne konzultacije", en: "Free introductory consultation" },
        heading: { hr: "Dogovori uvodni razgovor", en: "Book your introductory call" },
        description: {
          hr: "Ispuni kratki obrazac i javit ću ti se u roku od 24 sata kako bismo dogovorili termin.",
          en: "Fill out the short form and I will get back to you within 24 hours to schedule our call."
        },
        recipientEmail: "info@vivi-vita.hr",
        bccEmail: "vijendrajat693@gmail.com"
      }
    }
  ]
};

// Write individual pages to kalp-admin/pages/
const allPages = [
  homePage,
  programsPage,
  kljuceviZivotaPage,
  moramZelimPage,
  ukloniKocnicePage,
  zenaVodiZivotPage,
  aboutPage,
  testimonialsPage,
  blogPage,
  contactPage
];

for (const p of allPages) {
  const filePath = resolve(pagesDir, `${p.slug}.json`);
  writeFileSync(filePath, JSON.stringify(p, null, 2) + '\n', 'utf-8');
  console.log(`✅ Saved page JSON: kalp-admin/pages/${p.slug}.json`);
}

// Update src/lib/pages/pages.json with the full list of pages
const masterPagesPath = resolve(root, 'src/lib/pages/pages.json');
writeFileSync(masterPagesPath, JSON.stringify(allPages, null, 2) + '\n', 'utf-8');
console.log(`🌟 Master pages.json updated with ${allPages.length} complete pages!`);
