import { ADD_ITEM_TO_CART, DECREASE_ITEMS_QUANTATY, INCREASE_ITEMS_QUANTATY, REMOVE_ITEM_FROM_CART } from "../types/types"

const initialState = {
    selectedCurrency: '',
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
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            if (!action.payload.item) return state;  
            const [newItem] = action.payload.item;

            return {
                ...state,
                items: [...state.items, newItem],
                itemsTotal: incrementItemsTotalAmount(state.itemsTotal),
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
        default:
            return state;
    }
}