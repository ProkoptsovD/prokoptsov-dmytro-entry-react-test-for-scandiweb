import React from "react";
import MiniCart from "../MiniCart/MiniCart";
import './CartOverlay.scss';

class CartOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.body = document.body;
        this.OVERLAY_ID = 'overlay';
    }

    onOverlayClick = (e) => {
        const elementId = e.target.id;
        const isOverlayClicked = elementId === this.OVERLAY_ID;

        if(!isOverlayClicked) return;

        this.props.closeMiniCart();
        this.body.classList.remove('noscroll');
    }
    render() {
        return (
            <div className={`cart-overlay ${this.props.isOpened ? 'open' : ''}`}
                id={this.OVERLAY_ID}
                onClick={this.onOverlayClick}
            >
                <div className="modal">
                    <MiniCart 
                        cart={this.props.cart}
                        closeMiniCart={this.props.closeMiniCart}/>
                </div>
            </div>
        )
    }
}

export default CartOverlay;