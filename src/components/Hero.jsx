import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/dest.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pt-20 lg:pt-28"> {/* Added top padding here */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="pt-10"> {/* Additional padding to ensure separation */}
              {/* Animated Heading */}
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pb-10 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl"
              >
                Jeyapragash
              </motion.h1>
            </div>

            {/* Animated Subtitle */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            {/* Animated Paragraph */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Simplified Full-Image Style */}
        <div className="w-full lg:w-1/2 lg:p-10 flex justify-center items-center">
          <motion.img
            src={profilePic}
            alt="Jeyapragash"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="max-w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
