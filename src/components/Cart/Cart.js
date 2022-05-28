import { Component } from "react";
import PropTypes from 'prop-types';
import { AddedProductList, CartWrapper, ListItem, OrderButton } from "./Cart.styled";
import OrderDetails from "./OrederDetails/";
import Product from "./Product/";
import { oneProduct } from "../../api/oneProduct";

class Cart extends Component {
    render () {
        return (
            <CartWrapper>
                <AddedProductList>
                    <ListItem>
                        <Product product={oneProduct}/>
                    </ListItem>
                </AddedProductList>
                <OrderDetails />
                <OrderButton>
                    Order
                </OrderButton>
            </CartWrapper>
        );
    }
};

Cart.propTypes = {

};

export default Cart;