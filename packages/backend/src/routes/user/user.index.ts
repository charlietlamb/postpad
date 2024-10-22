import { createRouter } from '@/lib/create-app'
import * as handlers from './user.handlers'
import * as routes from './user.routes'

const router = createRouter().openapi(routes.get, handlers.get)

export default router
