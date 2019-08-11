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
                if (!response.error && !data.exception) {
                    dispatch(updateUserSuccess(data));
                }
                else {
                    dispatch(updateUserFailure(data.message));
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

// const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);