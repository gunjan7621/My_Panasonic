import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "i-PRO Shares Privacy Tips for International Data Privacy Day 2024...",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "ChatGPT in Security – Will It Put Us All Out of a Job?...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "AI-Powered Security by Panasonic Security Integrated Group.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    link: "#",
  },
];

export const NewsSection = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          News & Blogs
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a href={item.link} className="block">
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                  KNOW MORE
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
