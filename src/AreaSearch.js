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
        <div>
            <label htmlFor="city">Select Area: </label>
            <select name="city" id="city" onChange={onChange}>
                {options}
            </select>
        </div>
    );
}

export default AreaSearch;
