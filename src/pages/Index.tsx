import {Header} from "../components/Header";
import {HeroCarousel} from "../components/HeroCarousel";
import {IntroSection} from "../components/IntroSection";
import { ProductsSection } from "../components/ProductsSection"; // Kept as named since your previous code used it this way
import {AboutSection} from "../components/AboutSection";
import {CaseStudiesSection} from "../components/CaseStudiesSection";
import {NewsSection} from "../components/NewsSection";
import {Footer} from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <IntroSection />
        <ProductsSection />
        <AboutSection />
        <CaseStudiesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
