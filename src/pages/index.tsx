import background from '../../public/background.webp'
import Image from 'next/image'
import { Clock, Tabs } from '@/components'

export default function Home() {
	return (
		<>
			<Image
				src={background}
				alt="background image"
				priority
				className="h-full fixed object-cover -z-10 scale-105 -left-3"
			/>
			<div className="fixed min-h-screen h-full w-full pt-24 pb-12 bg-black/30 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-[#111]">
				<Clock />
				<Tabs />
			</div>
		</>
	)
}
