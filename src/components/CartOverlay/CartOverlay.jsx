import React from "react";
import MiniCart from "../MiniCart/MiniCart";
import './CartOverlay.scss';

class CartOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className="cart-overlay">
                <div className="modal">
                    <MiniCart />
                </div>
            </div>
        )
    }
}

export default CartOverlay;