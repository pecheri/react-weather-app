import React, { useState } from 'react';
import Weather from './Weather';
import AreaSearch from './AreaSearch';
import { database } from './database/database';

function MainPage({ backgroundChange, backgroundChangeforHourly }) {
    const [selectedPage, setSelectedPage] = useState('current');
    const [apiFilter, setApiFilter] = useState('minutely,hourly,daily,alerts');
    const [selectedCityName, setSelectedCityName] = useState(database[0].label);
    const [lat, setLat] = useState(database[0].lat);
    const [lon, setLon] = useState(database[0].lon);
    const [timezone, setTimeZone] = useState(database[0].timezone);

    const categories = {
        current: 'minutely,hourly,daily,alerts',
        hourly: 'minutely,current,daily,alerts',
        daily: 'minutely,hourly,current,alerts',
    };

    const pageSelect = (event) => {
        const selected = event.currentTarget.value;
        setSelectedPage(selected);
        setApiFilter(
            selected === 'current' ? categories.current : selected === 'hourly' ? categories.hourly : categories.daily
        );
    };

    const getCity = (event) => {
        const selectedCity = event.currentTarget.value;
        database.forEach((val) => {
            if (val.value === selectedCity) {
                setSelectedCityName(val.label);
                setLat(val.lat);
                setLon(val.lon);
                setTimeZone(val.timezone);
            }
        });
        // console.log(lat, lon);
    };

    return (
        <div>
            <AreaSearch selector={database} onChange={getCity} />
            <div className="w-screen mt-10 flex flex-row justify-center">
                <button
                    onClick={pageSelect}
                    value="current"
                    className="px-6 h-12 text-xl font-baloo bg-amber-400 bg-opacity-30 rounded hover:bg-opacity-60 transition"
                >
                    Current
                </button>
                <button
                    onClick={pageSelect}
                    value="hourly"
                    className="px-6 h-12 mx-20 text-xl font-baloo bg-amber-400 bg-opacity-30 rounded hover:bg-opacity-60 transition"
                >
                    Hourly
                </button>
                <button
                    onClick={pageSelect}
                    value="daily"
                    className="px-6 h-12 text-xl font-baloo bg-amber-400 bg-opacity-30 rounded hover:bg-opacity-60 transition"
                >
                    Daily
                </button>
            </div>
            <div className="font-baloo">
                {/* <p>{selectedCityName}</p> */}
                <Weather
                    selectedPage={selectedPage}
                    apiFilter={apiFilter}
                    lat={lat}
                    lon={lon}
                    timezone={timezone}
                    backgroundChange={backgroundChange}
                    backgroundChangeforHourly={backgroundChangeforHourly}
                />
            </div>
        </div>
    );
}

export default MainPage;
