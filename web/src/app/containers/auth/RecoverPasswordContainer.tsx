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
        recoverPassword: (email: string, novaSenha: string, callBack: Function) => {
            var promisse = dispatch(recoverPassword(email, novaSenha))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!data.error) {
                    dispatch(recoverPasswordSuccess());
                    if (callBack)
                        callBack()
                }
                else {
                    dispatch(recoverPasswordFailure(data.error));
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