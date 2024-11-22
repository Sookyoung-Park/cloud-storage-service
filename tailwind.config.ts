import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand:{
          DEFAULT: "#FA7275",
          100: '#EA6365',
        },
        white:{
          DEFAULT: '#FFFFFF',
          100: '#F2F5F9',
          200: '#F2F4F8',
        },
        black:{
          100: '#04050C',
          200: '#131524',
          300: '#333F4E',
          400: '#A3B2C7',
        },
        accent:{
          "pink": '#FF7474',
          "green": '#3DD9B3',
          "yellow": '#F9AB72',
          "purple": '#EEA8FD',
          "blue": '#56B8FF',
        },
        error:{
          DEFAULT:'#B80000'
        }
      },
      fontFamily:{
        poppins: ['var(--font-poppins']
      },
      boxShadow:{
        'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
        'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
        'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config


