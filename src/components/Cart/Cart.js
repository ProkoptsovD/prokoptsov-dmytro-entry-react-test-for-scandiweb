import { Component } from "react";
import PropTypes from 'prop-types';
import { AddedProductList, CartWrapper, ListItem, OrderButton, OptionPickerStyles, ProductStyles } from "./Cart.styled";
import OrderDetails from "./OrederDetails/";
import Product from "./Product/";
import { oneProduct } from "../../api/oneProduct";

class Cart extends Component {
    render () {
        const { styles } = this.props;

        return (
            <CartWrapper>
                <AddedProductList>
                    <ListItem>
                        <Product
                            product={oneProduct}
                            productStyles={styles.productStyles || ProductStyles}
                            optionButton={styles.optionPicker || OptionPickerStyles}
                            optionName={styles.optionPicker.optionName}
                        />
                    </ListItem>
                    <ListItem>
                        <Product
                            product={oneProduct}
                            productStyles={styles.productStyles || ProductStyles}
                            optionPicker={styles.optionPicker || OptionPickerStyles}
                        />
                    </ListItem>
                    <ListItem>
                        <Product
                            product={oneProduct}
                            productStyles={styles.productStyles || ProductStyles}
                            optionPicker={styles.optionPicker || OptionPickerStyles}
                        />
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