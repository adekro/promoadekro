import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "App e Gestionali per Fantacalcio, Cocktail, Agricoltura e Maneggi",
  description:
    "Catalogo Adekro: app per asta fantacalcio e cocktail, gestionale agricolo con Copernicus e software per la gestione del maneggio.",
  keywords: [
    "app asta fantacalcio",
    "app cocktail bartender",
    "gestionale agricolo Copernicus",
    "gestionale maneggio",
    "software gestione cavalli",
  ],
  alternates: {
    canonical: "/prodotti",
  },
};

export default function ProdottiPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Prodotti Adekro</span>
              <h1>App e gestionali gia pronti, progettati intorno al lavoro reale</h1>
              <p className="section-lead">
                Dall&apos;asta del fantacalcio alla cura del cavallo, dai cocktail alla
                gestione agronomica: ogni prodotto parte da un&apos;esigenza precisa e puo
                evolvere con il contesto in cui lo usi.
              </p>
            </div>
            <div className="stats-grid">
              <article className="stat-card">
                <span className="stat-value">Rapido</span>
                <p className="kpi-label">Parti da una struttura gia definita e riduci il tempo di avvio.</p>
              </article>
              <article className="stat-card">
                <span className="stat-value">Adattabile</span>
                <p className="kpi-label">Ogni prodotto puo essere personalizzato sulle tue priorita operative.</p>
              </article>
              <article className="stat-card">
                <span className="stat-value">Scalabile</span>
                <p className="kpi-label">Le soluzioni sono pensate per evolvere insieme al business.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Catalogo</span>
              <h2>Prodotti orientati a efficienza, servizio e controllo</h2>
            </div>
            <div className="cards">
              {products.map((product) => (
                <article className="card" key={product.slug}>
                  <span className="product-card-category">{product.category}</span>
                  <h2>{product.name}</h2>
                  <p>{product.shortDescription}</p>
                  <div className="cta-row">
                    <Link
                      href={`/prodotti/${product.slug}`}
                      className="btn btn-secondary"
                      aria-label={`Approfondisci il prodotto: ${product.name}`}
                    >
                      Approfondisci il prodotto
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}