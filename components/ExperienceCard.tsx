import React from "react";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className=' relative snap-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] p-10 bg-[#292929] opacity-40 hover:opacity-100 focus:opacity-100 cursor-pointer 
    overflow-auto overflow-y-auto overflow-x-hidden
   scrollbar-thin scrollbar-thumb-primary '>
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
        // className='w-32 h-3 rounded-full xl:[w-200px] xl:h-[200px] object-cover object-center'
        className=' max-h-[20%] aspect-square object-left rounded-full xl:[w-200px] xl:h-[200px] object-cover '
        src='/skills/unima.png'></motion.img>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Student</h4>
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
        <p className='uppercase py-5 text-gray-300'>08/19 - 07/22</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>
            Learned the basics of Comupter Science, datastructures and
            algoritihms etc..
          </li>
          <li>Learned the Java Programming Language intensively</li>
          <li>
            During free time, I also spent my time in Web development namely
            React
          </li>
          <li>
            During free time, I also spent my time in Web development namely
            React
          </li>
          <li>
            During free time, I also spent my time in Web development namely
            React
          </li>
          <li>
            During free time, I also spent my time in Web development namely
            React
          </li>
          <li>
            During free time, I also spent my time in Web development namely
            React
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
