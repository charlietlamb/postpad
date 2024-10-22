import { createRouter } from '@/lib/create-app'
import * as routes from './connects.routes'
import * as handlers from './connects.handlers'

const router = createRouter().openapi(routes.get, handlers.get)

export default router
