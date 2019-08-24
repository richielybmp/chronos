import { connect } from "react-redux";
import { clearAuthState } from "chronos-core";
import ConfirmPassword from "../../pages/auth/ConfirmPassword";

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        confirmPassword: (novaSenha: string, callBack: Function) => {
            // var promisse = dispatch(confirmPassword(novaSenha))

            // promisse.payload.then((response: any) => {
            //     const data = response.data;
            //     if (!data.error && !data.exception) {
            //         dispatch(confirmPasswordSuccess());
            if (callBack)
                callBack()
            //     }
            //     else {
            //         dispatch(confirmPasswordFailure(data.error));
            //     }
            // });
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