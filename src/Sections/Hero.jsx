export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full py-20">
        <p className="text-palette-accent text-sm font-medium tracking-widest uppercase mb-5">
          Full-Stack Software Engineer
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-palette-text leading-none mb-7 tracking-tight">
          Sun Woo Kim
        </h1>

        <p className="text-palette-secondary text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          Software engineer based in{" "}
          <span className="text-palette-text font-medium">Sydney, Australia</span>. I
          specialise in{" "}
          <span className="text-palette-text font-medium">.NET</span> and{" "}
          <span className="text-palette-text font-medium">React</span>, building
          full-stack applications and side projects.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-palette-accent text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View My Work
            <i className="fa-solid fa-arrow-right text-xs" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-palette-border text-palette-text font-medium text-sm hover:border-palette-accent hover:text-palette-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sunwoo101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-palette-secondary hover:text-palette-text transition-colors"
          >
            <i className="fa-brands fa-github text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/sunwoo101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-palette-secondary hover:text-palette-text transition-colors"
          >
            <i className="fa-brands fa-linkedin text-xl" />
          </a>
          <a
            href="mailto:sun.kim101@outlook.com"
            aria-label="Email"
            className="text-palette-secondary hover:text-palette-text transition-colors"
          >
            <i className="fa-solid fa-envelope text-xl" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-0 pb-12 flex items-center gap-3">
        <div className="flex-1 h-px bg-palette-border" />
        <a
          href="#about"
          aria-label="Scroll down"
          className="text-palette-muted hover:text-palette-secondary transition-colors animate-bounce"
        >
          <i className="fa-solid fa-chevron-down text-sm" />
        </a>
        <div className="flex-1 h-px bg-palette-border" />
      </div>
    </section>
  );
}
