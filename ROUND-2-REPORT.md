# ARSMEDICA Next — runda 2, sekcja B (14.10.2026)

- Dodano na górze wspólnego nagłówka link „← Wszystkie wersje Arsmedica” do `https://dmac2112.github.io/medica/`. Obejmuje wszystkie sześć tras: `/`, `/poz`, `/specjalisci`, `/cennik-uslug`, `/informacje`, `/kontakt`, w tym sekcje dostępne przez kotwice. Wszystkie korzystają z tego samego nagłówka; link jest też widoczny przy błędzie 404 obsługiwanym wewnątrz układu.
- Link ma spokojny wygląd, wysokość co najmniej 44 px, natywną obsługę klawiatury i istniejący widoczny fokus. Pozostaje w normalnym przepływie strony, więc nie zasłania treści.
- Nowe fakty oznaczone „do potwierdzenia”: **brak**. Sekcja B dotyczy wyłącznie nawigacji; dotychczasowe informacje i oznaczenia pozostawiono bez zmian.
- Weryfikacja: `npm run build` zakończone kodem 0; `git diff --check` bez błędów. Build nadal zgłasza ostrzeżenia dotyczące `vite-tsconfig-paths` i paczki JS powyżej 500 kB.
- Pozostało: wizualna kontrola wszystkich tras na telefonie 390 px (widoczność telefonu bez przewijania), brak przewijania poziomego przy 360 px i kontrola fokusu w przeglądarce. Sandbox blokuje uruchomienie lokalnego serwera (`listen EPERM 127.0.0.1:5173`), więc tych pomiarów nie wykonano.

Bez commita, pushowania i wdrożenia. Istniejący nieśledzony `package-lock.json` pozostawiono bez edycji.
