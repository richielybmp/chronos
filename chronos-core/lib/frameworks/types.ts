import { Cronograma } from "..";

export type ChronosStateType = {
    cronogramasList: CronogramasState,
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
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

export type CronogramaStateType = {
    cronogramasList: CronogramasState,
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
}
