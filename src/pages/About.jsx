import AboutCTA from "../components/aboutCTA/AboutCTA";
import AboutSection from "../components/aboutSection/AboutSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/navBar/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <AboutCTA />
      <Footer />
    </>
  );
}

export default About;
