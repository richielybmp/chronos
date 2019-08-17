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
                if (!data.error && !data.exception) {
                    dispatch(clearAuthState());
                    dispatch(clearChronosState());
                    dispatch(logOutUserSuccess());
                    if (callback)
                        callback()
                }
                else {
                    dispatch(logOutUserFailure(response.error));
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
)(MainNav);
