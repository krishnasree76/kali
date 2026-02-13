import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Floating gold particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold-gradient leading-tight"
            animate={{ textShadow: ["0 0 20px hsl(40 60% 50% / 0)", "0 0 40px hsl(40 60% 50% / 0.3)", "0 0 20px hsl(40 60% 50% / 0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Kali Edits & VFX
          </motion.h1>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="font-display text-2xl md:text-4xl text-foreground leading-relaxed mb-4">
            We Don't Edit Videos.
            <br />
            <span className="text-gold-gradient italic">We Craft Cinematic Legacies.</span>
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-muted-foreground text-sm md:text-base tracking-[0.25em] uppercase mt-6 mb-10 font-body"
        >
          Wedding &nbsp;|&nbsp; Pre-Wedding &nbsp;|&nbsp; Haldi &nbsp;|&nbsp; Half Saree &nbsp;|&nbsp; Birthday &nbsp;|&nbsp; Pre Birthday
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-gold-gradient text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 transition-opacity gold-glow"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary/50 text-primary font-body font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-primary/10 transition-colors"
          >
            Book Your Shoot
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center pt-1">
          <motion.div
            className="w-1 h-2 bg-primary/60 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
