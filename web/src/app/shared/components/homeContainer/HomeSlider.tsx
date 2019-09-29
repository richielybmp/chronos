import React from 'react'
import Slider from "react-slick";
import { Image, Header } from 'semantic-ui-react';
import cronogramas from '../../../../assets/images/cronogramas.png'
import cronograma from '../../../../assets/images/cronograma.png'
import artefato from '../../../../assets/images/artefato.png'

export default function HomeSlider() {
    return (
        <>
            <Header className="center-content " as='h1'>
                Crie! Organize! Acompanhe! Se torne melhor!
            </Header>
            <Slider {...SliderSettings()} className="my-slider">
                <div className="center-content border-home-image">
                    <Image
                        as='div'
                        size='massive'
                        src={cronogramas}
                    />
                </div>
                <div className="center-content border-home-image">
                    <Image
                        as='div'
                        size='massive'
                        src={cronograma}
                    />
                </div>
                <div className="center-content border-home-image">
                    <Image
                        as='div'
                        size='massive'
                        src={artefato}
                    />
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
        autoplaySpeed: 3000 // 5 segundos
    };

    return settings;
}
