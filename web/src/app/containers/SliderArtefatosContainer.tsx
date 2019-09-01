import { connect } from "react-redux";
import { clearError, deleteArtefato, deleteArtefatoSuccess, deleteArtefatoFailure } from "chronos-core";
import { SliderArtefatosContent } from "../shared/components";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteArtefato: (idArtefato: string, tipoArtefato: number, callback: Function) => {
            var promisse = dispatch(deleteArtefato(idArtefato, tipoArtefato))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (!response.error && (!data.exception || response.status !== "404")) {
                    dispatch(deleteArtefatoSuccess(data));
                    if (callback)
                        callback()
                }
                else {
                    dispatch(deleteArtefatoFailure(data.message));
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
)(SliderArtefatosContent);