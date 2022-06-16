export const getCart = state => state.cart;
export const getTotalItemsInCart = state => state.cart.itemsTotal;
export const getAllItemsInCart = state => state.cart.items;
export const getButtonStateRule = state => state.cart.disableOptionsButtons.miniCart;
export const getTotalPriceinCart = state => state.cart.priceTotal;
export const getTaxFee = state => state.cart.tax;