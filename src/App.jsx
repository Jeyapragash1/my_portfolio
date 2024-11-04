import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  // Define more detailed animations for each section
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Refs for each section to track their view status
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const technologyRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Check if each section is in view
  const isHeroInView = useInView(heroRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isTechnologyInView = useInView(technologyRef, { once: true });
  const isProjectsInView = useInView(projectsRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Navbar with simple fade-in animation */}
        <motion.div initial="hidden" animate="visible" variants={scaleUp}>
          <Navbar />
        </motion.div>

        {/* Hero Section with slide-in-left animation */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          variants={slideInLeft}
        >
          <Hero />
        </motion.div>

        {/* About Section with scale-up animation */}
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
          variants={scaleUp}
        >
          <About />
        </motion.div>

        {/* Technology Section with rotate-in animation */}
        <motion.div
          ref={technologyRef}
          initial="hidden"
          animate={isTechnologyInView ? "visible" : "hidden"}
          variants={rotateIn}
        >
          <Technology />
        </motion.div>

        {/* Projects Section with slide-in-right animation */}
        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={isProjectsInView ? "visible" : "hidden"}
          variants={slideInRight}
        >
          <Projects />
        </motion.div>

        {/* Contact Section with scale-up animation */}
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={isContactInView ? "visible" : "hidden"}
          variants={scaleUp}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
