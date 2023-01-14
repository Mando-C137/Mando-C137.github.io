import { ArrowUpIcon } from "@heroicons/react/24/solid";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import {
  Experience as ExperienceType,
  PageInfo,
  Project,
  Skill,
  Social
} from "../typings";
import {
  fetchExperience,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials
} from "../utils/fetchAPI";

type Props = {
  pageInfo: PageInfo;
  experiences: ExperienceType[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ experiences, pageInfo, projects, skills, socials }: Props) => {
  return (
    <div
      className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory mt-0 
    overflow-y-scroll  overflow-x-hidden
    scrollbar 
    scrollbar-track-gray-400/20
    scrollbar-thumb-primary/80
    z-0 '>
      <Head>
        <title>Pauls Portfolio</title>
      </Head>

      <Header socials={socials}></Header>

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}></Hero>
      </section>

      
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}></About>
      </section>
      <section id='experience' className='snap-center'>
        <Experience experiences={experiences}></Experience>
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills}></Skills>
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe pageInfo={pageInfo} />
      </section> 

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  const experiences: ExperienceType[] = await fetchExperience();

  const projects: Project[] = await fetchProjects();

  const socials: Social[] = await fetchSocials();

  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      socials,
      skills,
    },
    revalidate: 50,
  };
};
