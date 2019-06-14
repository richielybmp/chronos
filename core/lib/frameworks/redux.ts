import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { Cronograma } from "../domain";
import { chronosReducer } from "../adapters/redux/chronos";

export interface CronogramaState {
    cronogramas: Cronograma[];
    error: any;
    loading: boolean;
}

export type CronogramaStateType = {
    cronogramasList: CronogramaState,
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
}

const reducers = {
    cronogramas: chronosReducer,
};

export const configureStore = () => {
    const middleware = [];

    if (process.env.NODE_ENV !== "production") {
        middleware.push(createLogger());
    }

    return createStore(combineReducers(reducers), applyMiddleware(...middleware));
};
