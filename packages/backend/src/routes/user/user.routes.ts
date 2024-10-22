import { selectUserSchema } from '@/db/schema/users'
import { createRoute, z } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import { jsonContent } from 'stoker/openapi/helpers'

const tags = ['Users']

export const get = createRoute({
  path: '/user',
  method: 'get',
  summary: 'Get a user',
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(selectUserSchema, 'User information.'),
  },
})

export type GetUserRoute = typeof get
