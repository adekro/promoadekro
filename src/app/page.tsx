import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sviluppo Software su Misura per PMI",
  description:
    "Adekro realizza siti web, gestionali e app personalizzate per piccole e medie imprese che vogliono crescere online.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Soluzioni digitali su misura per PMI</span>
            <h1>Software, siti e automazioni costruiti per far lavorare meglio la tua impresa</h1>
            <p>
              Adekro affianca le piccole e medie imprese che vogliono chiarire i
              processi, ridurre attivita manuali e trasformare il digitale in un
              vantaggio operativo. Progettiamo strumenti concreti, leggibili e
              pronti a crescere con l&apos;azienda.
            </p>
            <div className="cta-row">
              <Link href="/prodotti" className="btn btn-primary">
                Vedi soluzioni e prodotti
              </Link>
              <Link href="/contatti" className="btn btn-secondary">
                Parla con Adekro
              </Link>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Punti di forza Adekro">
            <h2>Una direzione chiara, prima ancora del codice</h2>
            <ul className="feature-list">
              <li>Analisi dei flussi reali prima di proporre qualsiasi soluzione</li>
              <li>Progetti modulari, integrabili e sostenibili nel tempo</li>
              <li>Supporto vicino al business, non solo al lato tecnico</li>
              <li>Un unico partner per web, gestionali, app e automazioni</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Cosa portiamo in azienda</span>
              <h2>Una base digitale piu chiara, piu ordinata, piu utile</h2>
              <p className="section-lead">
                Non ci limitiamo a consegnare un sito o un applicativo. Disegniamo
                strumenti che aiutano a vendere meglio, coordinare il lavoro e
                prendere decisioni con piu controllo.
              </p>
            </div>
            <div className="stats-grid" aria-label="Punti chiave Adekro">
              <article className="stat-card">
                <span className="stat-value">PMI</span>
                <p className="kpi-label">Focus su aziende che hanno bisogno di strumenti concreti, non complessi.</p>
              </article>
              <article className="stat-card">
                <span className="stat-value">End-to-end</span>
                <p className="kpi-label">Dal sito alla gestione interna, con un percorso progettuale coerente.</p>
              </article>
              <article className="stat-card">
                <span className="stat-value">Su misura</span>
                <p className="kpi-label">Ogni soluzione nasce dai processi reali e dagli obiettivi del team.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Servizi principali</span>
            <h2>Interventi mirati per migliorare presenza online e operativita</h2>
            <p className="section-lead">
              Ogni area e pensata per integrarsi con le altre: marketing, gestione,
              supporto al cliente e automazione devono parlare la stessa lingua.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <h3>Siti web orientati alla conversione</h3>
              <p>
                Siti veloci, chiari e costruiti per raccontare il valore dell&apos;azienda,
                generare contatti qualificati e rafforzare il posizionamento online.
              </p>
            </article>
            <article className="card">
              <h3>Gestionali su misura</h3>
              <p>
                Dashboard, flussi approvativi, archivi condivisi e strumenti di controllo
                per ridurre dispersioni operative e centralizzare le informazioni.
              </p>
            </article>
            <article className="card">
              <h3>App per team e clienti</h3>
              <p>
                Esperienze semplici da usare, utili sul campo e allineate ai processi
                quotidiani di chi deve lavorare in modo rapido e ordinato.
              </p>
            </article>
            <article className="card">
              <h3>Automazioni e integrazioni</h3>
              <p>
                Colleghiamo strumenti esistenti, riduciamo passaggi manuali e rendiamo
                piu fluido il lavoro tra reparti, clienti e canali digitali.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Metodo di lavoro</span>
              <h2>Un percorso semplice per trasformare esigenze complesse in strumenti utili</h2>
              <p className="section-lead">
                Partiamo dall&apos;operativita, non dalle mode. Questo permette di consegnare
                soluzioni piu adottabili dal team e piu efficaci per il business.
              </p>
            </div>
            <div className="cards">
              <article className="card">
                <h3>1. Analisi e priorita</h3>
                <p>
                  Leggiamo processi, colli di bottiglia e obiettivi per capire dove il digitale puo produrre valore reale.
                </p>
              </article>
              <article className="card">
                <h3>2. Progettazione chiara</h3>
                <p>
                  Organizziamo funzioni, contenuti e flussi in modo comprensibile per chi dovra usare davvero il sistema.
                </p>
              </article>
              <article className="card">
                <h3>3. Sviluppo e rilascio</h3>
                <p>
                  Realizziamo la soluzione con attenzione a usabilita, integrazione e performance, senza complicazioni inutili.
                </p>
              </article>
              <article className="card">
                <h3>4. Evoluzione continua</h3>
                <p>
                  Monitoriamo il risultato, raccogliamo feedback e accompagniamo la crescita del progetto nel tempo.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Prossimo passo</span>
              <h2>Vuoi capire quale soluzione e piu adatta alla tua impresa?</h2>
              <p className="section-lead">
                Possiamo partire da un&apos;esigenza precisa oppure aiutarti a mettere ordine tra strumenti, processi e priorita.
              </p>
            </div>
            <div className="cta-row">
              <Link href="/chi-siamo" className="btn btn-secondary">
                Scopri come lavoriamo
              </Link>
              <Link href="/contatti" className="btn btn-primary">
                Richiedi un confronto iniziale
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
