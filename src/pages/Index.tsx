import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import SacredDimensions from "@/components/SacredDimensions";
import InspirationPanel from "@/components/InspirationPanel";
import SymbolicMapping from "@/components/SymbolicMapping";
import SevenVeils from "@/components/SevenVeils";
import SanctumFooter from "@/components/SanctumFooter";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background geometric-pattern">
      <Navigation />
      
      <div className="pt-28 pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Header />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <SacredDimensions />
            <InspirationPanel />
            <SymbolicMapping />
            <SevenVeils />
            
            {/* Blueprint CTA Card */}
            <Link 
              to="/blueprint" 
              className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group cosmic-glow animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <div>
                <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-4 tracking-wide">
                  View Blueprint
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Explore the detailed architectural blueprint with precise measurements, 
                  sacred geometry, and technical specifications.
                </p>
              </div>
              <div className="flex items-center gap-3 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                <span>Open Blueprint</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          <SanctumFooter />
        </div>
      </div>
    </main>
  );
};

export default Index;
