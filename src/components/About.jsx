import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        {/* Animated Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex items-center justify-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </motion.div>
        </div>

        {/* Animated Text */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
