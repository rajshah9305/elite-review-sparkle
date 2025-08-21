import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
					tertiary: 'hsl(var(--background-tertiary))',
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					muted: 'hsl(var(--foreground-muted))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					hover: 'hsl(var(--primary-hover))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					electric: 'hsl(var(--accent-electric))',
					success: 'hsl(var(--accent-success))',
					warning: 'hsl(var(--accent-warning))',
					error: 'hsl(var(--accent-error))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					glass: 'hsl(var(--card-glass))',
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))',
				},
				code: {
					bg: 'hsl(var(--code-bg))',
					border: 'hsl(var(--code-border))',
					selection: 'hsl(var(--code-selection))',
				},
				glass: {
					border: 'hsl(var(--glass-border))',
					shadow: 'hsl(var(--glass-shadow))',
				},
				hover: 'hsl(var(--hover-overlay))',
				active: 'hsl(var(--active-overlay))',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-code': 'var(--gradient-code)',
			},
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'spring': 'var(--transition-spring)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Existing Radix animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Elite animations
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-12px) rotate(2deg)' },
					'66%': { transform: 'translateY(-6px) rotate(-1deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(252 83% 65% / 0.3), 0 0 60px hsl(252 83% 65% / 0.1)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(252 83% 65% / 0.6), 0 0 100px hsl(252 83% 65% / 0.2)',
						transform: 'scale(1.02)'
					}
				},
				'code-typing': {
					'0%': { width: '0', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { width: '100%', opacity: '0.8' }
				},
				'particle-float': {
					'0%': { transform: 'translateY(100vh) translateX(-10px) rotate(0deg)', opacity: '0' },
					'10%': { opacity: '0.6' },
					'90%': { opacity: '0.6' },
					'100%': { transform: 'translateY(-100vh) translateX(10px) rotate(360deg)', opacity: '0' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'magnetic-hover': {
					'0%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-2px) rotate(1deg)' },
					'100%': { transform: 'translateY(0px) rotate(0deg)' }
				},
				'neural-pulse': {
					'0%, 100%': { transform: 'scale(1)', filter: 'brightness(1) contrast(1)' },
					'50%': { transform: 'scale(1.01)', filter: 'brightness(1.1) contrast(1.05)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				// Existing
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Elite animations
				'float': 'float 8s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'code-typing': 'code-typing 4s steps(50, end) infinite',
				'particle-float': 'particle-float 15s linear infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 10s linear infinite',
				'magnetic-hover': 'magnetic-hover 0.3s ease-in-out',
				'neural-pulse': 'neural-pulse 4s ease-in-out infinite',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
