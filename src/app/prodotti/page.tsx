import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Agricola, HorseHouse e Gestionali su Misura",
  description:
    "Catalogo Adekro: gestionali su misura costruiti con i nostri esperti, gestionale agricolo con dati Copernicus e software per la gestione del maneggio.",
  keywords: [
    "gestionale su misura",
    "gestionali personalizzati ad hoc",
    "gestionale agricolo Copernicus",
    "gestionale maneggio",
    "software gestione cavalli",
    "app asta fantacalcio",
    "app cocktail bartender",
    "gestionale agricolo con dati satellitari Copernicus",
    "scheda digitale cura cavalli maneggio",
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
              <h1>
                App e gestionali gia pronti, progettati intorno al lavoro reale
              </h1>
              <p className="section-lead">
                Ogni prodotto parte da un&apos;esigenza precisa e puo evolvere
                con il contesto in cui lo usi.
              </p>
            </div>
            <div className="stats-grid">
              <article className="stat-card">
                <span className="stat-value">Rapido</span>
                <p className="kpi-label">
                  Parti da una struttura gia definita e riduci il tempo di
                  avvio.
                </p>
              </article>
              <article className="stat-card">
                <span className="stat-value">Adattabile</span>
                <p className="kpi-label">
                  Ogni prodotto puo essere personalizzato sulle tue priorita
                  operative.
                </p>
              </article>
              <article className="stat-card">
                <span className="stat-value">Scalabile</span>
                <p className="kpi-label">
                  Le soluzioni sono pensate per evolvere insieme al business.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <h2>Prodotti orientati a efficienza, servizio e controllo</h2>
            </div>
            <div className="cards">
              {products.map((product) => (
                <article className="card" key={product.slug}>
                  <Image
                    alt={`Logo di ${product.name}, ${product.category}`}
                    className={`product-logo product-logo-${product.slug}`}
                    height={80}
                    src={product.logo}
                    width={80}
                  />
                  <span className="sheet-tab sheet-tab-inline">
                    {product.category}
                  </span>
                  <h3>{product.name}</h3>
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
