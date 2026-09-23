import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

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

function ProductPreview({ slug }: { slug: Product["slug"] }) {
  if (slug === "siplanner") {
    return (
      <div className="preview-wedding">
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
      <div className="preview-custom">
        <div className="blueprint-line blueprint-line-one" />
        <div className="blueprint-line blueprint-line-two" />
        <div className="blueprint-node">Analisi</div>
        <div className="blueprint-node blueprint-node-active">Sviluppo</div>
      </div>
    );
  }

  if (slug === "fantauction") {
    return (
      <div className="preview-auction">
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
      <div className="preview-drink">
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
      <div className="preview-farm">
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
    <div className="preview-horse">
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
            <span className="product-kicker">Adekro / prodotti digitali</span>
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
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="products-heading">
            <span className="product-kicker">Il catalogo</span>
            <h2>Soluzioni digitali per il lavoro e per le passioni.</h2>
            <p>
              Ogni app nasce da un bisogno concreto: rendere più semplice
              un&apos;attività, un&apos;allenamento o un momento da condividere.
            </p>
          </div>
          <div className="product-category-group product-category-group-professional">
            <div className="product-category-heading">
              <span className="product-kicker">Per gestire il lavoro</span>
              <h3>Controllo e continuità per ogni giornata operativa.</h3>
              <p>
                Gestionali affidabili per maneggi e aziende agricole, oppure
                costruiti su misura insieme ai nostri esperti quando le tue
                esigenze sono uniche.
              </p>
            </div>
            <div className="product-grid">
              {products
                .filter(
                  (product) =>
                    product.slug === "horsehouse" ||
                    product.slug === "agricola" ||
                    product.slug === "gestionali-su-misura",
                )
                .map((product) => (
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
                      <span>{product.category}</span>
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
            <div className="product-category-heading">
              <span className="product-kicker">
                Per divertirsi e migliorare
              </span>
              <h3>Gioca, sperimenta, brinda.</h3>
              <p>
                App leggere e coinvolgenti per vivere meglio l&apos;asta del
                fantacalcio e imparare l&apos;arte dei cocktail.
              </p>
            </div>
            <div className="product-grid">
              {products
                .filter(
                  (product) =>
                    product.slug === "fantauction" ||
                    product.slug === "drinktrainer",
                )
                .map((product) => (
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
                      <span>{product.category}</span>
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
            <div className="product-category-heading">
              <span className="product-kicker">Per i momenti importanti</span>
              <h3>Organizza il matrimonio senza perdere nulla di vista.</h3>
              <p>
                Invitati, budget e fornitori in un unico spazio, dal primo
                pensiero al giorno del si.
              </p>
            </div>
            <div className="product-grid">
              {products
                .filter((product) => product.slug === "siplanner")
                .map((product) => (
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
                      <span>{product.category}</span>
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
              <span className="product-kicker">Oltre il catalogo</span>
              <h2>
                Quando il lavoro ha regole sue, il software deve saperle
                rispettare.
              </h2>
            </div>
            <div className="operational-copy">
              <p>
                Progettiamo software gestionali, app web e mobile, automazioni e
                integrazioni API su misura per organizzare processi, dati e
                persone attorno a quello che conta davvero nella tua attivita.
              </p>
              <Link href="/contatti" className="btn btn-primary">
                Raccontaci la tua esigenza
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-shell">
            <div className="section-header">
              <span className="eyebrow">Sviluppo su misura per PMI</span>
              <h2>
                Strumenti digitali costruiti sui processi della tua impresa.
              </h2>
              <p className="section-lead">
                Quando un software standard non segue il tuo modo di lavorare,
                progettiamo una soluzione chiara, evolutiva e integrata con gli
                strumenti che usi gia.
              </p>
            </div>
            <div className="cards">
              <article className="card">
                <h3>Gestionali su misura</h3>
                <p>
                  Organizza dati, attivita e persone in un unico flusso
                  operativo.
                </p>
              </article>
              <article className="card">
                <h3>Web app e app mobile</h3>
                <p>
                  Porta processi e servizi dove servono, dal browser allo
                  smartphone.
                </p>
              </article>
              <article className="card">
                <h3>Automazioni e integrazioni API</h3>
                <p>
                  Riduci i passaggi manuali e fai dialogare i sistemi gia
                  presenti in azienda.
                </p>
              </article>
            </div>
            <div className="cta-row">
              <Link href="/contatti" className="btn btn-primary">
                Raccontaci il tuo progetto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
