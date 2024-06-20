import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const checkIn = sqliteTable('check-in', {
	id: integer('id').primaryKey(),
	createdAt: text('createdAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	jointPain: text('joint-pain').notNull(),
	hemiplegia: text('hemiplegia').notNull(),
	fatigue: text('fatigue').notNull(),
	lightSensitivity: text('light-sensitivity').notNull(),
	numbnessTingling: text('numbness-tingling').notNull(),
	brainFog: text('brain-fog').notNull(),
	facialPain: text('facial-pain').notNull(),
	muscleSpasms: text('muscle-spasms').notNull(),
	onsetTime: text('onset-time').notNull(),
	bleeding: text('bleeding').notNull(),
	foods: text('foods'), // This is an array of strings
	sleep: text('sleep').notNull(),
	water: text('water').notNull(),
	emotionalStress: text('emotional-stress').notNull(), // Maybe this should be a boolean?
	notes: text('notes')
})
