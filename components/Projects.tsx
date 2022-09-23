import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects: number[] = [1, 2, 3, 4, 5];

  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>
        Projects
      </h3>

      <div
        className='relative w-full flex overflow-x-scroll overflow-hidden snap-x
      snap-mandatory z-20
   
      scrollbar-thin
    scrollbar-track-gray-400/20
    scrollbar-thumb-primary/80'>
        {/* Projects */}
        {/* Projects */}
        {/* Projects */}

        {projects.map((project, i) => {
          return (
            <motion.div
              key={project}
              className=' relative w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                src='/hero.png'
                alt='my ass'
                className='h-32 w-32 rounded-full object-cover max-h-[50%]'
              />
              <div>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-primary/50'>
                    Case Study {i + 1} of {projects.length}:Uber Clone
                  </span>{" "}
                </h4>

                <p className='text-lg text-justify md:text-left'>
                  Uber Clone is basically the Front end of Uber remade while
                  having a look on the website. The website should actally just
                  feel like real uber while the whole functionality is not
                  included, of course. The backend stores also the data in case
                  a user registered a booking.
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className='w-full absolute top-[30%] bg-primary/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
};

export default Projects;
