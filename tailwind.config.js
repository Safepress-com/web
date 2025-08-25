/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
        display: ['JetBrains Mono', 'SF Mono', 'Monaco', 'monospace'],
      },
      colors: {
        'safepress': {
          'primary': '#0B45D6',
          'secondary': '#277FFF',
        },
      },
    },
  },
  plugins: [],
}