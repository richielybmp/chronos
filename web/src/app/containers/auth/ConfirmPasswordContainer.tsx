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

                if (!data.error && !data.exception) {
                    dispatch(confirmPasswordSuccess(data));
                    if (callBack)
                        callBack()
                }
                else {
                    dispatch(confirmPasswordFailure(data.error ? data.error : data.message));
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