import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/lib/products";
import {
  AGRICOLA_APP_URL,
  AGRICOLA_BETA_END_LABEL,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Software su Misura e Gestionali per PMI",
  description:
    "Adekro sviluppa gestionali su misura, software gestionale per PMI, app web e mobile, automazioni e integrazioni API per aziende agricole, maneggi e imprese.",
  keywords: [
    "sviluppo software su misura",
    "gestionale su misura",
    "gestionali personalizzati ad hoc",
    "programmazione software",
    "sviluppo app web",
    "sviluppo app mobile",
    "software gestionale",
    "automazioni e integrazioni",
    "gestionale agricolo",
    "gestionale maneggio",
    "software su misura PMI",
    "gestionale maneggio e cavalli online",
    "gestionale agricolo con dati satellitari Copernicus",
  ],
  alternates: {
    canonical: "/",
  },
};

const professionalSlugs = ["horsehouse", "agricola", "gestionali-su-misura"];
const eventSlugs = ["siplanner"];

function productsIn(slugs: string[]) {
  return products.filter((product) => slugs.includes(product.slug));
}

function DimensionLine({ count }: { count: number }) {
  // A dimension measures a group: a single item has nothing to measure.
  if (count < 2) return null;
  return (
    <div className="dimension-line" aria-hidden="true">
      <span className="dimension-line-rule dimension-line-rule-start" />
      <span className="dimension-line-value">
        {count} {count === 1 ? "soluzione" : "soluzioni"}
      </span>
      <span className="dimension-line-rule dimension-line-rule-end" />
    </div>
  );
}

function ProductPreview({ slug }: { slug: Product["slug"] }) {
  if (slug === "siplanner") {
    return (
      <div className="preview-wedding" aria-hidden="true">
        <div className="wedding-rings">
          <span />
          <span />
        </div>
        <div className="wedding-row">
          <span>Invitati</span>
          <b>142</b>
        </div>
        <div className="wedding-row">
          <span>Budget</span>
          <b>OK</b>
        </div>
      </div>
    );
  }

  if (slug === "gestionali-su-misura") {
    return (
      <div className="preview-custom" aria-hidden="true">
        <div className="blueprint-line blueprint-line-one" />
        <div className="blueprint-line blueprint-line-two" />
        <div className="blueprint-node">Analisi</div>
        <div className="blueprint-node blueprint-node-active">Sviluppo</div>
      </div>
    );
  }

  if (slug === "agricola") {
    return (
      <div className="preview-farm" aria-hidden="true">
        <div className="field field-one" />
        <div className="field field-two" />
        <div className="field field-three" />
        <div className="map-label">PARCELLA 18</div>
        <div className="map-label">FOGLIO 3</div>
        <div className="satellite-dot" />
      </div>
    );
  }

  return (
    <div className="preview-horse" aria-hidden="true">
      <div className="horse-mark">H</div>
      <div className="care-list">
        <span>
          Dieta <b>OK</b>
        </span>
        <span>
          Trattamento <b>oggi</b>
        </span>
        <span>
          Allenamento <b>16:30</b>
        </span>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  headingLevel,
}: {
  product: Product;
  headingLevel: "h3" | "h4";
}) {
  const Heading = headingLevel;
  return (
    <article className={`product-card product-card-${product.slug}`}>
      <ProductPreview slug={product.slug} />
      <div className="product-card-copy">
        <Image
          alt={`Logo di ${product.name}, ${product.category}`}
          className={`product-logo product-logo-${product.slug}`}
          height={80}
          src={product.logo}
          width={80}
        />
        <span className="sheet-tab sheet-tab-inline">{product.category}</span>
        <Heading>{product.name}</Heading>
        <p>{product.shortDescription}</p>
        <Link href={`/prodotti/${product.slug}`} className="product-link">
          Scopri {product.name} <b aria-hidden="true">&rarr;</b>
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adekro",
    url: SITE_URL,
    description:
      "Sviluppo software su misura, app web e mobile, gestionali, automazioni e prodotti digitali per PMI.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <section className="product-hero">
        <div className="container product-hero-grid">
          <div className="hero-copy">
            <a
              href={AGRICOLA_APP_URL}
              target="_blank"
              rel="noopener"
              className="sheet-tab sheet-tab-inline hero-beta-tab"
              aria-label={`Agricola in free beta fino al ${AGRICOLA_BETA_END_LABEL}: apri agricola.adekro.com`}
            >
              Agricola free beta · fino al {AGRICOLA_BETA_END_LABEL}
            </a>
            <h1>Gestionali su misura per PMI, aziende agricole e maneggi.</h1>
            <p>
              Software che segue il lavoro, non il contrario. Sviluppiamo
              software su misura, app web, app mobile e gestionali per chi deve
              decidere, organizzare e tenere tutto sotto controllo.
            </p>
            <div className="cta-row">
              <Link href="/prodotti" className="btn btn-primary">
                Esplora i prodotti
              </Link>
              <Link href="/contatti" className="btn btn-secondary">
                Parliamo del tuo progetto
              </Link>
            </div>
          </div>
          <div className="hero-blueprint" aria-hidden="true">
            <div className="hero-blueprint-heading">
              <span>Foglio di lavorazione</span>
              <strong>Adekro</strong>
            </div>
            <div className="process-track">
              <div className="process-node">
                <span className="process-index">01</span>
                <div className="process-label">
                  <strong>Analisi</strong>
                  <span>Processi e priorità reali</span>
                </div>
              </div>
              <div className="process-connector" />
              <div className="process-node">
                <span className="process-index">02</span>
                <div className="process-label">
                  <strong>Progettazione</strong>
                  <span>Flussi, dati, permessi</span>
                </div>
              </div>
              <div className="process-connector" />
              <div className="process-node process-node-active">
                <span className="process-index">03</span>
                <div className="process-label">
                  <strong>Sviluppo</strong>
                  <span>Per fasi verificabili</span>
                </div>
              </div>
            </div>
            <div className="dimension-line">
              <span className="dimension-line-rule dimension-line-rule-start" />
              <span className="dimension-line-value">3 fasi verificabili</span>
              <span className="dimension-line-rule dimension-line-rule-end" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-accent" aria-labelledby="agricola-beta">
        <div className="container">
          <div className="section-shell">
            <span className="sheet-tab">Free beta · fino al {AGRICOLA_BETA_END_LABEL}</span>
            <div className="section-header">
              <h2 id="agricola-beta">
                Agricola è in free beta: provala gratis fino al{" "}
                {AGRICOLA_BETA_END_LABEL}.
              </h2>
              <p className="section-lead">
                Terreni, particelle, mappe satellitari Copernicus con indici
                NDVI, mappa catastale e quaderno di campagna in un unico
                gestionale. Registrati ora: in fase di registrazione trovi già
                il coupon per l&apos;abbonamento Pro.
              </p>
            </div>
            <div className="cta-row">
              <a
                href={AGRICOLA_APP_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener"
              >
                Prova Agricola gratis
              </a>
              <Link href="/prodotti/agricola" className="btn btn-secondary">
                Scopri cosa include
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="products-heading">
            <h2>I prodotti Adekro</h2>
          </div>
          <div className="product-category-group product-category-group-professional">
            <DimensionLine count={productsIn(professionalSlugs).length} />
            <div className="product-category-heading">
              <h3>Gestionali per maneggi e aziende agricole.</h3>
              <p>
                Gestionali affidabili per maneggi e aziende agricole, oppure
                costruiti su misura insieme ai nostri esperti quando le tue
                esigenze sono uniche.
              </p>
            </div>
            <div className="product-grid product-grid-featured">
              {productsIn(professionalSlugs).map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  headingLevel="h4"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section products-section products-section-events">
        <div className="container">
          <div className="product-category-group product-category-group-events">
            <DimensionLine count={productsIn(eventSlugs).length} />
            <div className="product-category-heading">
              <h2>App per organizzare il matrimonio.</h2>
              <p>Invitati, budget e fornitori in un unico spazio.</p>
            </div>
            <div className="product-grid">
              {productsIn(eventSlugs).map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  headingLevel="h3"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section operational-section">
        <div className="container">
          <div className="operational-grid">
            <div>
              <h2>Gestionali, app e automazioni su misura per le PMI.</h2>
            </div>
            <div className="operational-copy">
              <p>
                Progettiamo software gestionali, app web e mobile, automazioni e
                integrazioni API su misura per organizzare processi, dati e
                persone nella tua attività.
              </p>
              <Link href="/contatti" className="btn btn-primary">
                Richiedi un preventivo
              </Link>
            </div>
            <ul className="service-list">
              <li>
                <h3>Gestionali su misura</h3>
                <p>
                  Organizza dati, attività e persone in un unico flusso
                  operativo.
                </p>
              </li>
              <li>
                <h3>Web app e app mobile</h3>
                <p>
                  Porta processi e servizi dove servono, dal browser allo
                  smartphone.
                </p>
              </li>
              <li>
                <h3>Automazioni e integrazioni API</h3>
                <p>
                  Riduci i passaggi manuali e fai dialogare i sistemi già
                  presenti in azienda.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
