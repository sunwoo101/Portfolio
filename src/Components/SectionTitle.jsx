export default function SectionTitle({ children }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-palette-text mb-3">{children}</h2>
      <div className="w-10 h-0.5 bg-palette-accent" />
    </div>
  );
}
