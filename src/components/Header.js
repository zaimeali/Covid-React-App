import React from 'react'

import './Header.css';

export const Header = () => {
    // <img src="../assets/world.png" alt="Covid Logo" />
    return (
        <div>
            <h2 className="title">
                COVID    
                <img src="../assets/world.png" alt="logo here" />
            </h2>
        </div>
    )
}
