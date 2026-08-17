import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { nav, practice, prescriptionUrl } from "@/content/arsmedica";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between gap-6 transition-all duration-500",
            scrolled ? "h-16" : "h-20 md:h-24",
          )}
        >
          <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-serif text-2xl tracking-tight text-foreground">
              {practice.name}
            </span>
            <span className="hidden text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              {practice.subtitle}
            </span>
          </Link>

          <nav aria-label="Główna nawigacja" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${practice.phoneHref}`}
              className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary md:inline-flex"
            >
              <Phone className="size-3.5" aria-hidden />
              {practice.phone}
            </a>
            <a
              href={prescriptionUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Zamów receptę
            </a>
            <button
              type="button"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden"
          >
            <nav aria-label="Menu mobilne" className="container-page flex flex-col py-6">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-5 font-serif text-2xl"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`tel:${practice.phoneHref}`}
                  className="flex min-h-12 items-center justify-center rounded-full border border-border px-5 text-base font-medium"
                >
                  {practice.phone}
                </a>
                <a
                  href={prescriptionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-12 items-center justify-center rounded-full bg-primary px-5 text-base font-medium text-primary-foreground"
                >
                  Zamów receptę
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
