import { connect } from "react-redux";
import { clearError, Revisao } from "chronos-core";
import NewArtefatoRevisaoForm from "../pages/forms/NewArtefatoRevisaoForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createRevisao: (idAssunto: string, revisao: Revisao) => { },
        updateRevisao: (idAssunto: string, revisao: Revisao) => { },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewArtefatoRevisaoForm);