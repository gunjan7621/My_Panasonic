import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-xl overflow-hidden bg-navy shadow-2xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-navy/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy to-transparent">
              <p className="text-primary-foreground text-sm font-medium">Watch Video</p>
              <p className="text-primary-foreground/70 text-xs">Learn about our security solutions</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm text-primary font-semibold tracking-wide mb-2">
              ABOUT PANASONIC SECURITY SOLUTIONS
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Industry-Leading CCTV Security Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Panasonic Security provides industry-leading CCTV security solutions to 
              capture, record, manage and analyse surveillance video. We offer a complete 
              and comprehensive line-up of video surveillance products and solutions with 
              the industry's highest image quality, mission-critical reliability and lowest 
              total cost.
            </p>
            <a
  href="#about" // Change from "#" to a valid ID or "/"
  className="inline-flex items-center gap-2 btn-outline"
>
  Know More
</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
