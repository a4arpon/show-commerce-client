import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.tsx', './app/**/*.tsx'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0',
      },
      center: true,
    },
    colors: {
      light: '#f5f5f5',
      dark: '#0f1416',
      warn: '#f8ec70',
    },
  },
  plugins: [],
}
export default config
