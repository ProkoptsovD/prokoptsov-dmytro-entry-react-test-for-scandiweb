import React from "react";
import ButtonTextOnly from "../ButtonTextOnly/ButtonTextOnly";
import './ButtonAddToCart.scss';

class ButtonAddToCart extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.props = props;
    // }

    render() {
        return (
            <ButtonTextOnly
                className={"add-to-cart-btn"}
            >
                Add to cart
            </ButtonTextOnly>
        )
    }
}

export default ButtonAddToCart;