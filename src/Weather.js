import React from 'react';
import PropTypes from 'prop-types';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import { GetWeatherApi } from './service/service';
import Loading from './Loading';

function Weather({ selectedPage, apiFilter, lat, lon, backgroundChange, backgroundChangeforHourly, dayOrNight }) {
    const results = GetWeatherApi(apiFilter, lat, lon);
    if (results.current || results.hourly || results.daily) {
        if (selectedPage === 'current') {
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

Weather.propTypes = {
    selectedPage: PropTypes.string.isRequired,
    apiFilter: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    backgroundChange: PropTypes.func.isRequired,
    backgroundChangeforHourly: PropTypes.func.isRequired,
    dayOrNight: PropTypes.string,
};

export default Weather;
