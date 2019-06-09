import { Cronograma } from "../domain";

export enum EnumActionType {
    ADD_CRONOGRAMA = 'ADD_CRONOGRAMA',
    UPDATE_CRONOGRAMA = 'UPDATE_CRONOGRAMA',
    DELETE_CRONOGRAMA = 'DELETE_CRONOGRAMA',
    SET_ON_DETAIL = 'SET_ON_DETAIL',
}

type ActionType = {
    type: string,
    cronograma: Cronograma,
};

type ActionTypeID = {
    id: string,
    type: string,
};

export const addCronogramaAction = (cronograma: Cronograma): ActionType => ({
    type: EnumActionType.ADD_CRONOGRAMA,
    cronograma: cronograma,
});


export const updateCronogramaAction = (cronograma: Cronograma): ActionType => ({
    type: EnumActionType.UPDATE_CRONOGRAMA,
    cronograma: cronograma,
});

export const deleteCronogramaAction = (id: string): ActionTypeID => ({
    type: EnumActionType.DELETE_CRONOGRAMA,
    id: id,
});

export const setOnDetailAction = (id: string): ActionTypeID => ({
    type: EnumActionType.SET_ON_DETAIL,
    id: id,
});