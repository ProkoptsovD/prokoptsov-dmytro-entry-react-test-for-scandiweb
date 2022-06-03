import { deepEqual } from "../../helpers/deepEqual";
import { ADD_ITEM_TO_CART, DECREASE_ITEMS_QUANTATY, INCREASE_ITEMS_QUANTATY, REMOVE_ITEM_FROM_CART, SUM_TOTAL_PRICE, UPDATE_ACTUAL_CURRENCY_IN_CART } from "../types/types"

const initialState = {
    currency: 0,
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

const increase = (itemsInCart) => {
    let total = itemsInCart;
    return total + 1;
}
const decrease = (itemsInCart) => {
    let total = itemsInCart;
    return total -= 1;
}
const sumPrice = (allProducts, actualCurrency) => {
    const isProductCartEmpty = allProducts.length === 0;

    if (isProductCartEmpty) return 0;
    
    let symbol = '';
    const priceTotal = allProducts.reduce((sum, { product: { prices }, quantaty }) => {
        const price = prices[actualCurrency];
        sum += price.amount * quantaty;
        symbol = price.currency.symbol;

        return sum;
    }, 0).toFixed(2);

    return {
        total: priceTotal,
        symbol,
    };
}
const setDefaultAttributes = ({ attributes }, defaultValue) => {
    return attributes.reduce((acc, {name, items}) => {
        acc = {
            ...acc,
            [name]: {
                id: Number(defaultValue),
                value: items[defaultValue].displayValue,
            }
        };
        return acc;
    }, {})
}
const findUnique = (allProducts, newProduct) => {
    return allProducts.findIndex(product => deepEqual(product, newProduct));
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            if (!action.payload.item) return state;
            
            const newProduct = action.payload.item;
            const defaultValue = state.defaultOptionIndex;
            const selectedOptions = action.payload.option || setDefaultAttributes(newProduct, defaultValue);
            
            const itemToAdd = {
                product: newProduct,
                selectedOptions,
                quantaty: 1,
            }

            const itemIndex = findUnique(state.items, itemToAdd);
            const isUnique = itemIndex < 0;
            const newItemList = isUnique
                                ? [...state.items, itemToAdd]
                                : state.items.map((item, index) => index === itemIndex ? {...item, quantaty: item.quantaty += 1} : item);

            return {
                    ...state,
                    items: newItemList,
                    itemsTotal: increase(state.itemsTotal),
                    showNotification: false,
            };
        case REMOVE_ITEM_FROM_CART:
            if (!action.payload.id) return state;
            const itemsInCartAfterRemove = state.items.filter(({id}) => id !== action.payload.id);

            return {
                ...state,
                items: itemsInCartAfterRemove,
                itemsTotal: decrease(state.itemsTotal),
            };
        case INCREASE_ITEMS_QUANTATY: {    
            const { id } = action.payload;

            const items = state.items.map(item => {
                return item.product.id !== id ? item : ({
                    ...item,
                    quantaty: increase(item.quantaty),
                })
            });
            
            return {
                ...state,
                items,
                itemsTotal: increase(state.itemsTotal),
            };
        }
        case DECREASE_ITEMS_QUANTATY: {    
            const { id } = action.payload;

            const items = state.items.map(item => item.product.id !== id ? item : ({
                ...item,
                quantaty: decrease(item.quantaty),
            })).filter(({ quantaty }) => quantaty > 0);
            
            return {
                ...state,
                items,
                itemsTotal: decrease(state.itemsTotal),
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