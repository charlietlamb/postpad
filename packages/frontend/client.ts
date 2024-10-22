import type { AppType } from '../backend/src/app'
import { hc } from 'hono/client'

const client = hc<AppType>('http://localhost:8000')

export default client
