export default function TechTag({ label }) {
  return (
    <span className="px-2.5 py-1 text-xs font-medium rounded bg-palette-tag border border-palette-border text-palette-secondary hover:border-palette-accent hover:text-palette-accent transition-colors cursor-default">
      {label}
    </span>
  );
}
