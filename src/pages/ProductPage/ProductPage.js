import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "../../hoc/withRouter";
import { getProductByIdThunk } from "../../redux/thunks/getProductByIdThunk";
import Section from "../../components/common/Section";
import ProductCard from "../../components/ProductCard/";
import { clearProductPage } from "../../redux/actions/actions";

class ProductPage extends Component {
    componentDidMount() {
        const { getProduct, router: { params : { id } } } = this.props;
        getProduct(id);
    };
    componentWillUnmount() {
        const { clearPage } = this.props;
        clearPage();
    };
    render() {
        const { product, disabled } = this.props;

        return (
            <Section>
                {product && <ProductCard product={product} disabled={disabled}/>}
            </Section>
        )
    };
}

const mapStateToProps = (state) => ({
    product: state.productPage.product,
    disabled: state.cart.disableOptionsButtons.productCard,
});
const mapDispatchToProps = (dispatch) => ({
    getProduct: (id) => {
        dispatch(getProductByIdThunk(id));
    },
    clearPage: () => {
        dispatch(clearProductPage());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage));