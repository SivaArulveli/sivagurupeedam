const SymbolicMapping = () => {
  const mappings = [
    {
      color: "bg-emerald",
      label: "9.0 ft Platform",
      sanskrit: "स्थूल (Sthula)",
      meaning: "Physical / Gross Level",
      guruRelation: "The Guru first appears in physical form"
    },
    {
      color: "bg-royal",
      label: "6.0 ft Tier",
      sanskrit: "सूक्ष्म (Sukshma)",
      meaning: "Subtle / Energy Level",
      guruRelation: "Teachings penetrate through mantra & prana"
    },
    {
      color: "bg-purple",
      label: "2.5 ft Core",
      sanskrit: "कारण (Karana)",
      meaning: "Causal / Seed Level",
      guruRelation: "Distinction between Guru and disciple dissolves"
    },
    {
      color: "bg-primary",
      label: "Octagon (16 ft)",
      sanskrit: "अष्ट दिक्पाल",
      meaning: "Eight Guardians / Directions",
      guruRelation: "Guru accessible from all paths"
    },
  ];

  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl">
      <h2 className="font-sacred text-xl md:text-2xl text-accent mb-4 border-b border-primary/20 pb-2 tracking-wide">
        Symbolic Mapping
      </h2>
      <div className="space-y-4">
        {mappings.map((item) => (
          <div key={item.label} className="flex gap-3">
            <div className={`w-3 h-3 ${item.color} rounded-full mt-1.5 flex-shrink-0`} />
            <div className="flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-semibold text-foreground text-sm">{item.label}</span>
                <span className="text-xs text-muted-foreground">— {item.sanskrit}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{item.meaning}</p>
              <p className="text-xs text-foreground/70 italic mt-1">{item.guruRelation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SymbolicMapping;
