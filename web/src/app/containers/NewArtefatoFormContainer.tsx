import { connect } from "react-redux";
import { Artefato } from "chronos-core/dist/domain/Artefato";
import { clearError } from "chronos-core";
import NewArtefatoForm from "../pages/forms/NewArtefatoForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createArtefato: (idAssunto: string, artefato: Artefato) => { },
        updateArtefato: (idAssunto: string, assunto: Artefato) => { },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewArtefatoForm);