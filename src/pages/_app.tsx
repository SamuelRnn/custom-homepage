import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Didact_Gothic } from 'next/font/google'

const didact_gothic = Didact_Gothic({
	subsets: ['latin'],
	variable: '--font-didact-gothic',
	weight: '400',
	preload: true,
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${didact_gothic.variable} font-main text-zinc-300`}>
			<Component {...pageProps} />
		</main>
	)
}
