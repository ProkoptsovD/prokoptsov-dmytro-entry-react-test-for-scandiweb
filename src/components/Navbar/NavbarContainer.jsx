import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { fetchAllCategories } from "../../redux/thunks/fetchAllCategories";

class NavbarContainer extends React.Component {
    render() {
        return (
            <Navbar {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.category.categories,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);