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
            <Header className="center-content " as='h1'>
                Crie! Organize! Acompanhe! Se torne melhor!
            </Header>
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
        autoplay: false,
        autoplaySpeed: 3000 // 5 segundos
    };

    return settings;
}
