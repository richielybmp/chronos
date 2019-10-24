import { connect } from "react-redux";
import {
    recoverPassword,
    recoverPasswordSuccess,
    recoverPasswordFailure,
    clearAuthState
} from "chronos-core";
import RecoverPassword from "../../pages/auth/RecoverPassword";

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        recoverPassword: (email: string, callBack: Function) => {
            var promisse = dispatch(recoverPassword(email))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(recoverPasswordFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(recoverPasswordFailure(data.error));
                    }
                    else {
                        dispatch(recoverPasswordFailure(data));
                    }
                }
                else if (!response.error && !data.exception) {
                    dispatch(recoverPasswordSuccess());
                    if (callBack)
                        callBack()
                }
            });
        },

        clearState: () => {
            dispatch(clearAuthState());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecoverPassword);