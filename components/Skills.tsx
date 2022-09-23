import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

const Skills = (props: Props) => {
  const paths = [
    "/skills/angular.png",
    "/skills/Java.png",
    "/skills/mysql.jpg",
    "/skills/react.png",
    "/skills/spring.png",
    "/skills/spring.png",
    "/skills/Uni_Mannheim_Siegel.png",
  ];

  return (
    <>
      <motion.div
        initial={{}}
        className='h-screen relative flex flex-col
  text-center md:text-left
  xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0
  mx-auto items-center justify-center '>
        <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>
          Skills
        </h3>

        <h3 className='absolute top-36 tracking-[3px] uppercase text-gray-500 text-sm'>
          Hover over a skill for current proficiency
        </h3>

        <div className=' grid grid-cols-4 gap-5 '>
          {paths.map((path, i) => (
            <Skill path={path} key={i}></Skill>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
