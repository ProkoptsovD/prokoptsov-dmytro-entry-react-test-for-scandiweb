import React from "react";
import { connect } from "react-redux";
import { initCurrentCategory } from "../../redux/actions/actions";
import { fetchCategoryByName } from "../../redux/thunks/fetchCategoryByName";
import CategoryPage from "./CategoryPage";

class CategoryPageContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.category);
    }
    render() {
        return (
            <CategoryPage {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => ({
    currentPage: state.category.currentPage,
    currency: state.currency.actualCurrency,
    products: state.category.products,
})
const mapDispatchToProps = (dispatch) => ({
    setCategoryProducts: (categoryName) => {
        dispatch(fetchCategoryByName(categoryName));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPageContainer);