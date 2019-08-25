import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Cronograma } from 'chronos-core';

type CronogramaType = Cronograma | undefined | null;

interface Props {
    cronograma: CronogramaType,
}

function baseOptions() {
    return {
        maintainAspectRatio: false,
        legend: {
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}

function ObtenhaDadosAssuntos(cronograma: CronogramaType) {

    if (cronograma) {

        const dados_disciplinas = {
            labels: [cronograma.titulo],
            datasets:
                cronograma.disciplinas.map((el, i) => {
                    return {
                        label: el.nome,
                        backgroundColor: 'rgba(0,99,132,0.2)',
                        borderColor: 'rgba(0,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(0,99,132,0.4)',
                        hoverBorderColor: 'rgba(0,99,132,1)',
                        data: [el.assuntos.length]
                    }
                })
        };

        return dados_disciplinas;
    }
}

export function AssuntosCountChart(props: Props) {

    if (props.cronograma) {

        return (
            <div className="chart-container">
                <h2>{`${props.cronograma.titulo.toUpperCase()} - Disciplina x Assuntos`}</h2>
                <Bar
                    data={ObtenhaDadosAssuntos(props.cronograma)}
                    height={50}
                    options={baseOptions()}
                />
            </div>
        )
    } else {
        return <div>Empty</div>
    }
}