import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Prodotti Digitali",
  description:
    "Catalogo prodotti Adekro: TiSposi, chatbot intelligente configurabile, gestione eventi e gestione affitti brevi e lunghi.",
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
              <h1>Soluzioni digitali gia pronte, da adottare o adattare al tuo contesto</h1>
              <p className="section-lead">
                In questa area trovi prodotti pensati per esigenze operative concrete.
                Ogni soluzione puo essere usata come base pronta oppure evoluta in
                funzione dei processi e delle priorita della tua impresa.
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
                  <h2>{product.name}</h2>
                  <p>{product.shortDescription}</p>
                  <div className="cta-row">
                    <Link
                      href={`/prodotti/${product.slug}`}
                      className="btn btn-secondary"
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