import axios from 'axios';
import { useState, useEffect } from 'react';

export function GetWeatherApi(apiFilter, lat, lon) {
    const [apiData, setApiData] = useState({});
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${apiFilter}&units=imperial&appid=0f4895c08c6b38a4ddbee7eb8e8f71e3`;
    useEffect(() => {
        axios.get(apiUrl).then(({ data }) => {
            setApiData(data);
            // console.log(data);
        });
    }, [apiUrl]);
    return apiData;
}
