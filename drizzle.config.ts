import type { Config } from 'drizzle-kit'

export default {
	dialect: 'sqlite',
	driver: 'turso',
	schema: './db/schema.ts',
	out: './db/migrations',
	dbCredentials: {
		url: process.env.TURSO_DATABASE_URL as string,
		authToken: process.env.TURSO_AUTH_TOKEN as string
	}
} satisfies Config
