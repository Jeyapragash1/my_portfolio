import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }} // Start hidden above
        animate={{ opacity: 1, y: 0 }} // Animate to visible position
        transition={{ duration: 0.5 }} // Animation duration
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="text-center tracking-tighter">
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Start hidden below
          animate={{ opacity: 1, y: 0 }} // Animate to visible position
          transition={{ duration: 0.5, delay: 0.2 }} // Animation with a delay
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }} // Start hidden below
          animate={{ opacity: 1, y: 0 }} // Animate to visible position
          transition={{ duration: 0.5, delay: 0.4 }} // Animation with a delay
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }} // Start hidden below
          animate={{ opacity: 1, y: 0 }} // Animate to visible position
          transition={{ duration: 0.5, delay: 0.6 }} // Animation with a delay
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
