import axios from 'axios';
import { getToken, logout, TOKEN_KEY } from './auth';


const api = axios.create({
  // baseURL: "http://localhost:8000"
  baseURL: "http://api.vizzarconsultoria.com"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if(token){
    config.headers.Accept = 'application/json';
    config.headers.Authorization = token;
    config.headers.contentType = 'application/json';
    //console.log(jwt.decode(token))
  }
  return config;
});

let isRefreshing = false;
let refreshSubscribers = [];

api.interceptors.response.use(response => {
  const newToken = response.headers.authorization;
  if(newToken){
    // refreshToken(newToken);
    localStorage.setItem(TOKEN_KEY, newToken);
  }
  return response;
}, error => {
  const { config, response: { status } } = error;
  const originalRequest = config;

  if (status === 401) {
    if (!isRefreshing) {
      isRefreshing = true;
      // Se retornar 401 é porque o usuário nao está autenticado. Então é feito uma requisição para o refresh token com o ultimo token utilizado
      api.post('/api/app/refresh', {})
        .then(newToken => {
          isRefreshing = false;
          localStorage.setItem(TOKEN_KEY, `Bearer ${newToken.data.token}`);
          onRrefreshed(newToken);
        });
    }

    if (status === 401) {
      isRefreshing = true;
      // Se retornar 401 é porque o usuário nao está autenticado. Então é feito uma requisição para o refresh token com o ultimo token utilizado
      api.post('/api/app/refresh', {})
        .then(newToken => {
          isRefreshing = false;
          localStorage.setItem(TOKEN_KEY, `Bearer ${newToken.data.token}`);
          onRrefreshed(newToken);
        });
    }
    const retryOrigReq = new Promise((resolve, reject) => {
      subscribeTokenRefresh(token => {
        // replace the expired token and retry
        originalRequest.headers['Authorization'] = localStorage.getItem(TOKEN_KEY);
        resolve(api(originalRequest));
      });
    });
    return retryOrigReq;
  } else {
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
