import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Prodotto non trovato",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: `/prodotti/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Prodotto Adekro</span>
              <h1>{product.name}</h1>
              <p className="section-lead">{product.longDescription}</p>
            </div>
            <div className="cta-row">
              <Link href="/contatti" className="btn btn-primary">
                Richiedi una demo
              </Link>
              <Link href="/prodotti" className="btn btn-secondary">
                Torna ai prodotti
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-shell">
            <div className="cards">
              <article className="card">
                <h2>Vantaggi principali</h2>
                <ul className="feature-list">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </article>
              <article className="card">
                <h2>Quando e utile</h2>
                <p>
                  Questa soluzione e adatta a PMI che vogliono ridurre passaggi manuali,
                  migliorare il coordinamento operativo e offrire un&apos;esperienza piu chiara
                  a clienti, team o collaboratori.
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
              <span className="eyebrow">Personalizzazione</span>
              <h2>Possiamo partire da questo prodotto e adattarlo al tuo flusso di lavoro</h2>
              <p className="section-lead">
                Se il bisogno e vicino ma non identico, Adekro puo personalizzare struttura,
                funzioni e integrazioni per avvicinare il prodotto al tuo contesto aziendale.
              </p>
            </div>
            <div className="cta-row">
              <Link href="/contatti" className="btn btn-primary">
                Valuta una personalizzazione
              </Link>
              <Link href="/chi-siamo" className="btn btn-secondary">
                Scopri il nostro approccio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}