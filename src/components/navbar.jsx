import { motion } from "framer-motion";
import logo from "../assets/j.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent flex items-center justify-between py-4 px-6 backdrop-blur-md">
      {/* Animated Logo */}
      <motion.div
        className="flex items-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12, duration: 0.6 }}
      >
        <img src={logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        className="hidden md:flex gap-6 text-lg text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </motion.div>

      {/* Animated Social Icons */}
      <motion.div
        className="flex items-center gap-4 text-xl md:text-2xl m-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Individual icon hover animation */}
        {[
          { icon: FaLinkedin, link: "https://www.linkedin.com/in/jeya-pragash-163355266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
          { icon: FaGithub, link: "https://github.com/Jeyapragash1" },
          { icon: FaTwitter, link: "https://x.com/JeyaPragash015" },
          { icon: FaInstagram, link: "#" },
        ].map(({ icon: Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            className="text-white hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.3, rotate: 15 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
