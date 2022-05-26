import React from "react";
import BagItem from "../../components/BagItem/BagItem.jsx";
import ButtonTextOnly from "../../components/ButtonTextOnly/ButtonTextOnly";
import OrderInfo from "../../components/OrderInfo/OrderInfo.jsx";
import './CartPage.scss';

class CartPage extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <section className="cart-page">
                <div className="container">
                    <h1 className="cart-page__title">
                        Cart
                    </h1>
                    <ul className="cart-page__list">
                        <li className="cart-page__list-item">
                            <BagItem />
                        </li> 
                    </ul>
                    <OrderInfo />
                    <ButtonTextOnly>
                        Order
                    </ButtonTextOnly>
                </div>
            </section>
        )
    }
}

export default CartPage;