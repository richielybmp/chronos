import { connect } from "react-redux";
import { User } from "chronos-core/dist/domain/User";
import Login from "../../pages/auth/SignIn";
import {
    signInUser,
    signInUserSuccess,
    signInUserFailure,
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
        // Realizar login.
        signIn: (user: User) => {
            var promisse = dispatch(signInUser(user))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!data.error && !data.exception) {
                    dispatch(signInUserSuccess(data));
                }
                else {
                    dispatch(signInUserFailure(data.error));
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
)(Login);