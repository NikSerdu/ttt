import { create } from 'zustand'

interface TypingState {
	activeMenuId: number
	setActiveMenuId: (id: number) => void
}

export const useMenuStore = create<TypingState>(set => ({
	activeMenuId: 0,
	setActiveMenuId: id => set(() => ({ activeMenuId: id })),
}))
