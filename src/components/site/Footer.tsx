import { Link } from "@tanstack/react-router";
import { externalLinks, nav, practice, prescriptionUrl } from "@/content/arsmedica";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-sand">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3 lg:py-20">
        <div>
          <p className="font-serif text-3xl">{practice.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {practice.subtitle}
          </p>
          <address className="mt-6 not-italic text-sm leading-relaxed text-muted-foreground">
            {practice.legalName}
            <br />
            {practice.street}
            <br />
            {practice.city}
          </address>
        </div>

        <div>
          <p className="kicker">Kontakt</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a className="hover:text-primary" href={`tel:${practice.phoneHref}`}>
                Tel. {practice.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href={`tel:${practice.mobileHref}`}>
                Kom. {practice.mobile}
              </a>
            </li>
            <li className="text-muted-foreground">{practice.hours}</li>
            <li>
              <a
                className="hover:text-primary"
                href={prescriptionUrl}
                target="_blank"
                rel="noreferrer"
              >
                Zamów receptę
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="kicker">Serwis</p>
            <ul className="mt-5 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker">Dla pacjenta</p>
            <ul className="mt-5 space-y-2 text-sm">
              {externalLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-page py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} ARSMEDICA, {practice.street}, {practice.city}.
        </div>
      </div>
    </footer>
  );
}
