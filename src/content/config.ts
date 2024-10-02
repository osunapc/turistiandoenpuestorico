import {  defineCollection, z } from "astro:content";

const services = defineCollection({
    schema: z.object({
        image: z.string(),
        title: z.string(),
        infose: z.string(),
    })
})

export const collections = { services };
