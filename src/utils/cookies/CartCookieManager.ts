
const setUserCart = (userData: any) => {
    localStorage.setItem('nci_u_cart', JSON.stringify(userData));
};

const getUserCart = () => {
    
    const cart = typeof window !== 'undefined' && localStorage.getItem('nci_u_cart');
  
    if (cart) {
      try {
        return JSON.parse(cart);
      } catch (error) {
        console.error('Error parsing user cart data:', error);
        return null;
      }
    }
  
    return {};
};

const clearUserCart = () => {
    localStorage.removeItem('nci_u_cart');
};

export {
    setUserCart,
    getUserCart,
    clearUserCart
}