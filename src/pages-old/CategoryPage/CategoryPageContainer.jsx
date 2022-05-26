import React from "react";
import { connect } from "react-redux";
import { initCurrentCategory } from "../../redux/actions/actions";
import { setProductsToPageThunk } from "../../redux/thunks/setProductToPageThunk";
import CategoryPage from "./CategoryPage";
import { withRouter } from '../../hoc/withRouter';

class CategoryPageContainer extends React.Component {
    componentDidMount() {
        const categoryName = this.props.router.location.pathname.slice(1);
        this.props.setProductsToPage(categoryName);
    }
    render() {
        return (
            <CategoryPage key={this.props.id} {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => ({
    currency: state.currency.actualCurrency,
    products: state.category.products,
    isMiniCartOpened: state.cartOverlay.isOpened,
})
const mapDispatchToProps = (dispatch) => ({
    setProductsToPage: (categoryName) => {
        dispatch(setProductsToPageThunk(categoryName));
    },
        initCurrentCategory: (currentPage) => {
        dispatch(initCurrentCategory(currentPage));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryPageContainer));