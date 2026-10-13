import { Link } from "@tanstack/react-router";
import { mainRegistration, pozDoctors, practice } from "@/content/arsmedica";

export function Confirmation({ children }: { children: React.ReactNode }) {
  return (
    <p className="confirmation">
      <strong>Do potwierdzenia:</strong> {children}
    </p>
  );
}

export function OpeningHours() {
  return (
    <div className="hours-layout">
      <dl className="opening-hours">
        <div>
          <dt>Rejestracja POZ</dt>
          <dd>
            <a href={`tel:${practice.phoneHref}`}>{practice.phone}</a>
            <span className="hours-note">Godziny rejestracji do potwierdzenia.</span>
          </dd>
        </div>
        <div>
          <dt>Poradnia POZ</dt>
          <dd>
            pn–pt <strong>8:00–18:00</strong>
          </dd>
        </div>
        <div>
          <dt>Gabinet zabiegowy</dt>
          <dd>
            pn–pt <strong>8:00–18:00</strong>
          </dd>
        </div>
        <div>
          <dt>Pobieranie krwi</dt>
          <dd>
            pn–pt <strong>7:30–11:00</strong>
          </dd>
        </div>
        <div>
          <dt>Odbiór wyników</dt>
          <dd>
            następnego dnia <strong>od 14:00</strong>
          </dd>
        </div>
        <div>
          <dt>Rejestracja centralna — wybrani specjaliści</dt>
          <dd>
            pn–pt <strong>8:00–16:00</strong>
            <a href={`tel:${mainRegistration.phoneHref}`}>{mainRegistration.phone}</a>
            <span className="hours-note">{mainRegistration.scope}</span>
          </dd>
        </div>
      </dl>
      <div className="support-panel">
        <h3>Przed wizytą</h3>
        <p>POZ działa w ramach umowy z NFZ. Wizytę umów telefonicznie.</p>
        <Confirmation>
          godziny POZ i gabinetu zabiegowego. Oferta POZ podaje 8:00–18:00, a stopka źródłowej
          strony 7:30–18:00. Godziny w święta oraz dni odbioru wyników wymagają potwierdzenia.
        </Confirmation>
        <p>
          Po godzinach pracy i w święta: Wojewódzki Szpital Zespolony, ul. Poznańska 79 w Kaliszu
          (budynek Pogotowia).
        </p>
        <a className="text-link" href="tel:+48627651654">
          62 765 16 54
        </a>
        <h3>Teleplatforma Pierwszego Kontaktu (TPK)</h3>
        <p>
          Według strony przychodni: pn–pt 18:00–8:00, w weekendy, święta i inne dni ustawowo wolne
          od pracy całodobowo. Numer bezpłatny.
        </p>
        <a className="text-link" href="tel:+48800137200">
          800 137 200
        </a>
        <Confirmation>aktualność usługi TPK i numeru z archiwalnej strony.</Confirmation>
      </div>
    </div>
  );
}

export function DoctorsSchedule() {
  return (
    <>
      <p className="section-lead">
        Lekarze rodzinni i pediatra. Rozwiń nazwisko, aby zobaczyć cały tydzień.
      </p>
      <div className="doctor-schedules">
        {pozDoctors.map((doctor) => (
          <details key={doctor.name} className="doctor-schedule">
            <summary>
              <span>
                <span className="doctor-name">{doctor.name}</span>
                <span className="doctor-role">{doctor.specialties.join(", ")}</span>
              </span>
            </summary>
            <dl>
              {doctor.hours.map(([day, hours]) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
            {doctor.hours.some(([, hours]) => hours?.includes("zamiennie")) && (
              <Confirmation>
                piątkowy rozkład i znaczenie dni parzystych oraz nieparzystych. Zapis pochodzi z
                oferty POZ.
              </Confirmation>
            )}
          </details>
        ))}
      </div>
      <div className="staff-support">
        <div>
          <h3>Pielęgniarki i położna</h3>
          <Confirmation>
            nazwiska i godziny pracy. Źródła nie podają osobnego harmonogramu. Zapytaj w
            rejestracji:{" "}
            <a
              className="inline-flex min-h-12 items-center text-primary underline"
              href={`tel:${practice.phoneHref}`}
            >
              {practice.phone}
            </a>
            .
          </Confirmation>
        </div>
        <div>
          <h3>Prywatni specjaliści</h3>
          <p>Terminy przyjęć i osobne numery rejestracji znajdziesz na liście specjalistów.</p>
          <Link className="text-link" to="/specjalisci">
            Sprawdź godziny specjalistów
          </Link>
        </div>
      </div>
    </>
  );
}

export function LaboratoryInfo() {
  return (
    <div className="service-layout">
      <div>
        <p className="service-time">
          Pobieranie krwi <strong>7:30–11:00</strong>
          <span>Od poniedziałku do piątku</span>
        </p>
        <p className="section-lead">
          Punkt pobrań w przychodni, ul. Babina 3. Można też wykonać badania płatne.
        </p>
        <h3>Wyniki badań</h3>
        <p>Odbiór wyników następnego dnia od godz. 14:00.</p>
        <Confirmation>
          dni i sposób odbioru wyników, w tym dostęp przez internet. Źródło nie podaje tych zasad.
        </Confirmation>
        <h3>Sprzęt diagnostyczny w przychodni</h3>
        <p>
          Opis zrealizowanego projektu grantowego wymienia spirometr, aparat EKG, rejestratory
          Holter EKG i Holter ciśnieniowy, aparat ultrasonograficzny oraz mobilne aparaty USG i
          urządzenia do szybkiej diagnostyki laboratoryjnej.
        </p>
        <Confirmation>
          dostępność konkretnych badań, skierowanie, finansowanie i terminy. Opis wyposażenia nie
          podaje zasad zapisów.
        </Confirmation>
      </div>
      <div className="support-panel">
        <h3>Jak przygotować się do badania?</h3>
        <p>
          Przed pobraniem zapytaj o przygotowanie do konkretnego badania, w tym o pozostanie na
          czczo.
        </p>
        <Confirmation>
          lista badań, wymagane skierowanie, zakres finansowania przez NFZ, ceny i zasady
          przygotowania. Źródło potwierdza możliwość badań płatnych, bez szczegółów.
        </Confirmation>
        <a className="text-link" href={`tel:${practice.phoneHref}`}>
          Zapytaj: {practice.phone}
        </a>
      </div>
    </div>
  );
}

export function VaccinationInfo() {
  return (
    <div className="service-layout">
      <div>
        <p className="section-lead">W ofercie POZ wymieniono szczepienia zalecane:</p>
        <ul className="vaccine-list">
          <li>
            <strong>WZW</strong>
            <span>Euvax — w źródle podano 3 dawki.</span>
          </li>
          <li>
            <strong>Pneumokoki</strong>
            <span>Prevenar</span>
          </li>
          <li>
            <strong>Rotawirusy</strong>
            <span>Rotarix</span>
          </li>
          <li>
            <strong>Szczepienie skojarzone</strong>
            <span>Infanrix IPV+Hib</span>
          </li>
        </ul>
        <Confirmation>
          aktualna dostępność preparatów, zakres szczepienia skojarzonego, liczba dawek i grupy
          wiekowe. Opis preparatu w źródle wymaga sprawdzenia przez punkt szczepień.
        </Confirmation>
      </div>
      <div className="support-panel">
        <h3>Dla kogo i jak się zapisać?</h3>
        <p>
          Zapytaj rejestrację o termin i kontakt z punktem szczepień. Szczegóły kalendarza uzyskasz
          w punkcie szczepień.
        </p>
        <a className="text-link" href={`tel:${practice.phoneHref}`}>
          Zadzwoń: {practice.phone}
        </a>
        <Confirmation>
          kalendarz szczepień. Treść źródła wskazuje rok 2026, a tytuł strony rok 2025. Pełnego
          kalendarza, zasad kwalifikacji i zapisów nie opublikowano.
        </Confirmation>
        <h3>Szczepienia przeciw krztuścowi</h3>
        <p>
          Strona przychodni informuje także o szczepieniach przeciw krztuścowi. O szczepienia dla
          dzieci i dorosłych zapytaj w punkcie szczepień.
        </p>
        <p>
          Według strony przychodni dorosłym zaleca się dawkę przypominającą co 10 lat dla utrzymania
          odporności.
        </p>
      </div>
    </div>
  );
}
