import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import Loading from './Loading';
import { setConstantValue } from 'typescript';
import dayBg from './img/bg_day4.png';
import nightBg from './img/bg_night4.png';

function App() {
    const [dayOrNight, setDayOrNight] = useState();
    // const [appHeight, setAppHeight] = useState(0);
    // const [classBg, setClassBg] = useState();
    const [dayStyle, setDayStyle] = useState(null);
    const [nightStyle, setNightStyle] = useState(null);

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

    // const handleResize = (e) => {
    //     setAppHeight(window.innerHeight);
    // };

    // useEffect(() => {
    //     classBgHandler();

    //     return () => {
    //         classBgHandler();
    //     };
    // }, []);

    // const classBgHandler = () => {
    //     if (window.innerWidth / window.innerHeight < 1) {
    //         dayOrNight === 'night';
    //         setClassBg(
    //             dayOrNight === 'night'
    //                 ? 'bg-nighttimeV bg-scroll transition-all duration-500'
    //                 : 'bg-daytimeV bg-scroll transition-all duration-500'
    //         );
    //     } else {
    //         setClassBg(
    //             dayOrNight === 'night'
    //                 ? 'bg-nighttime bg-scroll transition-all duration-500'
    //                 : 'bg-daytime bg-scroll transition-all duration-500'
    //         );
    //     }
    // };

    useEffect(() => {
        // setTimeout(() => {

        // }, 1000);
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
        console.log(dayStyle, nightStyle);
    }, [dayOrNight]);

    return (
        <div>
            {/* <div
            className={
                dayOrNight === 'night'
                    ? 'bg-nighttime transition-all duration-500'
                    : 'bg-daytime transition-all duration-500'
            }
            style={
                window.innerWidth / window.innerHeight < 1173 / 660
                    ? {
                          backgroundAttachment: 'fixed',
                          backgroundPosition: 'bottom 0vh center',
                          //   height: `${window.innerHeight}px`,
                          backgroundSize: `auto ${window.innerHeight}px`,
                          //   height: '100vh',
                      }
                    : {
                          backgroundAttachment: 'fixed',
                          backgroundPosition: 'bottom',
                          height: `100%`,
                          minHeight: `100vh`,
                      }
            }
        > */}
            <div className="flex fixed bottom-0 left-0 h-screen w-screen -z-10">
                {/* <img
                    src={dayOrNight === 'night' ? nightBg : dayBg}
                    className="flex fixed object-cover w-full min-w-max bottom-0 right-0 min-h-screen opacity-0"
                    style={dayOrNight === 'night' ? nightStyle : dayStyle}
                ></img> */}
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
        // <Loading />
    );
}

export default App;

// removed 'min-h-screen h-full' from background tailwind css
