import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

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

  const title = `${product.name} | ${product.category}`;
  const description = product.metaDescription ?? product.shortDescription;

  return {
    title,
    description,
    keywords: product.seoKeywords,
    alternates: {
      canonical: `/prodotti/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/prodotti/${product.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    url: `${SITE_URL}/prodotti/${product.slug}`,
    keywords: product.seoKeywords.join(", "),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prodotti",
        item: `${SITE_URL}/prodotti`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${SITE_URL}/prodotti/${product.slug}`,
      },
    ],
  };
  const howToSchema = product.process
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `Come nasce ${product.name} con Adekro`,
        step: product.process.map((step) => ({
          "@type": "HowToStep",
          name: step.title,
          text: step.description,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      ) : null}
      <nav aria-label="Percorso di navigazione" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/prodotti">Prodotti</Link>
            </li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">{product.category}</span>
              <Image
                alt={`Logo di ${product.name}, ${product.category} firmato Adekro`}
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

      {product.process ? (
        <section className="section">
          <div className="container">
            <div className="section-shell">
              <div className="section-header">
                <span className="eyebrow">Come lavoriamo</span>
                <h2>Come nasce {product.name} insieme a te</h2>
              </div>
              <ol className="cards process-steps">
                {product.process.map((step, index) => (
                  <li className="card" key={step.title}>
                    <span className="eyebrow">Fase {index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Domande frequenti</span>
              <h2>Prima di iniziare con {product.name}</h2>
            </div>
            <div className="cards">
              {product.faqs.map((faq) => (
                <article className="card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
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
