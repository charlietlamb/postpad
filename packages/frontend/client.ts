import { hc } from 'hono/client'
import type { AppType } from '../backend/src/app'

const client = hc<AppType>('http://localhost:8000')

export default client
