export interface BlogPost {
  slug: string;
  title: {
    hr: string;
    en: string;
  };
  excerpt: {
    hr: string;
    en: string;
  };
  content: {
    hr: string[];
    en: string[];
  };
  category: {
    hr: string;
    en: string;
  };
  categorySlug: 'granice' | 'mentalni-reset' | 'osobni-rast' | 'odnosi';
  readTime: {
    hr: string;
    en: string;
  };
  date: string;
  author: string;
  authorRole: {
    hr: string;
    en: string;
  };
  image: string;
  featured?: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'od-dobre-djevojcice-do-zene-koja-vodi-svoj-zivot',
    featured: true,
    title: {
      hr: 'Od "dobre djevojčice" do žene koja vodi svoj život: Kako prepoznati trenutak promjene',
      en: 'From "Good Girl" to a Woman Leading Her Life: How to Recognize the Turning Point',
    },
    excerpt: {
      hr: 'Cijeli život učili su nas da budemo pristojne, da ne stvaramo valove i da prvo mislimo na druge. No što se dogodi kada cijena tog udovoljavanja postane gubitak vlastitog identiteta?',
      en: 'All our lives we were taught to be polite, not make waves, and put everyone else first. But what happens when the cost of pleasing others is the loss of your own identity?',
    },
    category: {
      hr: 'Osobni rast',
      en: 'Personal Growth',
    },
    categorySlug: 'osobni-rast',
    readTime: {
      hr: '6 min čitanja',
      en: '6 min read',
    },
    date: '22. listopada 2026',
    author: 'Marina Novaković',
    authorRole: {
      hr: 'Certificirani Life Coach',
      en: 'Certified Life Coach',
    },
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    tags: ['Dobra djevojčica', 'Autentičnost', 'Promjena', 'Samosvijest'],
    content: {
      hr: [
        'Sindrom "dobre djevojčice" nije samo fraza; to je duboko ukorijenjeni obrazac ponašanja koji mnoge od nas usvoje još u najranijem djetinjstvu. Kada smo bile mirne, poslušne, marljive i nikome nismo smetale – dobivale smo odobravanje, pažnju i ljubav.',
        'No u odrasloj dobi taj mehanizam preživljavanja postaje naš najveći teret. Odjednom se zateknemo u situaciji gdje kažemo "da" stvarima koje preziremo, šutimo kad bismo trebale govoriti, i osjećamo kronični umor jer nosimo emocionalni teret svih oko sebe.',
        'Prijelaz iz uloge "dobre djevojčice" u ženu koja vodi svoj život ne događa se preko noći. On počinje malim, ali hrabrim uvidom: shvaćanjem da je vaše "ne" drugima zapravo vaše najvažnije "da" samoj sebi.',
        'Prvi korak je osvještavanje unutarnjeg glasa. Primijetite kada se javlja osjećaj krivnje samo zato što ste izrazili vlastitu želju. Krivnja u ovom kontekstu nije dokaz da radite nešto loše – ona je samo znak da prekidate staro pravilo koje vam više ne služi.',
        'Kada počnete birati sebe, možda ćete primijetiti otpor okoline. Ljudi koji su navikli na vašu beskrajnu dostupnost mogu reagirati iznenađenjem ili nezadovoljstvom. Zapamtite: njihova reakcija nije vaša odgovornost. Vaša je odgovornost živjeti u skladu sa svojim vrijednostima.',
        'Voditi svoj život znači preuzeti kormilo, donositi odluke temeljene na onome što ŽELITE, a ne na onome što "moraš", i stvoriti svakodnevicu u kojoj se osjećate prisutno, slobodno i ispunjeno.',
      ],
      en: [
        'The "good girl" syndrome is not just a catchphrase; it is a deeply rooted behavioral pattern many of us adopt in early childhood. When we were quiet, obedient, diligent, and never made waves, we received approval, affection, and love.',
        'However, in adult life, that very survival mechanism becomes our heaviest burden. Suddenly we find ourselves saying "yes" to commitments we dread, remaining silent when our voice is needed most, and experiencing chronic exhaustion from carrying everyone else\'s emotional weight.',
        'The transition from the "good girl" role into a woman who leads her own life doesn\'t happen overnight. It starts with a small yet courageous realization: understanding that your "no" to others is truly your most essential "yes" to yourself.',
        'The first step is awareness of your inner dialogue. Notice when guilt surfaces simply because you voiced your own desire. Guilt in this setting is not evidence of wrongdoing—it is simply a sign that you are breaking an old rule that no longer serves you.',
        'As you begin choosing yourself, you may encounter pushback from those around you. People accustomed to your unlimited availability may react with surprise or irritation. Remember: their reaction is not your burden to bear. Your responsibility is living in alignment with your true values.',
        'Leading your life means stepping into your power, making decisions based on what you WANT rather than societal "HAVE TOs", and cultivating a daily existence where you feel present, liberated, and fulfilled.',
      ],
    },
  },
  {
    slug: 'kako-postaviti-granice-bez-osjecaja-krivnje',
    featured: false,
    title: {
      hr: 'Kako postaviti jasne granice bez onog poznatog osjećaja krivnje',
      en: 'How to Set Clear Boundaries Without That Familiar Feeling of Guilt',
    },
    excerpt: {
      hr: 'Postavljanje granica nije čin sebičnosti, već osnovni preduvjet za zdrave odnose. Otkrijte jednostavne komunikacijske korake za mirno i odlučno zauzimanje za sebe.',
      en: 'Setting boundaries is never an act of selfishness; it is the cornerstone of healthy relationships. Discover simple communication steps to stand up for yourself with calm resolve.',
    },
    category: {
      hr: 'Granice & Odnosi',
      en: 'Boundaries & Relationships',
    },
    categorySlug: 'granice',
    readTime: {
      hr: '5 min čitanja',
      en: '5 min read',
    },
    date: '18. listopada 2026',
    author: 'Marina Novaković',
    authorRole: {
      hr: 'Certificirani Life Coach',
      en: 'Certified Life Coach',
    },
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    tags: ['Granice', 'Komunikacija', 'Krivnja', 'Odnosi'],
    content: {
      hr: [
        'Koliko puta ste pristali na nešto što niste htjeli samo da izbjegnete konflikt ili neugodnu tišinu? Ako vam je ovo poznato, niste sami.',
        'Granice nisu zidovi koji nas odvajaju od drugih, već mostovi koji definiraju gdje završavam ja, a gdje počinješ ti. Bez jasnih granica, odnosi postaju teren za zamjeranje, iscrpljenost i tihu frustraciju.',
        'Ključ postavljanja granica leži u jednostavnosti. Često imamo potrebu prekomjerno objašnjavati svoje odluke, opravdavati se ili ispričavati. Što se više opravdavate, ostavljate više prostora sugovorniku za pregovaranje oko vaše granice.',
        'Umjesto: "Joj, strašno mi je žao, voljela bih, ali ne znam hoću li stići jer imam toliko posla...", isprobajte jasnu i toplu formulaciju: "Hvala na pozivu, ali ovaj vikend mi je potreban odmor pa neću moći doći."',
        'Osjećaj krivnje koji se javi nakon što postavite granicu je normalan. On ne znači da ste pogriješili, već samo da vježbate novu emocionalnu vještinu. Dajte si dopuštenje osjetiti krivnju i svejedno ostati pri svojoj odluci.',
      ],
      en: [
        'How many times have you agreed to something you didn\'t want just to avoid friction or an uncomfortable silence? If this sounds familiar, you are certainly not alone.',
        'Boundaries are not walls built to isolate us; they are clear horizons defining where I end and where you begin. Without explicit boundaries, relationships inevitably devolve into breeding grounds for resentment, exhaustion, and quiet frustration.',
        'The secret to boundary-setting lies in clarity and simplicity. We often feel compelled to over-explain, apologize, or build elaborate justifications. Yet the more you justify, the more room you leave for debate.',
        'Instead of: "I am so terribly sorry, I wish I could, but my week has been insane and maybe...", practice a warm, grounded alternative: "Thank you for thinking of me, but I need this weekend for rest, so I won\'t be attending."',
        'The guilt that arises right after communicating a boundary is completely normal. It doesn\'t indicate a mistake; it merely shows you are building a new emotional muscle. Allow yourself to feel the discomfort while remaining firmly anchored in your truth.',
      ],
    },
  },
  {
    slug: 'mentalni-reset-kako-utisati-unutarnjeg-kriticara',
    featured: false,
    title: {
      hr: 'Mentalni reset: Kako prepoznati i utišati neumoljivog unutarnjeg kritičara',
      en: 'Mental Reset: Recognizing and Quieting the Relentless Inner Critic',
    },
    excerpt: {
      hr: 'Onaj tihi glas koji vam govori da niste dovoljno dobre ili da niste napravile dovoljno? Vrijeme je da preispitamo tko zapravo govori u našoj glavi.',
      en: 'That persistent voice telling you you aren\'t enough or haven\'t done enough? It is time to examine who is truly speaking inside your head.',
    },
    category: {
      hr: 'Mentalni Reset',
      en: 'Mental Reset',
    },
    categorySlug: 'mentalni-reset',
    readTime: {
      hr: '4 min čitanja',
      en: '4 min read',
    },
    date: '12. listopada 2026',
    author: 'Marina Novaković',
    authorRole: {
      hr: 'Certificirani Life Coach',
      en: 'Certified Life Coach',
    },
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80',
    tags: ['Mentalni reset', 'Unutarnji glas', 'Mindset', 'Mir'],
    content: {
      hr: [
        'Unutarnji kritičar rijetko zvuči kao neprijatelj. Češće zvuči kao "glas razuma" koji nas navodno štiti od pogrešaka, kritika okoline ili neuspjeha.',
        'Međutim, stalna samokritika stvara kronični stres u tijelu. Kada svaku grešku doživljavamo kao potvrdu vlastite nedostatnosti, gubimo hrabrost za isprobavanje novih stvari i ostvarenje svojih punih potencijala.',
        'Mentalni reset započinje razdvajanjem sebe od svojih misli. Vi niste vaše misli; vi ste ona koja te misli promatra. Kada primijetite misao: "Nisam dovoljno dobra za ovo", preoblikujte je u: "Primjećujem da se ponovno javlja misao o nesigurnosti."',
        'Ova mala distanca omogućuje vam da svjesno izaberete kako ćete reagirati, umjesto da automatski povjerujete svakoj samokritičnoj misli.',
      ],
      en: [
        'The inner critic rarely presents itself as an obvious foe. More frequently, it disguises itself as the "voice of reason", purporting to shield us from criticism or failure.',
        'However, relentless self-judgment triggers chronic somatic tension. When every misstep feels like proof of inadequacy, we lose our willingness to innovate, explore, and expand.',
        'A mental reset begins by decoupling who you are from the stream of your thoughts. You are not your thoughts; you are the awareness observing them. When you catch the thought: "I am not qualified for this", reframe it as: "I notice an old pattern of self-doubt arising."',
        'This gentle distance creates the spaciousness needed to consciously choose your response rather than blindly accepting harsh self-criticism.',
      ],
    },
  },
  {
    slug: 'briga-o-sebi-nije-sebichnost',
    featured: false,
    title: {
      hr: 'Briga o sebi nije sebičnost: Zašto je punjenje vlastitih baterija nužnost',
      en: 'Self-Care is Not Selfishness: Why Refueling Your Tank is Essential',
    },
    excerpt: {
      hr: 'Ne možete točiti iz prazne čaše. Zašto žene toliko često osjećaju grižnju savjesti kada odvoje vrijeme za odmor i kako to jednom zauvijek promijeniti.',
      en: 'You cannot pour from an empty cup. Why women so frequently wrestle with guilt when taking restorative time, and how to rewrite that narrative for good.',
    },
    category: {
      hr: 'Osobni rast',
      en: 'Personal Growth',
    },
    categorySlug: 'osobni-rast',
    readTime: {
      hr: '4 min čitanja',
      en: '4 min read',
    },
    date: '05. listopada 2026',
    author: 'Marina Novaković',
    authorRole: {
      hr: 'Certificirani Life Coach',
      en: 'Certified Life Coach',
    },
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    tags: ['Briga o sebi', 'Energija', 'Odmor', 'Ravnoteža'],
    content: {
      hr: [
        'Mnoge žene odrasle su u uvjerenju da je odricanje najveća vrlina. Što više dajete, što se više žrtvujete za obitelj, posao i prijatelje – to ste "bolja" osoba.',
        'No istina je suprotna: kada se konstantno iscrpljujemo, onima koje volimo dajemo samo ostatke svoje energije, često popraćene razdražljivošću i nestrpljenjem.',
        'Prava briga o sebi ne svodi se samo na povremenu pjenušavu kupku. Ona podrazumijeva poštovanje vlastitih granica energije, dovoljno sna, vrijeme za tišinu i hrabrost da delegiramo obveze.',
        'Briga o sebi je čin odgovornosti. Kada ste vi mirne, stabilne i energetski obnovljene, donosite mir i stabilnost u sve prostore u kojima boravite.',
      ],
      en: [
        'So many women were raised to view self-sacrifice as the pinnacle of virtue. The more you endure and pour yourself out for your family, career, and friends, the "nobler" you are deemed.',
        'Yet the reality is stark: when chronically depleted, we offer those we cherish merely the frayed leftovers of our presence, often marked by impatience and quiet exhaustion.',
        'Genuine self-care goes far beyond occasional indulgences. It means respecting your energetic thresholds, prioritizing restorative sleep, carving out sacred quiet, and delegating responsibilities.',
        'Caring for yourself is an act of deep responsibility. When you are centered, resourced, and calm, you bring that grounded stability into every room and relationship you enter.',
      ],
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
