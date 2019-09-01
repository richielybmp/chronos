import React, { useState } from 'react';
import "./slider.css";
import Slider from 'react-slick';
import { RevisaoCard, ConfirmDelete } from '..';
import { MaterialCard, ExercicioCard } from '../cards';
import { Artefato, AssuntoState } from 'chronos-core';
import { Divider, Icon } from 'semantic-ui-react';

interface Props {
    artefatos: Artefato[]
    , assuntoOnDetail: AssuntoState
    , deleteArtefato: (id: string, tipo: number, callBack: Function) => void
    , handleEdit: (id: string, tipo: number) => void
    , clearError: () => void
}

export function SliderArtefatosContent(props: Props) {

    const settings = SliderSettings();

    const { artefatos, deleteArtefato, handleEdit } = props;

    const [idParaDeletar, setIdParaDeletar] = useState("");
    const [tipoParaDeletar, setTipoParaDeletar] = useState(-1);
    const [confirmationDelete, setConfirmationDelete] = useState(false)

    const materiais = artefatos.filter(x => x.tipoArtefato === 0);
    const revisoes = artefatos.filter(x => x.tipoArtefato === 1);
    const exercicios = artefatos.filter(x => x.tipoArtefato === 2);

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    const handleDeleteArtefato = (idArtefato: string, tipoArtefato: number) => {
        if (idArtefato && tipoArtefato !== -1) {
            setConfirmationDelete(true);
            setIdParaDeletar(idArtefato);
            setTipoParaDeletar(tipoArtefato);
        }
    }

    const deletarArtefato = () => {
        if (idParaDeletar) {
            deleteArtefato(idParaDeletar, tipoParaDeletar, () => { });
            setConfirmationDelete(false);
            setIdParaDeletar("");
            setTipoParaDeletar(-1);
        }
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
                                            actionDelete={() => handleDeleteArtefato(artefato.uuid, artefato.tipoArtefato)}
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
                                        <MaterialCard
                                            key={index}
                                            artefato={artefato}
                                            actionDelete={() => handleDeleteArtefato(artefato.uuid, artefato.tipoArtefato)}
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
                                        <ExercicioCard
                                            key={index}
                                            artefato={artefato}
                                            actionDelete={() => handleDeleteArtefato(artefato.uuid, artefato.tipoArtefato)}
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

            {/* Modal 'Excluir Artefato' */}
            <ConfirmDelete
                show={confirmationDelete}
                pergunta="Deseja realmente excluir o artefato?"
                toggle={handlePopModalDelete}
                confirmDelete={deletarArtefato} />

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
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 662,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return settings;
}