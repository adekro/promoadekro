import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa privacy del sito Adekro ai sensi del Regolamento (UE) 2016/679.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section legal-section">
      <div className="container legal-layout">
        <span className="eyebrow">Informativa privacy</span>
        <h1>Privacy Policy</h1>
        <p className="legal-intro">
          Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR).
        </p>

        <div className="legal-content">
          <section>
            <h2>Titolare del trattamento</h2>
            <p>
              Il titolare del trattamento e Emanuele Croce, codice fiscale CRCMNL88R04M109R,
              con sede in Via F.lli Rosselli 84, 27058 Voghera (PV). Per richieste relative
              alla privacy puoi scrivere a <a href="mailto:info@adekro.com">info@adekro.com</a>.
            </p>
          </section>
          <section>
            <h2>Dati trattati e finalita</h2>
            <p>
              Il sito puo trattare i dati inviati volontariamente via email, come nome, indirizzo
              email e contenuto della richiesta, esclusivamente per rispondere al contatto e gestire
              eventuali rapporti professionali. I dati tecnici di navigazione sono trattati nella
              misura necessaria per sicurezza, funzionamento e manutenzione del sito.
            </p>
          </section>
          <section>
            <h2>Base giuridica e conservazione</h2>
            <p>
              Il trattamento dei dati di contatto si basa sull&apos;esecuzione di misure precontrattuali
              richieste dall&apos;interessato e sul legittimo interesse del titolare a rispondere alle
              richieste ricevute. I dati sono conservati per il tempo necessario a gestire la richiesta
              e adempiere agli eventuali obblighi di legge.
            </p>
          </section>
          <section>
            <h2>Destinatari e trasferimenti</h2>
            <p>
              I dati possono essere trattati da fornitori tecnici che erogano servizi necessari al
              funzionamento del sito, nominati quando necessario responsabili del trattamento. Non sono
              effettuate vendite o comunicazioni dei dati a terzi per finalita di marketing. Eventuali
              trasferimenti al di fuori dello Spazio Economico Europeo avvengono nel rispetto delle
              garanzie previste dal GDPR.
            </p>
          </section>
          <section>
            <h2>Diritti dell&apos;interessato</h2>
            <p>
              Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilita o opposizione
              al trattamento dei tuoi dati, oltre a revocare il consenso quando previsto, scrivendo a
              <a href="mailto:info@adekro.com"> info@adekro.com</a>. Hai inoltre diritto di proporre
              reclamo al Garante per la protezione dei dati personali.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}