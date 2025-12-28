import Header from "@/components/Header";
import SacredDimensions from "@/components/SacredDimensions";
import InspirationPanel from "@/components/InspirationPanel";
import SymbolicMapping from "@/components/SymbolicMapping";
import SevenVeils from "@/components/SevenVeils";
import BlueprintPanel from "@/components/BlueprintPanel";
import SanctumFooter from "@/components/SanctumFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <Header />

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column: Architectural Philosophy */}
          <div className="lg:col-span-4 space-y-6">
            <SacredDimensions />
            <InspirationPanel />
            <SymbolicMapping />
            <SevenVeils />
          </div>

          {/* Right Column: Interactive Blueprint */}
          <div className="lg:col-span-8">
            <BlueprintPanel />
          </div>
        </div>

        <SanctumFooter />
      </div>
    </main>
  );
};

export default Index;
