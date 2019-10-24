import { connect } from "react-redux";
import { deleteAssunto, deleteAssuntoSuccess, deleteAssuntoFailure, fetchAssunto, fetchAssuntoSuccess, fetchAssuntoFailure, Assunto, updateAssunto, updateAssuntoSuccess, updateAssuntoFailure, clearError, fetchCronograma, fetchCronogramaSuccess, fetchCronogramaFailure } from "chronos-core";
import AssuntoDetail from "../pages/Assunto";

const mapStateToProps = (state: any) => {
    return {
        assuntoOnDetail: state.cronogramas.assuntoOnDetail,
        cronogramaOnDetail: state.cronogramas.cronogramaOnDetail,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        delete: (id: string, callback: Function) => {
            var promisse = dispatch(deleteAssunto(id))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(deleteAssuntoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(deleteAssuntoFailure(data.error));
                    }
                    else {
                        dispatch(deleteAssuntoFailure(data));
                    }
                }
                else if (!response.error && (!data.exception || response.status !== "404") && !data.error) {
                    dispatch(deleteAssuntoSuccess(data));
                    if (callback)
                        callback()
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

        editAssunto: (assunto: Assunto) => {
            var promisse = dispatch(updateAssunto(assunto))
            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(updateAssuntoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(updateAssuntoFailure(data.error));
                    }
                    else {
                        dispatch(updateAssuntoFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(updateAssuntoSuccess(data));
                }
            });
        },

        clearError: () => {
            try {
                dispatch(clearError());
            }
            catch {
            }
        },

        // Obter um cronograma específico.
        fetchCronograma: (id: string) => {
            var promisse = dispatch(fetchCronograma(id))
            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(fetchCronogramaFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(fetchCronogramaFailure(data.error));
                    }
                    else {
                        dispatch(fetchCronogramaFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(fetchCronogramaSuccess(data));
                }
            });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AssuntoDetail);