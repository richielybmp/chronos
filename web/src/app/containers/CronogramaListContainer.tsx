import { connect } from "react-redux";
import CronogramaList from "../pages/CronogramaList";
import {
    fetchCronogramas,
    fetchCronogramasSuccess,
    fetchCronogramasFailure,
    fetchCronograma,
    fetchCronogramaFailure,
    fetchCronogramaSuccess,
} from "chronos-core";

const mapStateToProps = (state: any) => {
    return {
        cronogramaList: state.cronogramas.cronogramasList
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

        // Obter um cronograma específico.
        fetchCronograma: (id: string) => {
            var promisse = dispatch(fetchCronograma(id))
            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(fetchCronogramaFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(fetchCronogramaFailure(data.error));
                    }
                    else {
                        dispatch(fetchCronogramaFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(fetchCronogramaSuccess(data));
                }
            });
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CronogramaList);