import type { Product } from "@/lib/products";

export type NewsItem = {
  slug: string;
  title: string;
  sector: "agricola" | "horsehouse" | "gestionali-su-misura" | "generale";
  date: string; // ISO date, es. "2026-09-22"
  summary: string;
  body: string[];
  relatedProductSlug?: Product["slug"];
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
    slug: "dati-satellitari-copernicus-piccole-aziende-agricole",
    title:
      "[Esempio] Perche i dati satellitari Copernicus non sono solo per le grandi aziende agricole",
    sector: "agricola",
    date: "2026-09-15",
    summary:
      "Sempre piu aziende agricole di piccole e medie dimensioni iniziano a consultare dati satellitari per monitorare le colture, non solo le grandi realta strutturate.",
    body: [
      "[Sostituisci questo paragrafo con la notizia della settimana: una novita normativa, un bando, un dato di settore o un'osservazione pratica dal campo.]",
      "L'accesso a dati satellitari come quelli di Copernicus si sta allargando anche a chi gestisce pochi ettari, perche permette di intervenire prima su un problema alla coltura invece di accorgersene troppo tardi.",
      "Per chi gestisce terreni e particelle senza un quadro unico, integrare questi dati in un gestionale evita di dover consultare fonti separate ogni volta.",
    ],
    relatedProductSlug: "agricola",
  },
  {
    slug: "routine-cura-cavallo-tracciabile",
    title: "[Esempio] Perche una routine di cura tracciabile riduce gli errori nei maneggi",
    sector: "horsehouse",
    date: "2026-09-08",
    summary:
      "Nei maneggi con piu persone coinvolte nella cura dei cavalli, la mancanza di uno storico condiviso e una delle cause piu comuni di trattamenti dimenticati o duplicati.",
    body: [
      "[Sostituisci questo paragrafo con la notizia della settimana: un evento del settore equestre, una buona pratica di gestione, un'osservazione stagionale.]",
      "Quando piu persone si alternano nella cura di un cavallo, la memoria individuale non basta: senza uno storico condiviso di dieta, trattamenti e allenamenti, e facile perdere il filo.",
      "Una scheda digitale unica per ogni cavallo, consultabile da tutto il team, riduce questo rischio e rende piu semplice il passaggio di consegne tra collaboratori.",
    ],
    relatedProductSlug: "horsehouse",
  },
  {
    slug: "quando-un-gestionale-standard-non-basta",
    title: "[Esempio] I segnali che indicano che un gestionale standard non basta piu",
    sector: "gestionali-su-misura",
    date: "2026-09-01",
    summary:
      "Fogli di calcolo, chat e software diversi che non comunicano tra loro sono spesso il primo segnale che serve un sistema pensato sui processi reali dell'azienda.",
    body: [
      "[Sostituisci questo paragrafo con la notizia della settimana: una tendenza nel software gestionale per PMI, un caso pratico, una domanda ricorrente dei clienti.]",
      "Molte PMI si accorgono di aver bisogno di un gestionale su misura non da un singolo evento, ma dall'accumularsi di piccole frizioni quotidiane: dati sparsi, passaggi manuali, informazioni che non tornano tra un foglio e l'altro.",
      "In questi casi il punto di partenza non e scegliere un software piu grande, ma capire quali processi reali il team sta gia seguendo e costruire lo strumento intorno a quelli.",
    ],
    relatedProductSlug: "gestionali-su-misura",
  },
];

export function getNewsBySlug(slug: string) {
  return news.find((item) => item.slug === slug);
}

export function getSortedNews() {
  return [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
}
