import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      description,
      thumbnail {alt, "image": asset->url},
      repoLink,
      projectLink,
      techList,
    }`
  );
}
