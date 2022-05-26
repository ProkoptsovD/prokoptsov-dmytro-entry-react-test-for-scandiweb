import React, {Component} from "react";
import PropTypes from 'prop-types';
import { CheckOutButton, ViewBagButton } from "./MiniCart.styled";

class MiniCart extends Component {
    static defaultProps = {
        onClick: () => {},
    };
    render() {
        return (
           <>
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