import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import dayBg from './img/bg_day.png';
import nightBg from './img/bg_night.png';

function App() {
    const [dayOrNight, setDayOrNight] = useState();
    const [dayStyle, setDayStyle] = useState(null);
    const [nightStyle, setNightStyle] = useState(null);

    const backgroundChangeforHourly = (icon) => {
        if (/d$/.test(icon)) {
            setDayOrNight('day');
        } else {
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

    useEffect(() => {
        if (dayOrNight === 'day') {
            setDayStyle({
                opacity: '1',
                transition: 'opacity 0.5s ease',
            });
            setNightStyle(null);
        } else if (dayOrNight === 'night') {
            setNightStyle({
                opacity: '1',
                transition: 'opacity 0.5s ease',
            });
            setDayStyle(null);
        }
    }, [dayOrNight]);

    return (
        <div>
            <div className="flex fixed bottom-0 left-0 h-screen w-screen -z-10">
                <img
                    src={dayBg}
                    className="flex fixed object-cover w-full min-w-max bottom-0 right-0 min-h-screen opacity-0"
                    style={dayStyle}
                ></img>
                <img
                    src={nightBg}
                    className="flex fixed object-cover w-full min-w-max bottom-0 right-0 min-h-screen opacity-0"
                    style={nightStyle}
                ></img>
            </div>
            <Header className={dayOrNight} />
            <MainPage
                backgroundChange={backgroundChange}
                backgroundChangeforHourly={backgroundChangeforHourly}
                dayOrNight={dayOrNight}
            />
            <Footer />
        </div>
    );
}

export default App;
