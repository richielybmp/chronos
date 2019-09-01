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
                if (!response.error && !data.exception) {
                    dispatch(createRevisaoSuccess(data));
                }
                else {
                    dispatch(createRevisaoFailure(data.message));
                }
            });
        },

        updateArtefato: (artefato: Artefato) => {
            var promisse = dispatch(updateArtefato(artefato));

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(updateArtefatoSuccess(data));
                }
                else {
                    dispatch(updateArtefatoFailure(data.message));
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