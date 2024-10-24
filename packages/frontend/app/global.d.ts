import type { selectUserSchema } from '../../backend/src/db/schema/users'
import type { selectConnectSchema } from '../../backend/src/db/schema/connects'

declare global {
  type User = typeof selectUserSchema
  type Connect = typeof selectConnectSchema
}
