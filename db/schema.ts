import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const checkIn = sqliteTable('check-in', {
	id: integer('id').primaryKey(),
	createdAt: text('createdAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	jointPain: text('joint-pain'),
	hemiplegia: text('hemiplegia'),
	fatigue: text('fatigue'),
	lightSensitivity: text('light-sensitivity'),
	numbnessTingling: text('numbness-tingling'),
	brainFog: text('brain-fog'),
	facialPain: text('facial-pain'),
	muscleSpasms: text('muscle-spasms'),
	onsetTime: text('onset-time'),
	bleeding: text('bleeding'),
	foods: text('foods'), // This is an array of strings
	sleep: integer('sleep').notNull(),
	water: text('water').notNull(),
	emotionalStress: text('emotional-stress').notNull(), // Maybe this should be a boolean?
	notes: text('notes')
})
