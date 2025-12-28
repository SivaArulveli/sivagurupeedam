import Navigation from "@/components/Navigation";
import BlueprintPanel from "@/components/BlueprintPanel";
import SanctumFooter from "@/components/SanctumFooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Blueprint = () => {
  return (
    <main className="min-h-screen bg-background geometric-pattern">
      <Navigation />
      
      <div className="pt-28 pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
            </Link>
            
            <h1 className="font-sacred text-4xl sm:text-5xl md:text-6xl gold-text-gradient mb-6 tracking-wide">
              Architectural Blueprint
            </h1>
            <div className="h-1 w-32 gold-gradient mb-8 animate-glow-pulse rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
              Technical drawing of the Sacred Sanctum with precise measurements aligned to cosmic proportions.
            </p>
          </div>

          {/* Blueprint */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <BlueprintPanel />
          </div>

          {/* Legend */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="glass-panel p-5 rounded-xl hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded border-2 border-foreground" />
                <span className="font-semibold text-foreground">Octagon (16ft)</span>
              </div>
              <p className="text-sm text-muted-foreground">Eight Guardians boundary</p>
            </div>
            <div className="glass-panel p-5 rounded-xl hover:border-emerald/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded border-2 border-emerald" />
                <span className="font-semibold text-foreground">Platform (9ft)</span>
              </div>
              <p className="text-sm text-muted-foreground">Sthula - Physical level</p>
            </div>
            <div className="glass-panel p-5 rounded-xl hover:border-royal/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded border-2 border-royal" />
                <span className="font-semibold text-foreground">Tier (6ft)</span>
              </div>
              <p className="text-sm text-muted-foreground">Sukshma - Subtle level</p>
            </div>
            <div className="glass-panel p-5 rounded-xl hover:border-purple/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded border-2 border-purple bg-purple/20" />
                <span className="font-semibold text-foreground">Core (2.5ft)</span>
              </div>
              <p className="text-sm text-muted-foreground">Karana - Causal Garbagriha</p>
            </div>
          </div>

          <SanctumFooter />
        </div>
      </div>
    </main>
  );
};

export default Blueprint;
