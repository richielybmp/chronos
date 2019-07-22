import { connect } from "react-redux";
import { MainNav } from "../shared/components";
import {
    logOutUser,
    logOutUserSuccess,
    logOutUserFailure,
    clearChronosState,
    clearAuthState
} from "chronos-core";

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch: any) => {

    return {
        // Realizar logout.

        logOut: (callback: Function) => {
            var promisse = dispatch(logOutUser())

            promisse.payload.then((response: any) => {
                if (!response.error) {
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
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainNav);
