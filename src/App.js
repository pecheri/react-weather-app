import React, { useState } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import Loading from './Loading';

function App() {
    const [dayOrNight, setDayOrNight] = useState();

    const backgroundChangeforHourly = (icon) => {
        if (/d$/.test(icon)) {
            console.log('daytime');
            setDayOrNight('day');
        } else {
            console.log('nighttime');
            setDayOrNight('night');
        }
    };

    const backgroundChange = (sunrise, sunset) => {
        const currenttime = new Date().getTime() / 1000;
        if (currenttime - sunrise > 0 && currenttime - sunset < 0) {
            setDayOrNight('day');
        } else {
            setDayOrNight('night');
        }
    };

    return (
        <div
            className={
                dayOrNight === 'night'
                    ? 'bg-nighttime bg-scroll h-full min-h-screen transition-all duration-500'
                    : 'bg-daytime bg-scroll h-full min-h-screen transition-all duration-500'
            }
            style={{ backgroundAttachment: 'fixed', backgroundPosition: 'bottom' }}
        >
            <Header className={dayOrNight} />
            <MainPage
                backgroundChange={backgroundChange}
                backgroundChangeforHourly={backgroundChangeforHourly}
                dayOrNight={dayOrNight}
            />
            <Footer />
        </div>
        // <Loading />
    );
}

export default App;
