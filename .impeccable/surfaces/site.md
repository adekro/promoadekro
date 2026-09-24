---
version: 1
slug: "site"
primary_target: "site"
related_targets: []
---

## Direction contract

THESIS: Il sito di una software house non deve sembrare un template SaaS con blob sfumati e card generiche: deve mostrare il modo in cui Adekro pensa il software, cioe come uno studio di progettazione tecnica che disegna prima di costruire. Il sito rifiuta l'arrangiamento di categoria (hero con blob colorati, card con ombra morbida e bordi arrotondati generici, icone stock) e lo sostituisce con il linguaggio del disegno tecnico: griglia millimetrata, linee di quota, annotazioni, nodi di processo.

OWN-WORLD: Palette blu notte / blu reale esistente (--bg-strong, --bg-accent, --blue-mid) su fondo carta chiaro (--bg-main, --bg-surface), con l'oro del marchio (--brand, --gold-light) usato come inchiostro di quota/annotazione, mai come sfondo pieno. Griglia millimetrata (linee sottili 1px a interasse fisso) come texture di fondo nelle sezioni chiave, non ovunque. Linee di quota (dimension lines) con tacche e valori numerici come elemento decorativo ricorrente accanto a titoli e statistiche. Nodi/etichette tipo "Analisi", "Sviluppo", "Rilascio" con bordo netto invece di badge arrotondati morbidi. Tipografia: Merriweather (serif) per i titoli resta, ma trattata come didascalia tecnica (tracking piu stretto, dimensioni piu decise); Space Grotesk per UI e dati, con varianti numeriche tabulari per protocolli/quote. Bordi squadrati o leggermente smussati (4-8px), mai pillole morbide ovunque: i bottoni pill restano solo per le CTA principali, il resto del sistema usa rettangoli con angoli netti, come un tavolo da disegno. Ombre sostituite per lo piu da bordi netti e piccoli offset "a calco" (tipo doppio contorno), non da blur diffusi.

STORY: Il visitatore (PMI o utente di un prodotto verticale) capisce in pochi secondi che Adekro non vende un gestionale pronto all'uso preso da uno scaffale, ma progetta il software attorno al lavoro reale, con lo stesso rigore di uno studio tecnico. Crede che dietro ogni prodotto (Agricola, HorseHouse, FantAuction, DrinkTrainer, SiPlanner, i gestionali su misura) ci sia un processo di analisi e progettazione visibile, non magia. Agisce esplorando il catalogo prodotti o aprendo un confronto diretto per un progetto su misura.

FIRST VIEWPORT: Hero a schermo intero con, a sinistra, il kicker + h1 + paragrafo + CTA esistenti (contenuto invariato); a destra, un pannello "foglio da disegno" che sostituisce l'attuale hero-panel/hero-workspace: sfondo blu notte con griglia millimetrata sottile, due-tre "nodi di processo" collegati da linee di quota (Analisi -> Progettazione -> Sviluppo), con etichette numeriche in stile tabellare (es. "01", "02", "03") e un piccolo indicatore di stato animato (pallino pulsante) coerente con l'esistente workspace-status. La CTA primaria resta un pill dorato, unico elemento arrotondato morbido della vista, per restare riconoscibile come azione.

FORM: Direzione scelta dall'utente tra le candidate proposte: "Lo Studio di Progettazione" (studio tecnico di progettazione / blueprint), seconda in ordine di risoluzione ma la piu risonante secondo la mia lista personale (IMPECCABLE'S PICK), preferita alla direzione assegnata dal roll ("Il Registro dell'Impresa", indice 3) e alla "Plancia di Comando". Seed key: f0fb52ea (roll degradato, rete non raggiungibile, nessuno sfidante).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
