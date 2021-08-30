import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

function CurrentWeather({ data, timezone, backgroundChange, selectedPage, dayOrNight }) {
    const [fadeIn, setFadeIn] = useState(null);

    useEffect(() => {
        if (data?.sunrise && data?.sunset) {
            backgroundChange(data.sunrise, data.sunset);
        } else {
            null;
        }
        if (selectedPage === 'current') {
            setTimeout(() => {
                setFadeIn({
                    opacity: '1',
                    transition: 'opacity 0.5s ease',
                });
            }, 500);
        } else {
            setFadeIn(null);
        }
    }, [selectedPage, data?.sunrise, data?.sunset]);

    if (data) {
        const sec = data.dt;
        const date = new Date(sec * 1000);
        const currentTime = new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: timezone,
        });

        const timestr = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            timeZone: timezone,
        });

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

        return (
            <div className="font-baloo pt-10 opacity-0" style={fadeIn}>
                <div
                    className={
                        dayOrNight === 'day'
                            ? 'bg-white bg-opacity-60 rounded-xl flex-col p-6 mt-10 w-400px mx-auto xs:w-11/12'
                            : 'bg-gray-300 bg-opacity-70 rounded-xl flex-col p-6 mt-10 w-400px mx-auto xs:w-11/12'
                    }
                >
                    <div className="flex flex-row justify-between">
                        <p className="text-2xl pb-4 pl-7 pt-1.5 font-medium sm:pl-1">{timestr}</p>
                        <div className="pr-7 sm:pr-1">
                            <p className="text-sm w-full text-right">Current Time</p>
                            <p className="w-full text-right">{currentTime}</p>
                        </div>
                    </div>
                    <div className="w-full mx-auto">
                        <div className="flex flex-row w-full">
                            <div className="w-48">
                                <img
                                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    className="mx-auto w-28"
                                />
                            </div>
                            <div className="pt-5 xs:pr-3">
                                <p className="text-5xl font-medium">
                                    {Math.round(data.temp)}
                                    <span className="text-3xl align-top font-normal">&deg;F</span>
                                </p>
                                <p className="text-xl pl-4 leading-5">{data.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mx-auto w-60 pt-4 pl-10">
                            <p className="text-lg">Humidity:</p>
                            <p className="text-lg font-medium">{Math.floor(data.humidity / 10) * 10}%</p>
                            <p className="text-lg">Sunrise:</p>
                            <p className="text-lg font-medium">{getTime(data.sunrise)}</p>
                            <p className="text-lg">Sunset:</p>
                            <p className="text-lg font-medium">{getTime(data.sunset)}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loading />;
    }
}

CurrentWeather.propTypes = {
    data: PropTypes.object,
    timezone: PropTypes.string,
    backgroundChange: PropTypes.func.isRequired,
    selectedPage: PropTypes.string.isRequired,
    dayOrNight: PropTypes.string,
};

export default CurrentWeather;
