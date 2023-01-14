import { Experience, PageInfo, Project, Skill, Social } from "../typings";

const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  const data = await res.json();

  const skills: Skill[] = data.skills;

  return skills;
};

const fetchExperience = async (): Promise<Experience[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );

  const data = await res.json();

  const experiences: Experience[] = data.experiences;

  //   console.log("fetching", experiences);

  return experiences;
};

const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  const data = await res.json();

  const projects: Project[] = data.projects;

  //   console.log("fetching", experiences);

  return projects;
};

const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();

  const socials: Social[] = data.socials;

  //   console.log("fetching", experiences);

  return socials;
};

const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  //   console.log("fetching", experiences);

  return pageInfo;
};

export {
  fetchExperience,
  fetchPageInfo,
  fetchSkills,
  fetchProjects,
  fetchSocials,
};
