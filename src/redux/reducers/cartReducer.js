import { ADD_ITEM_TO_CART, DECREASE_ITEMS_QUANTATY, INCREASE_ITEMS_QUANTATY, REMOVE_ITEM_FROM_CART, SUM_TOTAL_PRICE, UPDATE_ACTUAL_CURRENCY_IN_CART } from "../types/types"

const initialState = {
    currency: {},
    items: [],
    defaultOptionIndex: 0,
    itemsTotal: 0,
    priceTotal: 0,
    taxFee: 21,
    taxFeeTotal: 0,
    disableOptionsButtons: {
        miniCart: true,
        cart: true,
        productCard: false,
    }
}

const increaseItemsTotalAmount = (itemsInCart) => {
    let total = itemsInCart;
    return total + 1;
}
const decreaseItemsTotalAmount = (itemsInCart) => {
    let total = itemsInCart;
    return total -= 1;
}
const extractActualPrice = (product, actualCurrency) => product.prices[actualCurrency];

const sumPrice = (allProducts, actualCurrency) => {
    const isProductCartEmpty = allProducts.length === 0;

    if (isProductCartEmpty) return 0;
    
    const totalPrice = allProducts.reduce((total, { product }) => {
        const price = extractActualPrice(product, actualCurrency);
        total += price.amount;
        return total;
    }, 0);

    return totalPrice.toFixed(2);
}
const setDefaultAttributes = ({ attributes }, defaultValue) => {
    return attributes.reduce((acc, {name, items}) => {
        const options = {
            [name]: name,
            attr: items[defaultValue],
        }
        acc = [...acc, options];
        return acc;
    }, []);
}
const checkDuplicates = (allProducts, newProduct) => {

}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            if (!action.payload.item) return state;
            
            const newProduct = action.payload.item;
            const defaultValue = state.defaultOptionIndex;
            const selectedOptions = action.payload.options ?? setDefaultAttributes(newProduct, defaultValue);

            const itemToAdd = {
                product: newProduct,
                selectedOptions,
                quantaty: 1,
            }
            return {
                ...state,
                items: [...state.items, itemToAdd],
                itemsTotal: increaseItemsTotalAmount(state.itemsTotal),
                priceTotal: 0,
            };
        case REMOVE_ITEM_FROM_CART:
            if (!action.payload.id) return state;
            const itemsInCartAfterRemove = state.items.filter(({id}) => id !== action.payload.id);

            return {
                ...state,
                items: itemsInCartAfterRemove,
                itemsTotal: decreaseItemsTotalAmount(state.itemsTotal),
            };
        case INCREASE_ITEMS_QUANTATY: {    
            const { id } = action.payload;

            const items = state.items.map(item => {
                return item.product.id !== id ? item : ({
                    ...item,
                    quantaty: increaseItemsTotalAmount(item.quantaty),
                })
            });
            
            return {
                ...state,
                items,
                itemsTotal: increaseItemsTotalAmount(state.itemsTotal),
            };
        }
        case DECREASE_ITEMS_QUANTATY: {    
            const { id } = action.payload;

            const items = state.items.map(item => item.product.id !== id ? item : ({
                ...item,
                quantaty: decreaseItemsTotalAmount(item.quantaty),
            })).filter(({ quantaty }) => quantaty > 0);
            
            return {
                ...state,
                items,
                itemsTotal: decreaseItemsTotalAmount(state.itemsTotal),
            };
        }
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