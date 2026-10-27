/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2F1ED',
        sand: '#E4E3DE',
        ink: '#161617',
        graphite: '#2B2B2E',
        clay: { DEFAULT: '#C2603A', dark: '#8A3D1D', light: '#E8C9B5' },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
