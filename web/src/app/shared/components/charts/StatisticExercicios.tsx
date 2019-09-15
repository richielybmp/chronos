import React from 'react'
import { Disciplina, Artefato, Exercicio } from 'chronos-core';
import { Statistic } from 'semantic-ui-react';
import { Polar } from 'react-chartjs-2';

interface Props {
    disciplina: Disciplina
}

export function StatisticExercicios({ disciplina }: Props) {
    var totalExercicios = totalDeExercicios(disciplina);
    var totalAcertos = totalDeAcertos(disciplina);
    return (
        <>
            <Statistic size='tiny'>
                <Statistic.Value>{totalExercicios}</Statistic.Value>
                <Statistic.Label>Total de exercícios feitos</Statistic.Label>
            </Statistic>

            <Statistic size='tiny'>
                <Statistic.Value>{totalAcertos}</Statistic.Value>
                <Statistic.Label>Total de exercícios acertados</Statistic.Label>
            </Statistic>
        </>
    )
}

function totalDeExercicios(disciplina: Disciplina) {
    const total = disciplina.assuntos.reduce((aa, element) => {
        var exercicios = ObtenhaExercicios(element.artefatos);
        const tot = exercicios.reduce((a, b) => {
            return a + b['quantidade'];
        }, 0);

        return parseInt(aa.toString()) + parseInt(tot.toString());
    }, 0);

    return total;
}

function totalDeAcertos(disciplina: Disciplina) {
    const total = disciplina.assuntos.reduce((aa, element) => {
        var exercicios = ObtenhaExercicios(element.artefatos);
        const tot = exercicios.reduce((a, b) => {
            return a + b['acertos'];
        }, 0);

        return parseInt(aa.toString()) + parseInt(tot.toString());
    }, 0);

    return total;
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
