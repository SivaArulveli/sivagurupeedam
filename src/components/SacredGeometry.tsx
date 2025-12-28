import { motion } from "framer-motion";

const SacredGeometry = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Outer glow effect */}
      <div className="absolute inset-0 light-rays animate-pulse-glow" />
      
      {/* Octagon (16ft symbolically) - Ashta Dikpalas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full animate-rotate-slow" style={{ animationDuration: '120s' }}>
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(43 74% 49%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(38 70% 45%)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <polygon
            points="200,20 320,80 380,200 320,320 200,380 80,320 20,200 80,80"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            className="drop-shadow-lg"
          />
        </svg>
      </motion.div>

      {/* 9ft Square - Sthula (Physical) */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute inset-[12%] border border-primary/40"
        style={{ transform: 'rotate(0deg)' }}
      />

      {/* 6ft Square - Sukshma (Subtle) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="absolute inset-[25%] border border-primary/50"
      />

      {/* 2.5ft Square - Karana (Causal/Garbagriha) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        className="absolute inset-[40%] border-2 border-primary shadow-glow bg-primary/5"
      />

      {/* Central Jyoti (Divine Light) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute inset-[45%] flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse-glow" />
          <div className="absolute inset-[20%] bg-primary/50 rounded-full blur-md" />
          <div className="absolute inset-[35%] bg-primary rounded-full" />
        </div>
      </motion.div>

      {/* Measurement labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute -right-4 top-1/2 -translate-y-1/2"
      >
        <span className="geometric-text text-xs text-muted-foreground">16ft</span>
      </motion.div>
    </div>
  );
};

export default SacredGeometry;
