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

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(createAssuntoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(createAssuntoFailure(data.error));
                    }
                    else {
                        dispatch(createAssuntoFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(createAssuntoSuccess(data));
                }
            });
        },

        editAssunto: (assunto: Assunto) => {
            var promisse = dispatch(updateAssunto(assunto))
            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(updateAssuntoFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(updateAssuntoFailure(data.error));
                    }
                    else {
                        dispatch(updateAssuntoFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(updateAssuntoSuccess(data));
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