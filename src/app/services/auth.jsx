export const TOKEN_KEY = "AuthToken";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, `Bearer ${token}`);
  return isAuthenticated()
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);

};

// export const refreshToken = () => {
//   localStorage.setItem(TOKEN_KEY, getToken());
// };

