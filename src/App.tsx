import { FormEvent, useState } from "react";

const A = "/assets";
const services = [
  ["Sindacato", "Tutela dei diritti dei lavoratori e rappresentanza.", ["2a5e3.png"]],
  [
    "CAF",
    "Assistenza fiscale per individui e famiglie: dichiarazioni dei redditi, ISEE e pratiche fiscali gestite da operatori qualificati.",
    ["cd43f.png", "b59d7.png"],
  ],
  [
    "Patronato",
    "Assistenza sociale e previdenziale: pensioni, disoccupazione, assegni familiari, invalidità e altre procedure INPS e INAIL.",
    ["3cfe1.png", "4721f.png"],
  ],
  [
    "Servizi Legali",
    "Assistenza legale attraverso professionisti qualificati, inclusi solleciti formali e accordi per pratiche specifiche.",
    ["6a5fc.png"],
  ],
  [
    "Formazione",
    "Servizi di formazione e istruzione, inclusi corsi di lingua, esami e formazione sulla sicurezza sul lavoro.",
    ["5f4c1.png"],
  ],
  [
    "Immigrazione",
    "Permessi di soggiorno, cittadinanza, ricongiungimento familiare, visti, asilo e procedure documentali correlate.",
    ["f1166.png"],
  ],
] as const;
const stats = [
  ["2M +", "Associati"],
  ["250+", "Sedi"],
  ["20+", "Marchi"],
  ["30+", "Servizi"],
];
const partners = ["ab8b5.png", "8bb9e.png", "3768c.png", "c3b50.png", "b9ce6.png", "26abe.png"];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="FederLavoratori, home" onClick={close}>
          <img src={`${A}/840bb.svg`} alt="FederLavoratori Pensionati ed Autonomi" />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navigazione principale">
          <a href="#home" onClick={close}>
            Home
          </a>
          <a href="#chi-siamo" onClick={close}>
            Chi siamo
          </a>
          <a href="#servizi" onClick={close}>
            Servizi
          </a>
          <a href="#contatti" onClick={close}>
            Contatti
          </a>
          <a className="button nav-cta" href="#collabora" onClick={close}>
            Collabora con noi
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const images = ["15989.png", "75eb3.png", "f2fdf.png", "a7025.png"];
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Al fianco delle persone, a tutela dei loro diritti.</h1>
          <p>Assistenza per cittadini, lavoratori, pensionati ed autonomi.</p>
          <div className="hero-actions">
            <a className="button" href="#servizi">
              Esplora i nostri servizi →
            </a>
            <a className="button button-outline" href="#chi-siamo">
              Informazioni su FederLavoratori →
            </a>
          </div>
        </div>
        <div className="hero-grid" aria-label="La comunità FederLavoratori">
          {images.map((image, i) => (
            <img
              key={image}
              src={`${A}/${image}`}
              alt={
                [
                  "Famiglia nel verde",
                  "Lavoratore specializzato",
                  "Consulenza a una coppia",
                  "Persone in cammino",
                ][i]
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats" aria-label="FederLavoratori in numeri">
      <div className="container stats-grid">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="servizi">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Capacità</span>
          <h2>I nostri servizi</h2>
          <p>
            Servizi professionali progettati per supportare persone, imprese e comunità in diversi
            settori.
          </p>
        </div>
        <div className="services-grid">
          {services.map(([title, text, images]) => (
            <article className="service-card" key={title}>
              <div className={`card-image ${title === "Immigrazione" ? "image-crop" : ""}`}>
                {images.map((image, i) => (
                  <img
                    key={image}
                    className={i ? "image-overlay" : ""}
                    src={`${A}/${image}`}
                    alt={i ? "" : title}
                  />
                ))}
              </div>
              <div className="card-body">
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="arrow-link" href="#contatti">
                  Scopri di più <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="chi-siamo">
      <div className="container about-grid">
        <div className="about-copy">
          <div>
            <span className="eyebrow">Informazioni su FederLavoratori</span>
            <h2>Creare Valore Attraverso Aziende, Persone e Partnership.</h2>
            <p>
              FederLavoratori è un'organizzazione aziendale diversificata che opera nei principali
              hub globali. Promuovendo innovazione ed eccellenza operativa, costruiamo piattaforme
              che collegano servizi, potenziano comunità e semplificano iniziative aziendali.
            </p>
            <blockquote>
              Costruire un ecosistema in crescita tra aziende, servizi e partnership strategiche
              globali.
            </blockquote>
          </div>
          <a className="button" href="#partner">
            Scopri di Più →
          </a>
        </div>
        <div className="about-visual">
          <img src={`${A}/e918a.png`} alt="Leadership FederLavoratori riunita a un tavolo" />
          <span aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section partners-section" id="partner">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">I nostri partner</span>
          <h2>Affidabilità di una Rete in Crescita di Partner</h2>
          <p>Supportiamo oltre 500 partner istituzionali, retail e operativi a livello globale.</p>
        </div>
        <div className="partner-grid">
          {partners.map((logo, i) => (
            <div className="partner-logo" key={logo}>
              <img src={`${A}/${logo}`} alt={`Partner FederLavoratori ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  const articles = [
    [
      "Aggiornamenti su Lavoro e Occupazione",
      "Rimani aggiornato sulle normative sul lavoro, i diritti dei lavoratori e i cambiamenti importanti nelle leggi italiane sul lavoro.",
      ["932c6.png"],
    ],
    [
      "Indennità di Disoccupazione e NASpI",
      "Comprendi i requisiti, le procedure di domanda e gli aggiornamenti per chi ha perso il lavoro riguardo alla NASpI.",
      ["ab748.png", "ed72e.png"],
    ],
  ] as const;
  return (
    <section className="section news-section" id="notizie">
      <div className="container">
        <div className="section-heading news-heading">
          <span className="eyebrow">Notizie e informazioni</span>
          <h2>Ultimi Aggiornamenti e Annunci da FederLavoratori</h2>
        </div>
        <div className="news-grid">
          {articles.map(([title, text, images]) => (
            <article className="news-card" key={title}>
              <div className="news-image">
                {images.map((image, i) => (
                  <img
                    key={image}
                    className={i ? "image-overlay" : ""}
                    src={`${A}/${image}`}
                    alt={i ? "" : title}
                  />
                ))}
              </div>
              <div className="news-copy">
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="news-link" href="#contatti">
                  Leggi di più <img src={`${A}/3007e.svg`} alt="" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collaboration() {
  return (
    <section className="section collaboration" id="collabora">
      <div className="container collaboration-inner">
        <h2>
          Costruiamo Insieme
          <br />
          Qualcosa di Più Grande.
        </h2>
        <p>
          FederLavoratori accoglie partnership strategiche con organizzazioni e aziende che
          condividono la nostra visione di crescita e opportunità.
        </p>
        <a className="button button-light" href="#contatti">
          Collabora con Noi →
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }
  return (
    <section className="section contact-section" id="contatti">
      <div className="container contact-grid">
        <div className="contact-copy">
          <div className="section-heading">
            <span className="eyebrow">Contattaci</span>
            <h2>Connettiamoci</h2>
            <p>
              Hai una domanda, un'opportunità di business o un'idea di partnership? Contatta
              FederLavoratori.
            </p>
          </div>
          <div className="contact-detail">
            <strong>Sede Centrale</strong>
            <address>Via della Scrofa, Roma (RM), Italia, Rome, Italy, 39 00186</address>
          </div>
          <div className="contact-detail">
            <strong>Contatto Diretto</strong>
            <a href="tel:+390670492545">+39 06 70492545</a>
            <a href="mailto:info@federlavoratori.org">info@federlavoratori.org</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            Nome
            <input name="name" placeholder="Il tuo nome completo" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="corporate@company.com" required />
          </label>
          <label>
            Messaggio
            <textarea name="message" placeholder="Come possiamo collaborare?" required />
          </label>
          <button className="button" type="submit">
            Invia Richiesta →
          </button>
          {sent && (
            <p className="form-success" role="status">
              Grazie. La tua richiesta è stata ricevuta.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <img src={`${A}/82124.svg`} alt="FederLavoratori Pensionati ed Autonomi" />
            <p>
              Collegare aziende, servizi e opportunità all'interno di un ecosistema aziendale
              unificato per favorire la collaborazione e stimolare l'innovazione.
            </p>
            <div className="socials">
              {["06ec2.svg", "6a268.svg", "8352c.svg"].map((icon, i) => (
                <a href="#contatti" aria-label={["Facebook", "YouTube", "LinkedIn"][i]} key={icon}>
                  <img src={`${A}/${icon}`} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3>Azienda e Impresa</h3>
            <a href="#chi-siamo">Chi Siamo</a>
            <a href="#partner">Marchi</a>
            <a href="#chi-siamo">Aziende</a>
            <a href="#partner">Partner</a>
            <a href="#notizie">Notizie</a>
          </div>
          <div>
            <h3>Servizi</h3>
            <a href="#servizi">Sindacato</a>
            <a href="#servizi">CAF</a>
            <a href="#servizi">Patronato</a>
            <a href="#servizi">Servizi Legali</a>
            <a href="#servizi">Istruzione</a>
            <a href="#servizi">Corso di Lingua</a>
          </div>
          <div>
            <h3>Connetti</h3>
            <a href="#contatti">Contatto</a>
            <a href="#collabora">Collabora con Noi</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 FederLavoratori. Tutti i diritti riservati.</p>
          <div>
            <a href="#contatti">Informativa sulla Privacy</a>
            <span>•</span>
            <a href="#contatti">Termini e Condizioni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Partners />
        <News />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
