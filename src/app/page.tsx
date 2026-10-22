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
    "app asta fantacalcio",
    "app cocktail",
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
const playfulSlugs = ["fantauction", "drinktrainer"];
const eventSlugs = ["siplanner"];

function productsIn(slugs: string[]) {
  return products.filter((product) => slugs.includes(product.slug));
}

function DimensionLine({ count }: { count: number }) {
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

  if (slug === "fantauction") {
    return (
      <div className="preview-auction" aria-hidden="true">
        <div className="preview-topline">
          <span>ASTA LIVE</span>
          <strong>184 cr</strong>
        </div>
        <div className="player-row">
          <span>LAUTARO</span>
          <b>Preferito</b>
        </div>
        <div className="player-row">
          <span>LEAO</span>
          <b>Rigorista</b>
        </div>
        <div className="credit-bars">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  if (slug === "drinktrainer") {
    return (
      <div className="preview-drink" aria-hidden="true">
        <div className="glass">
          <i />
          <i />
          <i />
        </div>
        <div className="pour-meter">
          <span>1.0 oz</span>
          <b />
        </div>
        <div className="ingredient-pills">
          <em>lime</em>
          <em>rum</em>
          <em>mint</em>
        </div>
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
            <h1>Software che segue il lavoro, non il contrario.</h1>
            <p>
              Sviluppiamo software su misura, app web, app mobile e gestionali
              per chi deve decidere, organizzare e tenere tutto sotto controllo.
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
            <div className="hero-blueprint-status">
              <i /> In lavorazione
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
            <h2>Soluzioni digitali per il lavoro e per le passioni.</h2>
            <p>
              Ogni app nasce da un bisogno concreto: rendere più semplice
              un&apos;attività, un&apos;allenamento o un momento da condividere.
            </p>
          </div>
          <div className="product-category-group product-category-group-professional">
            <DimensionLine count={productsIn(professionalSlugs).length} />
            <div className="product-category-heading">
              <h3>
                Per gestire il lavoro: controllo e continuità per ogni giornata
                operativa.
              </h3>
              <p>
                Gestionali affidabili per maneggi e aziende agricole, oppure
                costruiti su misura insieme ai nostri esperti quando le tue
                esigenze sono uniche.
              </p>
            </div>
            <div className="product-grid">
              {productsIn(professionalSlugs).map((product) => (
                <article
                  className={`product-card product-card-${product.slug}`}
                  key={product.slug}
                >
                  <ProductPreview slug={product.slug} />
                  <div className="product-card-copy">
                    <Image
                      alt={`Logo di ${product.name}, ${product.category}`}
                      className={`product-logo product-logo-${product.slug}`}
                      height={80}
                      src={product.logo}
                      width={80}
                    />
                    <span className="sheet-tab sheet-tab-inline">
                      {product.category}
                    </span>
                    <h4>{product.name}</h4>
                    <p>{product.shortDescription}</p>
                    <Link
                      href={`/prodotti/${product.slug}`}
                      className="product-link"
                    >
                      Scopri {product.name} <b aria-hidden="true">&rarr;</b>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="product-category-group product-category-group-playful">
            <DimensionLine count={productsIn(playfulSlugs).length} />
            <div className="product-category-heading">
              <h3>Per divertirsi e migliorare: gioca, sperimenta, brinda.</h3>
              <p>
                App leggere e coinvolgenti per vivere meglio l&apos;asta del
                fantacalcio e imparare l&apos;arte dei cocktail.
              </p>
            </div>
            <div className="product-grid">
              {productsIn(playfulSlugs).map((product) => (
                <article
                  className={`product-card product-card-${product.slug}`}
                  key={product.slug}
                >
                  <ProductPreview slug={product.slug} />
                  <div className="product-card-copy">
                    <Image
                      alt={`Logo di ${product.name}, ${product.category}`}
                      className={`product-logo product-logo-${product.slug}`}
                      height={80}
                      src={product.logo}
                      width={80}
                    />
                    <span className="sheet-tab sheet-tab-inline">
                      {product.category}
                    </span>
                    <h4>{product.name}</h4>
                    <p>{product.shortDescription}</p>
                    <Link
                      href={`/prodotti/${product.slug}`}
                      className="product-link"
                    >
                      Scopri {product.name} <b aria-hidden="true">&rarr;</b>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="product-category-group product-category-group-events">
            <DimensionLine count={productsIn(eventSlugs).length} />
            <div className="product-category-heading">
              <h3>
                Per i momenti importanti: organizza il matrimonio senza perdere
                nulla di vista.
              </h3>
              <p>
                Invitati, budget e fornitori in un unico spazio, dal primo
                pensiero al giorno del sì.
              </p>
            </div>
            <div className="product-grid">
              {productsIn(eventSlugs).map((product) => (
                <article
                  className={`product-card product-card-${product.slug}`}
                  key={product.slug}
                >
                  <ProductPreview slug={product.slug} />
                  <div className="product-card-copy">
                    <Image
                      alt={`Logo di ${product.name}, ${product.category}`}
                      className={`product-logo product-logo-${product.slug}`}
                      height={80}
                      src={product.logo}
                      width={80}
                    />
                    <span className="sheet-tab sheet-tab-inline">
                      {product.category}
                    </span>
                    <h4>{product.name}</h4>
                    <p>{product.shortDescription}</p>
                    <Link
                      href={`/prodotti/${product.slug}`}
                      className="product-link"
                    >
                      Scopri {product.name} <b aria-hidden="true">&rarr;</b>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section operational-section">
        <div className="container">
          <div className="operational-grid">
            <div>
              <h2>
                Quando il lavoro ha regole sue, il software deve saperle
                rispettare.
              </h2>
            </div>
            <div className="operational-copy">
              <p>
                Progettiamo software gestionali, app web e mobile, automazioni e
                integrazioni API su misura per organizzare processi, dati e
                persone attorno a quello che conta davvero nella tua attività.
              </p>
              <Link href="/contatti" className="btn btn-primary">
                Parliamo del tuo progetto
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
