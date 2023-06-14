/* eslint-disable @next/next/no-img-element */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Didact_Gothic } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const didact_gothic = Didact_Gothic({
	subsets: ['latin'],
	variable: '--font-didact-gothic',
	weight: '400',
	preload: true,
})
export default function App({ Component, pageProps }: AppProps) {
	const [visible, setVisible] = useState(true)
	const exit = { y: '-100%' }
	useEffect(() => {
		setVisible(false)
	}, [])
	return (
		<>
			{/* <img
				src="/background.avif"
				alt="background image"
				// fill
				className="h-full w-full fixed object-cover -z-10 scale-105 -left-3"
			/> */}
			<main className={`${didact_gothic.variable} font-main text-zinc-300`}>
				<Component {...pageProps} />
			</main>
			<AnimatePresence>
				{visible && (
					<motion.div
						exit={exit}
						transition={{ type: 'spring', bounce: 0, duration: 1.2, delay: 0.4 }}
						className="bg-[#232328] fixed w-full h-screen z-[1000] loader-screen"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{visible && (
					<motion.div
						exit={exit}
						transition={{ type: 'spring', bounce: 0, duration: 1, delay: 0.2 }}
						className="bg-zinc-900 fixed w-full h-screen z-[1000] loader-screen"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{visible && (
					<motion.div
						exit={exit}
						transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
						className="bg-main-black fixed w-full h-screen z-[1000] loader-screen"
					/>
				)}
			</AnimatePresence>
		</>
	)
}
