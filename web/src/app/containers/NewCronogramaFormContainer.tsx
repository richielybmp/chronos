import { connect } from "react-redux";
import { NewCronogramaForm } from "../pages/forms/NewCronogramaForm";
import { createCronograma, createCronogramaSuccess, createCronogramaFailure, resetNovoCronograma, updateCronograma, updateCronogramaFailure, updateCronogramaSuccess } from "core"

const mapStateToProps = (state: any) => ({
    novoCronograma: state.cronogramas.novoCronograma,
    cronogramaOnDetail: state.cronogramas.cronogramaOnDetail,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        createCronograma: (data: any, jwtToken: any) => {
            var promisse = dispatch(createCronograma(data, jwtToken))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error) {
                    dispatch(createCronogramaSuccess(data));
                }
                else {
                    dispatch(createCronogramaFailure(data));
                }
            });
        },

        editCronograma: (data: any, jwtToken: any) => {
            var promisse = dispatch(updateCronograma(data))

            promisse.payload.then((response: any) => {
                const data = response.data;
                debugger
                if (!response.error) {
                    dispatch(updateCronogramaSuccess(data));
                }
                else {
                    dispatch(updateCronogramaFailure(data));
                }
            });
        },

        resetMe: () => {
            dispatch(resetNovoCronograma())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewCronogramaForm);