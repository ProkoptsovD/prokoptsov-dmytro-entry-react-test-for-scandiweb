import React from 'react';
import { connect } from 'react-redux';
import {initAppThunk} from '../../redux/thunks/initAppThunk'
import App from '../../App';
import { closeCartOverlay, openCartOverlay } from '../../redux/actions/actions';

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
        cart: state.cart,
        isMiniCartOpened: state.cartOverlay.isOpened,
    }
}
const mapDispatchToProps = (dispatch) => ({
    initApp: () => {
        dispatch(initAppThunk())
    },
    openMiniCart: () => {
        dispatch(openCartOverlay());
    },
    closeMiniCart: () => {
        dispatch(closeCartOverlay());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
