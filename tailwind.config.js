/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                amazon: {
                    DEFAULT: '#FF9900',
                    dark: '#E88B00'
                },
                bg: {
                    dark: '#05070A'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                },
                unfold: {
                    '0%': { maxWidth: '0', opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { maxWidth: '300px', opacity: '1', transform: 'translateX(0)' },
                },
                'badge-move': {
                    '0%, 100%': { transform: 'rotate(-3deg) translateY(0)' },
                    '50%': { transform: 'rotate(0deg) translateY(-4px) scale(1.05)' },
                },
                'gradient-x': {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'float-slow': 'float 10s ease-in-out infinite',
                'float-medium': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
                'unfold': 'unfold 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s',
                'badge-move': 'badge-move 3s ease-in-out infinite',
                'gradient-x': 'gradient-x 3s ease infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
            },
        },
    },
    plugins: [],
}
