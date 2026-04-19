import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-palette-background">
      <p className="text-palette-accent text-sm font-medium tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="text-5xl font-bold text-palette-text mb-4">
        Page not found
      </h1>
      <p className="text-palette-secondary mb-10 text-center max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-palette-accent text-white font-medium text-sm hover:opacity-90 transition-opacity"
      >
        <i className="fa-solid fa-arrow-left text-xs" />
        Back to Home
      </Link>
    </main>
  );
}
