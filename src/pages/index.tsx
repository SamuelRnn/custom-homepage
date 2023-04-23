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
				className="h-full fixed object-cover -z-10"
			/>
			<div className="min-h-screen h-full pt-24 pb-12 w-full bg-black/30">
				<Clock />
				<Tabs />
			</div>
		</>
	)
}
