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

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(createMaterialFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(createMaterialFailure(data.error));
                    }
                    else {
                        dispatch(createMaterialFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(createMaterialSuccess(data));
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
)(NewArtefatoMaterialForm);