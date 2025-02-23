import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    description: z.string().min(1),
    keywords: z.string().min(1),
    published: z.boolean(),
    publishedDate: z.string().min(1),
    bannerImage: image(),
    by: z.string().min(1),
    author_username: z.string().min(1)
  }),
  loader: glob({ pattern: "**/*.mdx", base: "./posts" }), 
});

export const collections = {
    posts: postCollection,
};