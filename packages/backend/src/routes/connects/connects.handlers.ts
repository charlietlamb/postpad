import * as HttpStatusCodes from 'stoker/http-status-codes'
import { GetConnectsRoute } from './connects.routes'
import { AppRouteHandler } from '@/lib/types'
import { db } from '@/db/postgres'
import { connects } from '@/db/schema/connects'
import { eq } from 'drizzle-orm'

export const get: AppRouteHandler<GetConnectsRoute> = async (c) => {
  return c.json(
    await db.query.connects.findMany({
      where: eq(connects.userId, c.req.param('userId')),
    }),
    HttpStatusCodes.OK
  )
}

export default get
