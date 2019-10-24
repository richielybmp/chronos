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

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(createDisciplinaFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(createDisciplinaFailure(data.error));
                    }
                    else {
                        dispatch(createDisciplinaFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(createDisciplinaSuccess(data));
                }
            });
        },

        updateDisciplina: (idCronograma: string, disciplina: Disciplina) => {
            var promisse = dispatch(updateDisciplina(idCronograma, disciplina))
            promisse.payload.update.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(createDisciplinaFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(createDisciplinaFailure(data.error));
                    }
                    else {
                        dispatch(updateDisciplinaFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(updateDisciplinaSuccess(data));
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