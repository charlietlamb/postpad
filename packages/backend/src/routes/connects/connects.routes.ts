import { selectConnectSchema } from '@/db/schema/connects'
import { createRoute, z } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import { jsonContent } from 'stoker/openapi/helpers'

const tags = ['Users']

export const get = createRoute({
  path: '/connects/:userId',
  method: 'get',
  summary: 'Get a users connects',
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(selectConnectSchema),
      'Connect information.'
    ),
  },
})

export type GetConnectsRoute = typeof get
