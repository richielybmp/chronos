import { connect } from "react-redux";
import {
    fetchCronogramas,
    fetchCronogramasSuccess,
    fetchCronogramasFailure,
    fetchCronogramaFailure,
    fetchCronogramaSuccess,
    fetchCronograma
} from "core";
import CronogramaList from "../pages/CronogramaList";

const mapStateToProps = (state: any) => {
    return {
        cronogramaList: state.cronogramas.cronogramasList
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
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

        fetchCronograma: (id: string) => {
            var promisse = dispatch(fetchCronograma(id))
            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error) {
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