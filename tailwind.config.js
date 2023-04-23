/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				main: {
					black: '#111111',
				},
			},
			fontFamily: {
				main: ['var(--font-didact-gothic)', ...fontFamily.sans],
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
