import { connect } from "react-redux";
import { signUpUser, signUpUserFailure, signUpUserSuccess } from "chronos-core";
import { User } from "chronos-core/dist/domain/User";
import SignUp from "../../pages/SignUp";

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
                if (!response.error) {
                    dispatch(signUpUserSuccess(data));
                }
                else {
                    dispatch(signUpUserFailure(data));
                }
            });
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);