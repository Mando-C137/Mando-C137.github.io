import React from "react";
import { motion } from "framer-motion";

type Props = {
  path: string;
};

const Skill = ({ path }: Props) => {
  return (
    <motion.div
      className='group relative flex cursor-pointer'
      initial={{ y: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}>
      <img
        className='rounded-full object-cover w-24 h-24 border-gray-500
      xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src={path}
      />

      <div
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
