import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

const query = groq`*[_type == "experience"]{
  ...,technologies[]->
}`;

type Data = {
  experiences: Experience[];
};

export default async function getExperience(
) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  return experiences; 
}
