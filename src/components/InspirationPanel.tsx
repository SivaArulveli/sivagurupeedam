const InspirationPanel = () => {
  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-6 tracking-wide">
        Inspiration
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground mb-5">
        Drawing from the <strong className="text-primary">Sathya Gnana Sabhai</strong> (Vadalur), 
        this design prioritizes the unobstructed flow of light. The <strong className="text-primary">Gurudham Mandir</strong> influence 
        is seen in the rigorous adherence to mathematical proportions that mirror cosmic order.
      </p>
      <div className="p-4 bg-primary/10 rounded-xl border-l-4 border-primary">
        <p className="italic text-sm text-foreground/90 font-light">
          "21 feet height represents the 21,600 breaths a human takes daily, sanctified through Guru Bhakti."
        </p>
      </div>
    </section>
  );
};

export default InspirationPanel;
