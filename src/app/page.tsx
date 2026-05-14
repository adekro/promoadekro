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
            <h1>Trasformiamo idee in soluzioni digitali per PMI</h1>
            <p>
              Adekro sviluppa siti web professionali, software gestionali e app
              su misura. Ogni progetto nasce per migliorare i processi, ridurre
              i tempi operativi e aumentare il valore del tuo business.
            </p>
            <div className="cta-row">
              <Link href="/prodotti" className="btn btn-primary">
                Scopri i prodotti
              </Link>
              <Link href="/contatti" className="btn btn-secondary">
                Richiedi una consulenza
              </Link>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Punti di forza Adekro">
            <h2>Cosa ottieni con Adekro</h2>
            <ul>
              <li>Software pensato per le esigenze reali della tua azienda</li>
              <li>Integrazione con strumenti esistenti e flussi operativi</li>
              <li>Supporto evolutivo e ottimizzazione continua</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Servizi digitali completi, dal sito al gestionale</h2>
          <p className="section-lead">
            Lavoriamo con piccole e medie imprese che vogliono digitalizzare
            processi e comunicazione online con una strategia concreta,
            scalabile e orientata ai risultati.
          </p>
          <div className="cards">
            <article className="card">
              <h3>Siti web orientati alla conversione</h3>
              <p>
                Progettiamo siti veloci, mobile-friendly e SEO-friendly per
                migliorare visibilita e acquisizione contatti.
              </p>
            </article>
            <article className="card">
              <h3>Gestionali su misura</h3>
              <p>
                Automatizziamo attivita ripetitive e centralizziamo dati,
                documenti e processi decisionali in un unico ambiente.
              </p>
            </article>
            <article className="card">
              <h3>App custom per team e clienti</h3>
              <p>
                Sviluppiamo app intuitive che semplificano operativita interna,
                servizi ai clienti e gestione delle attivita sul campo.
              </p>
            </article>
            <article className="card">
              <h3>Automazione e integrazioni</h3>
              <p>
                Connettiamo software, API e canali digitali per ridurre errori,
                accelerare i flussi e migliorare il controllo operativo.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
