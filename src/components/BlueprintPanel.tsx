import BlueprintSVG from "./BlueprintSVG";

const BlueprintPanel = () => {
  return (
    <div className="glass-panel p-4 md:p-10 rounded-3xl blueprint-bg relative cosmic-glow">
      {/* Blueprint ID */}
      <div className="absolute top-4 right-4 md:top-8 md:right-10 text-right">
        <span className="text-[10px] font-mono uppercase tracking-tight text-muted-foreground block">
          Blueprint ID: GSSS-21-16
        </span>
        <span className="text-[10px] font-mono uppercase tracking-tight text-muted-foreground block">
          Scale: 1ft = 20px
        </span>
      </div>

      {/* SVG Blueprint */}
      <div className="mt-10 md:mt-4">
        <BlueprintSVG />
      </div>

      {/* Ground to Height Indicator */}
      <div className="mt-8 md:mt-10 flex items-center justify-center space-x-4 border-t border-primary/20 pt-8">
        <div className="text-center">
          <p className="text-xs uppercase text-muted-foreground font-bold mb-2 tracking-widest">
            Vertical Elevation
          </p>
          <p className="font-sacred text-4xl md:text-5xl gold-text-gradient">21.0 Feet</p>
          <p className="text-xs text-muted-foreground uppercase mt-2">
            Ground Level to Pinnacle
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlueprintPanel;
