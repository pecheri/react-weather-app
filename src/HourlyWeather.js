import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

function HourlyWeather({ data, timezone, backgroundChangeforHourly, selectedPage, dayOrNight }) {
    const [fadeIn, setFadeIn] = useState(null);

    useEffect(() => {
        if (data) {
            backgroundChangeforHourly(data[0].weather[0].icon);
        } else {
            null;
        }
        if (selectedPage === 'hourly') {
            setTimeout(() => {
                setFadeIn('1');
            }, 500);
        } else {
            setFadeIn(null);
        }
    }, [selectedPage, data]);

    if (data) {
        const twelveHourData = data.slice(0, 12);
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
        const twelveHourDataUI = twelveHourData.map((value, i) => {
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
                        <p className="font-medium">{Math.floor(value.pop / 10) * 10}%</p>
                        <p className="col-span-2 pl-3">Humidity:</p>
                        <p className="font-medium">{Math.floor(value.humidity / 10) * 10}%</p>
                        <p className="col-span-2 pl-3">Wind:</p>
                        <p className="font-medium">{Math.round(value.wind_speed)}mph</p>
                    </div>
                </div>
            );
        });

        return (
            <div className="flex flex-col justify-center">
                <div className="grid grid-cols-4 w-1100px mx-auto pt-16 xl:grid-cols-3 xl:w-800px lg:w-765px md:grid-cols-2 md:w-530px sm:grid-cols-none sm:w-full sm:px-5 sm:pt-20">
                    {twelveHourDataUI}
                </div>
            </div>
        );
    } else {
        return <Loading />;
    }
}

HourlyWeather.propTypes = {
    data: PropTypes.array,
    timezone: PropTypes.string,
    backgroundChangeforHourly: PropTypes.func.isRequired,
    selectedPage: PropTypes.string.isRequired,
    dayOrNight: PropTypes.string,
};

export default HourlyWeather;
