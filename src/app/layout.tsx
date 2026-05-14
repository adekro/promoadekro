import type { Metadata } from "next";
import Link from "next/link";
import { Merriweather, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adekro.it"),
  title: {
    default: "Adekro | Soluzioni Informatiche per PMI",
    template: "%s | Adekro",
  },
  description:
    "Adekro sviluppa siti web, gestionali e app su misura per piccole e medie imprese. Soluzioni digitali concrete per crescere.",
  keywords: [
    "sviluppo software PMI",
    "siti web aziendali",
    "gestionali su misura",
    "app personalizzate",
    "chatbot intelligente",
    "gestione eventi",
    "gestione affitti brevi",
    "Adekro",
  ],
  openGraph: {
    title: "Adekro | Soluzioni Informatiche per PMI",
    description:
      "Software su misura per PMI: siti web, gestionali, app e strumenti di automazione.",
    url: "https://www.adekro.it",
    siteName: "Adekro",
    locale: "it_IT",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${spaceGrotesk.variable} ${merriweather.variable}`}
    >
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <div className="brand-block">
              <Link href="/" className="brand">
                Adekro
              </Link>
              <p className="brand-caption">
                Soluzioni digitali chiare per imprese che vogliono crescere con ordine.
              </p>
            </div>
            <nav aria-label="Navigazione principale" className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/chi-siamo">Chi siamo</Link>
              <Link href="/prodotti">Prodotti</Link>
              <Link href="/contatti">Contatti</Link>
            </nav>
            <Link href="/contatti" className="btn btn-secondary header-cta">
              Richiedi un confronto
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-intro">
              <span className="eyebrow">Adekro</span>
              <h2>Dal sito al software operativo, con una direzione progettuale chiara.</h2>
              <p>
                Affianchiamo le PMI nella costruzione di strumenti digitali piu utili,
                leggibili e sostenibili: presenza online, processi interni, prodotti e automazioni.
              </p>
            </div>
            <div className="footer-columns">
              <div className="footer-column">
                <h3>Esplora</h3>
                <Link href="/">Home</Link>
                <Link href="/chi-siamo">Chi siamo</Link>
                <Link href="/prodotti">Prodotti</Link>
                <Link href="/contatti">Contatti</Link>
              </div>
              <div className="footer-column">
                <h3>Ambiti</h3>
                <p>Siti web aziendali</p>
                <p>Gestionali su misura</p>
                <p>App e strumenti operativi</p>
                <p>Automazioni e integrazioni</p>
              </div>
              <div className="footer-column footer-contact">
                <h3>Contatto diretto</h3>
                <Link href="mailto:info@adekro.it">info@adekro.it</Link>
                <p>Confronto iniziale su obiettivi, flussi e priorita del progetto.</p>
                <div className="cta-row footer-cta-row">
                  <Link href="/contatti" className="btn btn-primary">
                    Parla con Adekro
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>Adekro - Soluzioni informatiche per piccole e medie imprese.</p>
              <p>Approccio su misura, attenzione alla chiarezza e implementazione progressiva.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
