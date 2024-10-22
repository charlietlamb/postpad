import { serve } from 'bun'
import app from './app'

const port = 8000

console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
