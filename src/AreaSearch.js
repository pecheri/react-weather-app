import React from 'react';
import { database } from './database/database';
/* eslint-disable react/prop-types */

function AreaSearch({ onChange, dayOrNight, selectedCityName }) {
    const options = database.map((value, i) => {
        // const selected = selectedCityName === value.label ? 'selected' : null;
        return (
            <option value={value.value} key={i}>
                {value.label}
            </option>
        );
    });
    return (
        <div
            className={
                dayOrNight === 'day'
                    ? 'font-baloo font-semibold mt-32 h-12 text-gray-600 flex absolute top-0 right-56 pt-0 2xl:right-36 xl:right-8 lg:mt-12 sm:right-3 sm:top-28'
                    : ' font-baloo font-semibold mt-32 h-12 text-white flex absolute top-0 right-56 pt-0 2xl:right-36 xl:right-8 lg:mt-12 sm:right-3 sm:top-28'
            }
        >
            <label htmlFor="city" className="pr-2 text-lg h-12 mt-2">
                Location{' '}
            </label>
            <select
                className={
                    dayOrNight === 'day'
                        ? 'rounded bg-white bg-opacity-60 text-gray-600 text-xl px-3 sm:text-lg sm:h-10 cursor-pointer'
                        : 'rounded bg-yellow-400 bg-opacity-30 text-white text-xl px-3 sm:text-lg sm:h-10 cursor-pointer'
                }
                name="city"
                id="city"
                onChange={onChange}
                value={selectedCityName}
            >
                {options}
            </select>
        </div>
    );
}

export default AreaSearch;
