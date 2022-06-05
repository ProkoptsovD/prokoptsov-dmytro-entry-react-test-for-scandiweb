import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly";
import './CartButton.scss';

class CartButton extends React.Component {
    addToCart = (evt) => {
        evt.preventDefault();
        const itemToAdd = this.props.allProducts.find(({id}) => id === this.props.id);

        this.props.addToCart(itemToAdd);
        this.props.sumTotalPriceInCart();
    }
    render() {
        return (
            <ButtonSvgOnly
                onClick={this.addToCart}
                className="cart-button js-cart-button"
            />
        )
    }
}

export default CartButton;