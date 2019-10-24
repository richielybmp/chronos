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

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(fetchCronogramasFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(fetchCronogramasFailure(data.error));
                    }
                    else {
                        dispatch(fetchCronogramasFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(fetchCronogramasSuccess(data));
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