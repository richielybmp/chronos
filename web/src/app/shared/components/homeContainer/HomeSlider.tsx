import React from 'react'

import "./sliderhome.css"
import Slider from 'react-slick';

export default function HomeSlider() {
    return (
        <div>
            <Slider {...SliderSettings()} className="banner-slider">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/banner_cronogramas.png`} />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/banner_cronograma.png`} />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/banner_artefatos.png`} />
                </div>
            </Slider>
        </div>
    )
}

function SliderSettings() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000 // 4 segundos
    };

    return settings;
}
