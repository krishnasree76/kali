import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
// import { Heart, Camera, Sun, Shirt, Cake, Baby } from "lucide-react";
import weddingImg from "@/assets/wedding.jpg";
import preWeddingImg from "@/assets/prewedding.jpg";
import haldiImg from "@/assets/haldi.jpg";
import halfSareeImg from "@/assets/halfsaree.jpg";
import birthdayImg from "@/assets/birthday.jpg";
import preBirthdayImg from "@/assets/prebirthday.jpg";

const services = [
  { title: "Wedding Films", image: weddingImg, desc: "Cinematic narratives of your most cherished day" },
  { title: "Pre-Wedding Cinematics", image: preWeddingImg, desc: "Romantic visual stories before the big moment" },
  { title: "Haldi Edits", image: haldiImg, desc: "Vibrant, joyful celebrations captured in gold" },
  { title: "Half Saree Highlights", image: halfSareeImg, desc: "Traditional elegance meets modern storytelling" },
  { title: "Birthday Films", image: birthdayImg, desc: "Milestone moments preserved in stunning detail" },
  { title: "Pre Birthday Teasers", image: preBirthdayImg, desc: "Building excitement with cinematic teasers" },
];


const ServiceCard = ({ service, i }: { service: typeof services[0]; i: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
      className="bg-glass rounded-lg p-8 gold-glow-hover transition-all duration-300 group cursor-pointer"
    >
      <div className="p-4 bg-primary/10 rounded-lg w-fit mb-5 group-hover:bg-primary/20 transition-colors">
        <div className="w-full h-44 rounded-lg overflow-hidden mb-5">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
</div>

      </div>
      <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm font-body leading-relaxed">{service.desc}</p>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-body mb-4">Our Services</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            What We <span className="text-gold-gradient italic">Create</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
