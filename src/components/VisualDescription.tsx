const VisualDescription = () => {
  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up" style={{ animationDelay: '150ms' }}>
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-6 tracking-wide">
        Visual Interplay
      </h2>
      
      <div className="space-y-5">
        {/* Light */}
        <div className="relative overflow-hidden rounded-xl p-4 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent border border-primary/20">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-pulse-subtle" />
          <h3 className="font-sacred text-lg text-primary mb-2">Divine Light</h3>
          <p className="text-sm text-foreground/80 leading-relaxed relative z-10">
            Natural light enters through precisely angled apertures, creating shifting patterns 
            throughout the day. At solar noon, a single beam illuminates the Garbagriha, 
            symbolizing the Guru's grace piercing through ignorance.
          </p>
        </div>

        {/* Marble */}
        <div className="relative overflow-hidden rounded-xl p-4 bg-gradient-to-r from-marble/20 via-marble/5 to-transparent border border-marble/30">
          <h3 className="font-sacred text-lg text-foreground/90 mb-2">White Marble</h3>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Makrana marble floors and walls embody <em>Shuddha Sattva</em> (pure luminosity). 
            The cool white surface reflects light infinitely, creating an atmosphere of 
            otherworldly purity. Each step leaves no trace, symbolizing actionless action.
          </p>
        </div>

        {/* Gold */}
        <div className="relative overflow-hidden rounded-xl p-4 bg-gradient-to-r from-gold-DEFAULT/20 via-gold-DEFAULT/5 to-transparent border border-gold-DEFAULT/30">
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-gold-glow/40 rounded-full blur-xl animate-glow-pulse" />
          <h3 className="font-sacred text-lg text-gold-DEFAULT mb-2">Radiant Gold</h3>
          <p className="text-sm text-foreground/80 leading-relaxed relative z-10">
            Gold accents trace the sacred geometry—octagonal edges, square boundaries, 
            and the central bindu. The metal represents <em>Hiranyagarbha</em> (the golden womb 
            of creation), from which all manifestation emerges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisualDescription;
