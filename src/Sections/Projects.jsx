import SectionTitle from "../Components/SectionTitle";
import TechTag from "../Components/TechTag";
import labourLog from "../assets/labourlog.png";
import eggsterantWebsite from "../assets/eggsterant-website.png";
import uniConnect from "../assets/uni-connect.png";
import eggsterantV3 from "../assets/eggsterant-v3.png";
import tradingIndicator from "../assets/trading-indicator.png";
import archLinux from "../assets/arch-linux-dotfiles.png";
import livepaper from "../assets/livepaper.png";

const projects = [
  {
    title: "LabourLog",
    dates: "Mar 2026 — Present",
    image: labourLog,
    description:
      "Multi-tenant SaaS for Australian metal fabrication workshops. QR code job tracking, a live manager dashboard, and a React Native mobile app on the App Store and Google Play.",
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
    ],
    link: "https://www.labourlog.com.au",
  },
  {
    title: "Livepaper",
    dates: "Apr 2026 — Present",
    image: livepaper,
    description:
      "A desktop app for managing animated wallpapers on Wayland compositors. Browse and download wallpapers from online sources or a local Wallpaper Engine library, applied via mpvpaper. Supports shuffle, continuous playback, and auto-start on any Wayland compositor with startup script support.",
    stack: ["C#"],
    source: "https://github.com/sunwoo101/livepaper",
  },
  {
    title: "Eggsterant Full-Stack Website",
    dates: "May 2025 — Aug 2025",
    image: eggsterantWebsite,
    description:
      "Full-stack website with a landing page, authentication and user dashboard with payments, download, gift key redemption and hardware ID reset system.",
    stack: ["C#", "JavaScript", "ASP.NET Core", "EF Core", "React", "Tailwind", "PostgreSQL"],
    link: "https://www.eggsterant.net/",
  },
  {
    title: "Uni Connect",
    dates: "Mar 2025 — May 2025",
    image: uniConnect,
    description:
      "An open-source, fully functional forum for students with a clean, user-friendly interface. Users can post text, images, videos, and events, as well as like, save posts, and edit their profiles.",
    stack: ["ASP.NET Core", "C#", "JavaScript", "Tailwind", "HTML"],
    source: "https://github.com/sunwoo101/Uni-Connect",
  },
  {
    title: "Eggsterant V3",
    dates: "Aug 2024 — Sep 2024",
    image: eggsterantV3,
    description:
      "A real-time input enhancement tool that automatically clicks characters detected by a color-outline recognition algorithm, used by over 1,000 customers.",
    stack: ["C#", "WinForms"],
    link: "https://www.eggsterant.net/",
  },
  {
    title: "Trading Indicator",
    dates: "Jul 2024 — Sep 2024",
    image: tradingIndicator,
    description:
      "An open-source TradingView indicator with over 80,000 views that identifies Smart Money Concept (SMC) levels and sends real-time webhook alerts when key price levels are reached.",
    stack: ["Pine Script"],
    link: "https://www.tradingview.com/script/gqiG3j3a-SMC-Indicator-With-Webhook/",
  },
  {
    title: "Arch Linux Dotfiles",
    dates: "Jul 2025",
    image: archLinux,
    description: "Configuration files for a custom Arch Linux setup running Hyprland as the Wayland compositor.",
    stack: ["Linux", "CSS", "Bash"],
    source: "https://github.com/sunwoo101/dotfiles",
  },
  {
    title: "Eggsterant Pro",
    dates: "Mar 2024 — Apr 2024",
    description:
      "A real-time mouse-positioning tool that moves the cursor to characters detected by a color-outline recognition algorithm, used commercially by over 1,000 customers.",
    stack: ["C#", "WinForms"],
    link: "https://www.eggsterant.net/",
  },
  {
    title: "SSH Client",
    dates: "Oct 2020 — Sep 2021",
    description: "A GUI tool for managing and connecting to VPS servers with one click, storing credentials so there's no need to type a username and password each time. Supports file transfer via SFTP.",
    stack: ["Python"],
    source: "https://github.com/sunwoo101/SSH-Client-V2",
  },
  {
    title: "FX Journal",
    dates: "Oct 2023",
    description: "A WinForms desktop app for logging and reviewing forex trades.",
    stack: ["C#", "WinForms"],
    source: "https://github.com/sunwoo101/FxJournal",
  },
  {
    title: "Simple RPG",
    dates: "Jul 2024 — Aug 2024",
    description: "A 3D RPG game built in Unity with monster encounters and a boss fight.",
    stack: ["C#", "Unity"],
    source: "https://github.com/sunwoo101/3D-Simple-RPG",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border border-palette-border bg-palette-primary flex flex-col hover:border-palette-muted transition-colors overflow-hidden">
      {project.image && (
        <div className="w-full h-48 overflow-hidden bg-palette-background border-b border-palette-border">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-palette-text font-semibold leading-snug">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 shrink-0 mt-0.5">
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source code"
                className="text-palette-secondary hover:text-palette-text transition-colors"
              >
                <i className="fa-brands fa-github text-base" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View project"
                className="text-palette-secondary hover:text-palette-text transition-colors"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
              </a>
            )}
          </div>
        </div>

        <p className="text-palette-secondary text-xs mb-3">{project.dates}</p>

        {project.description && (
          <p className="text-palette-secondary text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.stack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-palette-primary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
