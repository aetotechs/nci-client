const setUserWishlist = (data: any) => {
  localStorage.setItem('nci_u_wishlist', JSON.stringify(data));
};

const getUserWishlist = () => {
  const wishlist = typeof window !== 'undefined' && localStorage.getItem('nci_u_wishlist');

  if (wishlist) {
    try {
      return JSON.parse(wishlist);
    } catch (error) {
      console.error('Error parsing user wishlist data:', error);
      return null;
    }
  }

  return {};
};

const clearUserWishlist = () => {
  localStorage.removeItem('nci_u_wishlist');
};

export { setUserWishlist, getUserWishlist, clearUserWishlist };
