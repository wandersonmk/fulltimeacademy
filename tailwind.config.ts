
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
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
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Tech AI theme colors
				cyber: {
					dark: '#050d1a',
					darker: '#020810',
					purple: '#0088ff',
					'purple-bright': '#0088ff',
					pink: '#00ccff',
					blue: '#0055ff',
					neon: '#00ccff',
					glow: 'rgba(0, 136, 255, 0.5)'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 8px 0 rgba(0, 136, 255, 0.6), 0 0 20px 0 rgba(0, 204, 255, 0.3)'
					},
					'50%': { 
						opacity: '0.9',
						boxShadow: '0 0 20px 6px rgba(0, 136, 255, 0.5), 0 0 40px 10px rgba(0, 204, 255, 0)'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1', 
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
				'fade-in': 'fade-in 0.7s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif']
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(45deg, #050d1a, #0a1a35)',
				'neon-glow': 'linear-gradient(90deg, #0055ff, #0088ff, #00ccff)',
				'cyber-grid': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0V0z' fill='none' stroke='%230088ff20' stroke-width='1'/%3E%3C/svg%3E\")"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
