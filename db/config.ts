import { column, defineDb, defineTable, NOW } from 'astro:db'

// jointPain: z.string({ message: 'Please select a joint pain level' }),
// hymiplegia: z.string(),
// fatigue: z.string({ message: 'Please select a fatigue level' }),
// lightSensitivity: z.string({ message: 'Please select a light sensitivity level' }),
// numbnessTingling: z.string({ message: 'Please select a numbness/tingling level' }),
// brainFog: z.string({ message: 'Please select a brain fog level' }),
// facialPain: z.string({ message: 'Please select a facial pain level' }),
// muscleSpasms: z.string({ message: 'Please select a muscle spasm level' }),
// onsetTime: z.string({ message: 'Please select an onset time' }),
// bleeding: z.string({ message: 'Please select a bleeding level' }),
// foods: z.array(z.string()).optional(),
// sleep: z.string({ message: 'Please give the hours of sleep you had last night' }),
// water: z.string({ message: 'Please select a water level' }),
// emotionalStress: z.string({ message: 'Please select one' }),
// notes: z.string().optional()

const Check = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		createdAt: column.date({ default: NOW }),
		jointPain: column.text(),
		hymiplegia: column.text(),
		fatigue: column.text(),
		lightSensitivity: column.text(),
		numbnessTingling: column.text(),
		brainFog: column.text(),
		facialPain: column.text(),
		muscleSpasms: column.text(),
		onsetTime: column.text(),
		bleeding: column.text(),
		foods: column.text({ optional: true }), // This is an array of strings
		sleep: column.text(),
		water: column.text(),
		emotionalStress: column.text(), // Maybe this should be a boolean?
		notes: column.text({ optional: true })
	}
})

// https://astro.build/db/config
export default defineDb({
	tables: { Check }
})
