import React, { useState } from 'react';
import Weather from './Weather';
import AreaSearch from './AreaSearch';
import { database } from './database/database';

function MainPage({ backgroundChange, backgroundChangeforHourly, dayOrNight }) {
    const [selectedPage, setSelectedPage] = useState('current');
    const [apiFilter, setApiFilter] = useState('minutely,hourly,daily,alerts');
    const [selectedCityName, setSelectedCityName] = useState(database[0].label);
    const [lat, setLat] = useState(database[0].lat);
    const [lon, setLon] = useState(database[0].lon);

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
        setSelectedCityName(selectedCity);
        database.forEach((val) => {
            if (val.value === selectedCity) {
                setLat(val.lat);
                setLon(val.lon);
            }
        });
    };

    const resetBtn = () => {
        setSelectedPage('current');
        setApiFilter('minutely,hourly,daily,alerts');
        setSelectedCityName(database[0].label);
        setLat(database[0].lat);
        setLon(database[0].lon);
    };

    return (
        <div>
            <div
                onClick={resetBtn}
                className="opacity-0 w-64 h-24 flex absolute top-5 left-7 z-50 cursor-pointer sm:top-2 sm:left-2 sm:w-56 sm:h-20"
            ></div>
            <div className="flex flex-row justify-between ">
                <div className="w-1000px h-12 pl-4 mt-32 flex flex-row justify-left bg-gradient-to-r from-amber-400 via-amber-400 bg-opacity-30 text-white xl:w-800px lg:w-600px sm:mt-0 sm:bg-amber-400 sm:justify-center sm:w-screen sm:pl-0 z-40">
                    <button
                        onClick={pageSelect}
                        value="current"
                        className={
                            selectedPage === 'current'
                                ? ' text-gray-600 px-6 h-12 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 xs:text-lg'
                                : 'px-6 h-12 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 xs:text-lg'
                        }
                    >
                        Today
                    </button>
                    <button
                        onClick={pageSelect}
                        value="hourly"
                        className={
                            selectedPage === 'hourly'
                                ? 'text-gray-600  px-6 h-12 mx-20 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 lg:mx-10 xs:text-lg'
                                : 'px-6 h-12 mx-20 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 lg:mx-10 xs:text-lg'
                        }
                    >
                        Hourly
                    </button>
                    <button
                        onClick={pageSelect}
                        value="daily"
                        className={
                            selectedPage === 'daily'
                                ? 'text-gray-600 px-6 h-12 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 xs:text-lg'
                                : 'px-6 h-12 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 xs:text-lg'
                        }
                    >
                        Daily
                    </button>
                </div>
                <AreaSearch
                    selector={database}
                    getCity={getCity}
                    dayOrNight={dayOrNight}
                    selectedCityName={selectedCityName}
                />
            </div>
            <div className="font-baloo">
                <Weather
                    selectedPage={selectedPage}
                    apiFilter={apiFilter}
                    lat={lat}
                    lon={lon}
                    backgroundChange={backgroundChange}
                    backgroundChangeforHourly={backgroundChangeforHourly}
                    dayOrNight={dayOrNight}
                />
            </div>
        </div>
    );
}

export default MainPage;
