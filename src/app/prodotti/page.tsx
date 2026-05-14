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
    <section className="section">
      <div className="container">
        <h1>Prodotti Adekro</h1>
        <p className="section-lead">
          Soluzioni software pronte da adottare o personalizzare in base ai
          processi della tua impresa.
        </p>
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
                  Dettagli prodotto
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}