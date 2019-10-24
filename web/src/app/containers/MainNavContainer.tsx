import { connect } from "react-redux";
import { MainNav } from "../shared/components";
import {
    logOutUser,
    logOutUserSuccess,
    logOutUserFailure,
    clearChronosState,
    clearAuthState,
    fetchCronograma,
    fetchCronogramaSuccess,
    fetchCronogramaFailure
} from "chronos-core";

const mapStateToProps = (state: any) => {
    return {
        cronogramaList: state.cronogramas.cronogramasList.cronogramas,
        authState: state.auth
    }
};

const mapDispatchToProps = (dispatch: any) => {

    return {
        // Realizar logout.

        logOut: (callback: Function) => {
            var promisse = dispatch(logOutUser())

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(logOutUserFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(logOutUserFailure(data.error));
                    }
                    else {
                        dispatch(logOutUserFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(clearAuthState());
                    dispatch(clearChronosState());
                    dispatch(logOutUserSuccess());
                    if (callback)
                        callback()
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
)(MainNav);
