import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Disciplina, Assunto, Exercicio, Artefato } from 'chronos-core';

interface Props {
    disciplina: Disciplina
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

function ObtenhaExercicios(artefatos: Artefato[]) {
    var exercicios: Exercicio[] = [];

    artefatos.forEach(element => {
        if (element.tipoArtefato === 2) {
            exercicios.push(element as Exercicio);
        }
    });

    return exercicios;
}

function ObtenhaDadosAssuntos(assuntos: Assunto[]) {

    const dados_disciplinas = {
        labels: ["Total", "Acertos"],
        datasets:
            assuntos.map((el, i) => {
                const exercicios = ObtenhaExercicios(el.artefatos);

                const total = exercicios.reduce((a, b) => a + b.quantidade, 0);
                const acertos = exercicios.reduce((a, b) => a + b.acertos, 0);

                return {
                    label: el.descricao,
                    backgroundColor: ['rgba(198, 211, 223, .5)', 'rgba(46, 121, 28, 0.5)'],
                    borderColor: 'rgba(77,69,110,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: ['rgba(198, 211, 223, .8)', 'rgba(46, 121, 28, 0.8)'],
                    hoverBorderColor: 'rgba(77,65,127,1)',
                    data: [total, acertos]
                }
            })
    };

    return dados_disciplinas;
}

export function ExerciciosChart(props: Props) {
    return (
        <div className="chart-container">
            <h2 className="center-content">Exercícios</h2>
            <Bar
                data={ObtenhaDadosAssuntos(props.disciplina.assuntos)}
                height={10}
                options={baseOptions()}
            />
        </div>
    )
}