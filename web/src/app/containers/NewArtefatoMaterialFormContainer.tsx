import { connect } from "react-redux";
import { clearError, Material, createMaterial, createMaterialSuccess, createMaterialFailure, Artefato, updateArtefato, updateArtefatoSuccess, updateArtefatoFailure } from "chronos-core";
import NewArtefatoMaterialForm from "../pages/forms/NewArtefatoMaterialForm";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createMaterial: (material: Material) => {
            var promisse = dispatch(createMaterial(material));

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
)(NewArtefatoMaterialForm);