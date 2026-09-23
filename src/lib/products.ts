export type Product = {
  slug: string;
  name: string;
  // "prodotto": un'app o un gestionale gia pronto (Agricola, HorseHouse, ...).
  // "servizio": un percorso di sviluppo su misura, non un prodotto con un nome proprio.
  kind: "prodotto" | "servizio";
  category: string;
  logo: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  idealFor: string;
  seoKeywords: string[];
  faqs: { question: string; answer: string }[];
  process?: { title: string; description: string }[];
  metaDescription?: string;
};

export const products: Product[] = [
  {
    slug: "gestionali-su-misura",
    name: "Gestionali su Misura",
    kind: "servizio",
    category: "Gestionale personalizzato",
    logo: "/loghiprodotti/gestionali-su-misura.svg",
    shortDescription:
      "Il servizio con cui costruiamo, insieme ai nostri esperti, un gestionale personalizzato ad hoc sulle esigenze reali della tua azienda.",
    metaDescription:
      "Costruiamo insieme ai nostri esperti un gestionale su misura per la tua azienda: analisi guidata, sviluppo per fasi, evoluzione continua. Parliamone insieme.",
    longDescription:
      "Gestionali su Misura nasce dal confronto diretto con te: ci racconti come lavora davvero la tua azienda, quali dati e attivita vuoi tenere sotto controllo, e i nostri esperti progettano e sviluppano un gestionale personalizzato costruito passo dopo passo insieme al tuo team, senza forzare i tuoi processi dentro uno strumento standard.",
    benefits: [
      "Analisi guidata delle esigenze insieme ai nostri esperti, senza tecnicismi",
      "Gestionale costruito passo dopo passo con il tuo contributo diretto",
      "Struttura, flussi e permessi disegnati sui processi reali della tua azienda",
      "Evoluzione nel tempo con nuove funzioni aggiunte quando servono davvero",
    ],
    idealFor:
      "PMI che non trovano un gestionale standard adatto al proprio modo di lavorare e vogliono costruire, insieme ai nostri esperti, un software su misura per la propria attivita.",
    seoKeywords: [
      "gestionale su misura",
      "gestionali personalizzati ad hoc",
      "software gestionale personalizzato",
      "sviluppo gestionale ad hoc",
      "gestionale aziendale su misura per PMI",
    ],
    faqs: [
      {
        question: "Come funziona la creazione di un gestionale su misura con Adekro?",
        answer:
          "Partiamo da un confronto in cui ci racconti esigenze, processi e priorita. I nostri esperti progettano poi il gestionale insieme a te, in fasi verificabili, cosi da costruire uno strumento realmente aderente al tuo modo di lavorare.",
      },
      {
        question: "Quanto tempo serve per avere un gestionale personalizzato?",
        answer:
          "Dipende dalla complessita dei processi da digitalizzare. Lavorando per fasi condivise, puoi vedere e validare progressivamente le funzioni gia pronte, invece di attendere un'unica consegna finale.",
      },
      {
        question: "Posso far evolvere il gestionale anche dopo il rilascio?",
        answer:
          "Si, un gestionale ad hoc e pensato per crescere: possiamo aggiungere nuove funzioni, automazioni e integrazioni man mano che l'azienda cambia esigenze.",
      },
    ],
    process: [
      {
        title: "Ascolto delle esigenze",
        description:
          "Analizziamo insieme a te attivita, dati e criticita operative per capire cosa il gestionale deve davvero risolvere.",
      },
      {
        title: "Progettazione condivisa",
        description:
          "I nostri esperti disegnano flussi, ruoli e schermate insieme al tuo team, validando ogni scelta prima di sviluppare.",
      },
      {
        title: "Sviluppo per fasi",
        description:
          "Costruiamo il gestionale in fasi verificabili, cosi puoi vedere e testare le funzioni man mano che vengono realizzate.",
      },
      {
        title: "Rilascio ed evoluzione",
        description:
          "Formiamo il team all'uso del gestionale e continuiamo ad affiancarti per aggiungere nuove funzioni quando servono.",
      },
    ],
  },
  {
    slug: "horsehouse",
    kind: "prodotto",
    name: "HorseHouse",
    category: "Gestionale per maneggi",
    logo: "/loghiprodotti/horsehouse.png",
    shortDescription:
      "Un gestionale dedicato alla cura quotidiana del cavallo, dalla dieta ai trattamenti fino agli allenamenti.",
    metaDescription:
      "Organizza dieta, trattamenti e allenamenti di ogni cavallo del maneggio in un'unica scheda condivisa dal team, aggiornata ogni giorno. Richiedi una demo.",
    longDescription:
      "HorseHouse raccoglie in un unico spazio le informazioni essenziali per il benessere del cavallo: piani alimentari, trattamenti, allenamenti e attivita di cura del maneggio.",
    benefits: [
      "Scheda completa per ogni cavallo",
      "Pianificazione di dieta e trattamenti",
      "Registro di allenamenti e attivita di cura",
    ],
    idealFor:
      "Maneggi e professionisti equestri che vogliono una routine di cura tracciabile e condivisa.",
    seoKeywords: [
      "gestionale maneggio",
      "software gestione cavalli",
      "gestione dieta cavallo",
      "gestione trattamenti cavalli",
      "gestione allenamenti cavalli",
      "scheda digitale cura cavalli maneggio",
    ],
    faqs: [
      {
        question: "A chi serve HorseHouse?",
        answer:
          "HorseHouse e pensato per maneggi e professionisti equestri che vogliono centralizzare le informazioni quotidiane su ogni cavallo.",
      },
      {
        question: "Quali attivita posso gestire con HorseHouse?",
        answer:
          "Puoi organizzare dieta, trattamenti, allenamenti e attivita di cura, mantenendo uno storico leggibile per il team.",
      },
    ],
  },
  {
    slug: "agricola",
    name: "Agricola",
    kind: "prodotto",
    category: "Gestionale agricolo",
    logo: "/loghiprodotti/agricola.png",
    shortDescription:
      "Il gestionale per visualizzare terreni, colture e trattamenti in un unico quadro operativo.",
    metaDescription:
      "Gestisci terreni, particelle e colture con dati satellitari Copernicus e storico dei trattamenti fitosanitari in un'unica mappa operativa. Richiedi una demo.",
    longDescription:
      "Agricola aiuta agricoltori e agronomi a disegnare terreni e particelle, associare le colture, consultare dati satellitari Copernicus e gestire i prodotti fitosanitari impiegati in campo.",
    benefits: [
      "Mappa di terreni, particelle e colture",
      "Consultazione satellitare con dati Copernicus",
      "Assegnazione e storico dei trattamenti fitosanitari",
    ],
    idealFor:
      "Aziende agricole e agronomi che vogliono passare da informazioni disperse a una gestione territoriale leggibile.",
    seoKeywords: [
      "gestionale agricolo",
      "software gestione azienda agricola",
      "gestione particelle agricole",
      "Copernicus agricoltura",
      "gestione trattamenti fitosanitari",
      "gestionale agricolo con dati satellitari Copernicus",
    ],
    faqs: [
      {
        question: "Agricola aiuta a gestire terreni e particelle?",
        answer:
          "Si, Agricola raccoglie terreni, particelle e colture in una mappa operativa consultabile dal team.",
      },
      {
        question: "Quali dati agricoli posso tenere sotto controllo?",
        answer:
          "Puoi consultare dati satellitari Copernicus e mantenere lo storico dei trattamenti fitosanitari associati alle colture.",
      },
    ],
  },
  {
    slug: "fantauction",
    name: "FantAuction",
    kind: "prodotto",
    category: "App per fantacalcio",
    logo: "/loghiprodotti/fantauction.png",
    shortDescription:
      "L'app che mette ordine nell'asta del fantacalcio, dai giocatori preferiti ai crediti dei concorrenti.",
    longDescription:
      "FantAuction e il taccuino digitale per l'asta: annota preferiti e rigoristi, assegna ogni giocatore al fantaallenatore che lo acquista e tieni sotto controllo i crediti residui di tutta la lega.",
    benefits: [
      "Lista personale di giocatori preferiti e note d'asta",
      "Indicazione dei rigoristi per fare scelte piu consapevoli",
      "Crediti residui aggiornati per ogni concorrente",
    ],
    idealFor:
      "Fantaallenatori che vogliono affrontare l'asta con dati chiari e senza perdere il filo delle offerte.",
    seoKeywords: [
      "app asta fantacalcio",
      "gestione asta fantacalcio",
      "crediti asta fantacalcio",
      "lista giocatori fantacalcio",
      "rigoristi fantacalcio",
    ],
    faqs: [
      {
        question: "FantAuction serve durante l'asta del fantacalcio?",
        answer:
          "Si, aiuta a segnare preferiti, rigoristi, assegnazioni e crediti residui mentre l'asta e in corso.",
      },
      {
        question: "Posso controllare i crediti degli altri partecipanti?",
        answer:
          "Si, puoi aggiornare i crediti residui di ogni fantaallenatore per seguire le offerte con maggiore chiarezza.",
      },
    ],
  },
  {
    slug: "drinktrainer",
    name: "DrinkTrainer",
    kind: "prodotto",
    category: "App per bartender",
    logo: "/loghiprodotti/drinktrainer.png",
    shortDescription:
      "Catalogo cocktail, filtro ingredienti e allenamento pratico per versare le once con precisione.",
    longDescription:
      "DrinkTrainer aiuta bartender e appassionati a creare cocktail con quello che hanno gia in casa e ad allenare il gesto della versata, per dosare le once con maggiore sicurezza.",
    benefits: [
      "Catalogo di cocktail da esplorare e preparare",
      "Funzione 'Cosa hai in casa' per filtrare le ricette disponibili",
      "Allenamento della versata per migliorare il dosaggio delle once",
    ],
    idealFor:
      "Chi vuole imparare, allenarsi o trovare subito un cocktail realizzabile con gli ingredienti disponibili.",
    seoKeywords: [
      "app cocktail",
      "cocktail con ingredienti che ho in casa",
      "catalogo cocktail",
      "allenamento versata bartender",
      "dosare once cocktail",
    ],
    faqs: [
      {
        question: "DrinkTrainer suggerisce cocktail in base agli ingredienti?",
        answer:
          "Si, la funzione Cosa hai in casa filtra le ricette in base agli ingredienti disponibili.",
      },
      {
        question: "DrinkTrainer e utile per allenare la versata?",
        answer:
          "Si, include un allenamento pratico per migliorare il dosaggio delle once e acquisire maggiore sicurezza nel gesto.",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}
