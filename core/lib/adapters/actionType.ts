import { Cronograma } from "../domain";

export enum EnumActionType {
    ADD_CRONOGRAMA = 'ADD_CRONOGRAMA',
    UPDATE_CRONOGRAMA = 'UPDATE_CRONOGRAMA',
    DELETE_CRONOGRAMA = 'DELETE_CRONOGRAMA',
}

type ActionType = {
    type: string,
    cronograma: Cronograma,
};

type ActionTypeID = {
    type: string,
    id: number,
};

export const addCronogramaAction = (cronograma: Cronograma): ActionType => ({
    type: EnumActionType.ADD_CRONOGRAMA,
    cronograma: cronograma,
});


export const updateCronogramaAction = (cronograma: Cronograma): ActionType => ({
    type: EnumActionType.UPDATE_CRONOGRAMA,
    cronograma: cronograma,
});

export const deleteCronogramaAction = (id: number): ActionTypeID => ({
    type: EnumActionType.DELETE_CRONOGRAMA,
    id: id,
});




// import { Cronograma } from "../Cronograma";

// type ActionType = {
//     type: string,
//     item: Cronograma
// };

// const ADD_CRONOGRAMA = "ADD_CRONOGRAMA";
// const UPDATE_CRONOGRAMA = "UPDATE_CRONOGRAMA";
// const DELETE_CRONOGRAMA = "DELETE_CRONOGRAMA";

// export const addCronograma = (item: Cronograma): ActionType => ({
//     type: ADD_CRONOGRAMA,
//     item,
// });

// export const updateCronograma = (item: Cronograma): ActionType => ({
//     type: UPDATE_CRONOGRAMA,
//     item,
// });

// export const deleteCronograma = (item: Cronograma): ActionType => ({
//     type: DELETE_CRONOGRAMA,
//     item,
// });