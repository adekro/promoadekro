import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa privacy del sito Adekro ai sensi del Regolamento (UE) 2016/679.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section legal-section">
      <div className="container legal-layout">
        <h1>Privacy Policy</h1>
        <p className="legal-intro">
          Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR).
          Ultimo aggiornamento: 16 ottobre 2026.
        </p>

        <div className="legal-content">
          <section>
            <h2>Titolare del trattamento</h2>
            <p>
              Il titolare del trattamento è Emanuele Croce, codice fiscale CRCMNL88R04M109R,
              con sede in Via F.lli Rosselli 84, 27058 Voghera (PV). Per richieste relative
              alla privacy puoi scrivere a <a href="mailto:info@adekro.com">info@adekro.com</a>.
            </p>
          </section>
          <section>
            <h2>Dati trattati e finalità</h2>
            <p>
              Il sito non ha moduli di raccolta dati e non registra in archivi o database i dati di
              chi lo visita o di chi scrive. Se invii volontariamente una email, come nome, indirizzo
              email e contenuto della richiesta, questi dati sono usati esclusivamente per
              rispondere al contatto e gestire eventuali rapporti professionali. Fornire questi dati
              è facoltativo, ma senza di essi non è possibile rispondere alla richiesta. I dati
              tecnici di navigazione sono trattati nella misura necessaria per sicurezza,
              funzionamento e manutenzione del sito.
            </p>
            <p>
              Le applicazioni Adekro per le imprese accessibili da sottodomini di adekro.com (Agricola,
              HorseHouse, Fluida e i gestionali su misura) registrano invece i dati inseriti al loro
              interno. Per i dati personali che il cliente inserisce nell&apos;applicazione, Adekro agisce
              come responsabile del trattamento per conto del cliente, che ne è il titolare. Per i dati
              aziendali, contrattuali e fiscali del cliente, Adekro è titolare del trattamento.
              Nessuno di questi dati è usato per finalità di marketing.
            </p>
          </section>
          <section>
            <h2>Base giuridica e conservazione</h2>
            <p>
              Il trattamento dei dati di contatto si basa sull&apos;esecuzione di misure precontrattuali
              richieste dall&apos;interessato e sul legittimo interesse del titolare a rispondere alle
              richieste ricevute. Le email ricevute sono conservate per il tempo necessario a gestire
              la richiesta e adempiere agli eventuali obblighi di legge. I log tecnici di accesso al
              sito sono conservati per 24 ore.
            </p>
            <p>
              Nelle applicazioni per le imprese, i dati personali inseriti dal cliente sono conservati
              per 2 anni dalla fine del contratto, salvo richiesta di cancellazione anticipata, e poi
              cancellati. I dati contrattuali e fiscali del cliente, di cui Adekro è titolare, sono
              conservati per 11 anni dalla cessazione del rapporto per adempiere agli obblighi
              civilistici e fiscali.
            </p>
          </section>
          <section>
            <h2>Destinatari e trasferimenti</h2>
            <p>
              I dati possono essere trattati da fornitori tecnici nominati, quando necessario,
              responsabili del trattamento: IONOS, fornitore europeo di hosting della posta
              elettronica e di DNS, con cui è in vigore un accordo sul trattamento dei dati, e
              Vercel Inc., che ospita il sito web. Non sono effettuate vendite o comunicazioni dei
              dati a terzi per finalità di marketing.
            </p>
            <p>
              Vercel Inc. ha sede negli Stati Uniti: il trattamento dei dati tecnici di accesso al
              sito, come l&apos;indirizzo IP, può quindi comportare un trasferimento al di fuori dello
              Spazio Economico Europeo, che avviene sulla base della decisione di adeguatezza della
              Commissione europea relativa al Data Privacy Framework UE-USA, a cui Vercel Inc.
              aderisce.
            </p>
          </section>
          <section>
            <h2>Diritti dell&apos;interessato</h2>
            <p>
              Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità o opposizione
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
