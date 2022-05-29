import React from 'react';
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
import {product} from './api/product';
import Gallery from './components/Gallery/Gallery';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { productAPI } from './services/product-api';
import { connect } from 'react-redux';
import { initAppThunk } from './redux/thunks/initAppThunk';

class App extends React.Component {
	renderRoutes = () => {
		const { categories } = this.props;
		
		return categories.map(({ name }) => 
			<Route
				key={name}
				path={`/${name}`}
				element={<CategoryPage key={name} id={name} />}
			/>);
	}
	componentDidMount () {
		this.props.initApp();
	}
	render() {
		const { categories, currencies } = this.props;

		return (
			<>
				<Header>
					<Navbar tabList={categories}/>
					<Logo />
					<Actionbar>
						<CurrencySwitcher currencyList={currencies}/>
						<MiniCartButton itemsCount={'0'}/>
					</Actionbar>
				</Header>
				<main>
					<Routes>
						{/* <Route path='/all'
							element={<CategoryPage 
											categoryName={'all'}
											productList={product}/>}
						/>
						<Route path='/clothes'
							element={<CategoryPage 
											categoryName={'clothes'}
											productList={product}/>}
						/>
						<Route path='/tech'
							element={<CategoryPage 
											categoryName={'tech'}
											productList={product}/>}
						/> */}
						<Route path='/' element={<Navigate to="/all" replace={true}/>} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
					{/* <CartPage /> */}
				</main>

				{null && <Overlay>
							<MiniCart />
						</Overlay>}
			</>
		)
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
    // openMiniCart: () => {
    //     dispatch(openCartOverlay());
    // },
    // closeMiniCart: () => {
    //     dispatch(closeCartOverlay());
    // }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
