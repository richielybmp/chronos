import { connect } from "react-redux";
import { clearError, Material } from "chronos-core";
import NewArtefatoMaterialForm from "../pages/forms/NewArtefatoMaterialForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createMaterial: (idAssunto: string, material: Material) => { },
        updateMaterial: (idAssunto: string, material: Material) => { },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewArtefatoMaterialForm);