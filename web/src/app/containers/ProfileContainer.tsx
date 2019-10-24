import { connect } from "react-redux";
import { clearUserError, updateUser, updateUserSuccess, updateUserFailure, logOutUser, clearAuthState, clearChronosState, logOutUserSuccess, logOutUserFailure } from "chronos-core";
import Profile from "../pages/Profile";
import Utils from "../utils/utils";

const mapStateToProps = (state: any) => {
    return {
        cronogramaList: state.cronogramas.cronogramasList.cronogramas,
        authState: state.auth
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateUser: (name: string) => {
            var promisse = dispatch(updateUser(name))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(updateUserFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(updateUserFailure(data.error));
                    }
                    else {
                        dispatch(updateUserFailure(data));
                    }
                }
                else if (!response.error && !data.exception && !data.error) {
                    dispatch(updateUserSuccess(data));
                }
            });
        },

        clearUserError: () => {
            dispatch(clearUserError())
        },

        logOut: (callback: Function) => {
            var promisse = dispatch(logOutUser())

            promisse.payload.then(async (response: any) => {
                if (!response.error) {
                    await Utils.delay(2000)
                    if (callback) {
                        callback()
                        dispatch(clearChronosState());
                        dispatch(clearAuthState());
                        dispatch(logOutUserSuccess());
                    }
                }
                else {
                    dispatch(logOutUserFailure(response.error));
                }
            });
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);