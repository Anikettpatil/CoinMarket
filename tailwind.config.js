/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme colors matching scanx.trade
        'dark-primary': '#0a0a0a',
        'dark-secondary': '#111111',
        'dark-tertiary': '#1a1a1a',
        'border-primary': '#2a2a2a',
        'text-primary': '#ffffff',
        'text-secondary': '#888888',
        'accent-blue': '#00d4ff',
        'accent-green': '#00ff88',
        'accent-red': '#ff4757',
        'accent-yellow': '#ffb800',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};