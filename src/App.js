import React, { useState } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';

function App() {
    const [dayOrNight, setDayOrNight] = useState();

    // const backgroundChange = (currenttime, sunrise, sunset) => {
    //     if (currenttime - sunrise > 0 && currenttime - sunset < 0) {
    //         console.log('daytime');
    //         setDayOrNight('day');
    //     } else {
    //         console.log('nighttime');
    //         setDayOrNight('night');
    //     }
    // };

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
            console.log('daytime');
            setDayOrNight('day');
        } else {
            console.log('nighttime');
            setDayOrNight('night');
        }
        console.log(currenttime, sunrise, sunset);
    };

    return (
        <div
            className={
                dayOrNight === 'night'
                    ? 'bg-nighttime bg-scroll h-full min-h-screen'
                    : 'bg-daytime bg-scroll h-full min-h-screen'
            }
            style={{ backgroundAttachment: 'fixed', backgroundPosition: 'bottom' }}
        >
            <Header className={dayOrNight} />
            <MainPage backgroundChange={backgroundChange} backgroundChangeforHourly={backgroundChangeforHourly} />
            <Footer />
        </div>
    );
}

export default App;
