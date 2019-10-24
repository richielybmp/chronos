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

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(deleteCronogramaFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(deleteCronogramaFailure(data.error));
                    }
                    else {
                        dispatch(deleteCronogramaFailure(data));
                    }
                }
                else if (!response.error && (!data.exception || response.status !== "404") && !data.error) {
                    dispatch(deleteCronogramaSuccess(data));
                    if (callback)
                        callback()
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