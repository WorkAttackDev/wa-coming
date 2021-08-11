const colors = require('tailwindcss/colors');

const keyframes = {
	'pulse-30': {
		'0%, 100%': { opacity: 0.3 },
		'50%': { opacity: 0 }
	},
	wiggle: {
		'0%': { transform: 'rotate(0)' },
		'30%, 50%': { transform: 'rotate(-6deg)' },
		'40%, 60%': { transform: 'rotate(6deg)' },
		'0%': { transform: 'rotate(0)' }
	},
	'ping-small': {
		'75%, 100%': {
			transform: 'scale(1.5)',
			opacity: 0
		}
	}
};

const animation = {
	wiggle: 'wiggle 1s ease-in-out infinite',
	'pulse-slow': 'pulse-30 5s ease-out infinite',
	'ping-small': 'ping-small 1s cubic-bezier(0, 0, 0.2, 1) infinite'
};

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{svelte,html,js,ts}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			DEFAULT: '1.5rem',
			full: '9999px'
		},
		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.2)',
			orange: '0 2px 20px hsl(27deg 100% 55% / 50%)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			focus: '0 1px 2px rgba(255, 129, 28, 0.2)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none'
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			animation: {
				DEFAULT: '#A855F7',
				secondary: '#6366F1'
			},
			design: {
				DEFAULT: '#FACC15'
			},
			programming: {
				DEFAULT: '#1E252B',
				secondary: '#002644'
			},
			workattack: {
				DEFAULT: '#ff811c'
			},
			secondary: '#f0f2f5'
		},

		screens: {
			xs: '375px',
			sm: '500px',
			md: '768px',
			mdx: '800px',
			lg: '1024px',
			lgx: '1124px',
			xl: '1440px'
		},

		extend: {
			backgroundImage: (theme) => ({
				pattern: "url('/imgs/pattern.png')",
				'gradient-design': 'linear-gradient(to right, #ff811c,#FACC15)',
				'gradient-animation': 'linear-gradient(to right, #A855F7, #6366F1)',
				'gradient-programming':
					"url('/images/pattern_50.svg'), linear-gradient(to right, #1E252B, #002644)",
				'gradient-design-animation': 'linear-gradient(to right, #ff811c,#A855F7)',
				'workattack-pattern': "url('/images/pattern.svg')",
				'workattack-pattern_5': "url('/images/pattern_5.svg')"
			}),
			keyframes,
			animation
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
