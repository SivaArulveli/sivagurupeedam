import { motion } from "framer-motion";

const measurements = [
  {
    value: "16ft",
    title: "The Octagon",
    sanskrit: "Ashta-Dikpala",
    symbolism: "Guardians of Eight Directions",
    description: "The outer boundary of the manifest world, representing the Ashta-Siddhis (eight supernatural powers) and the eight cardinal protectors.",
    guruRelation: "The Guru stands at the center of all directions, accessible from every path yet transcending all."
  },
  {
    value: "9ft",
    title: "Sthula Square",
    sanskrit: "स्थूल",
    symbolism: "The Physical Realm",
    description: "Represents the gross body (Annamaya Kosha). The first level where the disciple exists in physical form.",
    guruRelation: "The Guru first appears to the disciple in physical form, teaching through presence and example."
  },
  {
    value: "6ft",
    title: "Sukshma Square",
    sanskrit: "सूक्ष्म",
    symbolism: "The Subtle Realm",
    description: "Represents the energy body (Pranamaya & Manomaya Koshas). The realm of breath, prana, and mental activity.",
    guruRelation: "The Guru's teachings penetrate the subtle body through mantra, pranayama, and meditation guidance."
  },
  {
    value: "2.5ft",
    title: "Karana Square",
    sanskrit: "कारण",
    symbolism: "The Causal Realm",
    description: "The Garbagriha (innermost sanctum). The seed level where the Guru's presence resides as Pure Light.",
    guruRelation: "Here, distinction between Guru and disciple dissolves. Only the eternal teaching remains."
  },
  {
    value: "21ft",
    title: "Sacred Height",
    sanskrit: "अजप गायत्री",
    symbolism: "21,600 Breaths",
    description: "Represents the natural breaths taken by a human in one day—the Ajapa Gayatri, the unspoken mantra of existence.",
    guruRelation: "Every breath is a reminder of the Guru's teaching. The vertical axis connects Earth to Heaven."
  },
  {
    value: "6.63ft × 5ft",
    title: "Outer Portal",
    sanskrit: "द्वार",
    symbolism: "Gateway to the Sacred",
    description: "The proportions match the octagon's sides, creating harmonic resonance with the whole.",
    guruRelation: "The first threshold where the seeker transitions from worldly to sacred space."
  },
  {
    value: "3ft × 5ft",
    title: "Inner Portal",
    sanskrit: "सुषुम्ना",
    symbolism: "The Sushumna Nadi",
    description: "The narrow central channel through which Kundalini rises. Only the prepared may pass.",
    guruRelation: "The Guru awakens this channel. The narrow path requires complete surrender of ego."
  }
];

const SacredMeasurements = () => {
  return (
    <section className="py-24 px-4 bg-cosmic relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            Pindanda Mirrors Brahmanda
          </span>
          <h2 className="sacred-text text-4xl md:text-5xl font-light text-foreground mb-4">
            Sacred <span className="text-primary glow-gold">Measurements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Every dimension carries profound symbolism, mapping the microcosm of the human body 
            to the macrocosm of the universe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {measurements.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-card/30 backdrop-blur-sm border border-border/30 rounded-sm hover:border-primary/40 transition-all duration-500 hover:shadow-sacred">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="sacred-text text-3xl text-primary glow-gold">{item.value}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="sacred-text text-xl text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-primary/80 italic mb-2">{item.sanskrit} — {item.symbolism}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="pt-4 border-t border-border/30">
                      <span className="geometric-text text-xs text-muted-foreground/60 block mb-1">Guru-Disciple Relation</span>
                      <p className="text-sm text-foreground/80">{item.guruRelation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SacredMeasurements;
