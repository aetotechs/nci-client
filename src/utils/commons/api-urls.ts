const userApiBaseUrl = import.meta.env.VITE_USER_API_URL;
const orderApiBaseUrl = import.meta.env.VITE_ORDER_API_URL;
const inventoryApiBaseUrl = import.meta.env.VITE_INVENTORY_API_URL;
const paymentApiBaseUrl = import.meta.env.VITE_PAYMENT_API_URL;

export const api_urls = {
  users: {
    account: {
      verify_account: (email: string | null) =>
        `${userApiBaseUrl}/users/otp?emailOrWorkPhone=${email}&type=v`,
      resend_verification_otp: (email: string | null) =>
        `${userApiBaseUrl}/users/otp?emailOrWorkPhone=${email}&type=v`,
      reset_password_otp: (email: string | null) =>
        `${userApiBaseUrl}/users/otp?emailOrWorkPhone=${email}&type=r`,
      resend_reset_password_otp: (email: string | null) =>
        `${userApiBaseUrl}/users/otp?emailOrWorkPhone=${email}&type=r`,
      updateAccount: (email: any) => `${userApiBaseUrl}/users?emailOrWorkPhone=${email}`,
    },
    guest: {
      contact_us: `${userApiBaseUrl}/news-letter/enquiry`,
      news_letter: `${userApiBaseUrl}/news-letter`,
    }
  },
  carts: {
    calculate_cart_cost: (cartId: string) => `${orderApiBaseUrl}/carts/${cartId}/total-cost`,
    cart_items: {
      count: `${orderApiBaseUrl}/carts/cart-items/user/count`,
      select: (cartItemId: string) =>
        `${orderApiBaseUrl}/carts/cart-item/select?cartItemId=${cartItemId}`,
      unselect: (cartItemId: string) =>
        `${orderApiBaseUrl}/carts/cart-item/un-select?cartItemId=${cartItemId}`,
      set_quantity: (cartItemId: string, newQuantity: number) =>
        `${orderApiBaseUrl}/carts/cart-item/quantity?cartItemId=${cartItemId}&quantity=${newQuantity}`,
      increment_quantity: (cartItemId: string) =>
        `${orderApiBaseUrl}/carts/cart-item/increment?cartItemId=${cartItemId}`,
      decrement_quantity: (cartItemId: string) =>
        `${orderApiBaseUrl}/carts/cart-item/decrement?cartItemId=${cartItemId}`,
      remove_item: (cartItemId: string) =>
        `${orderApiBaseUrl}/carts/cart-item?cartItemId=${cartItemId}`,
      clear_cart: (cartId: string) => `${orderApiBaseUrl}/carts/${cartId}/cart-items`,
    },
    get_cart_items: (cartId: any) => `${orderApiBaseUrl}/carts/${cartId}/cart-items`,
    get_open_cart: `${orderApiBaseUrl}/carts/user/open`,
    get_all_user_carts: `${orderApiBaseUrl}/carts/user`,
    get_all_carts: `${orderApiBaseUrl}/carts`,
    post_cart: `${orderApiBaseUrl}/carts`,
    delete_cart_by_cart_id: (cartId: string) => `${orderApiBaseUrl}/carts/${cartId}`
  },

  orders: {
    create_order: `${orderApiBaseUrl}/orders`,
    get_order_by_id: (orderId: any) => `${orderApiBaseUrl}/orders/order?orderId=${orderId}`,
  },

  items: {
    get_product_by_id: (productId: string) => `${inventoryApiBaseUrl}/items/${productId}`,
    get_all_products: (page: number, size: number) => `${inventoryApiBaseUrl}/items?page=${page}&size=${size}`,
  },

  categories: {
    get_all_categories: (page: number, size: number) => `${inventoryApiBaseUrl}/categories?page=${page}&size=${size}`
  },
  
  regions: {
    get_all_regions: (page: number, size: number) => `${inventoryApiBaseUrl}/regions?page=${page}&size=${size}`
  },

  origins: {
    get_all_origins:  (page: number, size: number) => `${inventoryApiBaseUrl}/origins?page=${page}&size=${size}`
  },

  constants: {
    get_coffee_categories:  `${inventoryApiBaseUrl}/constants/categories`,
    get_coffee_species:  `${inventoryApiBaseUrl}/constants/species`,
    get_coffee_flavours:  `${inventoryApiBaseUrl}/constants/flavours`,
    get_coffee_processing_modes:  `${inventoryApiBaseUrl}/constants/processing-modes`,
    get_coffee_statuses:  `${inventoryApiBaseUrl}/constants/statuses`,
    get_coffee_warehouses:  `${inventoryApiBaseUrl}/constants/warehouses`,
    get_coffee_bag_types:  `${inventoryApiBaseUrl}/constants/bag-types`,
    get_coffee_bag_weights:  `${inventoryApiBaseUrl}/constants/bag-weights`,
  },

  payments: {
    create_payment: `${paymentApiBaseUrl}/payments/create`,
    get_payment_status: (paymentId: string) => `${paymentApiBaseUrl}/payments/status/${paymentId}`
  }
};
