import { RevealWords, Reveal } from "./Reveal";

export function PageHeader({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="border-b border-border bg-sand py-10 md:py-16">
      <div className="container-page">
        <h1 className="max-w-4xl text-4xl leading-[1.12] md:text-6xl">
          <RevealWords text={title} />
        </h1>
        {lead ? (
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
