import { connect } from "react-redux";
import { NewCronogramaForm } from "../pages/forms/NewCronogramaForm";
import { createCronograma, createCronogramaSuccess, createCronogramaFailure, resetNovoCronograma } from "core"

const mapStateToProps = (state: any) => ({
    novoCronograma: state.cronogramas.novoCronograma
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

        resetMe: () => {
            dispatch(resetNovoCronograma())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewCronogramaForm);