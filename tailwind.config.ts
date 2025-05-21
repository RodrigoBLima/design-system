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
          lightest: '#E1F4F4', 
          light: '#87DBDE',
          DEFAULT: '#32C0C6',
          dark: '#239B9F',
          darkest: '#1F6D6F',
        },
        secondary: {
          lightest: '#F8E5EB', 
          light: '#E9B4C5',
          DEFAULT: '#E583A2',
          dark: '#E0527F',
          darkest: '#C73D69',
        },
        tertiary: {
          lightest: '#F9E9C8', 
          light: '#F6BF51',
          DEFAULT: '#F5A70A',
          dark: '#C88704',
          darkest: '#9C6E11',
        },
        danger: {
          lightest: '#F8D3D7', 
          DEFAULT: '#F6A2AB',
          light: '#F17480',
          dark: '#E8172C',
          darkest: '#BA1223',
        },
        success: {
          lightest: '#CDF3CD', 
          light: '#6CDA6C',    
          DEFAULT: '#25A725', 
          dark: '#1A891A',    
          darkest: '#137213',  
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
