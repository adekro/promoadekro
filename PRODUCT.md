# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Due pubblici in proporzione simile:
- **PMI in cerca di un gestionale su misura**: titolari/responsabili che non trovano un software standard adatto al proprio modo di lavorare e valutano uno sviluppo ad hoc con Adekro (servizio "Gestionali su Misura").
- **Utenti interessati a un prodotto verticale gia pronto**: Agricola (agricoltori/agronomi), HorseHouse (maneggi/professionisti equestri), FantAuction (fantaallenatori), DrinkTrainer (bartender/appassionati cocktail), SiPlanner (coppie che organizzano il matrimonio).

## Product Purpose

Adekro e una software house (Adekro di Emanuele Croce, Voghera - PV) che sviluppa software su misura, gestionali, app web e mobile, automazioni e integrazioni API per PMI. Il sito e sia vetrina del servizio di sviluppo custom sia showcase dei prodotti digitali gia realizzati.

## Positioning

"Software che segue il lavoro, non il contrario": sviluppo guidato dai processi reali del cliente invece di adattare l'azienda a un gestionale standard. Catalogo di prodotti verticali nati da bisogni concreti (lavoro, passioni, momenti importanti) accanto al servizio di sviluppo su misura.

## Operating Context

Sito Next.js (App Router) con pagine: home, `/chi-siamo`, `/prodotti` (indice) e `/prodotti/[slug]` (schede prodotto con benefit, FAQ, processo), `/novita`, `/contatti`, `/privacy-policy`, `/cookie-policy`. Include cookie consent, schema.org (Organization, WebSite), sitemap e robots generati. Contenuti gestiti come dati tipizzati in `src/lib/products.ts` e `src/lib/news.ts`.

## Capabilities and Constraints

- **URL e struttura delle pagine sono un vincolo fermo**: slug, gerarchia delle route e meta title/description/keywords esistenti non vanno cambiati per non perdere posizionamento SEO gia acquisito.
- **Testi e copy dei prodotti sono un vincolo fermo**: descrizioni, benefit, FAQ e processo di ciascun prodotto in `products.ts` restano invariati; il lavoro riguarda la veste visiva e il layout, non il contenuto.
- Il redesign visivo puo spingersi oltre l'aspetto attuale (palette, tipografia, stile dei componenti): l'attuale direzione visiva e un riferimento di partenza, non un vincolo da preservare.
- Stack: Next.js 16.2.6 (App Router) + React 19, nessuna libreria UI esterna al momento. Font attuali: Space Grotesk (sans) + Merriweather (serif) via `next/font`.
- Il markup Schema.org, i meta tag e i file `sitemap.ts`/`robots.ts` sono parte del posizionamento SEO e vanno preservati o rafforzati, mai rimossi.

## Brand Commitments

Nome "Adekro", logo esistente (`/public/logo.png`), ragione sociale "Adekro di Emanuele Croce" con sede a Voghera (PV). Loghi dei singoli prodotti in `/public/loghiprodotti/` da mantenere.

## Evidence on Hand

Contenuti reali (non fittizi) per ogni prodotto: descrizioni, benefit, FAQ, processo e keyword SEO gia scritti in `src/lib/products.ts`. Nessun claim, testimonianza, prezzo o dato di performance da inventare: il sito non ne presenta attualmente e nessuno e stato fornito.

## Product Principles

- Il servizio di sviluppo su misura e i prodotti verticali hanno pari peso e devono restare entrambi leggibili e raggiungibili dalla home.
- Ogni modifica visiva deve preservare o migliorare la SEO tecnica esistente (URL, meta, schema, performance), mai comprometterla.
- Il copy e i contenuti di prodotto sono fissi: il lavoro di design agisce su gerarchia, layout, tipografia e componenti, non sul testo.
- Il tono resta concreto e professionale, coerente con un pubblico di PMI e utenti finali di prodotti verticali molto diversi tra loro (agricoltura, equitazione, fantacalcio, cocktail, matrimoni).
