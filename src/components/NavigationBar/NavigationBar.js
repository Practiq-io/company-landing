import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="Navigation-Panel">
            <div className="Navigation-wrapper">
                <div className="Practiq-logo">
                </div>

                <ul className="Navigation-Panel-ul">
                    <li>What we do</li>
                    <li>How it works</li>
                    <li>About us</li>
                    <li className="action-btn">Get started</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;