import React, {Component} from "react";
import PropTypes from 'prop-types';
import { CheckOutButton, ViewBagButton, CartStyles, OuterWrapper, MiniCartNameWrapper, MiniCartName, TotalNumberOfItems, ItemWord, TotalPriceWrapper, Total, Price } from "./MiniCart.styled";
import Cart from '../Cart';
import Product from '../Cart/Product';
import {oneProduct} from '../../api/oneProduct';
import { connect } from "react-redux";

class MiniCart extends Component {
    static defaultProps = {
        onClick: () => {},
        totalItems: '0',
    };
    render() {
        const { totalItems, totalPrice } = this.props;

        return (
            <>
                <OuterWrapper>
                    <MiniCartNameWrapper>
                        <MiniCartName>
                            My bag.&nbsp;
                        </MiniCartName>
                        <TotalNumberOfItems>
                            {totalItems}&nbsp;
                        </TotalNumberOfItems>
                        <ItemWord>
                            {totalItems === 1 ? 'item' : 'items'}
                        </ItemWord>
                    </MiniCartNameWrapper>
                    <Product product={oneProduct}/>
                    <TotalPriceWrapper>
                        <Total>
                            Total
                        </Total>
                        <Price>
                            {totalPrice}
                        </Price>
                    </TotalPriceWrapper>
                </OuterWrapper>
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
    totalItems: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
    
});
const mapDispatchToProps = (dispatch) => ({
    // open: () => {
    //     dispatch(openCartOverlay());
    // },
    // close: () => {
    //     dispatch(closeCartOverlay());
    // },
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);