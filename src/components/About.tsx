import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import { Award, Film, Sparkles } from "lucide-react";

import { Award } from "lucide-react";
import premiereLogo from "@/assets/premiere.png";
import afterEffectsLogo from "@/assets/aftereffects.png";
import davinciLogo from "@/assets/davinci.png";
const tools = [
  { name: "Adobe Premiere Pro", logo: premiereLogo },
  { name: "After Effects", logo: afterEffectsLogo },
  { name: "DaVinci Resolve", logo: davinciLogo },
];


const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-body mb-4">About Us</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Crafting Visual
              <br />
              <span className="text-gold-gradient italic">Masterpieces</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              With over <span className="text-primary font-semibold">4+ years</span> of professional experience in wedding cinematography and VFX, 
              we transform moments into timeless cinematic stories. Every frame is a brushstroke in our visual canvas.
            </p>

            {/* Award */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-glass rounded-lg p-5 gold-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-foreground font-semibold mb-1">Business Excellence Award</h4>
                  <p className="text-muted-foreground text-sm font-body">
                    2025 Indian Wedding Photography Festival
                    <br />
                    <span className="text-primary/80 italic">Wedding Teaser Editing</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="bg-glass rounded-lg p-6 gold-glow-hover transition-all duration-500 group animate-float"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <img 
  src={tool.logo} 
  alt={tool.name} 
  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
/>

                  </div>
                  <div>
                    <h4 className="font-display text-foreground font-semibold text-lg">{tool.name}</h4>
                    <p className="text-muted-foreground text-sm font-body">Professional Grade</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
