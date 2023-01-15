import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import getExperience from "./api/getExperience";
import getPageInfo from "./api/getPageInfo";
import getProjects from "./api/getProjects";
import getSkills from "./api/getSkills";
import getSocials from "./api/getSocials";

const fetchSkills = async () : Promise<Skill[]> => {
  const res = await getSkills();

  return res;
};

const fetchExperience = async (): Promise<Experience[]> => {
  const res = await getExperience();

  return res;
};

const fetchProjects = async (): Promise<Project[]> => {
  const res = await getProjects();

  return res;
};

const fetchSocials = async (): Promise<Social[]> => {
  const res = await getSocials();

  return res;
};

const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await getPageInfo();

  return res;
};

export {
  fetchExperience,
  fetchPageInfo,
  fetchSkills,
  fetchProjects,
  fetchSocials,
};

