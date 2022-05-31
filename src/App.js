import { Component, Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {ReactComponent as Logo} from './icons/logo.svg';

import Actionbar from './components/Header/Actionbar';
import Header from './components/Header';
import CurrencySwitcher from './components/Header/CurrencySwitcher';
import MiniCartButton from './components/MiniCart/MiniCartButton';
import Navbar from './components/Header/Navbar/';
import Overlay from './components/Overlay/';
import MiniCart from './components/MiniCart/';
import CategoryPage from './pages/CategoryPage/';

import './App.css';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { productAPI } from './services/product-api';
import { connect } from 'react-redux';
import { initAppThunk } from './redux/thunks/initAppThunk';
import { generateHash } from './helpers/generateHash';

class App extends Component {
	renderRoutes = () => {
		const { categories } = this.props;
		
		return categories.map(({ name }) => {
			return (
				<Fragment key={generateHash()}>
					<Route
						path={`/${name}/:id`}
						element={<ProductPage key={name} categoryName={name} />}
					/>
					<Route
						path={`/${name}/`}
						element={<CategoryPage key={name} categoryName={name} />}
					/>
				</Fragment>)
		});
	}
	componentDidMount () {
		this.props.initApp();
	}
	render() {
		const { categories, isOverlayOpened, itemsCount } = this.props;

		return (
			<>
				<Header>
					<Navbar tabList={categories}/>
					<Logo />
					<Actionbar>
						<CurrencySwitcher />
						<MiniCartButton itemsCount={itemsCount}/>
					</Actionbar>
				</Header>
				<main>
					<Routes>
						{this.renderRoutes()}
						<Route path='/' element={<Navigate to="/all" replace={true}/>} />
					</Routes>
					{/* <CartPage /> */}
				</main>

				{
					isOverlayOpened && <Overlay>
										<MiniCart />
									</Overlay>
				}
			</>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        categories: state.initial.categories,
        currencies: state.initial.currencies,
        itemsCount: state.cart.itemsTotal,
        isMiniCartOpened: state.cartOverlay.isOpened,
		isOverlayOpened: state.cartOverlay.isOpened,
    }
}
const mapDispatchToProps = (dispatch) => ({
    initApp: () => {
        dispatch(initAppThunk())
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
