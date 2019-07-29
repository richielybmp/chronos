import { Cronograma, Assunto } from "..";

export type ChronosStateType = {
    cronogramasList: CronogramasState,
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
    assuntoOnDetail: AssuntoState,
}

export interface CronogramasState {
    cronogramas: Cronograma[];
    error: any;
    loading: boolean;
}

export interface CronogramaState {
    old: Cronograma | null | undefined;
    cronograma: Cronograma | null | undefined;
    error: any;
    loading: boolean;
}

export interface AssuntoState {
    old: Assunto | null | undefined;
    assunto: Assunto | null | undefined;
    error: any;
    loading: boolean;
}

export type CronogramaStateType = {
    cronogramasList: CronogramasState,
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
    assuntoOnDetail: AssuntoState,
}
