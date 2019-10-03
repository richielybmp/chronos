import React from 'react'
import Slider from "react-slick";
import { Image, Header } from 'semantic-ui-react';
import cronogramas from '../../../../assets/images/banner_cronogramas.png'
import cronograma from '../../../../assets/images/cronograma.png'
import artefato from '../../../../assets/images/artefato.png'

import "./sliderhome.css"

export default function HomeSlider() {
    return (
        <>
            <Slider {...SliderSettings()} className="my-slider">
                <div className="banner b1">
                </div>
                <div className="banner b2">
                </div>
                <div className="banner b3">
                </div>
            </Slider>
        </>
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
