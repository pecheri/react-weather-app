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
        backgroundChange(data.sunrise, data.sunset);
        // backgroundChange(data.weather[0].icon);

        return (
            <div className="font-baloo">
                <p>Current Weather</p>
                <div className="bg-white bg-opacity-70 rounded-xl flex-col p-6 mt-10 w-400px mx-auto">
                    <p className="text-center text-2xl pb-4">{timestr}</p>
                    <div className="w-full mx-auto">
                        <div className="flex flex-row w-full">
                            <div className="w-48">
                                <img
                                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    className="mx-auto w-28"
                                />
                            </div>
                            <div className="pt-5">
                                <p className="text-5xl">
                                    {Math.round(data.temp)}
                                    <span className="text-3xl align-top">&deg;F</span>
                                </p>
                                <p className="text-xl">{data.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mx-auto w-60 pt-4 pl-10">
                            <p className="text-lg">Humidity:</p>
                            <p className="text-lg">{data.humidity}%</p>
                            <p className="text-lg">Sunset:</p>
                            <p className="text-lg">{getTime(data.sunrise)}</p>
                            <p className="text-lg">Sunrise:</p>
                            <p className="text-lg">{getTime(data.sunset)}</p>
                        </div>
                    </div>
                </div>
                <div className="table-row"></div>
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
}

export default CurrentWeather;
