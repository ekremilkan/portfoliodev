/* ==========================================================================
   PROJECTS  -  this is the ONLY place you edit to add or change portfolio work.
   To add a project: copy one object below, paste it at the end of the list,
   and change the fields. Texts are ['English','Deutsch'] pairs.

   cat   : 'web' | 'shop' | 'app'           (filter buttons build themselves)
   art   : 'site' | 'shop' | 'dash' | 'cal' | 'map'   generated cover artwork
   img   : optional screenshot URL/path. If set, it replaces the generated art.
   c1,c2 : cover gradient colours    a : accent colour used inside the artwork
   stats : n = number, d = decimals, p = prefix, s = suffix (string or [en,de])
   url   : optional live site link (shows a "Visit live site" button)
   quote : optional testimonial (delete the line if you have none)

   NOTE: everything below is PLACEHOLDER content (invented clients, numbers and
   a sample quote). Replace it with real projects before publishing.
   ========================================================================== */
window.PROJECTS = [
  {
    id: "nordlicht",
    cat: "web",
    year: 2025,
    art: "site",
    c1: "#0E3B43",
    c2: "#3FD0C9",
    a: "#3FD0C9",
    title: "Nordlicht Studio",
    client: ["Architecture studio", "Architekturbüro"],
    summary: [
      "A portfolio site that turns visitors into project inquiries.",
      "Ein Portfolio, das Besucher zu Projektanfragen macht.",
    ],
    result: ["2× more inquiries", "2× mehr Anfragen"],
    tags: ["Next.js", "Sanity CMS", "SEO"],
    time: ["3 weeks", "3 Wochen"],
    url: "",
    challenge: [
      "The projects were beautiful, but the old site was slow and hid the contact path. Visitors left before they got in touch.",
      "Die Projekte waren stark, aber die alte Seite war langsam und versteckte den Kontaktweg. Besucher gingen, bevor sie sich meldeten.",
    ],
    did: [
      [
        "Restructured the site around three clear entry points.",
        "Die Seite auf drei klare Einstiege umgebaut.",
      ],
      [
        "Rebuilt the design for speed and large imagery.",
        "Das Design für Tempo und große Bilder neu gebaut.",
      ],
      [
        "Added a simple inquiry flow with clear next steps.",
        "Einen einfachen Anfrage-Ablauf mit klaren nächsten Schritten ergänzt.",
      ],
    ],
    stats: [
      { n: 2, s: "×", l: ["more inquiries", "mehr Anfragen"] },
      {
        n: 0.9,
        d: 1,
        s: " s",
        l: ["average load time", "durchschnittliche Ladezeit"],
      },
      { n: 100, l: ["Lighthouse SEO score", "Lighthouse-SEO-Score"] },
    ],
    quote: {
      t: [
        "We finally have a website that feels like our work.",
        "Endlich haben wir eine Website, die sich wie unsere Arbeit anfühlt.",
      ],
      w: ["Managing partner", "Geschäftsführende Partnerin"],
    },
  },

  {
    id: "kaffeeklatsch",
    cat: "shop",
    year: 2025,
    art: "shop",
    c1: "#3B2416",
    c2: "#D9A066",
    a: "#C27A3A",
    title: "Kaffeeklatsch Roasters",
    client: ["Coffee roastery", "Kaffeerösterei"],
    summary: [
      "An online shop with subscriptions for a small roastery.",
      "Ein Onlineshop mit Abos für eine kleine Rösterei.",
    ],
    result: ["+38% repeat orders", "+38 % Wiederholungskäufe"],
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    time: ["5 weeks", "5 Wochen"],
    url: "",
    challenge: [
      "Orders arrived by message and spreadsheet, and regular customers had no easy way to reorder.",
      "Bestellungen kamen per Nachricht und Tabelle, und Stammkunden konnten nicht einfach nachbestellen.",
    ],
    did: [
      [
        "A catalogue with variants and grind options.",
        "Ein Katalog mit Varianten und Mahlgraden.",
      ],
      [
        "Subscriptions for regular deliveries.",
        "Abos für regelmäßige Lieferungen.",
      ],
      [
        "Order and invoice emails sent automatically.",
        "Bestell- und Rechnungs-E-Mails automatisch versendet.",
      ],
    ],
    stats: [
      { n: 38, p: "+", s: "%", l: ["repeat orders", "Wiederholungskäufe"] },
      { n: 12, s: " h", l: ["saved every week", "pro Woche gespart"] },
      {
        n: 3,
        s: " min",
        l: ["average checkout", "durchschnittlicher Checkout"],
      },
    ],
  },

  {
    id: "flowdesk",
    cat: "app",
    year: 2024,
    art: "dash",
    c1: "#2B1F6B",
    c2: "#8B7CFF",
    a: "#8B7CFF",
    title: "FlowDesk",
    client: ["Service company", "Dienstleistungsunternehmen"],
    summary: [
      "A dashboard that replaced a weekly spreadsheet routine.",
      "Ein Dashboard, das eine wöchentliche Tabellen-Routine ersetzt hat.",
    ],
    result: ["12 h saved every week", "12 h pro Woche gespart"],
    tags: ["React", "Node.js", "PostgreSQL"],
    time: ["8 weeks", "8 Wochen"],
    url: "",
    challenge: [
      "Every Friday, reports were assembled by hand from five different spreadsheets.",
      "Jeden Freitag wurden Berichte von Hand aus fünf Tabellen zusammengebaut.",
    ],
    did: [
      ["One dashboard with live numbers.", "Ein Dashboard mit Live-Zahlen."],
      ["Logins and roles for each team.", "Logins und Rollen für jedes Team."],
      [
        "An automatic weekly report by email.",
        "Ein automatischer Wochenbericht per E-Mail.",
      ],
    ],
    stats: [
      { n: 12, s: " h", l: ["saved every week", "pro Woche gespart"] },
      { n: 5, l: ["tools replaced", "Tools ersetzt"] },
      { n: 100, s: "%", l: ["reports on time", "Berichte pünktlich"] },
    ],
  },

  {
    id: "alpenphysio",
    cat: "web",
    year: 2024,
    art: "cal",
    c1: "#7FA36B",
    c2: "#DDE8D6",
    a: "#3F7A2C",
    title: "Alpen Physio",
    client: ["Physiotherapy clinic", "Physiotherapie-Praxis"],
    summary: [
      "A clinic website with online booking that keeps the calendar full.",
      "Eine Praxis-Website mit Online-Buchung, die den Kalender füllt.",
    ],
    result: ["60% fewer booking calls", "60 % weniger Buchungsanrufe"],
    tags: ["Next.js", "Booking API", "Accessibility"],
    time: ["4 weeks", "4 Wochen"],
    url: "",
    challenge: [
      "The front desk spent hours on the phone booking appointments.",
      "Die Anmeldung verbrachte Stunden am Telefon mit Terminbuchungen.",
    ],
    did: [
      [
        "A clear page for each treatment.",
        "Eine klare Seite für jede Behandlung.",
      ],
      [
        "Online booking synced with their calendar.",
        "Online-Buchung, synchron mit ihrem Kalender.",
      ],
      [
        "Reminders that reduce no-shows.",
        "Erinnerungen, die Terminausfälle senken.",
      ],
    ],
    stats: [
      { n: 60, p: "−", s: "%", l: ["booking calls", "Buchungsanrufe"] },
      { n: 24, s: "/7", l: ["online booking", "Online-Buchung"] },
      { n: 100, s: "%", l: ["mobile friendly", "mobilfreundlich"] },
    ],
  },

  {
    id: "fahrwerk",
    cat: "app",
    year: 2023,
    art: "map",
    c1: "#18202B",
    c2: "#FF8A3D",
    a: "#FF8A3D",
    title: "Fahrwerk Logistik",
    client: ["Regional delivery company", "Regionales Lieferunternehmen"],
    summary: [
      "A live tracking portal for customers and dispatchers.",
      "Ein Live-Tracking-Portal für Kunden und Disponenten.",
    ],
    result: ["45% fewer status calls", "45 % weniger Statusanrufe"],
    tags: ["React", "Node.js", "Maps API"],
    time: ["10 weeks", "10 Wochen"],
    url: "",
    challenge: [
      "Customers kept calling to ask where their delivery was.",
      "Kunden riefen ständig an, um zu fragen, wo ihre Lieferung ist.",
    ],
    did: [
      ["A live map with delivery status.", "Eine Live-Karte mit Lieferstatus."],
      [
        "One portal for customers and dispatchers.",
        "Ein Portal für Kunden und Disponenten.",
      ],
      [
        "Automatic notifications on delivery.",
        "Automatische Benachrichtigungen bei Lieferung.",
      ],
    ],
    stats: [
      { n: 45, p: "−", s: "%", l: ["status calls", "Statusanrufe"] },
      { n: 1, l: ["portal for everyone", "Portal für alle"] },
      {
        n: 10,
        s: [" weeks", " Wochen"],
        l: ["from idea to live", "von der Idee bis live"],
      },
    ],
  },
];
/* ==========================================================================
   PRICING  -  the only place to edit packages, goals and FAQ.
   Texts are ['English','Deutsch'] pairs.
   price : the "from" price in EUR.
   lite  : optional lighter version {price, note}. Powers the "Simpler needs?"
           switch, so visitors see that the starting price can go DOWN.
   feats : each feature; lite:false means "not part of the lighter version".
   feat  : true = the highlighted (lime) package.
   goals : the "What do you want to do?" chips; plan = plan id or 'custom'.

   EVERYTHING BELOW IS PLACEHOLDER (prices, promises, payment terms, e-mail).
   Replace it with your real offer before publishing.
   ========================================================================== */
window.PRICING = {
  email: "hello@yourdomain.com",
  plans: [
    {
      id: "landing",
      price: 199,
      lite: null,
      name: ["Landing page", "Landingpage"],
      who: [
        "One focused page to introduce yourself or your offer, on a small budget.",
        "Eine fokussierte Seite, um dich oder dein Angebot vorzustellen, mit kleinem Budget.",
      ],
      time: ["Ready in 3–5 days", "Fertig in 3–5 Tagen"],
      feats: [
        { t: ["One focused page", "Eine fokussierte Seite"] },
        { t: ["Responsive design", "Responsives Design"] },
        { t: ["Contact form", "Kontaktformular"] },
        { t: ["Basic SEO", "Basis-SEO"] },
        { t: ["Live within days", "In wenigen Tagen live"] },
      ],
    },
    {
      id: "business",
      price: 499,
      feat: true,
      badge: ["Most popular", "Am beliebtesten"],
      lite: {
        price: 349,
        note: ["3 pages, no blog section.", "3 Seiten, ohne Blog-Bereich."],
      },
      name: ["Business website", "Business-Website"],
      who: [
        "For businesses that want to look credible and receive inquiries.",
        "Für Unternehmen, die glaubwürdig auftreten und Anfragen erhalten wollen.",
      ],
      time: ["Ready in 1–2 weeks", "Fertig in 1–2 Wochen"],
      feats: [
        { t: ["Up to 5 pages", "Bis zu 5 Seiten"] },
        { t: ["Custom design", "Individuelles Design"] },
        { t: ["Contact & booking forms", "Kontakt- & Buchungsformulare"] },
        { t: ["Blog or news section", "Blog- oder News-Bereich"], lite: false },
        { t: ["SEO & analytics setup", "SEO- & Analytics-Setup"], lite: false },
      ],
    },
    {
      id: "shop",
      price: 899,
      lite: {
        price: 599,
        note: [
          "Up to 20 products, no subscriptions.",
          "Bis zu 20 Produkte, ohne Abos.",
        ],
      },
      name: ["Online shop", "Onlineshop"],
      who: [
        "For brands ready to sell online with a checkout that just works.",
        "Für Marken, die online verkaufen wollen, mit einem Checkout, der einfach funktioniert.",
      ],
      time: ["Ready in 3–5 weeks", "Fertig in 3–5 Wochen"],
      feats: [
        { t: ["Product catalogue", "Produktkatalog"] },
        { t: ["Secure checkout & payments", "Sicherer Checkout & Zahlungen"] },
        { t: ["Shipping, tax & invoices", "Versand, Steuern & Rechnungen"] },
        { t: ["Discounts & subscriptions", "Rabatte & Abos"], lite: false },
        { t: ["Stock management", "Bestandsverwaltung"], lite: false },
      ],
    },
    {
      id: "app",
      price: 2400,
      lite: {
        price: 1500,
        note: [
          "One core workflow, no integrations.",
          "Ein Kernablauf, ohne Integrationen.",
        ],
      },
      name: ["Web application", "Web-Anwendung"],
      who: [
        "For teams replacing spreadsheets and manual work with one custom tool.",
        "Für Teams, die Tabellen und Handarbeit durch ein eigenes Tool ersetzen.",
      ],
      time: ["Ready in 6–12 weeks", "Fertig in 6–12 Wochen"],
      feats: [
        { t: ["Custom dashboard", "Individuelles Dashboard"] },
        { t: ["Logins & user roles", "Logins & Nutzerrollen"] },
        { t: ["Integrations & APIs", "Integrationen & APIs"], lite: false },
        { t: ["Automated reports", "Automatische Berichte"], lite: false },
        { t: ["Documentation & handover", "Dokumentation & Übergabe"] },
      ],
    },
  ],
  goals: [
    { t: ["Get found online", "Online gefunden werden"], plan: "business" },
    {
      t: ["Launch fast on a small budget", "Schnell und günstig starten"],
      plan: "landing",
    },
    { t: ["Sell products online", "Produkte online verkaufen"], plan: "shop" },
    { t: ["Automate my work", "Meine Arbeit automatisieren"], plan: "app" },
    {
      t: ["I am not sure yet", "Ich bin mir noch nicht sicher"],
      plan: "custom",
    },
  ],
  faq: [
    {
      q: ["How much does a website cost?", "Was kostet eine Website?"],
      a: [
        "It depends on the scope. A simple one-page site starts at {landing}, a full business website at {business}, an online shop at {shop} and a custom web application at {app}. These are starting points: if you need less, we scale the scope down and quote you less. Third-party costs such as hosting or domain renewals are listed separately in your quote, so nothing comes as a surprise.",
        "Das hängt vom Umfang ab. Eine einfache One-Page-Website startet bei {landing}, eine komplette Unternehmenswebsite bei {business}, ein Onlineshop bei {shop} und eine individuelle Webanwendung bei {app}. Das sind Startpunkte: Brauchst du weniger, reduzieren wir den Umfang und den Preis. Kosten von Dritten wie Hosting oder Domain-Verlängerungen führen wir separat im Angebot auf, damit nichts überrascht.",
      ],
    },
    {
      q: ["How long does a website take?", "Wie lange dauert eine Website?"],
      a: [
        "A simple site is usually live in 3 to 5 days, a full business website in 1 to 2 weeks and an online shop in 3 to 5 weeks. Web applications take longer, often 6 to 12 weeks. You get a concrete timeline in writing before we start.",
        "Eine einfache Seite ist meist in 3 bis 5 Tagen online, eine komplette Unternehmenswebsite in 1 bis 2 Wochen und ein Onlineshop in 3 bis 5 Wochen. Webanwendungen dauern länger, oft 6 bis 12 Wochen. Einen konkreten Zeitplan bekommst du schriftlich, bevor wir starten.",
      ],
    },
    {
      q: [
        "Do you work with businesses outside Germany?",
        "Arbeitet ihr auch mit Unternehmen außerhalb Deutschlands?",
      ],
      a: [
        "Yes. We are based in Germany and work with clients worldwide. Calls happen online, we work in English or German, and everything is handled remotely, so your location makes no difference.",
        "Ja. Wir sitzen in Deutschland und arbeiten mit Kunden weltweit. Gespräche laufen online, wir arbeiten auf Englisch oder Deutsch und alles wird remote abgewickelt. Dein Standort spielt keine Rolle.",
      ],
    },
    {
      q: [
        "Can you redesign my existing website?",
        "Könnt ihr meine bestehende Website neu gestalten?",
      ],
      a: [
        "Absolutely. We look at what works today, keep the content and rankings worth keeping, and rebuild the rest to be faster, clearer and easier to use on mobile. Send us the link and we will tell you honestly what is worth changing.",
        "Sehr gern. Wir schauen, was heute funktioniert, behalten Inhalte und Rankings, die es wert sind, und bauen den Rest schneller, klarer und mobil besser nutzbar neu auf. Schick uns den Link, und wir sagen dir ehrlich, was sich zu ändern lohnt.",
      ],
    },
    {
      q: [
        "Do I need to know exactly what I want?",
        "Muss ich genau wissen, was ich will?",
      ],
      a: [
        'No. Most clients start with a problem, not a plan, like "I need more enquiries" or "my shop is hard to use". In a first call we work out what you need, what can wait and what it should cost. If a simpler option is enough, we will say so.',
        "Nein. Die meisten Kunden starten mit einem Problem statt mit einem Plan, etwa „Ich brauche mehr Anfragen“ oder „Mein Shop ist umständlich“. Im ersten Gespräch klären wir, was du brauchst, was warten kann und was es kosten soll. Reicht eine einfachere Lösung, sagen wir das.",
      ],
    },
    {
      q: [
        "What happens after I request a quote?",
        "Was passiert nach meiner Angebotsanfrage?",
      ],
      a: [
        "We reply within one working day. Usually there is a short call to understand your goal, then you receive a written quote with scope, price and timeline. There is no obligation, and you decide whether to go ahead.",
        "Wir antworten innerhalb eines Werktags. Meist folgt ein kurzes Gespräch, um dein Ziel zu verstehen, danach bekommst du ein schriftliches Angebot mit Umfang, Preis und Zeitplan. Es besteht keine Verpflichtung, du entscheidest, ob es weitergeht.",
      ],
    },
    {
      q: ["How does payment work?", "Wie läuft die Bezahlung?"],
      a: [
        "Usually half at the start and half at launch. For larger projects we split the payments into milestones. It is all written in your quote.",
        "Meist die Hälfte zum Start und die Hälfte beim Launch. Bei größeren Projekten teilen wir die Zahlungen in Meilensteine auf. Alles steht in deinem Angebot.",
      ],
    },
    {
      q: ["Will I own the website?", "Gehört mir die Website danach?"],
      a: [
        "Yes. The code, the content and the domain belong to you. You are never locked in.",
        "Ja. Code, Inhalte und Domain gehören dir. Du bist nie gebunden.",
      ],
    },
  ],
};
/* ==========================================================================
   ESTIMATOR  -  the price calculator. All prices are PLACEHOLDERS in euros.
   Edit the numbers (p = price change in EUR, w = change in weeks) and the
   texts (['English','Deutsch'] pairs) here; nothing else needs to change.
   base = starting price of the project type, wk = typical weeks.
   The result is shown as a range that narrows with every answer.
   ========================================================================== */
(function () {
  var PAGES = [
    { t: ["Up to 3 pages", "Bis zu 3 Seiten"], p: -150, w: -0.5 },
    { t: ["Up to 5 pages", "Bis zu 5 Seiten"], p: 0, w: 0 },
    { t: ["6 to 10 pages", "6 bis 10 Seiten"], p: 350, w: 1 },
    { t: ["11 to 20 pages", "11 bis 20 Seiten"], p: 800, w: 2.5 },
    { t: ["More than 20 pages", "Mehr als 20 Seiten"], p: 1500, w: 5 },
  ];
  window.ESTIMATOR = {
    types: [
      {
        id: "landing",
        fam: "web",
        ic: "page",
        base: 199,
        wk: 0.8,
        t: ["A simple one-page website", "Eine einfache One-Page-Website"],
        d: [
          "One focused page for you or your offer.",
          "Eine fokussierte Seite für dich oder dein Angebot.",
        ],
        sq: ["How long should the page be?", "Wie lang soll die Seite werden?"],
        size: [
          {
            t: ["Short, up to 5 sections", "Kurz, bis zu 5 Abschnitte"],
            p: 0,
            w: 0,
          },
          {
            t: ["Standard, up to 8 sections", "Standard, bis zu 8 Abschnitte"],
            p: 90,
            w: 0.4,
          },
          {
            t: ["Long, 9 or more sections", "Lang, 9 oder mehr Abschnitte"],
            p: 200,
            w: 0.8,
          },
        ],
      },
      {
        id: "business",
        fam: "web",
        ic: "pages",
        base: 499,
        wk: 1.5,
        t: [
          "A multi-page business website",
          "Eine mehrseitige Unternehmenswebsite",
        ],
        d: [
          "Services, about, contact and more.",
          "Leistungen, Über uns, Kontakt und mehr.",
        ],
        sq: ["How many pages do you need?", "Wie viele Seiten brauchst du?"],
        size: PAGES,
      },
      {
        id: "shop",
        fam: "shop",
        ic: "bag",
        base: 899,
        wk: 4,
        t: ["An online shop", "Ein Onlineshop"],
        d: [
          "Products, checkout and payments.",
          "Produkte, Checkout und Zahlungen.",
        ],
        sq: [
          "How many products will you sell?",
          "Wie viele Produkte willst du verkaufen?",
        ],
        size: [
          { t: ["Up to 20 products", "Bis zu 20 Produkte"], p: -300, w: -1 },
          { t: ["Up to 100 products", "Bis zu 100 Produkte"], p: 0, w: 0 },
          { t: ["Up to 500 products", "Bis zu 500 Produkte"], p: 500, w: 1 },
          {
            t: ["More than 500 products", "Mehr als 500 Produkte"],
            p: 1200,
            w: 2.5,
          },
        ],
      },
      {
        id: "app",
        fam: "app",
        ic: "grid",
        base: 2400,
        wk: 8,
        t: ["A custom web application", "Eine individuelle Webanwendung"],
        d: [
          "Dashboards, portals and internal tools.",
          "Dashboards, Portale und interne Tools.",
        ],
        sq: ["How big is the tool?", "Wie groß ist das Tool?"],
        size: [
          {
            t: ["One core workflow", "Ein Kernablauf"],
            d: [
              "One job done really well.",
              "Eine Aufgabe, richtig gut gelöst.",
            ],
            p: -900,
            w: -3,
          },
          {
            t: ["2 to 3 workflows", "2 bis 3 Abläufe"],
            d: [
              "A small system that covers a team.",
              "Ein kleines System für ein Team.",
            ],
            p: 0,
            w: 0,
          },
          {
            t: ["4 to 6 workflows", "4 bis 6 Abläufe"],
            d: [
              "A full internal platform.",
              "Eine vollständige interne Plattform.",
            ],
            p: 2500,
            w: 4,
          },
          {
            t: ["A large platform", "Eine große Plattform"],
            d: [
              "Many roles, modules and integrations.",
              "Viele Rollen, Module und Integrationen.",
            ],
            p: 6000,
            w: 10,
          },
        ],
      },
      {
        id: "redesign",
        fam: "web",
        ic: "loop",
        base: 399,
        wk: 1.2,
        t: [
          "Redesign my existing website",
          "Meine bestehende Website neu gestalten",
        ],
        d: [
          "Keep what works, rebuild the rest.",
          "Bewährtes behalten, den Rest neu bauen.",
        ],
        sq: ["How many pages does it have?", "Wie viele Seiten hat sie?"],
        size: PAGES,
      },
      {
        id: "unsure",
        ic: "help",
        t: ["I am not sure yet", "Ich bin mir noch nicht sicher"],
        d: [
          "No problem. We will work it out together.",
          "Kein Problem. Wir klären es gemeinsam.",
        ],
      },
    ],
    fams: {
      web: {
        feats: [
          {
            t: ["Blog or news section", "Blog- oder News-Bereich"],
            p: 150,
            w: 0.3,
          },
          { t: ["Online booking", "Online-Terminbuchung"], p: 300, w: 0.6 },
          {
            t: ["Two languages (EN/DE)", "Zwei Sprachen (EN/DE)"],
            p: 250,
            w: 0.5,
          },
          {
            t: [
              "Edit content yourself (CMS)",
              "Inhalte selbst bearbeiten (CMS)",
            ],
            p: 350,
            w: 0.7,
          },
          {
            t: [
              "Newsletter or CRM connection",
              "Newsletter- oder CRM-Anbindung",
            ],
            p: 120,
            w: 0.2,
          },
          {
            t: ["Advanced animations", "Aufwendige Animationen"],
            p: 250,
            w: 0.5,
          },
          {
            t: ["Member area with login", "Mitgliederbereich mit Login"],
            p: 800,
            w: 1.5,
          },
        ],
        dsg: [
          {
            t: ["I already have a design", "Ich habe schon ein Design"],
            p: -150,
            w: -0.3,
          },
          { t: ["I need a design", "Ich brauche ein Design"], p: 0, w: 0 },
          {
            t: [
              "I need a design and brand identity",
              "Ich brauche Design und Markenauftritt",
            ],
            d: [
              "Logo, colours and typography.",
              "Logo, Farben und Typografie.",
            ],
            p: 250,
            w: 0.7,
          },
        ],
        cq: ["Texts and images", "Texte und Bilder"],
        cnt: [
          {
            t: ["I have texts and images ready", "Texte und Bilder liegen vor"],
            p: 0,
            w: 0,
          },
          {
            t: [
              "I need help with the content",
              "Ich brauche Hilfe bei den Inhalten",
            ],
            d: ["Copywriting and image selection.", "Texte und Bildauswahl."],
            p: 200,
            w: 0.5,
          },
        ],
      },
      shop: {
        feats: [
          {
            t: [
              "Subscriptions or recurring orders",
              "Abos oder wiederkehrende Bestellungen",
            ],
            p: 500,
            w: 1,
          },
          {
            t: [
              "Multiple currencies and international tax",
              "Mehrere Währungen und internationale Steuern",
            ],
            p: 300,
            w: 0.6,
          },
          {
            t: [
              "Discount codes and gift cards",
              "Rabattcodes und Geschenkgutscheine",
            ],
            p: 150,
            w: 0.3,
          },
          { t: ["Customer accounts", "Kundenkonten"], p: 200, w: 0.4 },
          { t: ["Product reviews", "Produktbewertungen"], p: 120, w: 0.3 },
          {
            t: ["Two languages (EN/DE)", "Zwei Sprachen (EN/DE)"],
            p: 250,
            w: 0.5,
          },
          {
            t: [
              "Stock or ERP synchronisation",
              "Bestands- oder ERP-Synchronisation",
            ],
            p: 700,
            w: 1.5,
          },
          { t: ["Product configurator", "Produktkonfigurator"], p: 900, w: 2 },
        ],
        dsg: [
          {
            t: ["I already have a design", "Ich habe schon ein Design"],
            p: -200,
            w: -0.5,
          },
          { t: ["I need a design", "Ich brauche ein Design"], p: 0, w: 0 },
          {
            t: [
              "I need a design and brand identity",
              "Ich brauche Design und Markenauftritt",
            ],
            d: [
              "Logo, colours and typography.",
              "Logo, Farben und Typografie.",
            ],
            p: 300,
            w: 0.8,
          },
        ],
        cq: ["Product content", "Produktinhalte"],
        cnt: [
          {
            t: [
              "My product data and photos are ready",
              "Produktdaten und Fotos liegen vor",
            ],
            p: 0,
            w: 0,
          },
          {
            t: [
              "I need help with product texts and photos",
              "Ich brauche Hilfe bei Produkttexten und Fotos",
            ],
            p: 250,
            w: 0.7,
          },
        ],
      },
      app: {
        feats: [
          {
            t: ["User logins and roles", "Nutzer-Logins und Rollen"],
            p: 400,
            w: 1,
          },
          {
            t: ["Payments or subscriptions", "Zahlungen oder Abos"],
            p: 600,
            w: 1.2,
          },
          {
            t: [
              "Connections to other tools (APIs)",
              "Anbindung anderer Tools (APIs)",
            ],
            p: 500,
            w: 1.2,
          },
          {
            t: ["Dashboards and reports", "Dashboards und Berichte"],
            p: 500,
            w: 1,
          },
          {
            t: [
              "Email or SMS notifications",
              "E-Mail- oder SMS-Benachrichtigungen",
            ],
            p: 250,
            w: 0.5,
          },
          {
            t: ["File uploads and documents", "Datei-Uploads und Dokumente"],
            p: 250,
            w: 0.5,
          },
          { t: ["Admin panel", "Admin-Bereich"], p: 600, w: 1.2 },
          {
            t: [
              "Works like an app on phones (PWA)",
              "Funktioniert wie eine App auf dem Handy (PWA)",
            ],
            p: 400,
            w: 1,
          },
          {
            t: [
              "Smart automation or AI features",
              "Intelligente Automatisierung oder KI-Funktionen",
            ],
            p: 900,
            w: 2,
          },
        ],
        dsg: [
          {
            t: ["I already have a design", "Ich habe schon ein Design"],
            p: -450,
            w: -1,
          },
          { t: ["I need a design", "Ich brauche ein Design"], p: 0, w: 0 },
          {
            t: [
              "I need a design and brand identity",
              "Ich brauche Design und Markenauftritt",
            ],
            p: 300,
            w: 0.8,
          },
        ],
        cq: ["Requirements", "Anforderungen"],
        cnt: [
          {
            t: [
              "I have specs or a clear idea",
              "Ich habe Vorgaben oder eine klare Idee",
            ],
            p: 0,
            w: 0,
          },
          {
            t: [
              "I need help defining the requirements",
              "Ich brauche Hilfe bei den Anforderungen",
            ],
            d: [
              "A short planning workshop first.",
              "Zuerst ein kurzer Planungs-Workshop.",
            ],
            p: 400,
            w: 1,
          },
        ],
      },
    },
    time: [
      {
        t: ["As soon as possible", "So schnell wie möglich"],
        d: [
          "Priority slot, about 20% extra.",
          "Bevorzugter Termin, etwa 20 % Aufpreis.",
        ],
        m: 0.2,
        wm: 0.7,
      },
      {
        t: ["In the next 1 to 2 months", "In den nächsten 1 bis 2 Monaten"],
        d: ["Our standard schedule.", "Unser Standardzeitplan."],
        m: 0,
        wm: 1,
      },
      {
        t: ["Flexible, no rush", "Flexibel, kein Zeitdruck"],
        d: [
          "We fit it around other work, 5% less.",
          "Wir planen es zwischen andere Projekte, 5 % weniger.",
        ],
        m: -0.05,
        wm: 1.2,
      },
    ],
    mini: [
      { type: "shop", size: 1, feats: [0, 2], dsg: 1, cnt: 0, time: 1 },
      { type: "business", size: 2, feats: [0, 3], dsg: 1, cnt: 1, time: 1 },
      { type: "app", size: 1, feats: [0, 3, 6], dsg: 0, cnt: 0, time: 2 },
    ],
    ui: {
      eb: ["Project estimator", "Projekt-Rechner"],
      step: ["Step {n} of {m}", "Schritt {n} von {m}"],
      ready: ["Your estimate", "Dein Ergebnis"],
      close: ["Close", "Schließen"],
      back: ["Back", "Zurück"],
      next: ["Continue", "Weiter"],
      skip: ["Skip this step", "Schritt überspringen"],
      see: ["See my estimate", "Ergebnis ansehen"],
      est: ["Estimate", "Schätzung"],
      est_l: ["Your estimate", "Deine Schätzung"],
      acc: ["Accuracy", "Genauigkeit"],
      timeline: ["Typical timeline", "Typischer Zeitrahmen"],
      hint0: [
        "Pick what you want to build and your estimate appears here. It updates with every answer.",
        "Wähle, was du umsetzen möchtest, und deine Schätzung erscheint hier. Sie aktualisiert sich mit jeder Antwort.",
      ],
      hint1: [
        "This range narrows with every answer you give.",
        "Diese Spanne wird mit jeder Antwort genauer.",
      ],
      hint2: [
        "An indicative range. You always get a fixed price in writing before we start.",
        "Eine Orientierung. Den Festpreis bekommst du immer schriftlich, bevor wir starten.",
      ],
      hintu: [
        "Every project is different. We will work out scope and price together in a short call.",
        "Jedes Projekt ist anders. Umfang und Preis klären wir gemeinsam in einem kurzen Gespräch.",
      ],
      t1: ["No sign-up, no spam", "Keine Anmeldung, kein Spam"],
      t2: [
        "Fixed price in writing before we start",
        "Festpreis schriftlich vor dem Start",
      ],
      t3: ["Reply within one working day", "Antwort innerhalb eines Werktags"],
      from: ["From", "Ab"],
      talk: ["Free call", "Kostenloses Gespräch"],
      base: ["starting at", "ab"],
      q_type: ["What are you looking to build?", "Was möchtest du umsetzen?"],
      q_type_s: [
        "Choose the closest match. You can change it any time.",
        "Wähle das, was am besten passt. Du kannst es jederzeit ändern.",
      ],
      q_feat: ["Which features do you need?", "Welche Funktionen brauchst du?"],
      q_feat_s: [
        "Pick everything that applies, or skip if you are unsure.",
        "Wähle alles, was passt, oder überspringe den Schritt.",
      ],
      q_dsg: ["What do you already have?", "Was ist schon vorhanden?"],
      q_dsg_s: [
        "This helps us avoid work you do not need.",
        "So vermeiden wir Arbeit, die du nicht brauchst.",
      ],
      g_dsg: ["Design", "Design"],
      q_time: ["When do you want to launch?", "Wann soll es live gehen?"],
      q_time_s: ["A rough idea is enough.", "Eine grobe Vorstellung genügt."],
      q_res: ["Your estimate is ready", "Deine Schätzung ist fertig"],
      q_res_s: [
        "Send it to us and we come back with a written quote within one working day. No obligation.",
        "Schick sie uns, und wir melden uns innerhalb eines Werktags mit einem schriftlichen Angebot. Unverbindlich.",
      ],
      q_unsure: [
        "Let us figure it out together",
        "Lass es uns gemeinsam klären",
      ],
      q_unsure_s: [
        "Tell us a little about your idea. We will suggest the simplest solution and a fair price after a short call.",
        "Erzähl uns kurz von deiner Idee. Nach einem kurzen Gespräch schlagen wir die einfachste Lösung und einen fairen Preis vor.",
      ],
      f_name: ["Your name", "Dein Name"],
      f_mail: ["Your email", "Deine E-Mail"],
      f_msg: [
        "Anything we should know? (optional)",
        "Sollen wir noch etwas wissen? (optional)",
      ],
      e_name: ["Please enter your name.", "Bitte gib deinen Namen ein."],
      e_mail: [
        "Please enter a valid email address.",
        "Bitte gib eine gültige E-Mail-Adresse ein.",
      ],
      send: ["Send my estimate request", "Schätzung anfragen"],
      sendu: ["Request a free call", "Kostenloses Gespräch anfragen"],
      fine: [
        "We only use your details to reply to this request.",
        "Wir nutzen deine Angaben nur, um auf diese Anfrage zu antworten.",
      ],
      wa: ["Send via WhatsApp", "Per WhatsApp senden"],
      copy: ["Copy summary", "Zusammenfassung kopieren"],
      copied: ["Copied", "Kopiert"],
      reset: ["Start over", "Neu starten"],
      ok_h: ["Almost done, {name}!", "Fast geschafft, {name}!"],
      ok_p: [
        "Your email app should open with everything filled in. Just press send. Nothing opened? Copy the summary and email it to {email}.",
        "Dein E-Mail-Programm sollte sich mit allem Ausgefüllten öffnen. Du musst nur noch senden. Nichts passiert? Kopiere die Zusammenfassung und schick sie an {email}.",
      ],
      s_title: ["Project estimate request", "Anfrage Projektschätzung"],
      s_type: ["Project", "Projekt"],
      s_range: [
        "Estimated range (indicative)",
        "Geschätzte Spanne (unverbindlich)",
      ],
      s_time: ["Typical timeline", "Typischer Zeitrahmen"],
      s_name: ["Name", "Name"],
      s_mail: ["Email", "E-Mail"],
      s_msg: ["Notes", "Anmerkungen"],
      u_days: ["days", "Tage"],
      u_weeks: ["weeks", "Wochen"],
      key: ["Tip: press 1 to 9 to choose", "Tipp: Mit 1 bis 9 auswählen"],
      mini_h: ["Live estimate", "Live-Schätzung"],
      shared: [" ", " "],
    },
  };
})();
/* ==========================================================================
   FOOTER  -  edit links, company name and legal pages here.
   href values are PLACEHOLDERS: point them to your real pages
   (for example /impressum, /datenschutz). Texts are ['English','Deutsch'].
   German law (DDG / DSGVO) requires at least an Impressum and a privacy
   policy on commercial sites; have them written or checked by a professional.
   ========================================================================== */
window.FOOTER = {
  name: "Yourname",
  email: "hello@yourdomain.com",
  whatsapp:
    "490000000000" /* PLACEHOLDER: your number, country code first, digits only (49 = Germany) */,
  waText: [
    "Hi! I found your website and would like to talk about a project.",
    "Hallo! Ich habe eure Website gefunden und würde gern über ein Projekt sprechen.",
  ],
  nav: [
    { t: ["Work", "Projekte"], href: "#work" },
    { t: ["Services", "Leistungen"], href: "#services" },
    { t: ["Pricing", "Preise"], href: "#pricing" },
    {
      t: ["Price estimator", "Projekt-Rechner"],
      href: "#estimate",
      estimator: true,
    },
  ],
  services: [
    { t: ["Websites", "Websites"], href: "#services" },
    { t: ["E-commerce", "E-Commerce"], href: "#services" },
    { t: ["Web applications", "Web-Anwendungen"], href: "#services" },
    { t: ["Redesign", "Redesign"], href: "#pricing" },
  ],
  contact: [
    {
      t: ["hello@yourdomain.com", "hello@yourdomain.com"],
      href: "mailto:hello@yourdomain.com",
    },
    { t: ["+49 000 0000000", "+49 000 0000000"], href: "tel:+490000000000" },
    { t: ["WhatsApp", "WhatsApp"], wa: true },
    { t: ["Germany, working worldwide", "Deutschland, weltweit aktiv"] },
  ],
  social: [
    { t: ["LinkedIn", "LinkedIn"], href: "https://www.linkedin.com/", ext: 1 },
    { t: ["GitHub", "GitHub"], href: "https://github.com/", ext: 1 },
    {
      t: ["Instagram", "Instagram"],
      href: "https://www.instagram.com/",
      ext: 1,
    },
  ],
  legal: [
    { t: ["Legal notice (Impressum)", "Impressum"], href: "/impressum" },
    { t: ["Privacy policy", "Datenschutzerklärung"], href: "/datenschutz" },
    { t: ["Terms (AGB)", "AGB"], href: "/agb" },
    {
      t: ["Cookie settings", "Cookie-Einstellungen"],
      href: "#cookies",
      cookies: true,
    },
  ],
};
