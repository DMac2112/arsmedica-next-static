import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { patientTasks, practice } from "@/content/arsmedica";

export function Header() {
  return (
    <header className="site-header">
      <div className="container-page">
        <a href="https://dmac2112.github.io/medica/" className="showcase-link">
          ← Wszystkie wersje Arsmedica
        </a>
      </div>
      <div className="container-page header-brand-row">
        <Link to="/" className="brand-link" aria-label="ARSMEDICA — strona główna">
          <span className="font-serif text-2xl text-primary">{practice.name}</span>
          <span className="brand-location">Centrum · Kalisz</span>
        </Link>
        <a href={`tel:${practice.phoneHref}`} className="header-call">
          <Phone size={20} aria-hidden="true" />
          <span>{practice.phone}</span>
        </a>
      </div>
      <nav className="container-page task-nav" aria-label="Najważniejsze sprawy pacjenta">
        {patientTasks.map((task) => (
          <Link key={task.hash} to="/" hash={task.hash}>
            {task.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
