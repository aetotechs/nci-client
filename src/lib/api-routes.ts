export const Register = `${import.meta.env.VITE_USERAPI_URL}/users`;
export const Login = `${import.meta.env.VITE_USERAPI_URL}/users/login`;
export const Verify = (email: string | null, otp: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/verify?emailOrWorkPhone=${email}&otp=${otp}`;
export const ResendOtp = (email: string | null) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/otp?emailOrWorkPhone=${email}`;
export const ResetPassword = (email: string | null) => `${import.meta.env.VITE_USERAPI_URL}/users/`;
