import { Cronograma } from "../../domain";
import { CronogramaInteractor } from "../../interactors/CronogramaInteractor";
import { EnumActionType } from "../actionType";
import { ChronosState } from "../../frameworks";

const interactor = new CronogramaInteractor();

type ChronosStateType = Cronograma[]

const INITIAL_STATE: Cronograma[] = []

type ActionType = {
    type: string,
    cronograma: Cronograma,
};

export const chronosSelector = (state: ChronosState): Cronograma[] => state.cronogramas

export const chronosReducer = (
    state: ChronosStateType = INITIAL_STATE,
    action: ActionType
): ChronosStateType => {

    switch (action.type) {
        case EnumActionType.ADD_CRONOGRAMA:
            return addCronogramaReducer(state, action.cronograma);
        case EnumActionType.UPDATE_CRONOGRAMA:
            // return decrementReducer(state, action);
            return state;
        case EnumActionType.DELETE_CRONOGRAMA:
            // return decrementReducer(state, action);
            return state;
        default:
            return state;
    }
}

const addCronogramaReducer = (
    state: ChronosStateType,
    item: Cronograma,
): ChronosStateType => {
    interactor.insert(item);
    return [...state, item];
};