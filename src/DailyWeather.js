import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

function DailyWeather({ data, timezone, backgroundChange, selectedPage, dayOrNight }) {
    const [fadeIn, setFadeIn] = useState(null);

    useEffect(() => {
        if (data) {
            backgroundChange(data[0].sunrise, data[0].sunset);
        } else {
            null;
        }
        if (selectedPage === 'daily') {
            setTimeout(() => {
                setFadeIn('1');
            }, 500);
        } else {
            setFadeIn(null);
        }
    }, [selectedPage, data]);

    if (data) {
        const getDate = (value) => {
            const date = new Date(value * 1000);
            const day = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                timeZone: timezone,
            });
            return day;
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
                                <span className="font-medium text-3xl">{Math.round(value.temp.min)}</span>
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
                        <p className="font-medium">{Math.floor(value.pop / 10) * 10}%</p>
                        <p className="col-span-2 pl-5 xs:pl-1">Humidity:</p>
                        <p className="font-medium">{Math.floor(value.humidity / 10) * 10}%</p>
                    </div>
                </div>
            );
        });
        return (
            <div className="grid grid-cols-4 w-1100px mx-auto pt-16 xl:grid-cols-3 xl:w-800px lg:w-765px md:grid-cols-2 md:w-530px sm:grid-cols-none sm:w-full sm:px-5 sm:pt-20">
                {dailyDataUI}
            </div>
        );
    } else {
        return <Loading />;
    }
}

DailyWeather.propTypes = {
    data: PropTypes.array,
    timezone: PropTypes.string,
    backgroundChange: PropTypes.func.isRequired,
    selectedPage: PropTypes.string.isRequired,
    dayOrNight: PropTypes.string,
};

export default DailyWeather;
