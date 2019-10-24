import { connect } from "react-redux";
import { clearError, Revisao, createRevisao, createRevisaoSuccess, createRevisaoFailure, Artefato, updateArtefato, updateArtefatoSuccess, updateArtefatoFailure } from "chronos-core";
import NewArtefatoRevisaoForm from "../pages/forms/NewArtefatoRevisaoForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createRevisao: (revisao: Revisao) => {
            var promisse = dispatch(createRevisao(revisao))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(createRevisaoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(createRevisaoFailure(data.error));
                    }
                    else {
                        dispatch(createRevisaoFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(createRevisaoSuccess(data));
                }
            });
        },

        updateArtefato: (artefato: Artefato) => {
            var promisse = dispatch(updateArtefato(artefato));

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(updateArtefatoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(updateArtefatoFailure(data.error));
                    }
                    else {
                        dispatch(updateArtefatoFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(updateArtefatoSuccess(data));
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
)(NewArtefatoRevisaoForm);