import { connect } from "react-redux";
import { NewCronogramaForm } from "../pages/forms/NewCronogramaForm";
import {
    createCronograma,
    createCronogramaSuccess,
    createCronogramaFailure,
    resetNovoCronograma,
    updateCronograma,
    updateCronogramaFailure,
    updateCronogramaSuccess,
    clearError
} from "chronos-core"

const mapStateToProps = (state: any) => ({
    novoCronograma: state.cronogramas.novoCronograma,
    cronogramaOnDetail: state.cronogramas.cronogramaOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createCronograma: (data: any) => {
            var promisse = dispatch(createCronograma(data))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(createCronogramaSuccess(data));
                }
                else {
                    dispatch(createCronogramaFailure(data.message));
                }
            });
        },

        editCronograma: (data: any, ) => {
            var promisse = dispatch(updateCronograma(data))

            promisse.payload.update.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(updateCronogramaSuccess(data));
                }
                else {
                    dispatch(updateCronogramaFailure(data.message));
                }
            });
        },

        resetMe: () => {
            dispatch(resetNovoCronograma())
        },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewCronogramaForm);