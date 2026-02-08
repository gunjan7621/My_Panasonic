import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import productCamera from "../assets/card1.png";
import productNvr from "../assets/card2.png";
import productSoftware from "../assets/card3.png";

const products = [
  {
    id: 1,
    title: "Surveillance Cameras",
    description: "Panasonic has commercial cameras for every user's needs, pick the product that is best suited to your needs.",
    image: productCamera,
    link: "#cameras",
  },
  {
    id: 2,
    title: "Network Video Recorders",
    description: "Panasonic has a wide range of Network video recorders, choose the one that is right for you.",
    image: productNvr,
    link: "#nvr",
  },
  {
    id: 3,
    title: "Security Solutions",
    description: "Panasonic offers video surveillance system & VMS solution that can fully integrate your security infrastructure.",
    image: productSoftware,
    link: "#solutions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-secondary">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          END-TO-END SECURITY SOLUTIONS
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="card-product group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
                >
                  KNOW MORE
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
