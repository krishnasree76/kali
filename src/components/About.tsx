import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X } from "lucide-react";

import premiereLogo from "@/assets/premiere.png";
import afterEffectsLogo from "@/assets/aftereffects.png";
import davinciLogo from "@/assets/davinci.png";

import award1 from "@/assets/award1.jpg";
import award2 from "@/assets/award2.jpg";
import award3 from "@/assets/award3.jpg";

const tools = [
  { name: "Adobe Premiere Pro", logo: premiereLogo },
  { name: "After Effects", logo: afterEffectsLogo },
  { name: "DaVinci Resolve", logo: davinciLogo },
];

const awardImages = [award1, award2, award3];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs font-body mb-4">
              About Us
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Crafting Visual
              <br />
              <span className="text-gold-gradient italic">
                Masterpieces
              </span>
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              With over <span className="text-primary font-semibold">4+ years</span> 
              of professional experience in wedding cinematography and VFX, 
              we transform moments into timeless cinematic stories.
            </p>

            {/* AWARD CARD */}
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

                <div className="flex-1">
                  <h4 className="font-display text-foreground font-semibold mb-1">
                    Business Excellence Award
                  </h4>
                  <p className="text-muted-foreground text-sm font-body mb-4">
                    2025 Indian Wedding Photography Festival
                    <br />
                    <span className="text-primary/80 italic">
                      Wedding Teaser Editing
                    </span>
                  </p>

                  {/* 🔥 ROUND AWARD PHOTOS */}
                  <div className="flex gap-4 mt-3">
                    {awardImages.map((img, i) => (
                      <motion.img
                        key={i}
                        src={img}
                        alt="Award"
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full object-cover cursor-pointer border-2 border-primary/30 hover:border-primary transition-all duration-300"
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - TOOLS */}
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
                className="bg-glass rounded-lg p-6 gold-glow-hover transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-foreground font-semibold text-lg">
                      {tool.name}
                    </h4>
                    <p className="text-muted-foreground text-sm font-body">
                      Professional Grade
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 🔥 IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full"
            >
              <img
                src={selectedImage}
                alt="Full Award"
                className="w-full rounded-lg shadow-2xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-primary text-black p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default About;
