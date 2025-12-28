import { motion } from "framer-motion";

const screens = [
  { name: "Manas", meaning: "Mind Screen", description: "The first veil of mental projections" },
  { name: "Buddhi", meaning: "Intellect Screen", description: "The discriminating faculty" },
  { name: "Chitta", meaning: "Memory Screen", description: "Stored impressions and patterns" },
  { name: "Ahankara", meaning: "Ego Screen", description: "The sense of separate self" },
  { name: "Prana", meaning: "Vital Screen", description: "Life force energy patterns" },
  { name: "Jiva", meaning: "Soul Screen", description: "Individual consciousness" },
  { name: "Maya", meaning: "Illusion Screen", description: "The final veil before truth" },
];

const SevenScreens = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="sacred-text text-4xl md:text-5xl font-light text-foreground mb-4">
            The Seven <span className="text-primary glow-gold">Screens</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            In the tradition of Sathya Gnana Sabhai, the seeker must pass through seven veils of ignorance 
            to reach the supreme light (Jyoti) at the center.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
          
          <div className="space-y-8 md:space-y-0">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-sm hover:border-primary/30 transition-colors duration-500">
                    <span className="geometric-text text-xs text-primary mb-2 block">
                      Screen {index + 1}
                    </span>
                    <h3 className="sacred-text text-2xl text-foreground mb-1">{screen.name}</h3>
                    <p className="text-sm text-muted-foreground italic mb-2">{screen.meaning}</p>
                    <p className="text-sm text-muted-foreground/80">{screen.description}</p>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 relative z-10">
                  <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
                  <div className="w-4 h-4 bg-primary rounded-full shadow-glow" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Final destination - Jyoti */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
              <div className="relative z-10">
                <span className="geometric-text text-xs text-primary/80 block mb-2">Beyond All Screens</span>
                <h3 className="sacred-text text-3xl text-primary glow-gold">ஜோதி</h3>
                <p className="sacred-text text-xl text-foreground mt-1">Jyoti</p>
                <p className="text-sm text-muted-foreground mt-2">The Supreme Light</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SevenScreens;
