import type { selectUserSchema } from '@backend/db/schema/users'
import type { selectConnectSchema } from '@backend/db/schema/connects'
import type { PostpadApi } from '@backend/app'

declare global {
  type User = typeof selectUserSchema
  type Connect = typeof selectConnectSchema
}
