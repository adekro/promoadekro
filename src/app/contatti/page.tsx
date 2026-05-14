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
    <section className="section">
      <div className="container">
        <h1>Contatti</h1>
        <p className="section-lead">
          Vuoi digitalizzare processi, migliorare il tuo sito o creare un
          gestionale su misura? Scrivici e analizziamo insieme il progetto.
        </p>
        <div className="cards">
          <article className="card">
            <h2>Email</h2>
            <p>info@adekro.it</p>
          </article>
          <article className="card">
            <h2>Servizi principali</h2>
            <p>
              Sviluppo siti web, software gestionali, app personalizzate,
              integrazioni e automazioni per PMI.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}