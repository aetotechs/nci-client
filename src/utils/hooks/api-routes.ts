export const Register = `${import.meta.env.VITE_USER_API_URL}/users`;

export const Login = `${import.meta.env.VITE_USER_API_URL}/users/login`;

export const Verify = (email: string | null, otp: string | null) =>
  `${import.meta.env.VITE_USER_API_URL}/users/verify?emailOrWorkPhone=${email}&otp=${otp}`;

export const VerifyOtp = (email: string | null, otp: string | null) =>
  `${import.meta.env.VITE_USER_API_URL}/users/otp/verify?emailOrWorkPhone=${email}&otp=${otp}`;

export const ResendOtp = (email: string | null) =>
  `${import.meta.env.VITE_USER_API_URL}/users/otp?emailOrWorkPhone=${email}`;

export const ForgotPassword = (email: string | null, type: string | null) =>
  `${import.meta.env.VITE_USER_API_URL}/users/otp?emailOrWorkPhone=${email}&type=${type}`;

export const PasswordReset = (email: string | null, newPassword: string | null) =>
  `${import.meta.env.VITE_USER_API_URL}/users/password?emailOrWorkPhone=${email}&newPassword=${newPassword}`;

export const AddToCart = `${import.meta.env.VITE_ORDER_API_URL}/carts`;

export const fetchItemsRoute = `${import.meta.env.VITE_INVENTORY_API_URL}/items`;

export const FetchUser = (email: string | null) =>
  `${import.meta.env.VITE_USER_API_URL}/users/${email}`;

export const FetchCartItems = (cartId: string | null) =>
  `${import.meta.env.VITE_ORDER_API_URL}/carts?cartId=${cartId}`;

export const fetchProductByIdRoute = (itemId: string | null) =>
  `${import.meta.env.VITE_INVENTORY_API_URL}/items/${itemId}`;

export const DeleteCart = (cartId: string | null) =>
  `${import.meta.env.VITE_ORDER_API_URL}carts/items?cartId=${cartId}`;

export const DeleteProductById = (cartItemId: string | null, cartId: string | null) =>
  `${import.meta.env.VITE_ORDER_API_URL}carts/${cartId}?cartItemId=${cartItemId}}`;

export const CreateOrder = `${import.meta.env.VITE_ORDER_API_URL}/orders`;

export const CreatePayment = `${import.meta.env.VITE_PAYMENT_API_URL}/payments`;

export const ConfirmPayment = `${import.meta.env.VITE_PAYMENT_API_URL}/payments/confirm`;

export const AddRegion = `${import.meta.env.VITE_INVENTORY_API_URL}/regions`;

export const AddOrigin = `${import.meta.env.VITE_INVENTORY_API_URL}/origins`;

export const FetchOrigins = `${import.meta.env.VITE_INVENTORY_API_URL}/origins`;

export const AddCategory = `${import.meta.env.VITE_INVENTORY_API_URL}/categories`;

export const FetchCategories = `${import.meta.env.VITE_INVENTORY_API_URL}/categories`;

export const EditCategory = (name: string) =>
  `${import.meta.env.VITE_INVENTORY_API_URL}/categories?name=${name}`;

export const FetchRegions = `${import.meta.env.VITE_INVENTORY_API_URL}/regions`;

export const GetAllOrders = `${import.meta.env.VITE_ORDER_API_URL}/orders`;

export const GetUserOrders = (user: string) =>
  `${import.meta.env.VITE_ORDER_API_URL}/orders/${user}`;

export const AddItem = `${import.meta.env.VITE_INVENTORY_API_URL}/items`;

export const GetAllUsers = `${import.meta.env.VITE_USER_API_URL}/users`;

export const GetOrderById = (orderId: string) =>
  `${import.meta.env.VITE_ORDER_API_URL}/orders/order?orderId=${orderId}`;

export const GetOrderItems = (orderId: string) =>
  `${import.meta.env.VITE_ORDER_API_URL}/orders/${orderId}/items`;

export const GetCartById = (cartId: string) =>
  `${import.meta.env.VITE_ORDER_API_URL}/carts?cartId=${cartId}`;

export const GetTransactions = `${import.meta.env.VITE_PAYMENT_API_URL}/payments`;

export const GetWareHouses=`${import.meta.env.VITE_INVENTORY_API_URL}/constants/warehouses`

export const GetStatuses=`${import.meta.env.VITE_INVENTORY_API_URL}/constants/statuses`

export const GetSpecies=`${import.meta.env.VITE_INVENTORY_API_URL}/constants/species`

export const GetProcessingModes=`${import.meta.env.VITE_INVENTORY_API_URL}/constants/processing-modes`

export const GetFlavors=`${import.meta.env.VITE_INVENTORY_API_URL}/constants/flavors`

export const GetBagWeights=`${import.meta.env.VITE_INVENTORY_API_URL}/constants/bag-weights`

export const GetBagTypes=`${import.meta.env.VITE_INVENTORY_API_URL}/constants/bag-types`