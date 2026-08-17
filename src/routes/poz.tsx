import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { pozDoctors, pozFacts, pozVaccines } from "@/content/arsmedica";

export const Route = createFileRoute("/poz")({
  head: () => ({
    meta: [
      { title: "Oferta POZ — ARSMEDICA Kalisz" },
      {
        name: "description",
        content:
          "Podstawowa opieka zdrowotna ARSMEDICA w Kaliszu: godziny przyjęć lekarzy, gabinet zabiegowy, pobieranie krwi i szczepienia zalecane.",
      },
      { property: "og:title", content: "Oferta POZ — ARSMEDICA Kalisz" },
      {
        property: "og:description",
        content: "Godziny przyjęć lekarzy POZ, gabinet zabiegowy, pobieranie krwi i szczepienia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/poz" },
    ],
    links: [{ rel: "canonical", href: "/poz" }],
  }),
  component: PozPage,
});

function PozPage() {
  return (
    <div>
      <PageHeader
        kicker="Podstawowa opieka zdrowotna"
        title="Oferta POZ"
        lead="Przychodnia świadczy usługi w ramach umowy z NFZ od poniedziałku do piątku w godz. od 8.00 do 18.00."
      />

      <section className="container-page mt-16">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {pozFacts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.05} className="bg-surface p-8">
              <p className="kicker">{fact.label}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">{fact.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page mt-24" aria-labelledby="lekarze">
        <Reveal>
          <h2 id="lekarze" className="text-4xl md:text-5xl">
            Lekarze i godziny przyjęć
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {pozDoctors.map((doc, i) => (
            <Reveal
              key={doc.name}
              delay={(i % 2) * 0.08}
              as="article"
              className="rounded-2xl border border-border bg-surface p-8 shadow-soft"
            >
              <h3 className="font-serif text-2xl">{doc.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {doc.specialties.join(" · ")}
              </p>
              <dl className="mt-6 divide-y divide-border/70 border-t border-border/70">
                {doc.hours.map(([day, time]) => (
                  <div key={day} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                    <dt className="text-sm capitalize text-muted-foreground">{day}</dt>
                    <dd className="text-sm font-medium tabular-nums">{time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page mt-24" aria-labelledby="szczepienia">
        <div className="rounded-3xl bg-accent px-6 py-14 md:px-14">
          <Reveal>
            <p className="kicker">Profilaktyka</p>
            <h2 id="szczepienia" className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Szczepienia zalecane wykonywane w przychodni
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {pozVaccines.map((v, i) => (
              <Reveal
                key={v}
                as="li"
                delay={i * 0.05}
                className="flex gap-4 rounded-xl bg-surface/80 p-6"
              >
                <span className="font-serif text-xl text-primary">{`0${i + 1}`}</span>
                <span className="text-[0.95rem] leading-relaxed">{v}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
