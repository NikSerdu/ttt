import { UserMetrics } from '../shared/types/userMetrics.type'

export const generateRandomMetrics = (): UserMetrics => {
	const randomScore = (min: number, max: number) =>
		+(Math.random() * (max - min) + min).toFixed(2)

	return {
		id: Math.floor(Math.random() * 10000),
		username: `User${Math.floor(Math.random() * 1000)}`,
		metrics: {
			activity: randomScore(0, 1),
			positivity: randomScore(0, 1),
			frequency: randomScore(0, 1),
			violations: randomScore(0, 1),
			toxicity: randomScore(0, 1),
			curiosity: randomScore(0, 1),
			responsiveness: randomScore(0, 1),
		},
	}
}
