import React, { useEffect, useState } from 'react';
/* eslint-disable react/prop-types */

function DailyWeather({ data, timezone, backgroundChange, date, selectedPage, dayOrNight }) {
    const [fadeIn, setFadeIn] = useState(null);
    useEffect(() => {
        if (selectedPage === 'daily') {
            setTimeout(() => {
                setFadeIn('1');
                console.log('fadein');
            }, 500);
        } else {
            setFadeIn(null);
        }
        console.log(fadeIn);
    }, [selectedPage]);
    if (data) {
        const option = {
            hour: 'numeric',
            // minute: '2-digit',
            hour12: false,
            timeZone: timezone,
        };
        const sec = data[0].dt;
        const date = new Date(sec * 1000).toLocaleTimeString('en-US', option);
        const sunriseSec = data[0].sunrise;
        const sunrise = new Date(sunriseSec * 1000).toLocaleTimeString('en-US', option);
        const sunsetSec = data[0].sunset;
        const sunset = new Date(sunsetSec * 1000).toLocaleTimeString('en-US', option);

        // backgroundChange(date, sunrise, sunset);

        const getDate = (value) => {
            const date = new Date(value * 1000);
            const day = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                timeZone: timezone,
            });
            return day;
        };
        const getTime = (value) => {
            const date = new Date(value * 1000);
            const time = date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: timezone,
            });
            return time;
        };

        const dailyDataUI = data.map((value, i) => {
            return (
                <div
                    key={i}
                    className={
                        dayOrNight === 'day'
                            ? 'bg-white bg-opacity-60 rounded-xl flex-col p-6 mb-10 mx-auto w-60 opacity-0 lg:mb-6 sm:w-full sm:max-w-sm sm:p-4'
                            : 'bg-gray-300 bg-opacity-70 rounded-xl flex-col p-6 mb-10 mx-auto w-60 opacity-0 lg:mb-6 sm:w-full sm:max-w-sm sm:p-4'
                    }
                    style={{ opacity: fadeIn, transition: `opacity ${i * 0.3}s ease` }}
                >
                    <p className="text-xl pb-1 font-medium">{getDate(value.dt)}</p>
                    <div className="flex flex-row justify-center h-28">
                        <div className="">
                            <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} />
                        </div>
                        <div className="w-1/2 pr-3 xs:w-5/12">
                            <div className="text-right">
                                <span className="text-sm">MAX </span>
                                <span className="font-medium text-3xl">{Math.round(value.temp.max)}</span>
                                <span className="text-lg align-top">&deg;F</span>
                            </div>
                            <div className="text-right">
                                <span className="text-sm">MIN </span>
                                <spam className="font-medium text-3xl">{Math.round(value.temp.min)}</spam>
                                <span className="text-lg align-top">&deg;F</span>
                            </div>
                            <p className="leading-5 capitalize pl-3 sm:text-right">{value.weather[0].description}</p>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 mt-3 align-bottom sm:px-16 xs:px-10 
                    "
                    >
                        <p className="col-span-2 pl-5 xs:pl-1">Precipitation:</p>
                        <p className="font-medium">{value.pop}%</p>
                        <p className="col-span-2 pl-5 xs:pl-1">Humidity:</p>
                        <p className="font-medium">{value.humidity}%</p>
                        {/* <p className="col-span-2 pl-5">Sunrise:</p>
                        <p>{getTime(value.sunrise)}</p>
                        <p className="col-span-2 pl-5">Sunset:</p>
                        <p>{getTime(value.sunset)}</p> */}
                    </div>
                    {/* <div className="pt-5 flex flex-row justify-evenly">
                        <div>
                            <p className="col-span-2">Sunrise</p>
                            <p>{getTime(value.sunrise)}</p>
                        </div>
                        <div>
                            <p className="col-span-2">Sunset</p>
                            <p>{getTime(value.sunset)}</p>
                        </div>
                    </div> */}
                </div>
            );
        });
        backgroundChange(data[0].sunrise, data[0].sunset);
        // backgroundChange(data[0].weather[0].icon);

        return (
            <div className="grid grid-cols-4 w-1100px mx-auto pt-16 xl:grid-cols-3 xl:w-800px lg:w-765px md:grid-cols-2 md:w-530px sm:grid-cols-none sm:w-full sm:px-5 sm:pt-20">
                {dailyDataUI}
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
}

// xs:grid-cols-2 xs:px-2 xs:pl-12 xs:w-60 xs:mx-auto

export default DailyWeather;

// const data = [
//     {
//         dt: 1628190000,
//         sunrise: 1628168847,
//         sunset: 1628218222,
//         moonrise: 1628158200,
//         moonset: 1628212260,
//         moon_phase: 0.91,
//         temp: { day: 85.01, min: 70.97, max: 85.78, night: 76.42, eve: 84.72, morn: 70.97 },
//         feels_like: { day: 86.23, night: 76.21, eve: 83.53, morn: 70.97 },
//         pressure: 1013,
//         humidity: 49,
//         dew_point: 63.72,
//         wind_speed: 9.57,
//         wind_deg: 230,
//         wind_gust: 7.67,
//         weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//         clouds: 1,
//         pop: 0,
//         uvi: 11.08,
//     },
//     {
//         dt: 1628276400,
//         sunrise: 1628255291,
//         sunset: 1628304566,
//         moonrise: 1628247840,
//         moonset: 1628301600,
//         moon_phase: 0.94,
//         temp: { day: 86.16, min: 72.01, max: 88.14, night: 72.32, eve: 83.1, morn: 72.1 },
//         feels_like: { day: 84.51, night: 71.98, eve: 81.81, morn: 71.78 },
//         pressure: 1012,
//         humidity: 34,
//         dew_point: 53.1,
//         wind_speed: 10.16,
//         wind_deg: 170,
//         wind_gust: 8.23,
//         weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//         clouds: 5,
//         pop: 0,
//         uvi: 10.89,
//     },
//     {
//         dt: 1628362800,
//         sunrise: 1628341736,
//         sunset: 1628390908,
//         moonrise: 1628337780,
//         moonset: 1628390640,
//         moon_phase: 0.97,
//         temp: { day: 84.22, min: 69.24, max: 86.81, night: 71.91, eve: 82.18, morn: 69.24 },
//         feels_like: { day: 82.65, night: 71.47, eve: 81.27, morn: 68.68 },
//         pressure: 1013,
//         humidity: 34,
//         dew_point: 51.08,
//         wind_speed: 10.18,
//         wind_deg: 187,
//         wind_gust: 7.34,
//         weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//         clouds: 0,
//         pop: 0,
//         uvi: 10.88,
//     },
// ];
