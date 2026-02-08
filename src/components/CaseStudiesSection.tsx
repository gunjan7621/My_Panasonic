import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import caseStudy1 from "../assets/cs1.jpg";
import caseStudy2 from "../assets/cs2.jpg";
import caseStudy3 from "../assets/cs3.jpg";
const caseStudies = [
  {
    id: 1,
    image: caseStudy1,
    title: "HQ of Leading Manufacturers of Pharmaceutical",
    description: "Panasonic security solution offered solutions including smart and reliable surveillance cameras integrated with advanced CMS software.",
    link: "#",
  },
  {
    id: 2,
    image: caseStudy2,
    title: "Corporate Office of Leading Technology Company",
    description: "An integrated solution incorporating both hardware and software, as well as real-time incident detection and AI.",
    link: "#",
  },
  {
    id: 3,
    image: caseStudy3,
    title: "Enhancing Safety of India's Longest Highway Tunnel",
    description: "Integrated solution of highly reliable vehicle incident detection for enhanced road safety.",
    link: "#",
  },
];

export const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-secondary">
      <div className="section-container">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            CASE STUDIES
          </motion.h2>
          
          <div className="hidden md:flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3 bg-background rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-background rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-product group overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {study.description}
                </p>
                <a
                  href={study.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-4 transition-all duration-300"
                >
                  KNOW MORE
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="card-product group overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={caseStudies[currentIndex].image}
                  alt={caseStudies[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {caseStudies[currentIndex].title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {caseStudies[currentIndex].description}
                </p>
                <a
                  href={caseStudies[currentIndex].link}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
                >
                  KNOW MORE
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
