const SevenVeils = () => {
  const veils = [
    { name: "Manas", meaning: "Mind Screen" },
    { name: "Buddhi", meaning: "Intellect Screen" },
    { name: "Chitta", meaning: "Memory Screen" },
    { name: "Ahankara", meaning: "Ego Screen" },
    { name: "Prana", meaning: "Vital Screen" },
    { name: "Jiva", meaning: "Soul Screen" },
    { name: "Maya", meaning: "Illusion Screen" },
  ];

  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up" style={{ animationDelay: '300ms' }}>
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-6 tracking-wide">
        Seven Screens (Veils)
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        In the Sathya Gnana Sabhai tradition, the seeker passes through seven veils to reach the Supreme Light.
      </p>
      <div className="grid grid-cols-1 gap-2">
        {veils.map((veil, index) => (
          <div 
            key={veil.name} 
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
          >
            <span className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
              {index + 1}
            </span>
            <span className="font-medium text-foreground">{veil.name}</span>
            <span className="text-xs text-muted-foreground">— {veil.meaning}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center p-4 bg-primary/15 rounded-xl border border-primary/20">
        <span className="font-sacred text-2xl text-primary">ஜோதி</span>
        <span className="text-sm text-foreground/80 ml-3">— Jyoti (Supreme Light)</span>
      </div>
    </section>
  );
};

export default SevenVeils;
