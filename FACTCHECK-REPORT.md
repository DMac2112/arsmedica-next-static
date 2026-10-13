# Next-static — korekta faktów, 13.10.2026

## Zmieniono

- Ograniczono numer 500 308 305 i godziny pn–pt 8:00–16:00 do rejestracji centralnej: ortopeda, neurolog, kardiolog, medycyna pracy i transportu, pulmonolog. Poprawiono stronę specjalistów, kontakt i wspólny blok godzin; pozostali specjaliści mają osobne kontakty, bez dopisywania godzin rejestracji.
- E-recepta: pokazano warunki dla pacjentów przyjmujących wcześniej przepisane leki na choroby przewlekłe, wymagane dane (imię i nazwisko, PESEL, telefon, termin odbioru), prośbę o e-mail, szczegóły leków i wybór 1–5 opakowań, deklarację nieprzebywania w szpitalu/sanatorium/rehabilitacji dziennej/zakładzie opiekuńczo-leczniczym oraz wymaganą zgodę na przetwarzanie danych. Zachowano link https://e-arsmedica.pl/zamow-recepte. Nie zbudowano formularza ani nie dodano godzin usługi.
- Zachowano pełne dane pomocy po godzinach na stronie informacji; dodano je też do bloku godzin: szpital przy ul. Poznańskiej 79, tel. 62 765 16 54; TPK 800 137 200, pn–pt 18:00–8:00, weekendy, święta i inne dni ustawowo wolne całodobowo.
- Dodano opublikowany przez przychodnię odstęp 10 lat dla przypominającej dawki przeciw krztuścowi u dorosłych oraz wyposażenie z projektu grantowego: spirometr, EKG, Holter EKG i ciśnieniowy, aparat USG i mobilne USG, szybka diagnostyka laboratoryjna. Opisu zakupionego sprzętu nie przedstawiono jako gwarancji dostępności badania.
- Zachowano układ, CSS, zdjęcia i design. Cennik nadal podaje zwykłe EKG za 50 zł zgodnie ze stroną źródłową, z nową adnotacją o sprzecznym opisie w audycie.

## „Do potwierdzenia”

- Nowe: rodzaj badania przy pozycji EKG 50 zł (cennik: zwykłe EKG; audyt: Holter EKG) oraz dostępność, skierowania, finansowanie i terminy badań opisanych przez wyposażenie.
- Zachowane konflikty źródeł: początek pracy POZ/gabinetu zabiegowego 8:00 vs 7:30; chirurg naczyniowy poniedziałek/czwartek vs poniedziałek/piątek; dietetyk Wiktoria Szczęsna vs Julia Dobosz; rejestracja masażu 880 683 065 vs 500 308 305; kalendarz szczepień 2026 vs tytuł 2025.
- Zachowane wcześniejsze adnotacje o nieopublikowanych lub niepotwierdzonych szczegółach godzin, laboratorium, szczepień, dokumentów i dostępności. Aktualność TPK i jego numeru oznaczono również w bloku godzin.

## Weryfikacja i niewykonane

- PASS: `npm run build`, TypeScript (`tsc --noEmit`), `npm run lint`, `git diff --check` oraz render sześciu tras. Sprawdzono obecność poprawionych faktów, linków telefonicznych i formularza przychodni, `noindex, nofollow` oraz brak formularzy zbierających dane.
- Build ma nieblokujące ostrzeżenia o istniejącym pluginie ścieżek i paczce JS ponad 500 kB.
- Nie wykonano wizualnego pomiaru 360/390 px ani sprawdzenia dostępności zewnętrznego formularza przez HTTP. Korekty oparto na dostarczonym zapisie strony; sprzeczne fakty i aktualność TPK wymagają potwierdzenia przez przychodnię.
- Bez commita, pushowania i wdrożenia. Istniejący nieśledzony `package-lock.json` pozostawiono bez zmian.
