import createApp from '@/lib/create-app'
import configureOpenAPI from '@/lib/configure-open-api'
import index from '@/routes/index.route'
import users from '@/routes/user/user.index'
import connects from '@/routes/connects/connects.index'

const app = createApp()

const routes = [index, users, connects] as const

configureOpenAPI(app)

routes.forEach((route) => {
  app.route('/', route)
})

export default app

export type AppType = (typeof routes)[number]
