/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050510',
        accent: '#818cf8', // Indigo-400
        secondaryAccent: '#a78bfa', // Violet-400
      },
      boxShadow: {
        glow: '0 0 20px rgba(129, 140, 248, 0.4)',
        glowLg: '0 0 40px rgba(167, 139, 250, 0.3)'
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
