import { connect } from "react-redux";
import { logOutUser, logOutUserSuccess, logOutUserFailure, clearChronosState } from "chronos-core";
import { MainNav } from "../shared/components";

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
                    dispatch(logOutUserSuccess());
                    dispatch(clearChronosState());
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
