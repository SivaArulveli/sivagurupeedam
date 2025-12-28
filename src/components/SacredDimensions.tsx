interface DimensionItemProps {
  label: string;
  value: string;
  significance?: string;
  color?: string;
}

const DimensionItem = ({ label, value, significance, color = "text-primary" }: DimensionItemProps) => (
  <li className="border-b border-primary/10 pb-3 last:border-0">
    <div className="flex justify-between items-baseline">
      <span className="font-medium text-foreground/80">{label}</span>
      <span className={`${color} font-bold`}>{value}</span>
    </div>
    {significance && (
      <p className="text-xs text-muted-foreground mt-1 italic">{significance}</p>
    )}
  </li>
);

const SacredDimensions = () => {
  const dimensions = [
    { 
      label: "Total Height", 
      value: "21.0 ft", 
      significance: "21,600 breaths/day — Ajapa Gayatri",
      color: "text-foreground/80"
    },
    { 
      label: "Octagon Width", 
      value: "16.0 ft", 
      significance: "Ashta Dikpalas × 2 — Complete protection",
      color: "text-primary"
    },
    { 
      label: "Outer Platform", 
      value: "9.0 ft × 9.0 ft", 
      significance: "Sthula — Physical/Gross realm",
      color: "text-emerald"
    },
    { 
      label: "Middle Tier", 
      value: "6.0 ft × 6.0 ft", 
      significance: "Sukshma — Subtle/Energy realm",
      color: "text-royal"
    },
    { 
      label: "Sanctum Core", 
      value: "2.5 ft × 2.5 ft", 
      significance: "Karana — Causal/Garbagriha",
      color: "text-purple"
    },
    { 
      label: "Entrance Portal", 
      value: "6.63 ft × 5.0 ft", 
      significance: "Gateway aligned with octagon geometry",
      color: "text-primary"
    },
    { 
      label: "Inner Gate", 
      value: "3.0 ft × 5.0 ft", 
      significance: "Sushumna Nadi — Central channel",
      color: "text-gold-DEFAULT"
    },
  ];

  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up">
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-4 tracking-wide">
        Mandatory Architectural Constraints
      </h2>
      <p className="text-xs text-muted-foreground mb-5">
        Each dimension is precisely calculated according to Vastu Shastra and Siddha tradition
      </p>
      <ul className="space-y-3">
        {dimensions.map((dim) => (
          <DimensionItem 
            key={dim.label} 
            label={dim.label} 
            value={dim.value} 
            significance={dim.significance}
            color={dim.color}
          />
        ))}
      </ul>
    </section>
  );
};

export default SacredDimensions;
