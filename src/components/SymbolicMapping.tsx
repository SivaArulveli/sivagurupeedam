const SymbolicMapping = () => {
  const mappings = [
    {
      color: "bg-primary",
      label: "Octagon — 16 ft",
      sanskrit: "अष्ट दिक्पाल (Ashta Dikpala)",
      meaning: "Eight Guardians of Directions & Ashta Siddhis",
      guruRelation: "The Guru is accessible from all eight paths. No direction is excluded from grace. The octagon represents the manifest world's outer boundary.",
      additionalSymbol: "Also represents the 8 supernatural powers attained through sadhana"
    },
    {
      color: "bg-emerald",
      label: "Platform — 9 ft",
      sanskrit: "स्थूल शरीर (Sthula Sharira)",
      meaning: "Physical / Gross Body Level",
      guruRelation: "First contact: The Guru appears in physical form. The disciple sees, hears, and touches the master. Seva (service) begins here.",
      additionalSymbol: "9 = completion of the physical realm (3×3)"
    },
    {
      color: "bg-royal",
      label: "Tier — 6 ft",
      sanskrit: "सूक्ष्म शरीर (Sukshma Sharira)",
      meaning: "Subtle / Energy Body Level",
      guruRelation: "Teachings penetrate through mantra, prana, and dream. The Guru's voice resonates within. Inner visions begin.",
      additionalSymbol: "6 = the six chakras through which kundalini rises"
    },
    {
      color: "bg-purple",
      label: "Core — 2.5 ft",
      sanskrit: "कारण शरीर (Karana Sharira)",
      meaning: "Causal / Seed Body — The Garbagriha",
      guruRelation: "Ultimate union: No distinction between Guru and disciple remains. The seeker becomes the sought. Pure Jyoti alone exists.",
      additionalSymbol: "The bindu point where all multiplicity collapses into One"
    },
    {
      color: "bg-foreground/60",
      label: "Height — 21 ft",
      sanskrit: "अजपा गायत्री (Ajapa Gayatri)",
      meaning: "21,600 Natural Breaths / Day",
      guruRelation: "Each breath is a silent mantra. The 21ft height sanctifies every respiration as Guru-remembrance.",
      additionalSymbol: "The vertical axis connecting earth to heaven through the body"
    },
    {
      color: "bg-gold-DEFAULT",
      label: "Inner Gate — 3 ft",
      sanskrit: "सुषुम्ना नाडी (Sushumna Nadi)",
      meaning: "Central Channel of Spiritual Energy",
      guruRelation: "The narrow passage through which the awakened energy ascends. Only those with Guru's grace may pass.",
      additionalSymbol: "3 = the trinity of Ida, Pingala, and Sushumna"
    },
  ];

  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up lg:col-span-2" style={{ animationDelay: '200ms' }}>
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-4 tracking-wide">
        Symbolic Mapping — Guru-Disciple Journey
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Each measurement encodes the progressive dissolution of separation between seeker and source
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {mappings.map((item) => (
          <div key={item.label} className="flex gap-3 p-4 rounded-xl bg-secondary/20 border border-secondary/30 hover:border-primary/30 transition-all duration-300">
            <div className={`w-4 h-4 ${item.color} rounded-full mt-1 flex-shrink-0 animate-pulse-subtle`} />
            <div className="flex-1">
              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                <span className="font-semibold text-foreground">{item.label}</span>
              </div>
              <p className="text-xs text-primary font-medium mb-1">{item.sanskrit}</p>
              <p className="text-xs text-muted-foreground">{item.meaning}</p>
              <p className="text-xs text-foreground/70 italic mt-2 leading-relaxed">{item.guruRelation}</p>
              <p className="text-xs text-primary/60 mt-2">✦ {item.additionalSymbol}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SymbolicMapping;
