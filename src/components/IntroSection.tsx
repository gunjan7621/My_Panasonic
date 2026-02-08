import { motion } from "framer-motion";

export const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mb-6"
        >
          SECURITY WITHOUT COMPROMISE
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle"
        >
          Panasonic security solution offers a wide range of commercial and business 
          security system & Smart AI surveillance camera with various functions to meet 
          diverse customer needs. We provide optimal products for various purposes and 
          applications to help create safe environments. When it counts, you can count on 
          Panasonic Security solutions to deliver.
        </motion.p>
      </div>
    </section>
  );
};
