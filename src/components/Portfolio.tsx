import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const portfolioData = [
  {
    category: "Wedding",
    items: [
      {
        title: "Wedding Video 1",
        sub: "Wedding",
        videoId: "Z82H4gLMOlg",
      },
      {
        title: "Wedding Video 2",
        sub: "Wedding",
        videoId: "udqoaFpyAOY",
      },
    ],
  },
  {
    category: "Pre Wedding",
    items: [
      {
        title: "Pre Wedding Video",
        sub: "Pre Wedding",
        videoId: "YmGeIHgb7K4",
      },
      {
        title: "Save The Dates",
        sub: "Coming Soon",
        videoId: null,
      },
    ],
  },
  {
    category: "Wedding Haldis",
    items: [
      {
        title: "Wedding Groom Haldi",
        sub: "Groom Haldi",
        videoId: "YmGeIHgb7K4",
      },
      {
        title: "Bride Haldi",
        sub: "Bride Haldi",
        videoId: null,
      },
      {
        title: "Couple Haldi",
        sub: "Couple Haldi",
        videoId: null,
      },
    ],
  },
  {
    category: "Half Saree",
    items: [
      {
        title: "Half Saree Haldi",
        sub: "Half Saree Haldi",
        videoId: "i7SRRULgwtU",
      },
      {
        title: "Half Saree Song Shoot",
        sub: "Coming Soon",
        videoId: null,
      },
      {
        title: "Half Saree Functions",
        sub: "Coming Soon",
        videoId: null,
      },
    ],
  },
  {
    category: "Birthday",
    items: [
      {
        title: "Birthday Video",
        sub: "Birthday",
        videoId: "PNhRGh3TPlA",
      },
      {
        title: "Pre Birthday",
        sub: "Coming Soon",
        videoId: null,
      },
    ],
  },
  {
    category: "Engagement",
    items: [
      {
        title: "Engagement Video 1",
        sub: "Engagement",
        videoId: "Hfzk3JZEhOk",
      },
      {
        title: "Engagement Video 2",
        sub: "Engagement",
        videoId: "wQoc2rZq_Pk",
      },
    ],
  },
];

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-body mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Our <span className="text-gold-gradient italic">Work</span>
          </h2>
        </motion.div>

        {portfolioData.map((section, index) => (
          <div key={index} className="mb-20">

            <h3 className="font-display text-2xl md:text-3xl text-primary mb-10 border-l-4 border-primary pl-4">
              {section.category}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative group overflow-hidden rounded-lg aspect-video bg-secondary cursor-pointer"
                  onClick={() => item.videoId && setActiveVideo(item.videoId)}
                >
                  {item.videoId ? (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                          <Play className="w-5 h-5 text-white ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                      Coming Soon
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-primary text-xs uppercase tracking-widest mb-1">
                      {item.sub}
                    </p>
                    <h4 className="text-white text-lg">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setActiveVideo(null)}
          >
            <div className="w-[90%] md:w-[70%] aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
