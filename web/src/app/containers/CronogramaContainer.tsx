import { connect } from "react-redux";
import CronogramaDetail from "../pages/Cronograma";
import { deleteCronograma, deleteCronogramaSuccess, deleteCronogramaFailure, clearError } from "chronos-core";

const mapStateToProps = (state: any) => {
    return {
        cronogramaOnDetail: state.cronogramas.cronogramaOnDetail
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // Obter todos os cronogramas.
        delete: (id: string) => {
            var promisse = dispatch(deleteCronograma(id))

            promisse.payload.then((response: any) => {
                const data = response.data;
                console.log(response);

                if (!response.error && !data.exception || response.status != "404") {
                    dispatch(deleteCronogramaSuccess(data));
                }
                else {
                    dispatch(deleteCronogramaFailure(data.message));
                }
            });
        },

        clearError: () => {
            dispatch(clearError())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CronogramaDetail);