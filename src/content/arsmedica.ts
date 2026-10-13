// Źródła: arsmedica-nfz/audit/pages/*.md oraz audit/AUDIT.md.
// Nie dodawać informacji, których nie ma w źródle.

export const practice = {
  name: "ARSMEDICA",
  legalName: '"ARSMEDICA CENTRUM" Poradnia Podstawowej Opieki Zdrowotnej',
  subtitle: "Praktyka Lekarska",
  street: "ul. Babina 3",
  city: "62-800 Kalisz",
  phone: "62 580 22 52",
  phoneHref: "+48625802252",
  mobile: "573 335 284",
  mobileHref: "+48573335284",
  hours: "pn–pt: 8:00–18:00",
};

export const nav = [
  { label: "POZ", to: "/poz" },
  { label: "Specjaliści", to: "/specjalisci" },
  { label: "Cennik usług", to: "/cennik-uslug" },
  { label: "Informacje", to: "/informacje" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

export const patientTasks = [
  { label: "Godziny", hash: "godziny" },
  { label: "Lekarze", hash: "lekarze" },
  { label: "Laboratorium", hash: "laboratorium" },
  { label: "Szczepienia", hash: "szczepienia" },
  { label: "Informacje i kontakt", hash: "informacje" },
] as const;

export const externalLinks = [
  { label: "RODO", href: "https://e-arsmedica.pl/rodo" },
  {
    label: "Kalendarz szczepień — do potwierdzenia",
    href: "https://e-arsmedica.pl/kalendarz-szczepien",
  },
  {
    label: "Prawa i obowiązki pacjenta",
    href: "https://e-arsmedica.pl/prawa-i-obowiazki-pacjenta",
  },
  { label: "Laboratorium", href: "https://e-arsmedica.pl/laboratorium" },
  { label: "Projekt grantowy", href: "https://e-arsmedica.pl/projekt-grantowy-pn" },
];

export const prescriptionUrl = "https://e-arsmedica.pl/zamow-recepte";

export const categories = [
  {
    title: "Podstawowa opieka zdrowotna",
    text: "Przychodnia świadczy usługi w ramach umowy z NFZ od poniedziałku do piątku w godz. od 8.00 do 18.00.",
    meta: "pn–pt 8:00–18:00",
    to: "/poz",
  },
  {
    title: "Prywatne gabinety specjalistyczne",
    text: "Ortopeda, neurolog, kardiolog, psychiatra, chirurg naczyniowy, psycholog, dietetyk, pulmonolog, fizjoterapia i medycyna pracy.",
    meta: "Rejestracja telefoniczna",
    to: "/specjalisci",
  },
  {
    title: "Profilaktyka",
    text: "Program profilaktyki chorób układu krążenia (CHUK) oraz program „Moje Zdrowie – bilans zdrowia osoby dorosłej”.",
    meta: "Programy NFZ",
    to: "/informacje",
  },
  {
    title: "Opieka koordynowana",
    text: "Lepsze zaplanowanie diagnostyki i leczenia chorób przewlekłych oraz bardziej kompleksowa opieka zespołu medycznego.",
    meta: "Zapytaj w rejestracji",
    to: "/informacje",
  },
  {
    title: "Szczepienia",
    text: "W ramach profilaktyki wykonywane są szczepienia zalecane, m.in. przeciw WZW, pneumokokom i rotawirusom.",
    meta: "Gabinet zabiegowy",
    to: "/poz",
  },
  {
    title: "Sklep medyczny",
    text: "Realizujemy wnioski NFZ w ramach zaopatrzenia w środki pomocnicze. Zapewniamy fachową pomoc w doborze produktów.",
    meta: "pn–pt 8:00–16:00",
    to: "/informacje",
  },
];

export const pozDoctors = [
  {
    name: "Paweł Andrzejczak",
    specialties: ["Internista", "Medycyna rodzinna"],
    hours: [
      ["poniedziałek", "8.00 – 13.00"],
      ["wtorek", "13.00 – 18.00"],
      ["środa", "8.00 – 13.00"],
      ["czwartek", "8.00 – 13.00"],
      ["piątek", "zamiennie – dni parzyste 13.00 – 18.00; dni nieparzyste 8.00 – 18.00"],
    ],
  },
  {
    name: "Piotr Lisowski",
    specialties: ["Specjalista medycyny rodzinnej"],
    hours: [
      ["poniedziałek", "8.00 – 13.00"],
      ["wtorek", "8.00 – 13.00"],
      ["środa", "13.00 – 18.00"],
      ["czwartek", "13.00 – 18.00"],
      ["piątek", "8.00 – 13.00"],
    ],
  },
  {
    name: "Agnieszka Krawczyk-Kubisiak",
    specialties: ["Specjalista medycyny rodzinnej"],
    hours: [
      ["poniedziałek", "11.00 – 16.00"],
      ["wtorek", "8.00 – 13.00"],
      ["środa", "8.00 – 13.00"],
      ["czwartek", "8.00 – 13.00"],
      ["piątek", "zamiennie – dni parzyste 8.00 – 13.00; dni nieparzyste 11.00 – 16.00"],
    ],
  },
  {
    name: "Irena Grzeluszka-Tobiasz",
    specialties: ["Lekarz pediatra", "Medycyna rodzinna"],
    hours: [
      ["poniedziałek", "09:00 – 14:00"],
      ["wtorek", "09:00 – 12:30"],
      ["środa", "11:00 – 16:00"],
      ["czwartek", "13:00 – 18:00"],
      ["piątek", "09:00 – 13:00"],
    ],
  },
  {
    name: "Ewa Marciniak",
    specialties: ["Specjalista medycyny rodzinnej"],
    hours: [
      ["poniedziałek", "8.00 – 13.00"],
      ["wtorek", "13.00 – 18.00"],
      ["środa", "8:00 – 13:00"],
      ["czwartek", "8:00 – 13:00"],
      ["piątek", "zamiennie – dni parzyste 13.00 – 18.00; dni nieparzyste 8.00 – 13.00"],
    ],
  },
  {
    name: "Paweł Krzywda",
    specialties: ["Rezydent medycyny rodzinnej"],
    hours: [
      ["wtorek", "15:00 – 18:00"],
      ["piątek", "15:00 – 18:00"],
    ],
  },
];

export const pozVaccines = [
  "Szczepienie przeciw wirusowemu zapaleniu wątroby – szczepionką Euvax (pełne szczepienie obejmuje 3 dawki)",
  "Szczepienie przeciw pneumokokom – Prevenar",
  "Szczepienie przeciw rotawirusom – Rotarix",
  "Szczepienie skojarzone przeciw błonicy, tężcowi, poliomyelitis, zakażeniom wywołanym przez Hib oraz wzw typu B – Infanrix IPV+Hib",
];

export const pozFacts = [
  {
    label: "Godziny przyjęć",
    value:
      "Przychodnia świadczy usługi w ramach umowy z NFZ od poniedziałku do piątku w godz. od 8.00 do 18.00.",
  },
  {
    label: "Po godz. 18.00 i w dni świąteczne",
    value:
      "Opiekę medyczną świadczy Wojewódzki Szpital Zespolony w Kaliszu, ul. Poznańska 79 (budynek Pogotowia).",
  },
  { label: "Gabinet zabiegowy", value: "Czynny w godzinach pracy przychodni." },
  { label: "Pobieranie krwi", value: "Od poniedziałku do piątku, 7:30–11:00." },
];

export const mainRegistration = {
  phone: "500 308 305",
  phoneHref: "+48500308305",
  hours: "od poniedziałku do piątku w godz. 8:00 do 16:00",
};

export const specialists = [
  {
    field: "Ortopeda",
    name: "dr n. med. Piotr Wojciechowski",
    schedule: "przyjęcia we wtorki od godziny 18.00",
    phone: "500 308 305",
  },
  { field: "Neurolog", name: "dr n. med. Karolina Tworek", schedule: "", phone: "500 308 305" },
  {
    field: "Kardiolog",
    name: "lek. Agata Serwecińska",
    schedule: "przyjęcia w poniedziałki",
    phone: "500 308 305",
  },
  {
    field: "Fizjoterapia uroginekologiczna",
    name: "mgr Aneta Kliber",
    schedule: "",
    phone: "881 693 188",
  },
  {
    field: "Lekarz Medycyny Pracy i Transportu",
    name: "lek. Piotr Lisowski",
    schedule: "od poniedziałku do czwartku",
    phone: "500 308 305",
  },
  {
    field: "Psychiatra",
    name: "lek. Jadwiga Liberowicz-Przybył",
    schedule: "porady poniedziałek i środa",
    phone: "692 685 922",
  },
  {
    field: "Chirurg naczyniowy",
    name: "dr n. med. Jarosław Kasperczak",
    schedule: "przyjęcia poniedziałek i czwartek od godz. 16:00",
    phone: "607 051 894",
    confirmation: "Dni przyjęć do potwierdzenia: strona „O nas” podaje poniedziałek i piątek.",
  },
  {
    field: "Masażystka",
    name: "Gohar Meliksetyan",
    schedule: "zabiegi od poniedziałku do piątku od godz. 12:00",
    phone: "880 683 065",
    confirmation:
      "Telefon i godziny do potwierdzenia: strona „O nas” podaje inny numer rejestracji.",
  },
  {
    field: "Poradnia Psychologii Pracy",
    name: "mgr Izabela Płucienniczak",
    schedule: "poniedziałek 08:00–15:00; czwartek 12:00–18:00",
    phone: "503 114 595",
  },
  { field: "Psycholog", name: "mgr Justyna Prus-Buczak", schedule: "", phone: "601 775 701" },
  {
    field: "Dietetyk",
    name: "Wiktoria Szczęsna",
    schedule: "",
    phone: "791 755 792",
    confirmation: "Nazwisko do potwierdzenia: strona „O nas” podaje Julię Dobosz.",
  },
  {
    field: "Pulmonolog",
    name: "lek. Waldemar Bakalarz",
    schedule: "w czwartki",
    phone: "500 308 305",
  },
  {
    field: "Fizjoterapia urologiczna",
    name: "mgr Aneta Kliber",
    schedule: "",
    phone: "881 693 188",
  },
];

export const prevention = {
  kicker: "Informacja",
  title: "Zadbaj o zdrowie – skorzystaj z profilaktyki i opieki koordynowanej",
  intro:
    "Zachęcamy naszych pacjentów do udziału w programach profilaktycznych realizowanych w przychodni:",
  programs: [
    "Program profilaktyki chorób układu krążenia (CHUK)",
    "Program „Moje Zdrowie – bilans zdrowia osoby dorosłej”",
  ],
  body: [
    "Programy te umożliwiają ocenę stanu zdrowia, identyfikację czynników ryzyka oraz wczesne wykrywanie chorób, zanim pojawią się wyraźne dolegliwości.",
    "Zapraszamy również do korzystania ze świadczeń realizowanych w ramach opieki koordynowanej. Pozwala ona lepiej zaplanować diagnostykę i leczenie chorób przewlekłych oraz zapewnia pacjentowi bardziej kompleksową opiekę zespołu medycznego.",
    "Osoby zainteresowane udziałem w programach profilaktycznych lub skorzystaniem z opieki koordynowanej zapraszamy do kontaktu z rejestracją poradni. Warto również zapytać o dostępne możliwości swojego lekarza lub pielęgniarkę.",
  ],
  closing:
    "Nie czekaj na objawy – profilaktyka daje największe korzyści wtedy, gdy działamy odpowiednio wcześnie.",
};

export const pertussis = {
  title: "Szczepienia przeciw krztuścowi",
  body: "Masz bezpośredni kontakt z noworodkami lub niemowlętami w domu albo w pracy? Masz dziecko w wieku przedszkolnym, jesteś w ciąży albo ją planujesz? Czy jako osoba dorosła przyjmujesz zalecaną dawkę przypominającą szczepionki co 10 lat w celu utrzymania odporności? Wykonaj szczepienie przeciw krztuścowi sobie i swojemu dziecku w naszej placówce.",
};

export const medicalStore = {
  title: "Sklep medyczny",
  lines: [
    "Zapraszamy do sklepu medycznego w naszej placówce w dniach od poniedziałku do piątku, w godz. od 8:00 do 16:00.",
    "Realizujemy wnioski NFZ w ramach zaopatrzenia w środki pomocnicze.",
    "Zapewniamy fachową pomoc w doborze produktów.",
  ],
};

export const usefulInfo = [
  {
    title: "Opieka nocna i świąteczna",
    body: "Opieka nocna i w dni świąteczne świadczona jest przez Wojewódzki Szpital Zespolony w Kaliszu, ul. Poznańska 79.",
    phone: "62 765 16 54",
  },
  {
    title: "Teleplatforma Pierwszego Kontaktu (TPK)",
    body: "W razie nagłego pogorszenia stanu zdrowia, poza godzinami pracy podstawowej opieki zdrowotnej, pacjent może skontaktować się z TPK. Pomoc medyczna od poniedziałku do piątku w godz. 18.00–8.00 oraz w weekendy, święta i inne dni ustawowo wolne od pracy – całodobowo. Numer bezpłatny.",
    phone: "800 137 200",
  },
  {
    title: "Transport sanitarny Art & Med",
    body: "Zamawianie transportu sanitarnego.",
    phone: "62 594-11-12; 660-703-333",
  },
];

export const priceIntro = [
  "Świadczenia realizowane w naszej placówce medycznej wymienione w Ustawie o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych (Dz. U. 210.2135.2004) oraz Rozporządzeniu Ministra Zdrowia w sprawie świadczeń gwarantowanych z zakresu podstawowej opieki zdrowotnej (Dz. U. 139.1139.2009) realizowane na podstawie kontraktu z NFZ są bezpłatne.",
  "Usługi nieobjęte ubezpieczeniem zdrowotnym oraz świadczenia pozostałych poradni są płatne zgodnie z cennikiem obowiązującym w naszej placówce medycznej.",
];

export const priceList: { name: string; price: string }[] = [
  {
    name: "Porada lekarska udzielona pacjentowi nie zapisanemu do Przychodni, u którego nie występuje zagrożenie zdrowia lub życia",
    price: "200,00 zł",
  },
  { name: "Orzeczenie dla celów sanitarnych z wpisem do książeczki", price: "50,00 zł" },
  {
    name: "Orzeczenie lekarskie na wniosek pacjenta: dla celów rentowych, ZUS, KRUS (wypełnienie wniosku, przygotowanie dokumentacji)",
    price: "50,00 zł",
  },
  { name: "Epikryza – komercyjne firmy ubezpieczeniowe", price: "200,00 zł" },
  {
    name: "Epikryza + wyciąg dokumentacji (opis lub wpis) z potwierdzeniem „za zgodność z oryginałem” dla firm komercyjnych",
    price: "250,00 zł",
  },
  { name: "Badanie ciśnienia tętniczego i tętna", price: "20,00 zł" },
  { name: "Iniekcja domięśniowa i podskórna", price: "30,00 zł" },
  { name: "Iniekcja dożylna", price: "30,00 zł" },
  { name: "Zmiana opatrunku, zdjęcie szwów", price: "30,00 zł" },
  { name: "Holter ciśnieniowy", price: "150,00 zł" },
  { name: "Wykonanie EKG", price: "50,00 zł" },
  { name: "Sporządzanie drugiej kopii dokumentacji medycznej (za stronę)", price: "0,50 zł" },
];

export const ePrescription = {
  title: "Zamów receptę",
  body: "Pacjenci ARSMEDICA mają możliwość korzystania z nowoczesnego rozwiązania, jakim jest e-recepta. Umożliwia ono zamawianie recepty na przepisane przez lekarza leki bez konieczności wizyty w przychodni. Zamówione na portalu e-recepty można zrealizować w dowolnej aptece na podstawie otrzymanego SMS-a z odpowiednim kodem umożliwiającym odbiór leków. Usługa skierowana jest do pacjentów, którzy przyjmują leki stosowane w leczeniu chorób przewlekłych.",
  note: "W celu otrzymania e-recepty prosimy o podanie aktualnego numeru telefonu oraz adresu e-mail.",
};
