import { motion } from "framer-motion";
import { Eye, Ear, Sparkles } from "lucide-react";

const experiences = [
  {
    icon: Eye,
    title: "Sight",
    sanskrit: "दृष्टि",
    elements: [
      "White Makrana marble floors reflecting golden light",
      "Geometric patterns cast by precisely angled apertures",
      "Seven concentric rings of decreasing opacity towards center",
      "Gold-leafed Sanskrit inscriptions catching ambient light",
      "The play of shadow and luminance marking time's passage"
    ]
  },
  {
    icon: Ear,
    title: "Sound",
    sanskrit: "श्रवण",
    elements: [
      "Profound stillness absorbing external vibrations",
      "Subtle resonance of the structure's harmonic proportions",
      "The seeker's own breath becoming audible",
      "Distant temple bells at dawn and dusk",
      "Inner sound (Nada) arising from deep contemplation"
    ]
  },
  {
    icon: Sparkles,
    title: "Spirit",
    sanskrit: "आत्मा",
    elements: [
      "Progressive unveiling as one moves inward",
      "Stillness that penetrates restless thought",
      "Sense of presence without visible form",
      "Dissolution of time-bound awareness",
      "Recognition of the eternal Guru within"
    ]
  }
];

const AtmosphericExperience = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="geometric-text text-xs text-primary tracking-[0.3em] block mb-4">
            The Sensory Journey
          </span>
          <h2 className="sacred-text text-4xl md:text-5xl font-light text-foreground mb-4">
            Atmospheric <span className="text-primary glow-gold">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            The sanctum is designed to transform ordinary perception into sacred awareness 
            through carefully orchestrated sensory experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 bg-gradient-to-b from-card/50 to-transparent border border-border/30 rounded-sm hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center mb-4 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500" />
                    <exp.icon className="w-8 h-8 text-primary relative z-10" strokeWidth={1} />
                  </div>
                  <h3 className="sacred-text text-2xl text-foreground">{exp.title}</h3>
                  <span className="sacred-text text-lg text-primary/60">{exp.sanskrit}</span>
                </div>

                <ul className="space-y-3">
                  {exp.elements.map((element, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mt-2 flex-shrink-0" />
                      <span>{element}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual description panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 bg-card/20 border border-border/30 rounded-sm"
        >
          <h3 className="sacred-text text-2xl text-foreground mb-6 text-center">
            The Interplay of <span className="text-primary">Light</span> & <span className="text-marble-white">Marble</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Morning light enters through the eastern portal, casting long golden rectangles 
                across the white marble floor. As the sun ascends, these rectangles shorten and 
                intensify, eventually reaching the inner squares at noon.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gold leaf accents on the architectural details catch and scatter this light, 
                creating a subtle luminescence that seems to emanate from the walls themselves.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The 21ft height allows for a vertical column of light that descends upon the 
                Garbagriha at specific solar angles, creating moments of intense illumination 
                that ancient texts describe as the Guru's direct blessing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At these moments, the distinction between physical light and spiritual light 
                dissolves—the seeker experiences Jyoti not as metaphor but as direct reality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AtmosphericExperience;
