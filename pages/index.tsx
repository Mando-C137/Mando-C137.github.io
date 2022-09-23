import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <div
      className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll  overflow-x-hidden
    scrollbar 
    scrollbar-track-gray-400/20
    scrollbar-thumb-primary/80
    z-0 '>
      <Head>
        <title>Pauls Portfolio</title>
      </Head>

      <Header></Header>

      <section id='hero' className='snap-start'>
        <Hero></Hero>
      </section>

      {/* About*/}
      <section id='about' className='snap-center'>
        <About></About>
      </section>
      <section id='experience' className='snap-center'>
        <Experience></Experience>
      </section>
      {/* Contacts*/}

      {/* Skills*/}

      <section id='skills' className='snap-start'>
        <Skills></Skills>
      </section>

      {/* Projects*/}

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact*/}

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      {/* <h1 className='text-blue-500'>Lets build an amazing portfolio</h1> */}

      <Link href='#hero'>
        <footer className='sticky bottom-2 w-full cursor-pointer '>
          <div className=' relative flex items-end  justify-end px-6'>
            <div className='absolute border h-6 w-6 rounded-full hover:bg-primary/80'></div>
            <ArrowUpIcon className='h-6 w-6 ' />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
