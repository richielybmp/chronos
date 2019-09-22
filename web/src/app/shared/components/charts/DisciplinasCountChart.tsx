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

const colors = ['rgba(255,65,127,0.2)', 'rgba(0,65,127,0.2)', 'rgba(100,65,9,0.2) ', 'rgba(23,65,127,0.2) ', 'rgba(0,65,2,0.2) ', 'rgba(77,44,11,0.2) ', 'rgba(1,5,127,0.2) ', 'rgba(255,255,127,0.2) ', 'rgba(98,55,100,0.2) ']
const colorshover = ['rgba(255,65,127,0.4)', 'rgba(0,65,127,0.4)', 'rgba(100,65,9,0.4) ', 'rgba(23,65,127,0.4) ', 'rgba(0,65,2,0.4) ', 'rgba(77,44,11,0.4) ', 'rgba(1,5,127,0.4) ', 'rgba(255,255,127,0.4) ', 'rgba(98,55,100,0.4) ']


function ObtenhaDadosDisciplinas(cronogramas: Cronograma[]) {

    var colorIndex = 0;
    const dados_disciplinas = {
        labels: ["Disciplinas"],
        datasets:
            cronogramas.map((el, i) => {
                return {
                    label: el.titulo,
                    backgroundColor: colors[i],
                    borderColor: colors[i],
                    borderWidth: 1,
                    hoverBackgroundColor: colorshover[i],
                    hoverBorderColor: colors[i],
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