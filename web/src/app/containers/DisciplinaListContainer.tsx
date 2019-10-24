import { connect } from "react-redux";
import DisciplinaList from "../pages/DisciplinaList";
import {
    deleteDisciplina,
    deleteDisciplinaSuccess,
    deleteDisciplinaFailure,
    fetchAssunto,
    fetchAssuntoFailure,
    fetchAssuntoSuccess,
    clearAssuntoOnDetail,
    setDisciplinaOnDetail,
} from "chronos-core";

const mapStateToProps = (state: any) => {
    return {
        disciplinaOnDetail: state.cronogramas.disciplinaOnDetail
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteDisciplina: (id: string) => {
            var promisse = dispatch(deleteDisciplina(id))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(deleteDisciplinaFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(deleteDisciplinaFailure(data.error));
                    }
                    else {
                        dispatch(deleteDisciplinaFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(deleteDisciplinaSuccess(data));
                }
            });
        },

        fetchAssunto: (idDisciplina: string, idAssunto: string) => {
            var promisse = dispatch(fetchAssunto(idDisciplina, idAssunto))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(fetchAssuntoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(fetchAssuntoFailure(data.error));
                    }
                    else {
                        dispatch(fetchAssuntoFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(fetchAssuntoSuccess(data));
                }
            });
        },

        clearAssuntoOnDetail: () => {
            dispatch(clearAssuntoOnDetail());
        },

        setDisciplinaOnDetail: (disciplina: string) => {
            dispatch(setDisciplinaOnDetail(disciplina));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DisciplinaList);