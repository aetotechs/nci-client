export const Register = `${import.meta.env.VITE_USERAPI_URL}/users`;
export const Login = `${import.meta.env.VITE_USERAPI_URL}/users/login`;
export const Verify = (email: string | null, otp: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/verify?emailOrWorkPhone=${email}&otp=${otp}`;
export const VerifyOtp = (email: string | null, otp: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/otp/verify?emailOrWorkPhone=${email}&otp=${otp}`;
export const ResendOtp = (email: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/otp?emailOrWorkPhone=${email}`;
export const ForgotPassword = (email: string | null, type: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/otp?emailOrWorkPhone=${email}&type=${type}`;
export const PasswordReset = (email: string | null, newPassword: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/password?emailOrWorkPhone=${email}&newPassword=${newPassword}`;
export const AddToCart = `${import.meta.env.VITE_USERORDER_URL}/carts`;
export const FetchItems = `${import.meta.env.VITE_FETCHITEMS_URL}/items`;
export const FetchUser = (email: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/${email}`;
export const FetchCartItems = (cartId: string | null) =>
  `${import.meta.env.VITE_USERORDER_URL}/carts?cartId=${cartId}`;
export const FetchProductById = (itemId: string | null) =>
  `${import.meta.env.VITE_FETCHITEMS_URL}/items/${itemId}`;
export const DeleteCart = (cartId: string | null) =>
  `${import.meta.env.VITE_USERORDER_URL}carts/items?cartId=${cartId}`;
export const DeleteProductById = (cartItemId: string | null, cartId: string | null) =>
  `${import.meta.env.VITE_USERORDER_URL}carts/${cartId}?cartItemId=${cartItemId}}`;
export const CreateOrder = `${import.meta.env.VITE_USERORDER_URL}/orders`;
