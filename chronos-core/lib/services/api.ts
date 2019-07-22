import axios from 'axios';
import { getToken, logout, TOKEN_KEY, login } from './localStorageAuth';

let isRefreshing = false;

let refreshSubscribers: any = [];

const api = axios.create({
    baseURL: "http://cronos.vizzarconsultoria.com/api"
});

api.interceptors.request.use(async config => {

    if (getToken) {
        config.headers.Accept = 'application/json';
        config.headers.Authorization = getToken();
        config.headers.contentType = 'application/json';
    }

    return config;

});

api.interceptors.response.use(async response => {

    const newToken = response.headers.authorization

    if (newToken) {
        await localStorage.setItem(TOKEN_KEY, newToken);
    }

    return response;

}, async error => {

    const { config, response: { status } } = error;
    const originalRequest = config;

    switch (status) {
        case 400:
            // TODO Mesangem de erro de requisição inválida

            // Criando uma nova promise para tentativa de refresh token
            return await new Promise((resolve, reject) => {
                resolve(error.response)
                reject(error.response)
            });
        case 401:
            if (!isRefreshing) {

                isRefreshing = true;

                // Se retornar 401 é porque o usuário nao está autenticado. 
                // Então é feito uma requisição para o refresh token com o ultimo token utilizado
                await api.post('/refresh')
                    .then((newToken: any) => {
                        if ((newToken != undefined || newToken != null) &&
                            (newToken.data.token != null || newToken.data.token != undefined)) {
                            isRefreshing = false;
                            login(newToken.data.token)
                            onRrefreshed(newToken);
                        }
                        else {
                            window.location.href = '/unauthorized';
                            logout();
                        }
                    });

            }
            // Criando uma nova promise para tentativa de refresh token
            return await new Promise((resolve, reject) => {
                subscribeTokenRefresh(() => {
                    // replace the expired token and retry
                    originalRequest.headers.Authorization = getToken();
                    resolve(api(originalRequest));
                });
            });
        case 404:
            return await new Promise((resolve, reject) => {
                resolve(error.response)
                reject(error.response)
            });
        case 500:
            // TODO inserir link para redirecionamento de pagina com erro 500
            // window.location = '/500';
            return await new Promise((resolve, reject) => {
                resolve(error.response)
                reject(error.response)
            });
        default:
            // TODO Mensagem de falha interna seguida de logout
            // Toastr('error', 'Falha interna', 'Acesso negado devido à um erro interno.')
            logout();
            return Promise.reject(error);
    }
});

const subscribeTokenRefresh = (cb: any) => {
    refreshSubscribers.push(cb);
}

const onRrefreshed = (token: string) => {
    refreshSubscribers.map((cb: any) => cb(token));
}

export default api;
