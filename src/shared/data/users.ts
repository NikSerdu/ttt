import { generateRandomMetrics } from '../../utils/generateRandomMetrics'
import { UserMetrics } from '../types/userMetrics.type'

const generateRandomUsers = (count: number): UserMetrics[] => {
	return Array.from({ length: count }, generateRandomMetrics)
}

export const randomUsers = generateRandomUsers(5)
