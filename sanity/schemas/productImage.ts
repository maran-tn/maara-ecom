import { ImImages } from "react-icons/im";
import { defineField, defineType } from "sanity";
import supportedLanguages from "../locale/suporrtedLangu";

const baseLanguage = supportedLanguages.find((l) => l.isDefault) || supportedLanguages[0];

export default defineType({
  name: "productImage",
  title: "Product Image",
  description: "A list of product images",
  type: "document",
  icon: ImImages,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("A name is required")
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "image",
      validation: (rule) => rule.required().error("One or more images are required")
    })
  ],

  preview: {
    select: {
      title: `name.${baseLanguage.id}`,
      media: "images"
    }
  }
});