import { Eye, Ear, Heart } from "lucide-react";

const AtmosphericExperience = () => {
  const experiences = [
    {
      icon: Eye,
      title: "Sight — Divine Geometry",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      description: "White Makrana marble surfaces catch and scatter light in infinite reflections. Gold accents trace sacred geometry—the octagon's edges gleam with celestial fire. As you approach the Garbagriha, the nested squares create a visual tunnel drawing the eye inward to the luminous core.",
      details: [
        "Polished marble creates mirror-like reflections",
        "Gold inlay traces the octagonal boundary",
        "Light intensifies toward the center",
        "Shadows retreat as you advance inward"
      ]
    },
    {
      icon: Ear,
      title: "Sound — Sacred Silence",
      color: "text-emerald",
      bgColor: "bg-emerald/10",
      borderColor: "border-emerald/20",
      description: "The architecture absorbs worldly noise. Within the 21ft vertical chamber, sound transforms—external chaos becomes internal stillness. Only the subtle vibration of OM resonates through the marble, as if the stone itself breathes.",
      details: [
        "Natural acoustic dampening of marble",
        "The 'Anaahata Naada' (unstruck sound) pervades",
        "Each step on stone echoes then dissolves",
        "Silence deepens as you approach the core"
      ]
    },
    {
      icon: Heart,
      title: "Spirit — Pure Stillness",
      color: "text-purple",
      bgColor: "bg-purple/10",
      borderColor: "border-purple/20",
      description: "Crossing each threshold, the spiritual density increases. The 9ft platform grounds the body, the 6ft tier attunes the energy, and the 2.5ft Garbagriha dissolves all distinction between seeker and sought. Here, Guru Thathvam is realized—not as concept, but as direct experience.",
      details: [
        "Progressive purification through each level",
        "The 'Turiya' state becomes accessible",
        "Guru's presence as living Jyoti",
        "Dissolution of subject-object duality"
      ]
    }
  ];

  return (
    <section className="glass-panel p-6 md:p-8 rounded-2xl cosmic-glow animate-fade-in-up lg:col-span-3" style={{ animationDelay: '500ms' }}>
      <h2 className="font-sacred text-2xl md:text-3xl gold-text-gradient mb-2 tracking-wide">
        Atmospheric Experience
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        The sensory journey from outer world to inner sanctum
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div 
            key={exp.title}
            className={`p-5 rounded-xl ${exp.bgColor} border ${exp.borderColor} transition-all duration-300 hover:scale-[1.02]`}
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <exp.icon className={`w-6 h-6 ${exp.color}`} />
              <h3 className={`font-sacred text-lg ${exp.color}`}>{exp.title}</h3>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              {exp.description}
            </p>
            <ul className="space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${exp.color.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AtmosphericExperience;
