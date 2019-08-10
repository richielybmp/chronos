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
                if (!response.error) {
                    dispatch(fetchCronogramasSuccess(data));
                }
                else {
                    dispatch(fetchCronogramasFailure(data));
                }
            });
        },

        // Obter um cronograma específico.
        fetchCronograma: (id: string) => {
            try {
                dispatch(fetchCronograma(id))
                dispatch(fetchCronogramaSuccess());
            }
            catch (e) {
                dispatch(fetchCronogramaFailure(e.message));
            }
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CronogramaList);