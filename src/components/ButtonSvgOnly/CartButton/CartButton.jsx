import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly";
import './CartButton.scss';

class CartButton extends React.Component {
    addToCart = (e, products) => {
        e.preventDefault();
        const itemId = e.target.parentElement.parentElement.id;
        const [item] = products.filter(({id}) => id === itemId);
        const itemToAdd = [item, this.props.actualCurrency]

        this.props.addToCart(itemToAdd);
    }
    render() {
        return (
            <ButtonSvgOnly
                onClick={(e) => {this.addToCart(e, this.props.allProducts)}}
                className="cart-button"
            />
        )
    }
}

export default CartButton;