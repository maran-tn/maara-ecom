import { type SchemaTypeDefinition } from "sanity";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";
import { comment } from "./schemas/comment";
import profile from "./schemas/profile";
import services from "./schemas/services";
import skills from "./schemas/skills";
import project from "./schemas/projects";
import category from "./schemas/category";
import size from "./schemas/size";
import variant from "./schemas/variant";
import productImage from "./schemas/productImage";
import catelog from "./schemas/catelog";
import taxonomy from "./schemas/taxonomy";
import taxon from "./schemas/taxon";
import product from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, comment, profile, services, skills, project, product, size,
    variant, productImage, catelog,  category, taxonomy, taxon],
};
