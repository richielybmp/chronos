import { connect } from "react-redux";
import { clearError, Revisao, createRevisao, createRevisaoSuccess, createRevisaoFailure } from "chronos-core";
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
        updateRevisao: (revisao: Revisao) => { },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewArtefatoRevisaoForm);