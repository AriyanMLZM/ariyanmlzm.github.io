import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgColor: '#080a1a',
				primary: '#00bfff',
			},
			fontFamily: {
				worksans: ['Work Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
			},
		},
	},
	plugins: [],
}

export default config
