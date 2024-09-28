import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const genres = sqliteTable('genres', {
  genreId: integer('GenreId').primaryKey(),
  name: text('Name', { length: 120 }).notNull()
});
