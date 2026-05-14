import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Adekro per sviluppare siti web, software gestionali e app su misura per la tua impresa.",
  alternates: {
    canonical: "/contatti",
  },
};

export default function ContattiPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Contatti</span>
              <h1>Parliamo del progetto, dei processi o del prossimo passo digitale</h1>
              <p className="section-lead">
                Se stai valutando un nuovo sito, un gestionale o una soluzione su misura,
                possiamo partire da una conversazione semplice per capire obiettivi,
                criticita e priorita operative.
              </p>
            </div>
            <div className="cta-row">
              <Link href="mailto:info@adekro.it" className="btn btn-primary">
                Scrivi a info@adekro.it
              </Link>
              <Link href="/prodotti" className="btn btn-secondary">
                Guarda le soluzioni disponibili
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Come possiamo aiutarti</span>
              <h2>Richieste frequenti su cui possiamo darti subito una direzione</h2>
            </div>
            <div className="cards">
              <article className="card">
                <h3>Nuovo sito o restyling</h3>
                <p>
                  Quando la presenza online non rappresenta piu l&apos;azienda o non genera contatti utili, progettiamo una base piu efficace.
                </p>
              </article>
              <article className="card">
                <h3>Gestione interna dispersiva</h3>
                <p>
                  Se dati e attivita sono sparsi tra fogli, chat e strumenti scollegati, definiamo un flusso piu ordinato e controllabile.
                </p>
              </article>
              <article className="card">
                <h3>Automazioni e integrazioni</h3>
                <p>
                  Se vuoi ridurre passaggi manuali o collegare strumenti esistenti, identifichiamo i punti in cui intervenire prima.
                </p>
              </article>
              <article className="card">
                <h3>Prodotti da personalizzare</h3>
                <p>
                  Se una soluzione Adekro e gia vicina al tuo bisogno, possiamo adattarla al tuo contesto operativo con tempi piu rapidi.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Cosa includere nel primo contatto</span>
              <h2>Piu informazioni ci dai, piu rapidamente possiamo essere utili</h2>
            </div>
            <ul className="feature-list">
              <li>Che tipo di progetto stai valutando: sito, gestionale, app o automazione.</li>
              <li>Quali problemi vuoi risolvere subito o quali attivita oggi ti fanno perdere tempo.</li>
              <li>Se esistono gia strumenti da mantenere, integrare o sostituire.</li>
              <li>Tempi desiderati, vincoli operativi e obiettivi principali del progetto.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}