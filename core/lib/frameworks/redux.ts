import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { Cronograma } from "../domain";
import { chronosReducer } from "../adapters/redux/chronos";

export type ChronosState = {
    cronogramas: Cronograma[]
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
