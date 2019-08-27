import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Cronograma } from 'chronos-core';

interface Props {
    cronogramas: Cronograma[]
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

function ObtenhaDadosDisciplinas(cronogramas: Cronograma[]) {

    const dados_disciplinas = {
        labels: ["Cronogramas"],
        datasets:
            cronogramas.map((el, i) => {
                return {
                    label: el.titulo,
                    backgroundColor: 'rgba(77,65,127,0.2)',
                    borderColor: 'rgba(77,69,110,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(78,68,117,0.4)',
                    hoverBorderColor: 'rgba(77,65,127,1)',
                    data: [el.disciplinas.length]
                }
            })
    };

    return dados_disciplinas;
}

export function DisciplinasCountChart(props: Props) {
    return (
        <div className="chart-container">
            <h2>Meus cronogramas</h2>
            <Bar
                data={ObtenhaDadosDisciplinas(props.cronogramas)}
                height={80}
                options={baseOptions()}
            />
        </div>
    )
}