import React from 'react'
import { Disciplina, Artefato, Revisao, Material } from 'chronos-core';
import { Statistic } from 'semantic-ui-react';

interface Props {
    disciplina: Disciplina
}

export function StatisticRevisoes({ disciplina }: Props) {
    var total = totalDeRevisoes(disciplina);

    return (
        <>
            <Statistic size='tiny'>
                <Statistic.Value>{total}</Statistic.Value>
                <Statistic.Label>Revisões</Statistic.Label>
            </Statistic>
        </>
    )
}

function totalDeRevisoes(disciplina: Disciplina) {
    const total = disciplina.assuntos.reduce((aa, element) => {
        var revicoes = ObtenhaRevisoes(element.artefatos);

        return parseInt(aa.toString()) + parseInt(revicoes.length.toString());
    }, 0);

    return total;
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
