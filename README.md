# ARSMEDICA — strona przychodni (wersja statyczna)

Statyczna wersja witryny przychodni **„ARSMEDICA CENTRUM” Poradnia Podstawowej
Opieki Zdrowotnej** w Kaliszu (ul. Babina 3). Ten sam layout i te same treści co
w repozytorium `arsmedica-next`, ale **bez serwera** — zbudowana jako czysty SPA
(Vite + React), którą hostuje dowolny serwer plików statycznych, w tym GitHub Pages.

Cała treść pochodzi wyłącznie z serwisu **e-arsmedica.pl** — nie dodano żadnych
zmyślonych informacji.

## Czym różni się od `arsmedica-next`

| | `arsmedica-next` (główne) | `arsmedica-next-static` (to repo) |
| --- | --- | --- |
| Renderowanie | SSR (TanStack **Start** + Nitro) | Klient (SPA, TanStack **Router**) |
| Wynik builda | serwer (Cloudflare Worker) | statyczne `dist/` (HTML + JS + CSS) |
| Hosting | Cloudflare / Netlify / Vercel | dowolny statyczny host, **GitHub Pages** |
| Meta/tytuły stron | w HTML od serwera (najlepsze SEO) | ustawiane po stronie klienta po starcie JS |

Aplikacja, komponenty i `src/content/arsmedica.ts` są identyczne. Różni się tylko
warstwa uruchomieniowa: `index.html` + `src/main.tsx` montują router w przeglądarce,
a `vite.config.ts` buduje zwykłą paczkę statyczną (bez Nitro, bez prerenderu).

> Pozostałości po wersji SSR (`@tanstack/react-start`, `nitro`,
> `@lovable.dev/vite-tanstack-config`) są w `package.json`, ale nie trafiają do
> builda — Vite pakuje tylko kod używany przez `index.html`.

## Uruchomienie

```bash
bun install
bun run dev      # serwer deweloperski (Vite)
bun run build    # build statyczny → dist/
bun run preview  # podgląd builda
bun run lint     # ESLint
```

## Hosting na GitHub Pages

Repo zawiera workflow `.github/workflows/deploy.yml`, który przy każdym pushu na
`main` buduje `dist/`, dokłada `404.html` (fallback dla linków głębokich) oraz
`.nojekyll`, i publikuje na GitHub Pages.

Ścieżka bazowa (`base` w `vite.config.ts`) to `"/arsmedica-next-static/"` — pasuje
do adresu projektu `https://<użytkownik>.github.io/arsmedica-next-static/`. Router
czyta ją z `import.meta.env.BASE_URL`, więc przy hostingu pod własną domeną (w
katalogu głównym) wystarczy zmienić `base` na `"/"`.

## Strony

| Ścieżka          | Zawartość                                            |
| ---------------- | ---------------------------------------------------- |
| `/`              | Strona główna — zakres opieki, specjaliści, kontakt  |
| `/poz`           | Podstawowa opieka zdrowotna, lekarze, szczepienia    |
| `/specjalisci`   | Prywatne gabinety specjalistyczne                    |
| `/cennik-uslug`  | Cennik usług płatnych                                 |
| `/informacje`    | Profilaktyka, e-recepta, opieka nocna i świąteczna   |
| `/kontakt`       | Adres, telefony, mapa                                |

## Struktura

- `src/content/arsmedica.ts` — **jedyne źródło treści** (dane teleadresowe, lekarze,
  specjaliści, cennik, teksty). Edytuj tutaj, aby zmienić treść na całej stronie.
- `index.html` + `src/main.tsx` — punkt wejścia SPA (montuje router w przeglądarce)
- `src/routes/` — strony (routing plikowy TanStack Router)
- `src/components/site/` — `Header`, `Footer`, `PageHeader`, `Reveal` (animacje)
- `src/styles.css` — system designu (tokeny kolorów, typografia, utility)

## Uwaga o treści

Wszystkie dane pochodzą z e-arsmedica.pl (stan: sierpień 2026). Trzy pozycje na
stronie źródłowej są ze sobą sprzeczne (strona główna vs `/o-nas`) i przyjęto
wersję ze strony głównej — do potwierdzenia przez klienta: dietetyk (osoba i numer),
dzień przyjęć chirurga naczyniowego oraz numer do masażu.
