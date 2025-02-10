import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    events: defineCollection({
      type: 'data',
      source: 'events/**.json',
      schema: z.object({
        slug: z.string(),
        name: z.string(),
        date: z.string(),
        time: z.string(),
        location: z.string(),
        venue: z.string(),
        venueLink: z.string(),
        eventLink: z.string(),
        artists: z.string().optional(),
        body: z.string().optional(),
        image: z.object({
          src: z.string(),
          alt: z.string()
        })
      })
    }),
    albums: defineCollection({
      type: 'data',
      source: 'albums/**.json',
      schema: z.object({
        slug: z.string(),
        name: z.string(),
        releaseDate: z.string(),
        image: z.object({
          src: z.string(),
          alt: z.string()
        }),
        video: z.object({
          src: z.string().optional(),
          mp4: z.string().optional()
        }).optional()
      })
    }),
    photos: defineCollection({
      type: 'data',
      source: 'photos.json',
      schema: z.object({
        images: z.array(
          z.object({
            src: z.string(),
            alt: z.string(),
            width: z.number(),
            height: z.number()
          })
        )
      })
    })
  }
})