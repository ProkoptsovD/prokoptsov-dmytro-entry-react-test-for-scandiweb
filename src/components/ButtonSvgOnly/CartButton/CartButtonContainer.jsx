import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../../redux/actions/actions";
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
})
const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => {
        dispatch(addItemToCart(item));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(CartButtonContainer);