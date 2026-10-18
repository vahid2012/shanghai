import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['var(--font-vazirmatn)', 'Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#E8ECF4',
          100: '#C5CEE0',
          200: '#8FA3C8',
          300: '#5A78B0',
          400: '#3A5A95',
          500: '#1B3D7A',
          600: '#142E5E',
          700: '#0F2347',
          800: '#0A1F44',
          900: '#061329',
          950: '#030B1A',
        },
        gold: {
          50: '#FBF6E8',
          100: '#F5EBCC',
          200: '#EBD699',
          300: '#E0C266',
          400: '#D6AE3D',
          500: '#C9A227',
          600: '#A8851F',
          700: '#876918',
          800: '#665012',
          900: '#44360C',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #0A1F44 0%, #142E5E 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
