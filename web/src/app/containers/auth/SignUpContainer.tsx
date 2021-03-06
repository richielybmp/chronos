import { connect } from "react-redux";
import { User } from "chronos-core/dist/domain/User";
import SignUp from "../../pages/auth/SignUp";
import {
    signUpUser,
    signUpUserFailure,
    signUpUserSuccess,
    clearAuthState,
    clearAuthStateSuccess
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

                if (response.status === 500 || data.error) {
                    if (data.exception) {
                        dispatch(signUpUserFailure(data.message));
                    }
                    else if (data.error) {
                        dispatch(signUpUserFailure(data.error));
                    }
                    else {
                        dispatch(signUpUserFailure(data));
                    }
                }
                else if (!response.error && !data.exception) {
                    dispatch(signUpUserSuccess(data));
                }
            });
        },

        clearState: async () => {
            var promisse = dispatch(clearAuthState());

            await promisse.payload.then((response: any) => {
                if (response) {
                    dispatch(clearAuthStateSuccess())
                }
            })
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);