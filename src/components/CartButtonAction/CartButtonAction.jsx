import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly/ButtonSvgOnly";
import './CartButtonAction.scss';

class CartButtonAction extends React.Component {
    constructor (props) {
        super(props);

        this.body = document.body;
    }
    disableBodyScroll = () => {
        this.body.classList.add('noscroll');
    }
    enableBodyScroll = () => {
        this.body.classList.remove('noscroll');
    } 
    handleBtnClick = () => {
        if (this.props.isMiniCartOpened) {
            this.props.closeMiniCart();
            this.enableBodyScroll();
        } else {
            this.props.openMiniCart();
            this.disableBodyScroll();
        }
    }
    render() {
        return (
            <ButtonSvgOnly
                onClick={this.handleBtnClick}
                className={`cart-btn-action ${!this.props.itemsInCart ? 'hidden' : ''}`}
                dataContent={this.props.itemsInCart}
            />
        )
    }
}

export default CartButtonAction;