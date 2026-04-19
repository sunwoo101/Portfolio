import SectionTitle from "../Components/SectionTitle";
import TechTag from "../Components/TechTag";

const jobs = [
  {
    role: "Founder",
    company: "LabourLog",
    location: "Sydney, Australia",
    dates: "Mar 2026 — Present",
    bullets: [
      "Building a multi-tenant SaaS for Australian metal fabrication workshops from scratch.",
      "QR code job tracking — workers scan stickers on work sheets to log start/stop times, giving managers live shop floor visibility.",
      "Role-based access (owner, manager, employee) via ASP.NET Identity and JWT with custom claims.",
      "Live manager dashboard showing active workers, current jobs, and per-worker efficiency metrics across multiple workshops.",
      "Shipped a React Native app to the App Store and Google Play via Expo/EAS with OTA updates.",
      "Deployed on a production VPS: ASP.NET Core API, PostgreSQL in Docker, Nginx, and Cloudflare.",
    ],
    stack: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "PostgreSQL",
      "React",
      "React Native",
      "Expo",
      "Tailwind",
      "Docker",
      "Nginx",
      "Cloudflare",
    ],
    link: "https://www.labourlog.com.au",
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Eggsterant",
    location: "Sydney, Australia (Remote)",
    dates: "Jun 2022 — Mar 2026",
    bullets: [
      "Built a full-stack platform with React and ASP.NET Core serving 1,500+ users.",
      "Implemented secure auth, license management, and obfuscated executable distribution.",
      "Developed WinForms input tools used by 1,000+ customers.",
      "Managed CI/CD pipelines and deployments on a self-hosted VPS.",
    ],
    stack: [
      "C#",
      "Python",
      "JavaScript",
      "ASP.NET Core",
      "EF Core",
      "PostgreSQL",
      "WinForms",
      "React",
      "Tailwind",
    ],
    link: "https://www.eggsterant.net/",
  },
  {
    role: "IT Support Intern",
    company: "TIDE Solution",
    location: "Dubai, UAE",
    dates: "Sep 2024 — Dec 2024",
    bullets: [
      "Assisted 30+ staff with hardware and software issues.",
      "Automated workstation setup with a C# WinForms tool.",
      "Redesigned the company website with Wix and custom HTML.",
      "Maintained attendance systems and supported internal operations.",
    ],
    stack: ["C#", "WinForms", "HTML"],
    link: "https://www.tidesolution.com/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-palette-background">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>Experience</SectionTitle>

        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="rounded-xl border border-palette-border bg-palette-primary p-6 md:p-8 hover:border-palette-muted transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-palette-text mb-1">
                    {job.role}
                  </h3>
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-palette-accent hover:underline underline-offset-2 text-sm font-medium"
                    >
                      {job.company}{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                    </a>
                  ) : (
                    <span className="text-palette-accent text-sm font-medium">
                      {job.company}
                    </span>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <p className="text-palette-secondary text-sm">{job.dates}</p>
                  <p className="text-palette-secondary text-sm mt-0.5">
                    <i className="fa-solid fa-location-dot mr-1.5 text-xs" />
                    {job.location}
                  </p>
                </div>
              </div>

              <ul className="text-palette-secondary text-sm leading-relaxed mb-5 space-y-1.5">
                {job.bullets.map((point, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="text-palette-accent mt-1.5 shrink-0 text-[8px]">&#9646;</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
