import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, getGuidesByProduct, guides } from "@/lib/guides";
import { getProductBySlug } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guida non trovata",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: `/guide/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `/guide/${guide.slug}`,
      type: "article",
      publishedTime: guide.publishedDate,
      modifiedTime: guide.updatedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.metaDescription,
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const product = getProductBySlug(guide.relatedProductSlug);
  const otherGuides = getGuidesByProduct(guide.relatedProductSlug).filter(
    (item) => item.slug !== guide.slug,
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.publishedDate,
    dateModified: guide.updatedDate,
    author: { "@type": "Organization", name: "Adekro" },
    publisher: { "@type": "Organization", name: "Adekro" },
    mainEntityOfPage: `${SITE_URL}/guide/${guide.slug}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guide", item: `${SITE_URL}/guide` },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `${SITE_URL}/guide/${guide.slug}`,
      },
    ],
  };
  const faqSchema = guide.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <nav aria-label="Percorso di navigazione" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/guide">Guide</Link>
            </li>
            <li aria-current="page">{guide.title}</li>
          </ol>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <span className="sheet-tab">{guide.topic}</span>
          <div className="section-header">
            <h1>{guide.title}</h1>
            <p className="section-lead">{guide.intro}</p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Pubblicato il{" "}
              {new Date(guide.publishedDate).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {guide.updatedDate !== guide.publishedDate ? (
                <>
                  {" "}
                  &middot; Aggiornato il{" "}
                  {new Date(guide.updatedDate).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </>
              ) : null}
            </p>
          </div>

          <div style={{ display: "grid", gap: "2rem" }}>
            {guide.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={index} style={{ marginTop: index === 0 ? "0.6rem" : "0.6rem" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {guide.comparisonTable ? (
            <div style={{ marginTop: "2rem", overflowX: "auto" }}>
              <table className="comparison-table">
                <caption>{guide.comparisonTable.caption}</caption>
                <thead>
                  <tr>
                    {guide.comparisonTable.columns.map((column) => (
                      <th key={column} scope="col">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {guide.comparisonTable.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.values.map((value, index) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {guide.faqs ? (
            <div style={{ marginTop: "2rem" }}>
              <h2>Domande frequenti</h2>
              <div className="cards">
                {guide.faqs.map((faq) => (
                  <article className="card" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {product ? (
            <div className="cta-row" style={{ marginTop: "2rem" }}>
              <Link href={`/prodotti/${product.slug}`} className="btn btn-primary">
                Scopri {product.name}
              </Link>
              <Link href="/contatti" className="btn btn-secondary">
                Parliamo del tuo progetto
              </Link>
            </div>
          ) : null}

          {otherGuides.length > 0 ? (
            <div style={{ marginTop: "2.5rem" }}>
              <h2>Altre guide su questo argomento</h2>
              <ul className="feature-list" style={{ marginTop: "0.8rem" }}>
                {otherGuides.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/guide/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
