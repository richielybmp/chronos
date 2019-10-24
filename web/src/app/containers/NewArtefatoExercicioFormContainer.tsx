import { connect } from "react-redux";
import { clearError, Exercicio, createExercicio, createExercicioSuccess, createExercicioFailure, Artefato, updateArtefato, updateArtefatoSuccess, updateArtefatoFailure } from "chronos-core";
import NewArtefatoExercicioForm from "../pages/forms/NewArtefatoExercicioForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createExercicio: (exercicio: Exercicio) => {
            var promisse = dispatch(createExercicio(exercicio));

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(createExercicioFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(createExercicioFailure(data.error));
                    }
                    else {
                        dispatch(createExercicioFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(createExercicioSuccess(data));
                }
            });
        },

        updateArtefato: (artefato: Artefato) => {
            var promisse = dispatch(updateArtefato(artefato));

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(updateArtefatoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(updateArtefatoFailure(data.error));
                    }
                    else {
                        dispatch(updateArtefatoFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(updateArtefatoSuccess(data));
                }
            });
        },

        clearError: () => {
            dispatch(clearError());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewArtefatoExercicioForm);