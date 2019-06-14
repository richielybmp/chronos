import { Cronograma } from "../../domain";

type ActionType = {
    type: string,
    cronograma: Cronograma,
};

type ActionTypeID = {
    id: string,
    type: string,
};

export type ActionTypes = ActionType | ActionTypeID