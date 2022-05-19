import React from 'react';
import { connect } from 'react-redux';
import {fetchDataToInitApp} from '../../redux/thunks/fetchDataToInitApp'
import App from '../../App';

class AppContainer extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getDataToInitApp(this.props.categorybyDefault);
    }
	render() {
		return (
            <App {...this.props}/>
		);
	}
}
const mapStateToProps = (state) => {
    return {
        categorybyDefault: state.initial.default.category,
        categories: state.initial.categories,
        currencies: state.initial.currencies,
    }
}
const mapDispatchToProps = (dispatch) => ({
    getDataToInitApp: (category) => {
        dispatch(fetchDataToInitApp(category))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
