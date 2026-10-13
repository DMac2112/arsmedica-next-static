import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { DoctorsSchedule, OpeningHours, VaccinationInfo } from "@/components/site/PatientSections";

export const Route = createFileRoute("/poz")({
  head: () => ({
    meta: [
      { title: "POZ i godziny lekarzy — ARSMEDICA Kalisz" },
      {
        name: "description",
        content:
          "Godziny przychodni, harmonogram lekarzy rodzinnych i pediatry oraz szczepienia zalecane w ARSMEDICA CENTRUM.",
      },
    ],
  }),
  component: PozPage,
});

function PozPage() {
  return (
    <div>
      <PageHeader
        kicker="Podstawowa opieka zdrowotna"
        title="Oferta POZ"
        lead="Opieka zdrowotna w ramach umowy z NFZ."
      />
      <section id="godziny" className="container-page patient-section">
        <h2>Godziny pracy</h2>
        <OpeningHours />
      </section>
      <section id="lekarze" className="container-page patient-section">
        <h2>Lekarze i godziny przyjęć</h2>
        <DoctorsSchedule />
      </section>
      <section id="szczepienia" className="container-page patient-section">
        <h2>Szczepienia zalecane</h2>
        <VaccinationInfo />
      </section>
    </div>
  );
}
