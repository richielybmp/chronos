import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Cronograma, Disciplina, Assunto, Exercicio, Artefato } from 'chronos-core';

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

    exercicios.push(new Exercicio(10, 8, 2));
    exercicios.push(new Exercicio(50, 35, 2));
    exercicios.push(new Exercicio(30, 22, 2));

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
                    backgroundColor: 'rgba(0,99,132,0.2)',
                    borderColor: 'rgba(0,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(0,99,132,0.4)',
                    hoverBorderColor: 'rgba(0,99,132,1)',
                    data: [total, acertos]
                }
            })
    };

    return dados_disciplinas;
}

export function ExerciciosChart(props: Props) {
    return (
        <div className="chart-container">
            <h2>{`${props.disciplina.nome} - Exercícios`}</h2>
            <Bar
                data={ObtenhaDadosAssuntos(props.disciplina.assuntos)}
                height={10}
                options={baseOptions()}
            />
        </div>
    )
}