import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9133614177", href: "tel:+919133614177" },
  { icon: Mail, label: "Email", value: "kalivfx77@gmail.com", href: "mailto:kalivfx77@gmail.com" },
  { icon: MapPin, label: "Address", value: "Choppella, Sai Baba Temple, Kali Edits and VFX Office" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9:30 AM – 9 PM\nSunday: Office Leave" },
];

const socials = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/17aaCaMvHJ/?mibextid=wwXIfr",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/kali_edits_vfx_official",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@kalieditsvfx",
  },
];

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    project: "",
    delivery: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `🎬 *New Slot Booking Request*\n\n` +
      `📸 Photography Name: ${form.name}\n` +
      `📞 Contact Number: ${form.phone}\n` +
      `🎥 Project Name: ${form.project}\n` +
      `⏳ Estimated Delivery Time: ${form.delivery}\n` +
      `📍 Location: ${form.location}`
    );

    window.open(`https://wa.me/919133614177?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-body mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Contact <span className="text-gold-gradient italic">Us</span>
          </h2>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-glass rounded-lg p-6 gold-glow-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-body mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground font-body hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-body whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SLOT BOOKING FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-20 bg-glass p-8 rounded-xl gold-glow-hover"
        >
          <h3 className="text-2xl font-display text-center mb-8 text-foreground">
            🎬 Slot Booking
          </h3>

          <form onSubmit={handleSubmit} className="grid gap-6">

            <input
              type="text"
              name="name"
              placeholder="Photography Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />

            <input
              type="text"
              name="project"
              placeholder="Project Name"
              value={form.project}
              onChange={handleChange}
              required
              className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />

            <input
              type="text"
              name="delivery"
              placeholder="Estimated Delivery Time"
              value={form.delivery}
              onChange={handleChange}
              required
              className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />

            <input
              type="text"
              name="location"
              placeholder="Your Location"
              value={form.location}
              onChange={handleChange}
              required
              className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />

            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-gold-gradient text-primary-foreground font-semibold tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity gold-glow"
            >
              Book Slot via WhatsApp
            </button>

          </form>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6 mt-12"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-glass rounded-full gold-glow-hover transition-all duration-300 hover:bg-primary/10"
            >
              <s.icon className="w-5 h-5 text-primary" />
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
