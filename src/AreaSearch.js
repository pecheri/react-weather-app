import React from 'react';
import { database } from './database/database';
/* eslint-disable react/prop-types */

function AreaSearch({ onChange }) {
    const options = database.map((value, i) => {
        return (
            <option value={value.value} key={i}>
                {value.label}
            </option>
        );
    });
    return (
        <div className="pt-16 pr-10 text-xl flex justify-end xl:justify-center">
            <label htmlFor="city" className="text-white pr-2 text-lg">
                Area:{' '}
            </label>
            <select className="rounded bg-white bg-opacity-50 text-base px-3" name="city" id="city" onChange={onChange}>
                {options}
            </select>
        </div>
    );
}

export default AreaSearch;
