import BlueprintSVG from "./BlueprintSVG";

const BlueprintPanel = () => {
  return (
    <div className="glass-panel p-4 md:p-8 rounded-3xl blueprint-bg relative shadow-2xl">
      {/* Blueprint ID */}
      <div className="absolute top-4 right-4 md:top-6 md:right-8 text-right">
        <span className="text-[10px] font-mono uppercase tracking-tight text-muted-foreground block">
          Blueprint ID: GSSS-21-16
        </span>
        <span className="text-[10px] font-mono uppercase tracking-tight text-muted-foreground block">
          Scale: 1ft = 20px
        </span>
      </div>

      {/* SVG Blueprint */}
      <div className="mt-8 md:mt-0">
        <BlueprintSVG />
      </div>

      {/* Ground to Height Indicator */}
      <div className="mt-6 md:mt-8 flex items-center justify-center space-x-4 border-t border-border pt-6">
        <div className="text-center">
          <p className="text-[10px] uppercase text-muted-foreground font-bold mb-1 tracking-widest">
            Vertical Elevation
          </p>
          <p className="font-sacred text-2xl md:text-3xl text-accent">21.0 Feet</p>
          <p className="text-[10px] text-muted-foreground uppercase mt-1">
            Ground Level to Pinnacle
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlueprintPanel;
