const CorePhilosophy = () => {
  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up lg:col-span-2">
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-6 tracking-wide">
        Core Philosophy — Guru Thathvam
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sathya Gnana Sabhai */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="font-sacred text-lg text-primary">ஜோ</span>
            </div>
            <h3 className="font-sacred text-xl text-primary">Sathya Gnana Sabhai</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The concept of <strong className="text-primary">"Jyoti" (Supreme Light)</strong> guides 
            this architecture. The design facilitates the transition from darkness to light, 
            where the seeker passes through the <em className="text-foreground/80">Seven Screens</em> (veils of ignorance) 
            to reach the illuminated center.
          </p>
          <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-xs italic text-foreground/80">
              "அருட்பெருஞ்சோதி அருட்பெருஞ்சோதி<br/>
              தனிப்பெருங்கருணை அருட்பெருஞ்சோதி"
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              — Vallalar's invocation to the Supreme Light of Grace
            </p>
          </div>
        </div>

        {/* Gurudham Mandir */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center">
              <span className="font-sacred text-lg text-foreground/80">॥</span>
            </div>
            <h3 className="font-sacred text-xl text-foreground/90">Gurudham Mandir</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Rigorous mathematical symmetry representing the <strong className="text-primary">"Pindanda"</strong> (microcosm/human body) 
            as a reflection of the <strong className="text-primary">"Brahmanda"</strong> (macrocosm/universe). 
            Every proportion mirrors cosmic order.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-emerald/10 rounded-lg border border-emerald/20 text-center">
              <span className="font-sacred text-sm text-emerald">पिण्डाण्ड</span>
              <p className="text-xs text-muted-foreground mt-1">Pindanda<br/>Microcosm</p>
            </div>
            <div className="p-3 bg-royal/10 rounded-lg border border-royal/20 text-center">
              <span className="font-sacred text-sm text-royal">ब्रह्माण्ड</span>
              <p className="text-xs text-muted-foreground mt-1">Brahmanda<br/>Macrocosm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePhilosophy;
