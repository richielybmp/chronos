import { connect } from "react-redux";
import { signInUser, signInUserSuccess, signInUserFailure } from "chronos-core";
import { User } from "chronos-core/dist/domain/User";
import Login from "../../pages/Login";

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // Obter todos os cronogramas.
        signIn: (user: User) => {
            var promisse = dispatch(signInUser(user))

            promisse.payload.then((response: any) => {
                const data = response.data;
                if (!response.error) {
                    dispatch(signInUserSuccess(data));
                }
                else {
                    dispatch(signInUserFailure(data));
                }
            });
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);