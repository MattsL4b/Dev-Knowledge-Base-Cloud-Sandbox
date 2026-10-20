import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        category: z.enum(['architecture', 'devops', 'linux', 'cloudflare']),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        })
})

export const collections = { docs };