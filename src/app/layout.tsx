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
            <Link href="/" className="brand">
              Adekro
            </Link>
            <nav aria-label="Navigazione principale" className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/chi-siamo">Chi siamo</Link>
              <Link href="/prodotti">Prodotti</Link>
              <Link href="/contatti">Contatti</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container footer-grid">
            <p>
              <strong>Adekro</strong> - Soluzioni informatiche per piccole e
              medie imprese.
            </p>
            <p>Dal sito web al gestionale completo, con approccio su misura.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
