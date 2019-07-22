import { connect } from "react-redux";
import NewDisciplinaForm from "../pages/forms/NewDisciplinaForm";
import {
    Disciplina,
    updateDisciplina,
    updateDisciplinaSuccess,
    updateDisciplinaFailure,
    createDisciplina,
    createDisciplinaSuccess,
    createDisciplinaFailure,
    clearError
} from "chronos-core";

const mapStateToProps = (state: any) => ({
    cronogramaOnDetail: state.cronogramas.cronogramaOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createDisciplina: (id: string, disciplina: Disciplina) => {
            var promisse = dispatch(createDisciplina(id, disciplina))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(createDisciplinaSuccess(data));
                }
                else {
                    dispatch(createDisciplinaFailure(data.message));
                }
            });
        },

        updateDisciplina: (idCronograma: string, disciplina: Disciplina) => {
            var promisse = dispatch(updateDisciplina(idCronograma, disciplina))

            promisse.payload.update.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(updateDisciplinaSuccess(data));
                }
                else {
                    dispatch(updateDisciplinaFailure(data.message));
                }
            });
        },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewDisciplinaForm);