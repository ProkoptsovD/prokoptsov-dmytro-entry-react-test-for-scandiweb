import { CLOSE_CART_OVERLAY, OPEN_CART_OVERLAY } from "../types/types"

const initialState = {
    isOpened: false,
}

export const cartOverlayReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CART_OVERLAY:
            return {
                ...state,
                isOpened: true,
            };
        case CLOSE_CART_OVERLAY:
            return {
                ...state,
                isOpened: false,
            };
        default:
            return state;
    }
}