import { ADD_ITEM_TO_CART, DECREASE_ITEMS_QUANTATY, INCREASE_ITEMS_QUANTATY, REMOVE_ITEM_FROM_CART, SUM_TOTAL_PRICE, UPDATE_ACTUAL_CURRENCY_IN_CART } from "../types/types"

const initialState = {
    currency: {},
    items: [],
    itemsTotal: 0,
    priceTotal: 0,
    taxFee: 21,
    taxFeeTotal: 0,
}

const incrementItemsTotalAmount = (itemsInCart) => {
    let total = itemsInCart;
    return total + 1;
}
const decrementItemsTotalAmount = (itemsInCart) => {
    let total = itemsInCart;
    return total -= 1;
}
const extractActualPrice = (product, actualCurrency) => {
    return product.prices.find(({currency}) => currency.symbol === actualCurrency.symbol && currency.label === actualCurrency.label);
}
const sumPrice = (allProducts, actualCurrency) => {
    const isProductCartEmpty = allProducts.length === 0;

    if (isProductCartEmpty) return 0;
    
    const totalPrice = allProducts.reduce((total, product) => {
        console.log(product);
        const price = extractActualPrice(product, actualCurrency);
        total += price.amount;
        return total;
    }, 0);

    return totalPrice.toFixed(2);
}
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            if (!action.payload.item) return state;
            
            return {
                ...state,
                items: [...state.items, action.payload.item],
                itemsTotal: incrementItemsTotalAmount(state.itemsTotal),
                priceTotal: 0,
            };
        case REMOVE_ITEM_FROM_CART:
            if (!action.payload.id) return state;
            const itemsInCartAfterRemove = state.items.filter(({id}) => id !== action.payload.id);

            return {
                ...state,
                items: itemsInCartAfterRemove,
                itemsTotal: decrementItemsTotalAmount(state.itemsTotal),
            };
        case INCREASE_ITEMS_QUANTATY:
            return {
                ...state,
            };
        case DECREASE_ITEMS_QUANTATY:
            return {
                ...state,
            };
        case UPDATE_ACTUAL_CURRENCY_IN_CART:
            return {
                ...state,
                currency: action.payload.currency,
            }
        case SUM_TOTAL_PRICE:
            return {
                ...state,
                priceTotal: sumPrice(state.items, state.currency),
            }
        default:
            return state;
    }
}