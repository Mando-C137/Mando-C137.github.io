import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import { formatDates } from "../utils/getFormattedDate";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className=' relative snap-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[300px] md:w-[600px] xl:w-[900px] p-8 bg-[#292929] opacity-70 hover:opacity-100 focus:opacity-100 cursor-pointer 
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
        className=' aspect-square object-left rounded-full h-28  xl:[w-200px] xl:h-[200px] object-cover '
        src={urlFor(experience.companyImage).url()}></motion.img>

      <div className='px-0 md:px-10'>
        <h4 className=' text-2xl md:text-4xl font-light break-words'>{experience.jobTitle}</h4>
        <p className='font-bold text-xl md:text-3xl mt-1'>{experience.company}</p>
        <div className='flex flex-row space-x-2 my-2'>
          {experience.technologies.map((tech) => {
            return (
              <img
                className='h-10 w-10 rounded-full object-cover object-center'
                src={urlFor(tech.image).url()}
                alt={tech.title}
                key={tech._id}
              />
            );
          })}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {formatDates(
            experience.dateStarted,
            experience.dateEnded,
            experience.isCurrentlyWorkingHere
          )}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
