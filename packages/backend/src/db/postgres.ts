import env from '../env'
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'
export const db = drizzle(env.DATABASE_URL ?? 'undefined-db-url', { schema })
