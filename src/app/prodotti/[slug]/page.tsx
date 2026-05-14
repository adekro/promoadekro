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
    <section className="section">
      <div className="container">
        <h1>{product.name}</h1>
        <p className="section-lead">{product.longDescription}</p>

        <div className="cards">
          <article className="card">
            <h2>Vantaggi principali</h2>
            <ul>
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>Per chi e pensato</h2>
            <p>
              Questo prodotto e ideale per PMI che vogliono ottimizzare processi
              interni, ridurre attivita manuali e migliorare il servizio verso
              clienti e collaboratori.
            </p>
            <div className="cta-row">
              <Link href="/contatti" className="btn btn-primary">
                Richiedi una demo
              </Link>
              <Link href="/prodotti" className="btn btn-secondary">
                Torna ai prodotti
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}