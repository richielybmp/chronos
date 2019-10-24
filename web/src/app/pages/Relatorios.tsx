import React, { useState, useEffect } from 'react'
import { CronogramasState, Cronograma, Disciplina } from 'chronos-core';
import { Dropdown, Container, Statistic, Grid, GridColumn } from 'semantic-ui-react';
import { SubHeader, DisciplinasCountChart, AssuntosCountChart, StatisticExercicios, StatisticMateriais, ExerciciosChart, MateriaisChart, RevisoesChart, LoaderComponent, StatisticRevisoes } from '../shared/components';
import Slider from 'react-slick';

interface Props {
    cronogramasState: CronogramasState,
    match: any,
    history: any,
    clearError: () => void,
    fetchCronogramas: () => void,
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

function Relatorios(props: Props) {

    const { cronogramas, loading } = props.cronogramasState;
    const { fetchCronogramas } = props;

    const [onDetail, setOnDetail] = useState<TipoState>()

    const handleOnDetail = (id: string) => {
        const detalhe = cronogramas.find(c => c.uuid === id);
        setOnDetail(detalhe && detalhe);
    }

    useEffect(() => {
        if (cronogramas) {
            setOnDetail(cronogramas[0]);
        }
        return () => {
        };
    }, [cronogramas])

    useEffect(() => {
        const fetch = () => {
            fetchCronogramas();
        };
        fetch();
    }, [fetchCronogramas])

    const settings = SliderSettings();

    return (
        <>
            {loading &&
                <LoaderComponent tamanho='medium' titulo="Carregando" />
            }
            <SubHeader content="Andamento" />

            <Container className='chronos-charts'>
                <SeletorCronogramas cronogramas={cronogramas} setOnDetail={handleOnDetail} />

                <DisciplinasCountChart cronogramas={cronogramas} />

                <AssuntosCountChart cronograma={onDetail} />

                {onDetail &&
                    onDetail.disciplinas.map((disc: Disciplina, i) => {
                        return (<div key={i}>
                            <h2>{`${disc.nome}`}</h2>
                            <Grid style={{ margin: "20px", justifyContent: "center" }} columns={4}>
                                <Statistic.Group>
                                    <GridColumn className="center-content statistic" mobile={12}>
                                        <StatisticExercicios disciplina={disc} option={0} />
                                    </GridColumn>
                                    <GridColumn className="center-content statistic" mobile={12}>
                                        <StatisticMateriais disciplina={disc} />
                                    </GridColumn>
                                    <GridColumn className="center-content statistic">
                                        <StatisticRevisoes disciplina={disc} />
                                    </GridColumn>
                                </Statistic.Group>
                            </Grid>

                            <Slider {...settings} key={i} className="slider-relatorios-artefatos">
                                <ExerciciosChart disciplina={disc} />
                                <MateriaisChart disciplina={disc} />
                                <RevisoesChart disciplina={disc} />
                            </Slider>
                        </div>)
                    })
                }

            </Container>
        </>
    )
}

// function NextArrow(props: any) {
//     const { onClick } = props;
//     return (
//         <div className="arrow-next" onClick={onClick}>
//             <Icon link name='chevron right' size="big" color="violet" />
//         </div>
//     );
// }

// function PrevArrow(props: any) {
//     const { onClick } = props;
//     return (
//         <div className="arrow-prev" onClick={onClick}>
//             <Icon link name='chevron left' size="big" color="violet" />
//         </div>
//     );
// }

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