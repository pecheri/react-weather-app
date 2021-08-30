import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export function GetWeatherApi(apiFilter, lat, lon) {
    const [apiData, setApiData] = useState({});
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${apiFilter}&units=imperial&appid=${API_KEY}`;
    useEffect(() => {
        axios.get(apiUrl).then(({ data }) => {
            setApiData(data);
        });
    }, [apiUrl]);
    return apiData;
}
