import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug, getSortedNews, sectorLabels } from "@/lib/news";
import { getProductBySlug } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSortedNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return {
      title: "Notizia non trovata",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `/novita/${item.slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.summary,
      url: `/novita/${item.slug}`,
      type: "article",
      publishedTime: item.date,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
    },
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedProduct = item.relatedProductSlug
    ? getProductBySlug(item.relatedProductSlug)
    : undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    dateModified: item.date,
    author: { "@type": "Organization", name: "Adekro" },
    publisher: { "@type": "Organization", name: "Adekro" },
    mainEntityOfPage: `${SITE_URL}/novita/${item.slug}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Novita", item: `${SITE_URL}/novita` },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `${SITE_URL}/novita/${item.slug}`,
      },
    ],
  };

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
      <nav aria-label="Percorso di navigazione" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/novita">Novita</Link>
            </li>
            <li aria-current="page">{item.title}</li>
          </ol>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div className="section-shell">
            <span className="sheet-tab">{sectorLabels[item.sector]}</span>
            <div className="section-header">
              <h1>{item.title}</h1>
              <time dateTime={item.date} className="section-lead" style={{ display: "block" }}>
                {new Date(item.date).toLocaleDateString("it-IT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {item.body.map((paragraph, index) => (
                <p key={index} className="section-lead">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="cta-row" style={{ marginTop: "1.5rem" }}>
              <Link href="/novita" className="btn btn-secondary">
                Tutte le novita
              </Link>
              {relatedProduct ? (
                <Link
                  href={`/prodotti/${relatedProduct.slug}`}
                  className="btn btn-primary"
                >
                  Scopri {relatedProduct.name}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
