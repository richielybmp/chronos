export const TOKEN_KEY = "AuthToken";

export const isAuthenticated = () => getToken();

export const getToken = () => {
  try {
    console.log(localStorage.getItem(TOKEN_KEY));

    return localStorage.getItem(TOKEN_KEY);
  } catch (err) {
    return undefined
  }
}

export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, `Bearer ${token}`);
  return isAuthenticated()
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};


