import React from 'react';
import { Card, Icon, Divider } from 'semantic-ui-react';
import "./slider.css";
import Slider from 'react-slick';
import { Artefato, Revisao, Material, Exercicio, AssuntoState, EnumEscopo } from 'chronos-core';
import Utils from '../../../utils/utils';

interface Props {
    artefatos: Artefato[]
    , assuntoOnDetail: AssuntoState
    , deleteArtefato: (idArtefato: string, callBack: Function) => void
    , handleEdit: (id: string, tipo: number) => void
    , clearError: () => void
}

interface CardProps {
    actionDelete: (idArtefato: string) => void
    , actionEdit: (id: string, tipo: number) => void
    , artefato: Artefato
}

function RevisaoCard(props: CardProps) {
    const { actionDelete, artefato, actionEdit } = props;

    let descricaoEscopo = '';

    switch ((artefato as Revisao).escopo) {
        case EnumEscopo.QUINZENAL:
            descricaoEscopo = '15 dias';
            break;

        default:
            break;
    }

    return (
        <Card color='black'>
            <Card.Content>
                <Icon
                    style={{ float: 'right', marginRight: '0', cursor: 'pointer' }}
                    floated='right'
                    name='x'
                    onClick={() => actionDelete(artefato.uuid)} />
                <Card.Header>{descricaoEscopo}</Card.Header>
                <Card.Meta>{Utils.formatDateString(artefato.data)}</Card.Meta>
            </Card.Content>
            <Card.Content
                style={{ marginRight: '0', cursor: 'pointer' }}
                onClick={() => actionEdit(artefato.uuid, 1)}
            >
                <Icon
                    name='edit'
                />
                Editar
            </Card.Content>
        </Card>
    )
}

export function SliderArtefatosContent(props: Props) {

    const settings = SliderSettings();

    const { artefatos, deleteArtefato, handleEdit } = props;

    const materiais = artefatos.filter(x => x.tipoArtefato === 0);
    const revisoes = artefatos.filter(x => x.tipoArtefato === 1);
    const exercicios = artefatos.filter(x => x.tipoArtefato === 2);

    const handleDeleteArtefato = (idArtefato: string) => {
        deleteArtefato(idArtefato, () => {
        });
    }

    return (
        <div className="sidebar-content">
            <div className="content-list">

                {revisoes.length > 0 &&
                    <>
                        <div className="content" id="revisao">
                            <h2>Revisões</h2>
                            <Slider {...settings} className="my-slider">

                                {revisoes.map((artefato: Artefato, index: number) => {
                                    return (
                                        <RevisaoCard
                                            key={index}
                                            artefato={artefato}
                                            actionDelete={handleDeleteArtefato}
                                            actionEdit={() => handleEdit(artefato.uuid, artefato.tipoArtefato)}
                                        />
                                    )
                                })}

                            </Slider>
                        </div>

                        <Divider />
                    </>
                }

                {materiais.length > 0 &&
                    <>
                        <div className="content" id="material">
                            <h2>Materiais de estudos</h2>
                            <Slider {...settings} className="my-slider">

                                {materiais.map((artefato: Artefato, index: number) => {
                                    return (
                                        <RevisaoCard
                                            key={index}
                                            artefato={artefato}
                                            actionDelete={handleDeleteArtefato}
                                            actionEdit={() => handleEdit(artefato.uuid, artefato.tipoArtefato)}
                                        />
                                    )
                                })}

                            </Slider>
                        </div>

                        <Divider />
                    </>
                }

                {exercicios.length > 0 &&
                    <>
                        <div className="content" id="material">
                            <h2>Exercícios</h2>
                            <Slider {...settings} className="my-slider">

                                {exercicios.map((artefato: Artefato, index: number) => {
                                    return (
                                        <RevisaoCard
                                            key={index}
                                            artefato={artefato}
                                            actionDelete={handleDeleteArtefato}
                                            actionEdit={() => handleEdit(artefato.uuid, artefato.tipoArtefato)}
                                        />
                                    )
                                })}

                            </Slider>
                        </div>

                        <Divider />
                    </>
                }
            </div>
        </div>
    );
}

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

function SliderSettings() {
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

    return settings;
}