import type { Metadata } from "next";
import Image from "next/image";
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
    title: `${product.name} | ${product.category}`,
    description: product.shortDescription,
    keywords: product.seoKeywords,
    alternates: {
      canonical: `/prodotti/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ${product.category}`,
      description: product.shortDescription,
      url: `/prodotti/${product.slug}`,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: product.category,
    operatingSystem: "Web, iOS, Android",
    description: product.longDescription,
    url: `https://www.adekro.it/prodotti/${product.slug}`,
    keywords: product.seoKeywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <section className="section">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">{product.category}</span>
              <Image
                alt={`Logo ${product.name}`}
                className={`product-detail-logo product-logo-${product.slug}`}
                height={120}
                priority
                src={product.logo}
                width={120}
              />
              <h1>{product.name}</h1>
              <p className="section-lead">{product.longDescription}</p>
            </div>
            <div className="cta-row">
              <Link
                href="/contatti"
                className="btn btn-primary"
                aria-label={`Richiedi una demo per ${product.name}`}
              >
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
                  {product.idealFor}
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