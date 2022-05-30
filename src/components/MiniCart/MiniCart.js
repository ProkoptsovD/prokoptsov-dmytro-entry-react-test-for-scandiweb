import React, {Component} from "react";
import PropTypes from 'prop-types';
import { CheckOutButton, ViewBagButton, CartStyles, OuterWrapper, MiniCartNameWrapper, MiniCartName, TotalNumberOfItems, ItemWord, TotalPriceWrapper, Total, Price } from "./MiniCart.styled";
import Product from '../Cart/Product';
import { connect } from "react-redux";
import { decreaseItemsQuantaty, increaseItemsQuantaty } from "../../redux/actions/actions";

class MiniCart extends Component {
    static defaultProps = {
        itemsTotal: 0,
    };
    increaseQuantaty = (id) => {
        const { increase } = this.props;
        increase(id);
    };
    decreaseQuantaty = (id) => {
        const { decrease } = this.props;
        decrease(id);
    }
    renderAddedProducts = () => {
        const { addedProducts, disable , currency } = this.props;

        return addedProducts.map(({ product, selectedOptions, quantaty }) => {
            const increaseQuantatyBinded = this.increaseQuantaty.bind(this, product.id);
            const decreaseQuantatyBinded = this.decreaseQuantaty.bind(this, product.id);

            return (
                <Product 
                    key={product.id}
                    product={product}
                    disabled={disable}
                    selectedOptions={selectedOptions}
                    small={true}
                    quantaty={quantaty}
                    currency={currency}
                    increaseQuantaty={increaseQuantatyBinded}
                    decreaseQuantaty={decreaseQuantatyBinded}
                />
            )
        });
    };
    render() {
        const { itemsTotal } = this.props;

        return (
            <>
                <OuterWrapper>
                    <MiniCartNameWrapper>
                        <MiniCartName>
                            My bag.&nbsp;
                        </MiniCartName>
                        <TotalNumberOfItems>
                            {itemsTotal}&nbsp;
                        </TotalNumberOfItems>
                        <ItemWord>
                            {itemsTotal === 1 ? 'item' : 'items'}
                        </ItemWord>
                    </MiniCartNameWrapper>
                    {this.renderAddedProducts()}
                    <TotalPriceWrapper>
                        <Total>
                            Total
                        </Total>
                        {/* <Price>
                            {totalPrice}
                        </Price> */}
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
    children: PropTypes.node,
    itemsTotal: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    itemsTotal: state.cart.itemsTotal,
    addedProducts: state.cart.items,
    disable: state.cart.disableOptionsButtons.miniCart,
    currency: state.currency.actualCurrency.index,
});
const mapDispatchToProps = (dispatch) => ({
    increase: (id) => {
        dispatch(increaseItemsQuantaty(id));
    },
    decrease: (id) => {
        dispatch(decreaseItemsQuantaty(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);