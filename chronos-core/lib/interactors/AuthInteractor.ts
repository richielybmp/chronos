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
        return api.post('/user', {
            params: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        })
    }

}