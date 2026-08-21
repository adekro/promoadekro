export type Product = {
  slug: string;
  name: string;
  category: string;
  logo: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  idealFor: string;
  seoKeywords: string[];
};

export const products: Product[] = [
  {
    slug: "fantauction",
    name: "FantAuction",
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
    idealFor: "Fantaallenatori che vogliono affrontare l'asta con dati chiari e senza perdere il filo delle offerte.",
    seoKeywords: [
      "app asta fantacalcio",
      "gestione asta fantacalcio",
      "crediti asta fantacalcio",
      "lista giocatori fantacalcio",
      "rigoristi fantacalcio",
    ],
  },
  {
    slug: "drinktrainer",
    name: "DrinkTrainer",
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
    idealFor: "Chi vuole imparare, allenarsi o trovare subito un cocktail realizzabile con gli ingredienti disponibili.",
    seoKeywords: [
      "app cocktail",
      "cocktail con ingredienti che ho in casa",
      "catalogo cocktail",
      "allenamento versata bartender",
      "dosare once cocktail",
    ],
  },
  {
    slug: "agricola",
    name: "Agricola",
    category: "Gestionale agricolo",
    logo: "/loghiprodotti/agricola.png",
    shortDescription:
      "Il gestionale per visualizzare terreni, colture e trattamenti in un unico quadro operativo.",
    longDescription:
      "Agricola aiuta agricoltori e agronomi a disegnare terreni e particelle, associare le colture, consultare dati satellitari Copernicus e gestire i prodotti fitosanitari impiegati in campo.",
    benefits: [
      "Mappa di terreni, particelle e colture",
      "Consultazione satellitare con dati Copernicus",
      "Assegnazione e storico dei trattamenti fitosanitari",
    ],
    idealFor: "Aziende agricole e agronomi che vogliono passare da informazioni disperse a una gestione territoriale leggibile.",
    seoKeywords: [
      "gestionale agricolo",
      "software gestione azienda agricola",
      "gestione particelle agricole",
      "Copernicus agricoltura",
      "gestione trattamenti fitosanitari",
    ],
  },
  {
    slug: "horsehouse",
    name: "HorseHouse",
    category: "Gestionale per maneggi",
    logo: "/loghiprodotti/horsehouse.png",
    shortDescription:
      "Un gestionale dedicato alla cura quotidiana del cavallo, dalla dieta ai trattamenti fino agli allenamenti.",
    longDescription:
      "HorseHouse raccoglie in un unico spazio le informazioni essenziali per il benessere del cavallo: piani alimentari, trattamenti, allenamenti e attivita di cura del maneggio.",
    benefits: [
      "Scheda completa per ogni cavallo",
      "Pianificazione di dieta e trattamenti",
      "Registro di allenamenti e attivita di cura",
    ],
    idealFor: "Maneggi e professionisti equestri che vogliono una routine di cura tracciabile e condivisa.",
    seoKeywords: [
      "gestionale maneggio",
      "software gestione cavalli",
      "gestione dieta cavallo",
      "gestione trattamenti cavalli",
      "gestione allenamenti cavalli",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}