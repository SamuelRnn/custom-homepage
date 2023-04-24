import { TabsState } from '@/types'

export function getLocalTabs() {
	return JSON.parse(window?.localStorage.getItem('tabs') ?? '[]')
}
export function setLocalTabs(data: TabsState[]): void {
	window.localStorage.setItem('tabs', JSON.stringify(data))
}
