/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#08080a',
          surface: '#111116',
          elevated: '#16161e',
          card: '#1a1a24',
          subtle: '#22222e'
        },
        accent: {
          DEFAULT: '#D4AF37', // Warm cinematic gold
          light: '#F3E5AB',
          hover: '#C5A028',
          subtle: 'rgba(212, 175, 55, 0.12)',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        cinema: {
          text: '#F3F4F6',
          muted: '#9CA3AF',
          dim: '#6B7280',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(212, 175, 55, 0.3)'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Outfit', 'sans-serif']
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'noise-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.15)',
        'gold-glow-lg': '0 0 50px rgba(212, 175, 55, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
