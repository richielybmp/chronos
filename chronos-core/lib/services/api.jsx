import axios from 'axios';
import { getToken, logout, TOKEN_KEY } from './auth';


const api = axios.create({
    baseURL: "http://cronos.vizzarconsultoria.com/api"
    // baseURL: "http://api.vizzarconsultoria.com"
});

api.interceptors.request.use(async config => {

    if(getToken()){
        config.headers.Accept = 'application/json';
        config.headers.Authorization = getToken();
        config.headers.contentType = 'application/json';
        //console.log(jwt.decode(token))
    }
    return config;
});

let isRefreshing = false;
let refreshSubscribers = [];

api.interceptors.response.use(async response => {
    const newToken = response.headers.authorization;
    if(newToken){
        // refreshToken(newToken);
        await localStorage.setItem(TOKEN_KEY, newToken);
    }
    return response;
}, async error => {
    const { config, response: { status } } = error;
    const originalRequest = config;

    switch (status) {
        case 400:
            // TODO Mesangem de erro de requisição inválida
            // Toastr('error', '', 'A sintaxe da requisição é inválida.');
            break;
        case 401:
            if (!isRefreshing) {
                console.log('veio aqui no 401');
                isRefreshing = true;
                // Se retornar 401 é porque o usuário nao está autenticado. Então é feito uma requisição para o refresh token com o ultimo token utilizado
                await api.post('/api/app/refresh', {})
                    .then(newToken => {
                        isRefreshing = false;
                        localStorage.setItem(TOKEN_KEY, `Bearer ${newToken.data.token}`);
                        onRrefreshed(newToken);
                    });
            }

            // Criando uma nova promise para tentativa de refresh token
            return await new Promise((resolve, reject) => {
                subscribeTokenRefresh(token => {
                    // replace the expired token and retry
                    originalRequest.headers.Authorization = getToken();
                    resolve(api(originalRequest));
                });
            });
        case 500:
            // TODO inserir link para redirecionamento de pagina com erro 500
            // window.location = '/500';
            break;
        default:
            // TODO Mensagem de falha interna seguida de logout
            // Toastr('error', 'Falha interna', 'Acesso negado devido à um erro interno.')
            logout();
            return Promise.reject(error);
    }
});

const subscribeTokenRefresh = (cb) => {
    refreshSubscribers.push(cb);
}

const onRrefreshed = (token) => {
    refreshSubscribers.map(cb => cb(token));
}

export default api;
