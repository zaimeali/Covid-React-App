import React, { useState, useEffect } from 'react';

// Material Components
import { NativeSelect, FormControl } from '@material-ui/core';

// Style
import './CountryPicker.css';

// API
import { fetchCountries } from '../../api';

export const CountryPicker = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);

    return (
        <FormControl className="formControl">
            <label className="dropdown-country">Country: </label>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                { countries.map((country, i) => <option key={i} value={country}>{country}</option>) }
            </NativeSelect>
        </FormControl>
    )
}
