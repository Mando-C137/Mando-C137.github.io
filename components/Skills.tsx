import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";
type Props = { skills: SkillType[] };

const Skills = ({ skills }: Props) => {
  return (
    <>
      <motion.div
        initial={{}}
        className="h-screen relative flex flex-col flex-shrink-0 gap-5
  text-center md:text-left  max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0
  mx-auto items-center"
      >
        <h3 className="mt-[90px] tracking-[20px] uppercase text-gray-500 text-2xl">
          Skills
        </h3>

        <h3 className=" tracking-[3px] mt-12 uppercase text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>

        <div className=" grid grid-cols-3 md:grid-cols-4 gap-5 mx-5 ">
          {skills.map((skill) => (
              <Skill skill={skill} key={skill._id}></Skill>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
