import * as HttpStatusCodes from 'stoker/http-status-codes'
import { GetUserRoute } from './user.routes'
import { AppRouteHandler } from '@/lib/types'
import { db } from '@/db/postgres'

export const get: AppRouteHandler<GetUserRoute> = async (c) => {
  return c.json(await db.query.users.findFirst(), HttpStatusCodes.OK)
}

export default get
