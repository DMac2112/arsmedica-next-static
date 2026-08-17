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
    <header className="border-b border-border bg-sand pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="container-page">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] md:text-7xl">
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
