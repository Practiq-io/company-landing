import React from 'react';
import './HeroBlock.css';

const HeroBlock = props => {
    return (
        <section className="HB-Section">
            <content className="HB-content">
                <h1 className="HB-title">HERO BLOCK</h1>
                <p>i've added this text and changed background color to red</p>
            </content>
        </section>
    )
}

export default HeroBlock;