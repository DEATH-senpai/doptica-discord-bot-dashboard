/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                card: '#151925',
                input: '#252c41',
                overlay: '#151925',
            },
        },
    },
    plugins: [],
};
