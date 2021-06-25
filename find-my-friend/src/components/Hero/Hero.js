import React from 'react';
import herobanner from '../../Assets/img/herobanner.jpg';

const Hero = () => {

    return(
        <div className="container-fluid">
            <div className="hero">
                    <h2>Aqui van los productos</h2>
                    <img src={herobanner} alt="this is a hero"/>
            </div>
        </div>
    )

}
export default Hero; 