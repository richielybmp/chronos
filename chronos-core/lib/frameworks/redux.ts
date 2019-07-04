import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { Cronograma } from "../domain";
import { chronosReducer } from "../adapters/redux/chronos";
import { loadState, saveState } from './localStorage'
import { throttle } from "lodash";
import { authReducer } from "..";

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
    cronograma: Cronograma | null | undefined;
    error: any;
    loading: boolean;
}

export type CronogramaStateType = {
    cronogramasList: CronogramasState,
    novoCronograma: CronogramaState,
    cronogramaOnDetail: CronogramaState,
}

const reducers = {
    cronogramas: chronosReducer,
    auth: authReducer
};

export const configureStore = () => {
    const middleware = [];

    if (process.env.NODE_ENV !== "production") {
        middleware.push(createLogger());
    }

    const store = createStore(combineReducers(reducers), loadState(), applyMiddleware(...middleware));
    // const store = createStore(combineReducers(reducers), applyMiddleware(...middleware));
    store.subscribe(throttle(() => {
        cronogramas: saveState(store.getState());
    }, 1000))

    return store;
};

