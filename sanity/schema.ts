import { type SchemaTypeDefinition } from "sanity";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";
import { comment } from "./schemas/comment";
import profile from "./schemas/profile";
import services from "./schemas/services";
import skills from "./schemas/skills";
import project from "./schemas/projects";
import category from "./schemas/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, comment, profile, services, skills, project, category],
};
