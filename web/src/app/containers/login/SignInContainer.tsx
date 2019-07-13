import { connect } from "react-redux";
import { signInUser, signInUserSuccess, signInUserFailure, clearAuthState } from "chronos-core";
import { User } from "chronos-core/dist/domain/User";
import Login from "../../pages/SignIn";

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
                if (!data.error) {
                    dispatch(signInUserSuccess(data));
                }
                else {
                    dispatch(signInUserFailure(data.error));
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
)(Login);