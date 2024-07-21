import { client } from "@/sanity/lib/client";


export const fetchProjects = async () => {
  const query = `*[_type == "project"]{
    title,
    slug,
    description,
    mainImage,
    categories[]->{
      title
    },
    tags,
    location
  }`;
  return await client.fetch(query);
};
