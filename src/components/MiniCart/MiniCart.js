import React, {Component} from "react";
import PropTypes from 'prop-types';
import { CheckOutButton, ViewBagButton, CartStyles } from "./MiniCart.styled";
import Cart from '../Cart'

class MiniCart extends Component {
    static defaultProps = {
        onClick: () => {},
    };
    render() {
        return (
            <>
                <Cart styles={CartStyles}/>
                <ViewBagButton>
                    View bag
                </ViewBagButton>
                <CheckOutButton>
                    Check Out
                </CheckOutButton>
            </>
        );
    }
}

MiniCart.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default MiniCart;