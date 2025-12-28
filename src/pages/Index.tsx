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
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 md:px-8 lg:px-12">
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
              className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-primary/50 transition-colors group"
            >
              <div>
                <h2 className="font-sacred text-xl md:text-2xl text-accent mb-4 tracking-wide">
                  View Blueprint
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore the detailed architectural blueprint with precise measurements, 
                  sacred geometry, and technical specifications.
                </p>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                <span>Open Blueprint</span>
                <ArrowRight className="w-4 h-4" />
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
