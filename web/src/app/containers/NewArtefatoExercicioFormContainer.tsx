import { connect } from "react-redux";
import { clearError, Exercicio, createExercicio, createExercicioSuccess, createExercicioFailure } from "chronos-core";
import NewArtefatoExercicioForm from "../pages/forms/NewArtefatoExercicioForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createExercicio: (exercicio: Exercicio) => {
            var promisse = dispatch(createExercicio(exercicio))
            debugger
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

        updateExercicio: (exercicio: Exercicio) => { },

        clearError: () => {
            dispatch(clearError());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewArtefatoExercicioForm);