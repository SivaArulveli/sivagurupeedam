const Header = () => {
  return (
    <header className="text-center py-12 animate-fade-in-up">
      <p className="text-sm text-primary/80 uppercase tracking-[0.3em] mb-4">
        A Sthapati's Digital Conception
      </p>
      <h1 className="font-sacred text-5xl sm:text-6xl md:text-7xl gold-text-gradient mb-4 tracking-wide leading-tight">
        Guru Thathvam Sanctum
      </h1>
      <p className="font-sacred text-xl md:text-2xl text-foreground/70 mb-6">
        குரு தத்துவம் சன்னதி
      </p>
      <div className="mx-auto h-1 w-40 gold-gradient mb-8 animate-glow-pulse rounded-full" />
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
        A sacred architectural design for <span className="text-primary">Sri Guru Siva Swamigal</span> — 
        blending the luminous philosophy of Vadalur's Sathya Gnana Sabhai with the mathematical 
        precision of Gurudham Mandir traditions.
      </p>
      <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground flex-wrap">
        <span>Octagon: 16 ft</span>
        <span className="w-1 h-1 rounded-full bg-primary" />
        <span>Height: 21 ft</span>
        <span className="w-1 h-1 rounded-full bg-primary" />
        <span>Garbagriha: 2.5 ft</span>
      </div>
    </header>
  );
};

export default Header;
