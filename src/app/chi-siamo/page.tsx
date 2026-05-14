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
    <section className="section">
      <div className="container">
        <h1>Chi siamo</h1>
        <p className="section-lead">
          Adekro e una realta specializzata nello sviluppo di soluzioni
          informatiche per piccole e medie imprese. Affianchiamo le aziende nel
          percorso di digitalizzazione con strumenti concreti e personalizzati.
        </p>
        <div className="cards">
          <article className="card">
            <h2>Approccio pratico</h2>
            <p>
              Ogni progetto parte dall&apos;analisi dei processi attuali per costruire
              software che semplifica davvero il lavoro quotidiano.
            </p>
          </article>
          <article className="card">
            <h2>Soluzioni scalabili</h2>
            <p>
              Progettiamo piattaforme pronte a crescere insieme all&apos;azienda,
              mantenendo flessibilita e performance nel tempo.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}