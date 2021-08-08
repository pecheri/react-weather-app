module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // colors: {
        //     primary: '#FBBF24',
        // },
        extend: {
            backgroundImage: (theme) => ({
                daytime: "url('/src/img/bg_day.png')",
                nighttime: "url('/src/img/bg_night.png')",
            }),
            fontFamily: {
                baloo: ['"Baloo 2"', 'cursive'],
                maven: ['"Maven Pro"', 'sans-serif'],
                nanum: ['"Nanum Gothic"', 'sans-serif'],
                pacifico: ['Pacifico', 'cursive'],
            },
            spacing: {
                '400px': '400px',
            },
            colors: {
                amber: {
                    400: '#FBBF24',
                },
            },
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '50%': '50%',
            16: '4rem',
            '100vw': '100vw',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
