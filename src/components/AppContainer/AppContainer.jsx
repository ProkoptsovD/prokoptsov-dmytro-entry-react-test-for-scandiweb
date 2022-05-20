import React from 'react';
import { connect } from 'react-redux';
import {initAppThunk} from '../../redux/thunks/initAppThunk'
import App from '../../App';

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.initApp();
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
    initApp: () => {
        dispatch(initAppThunk())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
