import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
};

const Skill = ({ skill }: Props) => {
  return (
    <motion.div
      className='group relative flex cursor-pointer max-h-fit max-w-fit'
      initial={{ y: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}>
      <img
        className='rounded-full object-cover w-24 h-24 border-gray-500
      xl:w-32 xl:h-32 md:h-28 md:w-28 filter group-hover:grayscale transition duration-300 ease-in-out'
        src={urlFor(skill.image).url()}
        alt={skill._id}
      />

      <div
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>
            {skill.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
