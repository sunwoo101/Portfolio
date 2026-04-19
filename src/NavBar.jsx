import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-md border-b border-palette-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-palette-text font-semibold tracking-tight hover:text-palette-accent transition-colors"
        >
          Sun Woo Kim
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-palette-secondary hover:text-palette-text transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-palette-secondary hover:text-palette-text transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-lg`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-palette-primary border-t border-palette-border">
          <nav className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-palette-secondary hover:text-palette-text transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
