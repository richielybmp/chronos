import { connect } from "react-redux";
import NewAssuntoForm from "../pages/forms/NewAssuntoForm";
import {
    Assunto,
    createAssunto,
    createAssuntoSuccess,
    createAssuntoFailure,
    clearError
} from "chronos-core";

const mapStateToProps = (state: any) => ({
    cronogramaOnDetail: state.cronogramas.cronogramaOnDetail,
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

        clearError: () => {
            dispatch(clearError())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewAssuntoForm);