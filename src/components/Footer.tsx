import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/30 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Tamil script */}
          <p className="sacred-text text-3xl text-primary glow-gold mb-2">
            ஒன்றே குலம் ஒருவனே தேவன்
          </p>
          <p className="sacred-text text-lg text-muted-foreground italic mb-8">
            "One caste, One God"
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8" />

          <p className="text-sm text-muted-foreground mb-4">
            A conceptual architectural tribute to Guru Sri Siva Swamigal
          </p>
          <p className="text-xs text-muted-foreground/60">
            Inspired by the sacred traditions of Sathya Gnana Sabhai, Vadalur
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
