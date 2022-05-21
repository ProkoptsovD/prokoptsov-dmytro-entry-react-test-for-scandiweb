import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly";
import './CartButton.scss';

class CartButton extends React.Component {
    addToCart = (e, products) => {
        e.preventDefault();
        const itemToAdd = products.find(({id}) => id === this.props.id);

        this.props.addToCart(itemToAdd);
    }
    render() {
        return (
            <ButtonSvgOnly
                onClick={(e) => {this.addToCart(e, this.props.allProducts)}}
                className="cart-button js-cart-button"
            />
        )
    }
}

export default CartButton;