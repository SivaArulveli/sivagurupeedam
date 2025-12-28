import { motion } from "framer-motion";
import SacredGeometry from "./SacredGeometry";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-cosmic" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-gradient-to-b from-primary/30 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="geometric-text text-xs text-primary tracking-[0.3em] block mb-6">
                Guru Thathvam Sanctum
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="sacred-text text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-6"
            >
              A Sacred Space for{" "}
              <span className="text-primary glow-gold block">
                Guru Sri Siva Swamigal
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 mb-8"
            >
              A digital blueprint drawing from the Sathya Gnana Sabhai tradition—
              where sacred geometry becomes the vessel for transcendence, and every 
              measurement maps the journey from darkness into eternal light.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <div className="text-center">
                <span className="sacred-text text-2xl text-primary glow-gold">16ft</span>
                <span className="block text-xs text-muted-foreground geometric-text mt-1">Octagon</span>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <span className="sacred-text text-2xl text-primary glow-gold">21ft</span>
                <span className="block text-xs text-muted-foreground geometric-text mt-1">Height</span>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="text-center">
                <span className="sacred-text text-2xl text-primary glow-gold">7</span>
                <span className="block text-xs text-muted-foreground geometric-text mt-1">Screens</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Sacred Geometry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="relative"
          >
            <SacredGeometry />
            
            {/* Labels around geometry */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <span className="geometric-text text-xs text-muted-foreground">
                Ashta-Dikpala • Sthula • Sukshma • Karana • Jyoti
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-primary/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
