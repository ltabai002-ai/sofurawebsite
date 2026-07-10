import { defineType, defineField } from "sanity";

export default defineType({
  name: "htmlEmbed",
  title: "HTML Embed",
  type: "object",
  fields: [
    defineField({
      name: "html",
      title: "HTML Code",
      type: "text",
      description: "Paste custom HTML, embeds, iframes, or scripts here.",
    }),
  ],
  preview: {
    select: {
      html: "html",
    },
    prepare({ html }: { html?: string }) {
      return {
        title: html ? html.slice(0, 50) + "..." : "Empty HTML Embed",
      };
    },
  },
});
