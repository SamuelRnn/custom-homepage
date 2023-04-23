import { useCallback, useEffect, useMemo, useState } from 'react'

export default function useClock() {
	const [currentTime, setCurrentTime] = useState(new Date())

	const getFormattedTime = useCallback(
		() =>
			currentTime.toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
			}),
		[currentTime]
	)

	const getFormattedDate = useMemo(() => {
		const date = currentTime.toLocaleDateString('en-US', {
			month: 'short',
			day: '2-digit',
			weekday: 'long',
		})
		const [dayName, month, day] = date.split(' ')

		return `${month} ${day} - ${dayName}`.replace(',', '')
	}, [currentTime])

	const getGreeting = useMemo(() => {
		const hour = currentTime.getHours()
		if (hour >= 5 && hour < 12) {
			return 'Good morning'
		} else if (hour >= 12 && hour < 18) {
			return 'Good afternoon'
		} else {
			return 'Good evening'
		}
	}, [currentTime])

	useEffect(() => {
		const id = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)
		return () => clearInterval(id)
	}, [])

	return {
		getFormattedTime,
		getFormattedDate,
		getGreeting,
	}
}
