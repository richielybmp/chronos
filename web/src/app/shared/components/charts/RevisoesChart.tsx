import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Disciplina, Assunto, Revisao, Artefato, EnumEscopo } from 'chronos-core';

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

function ObtenhaRevisoes(artefatos: Artefato[]) {
    var exercicios: Revisao[] = [];

    artefatos.forEach(element => {
        if (element.tipoArtefato === 1) {
            exercicios.push(element as Revisao);
        }
    });

    return exercicios;
}

function ObtenhaDadosAssuntos(assuntos: Assunto[]) {

    const dados_disciplinas = {
        labels: ["Diária", "Semanal", "Quinzenal", "Mensal"],
        datasets:
            assuntos.map((el, i) => {
                const { escopo_diario, escopo_semanal, escopo_quinzenal, escopo_mensal } = ObtenhaEscopos(el);
                return {
                    label: el.descricao,
                    backgroundColor: 'rgba(77,65,127,0.2)',
                    borderColor: 'rgba(77,69,110,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(78,68,117,0.4)',
                    hoverBorderColor: 'rgba(77,65,127,1)',
                    data: [escopo_diario.length, escopo_semanal.length, escopo_quinzenal.length, escopo_mensal.length]
                }
            })
    };

    return dados_disciplinas;
}


function ObtenhaEscopos(el: Assunto) {
    const revisoes = ObtenhaRevisoes(el.artefatos);
    const escopo_diario: Revisao[] = [];
    const escopo_semanal: Revisao[] = [];
    const escopo_quinzenal: Revisao[] = [];
    const escopo_mensal: Revisao[] = [];

    for (let i = 0; i < revisoes.length; i++) {

        if (revisoes[i].escopo == EnumEscopo.DIARIA) {
            escopo_diario.push(revisoes[i]);
        }
        if (revisoes[i].escopo == EnumEscopo.SEMANAL) {
            escopo_semanal.push(revisoes[i]);
        }
        if (revisoes[i].escopo == EnumEscopo.QUINZENAL) {
            escopo_quinzenal.push(revisoes[i]);
        }
        if (revisoes[i].escopo == EnumEscopo.MENSAL) {
            escopo_mensal.push(revisoes[i]);
        }
    }
    return { escopo_diario, escopo_semanal, escopo_quinzenal, escopo_mensal };
}

export function RevisoesChart(props: Props) {
    return (
        <div className="chart-container">
            <h2 className="center-content">Revisões</h2>
            <Bar
                data={ObtenhaDadosAssuntos(props.disciplina.assuntos)}
                height={10}
                options={baseOptions()}
            />
        </div>
    )
}