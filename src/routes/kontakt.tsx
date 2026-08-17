import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
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

      <section className="container-page mt-16 grid gap-10 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-border bg-surface p-10 md:p-12">
          <dl className="space-y-8">
            <div>
              <dt className="kicker">Adres</dt>
              <dd className="mt-3 font-serif text-3xl leading-snug">
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
              <dd className="mt-3 text-lg">{practice.hours}</dd>
            </div>
            <div>
              <dt className="kicker">Rejestracja do gabinetów specjalistycznych</dt>
              <dd className="mt-3 text-lg">
                <a
                  className="hover:text-primary"
                  href={`tel:${mainRegistration.phoneHref}`}
                >
                  {mainRegistration.phone}
                </a>
                <span className="block text-sm text-muted-foreground">
                  {mainRegistration.hours}
                </span>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-border bg-sand">
          <iframe
            title="Mapa — ARSMEDICA, ul. Babina 3, Kalisz"
            src="https://www.openstreetmap.org/export/embed.html?bbox=18.078%2C51.755%2C18.100%2C51.770&layer=mapnik&marker=51.7625%2C18.0885"
            className="h-[420px] w-full lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </div>
  );
}
