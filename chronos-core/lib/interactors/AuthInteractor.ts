import { User } from "../domain/User";
import { AxiosPromise } from "axios";
import api from "../services/api";

export class AuthInteractor {


    constructor() {
    }

    // POST
    // '/login'
    // user: User
    signIn(user: User): AxiosPromise<any> {
        return api.post('/login',
            {
                "email": user.email,
                "password": user.password
            }
        )
    }

    // POST
    // '/user'
    // user: User
    signUp(user: User): AxiosPromise<any> {
        return api.post('/user',
            {
                "name": user.name,
                "email": user.email,
                "password": user.password
            }
        )
    }

    // POST
    // '/logout'
    // -
    logOut() {
        return api.post('/logout')
    }

    // POST
    // '/recuperar-senha'
    // email: string, novaSenha: string
    recoverPassword(email: string, novaSenha: string) {
        return api.post('/password/reset',
            {
                'email': email,
                'novaSenha': novaSenha
            }
        )
    }

}