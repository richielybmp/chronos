import { connect } from "react-redux";
import { clearAuthState, confirmPassword, confirmPasswordSuccess, confirmPasswordFailure } from "chronos-core";
import ConfirmPassword from "../../pages/auth/ConfirmPassword";

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        confirmPassword: (novaSenha: string, callBack: Function) => {
            var promisse = dispatch(confirmPassword(novaSenha))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(confirmPasswordFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(confirmPasswordFailure(data.error));
                    }
                    else {
                        dispatch(confirmPasswordFailure(data));
                    }
                }
                else if (!response.error && !data.exception) {
                    dispatch(confirmPasswordSuccess(data));
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
)(ConfirmPassword);