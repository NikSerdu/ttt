export interface UserMetrics {
	id: number
	username: string
	metrics: {
		activity: number // Активность
		positivity: number // Позитивность
		frequency: number // Частота сообщений (флудер)
		violations: number // Нарушения правил
		toxicity: number // Токсичность
		curiosity: number // Любопытство
		responsiveness: number // Отзывчивость
	}
}
