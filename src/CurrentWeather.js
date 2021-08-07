import React, { useEffect } from 'react';
/* eslint-disable react/prop-types */
function CurrentWeather({ data, timezone, backgroundChange }) {
    // useEffect(() => {
    //     backgroundChange(data.dt, data.sunrise, data.sunset);
    // }, [data.dt]);
    if (data) {
        const sec = data.dt;
        const date = new Date(sec * 1000);

        const timestr = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            timeZone: timezone,
        });
        backgroundChange(data.dt, data.sunrise, data.sunset);

        return (
            <div>
                <p>Current Weather</p>
                <p>{timestr}</p>
                <p>{data.weather[0].description}</p>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                <p>{Math.round(data.temp)}F</p>
                <p>{data.humidity}%</p>
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
}

export default CurrentWeather;
