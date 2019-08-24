import { connect } from "react-redux";
import { clearError } from "chronos-core";
import { SliderArtefatosContent } from "../shared/components";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteArtefato: (idArtefato: string) => {
            alert(`delete artefato ${idArtefato}`);
        },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SliderArtefatosContent);