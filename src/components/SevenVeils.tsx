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
    <section className="glass-panel p-6 md:p-8 rounded-2xl">
      <h2 className="font-sacred text-xl md:text-2xl text-accent mb-4 border-b border-primary/20 pb-2 tracking-wide">
        Seven Screens (Veils)
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        In the Sathya Gnana Sabhai tradition, the seeker passes through seven veils to reach the Supreme Light.
      </p>
      <div className="grid grid-cols-1 gap-2">
        {veils.map((veil, index) => (
          <div 
            key={veil.name} 
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <span className="font-medium text-foreground text-sm">{veil.name}</span>
            <span className="text-xs text-muted-foreground">— {veil.meaning}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center p-3 bg-primary/10 rounded-lg">
        <span className="font-sacred text-lg text-primary">ஜோதி</span>
        <span className="text-sm text-foreground ml-2">— Jyoti (Supreme Light)</span>
      </div>
    </section>
  );
};

export default SevenVeils;
