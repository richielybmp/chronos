import { connect } from "react-redux";
import { clearError, Exercicio } from "chronos-core";
import NewArtefatoExercicioForm from "../pages/forms/NewArtefatoExercicioForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createExercicio: (idAssunto: string, exercicio: Exercicio) => { },
        updateExercicio: (idAssunto: string, exercicio: Exercicio) => { },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewArtefatoExercicioForm);