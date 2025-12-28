const InspirationPanel = () => {
  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl">
      <h2 className="font-sacred text-xl md:text-2xl text-accent mb-4 tracking-wide">
        Inspiration
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground mb-4">
        Drawing from the <strong className="text-foreground">Sathya Gnana Sabhai</strong> (Vadalur), 
        this design prioritizes the unobstructed flow of light. The <strong className="text-foreground">Gurudham Mandir</strong> influence 
        is seen in the rigorous adherence to mathematical proportions that mirror cosmic order.
      </p>
      <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
        <p className="italic text-sm text-foreground/80">
          "21 feet height represents the 21,600 breaths a human takes daily, sanctified through Guru Bhakti."
        </p>
      </div>
    </section>
  );
};

export default InspirationPanel;
