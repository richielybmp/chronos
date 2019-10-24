import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Disciplina, Assunto, Artefato, Material } from 'chronos-core';

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
        if (element.tipoArtefato === 0) {
            exercicios.push(element as Material);
        }
    });

    return exercicios;
}


function ObtenhaDadosAssuntos(assuntos: Assunto[]) {

    const dados_disciplinas = {
        labels: ["Video", "Livros", "Internet"],
        datasets:
            assuntos.map((el, i) => {
                const exercicios = ObtenhaMateriais(el.artefatos);

                const minutos_video = exercicios.reduce((a, b) => {
                    if (parseInt(b.tipoMaterial.toString()) === 1) {
                        return parseInt(a.toString()) + parseInt(b['minutos'].toString());
                    }
                    return a;
                }, 0);

                const minutos_livros = exercicios.reduce((a, b) => {
                    if (parseInt(b.tipoMaterial.toString()) === 2) {
                        return parseInt(a.toString()) + parseInt(b['minutos'].toString());
                    }
                    return a;
                }, 0);

                const minutos_internet = exercicios.reduce((a, b) => {
                    if (parseInt(b.tipoMaterial.toString()) === 3) {
                        return parseInt(a.toString()) + parseInt(b['minutos'].toString());
                    }
                    return a;
                }, 0);

                return {
                    label: el.descricao,
                    backgroundColor: 'rgba(77,65,127,0.2)',
                    borderColor: 'rgba(77,69,110,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(78,68,117,0.4)',
                    hoverBorderColor: 'rgba(77,65,127,1)',
                    data: [minutos_video, minutos_livros, minutos_internet]
                }
            })
    };

    return dados_disciplinas;
}

export function MateriaisChart(props: Props) {
    return (
        <div className="chart-container">
            <h2 className="center-content">Materiais</h2>
            <Bar
                data={ObtenhaDadosAssuntos(props.disciplina.assuntos)}
                height={10}
                options={baseOptions()}
            />
        </div>
    )
}