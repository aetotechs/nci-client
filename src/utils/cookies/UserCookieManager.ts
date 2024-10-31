import { jwtDecode } from 'jwt-decode';

const setUserToken = (accessToken: string) => {
  localStorage.setItem('nci_user_tkn', accessToken);
};

const setAuthUser = (userData: any) => {
  localStorage.setItem('nci_user', JSON.stringify(userData));
};

const getUserToken = () => {
  return localStorage.getItem('nci_user_tkn') ?? null;
};

const getAuthUser = () => {
  const user = typeof window !== 'undefined' && localStorage.getItem('nci_user');

  if (user) {
    try {
      return JSON.parse(user);
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }

  return null;
};

const deleteUserToken = () => {
  localStorage.removeItem('nci_user_tkn');
};

const deleteAuthUser = () => {
  localStorage.removeItem('nci_user');
};

const logout = () => {
  localStorage.removeItem('nci_user_tkn');
  localStorage.removeItem('nci_user');
  localStorage.removeItem('nci_user_cart');
};

const isAuthTokenExpired = (expirationTime: number) => {
  const currentTime = Math.floor(Date.now() / 1000);

  return expirationTime < currentTime;
};

const decodeToken = (token: any) => {
  return jwtDecode(token);
};

const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('nci_user_tkn') ?? null;
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken.exp !== undefined) {
        const isTokenExpired = isAuthTokenExpired(decodedToken.exp);
        return !isTokenExpired;
      }
    }
  }
  return false;
};

export {
  setUserToken,
  isAuthenticated,
  getUserToken,
  deleteUserToken,
  setAuthUser,
  getAuthUser,
  deleteAuthUser,
  logout
};
