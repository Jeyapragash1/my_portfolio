import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className='mb-8 flex flex-wrap lg:justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className='w-full lg:w-1/4'>
              <motion.img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className='mb-6 rounded'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            </div>

            <div className='w-full max-w-xl lg:w-3/4'>
              <motion.h6
                className='mb-2 font-semibold'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {project.title}
              </motion.h6>

              <motion.p
                className='mb-4 text-neutral-400'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                {project.description}
              </motion.p>

              <div>
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'
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
