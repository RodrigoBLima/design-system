import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	fontFamily: {
  		sans: [
  			'Montserrat',
  			'sans-serif'
  		]
  	},
  	boxShadow: {
  		DEFAULT: '0px 0px 3px 0px rgba(93 117 141 / 0.10)',
  		xs: '0px -1px 4px 0px rgba(93 117 141 / 0.10)',
  		md: '0px 10px 15px 0px rgba(93 117 141 / 0.10)'
  	},
  	extend: {
			colors: {
				primary: {
          DEFAULT: '#3DAFB0',
          light: '#B0E4E6',
          dark: '#0F9596',
          darkest: '#197C7D',
        },
        secondary: {
          DEFAULT: '#E583A2',
          light: '#EDBFCF',
          dark: '#D46588',
          darkest: '#BA5978',
        },
        tertiary: {
          DEFAULT: '#F2C261',
          light: '#FFDD99',
          dark: '#D9A641',
        },
        danger: {
          DEFAULT: '#F65C6A',
          light: '#FAAEB6',
          dark: '#C2192A',
          darkest: '#A81624',
        },
        success: {
          DEFAULT: '#70A33B',
          light: '#C1E59B',
          dark: '#528024',
        },
        neutral: {
          DEFAULT: '#5D758D',
          lightest: '#F2F7FC',
          light: '#B4C5D6',
          'light-2': '#D9E2EB',
          darkest: '#404951',
        },
      },
  		fontSize: {
  			'2.2xl': '1.375rem',
  			'2.6xl': '1.625rem',
  			'2.8xl': '1.75rem',
  			'3xl': '2rem',
  			'3.6xl': '2.25rem',
  			'4xl': '2.5rem',
  			'4.4xl': '2.75rem',
  			'4.8xl': '3rem',
  			'5xl': '3.125rem',
  			'5.2xl': '3.25rem',
  			'5.6xl': '3.5rem'
  		},
  	}
  },
  plugins: [],
} satisfies Config
