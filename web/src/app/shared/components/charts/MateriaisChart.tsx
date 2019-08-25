import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Cronograma, Disciplina, Assunto, Exercicio, Artefato, Material } from 'chronos-core';

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

function ObtenhaMateriais(artefatos: Artefato[]) {
    var exercicios: Material[] = [];

    artefatos.forEach(element => {
        if (element.tipoArtefato === 2) {
            exercicios.push(element as Material);
        }
    });

    exercicios.push(new Material(20, 0, 1));
    exercicios.push(new Material(50, 0, 2));
    exercicios.push(new Material(30, 0, 3));

    return exercicios;
}


function ObtenhaDadosAssuntos(assuntos: Assunto[]) {

    const dados_disciplinas = {
        labels: ["Video", "Livros", "Internet"],
        datasets:
            assuntos.map((el, i) => {
                const exercicios = ObtenhaMateriais(el.artefatos);

                const minutos_video = exercicios.reduce((a, b) => {
                    if (b.tipoMaterial === 1) {
                        return a + b['minutos'];
                    }
                    return a;
                }, 0);

                const minutos_livros = exercicios.reduce((a, b) => {
                    if (b.tipoMaterial === 2) {
                        return a + b['minutos'];
                    }
                    return a;
                }, 0);

                const minutos_internet = exercicios.reduce((a, b) => {
                    if (b.tipoMaterial === 3) {
                        return a + b['minutos'];
                    }
                    return a;
                }, 0);

                return {
                    label: el.descricao,
                    backgroundColor: 'rgba(0,99,132,0.2)',
                    borderColor: 'rgba(0,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(0,99,132,0.4)',
                    hoverBorderColor: 'rgba(0,99,132,1)',
                    data: [minutos_video, minutos_livros, minutos_internet]
                }
            })
    };

    return dados_disciplinas;
}

export function MateriaisChart(props: Props) {
    return (
        <div className="chart-container">
            <h2>{`${props.disciplina.nome} - Materiais`}</h2>
            <Bar
                data={ObtenhaDadosAssuntos(props.disciplina.assuntos)}
                height={10}
                options={baseOptions()}
            />
        </div>
    )
}