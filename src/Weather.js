import React from 'react';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import { GetWeatherApi } from './service/service';
/* eslint-disable react/prop-types */
function Weather({ selectedPage, apiFilter, lat, lon, timezone, backgroundChange }) {
    const results = GetWeatherApi(apiFilter, lat, lon);
    if (results.current || results.hourly || results.daily) {
        // backgroundChange(results.current.dt, results.current.sunrise, results.current.sunset);
        if (selectedPage === 'current') {
            return (
                <CurrentWeather
                    data={results.current}
                    timezone={results.timezone}
                    backgroundChange={backgroundChange}
                />
            );
        } else if (selectedPage === 'hourly') {
            return (
                <HourlyWeather data={results.hourly} timezone={results.timezone} backgroundChange={backgroundChange} />
            );
        } else if (selectedPage === 'daily') {
            return (
                <DailyWeather
                    data={results.daily}
                    timezone={results.timezone}
                    backgroundChange={backgroundChange}
                    date={results.current}
                />
            );
        }
    } else {
        return <div>Loading...</div>;
    }
}

export default Weather;
