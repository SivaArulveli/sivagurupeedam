import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import CorePhilosophy from "@/components/CorePhilosophy";
import SacredDimensions from "@/components/SacredDimensions";
import InspirationPanel from "@/components/InspirationPanel";
import VisualDescription from "@/components/VisualDescription";
import SymbolicMapping from "@/components/SymbolicMapping";
import SevenVeils from "@/components/SevenVeils";
import AtmosphericExperience from "@/components/AtmosphericExperience";
import SanctumFooter from "@/components/SanctumFooter";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background geometric-pattern">
      <Navigation />
      
      <div className="pt-28 pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Header />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Core Philosophy - spans 2 columns */}
            <CorePhilosophy />
            
            {/* Blueprint CTA Card */}
            <Link 
              to="/blueprint" 
              className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group cosmic-glow animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: '100ms' }}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Compass className="w-20 h-20 text-primary animate-pulse-subtle" />
              </div>
              <div className="relative z-10">
                <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-4 tracking-wide">
                  View Sacred Blueprint
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Explore the detailed architectural blueprint with precise measurements 
                  aligned to cosmic proportions and sacred geometry.
                </p>
              </div>
              <div className="flex items-center gap-3 text-primary font-medium group-hover:gap-4 transition-all duration-300 relative z-10">
                <span>Open Blueprint</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Sacred Dimensions */}
            <SacredDimensions />
            
            {/* Inspiration / Sthapati's Vision */}
            <InspirationPanel />
            
            {/* Visual Description */}
            <VisualDescription />
            
            {/* Symbolic Mapping - spans 2 columns */}
            <SymbolicMapping />
            
            {/* Seven Veils - spans 2 columns */}
            <SevenVeils />
            
            {/* Atmospheric Experience - spans full width */}
            <AtmosphericExperience />
          </div>

          <SanctumFooter />
        </div>
      </div>
    </main>
  );
};

export default Index;
