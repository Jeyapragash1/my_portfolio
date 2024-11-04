import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='border-b border-neutral-900 pb-8'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='my-20 text-center text-5xl font-extrabold text-purple-600'
      >
        Projects
      </motion.h1>

      <div className='flex flex-wrap justify-center'>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className='m-4 max-w-sm rounded-lg border border-transparent shadow-lg transition-transform transform'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              background: 'linear-gradient(135deg, #6C63FF, #E2E2E2)', // Gradient background
            }}
            whileHover={{
              scale: 1.05,
              rotate: mousePosition.x % 5, // Rotate slightly based on mouse position
              transition: { duration: 0.3 },
            }}
            onMouseMove={() => {
              // This will trigger the hover effect
              if (mousePosition.x) return;
            }}
          >
            <div className="relative">
              <motion.img
                src={project.image}
                alt={project.title}
                className='h-48 w-full rounded-t-lg object-cover brightness-75' // Decreased brightness
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
              {/* Buttons Container */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.demoLink} // Assume demoLink is defined in the project data
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 rounded-full px-4 py-2 text-lg font-medium text-white shadow transition duration-200"
                  style={{
                    background: 'linear-gradient(90deg, #4CAF50, #8BC34A)', // Gradient for Demo button
                  }}
                >
                  Demo
                </a>
                <a
                  href={project.sourceLink} // Assume sourceLink is defined in the project data
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 rounded-full px-4 py-2 text-lg font-medium text-white shadow transition duration-200"
                  style={{
                    background: 'linear-gradient(90deg, #2196F3, #21CBF3)', // Gradient for Source button
                  }}
                >
                  Source
                </a>
              </div>
            </div>

            <div className='p-4'>
              <motion.h6
                className='mb-2 text-xl font-bold text-white'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {project.title}
              </motion.h6>

              <motion.p
                className='mb-4 text-neutral-300' // Changed to a lighter gray for better contrast
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                {project.description}
              </motion.p>

              <div className='flex flex-wrap'>
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className='mr-2 mb-2 rounded bg-purple-600 px-3 py-1 text-sm font-medium text-white shadow'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.5 + techIndex * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
