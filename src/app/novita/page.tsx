import type { Metadata } from "next";
import Link from "next/link";
import { getSortedNews, sectorLabels } from "@/lib/news";

export const metadata: Metadata = {
  title: "Novita da Agricoltura, Mondo Equestre e Software su Misura",
  description:
    "Le novita settimanali di Adekro su agricoltura, gestione dei maneggi e software gestionali su misura, con spunti pratici legati ai nostri prodotti.",
  keywords: [
    "novita agricoltura digitale",
    "novita gestione maneggi",
    "novita software gestionale PMI",
  ],
  alternates: {
    canonical: "/novita",
  },
};

export default function NovitaPage() {
  const sortedNews = getSortedNews();

  return (
    <section className="section">
      <div className="container">
        <div className="section-shell">
          <div className="section-header">
            <h1>Una nota a settimana da agricoltura, maneggi e software su misura</h1>
            <p className="section-lead">
              Brevi aggiornamenti dai settori in cui lavoriamo, con un collegamento diretto
              al prodotto Adekro piu utile per affrontarli.
            </p>
          </div>
          <div className="cards">
            {sortedNews.map((item) => (
              <article className="card" key={item.slug}>
                <span className="sheet-tab">{sectorLabels[item.sector]}</span>
                <h2>
                  <Link href={`/novita/${item.slug}`}>{item.title}</Link>
                </h2>
                <p>{item.summary}</p>
                <time dateTime={item.date} style={{ display: "block", marginTop: "0.5rem" }}>
                  {new Date(item.date).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <Link
                  href={`/novita/${item.slug}`}
                  className="product-link"
                  aria-label={`Leggi: ${item.title}`}
                >
                  Leggi la notizia <b aria-hidden="true">&rarr;</b>
                </Link>
                {item.source ? (
                  <p style={{ marginTop: "0.3rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    Fonte: {item.source.name}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
