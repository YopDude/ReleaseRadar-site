import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
    group: z.string().optional(),
  }),
});

const patchNotes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    version: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  docs,
  "patch-notes": patchNotes,
};
