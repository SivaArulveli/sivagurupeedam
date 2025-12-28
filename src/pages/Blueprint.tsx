import Navigation from "@/components/Navigation";
import BlueprintPanel from "@/components/BlueprintPanel";
import SanctumFooter from "@/components/SanctumFooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Blueprint = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </Link>
            
            <h1 className="font-sacred text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 tracking-widest uppercase">
              Architectural Blueprint
            </h1>
            <div className="h-1 w-24 gold-gradient mb-6" />
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Technical drawing of the Sacred Sanctum with precise measurements aligned to cosmic proportions.
            </p>
          </div>

          {/* Blueprint */}
          <BlueprintPanel />

          {/* Legend */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded border-2 border-foreground" />
                <span className="font-medium text-sm">Octagon (16ft)</span>
              </div>
              <p className="text-xs text-muted-foreground">Eight Guardians boundary</p>
            </div>
            <div className="glass-panel p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded border-2 border-emerald" />
                <span className="font-medium text-sm">Platform (9ft)</span>
              </div>
              <p className="text-xs text-muted-foreground">Sthula - Physical level</p>
            </div>
            <div className="glass-panel p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded border-2 border-royal" />
                <span className="font-medium text-sm">Tier (6ft)</span>
              </div>
              <p className="text-xs text-muted-foreground">Sukshma - Subtle level</p>
            </div>
            <div className="glass-panel p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded border-2 border-purple bg-purple/20" />
                <span className="font-medium text-sm">Core (2.5ft)</span>
              </div>
              <p className="text-xs text-muted-foreground">Karana - Causal Garbagriha</p>
            </div>
          </div>

          <SanctumFooter />
        </div>
      </div>
    </main>
  );
};

export default Blueprint;
