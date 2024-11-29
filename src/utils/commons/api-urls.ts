const userApiBaseUrl = import.meta.env.VITE_USER_API_URL;
const orderApiBaseUrl = import.meta.env.VITE_ORDER_API_URL;
const inventoryApiBaseUrl = import.meta.env.VITE_INVENTORY_API_URL;
const paymentApiBaseUrl = import.meta.env.VITE_PAYMENT_API_URL;

export const api_urls = {
  carts: {
    cart_items: {
      count: `${orderApiBaseUrl}/carts/cart-items/user/count`,
      select: (cartItemId: string) => `${orderApiBaseUrl}/carts/cart-item/select?cartItemId=${cartItemId}`,
      unselect:  (cartItemId: string) => `${orderApiBaseUrl}/carts/cart-item/un-select?cartItemId=${cartItemId}`,
      set_quantity: (cartItemId: string, newQuantity: number) =>  `${orderApiBaseUrl}/carts/cart-item/quantity?cartItemId=${cartItemId}&quantity=${newQuantity}`,
      increment_quantity: (cartItemId: string) =>  `${orderApiBaseUrl}/carts/cart-item/increment?cartItemId=${cartItemId}`,
      decrement_quantity: (cartItemId: string) =>  `${orderApiBaseUrl}/carts/cart-item/decrement?cartItemId=${cartItemId}`,
      remove_item: (cartItemId: string) => `${orderApiBaseUrl}/carts/cart-item?cartItemId=${cartItemId}`,
      clear_cart: (cartId: string) => `${orderApiBaseUrl}/carts/${cartId}/cart-items`,
    },
    get_open_cart: `${orderApiBaseUrl}/carts/user/open`,
    get_all_user_carts: `${orderApiBaseUrl}/carts/user`,
    get_all_carts: `${orderApiBaseUrl}/carts`,
    post_cart: `${orderApiBaseUrl}/carts`,
    delete_cart_by_cart_id: (cartId: string) => `${orderApiBaseUrl}/carts/${cartId}`,
  },

  orders: {
    create_order: `${orderApiBaseUrl}/orders`,
  },

  items: {
    get_product_by_id: (productId: string) => `${inventoryApiBaseUrl}/items/${productId}`,
    get_all_products: `${inventoryApiBaseUrl}/items`,
  },

  payments: {
    create_payment: `${paymentApiBaseUrl}/payments/create`,
    get_payment_status: (paymentId: string) => `${paymentApiBaseUrl}/payments/status/${paymentId}`,
  },
};