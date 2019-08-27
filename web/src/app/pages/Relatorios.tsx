import React, { useState, useEffect } from 'react'
import { SubHeader, DisciplinasCountChart, AssuntosCountChart, ExerciciosChart, MateriaisChart } from '../shared/components';
import { Container, Dropdown, Divider, Icon } from 'semantic-ui-react';
import { Cronograma, CronogramasState, Disciplina } from 'chronos-core';
import Slider from 'react-slick';

interface Props {
    cronogramasState: CronogramasState,
    match: any,
    history: any,
    clearError: () => void
}

interface PropsSeletor {
    cronogramas: Cronograma[],
    setOnDetail: (id: string) => void
}

type TipoState = Cronograma | null;

function SeletorCronogramas(props: PropsSeletor) {

    const { cronogramas, setOnDetail } = props;

    return (
        <Dropdown item text='Cronogramas' className='outros-cronogramas'>
            <Dropdown.Menu>
                {cronogramas.length > 0 &&
                    cronogramas.map((c: Cronograma, index: number) => {
                        return (
                            <Dropdown.Item key={index} onClick={() => setOnDetail(c.uuid)}>
                                {c.titulo}
                            </Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

function BlankFooter() {
    return (
        <div style={{
            backgroundColor: '#dbdbdb',
            height: '100px',
            bottom: '0',
            position: 'fixed',
            width: '100%'
        }} />
    )
}

function Relatorios(props: Props) {

    const cronogramas = props.cronogramasState.cronogramas;

    const [onDetail, setOnDetail] = useState<TipoState>()

    const handleOnDetail = (id: string) => {
        const detalhe = cronogramas.find(c => c.uuid == id);
        setOnDetail(detalhe && detalhe);
    }

    useEffect(() => {
        if (props.cronogramasState.cronogramas) {
            setOnDetail(props.cronogramasState.cronogramas[0]);
        }
        return () => {
        };
    }, [props.cronogramasState.cronogramas])

    const settings = SliderSettings();

    return (
        <>
            <SubHeader content="Relatórios" />

            <Container className='chronos-charts'>
                <SeletorCronogramas cronogramas={cronogramas} setOnDetail={handleOnDetail} />

                <DisciplinasCountChart cronogramas={cronogramas} />

                <AssuntosCountChart cronograma={onDetail} />


                {onDetail &&
                    onDetail.disciplinas.map((disc: Disciplina, i) => {
                        return (<Slider {...settings} key={i} className="slider-relatorios-artefatos">
                            <ExerciciosChart disciplina={disc} />
                            <MateriaisChart disciplina={disc} />
                        </Slider>)
                    })
                }

            </Container>

            {/* <BlankFooter /> */}
        </>
    )
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
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        initialSlide: 0,
    };

    return settings;
}

export default Relatorios