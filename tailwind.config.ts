import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        steampunk: ['Cinzel Decorative', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        ring: 'hsl(var(--ring))',
        steampunk: {
          primary: 'var(--steampunk-primary)',
          secondary: 'var(--steampunk-secondary)',
          accent: 'var(--steampunk-accent)',
          background: 'var(--steampunk-background)',
          surface: 'var(--steampunk-surface)',
          text: 'var(--steampunk-text)',
          border: 'var(--steampunk-border)',
          hover: 'var(--steampunk-hover)',
          gear: 'var(--steampunk-secondary)',
        },
      },
      backgroundImage: {
        'steampunk-pattern': "url('/patterns/steampunk-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
