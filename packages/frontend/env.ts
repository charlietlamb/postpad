import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    AUTH_SECRET: z.string(),
    AUTH_DRIZZLE_URL: z.string().url(),
    AUTH_RESEND_KEY: z.string(),
    UPLOADTHING_TOKEN: z.string(),
  },
  client: {
    NEXT_PUBLIC_LOCATION: z.string().url(),
    NEXT_PUBLIC_INSTAGRAM_APP_ID: z.string(),
    NEXT_PUBLIC_INSTAGRAM_REDIRECT_PATH: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_LOCATION: process.env.NEXT_PUBLIC_LOCATION,
    NEXT_PUBLIC_INSTAGRAM_APP_ID: process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID,
    NEXT_PUBLIC_INSTAGRAM_REDIRECT_PATH:
      process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_PATH,
  },
})

export default env
