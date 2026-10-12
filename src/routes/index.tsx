import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import {
  categories,
  mainRegistration,
  medicalStore,
  pertussis,
  practice,
  prescriptionUrl,
  prevention,
  specialists,
  usefulInfo,
} from "@/content/arsmedica";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARSMEDICA Kalisz — Praktyka Lekarska, ul. Babina 3" },
      {
        name: "description",
        content:
          "ARSMEDICA w Kaliszu: podstawowa opieka zdrowotna w ramach NFZ pn–pt 8:00–18:00, prywatne gabinety specjalistyczne, profilaktyka, szczepienia i sklep medyczny.",
      },
      { property: "og:title", content: "ARSMEDICA Kalisz — Praktyka Lekarska" },
      {
        property: "og:description",
        content:
          "Poradnia POZ i prywatne gabinety specjalistyczne przy ul. Babina 3 w Kaliszu. Tel. 62 580 22 52.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-sand pt-32 md:pt-40">
      <div className="container-page grid items-end gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        <div>
          <motion.p
            className="kicker"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {practice.subtitle} · {practice.city}
          </motion.p>
          <h1 className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98]">
            <RevealWords text="ARSMEDICA" />
            <span className="mt-2 block text-[clamp(1.5rem,3.2vw,2.6rem)] leading-tight text-muted-foreground">
              <RevealWords text="Poradnia Podstawowej Opieki Zdrowotnej" />
            </span>
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Nasza przychodnia świadczy usługi w ramach umowy z NFZ od poniedziałku do piątku w
            godz. od 8.00 do 18.00.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            <a
              href={`tel:${practice.phoneHref}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" aria-hidden />
              {practice.phone}
            </a>
            <a
              href={prescriptionUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-surface px-7 font-medium transition-colors hover:bg-accent"
            >
              Zamów receptę
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </motion.div>

          <motion.dl
            className="mt-14 grid max-w-xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            {[
              { icon: Clock, label: "Przychodnia", value: practice.hours },
              { icon: MapPin, label: "Adres", value: `${practice.street}, ${practice.city}` },
              {
                icon: Phone,
                label: "Rejestracja specjaliści",
                value: mainRegistration.phone,
              },
            ].map((item) => (
              <div key={item.label} className="bg-surface p-5">
                <dt className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                  <item.icon className="size-3.5 text-primary" aria-hidden />
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-snug">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative"
          initial={reduced ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-muted">
            <motion.img
              src={heroImage}
              alt="Rejestracja przychodni ARSMEDICA CENTRUM z ladą i nazwą placówki na szklanej przegrodzie"
              width={800}
              height={449}
              style={{ y }}
              className="size-full scale-110 object-cover object-[70%_center]"
            />
          </div>
          <motion.div
            className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-surface/95 p-6 shadow-lift backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <p className="kicker">Sklep medyczny</p>
            <p className="mt-3 text-sm leading-relaxed">
              Czynny od poniedziałku do piątku, w godz. 8:00–16:00. Realizujemy wnioski NFZ.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      <Hero />

      <section className="container-page mt-32" aria-labelledby="zakres">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="kicker">Zakres opieki</p>
            <h2 id="zakres" className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-6xl">
              Opieka podstawowa i prywatne gabinety w jednym miejscu
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal
              key={c.title}
              as="li"
              delay={(i % 3) * 0.07}
              className="group bg-surface p-9 transition-colors hover:bg-accent/60"
            >
              <Link to={c.to} className="flex h-full flex-col">
                <span className="kicker">{c.meta}</span>
                <h3 className="mt-5 font-serif text-2xl leading-snug">{c.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-primary">
                  Zobacz więcej
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-page mt-32" aria-labelledby="specjalisci">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_1fr]">
          <div>
            <Reveal>
              <p className="kicker">Prywatne gabinety specjalistyczne</p>
              <h2 id="specjalisci" className="mt-4 text-4xl leading-[1.05] md:text-5xl">
                Specjaliści przyjmujący w ARSMEDICA
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Rejestracja do lekarzy przyjmujących w gabinetach specjalistycznych{" "}
                {mainRegistration.hours}.
              </p>
              <a
                href={`tel:${mainRegistration.phoneHref}`}
                className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-4" aria-hidden />
                {mainRegistration.phone}
              </a>
            </Reveal>
          </div>

          <div>
            <ul className="divide-y divide-border border-y border-border">
              {specialists.slice(0, 8).map((s, i) => (
                <Reveal
                  key={`${s.field}-${s.name}`}
                  as="li"
                  delay={i * 0.04}
                  className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-5 transition-colors hover:bg-sand/70"
                >
                  <div>
                    <p className="font-serif text-xl">{s.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {s.field}
                      {s.schedule ? ` · ${s.schedule}` : ""}
                    </p>
                  </div>
                  <span className="text-sm font-medium tabular-nums text-primary">
                    rej. {s.phone}
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <Link
                to="/specjalisci"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary"
              >
                Wszyscy specjaliści
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-32 border-y border-border bg-sand py-24" aria-labelledby="profilaktyka">
        <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <Reveal>
            <p className="kicker">{prevention.kicker}</p>
            <h2 id="profilaktyka" className="mt-4 text-4xl leading-[1.05] md:text-5xl">
              {prevention.title}
            </h2>
          </Reveal>
          <div>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed">{prevention.intro}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {prevention.programs.map((p) => (
                  <li
                    key={p}
                    className="rounded-xl border border-border bg-surface px-6 py-5 font-medium leading-snug"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="mt-8 space-y-4">
              {prevention.body.map((p, i) => (
                <Reveal key={i} delay={0.04 * i}>
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

      <section className="container-page mt-24" aria-labelledby="krztusiec">
        <Reveal className="rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-16 md:py-20">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] opacity-70">Ważna informacja</p>
          <h2 id="krztusiec" className="mt-5 max-w-3xl text-4xl leading-[1.06] md:text-5xl">
            {pertussis.title}
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed opacity-90">{pertussis.body}</p>
        </Reveal>
      </section>

      <section className="container-page mt-24" aria-labelledby="sklep">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-2">
          <Reveal className="bg-accent p-10 md:p-14">
            <p className="kicker">W naszej placówce</p>
            <h2 id="sklep" className="mt-4 text-3xl md:text-4xl">
              {medicalStore.title}
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed">
              {medicalStore.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </Reveal>
          <div className="grid bg-surface">
            {usefulInfo.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="border-b border-border/70 p-8 last:border-b-0 md:px-12"
              >
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <p className="mt-3 text-sm font-medium text-primary">{item.phone}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-32" aria-labelledby="kontakt">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">Kontakt</p>
            <h2 id="kontakt" className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              {practice.street}
              <br />
              {practice.city}
            </h2>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="kicker">Telefon</dt>
                <dd className="mt-2 text-lg">
                  <a className="hover:text-primary" href={`tel:${practice.phoneHref}`}>
                    {practice.phone}
                  </a>
                  {" · "}
                  <a className="hover:text-primary" href={`tel:${practice.mobileHref}`}>
                    {practice.mobile}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="kicker">Godziny pracy</dt>
                <dd className="mt-2 text-lg">{practice.hours}</dd>
              </div>
            </dl>
            <Link
              to="/kontakt"
              className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 font-medium transition-colors hover:bg-accent"
            >
              Dane kontaktowe i mapa
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-border bg-sand">
            <iframe
              title="Mapa — ARSMEDICA, ul. Babina 3, Kalisz"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.078%2C51.755%2C18.100%2C51.770&layer=mapnik&marker=51.7625%2C18.0885"
              className="h-[380px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
