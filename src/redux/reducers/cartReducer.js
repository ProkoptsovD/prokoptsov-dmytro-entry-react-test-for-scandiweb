import { ADD_ITEM_TO_CART, DECREASE_ITEMS_QUANTATY, INCREASE_ITEMS_QUANTATY, REMOVE_ITEM_FROM_CART } from "../types/types"

const initialState = {
    items: [],
    totalInCart: 0,
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload.item]
            };
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
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