module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
            xs: { max: '440px' },
        },
        // colors: {
        //     primary: '#FBBF24',
        // },
        extend: {
            backgroundImage: (theme) => ({
                daytime: "url('/src/img/bg_day4.png')",
                nighttime: "url('/src/img/bg_night4.png')",
            }),
            fontFamily: {
                baloo: ['"Baloo 2"', 'cursive'],
                maven: ['"Maven Pro"', 'sans-serif'],
                nanum: ['"Nanum Gothic"', 'sans-serif'],
                pacifico: ['Pacifico', 'cursive'],
                mukta: ['Mukta', 'sans-serif'],
            },
            spacing: {
                '400px': '400px',
                '1000px': '1000px',
                '1100px': '1100px',
                '800px': '800px',
                '765px': '765px',
                '600px': '600px',
                '530px': '530px',
            },
            colors: {
                amber: {
                    400: '#FBBF24',
                },
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
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
        fontSize: ['responsive'],
        extend: {},
    },
    plugins: [],
};
