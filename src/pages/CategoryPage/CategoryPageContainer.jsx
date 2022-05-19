import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CategoryPage from "./CategoryPage";

class CategoryPageContainer extends React.Component {
    render() {
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