import FeaturesStrip from "../components/FeaturesStrip/FeaturesStrip";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Hero from "../components/Home/Hero";
import Footer from "../components/layout/Footer";
import Navbar from "../components/navBar/Navbar";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default Home;
