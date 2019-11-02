import React, { useState, useEffect } from 'react';
import "./slider.css";
import Slider from 'react-slick';
import { RevisaoCard, ConfirmDelete } from '..';
import { MaterialCard, ExercicioCard } from '../cards';
import { Artefato } from 'chronos-core';
import { Divider, Icon, Checkbox, Form, Grid, ButtonGroup, Input } from 'semantic-ui-react';

interface Props {
    m: Artefato[]
    , r: Artefato[]
    , e: Artefato[]
    , deleteArtefato: (id: string, tipo: number, callBack: Function) => void
    , handleEdit: (id: string, tipo: number) => void
    , clearError: () => void
}

export function SliderArtefatosContent(props: Props) {

    const settings = SliderSettings();

    const { m, r, e, deleteArtefato, handleEdit } = props;

    const [idParaDeletar, setIdParaDeletar] = useState("");
    const [tipoParaDeletar, setTipoParaDeletar] = useState(-1);
    const [confirmationDelete, setConfirmationDelete] = useState(false);

    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');

    const [artefatosFilter, setArtefatosFilter] = useState({ revisoes: true, materiais: true, exercicios: true });

    const [pesquisa, setPesquisa] = useState('');

    const [materiais, setMateriais] = useState(m);
    const [revisoes, setRevisoes] = useState(r);
    const [exercicios, setExercicios] = useState(e);

    const handlePopModalDelete = () => {
        setConfirmationDelete(!confirmationDelete)
    }

    useEffect(() => {
        setMateriais(m);
        setRevisoes(r);
        setExercicios(e);
        handleFiltroData();
    }, [m, r, e])

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

    const handleArtefatoFilterChange = (value: number) => {
        switch (value) {
            case 1:
                setArtefatosFilter({ ...artefatosFilter, revisoes: !artefatosFilter.revisoes });
                break;
            case 2:
                setArtefatosFilter({ ...artefatosFilter, materiais: !artefatosFilter.materiais });
                break;
            case 3:
                setArtefatosFilter({ ...artefatosFilter, exercicios: !artefatosFilter.exercicios });
                break;
            default:
                break;
        }
    }

    const handleFiltroData = () => {

        if ((inicio != undefined && inicio != '') && (fim != undefined && fim != '')) {
            var dtInicio = new Date(inicio.replace(/-/g, '\/'));
            var dtFim = new Date(fim.replace(/-/g, '\/'));

            if (dtInicio < dtFim) {
                setMateriais(m.filter(x => x.data >= inicio && x.data <= fim + 1))
                setRevisoes(r.filter(x => x.data >= inicio && x.data <= fim + 1))
                setExercicios(e.filter(x => x.data >= inicio && x.data <= fim + 1))
            }
        }
    }

    const handleFiltroDescricao = () => {

        if (pesquisa != '' || pesquisa.length > 0) {
            setMateriais(m.filter(x => x.descricao && x.descricao.toLowerCase().includes(pesquisa)));
            setRevisoes(r.filter(x => x.descricao && x.descricao.toLowerCase().includes(pesquisa)));
            setExercicios(e.filter(x => x.descricao && x.descricao.toLowerCase().includes(pesquisa)));
        }
        else {
            handleLimparFiltro();
        }
    }

    const handleLimparFiltro = () => {
        setInicio('');
        setFim('');
        setMateriais(m);
        setRevisoes(r);
        setExercicios(e);
    }

    return (
        <>
            <div className='center-content'>
                <Input
                    action={{ icon: 'search', onClick: () => handleFiltroDescricao() }}
                    defaultValue={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    placeholder='Buscar...' />
            </div>

            <div className='center-content'>
                <Form>
                    <Form.Group>
                        <Grid>
                            <Grid.Column mobile='16' computer='6'>
                                <Form.Input
                                    label='Início'
                                    name='inicio'
                                    type='date'
                                    value={inicio}
                                    onChange={(e) => setInicio(e.target.value)}
                                />
                            </Grid.Column>
                            <Grid.Column mobile='16' computer='6'>
                                <Form.Input
                                    label='Fim'
                                    name='fim'
                                    type='date'
                                    value={fim}
                                    onChange={(e) => setFim(e.target.value)}
                                />
                            </Grid.Column>
                            <Grid.Column mobile='16' computer='4'>
                                <ButtonGroup className="recuo-button-filter">
                                    <Form.Button color='blue' content='Filtrar' onClick={() => handleFiltroData()} />
                                    <Form.Button content='Limpar' onClick={() => handleLimparFiltro()} style={{ marginLeft: '10px' }} />
                                </ButtonGroup>
                            </Grid.Column>
                        </Grid>
                    </Form.Group>
                </Form>
            </div>

            <div className='center-content'>
                <Checkbox label='Revisões' checked={artefatosFilter.revisoes}
                    onChange={() => handleArtefatoFilterChange(1)} />
                <Checkbox label='Materiais' checked={artefatosFilter.materiais}
                    onChange={() => handleArtefatoFilterChange(2)} />
                <Checkbox label='Exercícios' checked={artefatosFilter.exercicios}
                    onChange={() => handleArtefatoFilterChange(3)} />
            </div>

            <Divider />

            <div className="sidebar-content">

                <div className="content-list">

                    {(revisoes.length > 0 && artefatosFilter.revisoes) &&
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

                    {(materiais.length > 0 && artefatosFilter.materiais) &&
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

                    {(exercicios.length > 0 && artefatosFilter.exercicios) &&
                        <>
                            <div className="content" id="exercicio">
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
        </>
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