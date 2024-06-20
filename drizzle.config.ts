import type { Config } from 'drizzle-kit'

export default {
	dialect: 'sqlite',
	driver: 'turso',
	schema: './db/schema.ts',
	out: './db/migrations'
} satisfies Config
