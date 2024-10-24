import { integer, pgTable, text, uuid } from 'drizzle-orm/pg-core'
import { createSelectSchema } from 'drizzle-zod'
import { timestamps } from './columns.helpers'

export const media = pgTable('media', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  url: text('url').notNull(),
  title: text('title'),
  description: text('description'),
  type: text('type').notNull(),
  size: integer('size').notNull(),
  ...timestamps,
})

export const selectMediaSchema = createSelectSchema(media)
