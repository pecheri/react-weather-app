import React, { useState } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';

function App() {
    const [dayOrNight, setDayOrNight] = useState();

    const backgroundChange = (currenttime, sunrise, sunset) => {
        if (currenttime - sunrise > 0 && currenttime - sunset < 0) {
            console.log('daytime');
            setDayOrNight('day');
        } else {
            console.log('nighttime');
            setDayOrNight('night');
        }
    };

    return (
        <div className="bg-blue-500">
            <Header className={dayOrNight} />
            <MainPage backgroundChange={backgroundChange} />
            <Footer />
        </div>
    );
}

export default App;
