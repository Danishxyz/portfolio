/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#0a0a0a", // Deep charcoal/black
                navy: "#051622", // Deep navy
                cyan: "#00BAF0", // Electric Blue / Cyan
                "cyan-glow": "#00d2ff",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                "spin-slow": "spin 10s linear infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "blink": "blink 1s step-end infinite",
            },
            keyframes: {
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
            },

        },
    },
    plugins: [],
}
