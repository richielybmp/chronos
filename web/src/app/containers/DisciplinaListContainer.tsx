import { connect } from "react-redux";
import DisciplinaList from "../pages/DisciplinaList";
import {
    deleteDisciplina,
    deleteDisciplinaSuccess,
    deleteDisciplinaFailure,
    fetchAssunto,
    fetchAssuntoFailure,
    fetchAssuntoSuccess,
} from "chronos-core";

const mapStateToProps = (state: any) => ({
});

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
            try {
                dispatch(fetchAssunto(idDisciplina, idAssunto))
                dispatch(fetchAssuntoSuccess({}));
            }
            catch (e) {
                dispatch(fetchAssuntoFailure(e.message));
            }
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DisciplinaList);