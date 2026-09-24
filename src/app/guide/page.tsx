import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { getProductBySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Guide su Gestione Scuderia, Azienda Agricola e Gestionali su Misura",
  description:
    "Guide pratiche su come gestire una scuderia, un'azienda agricola e su come si sviluppa un gestionale su misura, con confronti ed esempi concreti.",
  keywords: [
    "come gestire una scuderia",
    "come gestire un'azienda agricola",
    "gestionale su misura",
    "excel vs software gestionale",
  ],
  alternates: {
    canonical: "/guide",
  },
};

export default function GuidePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1>Guide pratiche su gestione scuderia, azienda agricola e software su misura</h1>
          <p className="section-lead">
            Approfondimenti scritti per rispondere a domande concrete, con un
            collegamento diretto al prodotto Adekro piu utile per affrontarle.
          </p>
        </div>
        <div className="cards">
          {guides.map((guide) => {
            const product = getProductBySlug(guide.relatedProductSlug);
            return (
              <article className="card" key={guide.slug}>
                <span className="sheet-tab">{guide.topic}</span>
                <h2>
                  <Link href={`/guide/${guide.slug}`}>{guide.title}</Link>
                </h2>
                <p>{guide.metaDescription}</p>
                <time
                  dateTime={guide.updatedDate}
                  style={{ display: "block", marginTop: "0.5rem" }}
                >
                  Aggiornato il{" "}
                  {new Date(guide.updatedDate).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <Link
                  href={`/guide/${guide.slug}`}
                  className="product-link"
                  aria-label={`Leggi: ${guide.title}`}
                >
                  Leggi la guida <b aria-hidden="true">&rarr;</b>
                </Link>
                {product ? (
                  <p style={{ marginTop: "0.4rem", fontSize: "0.82rem" }}>
                    Prodotto collegato:{" "}
                    <Link href={`/prodotti/${product.slug}`}>{product.name}</Link>
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
