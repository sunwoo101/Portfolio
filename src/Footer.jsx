export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-palette-border bg-palette-primary py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-palette-secondary text-sm">
          &copy; {year} Sun Woo Kim
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sunwoo101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-palette-secondary hover:text-palette-text transition-colors text-sm"
          >
            <i className="fa-brands fa-github text-base" />
          </a>
          <a
            href="https://linkedin.com/in/sunwoo101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-palette-secondary hover:text-palette-text transition-colors text-sm"
          >
            <i className="fa-brands fa-linkedin text-base" />
          </a>
          <a
            href="mailto:sun.kim101@outlook.com"
            aria-label="Email"
            className="text-palette-secondary hover:text-palette-text transition-colors text-sm"
          >
            <i className="fa-solid fa-envelope text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}
