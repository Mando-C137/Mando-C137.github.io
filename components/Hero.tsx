import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo.name}`,
      "GuyWhoLovesLifting.tsx",
      "<But loves to code more/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center break-all p-0'>
       <BackgroundCircles/>
      <img
        className='relative rounded-full h-32 w-32 md:h-32 md:w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()}
        alt='my ass standing there'
      />

      <div className='z-20 flex flex-col flex-nowrap md:gap-4'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px] break-words'>
          {pageInfo.role}
        </h2>
        <h1 className='text-5xl h-20 lg:h-auto lg:text-6xl font-semibold px-10 overflow-ellipsis'>
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
    </>
  );
}

export default Hero;
