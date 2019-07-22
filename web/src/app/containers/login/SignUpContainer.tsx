import { connect } from "react-redux";
import { User } from "chronos-core/dist/domain/User";
import SignUp from "../../pages/SignUp";
import {
    signUpUser,
    signUpUserFailure,
    signUpUserSuccess,
    clearAuthState
} from "chronos-core";

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // Cadastrar novo usuário.
        signUp: (user: User) => {
            var promisse = dispatch(signUpUser(user))

            promisse.payload.then((response: any) => {
                const data = response.data;

                if (!response.error && !data.exception) {
                    dispatch(signUpUserSuccess(data));
                }
                else {
                    if (data.exception) {
                        dispatch(signUpUserFailure(data.message));
                    }
                    else {
                        dispatch(signUpUserFailure(data));
                    }
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
)(SignUp);