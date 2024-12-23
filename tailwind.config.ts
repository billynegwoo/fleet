import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        steampunk: ['Cinzel Decorative', 'serif'],
      },
      colors: {
        steampunk: {
          primary: '#8B4513',
          secondary: '#CD853F',
          accent: '#DAA520',
          background: '#1A1412',
          surface: '#2C1810',
          text: '#D4AF37',
          border: '#8B4513',
          hover: '#A0522D',
          gear: '#CD853F',
        },
      },
      backgroundImage: {
        'steampunk-pattern': "url('/patterns/steampunk-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
