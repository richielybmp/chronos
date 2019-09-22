import { connect } from "react-redux";
import CronogramaDetail from "../pages/Cronograma";
import {
    deleteCronograma,
    deleteCronogramaSuccess,
    deleteCronogramaFailure,
    clearError,
    setDisciplinaOnDetail
} from "chronos-core";

const mapStateToProps = (state: any) => {
    return {
        cronogramaOnDetail: state.cronogramas.cronogramaOnDetail
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        delete: (id: string, callback: Function) => {
            var promisse = dispatch(deleteCronograma(id))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (!response.error && (!data.exception || response.status !== "404")) {
                    dispatch(deleteCronogramaSuccess(data));
                    if (callback)
                        callback()
                }
                else {
                    dispatch(deleteCronogramaFailure(data.message));
                }
            });
        },

        clearError: () => {
            dispatch(clearError())
        },

        setDisciplinaOnDetail: (disciplina: string) => {
            dispatch(setDisciplinaOnDetail(disciplina));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CronogramaDetail);