@AGENTS.md

# 🛠️ ADEKRO MASTER ORCHESTRATOR: IMPECCABLE + UI/UX PRO MAX + STOPSLOP + SEO

## 📐 1. IMPLEMENTAZIONE DESIGN SYSTEM (Dal tuo Design.md)

Claude Code deve applicare rigidamente l'identità visiva "Drafting Studio" di Adekro su ogni componente generato:

- **Superfici:** Sfondo principale su Warm Ivory (`#fbf9f4`). Usa Deep Navy Plate (`#03152f`) esclusivamente per i pannelli scuri, l'hero blueprint e i componenti `.sheet-tab`.
- **Inchiostro Oro:** Il Brand Gold (`#c8953e`) è inchiostro di annotazione, linee di quotatura ed elementi grafici millimetrici. **Vietato** usarlo come colore di sfondo per intere sezioni o card.
- **Tipografia Rigida:**
  - Intestazioni/Titoli: `Merriweather, Georgia, serif` (trattato come carattere da dicitura tecnica).
  - Testo/Dati/Numeri: `Space Grotesk, sans-serif` con abilitazione esplicita dei numeri tabulari (`font-variant-numeric: tabular-nums`).
- **Arrotondamenti & Ombre:** Applica la scala geometrica di Adekro. Angoli vivi o micro-smussati (`rounded-none`, `rounded-sm` a 4px, massimo `rounded-md` a 6px). L'unica eccezione ammessa per il raggio `rounded-pill` è il bottone CTA primario. **Banna le ombre sfocate:** usa solo ombre piatte offset (es. `box-shadow: 6px 6px 0px #061b39`).

---

## 🚫 2. FILTRO ANTI-AI SLOP AUTOMATIZZATO (Regole StopSlop)

Intercetta e distruggi i pattern pigri generati solitamente dai modelli linguistici prima di stampare il codice:

- **No Card Standard:** Sostituisci la tipica struttura a 3 colonne (icona colorata + titolo + testo descrittivo) con griglie asimmetriche modulari ispirate ai fogli di calcolo tecnici o ai quadranti di un blueprint.
- **No Decorazioni Inutili:** Elimina badge pastello arrotondati, icone astratte inserite dentro cerchi sfumati e divisori anonimi. Ogni linea deve essere una linea di quotatura tecnica (`.dimension-line`) con i tick di fine corsa e un valore numerico reale (es. il conteggio degli elementi).
- **No Parole Chiave da Robot:** Vieta placeholder testuali come _"Sblocca il tuo potenziale"_, _"Soluzioni sinergiche"_, o l'uso di emoji (🚀, ✨). Il copy tecnico di Adekro deve essere asciutto, autorevole, orientato ai dati e alla precisione ingegneristica.

---

## 🔍 3. AUTOMAZIONE SEO & SEMANTICA (Regole claude-seo)

Ogni layout strutturato deve posizionarsi al vertice dei Core Web Vitals e della scansione dei motori di ricerca:

- **Architettura Ingegneristica:** Applica un uso maniacale della semantica HTML5 (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`). Un solo tag `<h1>` per pagina, integrato nell'Hero.
- **Nidificazione dei Titoli:** I tag `<h2>`, `<h3>` e `<h4>` devono seguire un ordine gerarchico impeccabile senza salti (es. mai passare da `<h2>` a `<h4>`), integrando le parole chiave di Adekro in modo naturale e descrittivo.
- **Performance & CLS Prevention:** Ogni elemento multimediale o blocco interattivo deve avere dimensioni esplicite (`width` e `height`) o aspect-ratio CSS rigidi per azzerare il Cumulative Layout Shift durante il caricamento del foglio di stile.
- **Accessibilità Tecnica:** Assicura che i testi in oro scuro (`brand-ink: #85591a`) rispettino il contrasto WCAG minimo sui fondi Ivory. Applica attributi `aria-label` descrittivi su ogni bottone ed elemento interattivo del blueprint.

---

## 💻 MODALITÀ DI OUTPUT DEL TERMINALE

1. **Risposte Dirette:** Non iniziare con messaggi di cortesia (_"Ecco il codice per Adekro..."_). Genera direttamente il codice o il file richiesto.
2. **Audit Preventivo:** Esegui una scansione silenziosa prima di mostrare il codice. Se rilevi un'ombra sfocata, un font errato (es. Inter/Roboto) o un tag semantico mancante, correggilo autonomamente prima di stampare l'output.
