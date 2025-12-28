const SevenVeils = () => {
  const veils = [
    { 
      name: "Maya", 
      tamil: "மாயை",
      meaning: "Illusion Screen", 
      description: "The outermost veil—the belief that the world is ultimately real and separate from Self.",
      dissolution: "Recognized through Viveka (discrimination)"
    },
    { 
      name: "Kanmam", 
      tamil: "கன்மம்",
      meaning: "Karma Screen", 
      description: "Accumulated actions and their results binding the soul to cycles of birth.",
      dissolution: "Burnt through Guru's grace and selfless action"
    },
    { 
      name: "Mayeyam", 
      tamil: "மாயேயம்",
      meaning: "Illusion's Effect Screen", 
      description: "The subtle impressions (vasanas) left by past experiences.",
      dissolution: "Purified through meditation and mantra"
    },
    { 
      name: "Thirothayi", 
      tamil: "திரோதாயி",
      meaning: "Concealing Screen", 
      description: "The divine power that hides the truth, making the One appear as many.",
      dissolution: "Lifted when Guru reveals the hidden unity"
    },
    { 
      name: "Anavam", 
      tamil: "ஆணவம்",
      meaning: "Ego Screen", 
      description: "The primal impurity—the sense of 'I' as separate from the Absolute.",
      dissolution: "Surrendered at the Guru's feet"
    },
    { 
      name: "Moham", 
      tamil: "மோகம்",
      meaning: "Delusion Screen", 
      description: "Attachment and infatuation that cloud clear seeing.",
      dissolution: "Transcended through detachment and devotion"
    },
    { 
      name: "Ahankaram", 
      tamil: "அகங்காரம்",
      meaning: "I-ness Screen", 
      description: "The final, subtlest identification—'I am the doer, I am the experiencer.'",
      dissolution: "Dies in the Garbagriha's light—only Guru remains"
    },
  ];

  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up lg:col-span-2" style={{ animationDelay: '300ms' }}>
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-2 tracking-wide">
        The Seven Screens — திரை ஏழு
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        In the Sathya Gnana Sabhai tradition of Vallalar, the seeker must pass through seven veils of ignorance 
        to reach the Supreme Light (Arut Perum Jyoti).
      </p>
      
      <div className="relative">
        {/* Visual representation of veils */}
        <div className="absolute left-[18px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-muted-foreground/50 via-primary/50 to-primary" />
        
        <div className="space-y-3">
          {veils.map((veil, index) => (
            <div 
              key={veil.name} 
              className="relative flex gap-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group ml-1"
            >
              <div className="relative z-10">
                <span 
                  className="w-9 h-9 rounded-full bg-secondary/50 text-foreground/80 text-sm font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-300 border border-primary/20"
                  style={{ 
                    opacity: 1 - (index * 0.08),
                    boxShadow: index === 6 ? '0 0 20px hsl(var(--primary) / 0.5)' : 'none'
                  }}
                >
                  {7 - index}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-semibold text-foreground">{veil.name}</span>
                  <span className="font-sacred text-sm text-primary">{veil.tamil}</span>
                  <span className="text-xs text-muted-foreground">— {veil.meaning}</span>
                </div>
                <p className="text-xs text-foreground/70 mt-1">{veil.description}</p>
                <p className="text-xs text-primary/80 italic mt-1">↳ {veil.dissolution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center - Supreme Light */}
      <div className="mt-8 text-center p-6 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-xl border border-primary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 animate-pulse-subtle" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-glow-pulse" />
        <div className="relative z-10">
          <span className="font-sacred text-3xl text-primary animate-shimmer inline-block">அருட்பெருஞ்சோதி</span>
          <p className="text-sm text-foreground/90 mt-2 font-medium">Arut Perum Jyoti — The Supreme Light of Grace</p>
          <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto">
            Beyond all seven screens, the Guru's true nature is revealed as pure, undifferentiated Light—
            identical with the seeker's own innermost Self.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SevenVeils;
