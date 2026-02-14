import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";

const images = [gallery1, gallery2, gallery3];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-base md:text-lg font-body mb-4">
  Our Gallery
</p>

          {/* <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Cinematic <span className="text-gold-gradient italic">Moments</span>
          </h2> */}
        </motion.div>

        {/* 3 Images Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-glass gold-glow-hover"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-body tracking-widest text-sm uppercase">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 Modal Preview */}
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
              className="relative max-w-4xl w-full"
            >
              <img
                src={selectedImage}
                alt="Full Preview"
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

export default Gallery;
