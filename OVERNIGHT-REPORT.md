# ARSMEDICA — raport zmian, 13.10.2026

**Układ przestawiony. `npm run build` przechodzi. Bez commita, pushowania i wdrożenia.**

## Co zmieniono

- Stronę prowadzą: godziny → lekarze → laboratorium → szczepienia → informacje i kontakt. Pięć skrótów jest dostępnych bez otwierania menu mobilnego.
- Pierwszy blok pokazuje dzisiejszy rozkład POZ (czas Europe/Warsaw), klikalny telefon rejestracji i adres. Informacje o placówce oraz projekcie przeniesiono niżej.
- Zachowano przestronny układ, szeryfowe nagłówki i oryginalne zdjęcie rejestracji. Czerwień `#B3141F` pochodzi z istniejących wersji NFZ; zieleń jest pomocnicza. Fonty zastąpiono systemowymi zgodnie z briefem.
- Dodano lokalne informacje o laboratorium, rozkłady lekarzy i szczepieniach; poprawiono numer dietetyka na **791 755 792** ze źródła. Zachowano oba komunikaty o ochronie danych.
- Dodano `noindex, nofollow`, blokadę robotów, widoczny fokus, pomijanie nawigacji i obsługę ograniczonego ruchu. Usunięto automatycznie ładowaną mapę oraz odwołanie do raportowania Lovable. Podgląd nie zbiera danych pacjenta.

## Fakty oznaczone „do potwierdzenia”

1. **Godziny:** POZ i gabinet zabiegowy (8:00 vs 7:30), rejestracja POZ, święta, piątkowe dni parzyste/nieparzyste lekarzy, harmonogram pielęgniarek i położnej.
2. **Specjaliści:** nazwisko dietetyka (Wiktoria Szczęsna / Julia Dobosz), dni chirurga naczyniowego, telefon i godziny masażu oraz nieopublikowane godziny pozostałych specjalistów.
3. **Laboratorium:** lista badań, skierowania, finansowanie NFZ, ceny, przygotowanie na czczo oraz dni i sposób odbioru wyników.
4. **Szczepienia:** kalendarz 2026 / tytuł 2025, dostępność preparatów, grupy wiekowe, dawki, zakres preparatu skojarzonego, kwalifikacja i zapisy.
5. **Informacje:** aktualność cen, dokumentów i TPK; procedura skarg, regulamin, udostępnianie dokumentacji; wejście, parking i dostępność budynku.

## Weryfikacja i pozostałe ograniczenia

- PASS: `npm run build`, TypeScript, lint, `git diff --check`, render sześciu podstron, 80 linków wewnętrznych/kotwic i odwołania do zbudowanych zasobów.
- Sprawdzone pary kolorów spełniają kontrast AA. Suma SHA-256 zdjęcia zgadza się z `Arsmedica/hub/image-sources.json`.
- **Nie wykonano wizualnej kontroli 390/360 px ani kontroli konsoli działającej przeglądarki:** sandbox blokuje serwer (`EPERM`), a Playwright wymaga niedostępnej zgody. Braku poziomego przewijania i reguły 3 sekund nie potwierdzono pomiarem.
- Dostępności zewnętrznych stron nie sprawdzono przez HTTP. Linki do serwisu przychodni pochodzą ze źródeł audytu.
- Build zgłasza ostrzeżenia o istniejącym pluginie ścieżek i paczce JS powyżej 500 kB. Nie blokują budowania.

**Pozostaje potwierdzenie faktów przez placówkę i akceptacja właściciela przed wdrożeniem.** Istniejący nieśledzony `package-lock.json` pozostawiono bez zmian.
