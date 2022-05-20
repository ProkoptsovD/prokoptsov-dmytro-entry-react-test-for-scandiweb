import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly";
import './CartButton.scss';

class CartButton extends React.Component {
    constructor(props) {
        super(props);

        this.addToCartBinded = this.addToCart.bind(this, this.props.allProducts);
    }
    addToCart = (e, products) => {
        e.preventDefault();
        const itemId = e.target.parentElement.parentElement.id;
        const [itemToAdd] = products.filter(({id}) => id === itemId);
        
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