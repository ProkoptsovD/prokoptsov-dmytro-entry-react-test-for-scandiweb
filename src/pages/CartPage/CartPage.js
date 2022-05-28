import { Component } from "react";
import PropTypes from 'prop-types';
import { Title } from "./CartPage.styled";
import Section from "../../components/common/Section";
import Cart from "../../components/Cart";

class CartPage extends Component {
    render() {
        const { title } = this.props;

        return (
            <Section>
                <Title>
                    {title}
                </Title>
                <Cart />
            </Section>

            // <section className="cart-page">
            //     <div className="container">
            //         <h1 className="cart-page__title">
            //             Cart
            //         </h1>
            //         <ul className="cart-page__list">
            //             <li className="cart-page__list-item">
            //                 <BagItem />
            //             </li> 
            //         </ul>
            //         <OrderInfo />
            //         <ButtonTextOnly>
            //             Order
            //         </ButtonTextOnly>
            //     </div>
            // </section>
        )
    }
}

CartPage.propTypes = {
    title: PropTypes.string,
}

export default CartPage;