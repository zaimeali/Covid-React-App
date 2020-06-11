import React from 'react'

import logo from '../assets/world.png';

import './Header.css';

export const Header = () => {
    // <img src="../assets/world.png" alt="Covid Logo" />
    return (
        <div>
            <h2 className="title">
                <a className="title-link" href="https://bootcamp2020_covid_react_app.surge.sh/">C<img className="img-logo" src={ logo } alt="O" />VID</a>
            </h2>
        </div>
    )
}
