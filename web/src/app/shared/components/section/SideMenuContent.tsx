import React from 'react';
import { Grid, Card, Icon, Divider } from 'semantic-ui-react';
import "./slider.css";
import Slider from 'react-slick';

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="arrow-next" onClick={onClick}>
            <Icon link name='chevron right' size="big" color="violet" />
        </div>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="arrow-prev" onClick={onClick}>
            <Icon link name='chevron left' size="big" color="violet" />
        </div>
    );
}

function ArtefatoCard() {
    return (
        <Card link
            color='black'>
            <Card.Content>
                <Card.Header>titulo</Card.Header>
                <Card.Meta>descricao</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='book' />
                Disciplinas
            </Card.Content>
        </Card>
    )
}

function SideMenuContent() {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="sidebar-content">
            <div className="content-list">
                <div className="content" id="material">
                    <h2>Material de estudos</h2>
                    <Slider {...settings} className="my-slider">
                        <ArtefatoCard />
                        <ArtefatoCard />
                        <ArtefatoCard />
                        <ArtefatoCard />
                    </Slider>
                </div>

                <Divider />

                <div className="content" id="exercicios">
                    <h2>Exercícios</h2>
                    <Slider {...settings} className="my-slider">
                        <ArtefatoCard />
                        <ArtefatoCard />
                        <ArtefatoCard />
                        <ArtefatoCard />
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SideMenuContent;