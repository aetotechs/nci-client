export const Register = `${import.meta.env.VITE_USERAPI_URL}/users`;
export const Login = `${import.meta.env.VITE_USERAPI_URL}/users/login`;
export const Verify = (email: string, otp: number[]) =>
  `${import.meta.env.VITE_USERAPI_URL}/users/otp/verify?emailOrWorkPhone=${email}&otp=${otp}`;
