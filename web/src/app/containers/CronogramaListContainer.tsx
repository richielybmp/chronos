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
                if (!data.error && !data.exception) {
                    dispatch(fetchCronogramasSuccess(data));
                }
                else {
                    dispatch(fetchCronogramasFailure(data));
                }
            });
        },

        // Obter um cronograma específico.
        fetchCronograma: (id: string) => {
            var promisse = dispatch(fetchCronograma(id))
            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!data.error && !data.exception) {
                    dispatch(fetchCronogramaSuccess(data));
                }
                else {
                    dispatch(fetchCronogramaFailure(data));
                }
            });
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CronogramaList);