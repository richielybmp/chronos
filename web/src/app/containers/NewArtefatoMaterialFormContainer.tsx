import { connect } from "react-redux";
import { clearError, Material, createMaterial, createMaterialSuccess, createMaterialFailure } from "chronos-core";
import NewArtefatoMaterialForm from "../pages/forms/NewArtefatoMaterialForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createMaterial: (material: Material) => {
            var promisse = dispatch(createMaterial(material))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(createMaterialSuccess(data));
                }
                else {
                    dispatch(createMaterialFailure(data.message));
                }
            });
        },

        updateMaterial: (material: Material) => { },

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewArtefatoMaterialForm);