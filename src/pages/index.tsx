import { Clock, Tabs } from '@/components'

export default function Home() {
	return (
		<>
			<div className="fixed min-h-screen h-full w-full pt-24 pb-12 bg-black/30 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-[#111]">
				<Clock />
				<Tabs />
			</div>
		</>
	)
}
