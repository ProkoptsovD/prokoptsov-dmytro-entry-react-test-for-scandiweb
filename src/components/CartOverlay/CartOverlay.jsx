import React from "react";
import MiniCart from "../MiniCart/MiniCart";
import './CartOverlay.scss';

class CartOverlay extends React.Component {
    render() {
        return (
            <div className={`cart-overlay ${this.props.isOpened ? 'open' : ''}`}>
                <div className="modal">
                    <MiniCart />
                </div>
            </div>
        )
    }
}

export default CartOverlay;