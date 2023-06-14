import { Clock, Tabs } from '@/components'
import { useState } from 'react'

export default function Home() {
	const [bgColor, setBgColor] = useState('#222029')

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBgColor(e.target.value)
	}
	return (
		<>
			<div className="fixed top-2 left-2 z-30 bg-transparent">
				<input
					type="text"
					className="w-48 bg-transparent outline-none px-2 focus:bg-white/10 rounded-md transition-all ease-out"
					title="bg color"
					onChange={onChange}
					value={bgColor}
				/>
			</div>
			<div
				className={`fixed min-h-screen h-full w-full pt-24 pb-12 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-[#111]`}
				style={{ backgroundColor: bgColor }}
			>
				<Clock />
				<Tabs />
			</div>
		</>
	)
}
