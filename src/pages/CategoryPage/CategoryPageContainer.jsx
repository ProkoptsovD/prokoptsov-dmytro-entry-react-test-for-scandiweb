import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
withRouter(CategoryPageContainer);
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPageContainer);