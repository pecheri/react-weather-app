import React from 'react';
/* eslint-disable react/prop-types */

function HourlyWeather({ data, timezone, backgroundChange }) {
    if (data) {
        const sixHourData = data.slice(0, 6);
        const sec = data[0].dt;
        const date = new Date(sec * 1000);
        const timestr = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            timeZone: timezone,
        });
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
                <div key={i}>
                    <p>{getTime(value.dt)}</p>
                    <p>{value.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} />
                    <p>{Math.round(value.temp)}F</p>
                    <p>{value.humidity}%</p>
                </div>
            );
        });
        backgroundChange(data[0].dt, data[0].sunrise, data[0].sunset);

        return (
            <div>
                <p>Hourly Weather</p>
                <p>{timestr}</p>
                {sixHourDataUI}
            </div>
        );
    } else {
        return <div>Loading...</div>;
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
