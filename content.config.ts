import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    albums: defineCollection({
      type: 'data',
      source: 'albums/**.json',
      schema: z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
        releaseDate: z.string(),
        published: z.boolean(),
        image: z.object({
          src: z.string(),
          alt: z.string()
        }),
        video: z.object({
          src: z.string(),
          mp4: z.string(),
          alt: z.string()
        }).nullable(),
        notes: z.string(),
        songs: z.array(z.object({
          name: z.string(),
          links: z.array(z.object({
            source: z.string(),
            link: z.string()
          })),
          audio: z.object({
            src: z.string(),
            title: z.string()
          })
        }))
      })
    }),
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