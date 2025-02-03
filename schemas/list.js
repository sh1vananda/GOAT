export default {
  name: "list",
  title: "Editorial List",
  type: "document",
  fields: [
    {
      name: "title",
      title: "List Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "items",
      title: "List Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "image", type: "image" },
            { name: "link", type: "url" },
          ],
        },
      ],
    },
  ],
};
