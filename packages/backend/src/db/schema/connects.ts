import { pgTable, text, uuid } from 'drizzle-orm/pg-core'
import { timestamps } from './columns.helpers'
import { users } from './users'
import { createSelectSchema } from 'drizzle-zod'

export const connects = pgTable('connects', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  userId: uuid('userId')
    .references(() => users.id)
    .notNull(),
  platform: text('platform').notNull(),
  username: text('username').notNull(),
  image: text('image'),
  ...timestamps,
})

export const selectConnectSchema = createSelectSchema(connects)
