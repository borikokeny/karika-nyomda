export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;

  details?: {
    intro?: string;

    sizes?: {
      name: string;
      description: string;
    }[];

    paperTypes?: string[];
  };

  ordering?: {
    title: string;
    description: string;
  };

  pickup?: {
    title: string;
    description: string;
  }[];
 
};

export const services: Service[] = [
  {
    slug: "nevjegykartyak",
    title: "Névjegykártyák",
    description:
      "Egyedi névjegykártyák, amelyek segítenek kitűnni a versenytársak közül.",
    image: "/images/services/Nevjegykartyak.jpg",
     details: {
    intro:
      "Különböző méretek, papírfajták és felületnemesítések közül választhatsz. Mi pedig gondoskodunk a minőségi nyomtatásról.",

    sizes: [
        {
    name: "90 × 50 mm",
    description: "álló vagy fekvő",
  },
  {
    name: "85 × 55 mm",
    description: "álló vagy fekvő",
  },
  {
    name: "90 × 90 mm",
    description: "négyzet",
  },
    ],

    paperTypes: [
      "350 g matt műnyomó",
      "350 g fényes műnyomó",
      "700 g matt műnyomó",
      "Prémium kreatív papírok",
      "Újrahasznosított papírok",
    ],
  },
  ordering: {
    title: "Rendelés leadása",
    description:
      "Rendelésedet online vagy személyesen adhatod le. A fájlok feltöltése után kollégáink ellenőrzik az anyagot, és visszajelzünk a továbbiakról.",
  },
  pickup: [
    {
      title: "Személyes átvétel",
      description:
        "Rendelésedet személyesen átveheted nyomdánkban, előre egyeztetett időpontban.",
    },
    {
      title: "Házhozszállítás",
      description:
        "Budapesten és környékén saját futárral szállítjuk ki rendelésedet.",
    },
    {
      title: "Csomagküldés",
      description:
        "Országosan, megbízható partnereinkkel küldjük el a kész megrendelést.",
    },
  ],
  },
  {
    slug: "fuzetek-konyvek",
    title: "Füzetek, könyvek",
    description:
      "Kiváló minőségű füzetek, jegyzetfüzetek és könyvek nyomtatása és kötése különböző méretekben.",
    image: "/images/services/Fuzetek.jpg",
  },
  {
    slug: "brosurak-szorolapok",
    title: "Brosúrák, szórólapok",
    description:
      "Professzionális brosúrák és szórólapok nyomtatása, amelyek hatékonyan közvetítik üzenetedet.",
    image: "/images/services/Brosurak.jpg",
  },
   {
    slug: "cimkek-etikettek",
    title: "Cimkék, etikettek",
    description:
      "Öntapadós cimkék, etikettek és egyéb csomagolástechnikai megoldások termékedhez.",
    image: "/images/services/Etikettek.jpg",
  },
    {
    slug: "meghivok",
    title: "Meghívók",
    description:
      "Esküvői, születésnapi és egyéb alkalmakra szóló meghívók nyomtatása.",
    image: "/images/services/Meghivok.jpg",
  },
    {
    slug: "plakatok",
    title: "Plakátok",
    description:
      "Plakátok és egyéb reklámanyagok nyomtatása beltérre és kültérre.",
    image: "/images/services/Plakatok.jpg",
  },
    {
    slug: "oklevelek-okiratok",
    title: "Oklevelek, okiratok",
    description:
      "Oklevelek, tanúsítványok és egyéb hivatalos dokumentumok nyomtatása.",
    image: "/images/services/Oklevel.jpg",
  },
    {
    slug: "tervrajzok-muszaki-nyomtatas",
    title: "Tervrajzok, műszaki nyomtatás",
    description:
      "Tervrajzok, műszaki dokumentációk és nagy felbontású nyomtatások készítése.",
    image: "/images/services/Tervrajzok.jpg",
  },
    {
    slug: "naptarak",
    title: "Naptárak",
    description:
      "Asztali, fali és egyedi naptárak nyomtatása céges és privát felhasználásra.",
    image: "/images/services/Naptar.jpg",
  },
    {
    slug: "gyaszjelentesek",
    title: "Gyászjelentések",
    description:
      "Gyászjelentések, emléklapok, temetési meghívók készítése.",
    image: "/images/services/Gyaszjelentesek.jpg",
  },
    {
    slug: "egyedi-munkak",
    title: "Egyedi munkák",
    description:
      "Van egy különleges ötleted? Kérj egyedi nyomdai megoldást tőlünk!",
    image: "/images/services/Egyedi.jpg",
  },
    {
    slug: "fenymasolas",
    title: "Fénymásolás",
    description:
      "Fekete-fehér és színes fénymásolás A3-as méretig, gyorsan és kedvező áron.",
    image: "/images/services/Fenymasolas.jpg",
  },
];
