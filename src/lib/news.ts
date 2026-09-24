import type { Product } from "@/lib/products";

export type NewsItem = {
  slug: string;
  title: string;
  sector: "agricola" | "horsehouse" | "gestionali-su-misura" | "generale";
  date: string; // ISO date, es. "2026-09-22"
  summary: string;
  body: string[];
  relatedProductSlug?: Product["slug"];
  source?: { name: string; url: string };
};

export const sectorLabels: Record<NewsItem["sector"], string> = {
  agricola: "Agricoltura",
  horsehouse: "Mondo equestre",
  "gestionali-su-misura": "Software su misura",
  generale: "Adekro",
};

// Aggiungi una voce a settimana in cima all'array: e la novita piu recente,
// resta sempre la prima mostrata in elenco e nella sitemap.
export const news: NewsItem[] = [
  {
    slug: "giovani-agricoltori-innovazione-suolo-soil-date",
    title:
      "Il futuro dell'agricoltura riparte dal suolo: 250 giovani scelgono l'innovazione",
    sector: "agricola",
    date: "2026-09-23",
    summary:
      "A Roma oltre 250 giovani tra studenti di istituti agrari e giovani agricoltori Coldiretti hanno valutato cinque progetti di ricerca su clima, acqua, fertilita del suolo e competitivita agricola, nell'iniziativa SOIL Date promossa da CREA.",
    body: [
      "Durante la Rome Future Week si e svolto SOIL Date, un contest che ha messo a confronto ricerca scientifica e innovazione agricola: oltre 250 giovani, tra cui piu di 150 studenti di istituti agrari e oltre 100 giovani agricoltori di Coldiretti Giovani Impresa, hanno valutato cinque progetti di ricerca presentati da CREA, con la collaborazione di SISS e IUSS.",
      "La particolarita dell'iniziativa e che non sono stati giudici esperti a decidere quali innovazioni premiare, ma gli stessi giovani partecipanti, chiamati a valutare direttamente quali proposte rispondessero meglio alle grandi sfide dell'agricoltura di oggi: cambiamento climatico, gestione dell'acqua, fertilita del suolo e competitivita delle imprese agricole.",
      "Come ha sottolineato il presidente di CREA Andrea Rocchi, l'iniziativa fa incontrare ricerca, scuola e impresa agricola per costruire soluzioni di sostenibilita concrete. Un segnale che la salute del suolo, e i dati per monitorarla nel tempo, sono un tema su cui le nuove generazioni di agricoltori vogliono avere strumenti chiari e non solo intuizioni.",
      "E' lo stesso principio su cui lavora Agricola: dare a chi gestisce terreni e particelle una mappa operativa unica, capace di integrare i dati satellitari con lo storico dei trattamenti, invece di lasciare che le informazioni restino sparse tra sopralluoghi, fogli di calcolo e memoria personale.",
    ],
    relatedProductSlug: "agricola",
    source: {
      name: "ANSA",
      url: "https://www.ansa.it/sito/notizie/economia/2026/09/23/il-futuro-dellagricoltura-parte-dal-suolo-250-giovani-scelgono-vie-dellinnovazione_2174893e-658c-4ba9-b4ed-fc3035b30332.html",
    },
  },
  {
    slug: "francesco-dagnelli-campione-italiano-equitazione",
    title:
      "Francesco D'Agnelli campione italiano di equitazione per la seconda volta",
    sector: "horsehouse",
    date: "2026-09-15",
    summary:
      "Francesco D'Agnelli, della scuola di equitazione Il Ginepro di Isernia, ha conquistato a Montefalco il titolo di campione italiano nella categoria T2, il secondo della carriera, sotto la guida dell'istruttore Loris Matticoli.",
    body: [
      "A Montefalco, in Umbria, si sono svolti i campionati italiani organizzati dalla Federazione Italiana Turismo Equestre - Attivita Equestri per persone con abilita diverse. Francesco D'Agnelli, della scuola di equitazione Il Ginepro di Isernia, ha conquistato il titolo nazionale nella categoria T2 (trotto con autonomia), introdotta solo l'anno precedente: per lui e la seconda vittoria italiana in carriera.",
      "L'istruttore Loris Matticoli e la scuola molisana hanno sottolineato come questo risultato rappresenti molto piu di una vittoria sportiva: e una prova concreta di come le attivita equestri possano essere uno strumento straordinario di inclusione, crescita personale e conquista di autonomia.",
      "Dietro un risultato agonistico come questo c'e un lavoro quotidiano fatto di allenamenti costanti, cura del cavallo e continuita nella routine: gli stessi elementi che, su scala di maneggio, HorseHouse aiuta a tenere organizzati in un'unica scheda per ogni cavallo, dalla dieta agli allenamenti fino ai trattamenti.",
    ],
    relatedProductSlug: "horsehouse",
    source: {
      name: "ANSA",
      url: "https://www.ansa.it/molise/notizie/2026/09/15/equitazione-francesco-dagnelli-per-la-seconda-volta-campione-italiano_46190c47-9e69-41e7-8b39-841b91547c86.html",
    },
  },
  {
    slug: "med-salute-2026-innovazione-liste-attesa",
    title:
      "Dalle liste d'attesa all'innovazione: le sfide della sanita a Med Salute",
    sector: "gestionali-su-misura",
    date: "2026-09-23",
    summary:
      "A Med Salute 2026, la due giorni promossa da Fiaso e Regione Calabria con otto regioni del Sud, il tema centrale e come innovazione e digitalizzazione possano affrontare liste d'attesa, sostenibilita e medicina di prossimita.",
    body: [
      "Si intitola 'Economia e salute: la sfida della sostenibilita nel Mezzogiorno' la due giorni di Med Salute 2026, organizzata da Fiaso (Federazione Italiana Aziende Sanitarie e Ospedaliere) insieme alla Regione Calabria a Gizzeria Lido e Lamezia Terme, con la partecipazione di otto regioni del Sud: Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna e Sicilia.",
      "Tra i temi al centro del confronto: gestione delle liste d'attesa, sostenibilita del sistema sanitario, medicina di prossimita, innovazione tecnologica, salute mentale e prevenzione. Il presidente Fiaso Giuseppe Quintavalle ha parlato di una 'Community of Practice' tra regioni per condividere modelli e soluzioni efficaci, invece di lasciare che ogni realta affronti da sola le stesse difficolta.",
      "E' un principio che vale anche fuori dalla sanita pubblica: davanti a processi complessi e a esigenze che cambiano da territorio a territorio (o da azienda ad azienda), l'innovazione utile raramente arriva da uno strumento identico per tutti. Che si tratti di una rete di ospedali o di una PMI, il punto di partenza resta lo stesso: capire davvero come si lavora oggi, prima di scegliere con cosa lavorare domani. E' l'approccio con cui costruiamo, insieme ai nostri esperti, un gestionale su misura sui processi reali di ogni azienda.",
    ],
    relatedProductSlug: "gestionali-su-misura",
    source: {
      name: "ANSA",
      url: "https://www.ansa.it/canale_saluteebenessere/notizie/sanita/2026/09/23/dalle-liste-dattesa-allinnovazione-le-sfide-della-sanita-a-med-salute_8b3e2c65-2bd8-47a6-a4fb-25df38d865f4.html",
    },
  },
];

export function getNewsBySlug(slug: string) {
  return news.find((item) => item.slug === slug);
}

export function getSortedNews() {
  return [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
}
