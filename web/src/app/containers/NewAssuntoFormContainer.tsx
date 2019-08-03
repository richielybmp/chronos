import { connect } from "react-redux";
import NewAssuntoForm from "../pages/forms/NewAssuntoForm";
import {
    Assunto,
    createAssunto,
    createAssuntoSuccess,
    createAssuntoFailure,
    clearError,
    updateAssuntoSuccess,
    updateAssunto,
    updateAssuntoFailure,
} from "chronos-core";

const mapStateToProps = (state: any) => ({
    assuntoOnDetail: state.cronogramas.assuntoOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createAssunto: (assunto: Assunto) => {
            var promisse = dispatch(createAssunto(assunto))
            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(createAssuntoSuccess(data));
                }
                else {
                    dispatch(createAssuntoFailure(data.message));
                }
            });
        },

        editAssunto: (assunto: Assunto) => {
            var promisse = dispatch(updateAssunto(assunto))
            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error && !data.exception) {
                    dispatch(updateAssuntoSuccess(data));
                }
                else {
                    dispatch(updateAssuntoFailure(data.message));
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
)(NewAssuntoForm);