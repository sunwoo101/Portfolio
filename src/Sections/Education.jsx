import SectionTitle from "../Components/SectionTitle";

const education = [
  {
    degree: "Bachelor of Information Technology",
    field: "Enterprise Software Development",
    institution: "University of Technology Sydney (UTS)",
    dates: "Jul 2025 — Dec 2027",
    note: "Expected",
  },
  {
    degree: "Diploma of Information Technology",
    institution: "UTS College",
    dates: "Mar 2025 — May 2025",
    note: "Withdrawn — Transfer to UTS",
  },
  {
    degree: "Certificate IV in Information Technology",
    field: "Gaming Development",
    institution: "TAFE NSW",
    dates: "Feb 2024 — Jun 2024",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-palette-background">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>Education</SectionTitle>

        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.degree + edu.institution}
              className="rounded-xl border border-palette-border bg-palette-primary p-6 flex flex-wrap items-start justify-between gap-4 hover:border-palette-muted transition-colors"
            >
              <div>
                <h3 className="text-palette-text font-semibold">
                  {edu.degree}
                </h3>
                {edu.field && (
                  <p className="text-palette-accent text-sm mt-0.5">
                    {edu.field}
                  </p>
                )}
                <p className="text-palette-secondary text-sm mt-1">
                  {edu.institution}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-palette-secondary text-sm">{edu.dates}</p>
                {edu.note && (
                  <p className="text-palette-secondary text-xs mt-1 italic">
                    {edu.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
