import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Confirmation } from "@/components/site/PatientSections";
import { mainRegistration, specialists } from "@/content/arsmedica";

export const Route = createFileRoute("/specjalisci")({
  head: () => ({
    meta: [
      { title: "Prywatne gabinety specjalistyczne — ARSMEDICA Kalisz" },
      {
        name: "description",
        content:
          "Specjaliści przyjmujący w ARSMEDICA w Kaliszu: ortopeda, neurolog, kardiolog, psychiatra, chirurg naczyniowy, psycholog, dietetyk, pulmonolog i inni.",
      },
      { property: "og:title", content: "Prywatne gabinety specjalistyczne — ARSMEDICA" },
      {
        property: "og:description",
        content: "Lista specjalistów wraz z terminami przyjęć i numerami rejestracji.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/specjalisci" },
    ],
    links: [{ rel: "canonical", href: "/specjalisci" }],
  }),
  component: SpecialistsPage,
});

function SpecialistsPage() {
  return (
    <div>
      <PageHeader
        kicker="Prywatne gabinety"
        title="Specjaliści"
        lead="Poniżej lista specjalistów przyjmujących w naszej placówce wraz z terminami przyjęć i numerami rejestracji."
      />

      <section className="container-page mt-16">
        <Reveal className="rounded-2xl border border-primary/20 bg-accent p-8 md:p-10">
          <p className="kicker">Rejestracja</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Rejestracja do lekarzy przyjmujących w ramach prywatnych gabinetów specjalistycznych{" "}
            {mainRegistration.hours}.
          </p>
          <a
            href={`tel:${mainRegistration.phoneHref}`}
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-medium text-primary-foreground"
          >
            <Phone className="size-4" aria-hidden />
            {mainRegistration.phone}
          </a>
        </Reveal>
      </section>

      <section className="container-page mt-14">
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {specialists.map((s, i) => (
            <Reveal
              key={`${s.field}-${s.name}`}
              as="li"
              delay={(i % 3) * 0.06}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <p className="text-lg text-primary">{s.field}</p>
              <h2 className="mt-3 font-serif text-2xl leading-snug">{s.name}</h2>
              {s.schedule ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.schedule}</p>
              ) : null}
              {s.confirmation ? <Confirmation>{s.confirmation}</Confirmation> : null}
              {!s.schedule ? (
                <p className="hours-note mt-3">Godziny przyjęć do potwierdzenia w rejestracji.</p>
              ) : null}
              <a
                href={`tel:+48${s.phone.replace(/\s/g, "")}`}
                className="mt-auto inline-flex min-h-12 items-center gap-2 py-3 text-sm font-medium text-primary"
              >
                <Phone className="size-3.5" aria-hidden />
                rej. {s.phone}
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}
