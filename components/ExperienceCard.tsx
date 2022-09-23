import React from "react";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className=' snap-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] p-10 bg-[#292929] opacity-40 hover:opacity-100 foucs:opacity-100 cursor-pointer'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className='w-32 h-32 rounded-full xl:[w-200px] xl:h-[200px] object-cover object-center'
        src='/hero.png'></motion.img>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>student Universität Mannheim</h4>
        <p className='font-bold text-3xl mt-1'>Universität Mannheim</p>
        <div className='flex flex-row space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full object-cover object-center'
            src='/hero.png'
            alt='myass'
          />

          <img
            className='h-10 w-10 rounded-full object-cover object-center'
            src='/hero.png'
            alt='myass'
          />
          <img
            className='h-10 w-10 rounded-full object-cover object-center'
            src='/hero.png'
            alt='myass'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started work - ended here
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>lol</li>
          <li>lol</li>
          <li>lol</li>
          <li>lol</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
