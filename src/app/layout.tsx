import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Merriweather, Space_Grotesk } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import NavLinks from "@/components/NavLinks";
import { localSoftwareKeywords } from "@/lib/seo";
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
  metadataBase: new URL("https://www.adekro.com"),
  title: {
    default: "Adekro | Soluzioni Informatiche per PMI",
    template: "%s | Adekro",
  },
  description:
    "Adekro sviluppa software su misura, gestionali, app web e mobile, siti web, automazioni e integrazioni API per PMI.",
  keywords: [
    "sviluppo software",
    "sviluppo software PMI",
    "software su misura",
    "azienda sviluppo software",
    "programmazione software",
    "sviluppo applicazioni web",
    "sviluppo app mobile",
    "software gestionale",
    "siti web aziendali",
    "gestionali su misura",
    "app personalizzate",
    "automazioni aziendali",
    "integrazioni API",
    "trasformazione digitale PMI",
    "app asta fantacalcio",
    "app cocktail",
    "gestionale agricolo",
    "software gestione azienda agricola",
    "gestionale maneggio",
    "software gestione cavalli",
    "Adekro",
    ...localSoftwareKeywords,
  ],
  openGraph: {
    title: "Adekro | Soluzioni Informatiche per PMI",
    description:
      "Sviluppo software su misura, app web e mobile, gestionali, automazioni e integrazioni per PMI, oltre ai prodotti Adekro.",
    url: "https://www.adekro.com",
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
        <a href="#main-content" className="skip-to-content">
          Salta al contenuto principale
        </a>
        <header className="site-header">
          <div className="container nav-wrap">
            <div className="brand-block">
              <Link href="/" className="brand" aria-label="Adekro - Home">
                <Image
                  alt="Adekro Software Solutions"
                  className="brand-logo"
                  height={100}
                  priority
                  src="/logo.png"
                  width={180}
                />
              </Link>
              <p className="brand-caption">
                Soluzioni digitali chiare per imprese che vogliono crescere con ordine.
              </p>
            </div>
            <nav aria-label="Navigazione principale" className="site-nav">
              <NavLinks />
            </nav>
            <Link href="/contatti" className="btn btn-secondary header-cta">
              Richiedi un confronto
            </Link>
          </div>
        </header>
        <main id="main-content">{children}</main>
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
                <Link href="mailto:info@adekro.com">info@adekro.com</Link>
                <p>Confronto iniziale su obiettivi, flussi e priorita del progetto.</p>
                <div className="cta-row footer-cta-row">
                  <Link href="/contatti" className="btn btn-primary">
                    Parla con Adekro
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>Adekro di Emanuele Croce - Soluzioni informatiche per piccole e medie imprese.</p>
              <div className="footer-legal-links">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/cookie-policy">Cookie Policy</Link>
                <CookieSettingsButton />
              </div>
            </div>
          </div>
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}
