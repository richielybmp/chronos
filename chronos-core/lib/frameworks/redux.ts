import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { Cronograma } from "../domain";
import { chronosReducer } from "../adapters/redux/chronos";
import { loadState, saveState } from './localStorage'
import { throttle } from "lodash";
import { authReducer } from "..";

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

    store.subscribe(throttle(() => {
        cronogramas: saveState(store.getState());
    }, 1000))

    return store;
};

