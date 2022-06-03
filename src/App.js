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
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { connect } from 'react-redux';
import { initAppThunk } from './redux/thunks/initAppThunk';
import { generateHash } from './helpers/generateHash';
import Toaster from './components/Toaster/Toaster';
import Cart from './components/Cart/Cart';

class App extends Component {
	state = {
		cart: {
		}
	}
	componentDidMount () {
		this.props.initApp();
		this.setState({})
	}
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
	render() {
		const { categories, isOverlayOpened, itemsCount, toastList } = this.props;
		const isThereAnyToast = toastList.length !== 0;

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
						<Route path='/cart' element={<CartPage title="Cart"/>} />
						<Route path='/' element={<Navigate to="/all" replace={true}/>} />
					</Routes>
				</main>
				{
					isThereAnyToast
						? <Toaster toastList={toastList} delay={2000}/>
						: null
				}
				{
					isOverlayOpened ?   <Overlay>
											<Cart
												cartType="mini"
												galleryType="mini"
												optionPickerType="mini"
												quantatyPanelType="mini"
												productCardType="mini"
											/>
										</Overlay>
									: 	null
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
		isOverlayOpened: state.overlay.isOpened,
		toastList: state.toast.toastList,
    }
}
const mapDispatchToProps = (dispatch) => ({
    initApp: () => {
        dispatch(initAppThunk())
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
