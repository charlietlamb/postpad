import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z, ZodError } from 'zod'

expand(config())

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(8000),
  LOG_LEVEL: z
    .enum(['debug', 'info', 'warn', 'error', 'fatal', 'trace'])
    .default('info'),
  DATABASE_URL: z.string().url(),
})

export type Env = z.infer<typeof EnvSchema>

let env: Env

try {
  env = EnvSchema.parse(process.env)
} catch (e) {
  const error = e as ZodError
  console.error('Invalid environment variables:')
  console.error(error.flatten().fieldErrors)
  process.exit(1)
}
env = EnvSchema.parse(process.env)

export default env
