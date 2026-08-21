import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull'uso dei cookie nel sito Adekro.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <section className="section legal-section">
      <div className="container legal-layout">
        <span className="eyebrow">Informativa cookie</span>
        <h1>Cookie Policy</h1>
        <p className="legal-intro">
          Questa pagina descrive come Adekro utilizza cookie e tecnologie analoghe.
        </p>

        <div className="legal-content">
          <section>
            <h2>Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che il browser salva sul dispositivo durante la
              navigazione. Possono essere necessari al funzionamento del sito o usati per raccogliere
              informazioni statistiche sulla navigazione.
            </p>
          </section>
          <section>
            <h2>Cookie tecnici</h2>
            <p>
              Il sito usa una preferenza tecnica salvata nel browser per ricordare la scelta relativa
              al consenso cookie. Questa preferenza e necessaria per non riproporre il banner a ogni
              visita e non richiede consenso.
            </p>
          </section>
          <section>
            <h2>Cookie statistici e di profilazione</h2>
            <p>
              Al momento il sito non utilizza strumenti statistici o cookie di profilazione. Se tali
              strumenti verranno introdotti, saranno attivati solo dopo il tuo consenso e questa
              informativa verra aggiornata.
            </p>
          </section>
          <section>
            <h2>Gestione delle preferenze</h2>
            <p>
              Puoi modificare o ritirare la scelta in ogni momento dal link “Gestisci cookie” nel footer.
              Puoi anche eliminare i cookie direttamente dalle impostazioni del browser. Per il trattamento
              dei dati personali consulta la <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </section>
          <section>
            <h2>Titolare del trattamento</h2>
            <p>
              Il titolare e Emanuele Croce, con sede in Via F.lli Rosselli 84, 27058 Voghera (PV).
              Per informazioni: <a href="mailto:info@adekro.it">info@adekro.it</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}