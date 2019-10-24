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

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(deleteArtefatoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(deleteArtefatoFailure(data.error));
                    }
                    else {
                        dispatch(deleteArtefatoFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(deleteArtefatoSuccess(data));
                    if (callback)
                        callback()
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