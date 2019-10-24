import React from 'react'
import { Disciplina, Artefato, Material } from 'chronos-core';
import { Statistic } from 'semantic-ui-react';

interface Props {
    disciplina: Disciplina
}

export function StatisticMateriais({ disciplina }: Props) {
    var minutos = totalDeMinutos(disciplina);
    var horas = Math.floor(minutos / 60);
    var tempo = horas > 1 ? horas : minutos;

    return (
        <>
            <Statistic size='tiny'>
                <Statistic.Value>{tempo}</Statistic.Value>
                <Statistic.Label>{horas > 1 ? "Horas estudadas" : "Minutos estudados"}</Statistic.Label>
            </Statistic>
        </>
    )
}

function totalDeMinutos(disciplina: Disciplina) {
    const total = disciplina.assuntos.reduce((aa, element) => {
        var materiais = ObtenhaMateriais(element.artefatos);
        const tot = materiais.reduce((a, b) => {
            return parseInt(a.toString()) + parseInt(b['minutos'].toString());
        }, 0);

        return parseInt(aa.toString()) + parseInt(tot.toString());
    }, 0);

    return total;
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
