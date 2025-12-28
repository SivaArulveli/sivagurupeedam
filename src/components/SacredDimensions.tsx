interface DimensionItemProps {
  label: string;
  value: string;
}

const DimensionItem = ({ label, value }: DimensionItemProps) => (
  <li className="flex justify-between border-b border-primary/10 pb-3 last:border-0">
    <span className="font-medium text-foreground/80">{label}</span>
    <span className="text-primary font-bold">{value}</span>
  </li>
);

const SacredDimensions = () => {
  const dimensions = [
    { label: "Total Height", value: "21.0 ft" },
    { label: "Base Width", value: "16.0 ft" },
    { label: "Sanctum Core", value: "2.5 ft × 2.5 ft" },
    { label: "Entrance Side", value: "6.63 ft" },
    { label: "Inner Gate", value: "3.0 ft × 5.0 ft" },
    { label: "Outer Platform", value: "9.0 ft × 9.0 ft" },
    { label: "Middle Tier", value: "6.0 ft × 6.0 ft" },
  ];

  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up">
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-6 tracking-wide">
        Sacred Dimensions
      </h2>
      <ul className="space-y-3">
        {dimensions.map((dim) => (
          <DimensionItem key={dim.label} label={dim.label} value={dim.value} />
        ))}
      </ul>
    </section>
  );
};

export default SacredDimensions;
