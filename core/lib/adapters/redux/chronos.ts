import { Cronograma } from "../../domain";
import { CronogramaInteractor } from "../../interactors/CronogramaInteractor";
import { EnumActionType } from "../actionType";
import { ChronosState } from "../../frameworks";

const interactor = new CronogramaInteractor();

type ChronosStateType = {
    cronogramas: Cronograma[],
    cronogramaOnDetail: Cronograma | null | undefined,
}

const INITIAL_STATE: ChronosStateType = {
    cronogramas: [],
    cronogramaOnDetail: null
}

interface CronogramaType {
    type: string,
    cronograma: Cronograma,
};

interface IdType {
    type: string,
    id: string,
};

type ActionType = CronogramaType | IdType

export const cronogramasSelector = (state: any): Cronograma[] => state.cronogramas

export const cronogramaOnDetailSelector = (state: any): Cronograma => state.cronogramaOnDetail

export const chronosReducer = (
    state: ChronosStateType = INITIAL_STATE,
    action: ActionType
): ChronosStateType => {

    switch (action.type) {
        case EnumActionType.ADD_CRONOGRAMA:
            return addCronogramaReducer(state, (action as CronogramaType).cronograma);
        case EnumActionType.UPDATE_CRONOGRAMA:
            // return decrementReducer(state, action);
            return state;
        case EnumActionType.DELETE_CRONOGRAMA:
            // return decrementReducer(state, action);
            return state;
        case EnumActionType.SET_ON_DETAIL:
            return setCronogramaOnDetail(state, (action as IdType).id)
        default:
            return state;
    }
}

const setCronogramaOnDetail = (state: ChronosStateType, id: string): ChronosStateType => {
    return {
        cronogramas: [...state.cronogramas],
        cronogramaOnDetail: state.cronogramas.find(x => x.codigo == id)
    };;
}

const addCronogramaReducer = (
    state: ChronosStateType,
    item: Cronograma,
): ChronosStateType => {
    interactor.insert(item);
    return {
        cronogramas: [...state.cronogramas, item],
        cronogramaOnDetail: state.cronogramaOnDetail
    };
};