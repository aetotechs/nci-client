export const Register = `${import.meta.env.VITE_USERAPI_URL}/users`;
export const Login = `${import.meta.env.VITE_USERAPI_URL}/users/login`;
export const Verify = (email: string | null, otp: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/verify?emailOrWorkPhone=${email}&otp=${otp}`;
export const ResendOtp = (email: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/otp?emailOrWorkPhone=${email}`;
export const ResetPassword = (email: string | null) => `${import.meta.env.VITE_USERAPI_URL}/users/`;
export const AddToCart = `${import.meta.env.VITE_USERORDER_URL}/carts`;
export const FetchItems = `${import.meta.env.VITE_FETCHITEMS_URL}/items`;
export const FetchUser = (email: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/${email}`;
export const FetchCartItems=(cartId: string | null)=>`${import.meta.env.VITE_USERORDER_URL}/carts?cartId=${cartId}`;
