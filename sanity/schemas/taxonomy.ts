import { ImUngroup } from "react-icons/im";
import { defineField, defineType } from "sanity";
import supportedLanguages from "../locale/suporrtedLangu";

const baseLanguage = supportedLanguages.find((l) => l.isDefault) || supportedLanguages[0];

export default defineType({
  name: "taxonomy",
  title: "Taxonomy",
  description: "",
  type: "document",
  icon: ImUngroup,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("A name is required")
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string"
    }),
    defineField({
      name: "taxons",
      title: "Taxons",
      type: "array",
      validation: (rule) => rule.required().error("One or more taxons are required"),
      of: [
        {
          type: "reference",
          to: {
            type: "taxon"
          }
        }
      ]
    })
  ],

  preview: {
    select: {
      title: `name.${baseLanguage.id}`
    }
  }
});