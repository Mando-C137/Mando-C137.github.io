import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = { socials: Social[] };

function Header({ socials }: Props) {
  return (
    <header className='fixed top-0 pt-5 px-10 flex items-start justify-between mx-auto z-20 w-screen'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center xl:items-center'>
        {/* social icon */}

        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
          url='#contact'
        />

        <p className='hidden  uppercase  md:inline-flex text-sm text-gray-400 pr-4 lg:pr-0'>
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
