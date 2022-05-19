import React from "react";
import { connect } from "react-redux";
import CategoryPage from "./CategoryPage";

class CategoryPageContainer extends React.Component {
    render() {
        console.log(this.props);
        return (
            <CategoryPage {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => ({
    categoryByDefault: state.initial.default.category,
})
const mapDispatchToProps = (dispatch) => {

}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPageContainer);