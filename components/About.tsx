import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly items-center '>
      <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl md:pl-20'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src='/hero.png'
        className='  -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
        object-cover 
        md:rounded-lg md:w-64 md:h-96
        xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-primary/80'>little</span>{" "}
          background
        </h4>

        <p className='text-base text-justify'>
          I´m Paul. I recently graduated from the Universität Mannheim and got
          my bacheor degree in Business Informatics (B.Sc.
          Wirtschaftsinformatik). While i studied, I discovered my passion for
          software development. No matter if it comes to frontend development or
          server-side applications I am very curious to learn the current
          state-of-the art frameworks. I am a bit experienced in the Java
          Programming language and the React framework. Currently I am learning
          as a trainee software developer for adesso SE where I learn a lot
          about the Spring Framework for Web application and the Angular
          Framwork for front-end. Besides programming I enjoy lifting weights a
          lot.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
