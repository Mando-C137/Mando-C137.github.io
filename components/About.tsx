import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly items-center '>
      <h3 className='md:absolute md:top-24 px-3 md:mt-auto mt-20 tracking-[20px] uppercase text-gray-500 text-2xl md:pl-20'>
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
        src={urlFor(pageInfo?.ProfilePic).url()}
        className=' md:mb-0 flex-shrink-0 w-24 h-24 rounded-full 
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
          {pageInfo.BackgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
