import { connect } from "react-redux";
import { clearError, fetchCronogramas, fetchCronogramasSuccess, fetchCronogramasFailure } from "chronos-core";
import Relatorios from "../pages/Relatorios";

const mapStateToProps = (state: any) => {
    return {
        cronogramasState: state.cronogramas.cronogramasList,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // Obter todos os cronogramas.
        fetchCronogramas: () => {
            var promisse = dispatch(fetchCronogramas())
            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!data.error && !data.exception) {
                    dispatch(fetchCronogramasSuccess(data));
                }
                else {
                    dispatch(fetchCronogramasFailure(data));
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
)(Relatorios);