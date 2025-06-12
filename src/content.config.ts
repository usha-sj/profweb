import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for the blog collection
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    readingTime: z.number().optional(),
  }),
});

// Register the collection
export const collections = {
  posts: postsCollection,
};
