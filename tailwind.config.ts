import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': 'hsl(var(--primary))',
        'secondary': 'hsl(var(--secondary))',
        'primary-foreground': 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary))',
        'muted': 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
      },
     animation: {
      'underline': 'underline 0.3s ease-in-out',
     }
    },
  },
  plugins: [],
}
export default config
