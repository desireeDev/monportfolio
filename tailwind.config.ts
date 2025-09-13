import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sl: {
          blue: '#00e0ff',      // bleu néon
          red: '#ff2d00',       // rouge intense
          dark: '#0a0a0a',      // fond sombre
          gray: '#1e1e1e',      // gris secondaire
          white: '#f8f8f8',
        },
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 224, 255, 0.45)',
        'neon': '0 0 10px #00e0ff, 0 0 20px #00e0ff, 0 0 30px #00e0ff',
        'neon-red': '0 0 10px #ff2d00, 0 0 20px #ff2d00, 0 0 30px #ff2d00',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        bounce: 'bounce 1.2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.6s ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;
