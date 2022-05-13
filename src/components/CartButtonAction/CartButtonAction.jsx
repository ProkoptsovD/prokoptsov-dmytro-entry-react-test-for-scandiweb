import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly/ButtonSvgOnly";
import './CartButtonAction.scss';

class CartButtonAction extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            goodsInCart: 0,
        }
    }

    render() {
        return (
            <ButtonSvgOnly
                onClick={() => {
                    this.setState({
                        goodsInCart: this.state.goodsInCart += 1,
                    })
                }}
                className={'cart-btn-action'}
                dataContent={this.state.goodsInCart}
            />
        )
    }
}

export default CartButtonAction;