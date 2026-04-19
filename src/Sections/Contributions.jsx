import SectionTitle from "../Components/SectionTitle";
import TechTag from "../Components/TechTag";
import nwgDock from "../assets/nwg-dock-hyprland.png";
import nwgDrawer from "../assets/nwg-drawer.png";

const contributions = [
  {
    repo: "nwg-dock-hyprland",
    image: nwgDock,
    description: "GTK3-based dock for Hyprland",
    stack: ["Go", "CSS"],
    website: "https://nwg-piotr.github.io/nwg-shell/",
    source: "https://github.com/nwg-piotr/nwg-dock-hyprland",
  },
  {
    repo: "nwg-drawer",
    image: nwgDrawer,
    description: "Application drawer for wlroots-based Wayland compositors",
    stack: ["Go", "CSS"],
    website: "https://nwg-piotr.github.io/nwg-shell/",
    source: "https://github.com/nwg-piotr/nwg-drawer",
  },
];

export default function Contributions() {
  return (
    <section className="py-24 bg-palette-primary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>Open Source</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contributions.map((contrib) => (
            <div
              key={contrib.repo}
              className="rounded-xl border border-palette-border bg-palette-background flex flex-col hover:border-palette-muted transition-colors overflow-hidden"
            >
              {contrib.image && (
                <div className="w-full overflow-hidden border-b border-palette-border">
                  <img
                    src={contrib.image}
                    alt={contrib.repo}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-palette-text font-semibold font-mono text-sm">
                    {contrib.repo}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={contrib.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Source code"
                      className="text-palette-secondary hover:text-palette-text transition-colors"
                    >
                      <i className="fa-brands fa-github text-base" />
                    </a>
                    <a
                      href={contrib.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website"
                      className="text-palette-secondary hover:text-palette-text transition-colors"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                    </a>
                  </div>
                </div>

                <p className="text-palette-secondary text-sm leading-relaxed mb-4 flex-1">
                  {contrib.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {contrib.stack.map((tech) => (
                    <TechTag key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
