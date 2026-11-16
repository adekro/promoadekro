import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ su Gestionali, Free Beta Agricola e Sviluppo su Misura",
  description:
    "Domande frequenti su Agricola, HorseHouse, SiPlanner e sul servizio di gestionali su misura: free beta, funzioni, tempi e sviluppo per fasi.",
  alternates: {
    canonical: "/faq",
  },
};

// Order on the page: the product in free beta first.
const faqOrder = ["agricola", "horsehouse", "gestionali-su-misura", "siplanner"];

const groups = faqOrder
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is (typeof products)[number] => Boolean(product))
  .filter((product) => product.faqs.length > 0);

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${SITE_URL}/faq`,
    mainEntity: groups.flatMap((product) =>
      product.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section faq-page">
        <div className="container">
          <header className="section-header">
            <h1>Domande frequenti su prodotti e sviluppo su misura</h1>
            <p className="section-lead">
              Free beta di Agricola, funzioni dei gestionali e come lavoriamo
              sui progetti su misura.
            </p>
          </header>

          {groups.map((product) => (
            <section
              className="faq-group"
              key={product.slug}
              aria-labelledby={`faq-${product.slug}`}
            >
              <div className="dimension-line" aria-hidden="true">
                <span className="dimension-line-rule dimension-line-rule-start" />
                <span className="dimension-line-value">
                  {product.faqs.length}{" "}
                  {product.faqs.length === 1 ? "domanda" : "domande"}
                </span>
                <span className="dimension-line-rule dimension-line-rule-end" />
              </div>
              <div className="faq-group-grid">
                <div className="faq-group-title">
                  <h2 id={`faq-${product.slug}`}>{product.name}</h2>
                  <Link
                    href={`/prodotti/${product.slug}`}
                    className="product-link"
                    aria-label={`Scheda prodotto: ${product.name}`}
                  >
                    Scheda prodotto <b aria-hidden="true">&rarr;</b>
                  </Link>
                </div>
                <div className="faq-list">
                  {product.faqs.map((faq, index) => (
                    <details className="faq-item" key={faq.question}>
                      <summary>
                        <span className="faq-index" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3>{faq.question}</h3>
                      </summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <div className="faq-contact">
            <p>La tua domanda non è qui?</p>
            <Link href="/contatti" className="btn btn-primary">
              Scrivici
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
