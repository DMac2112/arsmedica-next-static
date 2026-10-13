import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Confirmation } from "@/components/site/PatientSections";
import { dataNotices } from "@/content/notices";
import {
  ePrescription,
  medicalStore,
  prescriptionUrl,
  prevention,
  usefulInfo,
} from "@/content/arsmedica";

export const Route = createFileRoute("/informacje")({
  head: () => ({
    meta: [
      { title: "Informacje dla pacjentów — ARSMEDICA Kalisz" },
      {
        name: "description",
        content:
          "Profilaktyka, opieka koordynowana, sklep medyczny, e-recepta oraz opieka nocna i świąteczna — informacje dla pacjentów ARSMEDICA w Kaliszu.",
      },
      { property: "og:title", content: "Informacje dla pacjentów — ARSMEDICA" },
      {
        property: "og:description",
        content: "Profilaktyka, opieka koordynowana, sklep medyczny i e-recepta.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/informacje" },
    ],
    links: [{ rel: "canonical", href: "/informacje" }],
  }),
  component: InfoPage,
});

function InfoPage() {
  return (
    <div>
      <PageHeader kicker="Dla pacjenta" title="Informacje" />

      <section
        id="dokumenty"
        className="container-page patient-section"
        aria-labelledby="dokumenty-title"
      >
        <h2 id="dokumenty-title">Dokumenty i sprawy pacjenta</h2>
        <div className="patient-links">
          <a href="https://e-arsmedica.pl/prawa-i-obowiazki-pacjenta">
            Prawa i obowiązki pacjenta — strona przychodni
          </a>
          <a href="https://e-arsmedica.pl/rodo">Ochrona danych (RODO) — strona przychodni</a>
        </div>
        <Confirmation>
          aktualność dokumentów, procedura skarg, regulamin organizacyjny i pełne zasady
          udostępniania dokumentacji. W źródłach brakuje tych informacji.
        </Confirmation>
      </section>

      <section className="container-page mt-20" aria-labelledby="profilaktyka">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <Reveal>
            <p className="kicker">{prevention.kicker}</p>
            <h2 id="profilaktyka" className="mt-4 text-4xl leading-[1.08] md:text-5xl">
              {prevention.title}
            </h2>
          </Reveal>
          <div>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed">{prevention.intro}</p>
              <ul className="mt-6 space-y-3">
                {prevention.programs.map((p) => (
                  <li
                    key={p}
                    className="rounded-xl border border-border bg-surface px-6 py-4 font-medium"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="mt-8 space-y-4">
              {prevention.body.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-8 border-l-2 border-primary pl-6 font-serif text-2xl leading-snug">
                {prevention.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page mt-24" aria-labelledby="sklep">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          <Reveal className="bg-accent p-10 md:p-14">
            <p className="kicker">Placówka</p>
            <h2 id="sklep" className="mt-4 text-3xl md:text-4xl">
              {medicalStore.title}
            </h2>
            <div className="mt-6 space-y-4">
              {medicalStore.lines.map((l) => (
                <p key={l} className="leading-relaxed">
                  {l}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="bg-surface p-6 md:p-14">
            <div id="e-recepta">
              <p className="kicker">E-recepta</p>
              <h2 className="mt-4 text-3xl md:text-4xl">{ePrescription.title}</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                E-recepta jest przeznaczona dla pacjentów przyjmujących leki na choroby przewlekłe.
                Dotychczasowa strona przychodni udostępnia zamawianie recept.
              </p>
              <p className="mt-4 leading-relaxed">
                To podgląd — nie przyjmuje zamówień recept ani danych pacjenta.
              </p>
              <a
                href={prescriptionUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-primary px-6 font-medium text-primary-foreground"
              >
                Otwórz stronę przychodni
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page mt-24" aria-labelledby="warto-wiedziec">
        <Reveal>
          <h2 id="warto-wiedziec" className="text-4xl md:text-5xl">
            Warto wiedzieć
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {usefulInfo.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 0.07}
              className="flex flex-col rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="font-serif text-2xl leading-snug">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <div className="mt-auto pt-6 font-medium">
                <Phone className="size-4 text-primary" aria-hidden />
                {item.phone.split(";").map((phone) => (
                  <a
                    key={phone}
                    className="text-link"
                    href={`tel:+48${phone.replace(/[^0-9]/g, "")}`}
                  >
                    {phone.trim()}
                  </a>
                ))}
                {item.title.includes("TPK") && (
                  <Confirmation>aktualność usługi i numeru z archiwalnej strony.</Confirmation>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section
        id="komunikaty"
        className="container-page patient-section"
        aria-labelledby="komunikaty-title"
      >
        <h2 id="komunikaty-title">Komunikaty o ochronie danych</h2>
        <p className="section-lead">
          Treść komunikatów opublikowanych na stronie przychodni, zachowana bez zmian. Rozwiń
          wybrany komunikat.
        </p>
        {dataNotices.map((notice) => (
          <details className="data-notice" key={notice.title}>
            <summary>{notice.title}</summary>
            <div className="notice-copy">
              {notice.body.replace(/^#{1,6}\s+/gm, "").replace(/\n(?:[ \t]*\n)+/g, "\n\n")}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}
