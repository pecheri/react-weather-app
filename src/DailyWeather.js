import React from 'react';
/* eslint-disable react/prop-types */

function DailyWeather({ data, timezone, backgroundChange, date }) {
    if (data) {
        const option = {
            hour: 'numeric',
            // minute: '2-digit',
            hour12: false,
            timeZone: timezone,
        };
        const sec = data[0].dt;
        const date = new Date(sec * 1000).toLocaleTimeString('en-US', option);
        const sunriseSec = data[0].sunrise;
        const sunrise = new Date(sunriseSec * 1000).toLocaleTimeString('en-US', option);
        const sunsetSec = data[0].sunset;
        const sunset = new Date(sunsetSec * 1000).toLocaleTimeString('en-US', option);

        // backgroundChange(date, sunrise, sunset);

        const getDate = (value) => {
            const date = new Date(value * 1000);
            const day = date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                timeZone: timezone,
            });
            return day;
        };
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

        const dailyDataUI = data.map((value, i) => {
            return (
                <div key={i}>
                    <p>{getDate(value.dt)}</p>
                    <p>{value.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} />
                    <p>MIN: {Math.round(value.temp.min)}F</p>
                    <p>MAX: {Math.round(value.temp.max)}F</p>
                    <p>Sunrise: {getTime(value.sunrise)}</p>
                    <p>Sunset: {getTime(value.sunset)}</p>
                    <p>{value.humidity}%</p>
                </div>
            );
        });
        backgroundChange(date.dt, data[0].sunrise, data[0].sunset);

        return (
            <div>
                <p>DailyWeather</p>
                {dailyDataUI}
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
}

export default DailyWeather;

// const data = [
//     {
//         dt: 1628190000,
//         sunrise: 1628168847,
//         sunset: 1628218222,
//         moonrise: 1628158200,
//         moonset: 1628212260,
//         moon_phase: 0.91,
//         temp: { day: 85.01, min: 70.97, max: 85.78, night: 76.42, eve: 84.72, morn: 70.97 },
//         feels_like: { day: 86.23, night: 76.21, eve: 83.53, morn: 70.97 },
//         pressure: 1013,
//         humidity: 49,
//         dew_point: 63.72,
//         wind_speed: 9.57,
//         wind_deg: 230,
//         wind_gust: 7.67,
//         weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//         clouds: 1,
//         pop: 0,
//         uvi: 11.08,
//     },
//     {
//         dt: 1628276400,
//         sunrise: 1628255291,
//         sunset: 1628304566,
//         moonrise: 1628247840,
//         moonset: 1628301600,
//         moon_phase: 0.94,
//         temp: { day: 86.16, min: 72.01, max: 88.14, night: 72.32, eve: 83.1, morn: 72.1 },
//         feels_like: { day: 84.51, night: 71.98, eve: 81.81, morn: 71.78 },
//         pressure: 1012,
//         humidity: 34,
//         dew_point: 53.1,
//         wind_speed: 10.16,
//         wind_deg: 170,
//         wind_gust: 8.23,
//         weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//         clouds: 5,
//         pop: 0,
//         uvi: 10.89,
//     },
//     {
//         dt: 1628362800,
//         sunrise: 1628341736,
//         sunset: 1628390908,
//         moonrise: 1628337780,
//         moonset: 1628390640,
//         moon_phase: 0.97,
//         temp: { day: 84.22, min: 69.24, max: 86.81, night: 71.91, eve: 82.18, morn: 69.24 },
//         feels_like: { day: 82.65, night: 71.47, eve: 81.27, morn: 68.68 },
//         pressure: 1013,
//         humidity: 34,
//         dew_point: 51.08,
//         wind_speed: 10.18,
//         wind_deg: 187,
//         wind_gust: 7.34,
//         weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//         clouds: 0,
//         pop: 0,
//         uvi: 10.88,
//     },
// ];
