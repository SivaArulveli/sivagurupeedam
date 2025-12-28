import Hero from "@/components/Hero";
import SevenScreens from "@/components/SevenScreens";
import SacredMeasurements from "@/components/SacredMeasurements";
import AtmosphericExperience from "@/components/AtmosphericExperience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SevenScreens />
      <SacredMeasurements />
      <AtmosphericExperience />
      <Footer />
    </main>
  );
};

export default Index;
