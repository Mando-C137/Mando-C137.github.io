import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Paul Heisner",
      "GuyWhoLovesLifting.tsx",
      "<But loves to code more/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='/hero.png'
        alt='my ass standing there'
      />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 '>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#59e6e9'></Cursor>
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#Project'>
            <button className='heroButton'>Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
