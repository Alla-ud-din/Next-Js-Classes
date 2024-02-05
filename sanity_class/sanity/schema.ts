import { type SchemaTypeDefinition } from 'sanity'

// schemas/pet.js
const pet= {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the blog Post'
    },
    {
      name: "summary",
      type: "text",
      title: "Summary",
      description: "Summary of the blog Post"
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block"}]
    },
    {
      title: "image",
      type: "string",
      name: "Image",
      options: {
        hotspot: true,
      },
    },
  ],
};

// import blockContent from './schemas/blockContent'
// import category from './schemas/category'
// import post from './schemas/post'
// import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet],
}

