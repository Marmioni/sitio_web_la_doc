import { defineCollection, z } from "astro:content";

const books = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    kind: z.enum(["Book", "Short Story"]),
    year: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
  }),
});

const media = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    url: z.string(),
    image: z.string(),
  }),
});

export const collections = { books, media };
