import React, { useState, useEffect } from 'react';
import Loading from './Loading';

/* eslint-disable react/prop-types */

function HourlyWeather({ data, timezone, backgroundChangeforHourly, selectedPage, dayOrNight }) {
    const [fadeIn, setFadeIn] = useState(null);
    useEffect(() => {
        if (selectedPage === 'hourly') {
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
        const sixHourData = data.slice(0, 12);
        const sec = data[0].dt;
        const date = new Date(sec * 1000);
        const timestr = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            timeZone: timezone,
        });
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
                hour12: true,
                timeZone: timezone,
            });
            return time;
        };
        const sixHourDataUI = sixHourData.map((value, i) => {
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
                    <p className="text-xl font-medium">{getTime(value.dt)}</p>
                    <p className="text-sm sm:float-left xs:float-none">{getDate(value.dt)}</p>

                    <div className="flex flex-row justify-center sm:flex-none sm:float-left sm:w-2/5 sm:flex-col xs:flex xs:flex-row xs:float-none xs:w-full">
                        <div>
                            <img
                                className="w-20"
                                src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
                            />
                        </div>
                        <div className="w-1/2 sm:flex sm:flex-row sm:w-full xs:flex-none xs:flex-col xs:w-1/2 xs:pl-2">
                            <p
                                className="font-medium text-3xl
                        "
                            >
                                {Math.round(value.temp)}
                                <span className="text-lg align-top font-normal">&deg;F</span>
                            </p>
                            <p className="leading-5 text-base pl-3 sm:pt-4 sm:pl-1 xs:pt-0 xs:pl-3">
                                {value.weather[0].description}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 sm:mt-4 xs:mt-0 xs:pl-5">
                        <p className="col-span-2 pl-3">Precipitation:</p>
                        <p className="font-medium">{value.pop}%</p>
                        <p className="col-span-2 pl-3">Humidity:</p>
                        <p className="font-medium">{value.humidity}%</p>
                        <p className="col-span-2 pl-3">Wind:</p>
                        <p className="font-medium">{Math.round(value.wind_speed)}mph</p>
                    </div>
                </div>
            );
        });
        // backgroundChange(data[0].sunrise, data[0].sunset);
        backgroundChangeforHourly(data[0].weather[0].icon);

        return (
            <div className="flex flex-col justify-center">
                {/* <p
                    className="text-center text-2xl pt-10 pb-5 opacity-0"
                    style={{ opacity: fadeIn, transition: `opacity 0.8s ease` }}
                >
                    {timestr}
                </p> */}
                <div className="grid grid-cols-4 w-1100px mx-auto pt-16 xl:grid-cols-3 xl:w-800px lg:w-765px md:grid-cols-2 md:w-530px sm:grid-cols-none sm:w-full sm:px-5 sm:pt-20">
                    {sixHourDataUI}
                </div>
            </div>
        );
    } else {
        return <Loading />;
    }
}

export default HourlyWeather;

// const data = [
//         {
//             dt: 1628190000,
//             temp: 84.96,
//             feels_like: 86.16,
//             pressure: 1013,
//             humidity: 49,
//             dew_point: 63.66,
//             uvi: 10.46,
//             clouds: 1,
//             visibility: 10000,
//             wind_speed: 8.75,
//             wind_deg: 239,
//             wind_gust: 6.33,
//             weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//             pop: 0,
//         },
//         {
//             dt: 1628193600,
//             temp: 84.94,
//             feels_like: 86.63,
//             pressure: 1013,
//             humidity: 51,
//             dew_point: 64.8,
//             uvi: 11.08,
//             clouds: 1,
//             visibility: 10000,
//             wind_speed: 9.57,
//             wind_deg: 230,
//             wind_gust: 6.91,
//             weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//             pop: 0,
//         },
//         {
//             dt: 1628197200,
//             temp: 85.19,
//             feels_like: 86.23,
//             pressure: 1013,
//             humidity: 48,
//             dew_point: 63.3,
//             uvi: 10.15,
//             clouds: 1,
//             visibility: 10000,
//             wind_speed: 9.53,
//             wind_deg: 231,
//             wind_gust: 7.67,
//             weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//             pop: 0,
//         },
//     ];

// time + i > 23 ? (
//     <p>`${time + i - 24}AM`</p>
// ) : 12 <= time + i <= 23 ? (
//     <p>`${time + i - 12}PM`</p>
// ) : (
//     <p>`${time + i}AM`</p>
// );
