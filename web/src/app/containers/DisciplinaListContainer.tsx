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
                if (!response.error && !data.exception) {
                    dispatch(deleteDisciplinaSuccess(data));
                }
                else {
                    dispatch(deleteDisciplinaFailure(data.message));
                }
            });
        },

        fetchAssunto: (idDisciplina: string, idAssunto: string) => {
            var promisse = dispatch(fetchAssunto(idDisciplina, idAssunto))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(fetchAssuntoSuccess(data));
                }
                else {
                    dispatch(fetchAssuntoFailure(data.message));
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