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
    recoverPassword(email: string) {
        return api.post('/email-reset-password',
            {
                'email': email,
            }
        )
    }

    // PUT
    // '/user'
    // nome: string
    updateUser(name: string) {
        return api.put(`/users/${JSON.parse(localStorage.state).auth.user.user.uuid}`, {
            'name': name
        })
    }

    confirmPassword(senha: string) {
        const params: any = this.obtenhaParams();
        return api.post('/reset-password',
            {
                'email': 'email',
                'token': params["token"],
                'password': senha
            }
        )
    }

    obtenhaParams(): any {
        var qs = (function (a: any) {
            if (a == "") return {};
            var b = [];
            for (var i = 0; i < a.length; ++i) {
                var p: any[] = a[i].split('=', 2);
                if (p.length == 1)
                    b[p[0]] = "";
                else
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        })(window.location.search.substr(1).split('&'));

        return qs;
    }
}