import {  defineCollection, z } from "astro:content";

const services = defineCollection({
    schema: z.object({
        order: z.number(),
        image: z.string(),
        title: z.string(),
        infose: z.string(),
        link: z.string(),
    })
})

export const collections = { services };
