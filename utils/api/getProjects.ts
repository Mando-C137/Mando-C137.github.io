import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

const query = groq`*[_type == "project"] {...,technologies[]->}`;

type Data = {
  projects: Project[];
};

export default async function getProjects(
) {
  const projects: Project[] = await sanityClient.fetch(query);

  return projects;
}
