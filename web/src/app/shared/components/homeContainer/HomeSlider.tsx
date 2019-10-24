import React from 'react'

import "./sliderhome.css"
import Slider from 'react-slick';

export default function HomeSlider() {
    return (
        <div>
            <Slider {...SliderSettings()} className="banner-slider">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/banner_cronogramas.png`} alt='banner_cronogramas' />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/banner_cronograma.png`} alt='banner_cronograma' />
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/banner_artefatos.png`} alt='banner_artefatos' />
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
