import type { selectUserSchema } from '@backend/db/schema/users'
import type { selectConnectSchema } from '@backend/db/schema/connects'

declare global {
  type User = typeof selectUserSchema
  type Connect = typeof selectConnectSchema
}
