import React from 'react';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import { GetWeatherApi } from './service/service';
/* eslint-disable react/prop-types */
function Weather({ selectedPage, apiFilter, lat, lon, timezone }) {
    const results = GetWeatherApi(apiFilter, lat, lon);
    if (results.current || results.hourly || results.daily) {
        if (selectedPage === 'current') {
            return <CurrentWeather data={results.current} timezone={timezone} />;
        } else if (selectedPage === 'hourly') {
            return <HourlyWeather data={results.hourly} timezone={timezone} />;
        } else if (selectedPage === 'daily') {
            return <DailyWeather data={results.daily} timezone={timezone} />;
        }
    } else {
        return <div>Loading...</div>;
    }
}

export default Weather;
