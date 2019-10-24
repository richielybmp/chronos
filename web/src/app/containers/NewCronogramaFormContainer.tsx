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

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(createCronogramaFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(createCronogramaFailure(data.error));
                    }
                    else {
                        dispatch(createCronogramaFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(createCronogramaSuccess(data));
                }
            });
        },

        editCronograma: (data: any, ) => {
            var promisse = dispatch(updateCronograma(data))

            promisse.payload.update.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(updateCronogramaFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(updateCronogramaFailure(data.error));
                    }
                    else {
                        dispatch(updateCronogramaFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(updateCronogramaSuccess(JSON.parse(response.config.data)));
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