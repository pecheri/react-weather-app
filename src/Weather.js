import React, { useState, useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import { GetWeatherApi } from './service/service';
import Loading from './Loading';
/* eslint-disable react/prop-types */
function Weather({ selectedPage, apiFilter, lat, lon, backgroundChange, backgroundChangeforHourly, dayOrNight }) {
    const results = GetWeatherApi(apiFilter, lat, lon);
    if (results.current || results.hourly || results.daily) {
        // backgroundChange(results.current.dt, results.current.sunrise, results.current.sunset);
        if (selectedPage === 'current') {
            // setFadeIn({
            //     opacity: '1',
            //     transitionDuration: '0.7s',
            //     transitionProperty: 'opacity',
            // });
            return (
                <CurrentWeather
                    data={results.current}
                    timezone={results.timezone}
                    backgroundChange={backgroundChange}
                    selectedPage={selectedPage}
                    dayOrNight={dayOrNight}
                />
            );
        } else if (selectedPage === 'hourly') {
            return (
                <HourlyWeather
                    data={results.hourly}
                    timezone={results.timezone}
                    backgroundChangeforHourly={backgroundChangeforHourly}
                    selectedPage={selectedPage}
                    dayOrNight={dayOrNight}
                />
            );
        } else if (selectedPage === 'daily') {
            return (
                <DailyWeather
                    data={results.daily}
                    timezone={results.timezone}
                    backgroundChange={backgroundChange}
                    selectedPage={selectedPage}
                    dayOrNight={dayOrNight}
                />
            );
        }
    } else {
        return <Loading />;
    }
}

export default Weather;
