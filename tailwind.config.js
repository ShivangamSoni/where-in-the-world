/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: "'Nunito Sans', sans-serif;",
            },
            boxShadow: {
                full: "0 0 6px 1px rgba(0,0,0,0.2), 0 0 4px -1px rgba(0,0,0,0.2)",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=light]"
                    ],
                    "primary": "#ffffff",
                    "base-100": "#fafafa",
                    "neutral": "#111517",
                    "accent": "#858585",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=dark]"
                    ],
                    "primary": "#2b3945",
                    "base-100": "#202c37",
                    "neutral": "#ffffff",
                    "accent": "#858585",
                },
            },
        ],
    },
};
