import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Confirmation } from "@/components/site/PatientSections";
import { priceIntro, priceList } from "@/content/arsmedica";

export const Route = createFileRoute("/cennik-uslug")({
  head: () => ({
    meta: [
      { title: "Cennik usług — ARSMEDICA Kalisz" },
      {
        name: "description",
        content:
          "Cennik usług płatnych w ARSMEDICA w Kaliszu. Świadczenia realizowane na podstawie kontraktu z NFZ są bezpłatne.",
      },
      { property: "og:title", content: "Cennik usług — ARSMEDICA Kalisz" },
      {
        property: "og:description",
        content: "Ceny usług nieobjętych ubezpieczeniem zdrowotnym w przychodni ARSMEDICA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cennik-uslug" },
    ],
    links: [{ rel: "canonical", href: "/cennik-uslug" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div>
      <PageHeader kicker="Dla pacjenta" title="Cennik usług" />

      <section className="container-page mt-16 grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <div className="space-y-5">
          <Confirmation>
            aktualność cen i zasad odpłatności. Kwoty pochodzą z cennika źródłowej strony.
          </Confirmation>
          {priceIntro.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-sm leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="overflow-hidden rounded-2xl border border-border bg-surface">
          <table className="w-full table-fixed text-left">
            <caption className="sr-only">Cennik usług płatnych</caption>
            <thead>
              <tr className="border-b border-border bg-sand">
                <th scope="col" className="w-2/3 px-3 py-4 text-lg">
                  Usługa
                </th>
                <th scope="col" className="px-3 py-4 text-right text-lg">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/70">
              {priceList.map((row) => (
                <tr key={row.name} className="transition-colors hover:bg-sand/60">
                  <td className="break-words px-3 py-4 text-lg leading-relaxed">{row.name}</td>
                  <td className="px-3 py-4 text-right font-medium tabular-nums">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>
    </div>
  );
}
