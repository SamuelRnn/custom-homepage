import useClock from '@/hooks/useClock'

export default function Clock() {
	const clock = useClock()

	return (
		<>
			<div className="text-center select-none">
				<h1 className="text-2xl t-shadow">
					<span>{clock.getGreeting}, </span>
					Samuel
				</h1>
				<div className="-space-y-5">
					<p className="text-[90px]">{clock.getFormattedTime()}</p>
					<p className="text-2xl">{clock.getFormattedDate}</p>
				</div>
			</div>
		</>
	)
}
