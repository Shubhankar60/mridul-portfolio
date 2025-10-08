import About from "./components/About";
import Contact from "./components/contact";
import Hero from "./components/hero";
import ServicesSection from "./components/ServicesSection";
import ShowreelSection from "./components/ShowreelSection";
import TestimonialSection from "./components/TestimonialSection";
import SocialMediaSection from "./components/SocialMediaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <About/>
      <ShowreelSection/>
      <ServicesSection/>
      <TestimonialSection/>
      <Contact/>
      <SocialMediaSection />
       <Footer />
    </>
  );
}

export default App;
