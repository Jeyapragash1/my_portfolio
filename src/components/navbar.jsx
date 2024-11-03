import { motion } from "framer-motion";
import logo from "../assets/j.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-transparent mb-20 flex items-center justify-between py-6 backdrop-blur-sm">
      {/* Animated Logo */}
      <motion.div
        className="flex flex-shrink-0 items-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logo} alt="Logo" className="w-17 h-12" />
      </motion.div>

      {/* Animated Social Icons */}
      <motion.div
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Individual icon hover animation */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
