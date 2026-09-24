import type { Product } from "@/lib/products";

export type Guide = {
  slug: string;
  title: string;
  topic: string;
  metaDescription: string;
  publishedDate: string;
  updatedDate: string;
  relatedProductSlug: Product["slug"];
  intro: string;
  sections: { heading: string; body: string[] }[];
  comparisonTable?: {
    caption: string;
    columns: string[];
    rows: { label: string; values: string[] }[];
  };
  faqs?: { question: string; answer: string }[];
};

export const guides: Guide[] = [
  {
    slug: "come-gestire-una-scuderia",
    title: "Come gestire una scuderia: le aree da tenere sotto controllo",
    topic: "Gestione scuderia",
    metaDescription:
      "Le aree da presidiare per gestire una scuderia in modo tracciabile: anagrafica cavalli, box, alimentazione, allenamenti, terapie e scadenze.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "horsehouse",
    intro:
      "Gestire una scuderia significa tenere insieme informazioni molto diverse tra loro: chi sono i cavalli ospitati, dove sono alloggiati, cosa mangiano, come si allenano e quali cure stanno ricevendo. Finche i cavalli sono pochi e una sola persona segue tutto, un quaderno o un foglio di calcolo possono bastare. Il problema nasce quando piu persone si alternano nella cura degli animali, o quando il numero di cavalli cresce: a quel punto la memoria individuale non e piu sufficiente e serve uno storico condiviso.",
    sections: [
      {
        heading: "Anagrafica cavalli e alloggio",
        body: [
          "Ogni cavallo ha bisogno di una scheda propria: dati identificativi, proprietario o referente, box o paddock assegnato, ed eventuali note comportamentali utili a chi se ne occupa quel giorno.",
          "Quando l'alloggio cambia (spostamento di box, uscita in paddock, rientro per una terapia), è utile che il cambiamento resti tracciato: aiuta a ricostruire velocemente dove si trovava un cavallo in un dato momento, cosa che tornaci utile in caso di problemi sanitari o comportamentali.",
        ],
      },
      {
        heading: "Alimentazione",
        body: [
          "La dieta di un cavallo dipende da peso, eta, livello di lavoro ed eventuali patologie, e cambia nel tempo. Senza una scheda dedicata, le variazioni di dieta restano affidate alla memoria di chi le ha decise, con il rischio che chi somministra il pasto non sappia dell'ultima modifica.",
          "Una dieta scritta e consultabile da chiunque lavori quel giorno riduce gli errori di somministrazione, specialmente quando piu persone si alternano nei turni di alimentazione.",
        ],
      },
      {
        heading: "Allenamenti",
        body: [
          "Tenere uno storico degli allenamenti (tipo di lavoro, durata, intensita, chi lo ha condotto) permette di valutare i progressi di un cavallo nel tempo e di individuare prima un affaticamento o un calo di rendimento.",
          "E' particolarmente utile quando piu istruttori seguono lo stesso cavallo in momenti diversi della settimana: senza uno storico condiviso, ognuno riparte senza sapere cosa ha fatto chi lo ha preceduto.",
        ],
      },
      {
        heading: "Terapie veterinarie e scadenze",
        body: [
          "Una scuderia dovrebbe mantenere uno storico degli interventi sanitari per ciascun cavallo, includendo data, trattamento, farmaco, dosaggio e responsabile. Questo storico e utile sia per il veterinario di riferimento sia per chi somministra le cure successive.",
          "Vaccinazioni, sverminazioni e controlli periodici hanno scadenze che vanno rispettate: gestirle come promemoria scritti, invece che a memoria, evita ritardi ed errori.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quali informazioni servono davvero per gestire una scuderia?",
        answer:
          "Come minimo: anagrafica e alloggio di ogni cavallo, dieta in corso, storico allenamenti e storico delle terapie veterinarie con le relative scadenze. Sono le stesse aree che un gestionale come HorseHouse organizza in un'unica scheda cavallo.",
      },
      {
        question: "Da quanti cavalli in poi serve un sistema strutturato invece di un quaderno?",
        answer:
          "Non c'e una soglia fissa: il segnale e quando piu persone iniziano ad occuparsi degli stessi cavalli in momenti diversi. A quel punto la memoria individuale smette di bastare e serve uno storico scritto e condiviso.",
      },
    ],
  },
  {
    slug: "gestione-alimentazione-cavalli",
    title: "Come organizzare l'alimentazione dei cavalli in una scuderia",
    topic: "Alimentazione",
    metaDescription:
      "Come impostare e tenere aggiornata la dieta di ogni cavallo in una scuderia, evitando errori di somministrazione quando piu persone si alternano nei turni.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "horsehouse",
    intro:
      "La dieta di un cavallo non e un dato fisso: cambia con il peso, l'eta, il livello di lavoro e le eventuali patologie, e viene rivista periodicamente dal veterinario o dal responsabile della scuderia. Organizzarla bene significa soprattutto renderla leggibile da chiunque debba somministrare il pasto, non solo da chi l'ha decisa.",
    sections: [
      {
        heading: "Cosa deve contenere la scheda alimentare di un cavallo",
        body: [
          "Tipo e quantita di mangime, foraggio e integratori, orari di somministrazione e eventuali restrizioni (ad esempio in caso di patologie metaboliche). Utile anche annotare da quando e in vigore quella dieta e chi l'ha impostata.",
        ],
      },
      {
        heading: "Il problema dei turni e delle consegne",
        body: [
          "Nelle scuderie con piu collaboratori, i turni di alimentazione cambiano spesso: mattina, sera, weekend. Se la dieta di un cavallo viene modificata e la modifica resta solo nella testa di chi l'ha decisa, chi somministra il pasto successivo rischia di seguire ancora l'indicazione vecchia.",
          "Una scheda scritta, aggiornata alla fonte e consultabile da tutti, evita questo tipo di errore senza bisogno di comunicazioni verbali che si perdono facilmente durante la giornata.",
        ],
      },
      {
        heading: "Come HorseHouse organizza questa parte",
        body: [
          "In HorseHouse la dieta fa parte della scheda del singolo cavallo, insieme a trattamenti e allenamenti: chi si occupa dell'alimentazione vede sempre l'indicazione piu recente, senza dover chiedere conferma a chi ha fatto la modifica.",
        ],
      },
    ],
  },
  {
    slug: "gestione-allenamenti-cavalli",
    title: "Come pianificare e tracciare gli allenamenti dei cavalli",
    topic: "Allenamenti",
    metaDescription:
      "Come pianificare gli allenamenti dei cavalli in una scuderia e perche tenerne uno storico condiviso tra piu istruttori riduce il rischio di sovraccarico.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "horsehouse",
    intro:
      "Pianificare l'allenamento di un cavallo significa bilanciare carico di lavoro e recupero in funzione degli obiettivi (agonismo, mantenimento, riabilitazione). Tracciarlo nel tempo e altrettanto importante: permette di vedere se un calo di rendimento e un episodio isolato o l'inizio di un affaticamento da monitorare.",
    sections: [
      {
        heading: "Cosa registrare per ogni sessione",
        body: [
          "Tipo di lavoro svolto, durata, intensita percepita, terreno o struttura utilizzata e chi ha condotto la sessione. Anche annotazioni brevi su comportamento o reattivita del cavallo aiutano a costruire un quadro nel tempo.",
        ],
      },
      {
        heading: "Quando piu istruttori seguono lo stesso cavallo",
        body: [
          "E' comune che un cavallo venga seguito da piu persone in momenti diversi della settimana. Senza uno storico condiviso, ogni istruttore riparte senza sapere con certezza cosa e stato fatto nei giorni precedenti, con il rischio di ripetere lo stesso tipo di lavoro o di sottovalutare un accumulo di fatica.",
          "Uno storico consultabile da tutti risolve questo passaggio di consegne, indipendentemente da chi e in scuderia quel giorno.",
        ],
      },
    ],
  },
  {
    slug: "gestione-terapie-veterinarie-cavalli",
    title: "Come registrare le terapie veterinarie dei cavalli",
    topic: "Terapie veterinarie",
    metaDescription:
      "Cosa annotare per ogni trattamento veterinario di un cavallo (data, farmaco, dosaggio, responsabile) e perche uno storico tracciabile riduce gli errori.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "horsehouse",
    intro:
      "Una scuderia dovrebbe mantenere uno storico degli interventi sanitari per ciascun cavallo, includendo data, trattamento, farmaco, dosaggio e responsabile. Questo storico serve al veterinario per valutare l'andamento di una cura, e a chi lavora in scuderia per sapere cosa e stato fatto e cosa resta da fare.",
    sections: [
      {
        heading: "Cosa annotare a ogni intervento",
        body: [
          "Data dell'intervento, tipo di trattamento, farmaco e dosaggio, eventuale tempo di sospensione (rilevante in caso di attivita agonistica) e il nome di chi ha somministrato la cura o del veterinario di riferimento.",
        ],
      },
      {
        heading: "Vaccinazioni e controlli periodici",
        body: [
          "Vaccinazioni, sverminazioni e controlli hanno scadenze che vanno rispettate. Gestirle come promemoria scritti, con una data di scadenza visibile, evita che dipendano dalla memoria di una sola persona.",
        ],
      },
      {
        heading: "Perche uno storico solo verbale non basta",
        body: [
          "Quando le informazioni sanitarie passano solo a voce tra collaboratori, è facile che un trattamento venga somministrato due volte, o che una scadenza venga dimenticata durante un cambio turno. Uno storico scritto, associato alla scheda del cavallo, elimina questa dipendenza dalla memoria individuale.",
        ],
      },
    ],
  },
  {
    slug: "excel-vs-software-gestione-scuderia",
    title: "Excel o software gestionale per una scuderia? Confronto pratico",
    topic: "Confronto",
    metaDescription:
      "Confronto pratico tra un foglio Excel e un gestionale dedicato per organizzare anagrafica cavalli, scadenze, dieta e terapie in una scuderia.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "horsehouse",
    intro:
      "Un foglio di calcolo puo essere un buon punto di partenza per una scuderia molto piccola gestita da una sola persona. Con l'aumentare del numero di cavalli o delle persone coinvolte, alcune funzioni diventano difficili da mantenere manualmente: qui sotto un confronto sulle aree piu comuni.",
    sections: [
      {
        heading: "Dove Excel regge e dove inizia a mostrare limiti",
        body: [
          "Excel funziona bene per un elenco statico di cavalli e informazioni che cambiano raramente. Inizia a mostrare limiti quando servono promemoria automatici sulle scadenze, quando piu persone devono modificare gli stessi dati in momenti diversi, o quando serve consultare rapidamente lo storico di un singolo cavallo da un telefono, in scuderia.",
        ],
      },
    ],
    comparisonTable: {
      caption: "Confronto tra foglio Excel e gestionale dedicato",
      columns: ["Funzione", "Foglio Excel", "Gestionale dedicato"],
      rows: [
        { label: "Anagrafica cavalli", values: ["Si", "Si"] },
        { label: "Scadenze automatiche", values: ["Manuale, facile da dimenticare", "Promemoria automatico"] },
        { label: "Dieta per singolo cavallo", values: ["Manuale, aggiornamento manuale", "Scheda aggiornata alla fonte"] },
        { label: "Storico terapie veterinarie", values: ["Manuale, difficile da consultare", "Storico consultabile per cavallo"] },
        { label: "Accesso da piu persone in contemporanea", values: ["Limitato", "Si, con storico delle modifiche"] },
        { label: "Consultazione da mobile in scuderia", values: ["Scomoda", "Pensata per l'uso in scuderia"] },
      ],
    },
  },
  {
    slug: "come-gestire-unazienda-agricola",
    title: "Come gestire un'azienda agricola: le aree da tenere sotto controllo",
    topic: "Gestione azienda agricola",
    metaDescription:
      "Le aree da presidiare per gestire un'azienda agricola in modo tracciabile: terreni e particelle, colture, dati satellitari e trattamenti fitosanitari.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "agricola",
    intro:
      "Gestire un'azienda agricola significa tenere insieme informazioni che cambiano nel tempo e nello spazio: quali terreni e particelle si coltivano, cosa ci si semina, come si comportano le colture stagione dopo stagione e quali trattamenti fitosanitari sono stati distribuiti e quando. Quando queste informazioni restano sparse tra appunti, memoria e fogli diversi, diventa difficile avere un quadro affidabile su cui decidere.",
    sections: [
      {
        heading: "Terreni, particelle e colture",
        body: [
          "Ogni particella ha una sua storia: colture precedenti, caratteristiche del suolo, eventuali criticita. Una mappa operativa che associa ogni particella alla coltura in corso rende piu semplice pianificare le attivita stagionali e confrontare l'andamento di piu appezzamenti.",
        ],
      },
      {
        heading: "Dati satellitari come supporto alle decisioni",
        body: [
          "L'accesso a dati satellitari come quelli del programma Copernicus si sta allargando anche alle aziende agricole di piccole e medie dimensioni, non solo alle grandi realta strutturate. Consultare questi dati insieme alla mappa dei propri terreni permette di individuare prima un'anomalia nella coltura, invece di accorgersene troppo tardi durante un sopralluogo.",
        ],
      },
      {
        heading: "Trattamenti fitosanitari",
        body: [
          "Ogni trattamento fitosanitario andrebbe registrato con data, prodotto utilizzato, dosaggio e particella interessata: sia per motivi di tracciabilita, sia per evitare di ripetere o dimenticare un intervento su una particella specifica.",
          "Uno storico consultabile per particella aiuta anche a valutare nel tempo l'efficacia di un trattamento rispetto a un altro.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quali informazioni servono per gestire terreni e particelle in modo affidabile?",
        answer:
          "Come minimo: la mappa di terreni e particelle con le colture in corso, l'accesso a dati satellitari per monitorare lo stato delle colture, e lo storico dei trattamenti fitosanitari distribuiti su ciascuna particella.",
      },
    ],
  },
  {
    slug: "dati-satellitari-copernicus-per-piccole-aziende-agricole",
    title: "Dati satellitari Copernicus: perche non servono solo alle grandi aziende agricole",
    topic: "Dati satellitari",
    metaDescription:
      "Come i dati satellitari Copernicus possono essere utili anche a piccole e medie aziende agricole per monitorare le colture terreno per terreno.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "agricola",
    intro:
      "I dati satellitari del programma Copernicus vengono spesso associati a grandi aziende agricole con strutture tecniche dedicate. In realta l'accesso a questi dati si sta allargando anche a chi gestisce pochi ettari, a patto di poterli consultare in modo semplice insieme alla propria mappa di terreni e particelle.",
    sections: [
      {
        heading: "Cosa cambia nel monitoraggio delle colture",
        body: [
          "Consultare periodicamente lo stato delle colture tramite dati satellitari permette di individuare un'anomalia (stress idrico, sviluppo irregolare) prima che diventi visibile a un sopralluogo diretto, guadagnando tempo utile per intervenire.",
        ],
      },
      {
        heading: "Il valore di averli integrati con la propria mappa",
        body: [
          "Il dato satellitare da solo e utile, ma diventa piu operativo quando e associato direttamente alla particella e alla coltura che rappresenta, invece di essere consultato come fonte separata su un altro strumento.",
        ],
      },
    ],
  },
  {
    slug: "gestione-trattamenti-fitosanitari",
    title: "Come tenere lo storico dei trattamenti fitosanitari per particella",
    topic: "Trattamenti fitosanitari",
    metaDescription:
      "Cosa registrare a ogni trattamento fitosanitario (data, prodotto, dosaggio, particella) e perche uno storico per particella aiuta a decidere meglio.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "agricola",
    intro:
      "Ogni trattamento fitosanitario distribuito su un terreno dovrebbe restare tracciato: non solo per motivi di conformita, ma perche uno storico per particella e una delle informazioni piu utili per decidere i trattamenti delle stagioni successive.",
    sections: [
      {
        heading: "Cosa annotare a ogni intervento",
        body: [
          "Data del trattamento, prodotto utilizzato, dosaggio, particella interessata e, quando rilevante, la coltura su cui e stato distribuito.",
        ],
      },
      {
        heading: "Perche serve uno storico per particella, non un elenco unico",
        body: [
          "Un elenco generico di trattamenti distribuiti in azienda dice poco senza sapere su quale particella e stato fatto ciascuno. Associare ogni trattamento alla particella specifica permette di confrontare l'andamento della stessa coltura negli anni e di individuare pattern utili.",
        ],
      },
    ],
  },
  {
    slug: "excel-vs-gestionale-agricolo",
    title: "Excel o gestionale agricolo? Confronto pratico",
    topic: "Confronto",
    metaDescription:
      "Confronto pratico tra un foglio Excel e un gestionale agricolo dedicato per organizzare terreni, particelle, dati satellitari e trattamenti fitosanitari.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "agricola",
    intro:
      "Un foglio di calcolo puo bastare per un elenco statico di particelle e colture. Con l'aumentare del numero di terreni o della necessita di incrociare dati satellitari e storico dei trattamenti, alcune funzioni diventano difficili da mantenere manualmente.",
    sections: [
      {
        heading: "Dove Excel regge e dove inizia a mostrare limiti",
        body: [
          "Excel funziona bene per un elenco di particelle che cambia raramente. Mostra limiti quando serve consultare rapidamente, per una singola particella, lo storico dei trattamenti insieme ai dati satellitari piu recenti, o quando piu persone in azienda devono aggiornare gli stessi dati.",
        ],
      },
    ],
    comparisonTable: {
      caption: "Confronto tra foglio Excel e gestionale agricolo dedicato",
      columns: ["Funzione", "Foglio Excel", "Gestionale dedicato"],
      rows: [
        { label: "Mappa di terreni e particelle", values: ["Statica, aggiornamento manuale", "Mappa operativa consultabile"] },
        { label: "Dati satellitari Copernicus", values: ["Fonte separata da consultare a parte", "Integrati sulla stessa mappa"] },
        { label: "Storico trattamenti per particella", values: ["Manuale, difficile da filtrare", "Storico consultabile per particella"] },
        { label: "Accesso da piu persone in contemporanea", values: ["Limitato", "Si, con storico delle modifiche"] },
      ],
    },
  },
  {
    slug: "come-si-sviluppa-un-gestionale-su-misura",
    title: "Come si sviluppa un gestionale su misura, passo dopo passo",
    topic: "Sviluppo su misura",
    metaDescription:
      "Le fasi con cui si sviluppa un gestionale su misura per una PMI: ascolto delle esigenze, progettazione condivisa, sviluppo per fasi e rilascio.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "gestionali-su-misura",
    intro:
      "Un gestionale su misura non nasce da un catalogo di funzioni preconfezionate, ma da un confronto diretto con chi lavora ogni giorno nell'azienda. Il percorso tipico si sviluppa in quattro fasi, ciascuna verificabile prima di passare alla successiva.",
    sections: [
      {
        heading: "1. Ascolto delle esigenze",
        body: [
          "Si analizzano attivita, dati e criticita operative del team per capire cosa il gestionale deve davvero risolvere, evitando di partire da funzioni generiche non richieste.",
        ],
      },
      {
        heading: "2. Progettazione condivisa",
        body: [
          "Flussi, ruoli e schermate vengono disegnati insieme al team che user il gestionale, validando ogni scelta prima di iniziare lo sviluppo vero e proprio.",
        ],
      },
      {
        heading: "3. Sviluppo per fasi",
        body: [
          "Il gestionale viene costruito in fasi verificabili: il team puo vedere e testare le funzioni gia pronte man mano che vengono realizzate, invece di attendere un'unica consegna finale a progetto concluso.",
        ],
      },
      {
        heading: "4. Rilascio ed evoluzione",
        body: [
          "Dopo la formazione del team all'uso del gestionale, il percorso continua: nuove funzioni, automazioni e integrazioni vengono aggiunte quando l'azienda ne ha davvero bisogno.",
        ],
      },
    ],
  },
  {
    slug: "quando-serve-un-gestionale-su-misura",
    title: "I segnali che indicano che serve un gestionale su misura",
    topic: "Quando serve",
    metaDescription:
      "I segnali piu comuni che indicano che un gestionale standard non basta piu e che conviene valutare un gestionale su misura per la propria PMI.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "gestionali-su-misura",
    intro:
      "Molte PMI si accorgono di aver bisogno di un gestionale su misura non da un singolo evento, ma dall'accumularsi di piccole frizioni quotidiane. Alcuni segnali ricorrono piu spesso di altri.",
    sections: [
      {
        heading: "Dati sparsi tra fogli, chat e strumenti diversi",
        body: [
          "Quando le stesse informazioni vivono in piu posti (un foglio per i clienti, una chat per gli ordini, un altro strumento per la fatturazione), il rischio di errori e disallineamenti cresce con il numero di persone coinvolte.",
        ],
      },
      {
        heading: "Passaggi manuali che si ripetono",
        body: [
          "Se lo stesso dato viene ricopiato a mano da uno strumento all'altro piu volte al giorno, e un segnale che la struttura attuale non segue davvero il modo in cui lavora l'azienda.",
        ],
      },
      {
        heading: "Un software standard che va \"forzato\" per funzionare",
        body: [
          "Quando un gestionale standard richiede continue eccezioni, fogli di calcolo di supporto o workaround per adattarsi ai processi reali, spesso conviene ripartire da come lavora davvero il team invece di continuare ad adattarsi allo strumento.",
        ],
      },
    ],
  },
  {
    slug: "quanto-costa-un-gestionale-su-misura",
    title: "Quanto costa un gestionale su misura: i fattori che incidono davvero",
    topic: "Costi e tempi",
    metaDescription:
      "I fattori che determinano tempi e costo di un gestionale su misura per una PMI: complessita dei processi, numero di ruoli e integrazioni necessarie.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "gestionali-su-misura",
    intro:
      "Non esiste un prezzo standard per un gestionale su misura, perche il costo dipende da quanto e complesso il processo da digitalizzare, non da un listino a funzioni. Conoscere i fattori che incidono aiuta pero a farsi un'idea prima ancora di chiedere un preventivo.",
    sections: [
      {
        heading: "Complessita dei processi da digitalizzare",
        body: [
          "Un gestionale che gestisce un solo flusso lineare richiede meno tempo di uno che deve coordinare piu ruoli, permessi e passaggi di approvazione tra reparti diversi.",
        ],
      },
      {
        heading: "Numero di ruoli e permessi",
        body: [
          "Quante persone diverse useranno il gestionale, e con quali livelli di accesso, incide sulla progettazione di flussi e permessi, e quindi sui tempi di sviluppo.",
        ],
      },
      {
        heading: "Integrazioni con strumenti gia in uso",
        body: [
          "Se il gestionale deve dialogare con strumenti esistenti (fatturazione, e-commerce, altri software gia in azienda), il lavoro di integrazione va valutato caso per caso in base alle API disponibili.",
        ],
      },
      {
        heading: "Perche lavorare per fasi aiuta a controllare il budget",
        body: [
          "Sviluppare per fasi verificabili permette di vedere e validare le funzioni gia pronte prima di procedere oltre, invece di scoprire solo alla fine se il budget stimato era realistico.",
        ],
      },
    ],
  },
  {
    slug: "gestionale-standard-vs-gestionale-su-misura",
    title: "Gestionale standard o su misura? Confronto pratico",
    topic: "Confronto",
    metaDescription:
      "Confronto pratico tra un gestionale standard e uno sviluppato su misura: quando conviene l'uno, quando conviene l'altro.",
    publishedDate: "2026-09-01",
    updatedDate: "2026-09-24",
    relatedProductSlug: "gestionali-su-misura",
    intro:
      "Un gestionale standard puo essere la scelta giusta quando i processi dell'azienda sono simili a quelli della maggior parte delle imprese dello stesso settore. Quando invece il modo di lavorare e specifico, adattare l'azienda al software puo costare piu, nel tempo, di un gestionale costruito su misura.",
    sections: [
      {
        heading: "Dove un gestionale standard funziona bene",
        body: [
          "Processi comuni al settore, tempi di attivazione rapidi e budget iniziale piu contenuto sono i punti di forza di un gestionale standard, quando i processi dell'azienda non si discostano troppo dalla media.",
        ],
      },
    ],
    comparisonTable: {
      caption: "Confronto tra gestionale standard e gestionale su misura",
      columns: ["Aspetto", "Gestionale standard", "Gestionale su misura"],
      rows: [
        { label: "Aderenza ai processi reali", values: ["Richiede di adattarsi al software", "Costruito sui processi esistenti"] },
        { label: "Tempi di attivazione", values: ["Rapidi", "Piu lunghi, ma per fasi verificabili"] },
        { label: "Evoluzione nel tempo", values: ["Limitata alle funzioni del fornitore", "Nuove funzioni aggiunte quando servono"] },
        { label: "Integrazioni con strumenti esistenti", values: ["Dipende dal fornitore", "Progettate sul caso specifico"] },
      ],
    },
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByProduct(productSlug: Product["slug"]) {
  return guides.filter((guide) => guide.relatedProductSlug === productSlug);
}
