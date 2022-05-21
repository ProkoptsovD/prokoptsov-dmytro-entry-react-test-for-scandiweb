import React from "react";
import BagItem from "../BagItem/BagItem";
import ButtonTextOnly from "../ButtonTextOnly/ButtonTextOnly";
import './MiniCart.scss';

class MiniCart extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="mini-cart">
                <div className="mini-cart__title">
                    <b>
                        My bag.
                    </b>
                    &nbsp;
                    <span className="mini-cart__title-number">
                        3
                    </span>
                    &nbsp;
                    <span className="mini-cart__title-items">
                        items
                    </span>
                </div>
                <BagItem />
                <div className="mini-cart__total">
                    <b className="mini-cart__total-title">
                        Total
                    </b>
                    <strong className="mini-cart__total-sum">
                        $200.00
                    </strong>
                </div>
                <ButtonTextOnly
                    onClick={this.props.closeMiniCart}
                    className="mini-cart__btn-view-bag"
                >
                    View bag
                </ButtonTextOnly>
                <ButtonTextOnly
                    onClick={this.props.closeMiniCart}
                    className="mini-cart__btn-check-out"
                >
                    Check out
                </ButtonTextOnly>
            </div>
        )
    }
}

export default MiniCart;