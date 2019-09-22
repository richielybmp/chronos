import React from 'react'
import { Disciplina, Artefato, Exercicio } from 'chronos-core';
import { Statistic, Icon } from 'semantic-ui-react';

interface Props {
    disciplina: Disciplina,
    option: number,
}

export function StatisticExercicios({ disciplina, option }: Props) {
    var totalExercicios = totalDeExercicios(disciplina);
    var totalAcertos = totalDeAcertos(disciplina);

    return (
        <Statistic size='tiny'>
            <Statistic.Value>
                {totalAcertos}/{totalExercicios}</Statistic.Value>
            <Statistic.Label>Exercícios corretos</Statistic.Label>
        </Statistic>
    );
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
