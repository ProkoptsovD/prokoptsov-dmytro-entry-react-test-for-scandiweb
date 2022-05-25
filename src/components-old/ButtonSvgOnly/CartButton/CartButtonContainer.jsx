import React from "react";
import { connect } from "react-redux";
import { addItemToCart, sumTotalPrice } from "../../../redux/actions/actions";
import CartButton from "./CartButton";

class CartButtonContainer extends React.Component {
    render() {
        return (
            <CartButton {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => ({
    allProducts: state.category.products,
    actualCurrency: state.currency.actualCurrency,
})
const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => {
        dispatch(addItemToCart(item));
    },
    sumTotalPriceInCart: () => {
        dispatch(sumTotalPrice());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(CartButtonContainer);