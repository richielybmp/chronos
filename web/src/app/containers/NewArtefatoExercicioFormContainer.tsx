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
                if (!response.error && !data.exception) {
                    dispatch(createExercicioSuccess(data));
                }
                else {
                    dispatch(createExercicioFailure(data.message));
                }
            });
        },

        updateArtefato: (artefato: Artefato) => {
            var promisse = dispatch(updateArtefato(artefato));

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(updateArtefatoSuccess(data));
                }
                else {
                    dispatch(updateArtefatoFailure(data.message));
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