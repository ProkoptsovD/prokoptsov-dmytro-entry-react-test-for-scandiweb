import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly";
import './CartButton.scss';

class CartButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ButtonSvgOnly
                className={'cart-button'}
            />
        )
    }
}

export default CartButton;