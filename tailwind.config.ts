import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        greenDark: '#0e2d1f',
        gold: '#c9a449'
      },
      boxShadow: {
        glow: '0 0 40px rgba(201,164,73,0.35)'
      }
    }
  },
  plugins: []
}
export default config
