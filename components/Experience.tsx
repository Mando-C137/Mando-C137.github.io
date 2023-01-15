import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
type Props = { experiences: Experience[] };

const Experience = ({ experiences }: Props) => {
  return (
    <motion.div
      className='h-screen flex relative overflow-hidden flex-col text-left 
      lg:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      <h3 className=' mt-16 tracking-[20px] uppercase text-gray-500 text-2xl z-20'>
        Experience
      </h3>

      <div
        className='w-full max-h-screen flex flex-row space-x-4 overflow-x-scroll p-10  snap-x snap-mandatory 
      scrollbar relative
      scrollbar-track-gray-400/20
      scrollbar-thumb-primary/80'>
        {experiences.map((exp) => (
          <ExperienceCard experience={exp} key={exp._id}></ExperienceCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
