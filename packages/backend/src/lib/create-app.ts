import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'
import { pinoLogger } from '@/middleware/pino-logger'
import { AppBindings } from './types'
import defaultHook from 'stoker/openapi/default-hook'

export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false })
}

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>({ strict: false, defaultHook })

  app.use(pinoLogger())
  app.use(serveEmojiFavicon('🔥'))

  app.notFound(notFound)
  app.onError(onError)

  return app
}
