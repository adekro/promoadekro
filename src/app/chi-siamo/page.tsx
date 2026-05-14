import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Scopri Adekro: partner tecnologico per PMI che cercano siti web, gestionali e app su misura orientati a efficienza e crescita.",
  alternates: {
    canonical: "/chi-siamo",
  },
};

export default function ChiSiamoPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Chi siamo</span>
              <h1>Un partner tecnico che ragiona insieme alla tua impresa</h1>
              <p className="section-lead">
                Adekro sviluppa soluzioni informatiche per PMI che vogliono migliorare
                organizzazione interna, presenza online e qualita del servizio.
                Lavoriamo con un approccio concreto: ascolto, ordine progettuale e
                strumenti utili da adottare davvero nel quotidiano.
              </p>
            </div>
            <div className="stats-grid">
              <article className="stat-card">
                <span className="stat-value">Pratico</span>
                <p className="kpi-label">Partiamo dai processi reali e non da soluzioni preconfezionate.</p>
              </article>
              <article className="stat-card">
                <span className="stat-value">Chiaro</span>
                <p className="kpi-label">Traduciamo esigenze tecniche in percorsi comprensibili e misurabili.</p>
              </article>
              <article className="stat-card">
                <span className="stat-value">Scalabile</span>
                <p className="kpi-label">Costruiamo basi che possono evolvere insieme al business.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Il nostro approccio</span>
              <h2>Prima mettiamo a fuoco il problema, poi costruiamo la soluzione</h2>
            </div>
            <div className="cards">
              <article className="card">
                <h3>Analisi del contesto</h3>
                <p>
                  Studiamo strumenti gia in uso, frizioni operative, obiettivi commerciali e priorita del team per evitare progetti astratti.
                </p>
              </article>
              <article className="card">
                <h3>Progettazione orientata all&apos;adozione</h3>
                <p>
                  Disegniamo interfacce, flussi e contenuti che possano essere compresi e usati con facilita da chi lavora ogni giorno.
                </p>
              </article>
              <article className="card">
                <h3>Integrazione con il lavoro reale</h3>
                <p>
                  Le nostre soluzioni dialogano con i processi aziendali e con gli strumenti esistenti, senza creare complessita extra.
                </p>
              </article>
              <article className="card">
                <h3>Crescita nel tempo</h3>
                <p>
                  Progettiamo basi stabili che possono essere estese con nuove funzioni, automazioni e miglioramenti progressivi.
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
              <span className="eyebrow">Perche Adekro</span>
              <h2>Ci scegli se cerchi un interlocutore che unisce business e sviluppo</h2>
            </div>
            <ul className="feature-list">
              <li>Hai bisogno di un sito o di un software che parli il linguaggio della tua impresa.</li>
              <li>Vuoi ridurre attivita manuali, fogli sparsi e passaggi poco controllati.</li>
              <li>Cerchi un partner tecnico che sappia spiegare scelte e priorita in modo semplice.</li>
              <li>Vuoi far crescere gradualmente il progetto senza dover ripartire ogni volta da zero.</li>
            </ul>
            <div className="cta-row">
              <Link href="/prodotti" className="btn btn-secondary">
                Esplora le soluzioni
              </Link>
              <Link href="/contatti" className="btn btn-primary">
                Prenota un confronto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}