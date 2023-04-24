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
	useEffect(() => {
		setVisible(false)
	}, [])
	return (
		<>
			<main className={`${didact_gothic.variable} font-main text-zinc-300`}>
				<Component {...pageProps} />
			</main>
			<AnimatePresence>
				{visible && (
					<motion.div
						exit={{ y: '-100%' }}
						transition={{ type: 'spring', bounce: 0, duration: 1.4, delay: 0.1 }}
						className="bg-zinc-900 fixed w-full h-screen z-[1000] loader-screen"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{visible && (
					<motion.div
						exit={{ y: '-100%' }}
						transition={{ type: 'spring', bounce: 0, duration: 1 }}
						className="bg-[#323234] fixed w-full h-screen z-[1000] loader-screen"
					/>
				)}
			</AnimatePresence>
		</>
	)
}
