const InspirationPanel = () => {
  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-6 tracking-wide">
        The Sthapati's Vision
      </h2>
      
      <div className="space-y-4 mb-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          This Sanctum is designed by a <strong className="text-primary">Sthapati</strong> (Sacred Architect) 
          in the lineage of South Indian Siddha traditions. Every measurement encodes spiritual truth; 
          every proportion reflects the harmony between human form and cosmic order.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Drawing from the <strong className="text-primary">Sathya Gnana Sabhai</strong> of Vadalur 
          (the Hall of True Wisdom built by Vallalar), this design prioritizes the transition from 
          darkness to light—the seeker's journey through veils of ignorance to the radiant center.
        </p>
      </div>
      
      <div className="p-4 bg-primary/10 rounded-xl border-l-4 border-primary mb-4">
        <p className="italic text-sm text-foreground/90 font-light">
          "The 21-foot height represents the 21,600 natural breaths taken by a human each day. 
          Through Guru Bhakti, each breath becomes a silent prayer, each moment a remembrance."
        </p>
        <p className="text-xs text-muted-foreground mt-2">— Sacred Architecture Principle</p>
      </div>

      <div className="p-4 bg-secondary/30 rounded-xl border border-secondary/40">
        <h3 className="font-sacred text-sm text-foreground/90 mb-2">Dedicated to</h3>
        <p className="font-sacred text-xl gold-text-gradient">
          Sri Guru Siva Swamigal
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          In whose presence the distinction between Guru and disciple dissolves into pure Light
        </p>
      </div>
    </section>
  );
};

export default InspirationPanel;
