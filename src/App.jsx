import { motion } from "framer-motion"; // Import framer-motion
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  // Define animation variants for each section
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] min-h-screen">
      <div className="container mx-auto px-8">
        {/* Add framer-motion animations for each section */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Navbar />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Hero />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <About />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Technology />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Projects />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Contact />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
