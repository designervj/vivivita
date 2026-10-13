export interface ProgramSection {
  eyebrow?: string;
  heading: string;
  copy?: string[];
  bullets?: string[];
  steps?: { title: string; copy: string[] }[];
  timeline?: { title: string; copy: string[] }[];
  meta?: string;
  supportingText?: string;
  cta?: string;
}

export interface ProgramPageData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  intro: string;
  meta: string;
  price?: string;
  cta: string;
  image: string;
  sections: ProgramSection[];
  finalCta: {
    heading: string;
    copy?: string;
    cta: string;
    supportingText: string;
  };
}

export const programPages: ProgramPageData[] = [
  {
    slug: 'kljucevi-zivota',
    category: 'MENTALNI RESET',
    title: 'Ključevi života',
    subtitle: 'Vrati sebi pravo na vlastiti izbor.',
    intro: 'Cijeli si život bila uzorna, odgovorna i „dobra“. I možda danas shvaćaš da previše toga radiš kako bi drugi bili zadovoljni tobom — dok svoje potrebe stalno stavljaš na čekanje.',
    meta: '60 minuta · 39 €',
    price: '39 €',
    cta: 'Prijavi se',
    image: '/image/Pety - 17cm 1.png',
    sections: [
      {
        eyebrow: 'Je li ovo za tebe?',
        heading: 'Možda ti je vrijeme vratiti ključeve sebi ako…',
        bullets: [
          'često govoriš DA i kada želiš reći NE',
          'osjećaš grižnju savjesti kada staviš sebe na prvo mjesto',
          'stalno razmišljaš hoće li se netko razočarati tvojom odlukom',
          'imaš osjećaj da živiš prema očekivanjima drugih',
          'znaš da bi nešto napravila drugačije, ali se teško odlučuješ na to',
          'osjećaš da si odgovorna za tuđe emocije i zadovoljstvo',
        ],
      },
      {
        eyebrow: 'Što se zapravo događa?',
        heading: 'Tko zapravo drži ključeve tvog života?',
        copy: [
          'Kada si dugo živjela prema tuđim očekivanjima, lako je izgubiti osjećaj da ti sama odlučuješ.',
          'Možda su to roditelji, partner, posao, autoriteti ili jednostavno pravila koja si kroz godine usvojila kao svoja.',
          '„Moraš biti dobra.“ „Ne smiješ pogriješiti.“ „Nemoj razočarati druge.“ „Budi odgovorna.“',
          'S vremenom više ni ne primjećuješ da prema tim pravilima donosiš odluke.',
          'Ovaj rad počinje upravo tamo — osvještavanjem tko danas zapravo upravlja tvojim izborima.',
        ],
      },
      {
        eyebrow: 'Što radimo?',
        heading: 'U 60 minuta vraćamo ti ono što je tvoje.',
        copy: [
          'Zajedno mapiramo situacije u kojima osjećaš najveći pritisak i otkrivamo čija očekivanja pokušavaš ispuniti.',
          'Kroz vođeni razgovor i vježbu „Vraćanje ključeva“ razdvajamo tvoju osobnu vrijednost od tuđih očekivanja.',
        ],
        bullets: ['pogrešku', 'NE', 'nesavršenost', 'vlastiti izbor', 'vlastite odluke'],
      },
      {
        eyebrow: 'Što nosiš sa sobom?',
        heading: 'Ne odlaziš samo s uvidom.',
        copy: [
          'Nakon ovog rada jasnije vidiš čija očekivanja nosiš i gdje si svoj život počela prilagođavati drugima.',
          'Vraćaš sebi dio resursa koje si kroz godine potisnula — pravo na pogrešku, slobodu, hrabrost i mogućnost da kažeš NE.',
          'I radiš jedan konkretan korak kojim ćeš provjeriti kako izgleda kada ponovno ti držiš ključeve svog života.',
        ],
      },
    ],
    finalCta: {
      heading: 'Vrijeme je da ključevi ponovno budu kod tebe.',
      cta: 'Prijavi se na Mentalni Reset',
      supportingText: '60 minuta · 39 €',
    },
  },
  {
    slug: 'iskljuci-moram-ukljuci-zelim',
    category: 'MENTALNI RESET',
    title: 'Isključi MORAM. Uključi ŽELIM.',
    subtitle: 'Manje pritiska. Više izbora.',
    intro: 'Ako ti se čini da je cijeli život postao popis stvari koje moraš napraviti, vrijeme je zastati i pogledati koliko ti taj osjećaj pritiska zapravo uzima.',
    meta: '90 minuta · 49 €',
    price: '49 €',
    cta: 'Prijavi se',
    image: '/image/Pety - 17cm 1 (1).png',
    sections: [
      {
        eyebrow: 'Prepoznaješ li se?',
        heading: 'Koliko toga u svom životu radiš jer „moraš“?',
        copy: [
          'Moram ustati. Moram na posao. Moram ovo završiti. Moram biti dobra. Moram ispuniti očekivanja. Moram još ovo napraviti.',
          'Kada se „moram“ nakupi, život počinje izgledati kao beskrajan niz obaveza.',
          'Pritisak raste, energija pada, a ono što zapravo želiš sve se teže čuje.',
        ],
      },
      {
        eyebrow: 'Moram nije samo riječ',
        heading: '„Moram“ stvara pritisak. „Želim“ vraća izbor.',
        copy: [
          'U ovom radu istražujemo što se događa kada svakodnevne obaveze promatraš kroz jezik „moram“.',
          'Primjećujemo kako se mijenja tvoje stanje kada istu situaciju formuliraš kao „želim“ ili „biram“.',
          'Ne radi se o tome da sve što trebaš napraviti odjednom postane zabavno.',
          'Radi se o tome da ponovno vidiš da imaš izbor.',
        ],
      },
      {
        eyebrow: 'Što radimo?',
        heading: 'Od MORAŠ prema ŽELIM.',
        steps: [
          { title: 'Osvještavamo tvoja „moram“.', copy: ['Prepoznajemo gdje si sama sebi nametnula pritisak.'] },
          { title: 'Primjećujemo reakciju tijela.', copy: ['Istražujemo kako se osjećaš kada kažeš „moram“, a kako kada kažeš „želim“ ili „biram“.'] },
          { title: 'Mijenjamo fokus.', copy: ['Umjesto da stalno gledaš ono što ne želiš, definiramo prema čemu se želiš kretati.'] },
          { title: 'Definiramo konkretan korak.', copy: ['Iz energije „želim“ biramo jedan mali korak koji možeš napraviti odmah.'] },
        ],
      },
      {
        eyebrow: 'Magnetska linija',
        heading: 'Ne ostajemo samo na razgovoru.',
        copy: [
          'Kroz vježbu Magnetska linija povezujemo tvoju sadašnjost s bliskom budućnošću u kojoj živiš više iz „želim“ i „biram“.',
          'Ne tražimo savršen plan.',
          'Tražimo ono prema čemu te stvarno privlači krenuti.',
        ],
      },
      {
        eyebrow: 'Rezultat',
        heading: 'Što dobivaš?',
        bullets: [
          'jasniji uvid u to gdje te „moram“ drži u pritisku',
          'sposobnost prepoznati kada sama sebi stvaraš nepotreban pritisak',
          'novi način formuliranja izbora',
          'jasniji fokus na ono što želiš, umjesto na ono što želiš izbjeći',
          'jedan konkretan korak prema onome što biraš',
        ],
      },
    ],
    finalCta: {
      heading: 'Ne moraš još više stisnuti zube. Možda trebaš vratiti sebi izbor.',
      cta: 'Prijavi se na Mentalni Reset',
      supportingText: '90 minuta · 49 €',
    },
  },
  {
    slug: 'ukloni-kocnice-kreni-u-akciju',
    category: 'Dvodnevni intenziv',
    title: 'Ukloni kočnice. Kreni u akciju.',
    subtitle: 'Znaš što želiš. Ali nešto te svaki put zaustavi.',
    intro: 'Imaš cilj, ideju ili odluku. Znaš prema čemu želiš krenuti. A onda se pojave strah, sumnja, odgađanje i deset dobrih razloga zašto još nije vrijeme.',
    meta: '2 dana × 120 minuta · 250 €',
    price: '250 €',
    cta: 'Prijavi se',
    image: '/image/Pety - 17cm 1 (2).png',
    sections: [
      {
        eyebrow: 'Za koga je program?',
        heading: 'Ovaj intenziv je za tebe ako…',
        bullets: [
          'znaš što želiš, ali ne poduzimaš konkretne korake',
          'stalno odgađaš ono što ti je važno',
          'čim trebaš krenuti, um ti počinje nuditi prepreke i razloge zašto ne možeš',
          'osjećaš se zaglavljeno ili paralizirano',
          'govoriš si „nisam ja za to“, „ne znam odakle krenuti“ ili „što ako ne uspijem?“',
          'želiš promjenu, ali dio tebe kao da je istovremeno pokušava zaustaviti',
        ],
      },
      {
        eyebrow: 'Što je ispod otpora?',
        heading: 'Možda problem nije u tome što ne znaš što želiš.',
        copy: [
          'Ponekad cilj koji svjesno želiš samo je površina.',
          'Ispod njega mogu biti druge potrebe, strahovi i očekivanja koja stvaraju otpor.',
          'Zato nije dovoljno samo reći sebi: „Pokreni se.“',
          'Prvo treba razumjeti što te zapravo drži na mjestu i čemu taj otpor služi.',
          'Kada razumiješ pozadinu otpora, možeš početi mijenjati odnos prema njemu.',
        ],
      },
      {
        eyebrow: 'Day 1',
        heading: 'DAN 1 — Razbijamo otpore',
        copy: ['Prvog dana istražujemo što se događa kada zamisliš da je odluka koju odgađaš već realizirana.'],
        bullets: [
          'Što te trenutno zaustavlja?',
          'Kako se osjećaš kada ono što želiš nemaš?',
          'Koje posljedice to ima na tvoj život?',
          'Kako bi se osjećala kada bi to ostvarila?',
          'Što bi se pozitivno promijenilo?',
        ],
      },
      {
        eyebrow: 'Day 2',
        heading: 'DAN 2 — Nova verzija postaje poznata',
        copy: [
          'Nije dovoljno samo vizualizirati ono što želiš. Ako ti je željeno stanje potpuno nepoznato, može djelovati daleko i strano.',
          'Zato drugi dan radimo na tome da novu stvarnost učinimo poznatijom i prirodnijom.',
          'Kroz vježbu s tri pozicije prolazimo kroz stanje nedostatka → neutralno stanje → stanje ostvarene želje.',
          'Krećemo se između tih pozicija i kroz vođena pitanja mijenjamo način na koji doživljavaš ono što želiš.',
        ],
      },
      {
        eyebrow: 'Što dobivaš?',
        heading: 'Na kraju intenziva imaš više od motivacije.',
        bullets: [
          'Razumiješ što stoji iza tvog otpora.',
          'Jasnije vidiš zašto se pojavljuju strah, paraliza ili prokrastinacija.',
          'Svoju viziju i ciljeve vidiš konkretnije.',
          'Lakše prepoznaješ trenutak kada te stari obrazac pokušava vratiti u pasivu.',
          'I imaš vježbu koju možeš ponovno primjenjivati kada se pojavi novi otpor.',
        ],
      },
      {
        eyebrow: 'Format',
        heading: 'Kako izgleda intenziv?',
        copy: [
          '2 dana rada. 120 minuta dnevno.',
          'Rad se može odvijati individualno ili u maloj grupi do 8 sudionica.',
          'Cilj nije samo razumjeti zašto stojiš na mjestu.',
          'Cilj je napraviti prostor za ono prema čemu želiš krenuti.',
        ],
      },
    ],
    finalCta: {
      heading: 'Znaš što želiš. Vrijeme je vidjeti što te zaustavlja.',
      cta: 'Prijavi se na intenziv',
      supportingText: '2 dana × 120 minuta · 250 €',
    },
  },
  {
    slug: 'zena-koja-vodi-svoj-zivot',
    category: 'PREMIUM 1:1 PROGRAM',
    title: 'Žena koja vodi svoj život',
    subtitle: 'Od „dobre djevojčice“ do žene koja vjeruje sebi i svojim odlukama.',
    intro: 'Dubinski individualni proces za ženu koja više ne želi samo riješiti jedan problem, nego razumjeti i promijeniti obrazac iz kojeg živi.',
    meta: 'Individualni 1:1 program · 1.500 €',
    price: '1.500 €',
    cta: 'Rezerviraj uvodni razgovor',
    image: '/image/Pety - 17cm 1 (3).png',
    sections: [
      {
        eyebrow: 'Prepoznaješ li svoj trenutak?',
        heading: 'Možda izvana sve izgleda dobro. Ali ti znaš da nešto više nije tvoje.',
        copy: [
          'Možda si obrazovana, sposobna, odgovorna i uspješna.',
          'Možda si cijeli život bila ona koja će uspjeti, ona koja može više, ona koja ne smije razočarati.',
          'A danas se pitaš: Što se dogodilo sa mnom? Zašto nemam više ambicije? Zašto samo odrađujem dane? Zašto znam da želim promjenu, ali se ne mogu pokrenuti? Što ja zapravo želim?',
          'Možda ne nedostaješ sebi zato što si izgubila sposobnost.',
          'Možda si izgubila kontakt sa sobom dok si pokušavala postati ono što se od tebe očekivalo.',
        ],
      },
      {
        eyebrow: 'Što je „dobra djevojčica“?',
        heading: '„Dobra djevojčica“ nije tko jesi. To je obrazac koji si naučila.',
        copy: [
          'To je dio tebe koji je naučio da je sigurnije biti dobra, uspješna, odgovorna, prilagodljiva i prihvaćena.',
          'Da je bolje ne razočarati druge. Da pogreška može značiti neuspjeh. Da tvoju vrijednost potvrđuju rezultati, pohvale i tuđe zadovoljstvo.',
          'Taj obrazac možda ti je nekada pomagao.',
          'Ali ono što ti je nekada pomagalo da budeš prihvaćena, danas može upravljati tvojim životom.',
        ],
      },
      {
        eyebrow: 'Što radimo?',
        heading: 'Ne radimo na tome da postaneš „bolja“. Radimo na tome da postaneš svoja.',
        steps: [
          { title: '01 — Osvještavanje', copy: ['Prepoznajemo obrasce, okidače, uvjerenja i vanjske autoritete koji su godinama utjecali na tvoje odluke.'] },
          { title: '02 — Transformacija', copy: ['Radimo na strahu od neuspjeha, ograničavajućim uvjerenjima, otporima, samosabotaži i obrascima koji te vraćaju na staro.'] },
          { title: '03 — Izgradnja novog identiteta', copy: ['Definiramo što zaista želiš, vraćamo sigurnost u vlastite odluke i gradimo identitet koji više nije određen tuđim očekivanjima.'] },
        ],
      },
      {
        eyebrow: 'Put kroz program',
        heading: 'Od rušenja starog obrasca do nove verzije tebe.',
        timeline: [
          { title: 'Faza 1 — Vraćanje autoriteta sebi', copy: ['Prepoznaješ čija očekivanja nosiš i gdje si svoju vrijednost povezala s uspjehom, rezultatima i tuđim zadovoljstvom.', 'Vraćamo „ključeve“ tebi i ponovno uspostavljamo tvoje pravo na vlastite odluke.'] },
          { title: 'Faza 2 — Otpuštanje tereta', copy: ['Radimo na odnosima, očekivanjima i resursima kojih si se kroz godine odrekla kako bi bila prihvaćena.', 'Vraćamo pravo na pogrešku, nesavršenost, NE, slobodu i vlastiti izbor.'] },
          { title: 'Faza 3 — Novi odnos prema neuspjehu', copy: ['Učimo promatrati neuspjeh kao povratnu informaciju, a ne kao dokaz tvoje vrijednosti.', 'Strah i sram više ne moraju donositi odluke umjesto tebe.'] },
          { title: 'Faza 4 — Razgradnja starih uvjerenja', copy: ['Prepoznajemo glavna uvjerenja koja održavaju obrazac „dobre djevojčice“ i radimo na njihovoj transformaciji.'] },
          { title: 'Faza 5 — Od moram prema želim', copy: ['Prebacujemo fokus s onoga što ne želiš prema onome čemu želiš ići.', 'Definiramo prve autentične ciljeve i vraćamo osjećaj izbora.'] },
          { title: 'Faza 6 — Rad na otporima', copy: ['Kada znaš što želiš, istražujemo što te još uvijek koči.', 'Prepoznajemo pozadinu otpora i tražimo novo ponašanje koje podržava tvoje ciljeve.'] },
          { title: 'Faza 7 — Sigurnost u sebe', copy: ['Gradiš sposobnost da vjeruješ svojim odlukama, smanjiš potrebu za vanjskom potvrdom i postaneš sebi oslonac.'] },
          { title: 'Faza 8 — Novi identitet', copy: ['Definiramo novu sliku sebe — ne onu koju bi trebala biti, nego onu koju biraš biti.', 'Novi identitet zatim integriramo kroz vođeni rad i audio vježbu za samostalan nastavak procesa.'] },
          { title: 'Faza 9 — Cilj i sljedeći korak', copy: ['Definiramo konkretne ciljeve za budućnost i prvi mali korak prema njima.', 'Učvršćujemo novu perspektivu i pripremamo te za samostalan nastavak nakon programa.'] },
        ],
      },
      {
        eyebrow: 'Što se mijenja?',
        heading: 'Na kraju procesa ne dobivaš novu masku. Dobivaš sebe.',
        bullets: [
          'cilj više nije dokaz tvoje vrijednosti',
          'tuđe mišljenje više ne upravlja tvojim odlukama',
          'lakše postavljaš granice i govoriš NE',
          'prepoznaješ stare obrasce kada se pojave',
          'znaš što želiš i prema čemu ideš',
          'pogrešku više ne moraš doživljavati kao osobni neuspjeh',
          'možeš donositi odluke bez stalne potrebe za tuđim odobrenjem',
          'imaš konkretne alate koje možeš koristiti i nakon završetka programa',
        ],
      },
      {
        eyebrow: 'Što dobivaš kroz rad?',
        heading: 'Ne želim da nakon programa ovisiš o meni.',
        copy: [
          'Želim da možeš nastaviti sama.',
          'Zato kroz proces ne dobivaš samo uvide, nego i konkretne tehnike i alate koje možeš ponovno koristiti kada se pojave novi otpori, sumnje ili stare reakcije.',
          'Cilj je da ti sama sebi postaneš oslonac.',
        ],
      },
      {
        eyebrow: 'Format',
        heading: 'Kako izgleda rad?',
        copy: [
          'Individualni rad 1:1 prilagođen tvojoj situaciji, obrascima i ciljevima.',
          'Kroz program radimo na konkretnim situacijama iz tvog života, uz vođeni razgovor, coaching pitanja, NLP vježbe, vizualizacije i alate za samostalan nastavak rada.',
          'Program je strukturiran, ali nije generički. Radimo na onome što je tvoje.',
        ],
        meta: '1.500 €',
        supportingText: 'Mogućnost plaćanja u 3 mjesečne rate.',
        cta: 'Rezerviraj uvodni razgovor',
      },
      {
        eyebrow: 'O Marini',
        heading: 'Zašto rad sa mnom?',
        copy: [
          'I sama sam prošla trenutak u kojem nisam znala kako dalje.',
          'Tražeći pomoć za sebe, pronašla sam alate i znanje koji su mi pokazali da promjena nije samo želja — moguća je kada razumiješ što te iznutra drži na mjestu.',
          'Danas radim sa ženama koje žele napraviti taj isti pomak.',
          'Neću ti govoriti kakva trebaš biti. Pomoći ću ti da otkriješ tko želiš biti — i da naučiš vjerovati toj verziji sebe.',
        ],
      },
    ],
    finalCta: {
      heading: 'Vrijeme je da prestaneš živjeti prema pravilima koja više nisu tvoja.',
      copy: 'Ako osjećaš da je vrijeme za dublju promjenu, prvi korak je razgovor. U uvodnom razgovoru pogledat ćemo gdje si sada, što želiš promijeniti i je li ovaj program pravi format za tebe.',
      cta: 'Rezerviraj uvodni razgovor',
      supportingText: 'Premium 1:1 program · 1.500 €',
    },
  },
];

export const getProgramPage = (slug: string) => programPages.find((program) => program.slug === slug);
