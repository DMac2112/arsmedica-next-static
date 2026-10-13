import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import {
  Confirmation,
  DoctorsSchedule,
  LaboratoryInfo,
  OpeningHours,
  VaccinationInfo,
} from "@/components/site/PatientSections";
import { practice } from "@/content/arsmedica";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Godziny, lekarze i badania — ARSMEDICA CENTRUM Kalisz" },
      {
        name: "description",
        content:
          "Godziny POZ, harmonogram lekarzy, laboratorium, szczepienia i kontakt. ARSMEDICA CENTRUM, ul. Babina 3, Kalisz. Rejestracja: 62 580 22 52.",
      },
    ],
  }),
  component: Home,
});

function Today() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timer);
  }, []);
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Warsaw",
    weekday: "short",
  }).format(now);
  const weekend = weekday === "Sat" || weekday === "Sun";
  return (
    <div className="today-hours">
      <p>
        Dziś:{" "}
        {new Intl.DateTimeFormat("pl-PL", {
          timeZone: "Europe/Warsaw",
          weekday: "long",
          day: "numeric",
          month: "long",
        }).format(now)}
      </p>
      <p className="today-value">
        POZ <strong>{weekend ? "nieczynne" : "8:00–18:00"}</strong>
      </p>
      <p className="hours-note">Rozkład tygodniowy · godziny do potwierdzenia, także w święta.</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <section className="patient-hero">
        <div className="container-page hero-layout">
          <div>
            <h1>Godziny i kontakt</h1>
            <Today />
            <a href={`tel:${practice.phoneHref}`} className="registration-call">
              <Phone size={24} aria-hidden="true" />
              <span>
                <span className="call-label">Rejestracja POZ</span>
                <strong>{practice.phone}</strong>
              </span>
            </a>
            <p className="hero-address">ARSMEDICA CENTRUM · ul. Babina 3, Kalisz</p>
          </div>
          <figure className="hero-photo">
            <img
              src={heroImage}
              alt="Rejestracja przychodni ARSMEDICA CENTRUM przy ul. Babina 3"
              width={800}
              height={449}
              fetchPriority="high"
            />
            <figcaption>Twoja przychodnia przy ul. Babina 3</figcaption>
          </figure>
        </div>
      </section>

      <section
        id="godziny"
        className="container-page patient-section"
        aria-labelledby="godziny-title"
      >
        <h2 id="godziny-title">Godziny pracy</h2>
        <OpeningHours />
      </section>
      <section
        id="lekarze"
        className="container-page patient-section"
        aria-labelledby="lekarze-title"
      >
        <h2 id="lekarze-title">Lekarze i godziny przyjęć</h2>
        <DoctorsSchedule />
      </section>
      <section
        id="laboratorium"
        className="patient-section section-green"
        aria-labelledby="laboratorium-title"
      >
        <div className="container-page">
          <h2 id="laboratorium-title">Laboratorium</h2>
          <LaboratoryInfo />
        </div>
      </section>
      <section
        id="szczepienia"
        className="container-page patient-section"
        aria-labelledby="szczepienia-title"
      >
        <h2 id="szczepienia-title">Szczepienia</h2>
        <VaccinationInfo />
      </section>
      <section
        id="informacje"
        className="patient-section section-soft"
        aria-labelledby="informacje-title"
      >
        <div className="container-page">
          <h2 id="informacje-title">Informacje i kontakt</h2>
          <div className="service-layout">
            <div>
              <h3>Jak do nas trafić?</h3>
              <address className="not-italic">
                {practice.street}
                <br />
                {practice.city}
              </address>
              <a className="text-link" href={`tel:${practice.mobileHref}`}>
                Telefon komórkowy: {practice.mobile}
              </a>
              <Link className="text-link" to="/kontakt">
                Kontakt i dojazd
              </Link>
              <h3>Opieka w ramach NFZ</h3>
              <p>Przychodnia świadczy podstawową opiekę zdrowotną w ramach umowy z NFZ.</p>
              <Link className="text-link" to="/cennik-uslug">
                Sprawdź cennik usług płatnych
              </Link>
            </div>
            <div className="patient-links">
              <Link to="/informacje" hash="e-recepta">
                E-recepta — informacje
              </Link>
              <a href="https://e-arsmedica.pl/prawa-i-obowiazki-pacjenta">
                Prawa i obowiązki pacjenta
              </a>
              <a href="https://e-arsmedica.pl/rodo">Ochrona danych (RODO)</a>
              <Link to="/informacje" hash="komunikaty">
                Komunikaty o ochronie danych
              </Link>
              <Link to="/informacje" hash="dokumenty">
                Dokumenty i informacje dla pacjenta
              </Link>
              <Confirmation>
                procedura skarg, regulamin organizacyjny i zasady udostępniania dokumentacji. Źródła
                nie zawierają pełnych informacji.
              </Confirmation>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container-page patient-section about-clinic"
        aria-labelledby="o-przychodni"
      >
        <div>
          <h2 id="o-przychodni">Przychodnia przy Babina 3</h2>
          <p>Podstawowa opieka zdrowotna, prywatne gabinety i sklep medyczny w jednym miejscu.</p>
          <Link className="text-link" to="/informacje">
            Profilaktyka i opieka koordynowana
          </Link>
          <a className="text-link" href="https://e-arsmedica.pl/projekt-grantowy-pn">
            Projekt grantowy
          </a>
        </div>
        <img
          className="about-photo"
          src={heroImage}
          alt="Wnętrze rejestracji ARSMEDICA CENTRUM"
          width={800}
          height={449}
          loading="lazy"
        />
      </section>
    </div>
  );
}
