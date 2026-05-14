export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
};

export const products: Product[] = [
  {
    slug: "tisposi-gestione-matrimoni",
    name: "TiSposi - Gestione Matrimoni",
    shortDescription:
      "Piattaforma per wedding planner e strutture che vogliono coordinare ogni fase dell'evento.",
    longDescription:
      "TiSposi semplifica l'organizzazione dei matrimoni: planning, gestione fornitori, timeline operativa e comunicazione con gli sposi in un unico gestionale.",
    benefits: [
      "Gestione appuntamenti, scadenze e checklist",
      "Dashboard per budget e stato avanzamento",
      "Collaborazione tra team, fornitori e clienti",
    ],
  },
  {
    slug: "chatbot-intelligente-configurabile",
    name: "Chatbot Intelligente Configurabile",
    shortDescription:
      "Assistente virtuale da integrare facilmente nel sito aziendale, senza progetti complessi.",
    longDescription:
      "Il chatbot intelligente Adekro aiuta i visitatori a trovare informazioni, raccoglie lead e alleggerisce il lavoro del team commerciale e supporto.",
    benefits: [
      "Configurazione semplice e personalizzabile",
      "Risposte automatiche su prodotti, servizi e FAQ",
      "Integrazione rapida in siti web esistenti",
    ],
  },
  {
    slug: "gestione-eventi",
    name: "Gestione Eventi",
    shortDescription:
      "Software per pianificare, monitorare e coordinare eventi aziendali, formativi o promozionali.",
    longDescription:
      "La soluzione Gestione Eventi centralizza iscrizioni, agenda, logistica e comunicazioni per garantire eventi ben organizzati e facilmente monitorabili.",
    benefits: [
      "Pianificazione completa delle attivita evento",
      "Gestione partecipanti e comunicazioni dedicate",
      "Report operativi per analisi e miglioramento",
    ],
  },
  {
    slug: "gestione-affitti-brevi-lunghi",
    name: "Gestione Affitti Brevi e Lunghi",
    shortDescription:
      "Piattaforma per proprietari e agenzie che amministrano immobili in locazione.",
    longDescription:
      "Gestione Affitti Brevi e Lunghi consente di controllare disponibilita, prenotazioni, contratti e pagamenti con un sistema unico e chiaro.",
    benefits: [
      "Calendario centralizzato e stato immobili",
      "Gestione contratti e documentazione",
      "Monitoraggio pagamenti e scadenze",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}