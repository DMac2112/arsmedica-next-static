import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Confirmation } from "@/components/site/PatientSections";
import { mainRegistration, practice } from "@/content/arsmedica";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — ARSMEDICA, ul. Babina 3, Kalisz" },
      {
        name: "description",
        content:
          "ARSMEDICA CENTRUM, ul. Babina 3, 62-800 Kalisz. Telefon 62 580 22 52, kom. 573 335 284. Przychodnia czynna pn–pt 8:00–18:00.",
      },
      { property: "og:title", content: "Kontakt — ARSMEDICA Kalisz" },
      {
        property: "og:description",
        content: "ul. Babina 3, 62-800 Kalisz. Tel. 62 580 22 52, pn–pt 8:00–18:00.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: practice.legalName,
          telephone: "+48 62 580 22 52",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Babina 3",
            postalCode: "62-800",
            addressLocality: "Kalisz",
            addressCountry: "PL",
          },
          openingHours: "Mo-Fr 08:00-18:00",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <PageHeader kicker="Kontakt" title={practice.legalName} />

      <section className="contact-details container-page mt-16 grid gap-10 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-border bg-surface p-6 md:p-12">
          <dl className="space-y-8">
            <div>
              <dt className="kicker">Adres</dt>
              <dd className="mt-3 font-sans text-3xl leading-snug">
                {practice.street}
                <br />
                {practice.city}
              </dd>
            </div>
            <div>
              <dt className="kicker">Telefon</dt>
              <dd className="mt-3 space-y-1 text-lg">
                <a className="block hover:text-primary" href={`tel:${practice.phoneHref}`}>
                  Tel. {practice.phone}
                </a>
                <a className="block hover:text-primary" href={`tel:${practice.mobileHref}`}>
                  Kom. {practice.mobile}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Godziny pracy przychodni</dt>
              <dd className="mt-3 text-lg">
                {practice.hours}
                <Confirmation>
                  godziny POZ. Oferta POZ podaje 8:00–18:00, stopka źródła 7:30–18:00. Godziny
                  rejestracji POZ nie są podane osobno.
                </Confirmation>
              </dd>
            </div>
            <div>
              <dt className="kicker">Rejestracja do gabinetów specjalistycznych</dt>
              <dd className="mt-3 text-lg">
                <a className="hover:text-primary" href={`tel:${mainRegistration.phoneHref}`}>
                  {mainRegistration.phone}
                </a>
                <span className="block text-sm text-muted-foreground">
                  {mainRegistration.hours}
                </span>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl bg-accent p-6 md:p-12">
          <h2 className="text-3xl">Dojazd do przychodni</h2>
          <p className="mt-6">ARSMEDICA CENTRUM, ul. Babina 3, 62-800 Kalisz.</p>
          <a
            className="text-link mt-4"
            href="https://www.openstreetmap.org/search?query=Babina%203%2C%20Kalisz"
          >
            Znajdź adres na mapie
          </a>
          <Confirmation>
            informacje o wejściu, parkingu i dostępności budynku. Źródła nie opisują szczegółów
            dojazdu.
          </Confirmation>
        </Reveal>
      </section>
    </div>
  );
}
