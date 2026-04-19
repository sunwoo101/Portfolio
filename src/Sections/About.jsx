import SectionTitle from "../Components/SectionTitle";

const row1 = [
  { name: "C#",          icon: "devicon-csharp-plain" },
  { name: "JavaScript",  icon: "devicon-javascript-plain" },
  { name: "Python",      icon: "devicon-python-plain" },
  { name: "React",       icon: "devicon-react-original" },
  { name: "Tailwind",    icon: "devicon-tailwindcss-plain" },
  { name: "CSS",         icon: "devicon-css3-plain" },
  { name: "HTML",        icon: "devicon-html5-plain" },
];

const row2 = [
  { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain" },
  { name: "EF Core",      icon: "devicon-dotnetcore-plain" },
  { name: "PostgreSQL",   icon: "devicon-postgresql-plain" },
  { name: "Linux",        icon: "devicon-linux-plain" },
  { name: "NeoVim",       icon: "devicon-neovim-plain" },
  { name: "WinForms",     icon: "devicon-dotnetcore-plain" },
  { name: "Pine Script",  icon: null },
];

function SkillCard({ name, icon }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-palette-border bg-palette-background hover:border-palette-accent group transition-colors cursor-default shrink-0">
      {icon ? (
        <i className={`${icon} text-xl text-palette-secondary group-hover:text-palette-accent transition-colors`} />
      ) : (
        <i className="fa-solid fa-code text-sm text-palette-secondary group-hover:text-palette-accent transition-colors" />
      )}
      <span className="text-palette-secondary group-hover:text-palette-accent text-sm font-medium whitespace-nowrap transition-colors">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ skills, reverse = false }) {
  return (
    <div className="overflow-hidden marquee-fade">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-right" : "animate-marquee-left"} hover:[animation-play-state:paused]`}
      >
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="flex gap-3 pr-3">
            {skills.map((skill, i) => (
              <SkillCard key={i} {...skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-palette-primary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>About</SectionTitle>

        <div className="mb-14 max-w-2xl">
          <p className="text-palette-secondary text-lg leading-relaxed">
            I am a software engineer in Sydney, Australia. I specialise in{" "}
            <span className="text-palette-text font-medium">.NET</span> and{" "}
            <span className="text-palette-text font-medium">React</span>, and
            enjoy developing side projects for fun and learning.
          </p>
          <p className="text-palette-secondary text-lg leading-relaxed mt-4">
            Currently studying a{" "}
            <span className="text-palette-text font-medium">
              Bachelor of Information Technology
            </span>{" "}
            at UTS while building{" "}
            <span className="text-palette-text font-medium">LabourLog</span>.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <MarqueeRow skills={row1} />
          <MarqueeRow skills={row2} reverse />
        </div>
      </div>
    </section>
  );
}
