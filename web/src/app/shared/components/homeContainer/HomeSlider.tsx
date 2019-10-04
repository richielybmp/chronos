import React from 'react'

import "./sliderhome.css"
import Slider from 'react-slick';

export default function HomeSlider() {
    return (
        <Slider {...SliderSettings()} className="my-slider">
            <div className="banner b1">
            </div>
            <div className="banner b2">
            </div>
            <div className="banner b3">
            </div>
        </Slider>
    )
}

function SliderSettings() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000 // 3 segundos
    };

    return settings;
}
