import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/lib/products";

export const metadata: Metadata = {
  title: "App e Gestionali: Fantacalcio, Cocktail, Agricoltura e Maneggi",
  description:
    "Adekro sviluppa software su misura, app web e mobile e gestionali. Scopri FantAuction, DrinkTrainer, Agricola e HorseHouse.",
  keywords: [
    "sviluppo software su misura",
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
  ],
  alternates: {
    canonical: "/",
  },
};

function ProductPreview({ slug }: { slug: Product["slug"] }) {
  if (slug === "fantauction") {
    return (
      <div className="preview-auction">
        <div className="preview-topline"><span>ASTA LIVE</span><strong>184 cr</strong></div>
        <div className="player-row"><span>LAUTARO</span><b>Preferito</b></div>
        <div className="player-row"><span>LEAO</span><b>Rigorista</b></div>
        <div className="credit-bars"><i /><i /><i /><i /></div>
      </div>
    );
  }

  if (slug === "drinktrainer") {
    return (
      <div className="preview-drink">
        <div className="glass"><i /><i /><i /></div>
        <div className="pour-meter"><span>1.0 oz</span><b /></div>
        <div className="ingredient-pills"><em>lime</em><em>rum</em><em>mint</em></div>
      </div>
    );
  }

  if (slug === "agricola") {
    return (
      <div className="preview-farm">
        <div className="field field-one" /><div className="field field-two" /><div className="field field-three" />
        <div className="map-label">PARTICELLA 18</div>
        <div className="satellite-dot" />
      </div>
    );
  }

  return (
    <div className="preview-horse">
      <div className="horse-mark">H</div>
      <div className="care-list"><span>Dieta <b>OK</b></span><span>Trattamento <b>oggi</b></span><span>Allenamento <b>16:30</b></span></div>
    </div>
  );
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adekro",
    url: "https://www.adekro.com",
    description: "Sviluppo software su misura, app web e mobile, gestionali, automazioni e prodotti digitali per PMI.",
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
              Sviluppiamo software su misura, app web e mobile e gestionali per chi
              deve decidere, organizzare e tenere tutto sotto controllo. Dall&apos;asta del
              fantacalcio alla gestione di un terreno, di un bancone o di un maneggio.
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
          <aside className="hero-workspace" aria-label="Panoramica prodotti Adekro">
            <div className="workspace-heading"><span>PRODOTTI ATTIVI</span><strong>04</strong></div>
            <div className="workspace-grid">
              <div className="workspace-item workspace-item-fant"><span>FA</span><p>FantAuction</p></div>
              <div className="workspace-item workspace-item-drink"><span>DT</span><p>DrinkTrainer</p></div>
              <div className="workspace-item workspace-item-farm"><span>AG</span><p>Agricola</p></div>
              <div className="workspace-item workspace-item-horse"><span>HH</span><p>HorseHouse</p></div>
            </div>
            <div className="workspace-status"><i /> Soluzioni nate da esigenze precise</div>
          </aside>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="products-heading">
            <span className="product-kicker">Il catalogo</span>
            <h2>Un prodotto per ogni contesto.<br />Stessa cura per i dettagli.</h2>
            <p>Non cataloghi astratti: strumenti pensati per un gesto, una decisione e una giornata di lavoro reali.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className={`product-card product-card-${product.slug}`} key={product.slug}>
                <ProductPreview slug={product.slug} />
                <div className="product-card-copy">
                  <Image
                    alt={`Logo ${product.name}`}
                    className={`product-logo product-logo-${product.slug}`}
                    height={80}
                    src={product.logo}
                    width={80}
                  />
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <Link href={`/prodotti/${product.slug}`} className="product-link">
                    Scopri {product.name} <b aria-hidden="true">&rarr;</b>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section operational-section">
        <div className="container">
          <div className="operational-grid">
            <div>
              <span className="product-kicker">Oltre il catalogo</span>
              <h2>Quando il lavoro ha regole sue, il software deve saperle rispettare.</h2>
            </div>
            <div className="operational-copy">
              <p>Progettiamo software gestionali, app web e mobile, automazioni e integrazioni API su misura per organizzare processi, dati e persone attorno a quello che conta davvero nella tua attivita.</p>
              <Link href="/contatti" className="btn btn-primary">Raccontaci la tua esigenza</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
